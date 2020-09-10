import React from 'react'
import {Link} from 'react-router-dom'
import defaultImage from '../images/bear-lake.jpeg'
import PropTypes from 'prop-types'

export default function Trail({trail}) {

    const{name, stars, imgMedium, title} = trail

    return (
        <article className="trail">
            <div className="img-container">
                <img src={imgMedium || defaultImage} alt="Trail" />
                <div className="text-top">
                    <h6>{stars}</h6>
                    <p>stars</p>
                </div>
                <Link to={`/trails/${title}`} className="btn-primary trail-link">view trail</Link>
            </div>
            <p className="trail-info">{name}</p>
        </article >
    )
}

Trail.propTypes = {
    trail:PropTypes.shape({
        name:PropTypes.string.isRequired,
        title:PropTypes.string.isRequired,
        imgMedium:PropTypes.string.isRequired,
        stars:PropTypes.number.isRequired
    })
}