import React from "react"
import Navbar from "./component/Navbar"
import Main from "./component/Main"
import data from "./data"
import Card from "./component/Card"

export default function App() {
    const card = data.map(item =>{
        return(
            <Card
                title={item.title}
                location={item.location.toLocaleUpperCase()}
                maps={item.googleMapsUrl}
                start={item.startDate}
                end={item.endDate}
                description={item.description}
                img={item.imageUrl}
            />
        )
    })
    return (
        <div className="container">
            <Navbar />
            {card}
        </div>
    )
}