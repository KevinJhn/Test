import {Link} from 'react-router-dom'
import React from 'react';

const Navbar = ()=>{
   return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
       <Link to='/'>
          <li className="navbar-brand" >Home</li>
       </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to='/register'>
                            <li className="nav-link" >Daftar <span class="sr-only">(current)</span></li>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/edit'>
                            <li className="nav-link" >Edit</li>
                        </Link>
                    </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
  </div>
</nav>

}

export default Navbar 