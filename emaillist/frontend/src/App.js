import React, {useState, useEffect} from 'react';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import './assets/scss/App.scss';
import data from './assets/json/data.json'

const App = () => {
  const [emails, setEmails] = useState(data);

  const fetchData = async () => {
    try {
        const response = await fetch('/api/emaillist', {
            method: 'get',
            headers: {
                'Accept': 'application/json'
            }
        });

        if(!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }

        const json = await response.json();
        if(json.result !== 'success') {
            throw new Error(`${json.result} ${json.message}`);
        }
        
        setEmails(json.data);

    } catch(err) {
        console.log(err);
    }
}
  useEffect(()=>{      
    fetchData();
  }, []);

  const emailAdd = async (email) => {
    try {
      const response = await fetch(`/api/emaillist`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(email)
      });

      if(!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();

      if(json.result !== 'success') {
        throw new Error(`${json.result} ${json.message}`);  
      }

      setEmails([json.data, ...emails]);
    } catch(err) {
      console.log(err);
    }
  }

  const keywordChanged = async (keyword) => {
    try {
        const response = await fetch(`/api/emaillist?kw=${keyword}`, {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });

        if(!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        const json = await response.json();

        if(json.result !== 'success') {
          throw new Error(`${json.result} ${json.message}`);  
        }

        setEmails(json.data);
      } catch(err) {
        console.log(err);
      }
  }
  const emailDelete =  async (no) => {
    try {
        const response = await fetch(`/api/emaillist/${no}`, {
          method: 'delete',
          headers: {
            'Accept': 'application/json'
          }
        });
  
        if(!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
  
        const json = await response.json();
  
        if(json.result !== 'success') {
          throw new Error(`${json.result} ${json.message}`);  
        }
        setEmails(json.data);

      } catch(err) {
        console.log(err);
      }
  }
  return (
    <div id={'App'}>
      <RegisterForm callback={emailAdd}/>
      <SearchBar callback={keywordChanged}/>
      <Emaillist emails={emails} callback={emailDelete}/>
    </div>
  )
}

export default App;