import { Outlet, Link } from "react-router-dom"
import React, { useState } from 'react'


const Layout = () => {

    const [searchTerm, setSearchTerm] = useState('')

    const handleSearch = (e) => {
        e.preventDefault();
        // Code to handle the search functionality
    }
    
return (
    <>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">DigiSim</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dueling
                            </a>
                            <ul class="dropdown-menu">
                                <li><Link class="dropdown-item" to="/duelroom">Duel Room</Link></li>
                                <li><Link class="dropdown-item" to="/duelrecords">Duel Records</Link></li>
                                <li><Link class="dropdown-item" to="/tournamentlocator">Tournament Locator</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Profile
                            </a>
                            <ul class="dropdown-menu">
                                <li><Link class="dropdown-item" to="/profileviewer">Profile Viewer</Link></li>
                                <li><Link class="dropdown-item" to="/myprofile">My Profile</Link></li>
                                <li><Link class="dropdown-item" to="/settings">Settings</Link></li>
                                <li><Link class="dropdown-item" to="/changepassword">Change Password</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Social
                            </a>
                            <ul class="dropdown-menu">
                                <li><Link class="dropdown-item" to="/friendrequests">Friend Requests</Link></li>
                                <li><Link class="dropdown-item" to="/friends">Friends</Link></li>
                                <li><Link class="dropdown-item" to="/comments">Comments</Link></li>
                                <li><Link class="dropdown-item" to="/followedusers">Followed Users</Link></li>
                                <li><Link class="dropdown-item" to="/blockedusers">Blocked Users</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Deck Building
                            </a>
                            <ul class="dropdown-menu">
                                <li><Link class="dropdown-item" to="/deckbuilder">Deck Builder</Link></li>
                                <li><Link class="dropdown-item" to="/customcards">Custom Cards</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Community
                            </a>
                            <ul class="dropdown-menu">
                                <li><Link class="dropdown-item" to="/rankings">Rankings</Link></li>
                                <li><Link class="dropdown-item" to="/tournaments">Tournaments</Link></li>
                                <li><Link class="dropdown-item" to="/forum">Forum</Link></li>
                                <li><Link class="dropdown-item" to="/notes">Notes</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearchTerm(e.target.value)}/>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={() => handleSearch()}>Search</button>
                    </form>
                    <Link to='/login' class='btn btn-outline-primary my-2 my-sm-0'>Login/Register</Link>
                </div>
            </div>
        </nav>
        <Outlet />
    </>
    )
}

export default Layout;