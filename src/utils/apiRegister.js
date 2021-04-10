class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  registerUser(registerData) {
    return fetch(`${this._url}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        password: registerData.password,
        email: registerData.email,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      if (res.status === 400) {
        return Promise.reject(`Что-то не так с полями ввода`);
      }
    });
  }

  loginUser(loginData) {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        password: loginData.password,
        email: loginData.email,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      if (res.status === 400) {
        return Promise.reject(`ошибка в поле ввода`);
      }
      if (res.status === 401) {
        return Promise.reject(`email не найден`);
      }
    });
  }
  checkToken(token) {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      if (res.status === 400) {
        return Promise.reject(`ошибка в поле ввода`);
      }
      if (res.status === 401) {
        return Promise.reject(`email не найден`);
      }
    });
  }
}

const apiRegister = new Api({
  url: "https://auth.nomoreparties.co",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiRegister;
