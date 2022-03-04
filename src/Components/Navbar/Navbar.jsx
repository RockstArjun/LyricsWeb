import React,{useState} from 'react';
import './Navbar.css'
import {Link} from "react-router-dom";
import menu from '../../Assests/menu.png';
import close from '../../Assests/close.png';


export default function Navbar(){
    const [image,setimage] = useState(menu)
    const navbtn=()=>{
        let v = document.getElementById('img').src;
        let z= document.getElementById('updown');
        if(v===menu){
            setimage(close)
            z.classList.remove('none')
            z.classList.add('popup')
        }
        else{
            setimage(menu)
            z.classList.remove('popup')
            z.classList.add('none')
        }
    }
    return (
        <div id="nav">
            <div className='nav'>
                <div className='title'>
                    <h2>lyrics<span>Web</span></h2>
                </div>
                <div className='components'>
                    <ul>
                        <Link to="/"><li >Home</li></Link>
                        <li >Movie List</li>
                        <li >New Updates</li>
                        <li >Old Songs</li>
                    </ul>
                </div>
                <button className="slide-btn" onClick={navbtn}>
                    <img id='img' src={image} alt='' />
                </button>
            </div>
            <div className='none' id='updown'>
                <ul>
                <Link to="/"><li onClick={navbtn}>Home</li></Link>
                        <li onClick={navbtn}>Movie List</li>
                        <li onClick={navbtn}>New Updates</li>
                        <li onClick={navbtn}>Old Songs</li>
                </ul>
            </div>
        </div>
    )
}