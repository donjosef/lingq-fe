import React from 'react'
import './Layout.css'

const Layout = (props) => {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand text-info" href="#">LINGQ PRO</a>

                <form className="form-inline navbar__form">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
            {props.children}
        </>
    )
}

export default Layout