import React from 'react'
import './Styling.css'

let SliderForm = () => {
    return (
        <div className="mainSliderForm">
            <h1>Set the Slider Images</h1>

            <form className='SliderForm'>
                <label htmlFor="textToShow">Text To Show:</label>
                <input type="text" name='textToShow' />
                <label htmlFor="imageOf">This image of:</label>
                <input type="text" name='imageOf' />
                <label htmlFor="name">Name:</label>
                <input type="text" name='name' />
                <label htmlFor="date">Date:</label>
                <input type="text" name='date' />

                <input type='file' />

                <button type='submit' className='SliderFormSubmitButton'>Submit</button>
            </form>
        </div>
    )
}

export default SliderForm