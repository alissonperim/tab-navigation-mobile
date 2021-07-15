import React from 'react'
import './styles.css'

const Btn = (props) => {
  return (
    <button {...props}>
      <li className="link--li">
        <i className={props.icon}></i>
        <h4 className="link--h4">{props.name}</h4>
      </li>
    </button>
  )
}

export const Navbar = (props) => {
  const { callback, btnActive } = props
  return (
    <nav className="link-container">
      <div className="navbar">
        <Btn link="/" icon="fas fa-home" name="HOME" onClick={() => callback(0)} className={`link--button ${btnActive === 0 ? "active" : ""}`} />
        <Btn link="/" icon="fas fa-briefcase" name="WORK" onClick={() => callback(1)} className={`link--button ${btnActive === 1 ? "active" : ""}`} />
        <Btn link="/" icon="fas fa-book-open" name="BLOG" onClick={() => callback(2)} className={`link--button ${btnActive === 2 ? "active" : ""}`} />
        <Btn link="/" icon="fas fa-users" name="ABOUT US" onClick={() => callback(3)} className={`link--button ${btnActive === 3 ? "active" : ""}`} />
      </div>
    </nav>
  )
}