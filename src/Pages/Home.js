import React, { Component } from 'react';
import Cards from '../Component/Cards';
import Explore from '../Component/explore';
class Home extends Component {
    state = {}
    render() {
        return (
            <div className='main_div'>
            <div className='heading_text'>
                <h2>RESORTS,VILLA AND MORE</h2>
                 </div>
                <Cards />
                {/* <Explore/> */}
            </div>
        );
    }
}

export default Home;
