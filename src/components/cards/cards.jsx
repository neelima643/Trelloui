import '../cards/cards.css';
import Button from '../Button/button';
import { useState, useRef } from 'react';
import { FaTrello, FaPlus,FaAngleDown } from 'react-icons/fa';

const Cards = () => {

    //const [tasklist, setTaskList] = useState('');
    const [todoTask, setTodoTask] = useState([]);
    const [doingTask, setDoingTask] = useState([]);
    const [doneTask, setDoneTask] = useState([]);
    
    const addtodoTask = () => {
        let t = prompt('Input the task');
        
        setTodoTask((oldList) => {
            return [...oldList, t];
        });
    }

        
    const addDoingTask = () => {
        let dotask = prompt('Input the task in progress');

        setDoingTask((olddolist) => {
            return [...olddolist, dotask]
        });
        
    }

    const addDoneTask = () => {
        let donetask = prompt('Enter the done tasks')
        
        setDoneTask((olddonelist) => {
            return [...olddonelist, donetask]
        })
    }

    
    

   

    let dragged = null;


      
      document.addEventListener("dragover", (event) => {
        
        
        event.preventDefault();
      });
      
      document.addEventListener("drop", (event) => {
        
        event.preventDefault();
        
        if (event.target.className === "doingarea" || event.target.className === "todoarea") {
          dragged.parentNode.removeChild(dragged);
          event.target.appendChild(dragged);
        }

        
      });

        
       
      const onDragHandleStart = (event, param, category) => {
        dragged = event.target;
        

    }
    
    

        return (
            

       
            <div className='rightdiv'>
                
             
                
                       <div className="todo"
                        
                       >
                        <h4>Todo</h4>
                        <div className='todoarea'>

                        {todoTask.map((item, pos) => (
                            <div className='card' 
                            draggable='true'
                            onDragStart={ (event) => {onDragHandleStart(event, {item, pos}, 'todo')}}
                            >
                                {item}
                            </div>
                        )) }
                        </div>
                        <Button buttonclass='taskbtn' label='Add a task' icon={<FaPlus className='addicon' size={10}/>}
                         onclick = { () => addtodoTask()}
                        />
                       </div> 
                  
                    
                    
                       <div className="doing">
                        <h4>Doing</h4>
                        <div className='doingarea'>
                        {doingTask.map((item, pos) => (
                            <div className='card'
                            onDragStart={ (event) => {onDragHandleStart(event, {item, pos}, 'doing')}}
                            draggable='true'
                            
                            >
                                {item}
                            </div>

                            
                        )) }
                        </div>
                        <Button buttonclass='taskbtn' label='Add a task' icon={<FaPlus className='addicon' size={10}/>}
                         onclick = { () => addDoingTask()}
                        />
                        </div>
                   

                        <div className="done">
                        <h4>Done</h4>
                        <div className='doingarea'>
                        {doneTask.map((item, pos) => (
                            <div className='card'
                            onDragStart={ (event) => {onDragHandleStart(event, {item, pos}, 'doing')}}
                            draggable='true'
                            
                            >
                                {item}
                            </div>

                            
                        )) }
                        </div>
                        <Button buttonclass='taskbtn' label='Add a task' icon={<FaPlus className='addicon' size={10}/>}
                         onclick = { () => addDoneTask()}
                        />
                        </div>
                   
                    
                   
           

           
                   
           
                    
        
        </div>
      
        
    )

    

    
}

export default Cards;