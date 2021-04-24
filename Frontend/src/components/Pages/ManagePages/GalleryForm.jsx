import React, { useState } from 'react'
import './Styling.css'

let GalleryForm = () => {

    let [previewSource, setPreviewSource] = useState('')

    let handleSubmit = (e) => {
        e.preventDefault()

        // if(!previewSource) return
        uploadImage(previewSource)

    }

    const uploadImage = async (file) => {

        try {
            await fetch('/api/upload', {
                method: 'POST',
                body: JSON.stringify({ data: file }),
                headers: { 'Content-type': 'application/json' }
            })
        } catch (error) {
            console.error(error)
        }
    }

    let handleFileInputChange = (e) => {
        console.log(e.target.files[0])

        const file = e.target.files[0]
        previewFile(file)
    }

    const previewFile = (file) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }
    }

    return (
        <div className="GalleryForm">
            <h1>this is GalleryForm</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="textOfImage">Text Of Image (if any)</label>
                <input type="text" name='textOfImage' />
                <label htmlFor="caption">Caption</label>
                <input type="text" name='caption' />
                <label htmlFor="Date">Date</label>
                <input type="text" name='Date' />

                <label htmlFor="select">Do you want to add multiple images or single image</label>
                <select name='select'>
                    <option>Multiple</option>
                    <option>Single</option>
                </select>
                <input type="file" onChange={handleFileInputChange} />

                <button className='GalleryFormSubmitButton' type='submit'>Submit</button>
            </form>

            { previewSource && ( <img src={previewSource} alt="" height='200px'/> ) }
        </div>
        // <div className="GalleryManage">
            
        // </div>
    )
}

export default GalleryForm