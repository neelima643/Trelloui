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

    // document.addEventListener("dragstart", (event) => {
    //     // store a ref. on the dragged elem
    //     dragged = event.target;
    //   });
      
      document.addEventListener("dragover", (event) => {
        // prevent default to allow drop
        
        event.preventDefault();
      });
      
      document.addEventListener("drop", (event) => {
        // prevent default action (open as link for some elements)
        event.preventDefault();
        // move dragged element to the selected drop target
        if (event.target.className === "doing" || event.target.className === "todoarea") {
          dragged.parentNode.removeChild(dragged);
          event.target.appendChild(dragged);
        }

        
      });

        
       
      const onDragHandleStart = (event, param, category) => {
        dragged = event.target;
        

          //console.log(todoTask);
        console.log(param.pos);
        console.log(category);
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
                        {cat.taskname.map((item, pos) => (
                            <div className='card'
                            onDragStart={ (event) => {onDragHandleStart(event, {item, pos}, 'doing')}}
                            draggable='true'
                            
                            >
                                {item}
                            </div>
                        )) }
                        
                       </div> 
                   ))} 
           

           
                   
           
                    
        
        </div>
      
        
    )

    

    
}

export default Cards;