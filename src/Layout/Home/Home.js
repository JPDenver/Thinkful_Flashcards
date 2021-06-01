import React,{Fragment} from 'react';
import { Switch,Route } from 'react-router-dom';
import AllDecks from './AllDecks';
import DecksHome from '../../Decks/DecksHome'


function Home({decks}){
    return (
    <Fragment>
        <p>This is the Home Page</p>
        {/* //Will eventually be it's own component */}
        <button>+ Create deck</button>
        <Switch>
            <Route exact path='/'>
                {/* DeckList Component Here */}
                <AllDecks decks={decks}/>
            </Route>
            <Route path='/decks'>
                <DecksHome decks={decks}/>
            </Route>
        </Switch>
        
    </Fragment>
    )
};

export default Home;