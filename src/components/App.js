import Header from '../components/Header.js';
import Main from '../components/Main.js';
import Footer from '../components/Footer.js';
import PopupWithForm from '../components/PopupWithForm.js';
import React from 'react';
import ImagePopup from '../components/ImagePopup.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import api from "../utils/Api.js";

function App() {
    const [isEditAvatarFormOpened, setIsEditAvatarFormOpened] = React.useState(false);
    const [isAddPlaceFormOpened, setIsAddPlaceFormOpened] = React.useState(false);
    const [isEditProfileFormOpened, setIsEditProfileFormOpened] = React.useState(false);
    const [isConfimDeleteFormOpened, setIsConfimDeleteFormOpened] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState([]);
    const [card, setCard] = React.useState([]);

    function handleEditAvatarClick() {
        setIsEditAvatarFormOpened(true);
    }
    function handleAddPlaceClick() {
        setIsAddPlaceFormOpened(true);
    }
    function handleEditProfileClick() {
        setIsEditProfileFormOpened(true);
    }

    function closeAllPopups() {
        setIsEditAvatarFormOpened(false);
        setIsAddPlaceFormOpened(false);
        setIsEditProfileFormOpened(false);
        setIsConfimDeleteFormOpened(false);
        setSelectedCard(false);
    }

    /* function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser.id);
        console.log(card)
        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
            setCard((state) => state.map((c) => (c._id === card._id ? newCard : c)));
        })
        .catch((err)=>{
            console.log(`ошибка ${err}`);
        })
    } */

    React.useEffect(() => {
        handleUserData();
        drawCard();
    }, []);

    const handleUserData = () => {
        api
            .getUserInfo()
            .then((data) => {
                setCurrentUser({ name: data.name, about: data.about, avatar: data.avatar, id: data._id });
                /* console.log(data[0]) */
            })
            .catch((err) => {
                console.log(`ошибка ${err}`);
            })
    }

    const drawCard = () => {
        api
            .initialCard()
            .then(data => {
                const cards = data.map(item => {
                    /* console.log(data[0]) */
                    return {
                        name: item.name,
                        link: item.link,
                        likes: item.likes,
                        _id: item._id,
                        owner: item.owner
                    }
                })
                setCard(cards)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <CurrentUserContext.Provider value={currentUser}>
                <Header />

                <Main card={card} onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={setSelectedCard} onCardArray={setCard} />

                <Footer />

                <PopupWithForm name='title' title='Редактировать профиль' submitText='Сохранить' isOpened={isEditProfileFormOpened} onClose={closeAllPopups}>
                    <input name="name" type="text" id="name-title" placeholder='Ваше Имя' className="popup__field popup__field_value_name" minLength="2" maxLength="40" required noValidate />
                    <span id="name-title-error" className="popup__error" />
                    <input name="about" type="text" id="job-title" placeholder='Коротко о себе' className="popup__field popup__field_value_job" minLength="2" maxLength="200" required noValidate />
                    <span id="job-title-error" className="popup__error" />
                </PopupWithForm>

                <PopupWithForm name='element' title='Новое место' submitText='Сохранить' isOpened={isAddPlaceFormOpened} onClose={closeAllPopups}>
                    <input name="name" type="text" id="name-element" placeholder="Название" className="popup__field popup__field_value_title" minLength="2" maxLength="30" required noValidate />
                    <span id="name-element-error" className="popup__error" />
                    <input name="link" type="url" id="link-element" placeholder="ссылка на картинку" className="popup__field popup__field_value_link" required noValidate />
                    <span id="link-element-error" className="popup__error" />
                </PopupWithForm>

                <PopupWithForm name='avatar-update' title='Обновить аватар' submitText='Сохранить' isOpened={isEditAvatarFormOpened} onClose={closeAllPopups}>
                    <input name="avatar" type="url" id="avatar-link" placeholder="ссылка на аватар" className="popup__field popup__field_value_avatar-link" required noValidate />
                    <span id="avatar-link-error" className="popup__error" />
                </PopupWithForm>

                <PopupWithForm name='confim' title='Вы уверены?' submitText='Да' isOpened={isConfimDeleteFormOpened} onClose={closeAllPopups} />

                <ImagePopup card={selectedCard} onClose={closeAllPopups} />
                <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
            </CurrentUserContext.Provider>

        </>
    );
}

export default App;