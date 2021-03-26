import Header from '../components/Header.js';
import Main from '../components/Main.js';
import Footer from '../components/Footer.js';
import PopupWithForm from '../components/PopupWithForm.js';
import React from 'react';
import ImagePopup from '../components/ImagePopup.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js'
import api from "../utils/api.js";
import AddPlacePopup from './AddPlacePopup.js';

function App() {
    const [isEditAvatarFormOpened, setIsEditAvatarFormOpened] = React.useState(false);
    const [isAddPlaceFormOpened, setIsAddPlaceFormOpened] = React.useState(false);
    const [isEditProfileFormOpened, setIsEditProfileFormOpened] = React.useState(false);
    const [isConfimDeleteFormOpened, setIsConfimDeleteFormOpened] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState({});
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

    function handleUserProfileSubmit(input) {
        api
            .sendUserInfo(input)
            .then((res) => {
                setCurrentUser(res);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(`ошибка ${err}`);
            })
    }

    function handleUserAvatarSubmit(input) {
        console.log(input)
        api
            .updateAvatar(input)
            .then((res) => {
                setCurrentUser(res);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(`ошибка ${err}`);
            })
    }

    function handleAddPlaceSubmit(input) {
        api
            .addCard(input)
            .then((res) => {
                setCard([res, ...card]);
                closeAllPopups();;
            })
            .catch((err) => {
                console.log(`ошибка ${err}`);
            })          
    }

    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser.id);
        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
            setCard((state) => state.map((c) => (c._id === card._id ? newCard : c)));
        })
            .catch((err) => {
                console.log(`ошибка ${err}`);
            })
    }

    function handleCardDelete(card) {
        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.deleteCard(card._id).then(() => {
            setCard((state) => state.filter((c) => (c._id !== card._id)));
        })
            .catch((err) => {
                console.log(`ошибка ${err}`);
            })
    }


    React.useEffect(() => {
        handleUserData();
        drawCard();
    }, []);

    const handleUserData = () => {
        api
            .getUserInfo()
            .then((data) => {
                setCurrentUser({ name: data.name, about: data.about, avatar: data.avatar, id: data._id });
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
            .catch((err) => {
                console.log(`ошибка ${err}`);
            })
    }

    return (
        <>
            <CurrentUserContext.Provider value={currentUser}>
                <Header />

                <Main card={card} onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={setSelectedCard} onCardDelete={handleCardDelete} onCardLike={handleCardLike} />

                <Footer />

                <PopupWithForm name='confim' title='Вы уверены?' submitText='Да' isOpened={isConfimDeleteFormOpened} onClose={closeAllPopups} />

                <ImagePopup card={selectedCard} onClose={closeAllPopups} />

                <EditProfilePopup isOpened={isEditProfileFormOpened} onClose={closeAllPopups} onUpdateUser={handleUserProfileSubmit} />

                <EditAvatarPopup isOpened={isEditAvatarFormOpened} onClose={closeAllPopups} onUpdateAvatar={handleUserAvatarSubmit} />

                <AddPlacePopup isOpened={isAddPlaceFormOpened} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>

            </CurrentUserContext.Provider>
        </>
    );
}

export default App;