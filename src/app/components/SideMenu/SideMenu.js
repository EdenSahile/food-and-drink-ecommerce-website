
import React from 'react'

export const SideMenu = () => {
  const links = ["Fruits", "Légumes", "Produits Frais", "Epicerie", "Boissons"];
  return (
    <div className="col-sm-3 sidebar">
      <ul>
        {links.map((link) => {
          return <li key={link}>{link}</li>;
        })}
      </ul>
    </div>
  );
};
