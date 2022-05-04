import React from 'react';
import Todo from '../../Assets/icon-todo.svg';
import Calendar from '../../Assets/icon-calendar.svg';
import Reminders from '../../Assets/icon-reminders.svg';
import Planning from '../../Assets/icon-planning.svg';
import './Submenu1.css';

function Submenu1(){
    return(
        <div className='Submenu1'>
            <div className='TodoList'>
                <img src={Todo} className='icons' alt= 'todo'/>
                <p className='Options'>Todo List</p>
            </div>
            <div className='Calendar'>
                <img src={Calendar} className='icons' alt= 'calendar'/>
                <p className='Options'>Calendar</p>
            </div>
            <div className='Reminders'>
                <img src={Reminders} className='icons' alt= 'reminders'/>
                <p className='Options'>Reminders</p>
            </div>
            <div className='Planning'>
                <img src={Planning} className='icons' alt= 'planning'/>
                <p className='Options'>Planning</p>
            </div>
        </div>
    )
};

export default Submenu1;