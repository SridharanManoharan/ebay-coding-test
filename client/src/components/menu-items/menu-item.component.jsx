import React from 'react'
import { withRouter } from 'react-router-dom'
import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, description}) => (
    <div className={`large menu-item`}>
        <div className='background-image'
            style={{backgroundImage: `url(${imageUrl})`}}
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
        </div>
    </div>
)

export default withRouter(MenuItem);