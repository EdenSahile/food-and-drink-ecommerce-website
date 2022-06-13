
import React from 'react'


export const SideMenu = ({loadCategory,category}) => {
  
const links = ["Fruits", "Légumes", "Produits Frais", "Epicerie", "Boissons"];

 
 
 
  return (
    <div className="col-sm-3 sidebar">
      <ul>
        {links.map((link,index) => {
          return(
           <li className={category === index ? 'active':null} key={link}
          onClick={()=>loadCategory(index)}>{link}</li>
          )
        })}
      </ul>
    </div>
  );
};
 