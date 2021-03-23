import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import Card from "./Card.js"
import api from "../utils/Api.js";

function Main(props) {

    const currentUser = React.useContext(CurrentUserContext);
    
    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser.id);
        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
            props.onCardArray((state) => state.map((c) => (c._id === card._id ? newCard : c)));
        })
        .catch((err)=>{
            console.log(`ошибка ${err}`);
        })
    }

    function handleCardDelete(card) {
        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.deleteCard(card._id).then(() => {
            props.onCardArray((state) => state.filter((c) => (c._id !== card._id)));
        })
        .catch((err)=>{
            console.log(`ошибка ${err}`);
        })
    }

    return (
        <main className="container">

            <section className="profile">
                <div className="profile__avatar-place">
                    <img className="profile__avatar" alt="Аватар" src={currentUser.avatar} />
                    <div className="profile__avatar-button" onClick={props.onEditAvatar} />
                </div>
                <div className="profile__info">
                    <div className="profile__title-box">
                        <h1 className="profile__title">{currentUser.name}</h1>
                        <button type="button" aria-label="редактирование" className="profile__edit-button" onClick={props.onEditProfile} />
                    </div>
                    <p className="profile__subtitle">{currentUser.about}</p>
                </div>
                <button type="button" aria-label="добавить" className="profile__add-button" onClick={props.onAddPlace} />
            </section>


            <section className="elements">
                {
                    props.card.map((item, i) =>
                        <Card
                            card={item}
                            currentUser={currentUser}
                            onCardClick={props.onCardClick}
                            onCardLike={handleCardLike}
                            onCardDelete={handleCardDelete}
                            key={i}
                        />
                    )
                }
            </section>

        </main>
    )
}

export default Main