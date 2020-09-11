import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {TrailContext} from '../context'

// import StyledHero from "../components/StyledHero";
export default class SingleTrail extends Component {
    // constructor(props){
    //     super(props)
    //     console.log(this.props)
    // }
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
          title: this.props.match.params.title,
          defaultBcg: defaultBcg
        };
      }
      static contextType = TrailContext;

    // componentDidMount(){
    //     console.log(this.props);
    // }

    // render() {
    //     return (
    //         <div>
    //             hello from the single trail page
    //         </div>
    //     )
    // }
    render() {
      const { getTrail } = this.context;
      const trail = getTrail(this.state.title);
    
      if (!trail) {
        return (
          <div className="error">
            <h3> sorry, that trail could not be found...</h3>
            <Link to="/trails" className="btn-primary">
              go back to trails
            </Link>
          </div>
        );
      }
      const {
        // name,
        // description,
        // capacity,
        // size,
        // price,
        // extras,
        // breakfast,
        // pets,
        // images
        name,
        summary,
        stars,
        starVotes,
        imgMedium,
        length
      } = trail;
    //   const [main, ...defaultImages] = images;
    //   console.log(defaultImages);
    
      return (
        <>
          {/* <StyledHero img={images[0] || this.state.defaultBcg}> */}
            <Banner title={`{name}`}>
              <Link to="/trails" className="btn-primary">
                back to trails
              </Link>
            </Banner>
          {/* </StyledHero> */}
          <section className="single-room">
            <div className="single-room-images">
              {/* {defaultImages.map((item, index) => (
                <img key={index} src={item} alt={name} />
              ))} */}
              <img src={imgMedium} />
            </div>
            <div className="single-room-info">
              <article className="desc">
                <h3>trail summary</h3>
                <p>{summary}</p>
              </article>
              <article className="info">
                <h3>Reviews</h3>
                <h6>average review : ${stars}</h6>
                <h6>amount of reviews : {starVotes}</h6>
                <h6>
                  trail length :
                  {/* {capacity > 1 ? `${capacity} people` : `${capacity} person`} */}
                </h6>
                {/* <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                <h6>{breakfast && "free breakfast included"}</h6> */}
              </article>
            </div>
          </section>
          <section className="room-extras">
            <h6>extras </h6>
            {/* <ul className="extras">
              {extras.map((item, index) => (
                <li key={index}>- {item}</li>
              ))}
            </ul> */}
          </section>
        </>
      );
    }
}
