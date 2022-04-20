import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { header } from 'express/lib/request';

function Header(){
  return(
    <header >
         <nav className='nav-item-container'>
                <img className="nav-logo" src="./logo192.png"  />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
          </nav>
  </header>
  )
  
}
function MainContent(){
  return(
       <div>
         <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
       </div>
  )  
}
function Footer(){
  return(
    <footer>
            <small>© 2021 Rakesh development. All rights reserved.</small>
     </footer>
  )
}
function Page(){
  return(
      <div>
         <Header />
       <MainContent />
       <Footer />
      </div>
  )
}
ReactDOM.render( 
   <Page />,
   document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

