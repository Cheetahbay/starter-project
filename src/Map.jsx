import React from 'react'
import logo from "./24dunks.jpg";
// var dunker = require("../src/thismap.html")

const Map = () => {
    return (
        <div>
            <h1>This is the map page</h1>
            {/* <iframe src={dunker} frameborder=""></iframe> */}
            <img src={logo} alt="24dunks"></img>
        </div>
    )
}

export default Map
