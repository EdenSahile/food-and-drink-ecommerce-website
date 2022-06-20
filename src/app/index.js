import React, { useState,useEffect } from 'react';
import {Navbar} from './components/Navbar/Navbar'
import {CardsList} from './components/CardsList/CardsList'
import {SideMenu} from "./components/SideMenu/SideMenu";
import {list} from '../data'
import './styles/App.css'

const App = () => {
  const [category, setCategory] = useState(0);
  const[ isFiltering, setIsFiltering]=useState(false)
  const [filtered,setFiltered]=useState(false)
 
  const loadCategory = (i) => {
    setCategory(i);
  };
  
  const filterResults=(input)=>{
    const fullList=list.flat();
    
    const results=fullList.filter(item=>{
      const name=item.name.toLowerCase();
      const term=input.toLowerCase();
      
      return name.indexOf(term) > -1
    })
    setFiltered(results)
    console.log(isFiltering)
  }
 
return (
  <>
    <Navbar filter={filterResults}  setIsFiltering={setIsFiltering}/>
    <div className="container">
      <div className="row">
        <SideMenu loadCategory={loadCategory} category={category} />
        <div className="col-sm-9">
          <CardsList data={isFiltering? filtered: list[category]} category={category} />
        </div>
      </div>
    </div>
  </>
);
}
export default App;
