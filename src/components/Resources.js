import React, { Component } from 'react'
import Title from './Title'
import {FaClock, FaMapMarkedAlt, FaCloudSunRain, FaHiking} from 'react-icons/fa' 

export default class Resources extends Component {
    state={
        resources:[
            {
                icon: <FaClock/>,
                title: "park hours",
                info: "Rocky Mountain National Park is open 24 hours a day, 365 days a year, weather permitting."
            },
            {
                icon: <FaMapMarkedAlt/>,
                title: "maps",
                info: "Visit the National Park Service online or the visitor's center at Rocky Mountain National Park for detail maps."
            },
            {
                icon: <FaCloudSunRain/>,
                title: "weather",
                info: "The high country of Rocky Mountain National Park is noted for extreme weather patterns which change rapidly."
            },
            {
                icon: <FaHiking/>,
                title: "leave no trace",
                info: " Please leave no trace of your visit so that the next person can experience the same beauty that you did."
            }
        ]
    }
    render() {
        return (
            <section className="resources">
                <Title title='resources' />
                <div className="resources-center">
                    {this.state.resources.map((item, index) => {
                        return <article key={index} className="resources">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
                
            </section>
        )
    }
}
