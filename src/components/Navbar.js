import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
    console.log(props.textTheme)
    return (
        <>
            <nav class={`navbar navbar-expand-lg bg-${props.theme} ${props.theme==="dark"?"navbar-dark":""}`}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Take Echo</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link class="nav-link active" aria-current="page" to="/take-echo">Quotes</Link>
                            <Link class="nav-link" to="/Create">Create</Link>
                            <div className="form-check form-switch">
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                <div className=" d-flex align-items-center form-check form-switch">
                    <input
                        onClick={props.changeTheme}
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                    />
                    {/* <label className="d-flex form-check-label" htmlFor="flexSwitchCheckDefault">
                        Change Theme
                    </label> */}
                </div>
                </div>

            </nav>
        </>
    )
}

export default Navbar