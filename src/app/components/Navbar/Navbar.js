import React from 'react'


export const Navbar = ({filter,setIsFiltering}) => {
  return (
    <nav className="navbar orange navbar-expand-lg navbar-light bg-light fixed-top">
      <a className="navbar-brand crimson" href="/">
      
        <i className="fas fa-shopping-cart"></i> Mes Courses en Ligne
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="ml-auto cart">
          <div>
            <form className="search form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e)=>{
                  setIsFiltering(e.target.value.length>0)
                  filter(e.target.value)

                } 
                
                
                }

  
              />
            </form>
          </div>
          <div className="menu-right">
            <a href="/cart">
              <i className="fas fa-shopping-bag fa-2x grey"></i>
            </a>
            <span className="badge badge-pill badge-success"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};
