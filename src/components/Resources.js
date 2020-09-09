import React, { Component } from 'react'
import Title from './Title'
import {FaClock, FaMapMarkedAlt, FaCloudSunRain, FaHiking} from 'react-icons/fa' 

export default class Resources extends Component {
    state={
        resources:[
            {
                icon: <FaClock/>,
                title: "park hours",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                icon: <FaMapMarkedAlt/>,
                title: "maps",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                icon: <FaCloudSunRain/>,
                title: "weather",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                icon: <FaHiking/>,
                title: "leave no trace",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
