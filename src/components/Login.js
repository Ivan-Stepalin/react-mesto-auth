import { withRouter } from 'react-router-dom';

function Login() {
    return (
        <div className="sign">
            <h2 className="sign__title">Вход</h2>
            <form className="sign-form">
                <input className="sign__input" type="email" placeholder="Email"/>
                <input className="sign__input" type="password" placeholder="Пароль"/>
                <button className="sign__button" type='submit'>Войти</button>
            </form>
        </div>
    )
}

export default withRouter(Login)