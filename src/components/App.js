import Header from '../components/Header.js';
import Main from '../components/Main.js';
import Footer from '../components/Footer.js';
import PopupWithForm from '../components/PopupWithForm.js';
import React from 'react';

function App() {
    const [isEditAvatarFormOpened, setIsEditAvatarFormOpened] = React.useState(false);
    const [isAddPlaceFormOpened, setIsAddPlaceFormOpened] = React.useState(false);
    const [isEditProfileFormOpened, setIsEditProfileFormOpened] = React.useState(false); 
    /* const [isConfimDeleteFormOpened, setIsConfimDeleteFormOpened] = React.useState(false); */
    
    function handleEditAvatarClick(){
        setIsEditAvatarFormOpened(true);
    }
    function handleAddPlaceClick(){
        setIsAddPlaceFormOpened(true);
    }
    function handleEditProfileClick(){
        setIsEditProfileFormOpened(true);
    }
    /* function handleConfimDeleteForm(){
        setIsConfimDeleteFormOpened(true)
    } */
    function closeAllPopups(){
        setIsEditAvatarFormOpened(false);
        setIsAddPlaceFormOpened(false);
        setIsEditProfileFormOpened(false);
    }
    
    return (
    <>
        <Header />

        <Main 
         EditAvatarClick={handleEditAvatarClick}
         EditProfileClick={handleEditProfileClick}
         AddPlaceClick={handleAddPlaceClick}
         />

        <Footer />
        
        <PopupWithForm 
            name = 'title'
            title = 'Редактировать профиль'
            submitText = 'Сохранить'
            isOpened = {isEditProfileFormOpened}
            onClose = {closeAllPopups}
        >
            <input name="name" type="text" id="name-title" placeholder='Ваше Имя'  className="popup__field popup__field_value_name" minlength="2" maxlength="40" required novalidate/>
            <span id="name-title-error" className="popup__error"></span>
            <input name="about" type="text" id="job-title"  placeholder='Коротко о себе' className="popup__field popup__field_value_job" minlength="2" maxlength="200" required novalidate/>                <span id="job-title-error" className="popup__error"></span>
        </PopupWithForm>
        
        <PopupWithForm 
            name = 'element'
            title = 'Новое место'
            submitText = 'Сохранить'
            isOpened = {isAddPlaceFormOpened}
            onClose = {closeAllPopups}
        >
            <input name="name" type="text" id="name-element" placeholder="Название" className="popup__field popup__field_value_title" minlength="2" maxlength="30" required novalidate/>
            <span id="name-element-error" className="popup__error"></span>
            <input name="link" type="url" id="link-element" placeholder="ссылка на картинку" className="popup__field popup__field_value_link" required novalidate/>
            <span id="link-element-error" className="popup__error"></span>
        </PopupWithForm>

        <PopupWithForm 
            name = 'avatar-update'
            title = 'Обновить аватар'
            submitText = 'Сохранить'
            isOpened = {isEditAvatarFormOpened}
            onClose = {closeAllPopups}
        >
            <input name="avatar" type="url" id="avatar-link" placeholder="ссылка на аватар" className="popup__field popup__field_value_avatar-link" required novalidate/>
            <span id="avatar-link-error" className="popup__error"></span>
        </PopupWithForm>

        {/* <PopupWithForm 
            name = 'confim'
            title = 'Вы уверены?'
            submitText = 'Да'
            isOpened = {isConfimDeleteFormOpened}
        /> */}

        <template className="template">
            <article className="element">
                <img className="element__image" alt=" " src=" "/>
                <button type="button" aria-label="корзина" className="element__bracket"></button> 
                <div className="element__box">    
                    <h2 className="element__name" >1</h2>
                    <div className="element__like-box">
                        <button type="button" aria-label="лайк" className="element__group"></button>  
                        <div className="element__group-count"></div>
                    </div>
                </div>      
            </article>
        </template>
    </>
  );
}

export default App;

