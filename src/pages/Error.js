import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

export default function Error() {
    return <Hero>
        <Banner title="whoops!" subtitle="404 - you got off trail!">
            <Link to='/' className="btn-primary">
                go home
            </Link>
        </Banner>
    </Hero>
}
