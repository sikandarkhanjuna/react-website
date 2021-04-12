import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';
const Avatar =(props) =>{
    return (
          <div>
              <h1>Wellcome to my page</h1>
          
                <Avatarlist name="Sikandar" work="Web devloper"/>
                <Avatarlist name="Talha" work="Web devloper"/>
                <Avatarlist name="Faisal" work="Web devloper"/>
                <Avatarlist name="Faizan" work="Web devloper"/>

             <button>Add</button>

          </div>
         
    )


                    
}

export default Avatar;