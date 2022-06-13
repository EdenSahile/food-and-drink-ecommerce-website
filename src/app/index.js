import React, { useState } from 'react';
import {Navbar} from './components/Navbar/Navbar'
import {CardsList} from './components/CardsList/CardsList'
import {SideMenu} from "./components/SideMenu/SideMenu";
import {list} from '../data'
import './styles/App.css'




const App = () => {

  const [category, setCategory] = useState(0);

  const loadCategory = (i) => {
    setCategory(i);
  };
  
return (
  <>
    <Navbar/>

    <div className="container">
      <div className="row">
        <SideMenu loadCategory={loadCategory}/>
       
        <div className="col-sm-9">
          <CardsList data={list} category={category}/>
        </div>
      </div>
    </div>
  </>
)

}
export default App;
