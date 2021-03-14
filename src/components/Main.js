import React from "react";
import api from "../utils/Api.js";

function Main(props) {   
    const [userName, setUserName] = React.useState([]);
    const [userDescription, setUserDescription] = React.useState([]);
    const [userAvatar, setUserAvatar] = React.useState([]);
    
    React.useEffect(()=> {        
        handleUserData()
    }, []);
    
    const handleUserData = () => {
        api
        .getUserInfo()
        .then((data) => {
            setUserName(data.name);
            setUserDescription(data.about);
            setUserAvatar(data.avatar);
        })
        .catch((err)=>{
            console.log(`ошибка ${err}`);
        })
    }

    return(
        <main className="container">
            
            <section className="profile">
                <div  className="profile__avatar-place">
                    <img className="profile__avatar" alt="Аватар" src={userAvatar}/>
                    <div  className="profile__avatar-button" onClick={props.EditAvatarClick}></div>
                </div>
                <div className="profile__info">
                    <div className="profile__title-box">
                        <h1 className="profile__title">{userName}</h1>
                        <button type="button" aria-label="редактирование" className="profile__edit-button" onClick={props.EditProfileClick}>
                        </button>     
                    </div>
                    <p className="profile__subtitle">{userDescription}</p>
                </div>
                <button type="button" aria-label="добавить" className="profile__add-button" onClick={props.AddPlaceClick}></button>
            </section>

    
            <section className="elements">
            </section>
            
        </main>
    )
}

export default Main