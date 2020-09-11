import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
// import {Link} from 'react-router-dom'

export default function Trails() {
    return ( <Hero hero="trailsHero">
        <Banner title="limited trail capacity" subtitle="reserve the perfect trail for your hike">
            {/* <Link to='/' className="btn-primary">
                go home
            </Link> */}
        </Banner>
    </Hero>
    
    )}