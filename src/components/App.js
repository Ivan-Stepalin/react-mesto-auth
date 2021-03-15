import Header from '../components/Header.js';
import Main from '../components/Main.js';
import Footer from '../components/Footer.js';
import PopupWithForm from '../components/PopupWithForm.js';
import React from 'react';
import ImagePopup from '../components/ImagePopup.js';

function App() {
    const [isEditAvatarFormOpened, setIsEditAvatarFormOpened] = React.useState(false);
    const [isAddPlaceFormOpened, setIsAddPlaceFormOpened] = React.useState(false);
    const [isEditProfileFormOpened, setIsEditProfileFormOpened] = React.useState(false); 
    const [isConfimDeleteFormOpened, setIsConfimDeleteFormOpened] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(false);

    function handleEditAvatarClick(){
        setIsEditAvatarFormOpened(true);
    }
    function handleAddPlaceClick(){
        setIsAddPlaceFormOpened(true);
    }
    function handleEditProfileClick(){
        setIsEditProfileFormOpened(true);
    }
    function handleConfimDeleteForm(){
        setIsConfimDeleteFormOpened(true);
    }
    function closeAllPopups(){
        setIsEditAvatarFormOpened(false);
        setIsAddPlaceFormOpened(false);
        setIsEditProfileFormOpened(false);
        setIsConfimDeleteFormOpened(false);
        setSelectedCard(false);
    }
    
    return (
    <>
        <Header />

        <Main 
         EditAvatarClick={handleEditAvatarClick}
         EditProfileClick={handleEditProfileClick}
         AddPlaceClick={handleAddPlaceClick}
         onCardClick={setSelectedCard}
         />

        <Footer />
        
        <PopupWithForm 
            name = 'title'
            title = 'Редактировать профиль'
            submitText = 'Сохранить'
            isOpened = {isEditProfileFormOpened}
            onClose = {closeAllPopups}
        >
            <input name="name" type="text" id="name-title" placeholder='Ваше Имя'  className="popup__field popup__field_value_name" minLength="2" maxLength="40" required noValidate/>
            <span id="name-title-error" className="popup__error"></span>
            <input name="about" type="text" id="job-title"  placeholder='Коротко о себе' className="popup__field popup__field_value_job" minLength="2" maxLength="200" required noValidate/>                <span id="job-title-error" className="popup__error"></span>
        </PopupWithForm>
        
        <PopupWithForm 
            name = 'element'
            title = 'Новое место'
            submitText = 'Сохранить'
            isOpened = {isAddPlaceFormOpened}
            onClose = {closeAllPopups}
        >
            <input name="name" type="text" id="name-element" placeholder="Название" className="popup__field popup__field_value_title" minLength="2" maxLength="30" required noValidate/>
            <span id="name-element-error" className="popup__error"></span>
            <input name="link" type="url" id="link-element" placeholder="ссылка на картинку" className="popup__field popup__field_value_link" required noValidate/>
            <span id="link-element-error" className="popup__error"></span>
        </PopupWithForm>

        <PopupWithForm 
            name = 'avatar-update'
            title = 'Обновить аватар'
            submitText = 'Сохранить'
            isOpened = {isEditAvatarFormOpened}
            onClose = {closeAllPopups}
        >
            <input name="avatar" type="url" id="avatar-link" placeholder="ссылка на аватар" className="popup__field popup__field_value_avatar-link" required noValidate/>
            <span id="avatar-link-error" className="popup__error"></span>
        </PopupWithForm>

        <PopupWithForm 
            name = 'confim'
            title = 'Вы уверены?'
            submitText = 'Да'
            isOpened = {isConfimDeleteFormOpened}
            onClose = {closeAllPopups}
        />

        <ImagePopup 
            card = {selectedCard}
            onClose = {closeAllPopups}         
        />
    </>
  );
}

export default App;