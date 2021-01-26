import React from 'react'
import { Link } from 'react-router-dom'

import './BackLink.css'

const BackLink = ({ path, onClick }) => {
    return (
        <Link className="backlink text-info" to={path} onClick={onClick}>Go Back</Link>
    )
}

export default BackLink
