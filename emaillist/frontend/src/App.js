import React,{useState} from 'react';
import './assets/css/App.css';
import RegisterForm from './RegisterForm';
import Emaillist from './Emaillist';
import Searchbar from './Searchbar';
import data from './assets/json/data.json'

const App = () => {
    //<Emaillist key={'To Do'} title={'To Do'} cards={cards.filter(card => card.status==='ToDo')}/>
    const [emails,setEmails] = useState(data);
    const notifyKeyWordChanged = function(keyword){
        // keyword가 firstName or lastName or email
        console.log(keyword);
       const emails =  data.filter(e => e.firstName.indexOf(keyword) != -1 ||e.lastName.indexOf(keyword) != -1 || e.email.indexOf(keyword) != -1)
       setEmails(emails)
    }
    return (
        <div id='App'>
            <RegisterForm/>
            <Searchbar callback={notifyKeyWordChanged}/>
            <Emaillist emails={emails}/>
        </div>
    );
};

export default App;