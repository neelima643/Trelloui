import '../cards/cards.css';
import Button from '../Button/button';
import { useState, useRef } from 'react';
import { FaTrello, FaPlus,FaAngleDown } from 'react-icons/fa';

const Cards = () => {

    const [state, setState] = useState({
        task: '',
        todoTask: []
    })

    const addTask = () => {
        let t = prompt('Input the task');
        setState({
            todoTask: t,
        })
        todoTask.push(t)
        console.log(todoTask)
    }

        


    const todoTask = [
        {taskname:['t1', 't2', 't3','t6', 't7', 't8']}
    ]
    

    const doingTask = [
        {taskname:['t4', 't5']}
    ]

    let dragged = null;


      
      document.addEventListener("dragover", (event) => {
        
        
        event.preventDefault();
      });
      
      document.addEventListener("drop", (event) => {
        
        event.preventDefault();
        
        if (event.target.className === "doing" || event.target.className === "todoarea") {
          dragged.parentNode.removeChild(dragged);
          event.target.appendChild(dragged);
        }

        
      });

        
       
      const onDragHandleStart = (event, param, category) => {
        dragged = event.target;
        

    }
    
    

        return (
            

       
            <div className='rightdiv'>
                
             
                {todoTask.map((cat) => (
                       <div className="todo"
                        
                       >
                        <h4>Todo</h4>
                        <div className='todoarea'>

                        {cat.taskname.map((item, pos) => (
                            <div className='card' 
                            draggable='true'
                            onDragStart={ (event) => {onDragHandleStart(event, {item, pos}, 'todo')}}
                            >
                                {item}
                            </div>
                        )) }
                        </div>
                        <Button buttonclass='taskbtn' label='Add a task' icon={<FaPlus className='addicon' size={10}/>}
                         onclick = { () => addTask()}
                        />
                       </div> 
                   ))}
                    
                    {doingTask.map((cat) => (
                       <div className="doing">
                        <h4>Doing</h4>
                        <div className='doingarea'>
                        {cat.taskname.map((item, pos) => (
                            <div className='card'
                            onDragStart={ (event) => {onDragHandleStart(event, {item, pos}, 'doing')}}
                            draggable='true'
                            
                            >
                                {item}
                            </div>

                            
                        )) }
                        </div>
                        <Button buttonclass='taskbtn' label='Add a task' icon={<FaPlus className='addicon' size={10}/>}
                         onclick = { () => addTask()}
                        />
                        </div>
                   ))}   
                    
                   
           

           
                   
           
                    
        
        </div>
      
        
    )

    

    
}

export default Cards;