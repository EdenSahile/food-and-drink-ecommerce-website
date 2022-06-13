
import React, {useState} from 'react'


export const SideMenu = ({loadCategory}) => {
  
const links = ["Fruits", "Légumes", "Produits Frais", "Epicerie", "Boissons"];

 
 
 
  return (
    <div className="col-sm-3 sidebar">
      <ul>
        {links.map((link,index) => {
          return <li key={link}
          onClick={()=>loadCategory(index)}>{link}</li>;
        })}
      </ul>
    </div>
  );
};
 