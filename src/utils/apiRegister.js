class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  registerUser(registerData, handleinfo) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        "password": registerData.password,
        "email": registerData.email
      })
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        handleinfo();
        if (res.status === 400) return Promise.reject(`Что-то не так с полями ввода`);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

const apiRegister = new Api({
  url: "https://mesto.nomoreparties.co",
  headers: {
    "Content-Type": "application/json"
  }
});

export default apiRegister;