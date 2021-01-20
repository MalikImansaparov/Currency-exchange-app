import React from 'react';
import './App.css';
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Rate from "./Rate/Rate";
import About from "./About/About";
import { Switch, Route} from "react-router";
import {BrowserRouter} from "react-router-dom";

class App extends React.Component {
  render(){
    return (
        <div className='site'>
      <Header/>
        <div className='container'>
          <main>
           <BrowserRouter>
             <Switch>
               <Route exact path='/' component={Rate}/>
               <Route exact path='/About' component={About}/>
             </Switch>
           </BrowserRouter>
          </main>
        </div>
    <div className='container' id='cookie-info'>
      <div className='site-content'>
        <div className='well'>
          На нашем сайте мы используем cookie для сбора информации технического характера. <br/>
          В часности, для персонифисированной работы сайта мы обрабатываем IP-адрес региона вашего местоположенияю
          &nbsp;<button className='btn btn-primary btn-sm'>ok</button>
        </div>
      </div>
    </div>
   <Footer/>
    </div>
    );
  }
}
export default App;
