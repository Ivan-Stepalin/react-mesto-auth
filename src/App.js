

function App() {
  return (
    <body className="background">
    
    <header className="header">
    </header>

    <main className="container">
        
        <section className="profile">
            <div  className="profile__avatar-place">
                <img className="profile__avatar" alt="Аватар" src="<%=require('./images/avatar.jpg')%>"/>
                <div  className="profile__avatar-button"></div>
            </div>
            <div className="profile__info">
                <div className="profile__title-box">
                    <h1 className="profile__title">Жак-Ив Кусто</h1>
                    <button type="button" aria-label="редактирование" className="profile__edit-button">
                    </button>     
                </div>
                <p className="profile__subtitle">Исследователь океана</p>
            </div>
            <button type="button" aria-label="добавить" className="profile__add-button"></button>
        </section>

 
        <section className="elements">
        </section>
          
    </main>
    <footer className="footer">
        <p className="footer__text">© 2020 Mesto Russia</p>
    </footer>

    <div className="popup popup_title">
        <form className="popup__form popup__form_title">
            <button type="button" aria-label="закрыть" className="popup__close-icon"></button>
            <h2 className="popup__name">
                Редактировать профиль
            </h2>
            <div className="popup__input-box">
                <input name="name" type="text" id="name-title" placeholder='Ваше Имя'  className="popup__field popup__field_value_name" minlength="2" maxlength="40" required novalidate/>
                <span id="name-title-error" className="popup__error"></span>
                <input name="about" type="text" id="job-title"  placeholder='Коротко о себе' className="popup__field popup__field_value_job" minlength="2" maxlength="200" required novalidate/>
                <span id="job-title-error" className="popup__error"></span>
            </div>
            <button type="submit" className="popup__submit-button">Сохранить</button>
        </form>       
    </div>

    <div className="popup popup_element">
        <form className="popup__form popup__form_element">
            <button type="button" aria-label="закрыть" className="popup__close-icon"></button>
            <h2 className="popup__name">
                Новое место
            </h2>
            <div className="popup__input-box">
                <input name="name" type="text" id="name-element" placeholder="Название" className="popup__field popup__field_value_title" minlength="2" maxlength="30" required novalidate/>
                <span id="name-element-error" className="popup__error"></span>
                <input name="link" type="url" id="link-element" placeholder="ссылка на картинку" className="popup__field popup__field_value_link" required novalidate/>
                <span id="link-element-error" className="popup__error"></span>
            </div>
            <button type="submit" className="popup__submit-button">Сохранить</button>
        </form>       
    </div>

    <div className="popup popup_image">
        <div className="popup__box">
            <button type="button" aria-label="закрыть" className="popup__close-icon"></button>
            <img className="popup__image" alt=" " src=" "/>
            <h2 className="popup__image-name">1</h2>
        </div>    
    </div>

    <div className="popup popup_confim">
        <form className="popup__form popup__form_confim">
            <button type="button" aria-label="закрыть" className="popup__close-icon"></button>
            <h2 className="popup__name">
                Вы уверены?
            </h2>
            <button type="submit" className="popup__submit-button">Да</button>
        </form>       
    </div>

    <div className="popup popup_avatar-update">
        <form className="popup__form popup__form_avatar-update">
            <button type="button" aria-label="закрыть" className="popup__close-icon"></button>
            <h2 className="popup__name">
                Обновить аватар
            </h2>
            <div className="popup__input-box">
                <input name="avatar" type="url" id="avatar-link" placeholder="ссылка на аватар" className="popup__field popup__field_value_avatar-link" required novalidate/>
                <span id="avatar-link-error" className="popup__error"></span>
            </div>
            <button type="submit" className="popup__submit-button">Сохранить</button>
        </form>       
    </div>

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

</body>
  );
}

export default App;
