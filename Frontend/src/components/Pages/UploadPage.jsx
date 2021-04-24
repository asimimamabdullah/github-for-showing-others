import React from 'react'
import './UploadPageStyling.css'

let UploadPage = () => {

    let fileSelectedHandler = (e) => {
        console.log(e.target)
    }



    return (

        <div className="UploadPage">
            <h1>Change Images and text</h1>
            <form>
                <input type="file" onChange={fileSelectedHandler} />
            </form>
        </div>
    )
}

export default UploadPage