import React from 'react';
import {useHistory} from 'react-router-dom';

function NewDeckInput({submitFunction, deck={},nameChanger,descriptionChanger}){
    
    const history = useHistory();

    function deckName(){
        return deck.name ? deck.name : "";
    }

    function deckDesc(){
        return deck.description ? deck.description : "";
    }

    return (
        <form>
            <div class="form-group">
                <label for="DeckNameInput">Deck Name</label>
                <input
                type="text"
                class="form-control"
                id="DeckNameInput"
                value={deckName()}
                onChange={nameChanger}>

                </input>
            </div> 
            <div class="form-group">
                <label for="DeckDescriptionInput">Deck Description</label>
                <textarea
                    class="form-control"
                    id="DeckDescriptionInput"
                    rows="4"
                    value={deckDesc()}>

                    </textarea>

            </div>
            <button 
                className="btn btn-secondary"
                type="button"
                onClick={()=>history.go(-1)}
            >
                Cancel
            </button>
            <button
                className="btn btn-primary"
                type="submit"
                onClick={submitFunction}
            >
                Submit
            </button>
                
        </form>
    )

};

export default NewDeckInput;