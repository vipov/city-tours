import React, { Component } from 'react';
import './TourList.scss';
import Tour from '../Tour/Tour';
import {tourData} from '../tourData';
import TourFunc from '../Tour/TourFunc';
import FlipMove from "react-flip-move";

import './TourList.scss'
export default class TourList extends Component {
    state={
        tours: tourData
    }
removeTour = id => {
    const {tours} = this.state;
    const sortedTours = tours.filter(tour=>tour.id!==id)
    this.setState({
        tours:sortedTours
    })
}
    render() {
        const {tours} = this.state;
        return (
            <section >
                <FlipMove className="tourlist">
                    {tours.map(tour => {
                        return (
                            <TourFunc 
                            key={tour.id} 
                            tour={tour}
                            removeTour={this.removeTour}
                            />
                        )
                    })}
               </FlipMove>
            </section>
        );
    }
}
