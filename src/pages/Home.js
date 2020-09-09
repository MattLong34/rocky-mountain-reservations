import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

export default function Home() {
    return <Hero>
        <Banner title="limited trail capacity" subtitle="reserve your rocky mountain national park experience today">
            <Link to='/trails' className="btn-primary">
                view trails
            </Link>
        </Banner>
    </Hero>
}

