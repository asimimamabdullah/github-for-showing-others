import React from 'react'

let CardForGallery = (props) => {


    // const CardWidth = document.querySelector('.CardForGallery').clientWidth

    
    return (
        <div className="CardForGallery">
            <img src={props.image} alt=""/>
            <h1>{props.title}</h1>
            <p>{props.paragraph}</p>
        </div>
    )
}

export default CardForGallery

// CanvasRect
// ConstrainVideoFacingModeParameters
// CacheQueryOptions
// CallableFunction
// CanvasCompositing