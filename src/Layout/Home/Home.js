import React,{Fragment} from 'react';
import { Link,Switch,Route } from 'react-router-dom';
import AllDecks from './AllDecks';
import DecksHome from '../../Decks/DecksHome'
import {useHistory} from 'react-router';
import CreateDeckButton from './CreateDeckButton'
 

function Home({decks}){

    return (
    <Fragment>
        
        <CreateDeckButton/>
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