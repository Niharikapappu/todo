import React, { useState,useEffect } from 'react';
import './App.css';
import Todo from './Todo';
import {Button, FormControl,Input,InputLabel} from '@mui/material';
import db from './firebase';
import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';

function App() {
  
  const[todos, setTodos]=useState([])
  const[input, setInput] = useState('');
  console.log('qwer',input);

  useEffect(()=>{
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {setTodos(snapshot.docs.map(doc => doc.data().todo))})

  },[input]);

  const addTodo = (event) =>{ //will occur wen we click the button
    event.preventDefault();
     
     db.collection('todos').add({
       todo: input,
       timestamp: firebase.firestore.FieldValue.serverTimestamp()
     })
     //event.preventDefault(); will stop refresh
     setInput('');
    
  }
  return (
    <div className="App">
      <h1>hiiuhi</h1>
      <form>
      

        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
          
        </FormControl>

      
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained"  color="primary">
        Add Todo
        </Button>
            {/* <button type='submit' onClick={addTodo}> Add Todo</button> */}
            </form>
      <ul>
        {todos.map(todo =>(
          <Todo text={todo}/>
          //<li>{todo}</li>
        ))}
    
      </ul>
    </div>
  );
}

export default App;
