function Main(props) {   
    return(
        <main className="container">
            
            <section className="profile">
                <div  className="profile__avatar-place">
                    <img className="profile__avatar" alt="Аватар" src="<%=require('./images/avatar.jpg')%>"/>
                    <div  className="profile__avatar-button" onClick={props.EditAvatarClick}></div>
                </div>
                <div className="profile__info">
                    <div className="profile__title-box">
                        <h1 className="profile__title">Жак-Ив Кусто</h1>
                        <button type="button" aria-label="редактирование" className="profile__edit-button" onClick={props.EditProfileClick}>
                        </button>     
                    </div>
                    <p className="profile__subtitle">Исследователь океана</p>
                </div>
                <button type="button" aria-label="добавить" className="profile__add-button" onClick={props.AddPlaceClick}></button>
            </section>

    
            <section className="elements">
            </section>
            
        </main>
    )
}

export default Main