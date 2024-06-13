import React from 'react'

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-warning">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">KSRTC</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/login">login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/add">Add bus</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/serach">search bus</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/view">view all</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar