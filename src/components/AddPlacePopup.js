import React from 'react';
import PopupWithForm from '../components/PopupWithForm.js';

function AddPlacePopup(props) {
    const [name, setName] = React.useState(``);
    const [link, setLink] = React.useState(``);

    function buttonState() {
        if ((name.length > 2) && (link.includes(`https//`))) {
            return true
        } else { return false };
    }

    console.log(name.length > 2);
    console.log(link.includes(`https//`));
    console.log(buttonState())

    function handleState() {
        return (buttonState() ? `` : `popup__submit-button_state_invalid`)
    }

    function handleAddName(evt) {
        setName(evt.target.value);
    }

    function handleAddLink(evt) {
        setLink(evt.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onAddPlace({
            name,
            link
        });
    }

    return (
        <PopupWithForm name='element' title='Новое место' submitText='Сохранить' isOpened={props.isOpened} onClose={props.onClose} onSubmit={handleSubmit} submitButtonState={handleState()}>
            <input value={name || ``} onChange={handleAddName} name="name" type="text" id="name-element" placeholder="Название" className="popup__field popup__field_value_title" minLength="2" maxLength="30" required noValidate />
            <span id="name-element-error" className="popup__error" />
            <input value={link || ``} onChange={handleAddLink} name="link" type="url" id="link-element" placeholder="ссылка на картинку" className="popup__field popup__field_value_link" required noValidate />
            <span id="link-element-error" className="popup__error" />
        </PopupWithForm>
    )
}

export default AddPlacePopup;