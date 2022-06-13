import React, { Fragment } from 'react';
import {Navbar} from './components/Navbar/Navbar'
import {CardsList} from './components/CardsList/CardsList'
import {SideMenu} from "./components/SideMenu/SideMenu";
import {list} from '../data'
import './styles/App.css'




const App = () => {
  
return (
  <>
    <Navbar/>

    <div className="container">
      <div className="row">
        <SideMenu/>
       
        <div className="col-sm-9">
          <CardsList data={list}/>
        </div>
      </div>
    </div>
  </>
)

}
export default App;
