function Card(props) {
    
    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <article className="element">
            <img className="element__image" alt={props.name} src={props.card.link} onClick={handleClick}/>
            <button type="button" aria-label="корзина" className="element__bracket"></button>
            <div className="element__box">
                <h2 className="element__name" >{props.card.name}</h2>
                <div className="element__like-box">
                    <button type="button" aria-label="лайк" className="element__group"></button>
                    <div className="element__group-count">{props.card.likes}</div>
                </div>
            </div>
        </article>
    )
}

export default Card