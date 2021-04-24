import React from 'react'


let BooksForm = () => {
    return (
        <div className="mainBooksForm">
            <h1>this is books form </h1>

            <form className='BooksForm'>
                <label htmlFor="name">Name:</label>
                <input type="text" name='name' />
                <label htmlFor="titleOfBook">Title of Book:</label>
                <input type="text" name='titleOfBook' />
                <label htmlFor="description">Description of the Image:</label>
                <input type="text" name='description' />
                <label htmlFor="date">Date:</label>
                <input type="text" name='date' />

                <input type='file' />

                <button type='submit' className='BooksFormSubmitButton'>Submit</button>
            </form>
        </div>
    )
}

export default BooksForm