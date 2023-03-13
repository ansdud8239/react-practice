import React,{useState} from 'react';
import './assets/css/App.css';
import RegisterForm from './RegisterForm';
import Emaillist from './Emaillist';
import Searchbar from './Searchbar';
import data from './assets/json/data.json'

const App = () => {
    //<Emaillist key={'To Do'} title={'To Do'} cards={cards.filter(card => card.status==='ToDo')}/>
    const [email,setEmails] = useState(date);
    return (
        <div id='App'>
            <RegisterForm/>
            <Searchbar/>
            <Emaillist emails={emails}/>
        </div>
    );
};

export default App;