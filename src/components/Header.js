import React from 'react';
import './Header.css';

export default function Header(props) { //initialize the props,properties that comes from parent
  
  return (  
    //header is a html file symmantic tag
    <header className="block row center"> 
    <div  className="hdr">
      <div>
        
        <a href="#/">
          <h1>E-Commerce</h1> 
        </a>
      </div>
      <div className="search">
      <input style = {{fontSize:"20px",width:"500px"}} placeholder="Search"></input>
      </div>
        
      <div>
          <div style={{justifyContent:"space around"}}>
              <a href="#/login"> LogIn</a> <a href="#/signin"> SignIn</a>
              <a href="#/"><button variant="contained" style={{color:"white",backgroundColor:"blue",width:"50px"}}>
            Home 
          </button></a>
          </div>
      
        <a href="#/cart">Cart{' '}{props.countCartItems ? (<button className="badge">{props.countCartItems}</button>) : ('')}
        </a>{' '}
        
      </div>
      </div>
    </header>
  );
}