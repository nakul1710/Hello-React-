import React from 'react';
import './header.css';
import config from '../../config'
function Header(){
return (
  <header style={{
   backgroundColor: config.theme.backgroundColor,
   color: config.theme.color,
  }} className=" fixed-top" >
  <div className="container">
      <div className="row align-items-center">
          <div className="col-md-4">
              <h1 className="logo">{config.information.firstname}</h1>
          </div>
          <div className="col-sm-8">
              <nav className="navbar  navbar-expand-md navbar-dark">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse text-right" id="navbarNav">
                      <ul className="navbar-nav ml-auto text-right">
                          <li className="nav-item">
                              <a className="nav-link  text-white" href="#aboutme"><b>About</b></a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link  text-white" href="#education"><b>Education</b></a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link  text-white" href="#project"><b>Project</b></a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link  text-white" href="#gallery"><b>Gallery</b></a>
                          </li>

                      </ul>
                  </div>
              </nav>
          </div>
      </div>
  </div>
</header>
);
}
export default Header;
