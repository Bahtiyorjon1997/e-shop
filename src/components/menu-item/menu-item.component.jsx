import React from 'react'
import './menu-item.styles.scss'

const MenuItem = ({title}) => {
    return (
        <div className="menu-item">
            <div className="content">
              <h1 className="title">Hats</h1>
              <span className="subtitle">Men</span>
            </div>
        </div>
    )
}

export default MenuItem
