import React from 'react'
function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container text-center">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <p className="nav-link active" aria-current="page" to="#">Note App</p>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
