import React from 'react'
import clas  from "./Header.module.scss";
import { SmoothCorners } from 'react-smooth-corners'


const Header = () => {
  return (
    <header className={clas.header}>
    <div className={clas.logo}>Host</div>
    <button className={clas.menu}>
      <div className={clas.iconContainer}>
        <span className={clas.circle}></span>
        <span className={clas.circle}></span>
        <span className={clas.circle}></span>
        <span className={clas.circle}></span>
      </div>
    </button>

    </header>
  )
}

export default Header