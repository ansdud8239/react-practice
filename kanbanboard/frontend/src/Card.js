import React, {useState} from 'react';
import styles from './assets/scss/Card.scss';
import TaskList from './TaskList';

const Card = ({no, title, description}) => {
    const [showDetail, setShowDetail] = useState(false);
    const [tasks,setTasks] = useState([]);
    const addTasks = async (taskName) =>{
        console.log(taskName);
    }

    return (
        <div className={styles.Card}>
            <div
                className={
                    showDetail ?
                        [styles.Card__Title, styles.Card__Title__open].join(' ') : 
                        styles.Card__Title
                }
                onClick={async () => {
                    if(!showDetail){
                        // task가져오기
                        try{
                            const response = await fetch(`/api/task?cardNo=${no}`,{
                                 method:'get',
                                 headers:{
                                     'Accept' : 'application/json'
                                 }
                            });
                            if(!response.ok){
                                 throw new Error(`${response.status} ${response.statusText}`);
                            }
                            const json = await response.json();
                            if(json.result !== 'success'){
                             throw new Error(`${json.result} ${json.message}`);
                            } 
                            setTasks(json.data);
                 
                         }catch(err){
                             console.log(err.message);
                         }

                    }
                    setShowDetail(!showDetail)
                    
                    }}>
                {title}
            </div>            
            {
                showDetail ?    
                    <div className={styles.Card__Details}>
                        {description}
                        <TaskList  
                            cardNo={no}
                            tasks={tasks}
                            callbackAddTask={addTasks}
                        />
                    </div>
                    :
                    null
            }        
        </div>
    );
};

export default Card;