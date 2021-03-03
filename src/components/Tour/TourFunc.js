import React, {useState, forwardRef} from 'react'
import {FaCaretSquareDown, FaTimesCircle} from 'react-icons/fa';
import "./Tour.scss"

// const Coin = forwardRef(({image, name, symbol, price, volume, priceChange, marketcap}, ref) => {
 const TourFunc = forwardRef(({tour, removeTour}, ref) => {

    const [showInfo, setshowInfo] = useState(false)

    function handleInfo  () {
        setshowInfo(!showInfo)
    }

    const {id, city, img, name, info} = tour;
    // const {removeTour} = removeTour;

    return (
        <article className="tour" ref={ref}>
            <div className="img-container">
                <img
                src={img}
                alt=""
                />
                <span className="close-btn" onClick={() => removeTour(id)}>
                    <FaTimesCircle/>
                </span>
            </div>
            <div className="tour-info"> 
                <h3>{city}</h3>
                <h4>{name}</h4>
                <h5>info {""}
                    <span onClick={handleInfo}><FaCaretSquareDown/></span>
                </h5>
                {showInfo && <p> {info} </p> }
            </div>
    </article>
    )
}
 )


export default TourFunc;
