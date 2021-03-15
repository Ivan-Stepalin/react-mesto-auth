import React from "react";
import api from "../utils/Api.js";
import Card from "./Card.js"
function Main(props) {   
    const [userName, setUserName] = React.useState([]);
    const [userDescription, setUserDescription] = React.useState([]);
    const [userAvatar, setUserAvatar] = React.useState([]);
    const [card, setCard] = React.useState([]);

    React.useEffect(()=> {
        drawCard()  
        handleUserData()
    }, []);
    const drawCard = () => {
        api
        .initialCard()
        .then(data => {
            const cards = data.map(item =>{
                return {
                    name: item.name,
                    link: item.link,
                    likes: item.likes.length,
                    key: item._id
                }
            })
            setCard(cards);
        })
        .catch(err=> console.log(err))
    }

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
                    <div  className="profile__avatar-button" onClick={props.onEditAvatar}/>
                </div>
                <div className="profile__info">
                    <div className="profile__title-box">
                        <h1 className="profile__title">{userName}</h1>
                        <button type="button" aria-label="редактирование" className="profile__edit-button" onClick={props.onEditProfile}/>    
                    </div>
                    <p className="profile__subtitle">{userDescription}</p>
                </div>
                <button type="button" aria-label="добавить" className="profile__add-button" onClick={props.onAddPlace}/>
            </section>


            <section className="elements">
                {
                    card.map((item) =>
                        <Card
                            card={item}
                            onCardClick={props.onCardClick}
                            key={item.key}
                        />)
                }
            </section>
            
        </main>
    )
}

export default Main