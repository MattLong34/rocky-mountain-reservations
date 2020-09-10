import React, { Component } from 'react'
import items from './dataHiking'

const TrailContext = React.createContext()

class TrailProvider extends Component {
    state = {
        trails: [],
        sortedTrails: [],
        featuredTrails: [],
        loading: true
    }
    // getData

    componentDidMount(){
        // let trails = this.formatData(items)
        let trails = items[0]["trails"]

        let featuredTrails = trails.filter(trail => trail.starVotes > 105)

        this.setState({
            trails, featuredTrails, sortedTrails:trails, loading:false
        })
    }

    // formatData(items){
    //     let tempItems = items.map(item => {
    //         // let id = item.trails.id
    //         // let imageUrl = item.trails.imgMedium

    //         // let trail = {...item.trails, imageUrl, id}
    //         let trail = item.trails.map(thing => {
    //             // thing.filter(thing.starVotes > 250)
    //         })
    //         console.log("item.trails", item.trails)
    //         console.log("trail", trail)
            
    //         return trail
    //     })
    //     console.log("tempItems", tempItems)
    //     return tempItems
    // }

    render() {
        return <TrailContext.Provider value={{ ...this.state }}>
            {this.props.children}
        </TrailContext.Provider>
    }
}

const TrailConsumer = TrailContext.Consumer

export {TrailProvider, TrailConsumer, TrailContext}