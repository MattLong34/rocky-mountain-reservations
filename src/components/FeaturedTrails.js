import React, { Component } from 'react'
import {TrailContext} from '../context'
import Loading from './Loading'
import Trail from './Trail'
import Title from './Title'

export default class FeaturedTrails extends Component {
    static contextType = TrailContext
    render() {
        let { loading, featuredTrails } = this.context
        // const featuredTrails = this.context.featuredTrails

        featuredTrails = featuredTrails.map(trail => {
            return <Trail key={trail.id} trail={trail} />
        })

        return (
            <section className="featured-trails">
                <Title title="featured trails"/>

                <div className="featured-trails-center">
                    {loading ? <Loading /> : featuredTrails}
                </div>

            </section>
        )
    }
}
