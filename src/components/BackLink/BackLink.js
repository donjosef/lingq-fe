import React from 'react'
import { Link } from 'react-router-dom'

import './BackLink.css'

const BackLink = ({ path }) => {
    return (
        <Link className="backlink text-info" to={path}>Go Back</Link>
    )
}

export default BackLink
