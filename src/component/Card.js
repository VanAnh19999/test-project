import React from "react";
import litteStar from "../images/Fill 219.png"


export default function Card(props){
    return(
    <div className="boder">
        <img src={`../images/${props.img}`} className="pics"/>
        <div className="text">
        <div className="star">
        <img src={litteStar} className="little-star"/>
        <h2>{props.location}</h2>
        <a href={props.maps} className="link">View on GoogleMap</a>
        </div>
        <h1>{props.title}</h1>
        <h4>{props.start} - {props.end}</h4>
        <p>{props.description}</p>
        </div>
    </div>)
}