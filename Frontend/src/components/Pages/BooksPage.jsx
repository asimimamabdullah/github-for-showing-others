import React, { useEffect, useState } from 'react'
import './BooksPageStyling.css'
import axios from 'axios'

let BooksPage = (props) => {
    useEffect( () => {
        // document.querySelector('.Header').style.display = 'none'
    })

    let [books, setBooks] = useState({
        allBooks: []
    })
    let data = async () => {
        await axios.get('http://localhost:5000/')
            .then((response) => {
                setBooks({ allBooks: response.data })
                // console.log(response.data)
            })
            .catch( (error) => {
                console.log(error)
            })
    }

    useEffect(data)

    const fd = new FormData()
    fd.append('image', 'something')
    
    console.log('this is fd ', fd)
    return (
        <div className="BooksPage">
            <div className="booksCards">
                {props.books.map((book, index) => {
                    return (
                        <div className="bookCard" key={index}>
                            <div className="bookCardImg"><img src={book.image} alt="" /></div>
                            <div className="upper">
                                <div className="bookCardText">
                                    <h1 style={{'color': 'rosybrown'}}>{book.title}</h1>
                                    <h3>{book.description}</h3>
                                    <div className="bookCardButton"><button>download</button></div>
                                </div>
                                <table style={{'width': '100%', 'textAlign': 'left'}}>
                                    <thead>
                                        <tr>
                                            <th>Book Details:</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                    <tr>
                                        <td className='writer'>Writer: {book.writer}</td>
                                        <td className='publisher'>Publisher:  {book.publisher}</td>
                                    </tr>
                                    <tr>
                                        <td>{book.editions.edition.editionNumber} Edition:  {book.editions.edition.editionDate}</td>
                                        <td>Contact: {book.contact}</td>
                                    </tr>
                                    {book.editions.edition2 ? <tr><td>{book.editions.edition2.editionNumber} Edition: {book.editions.edition2.editionDate}</td></tr> : null}
                                    
                                    </tbody>
                                </table>
                            </div>
                            <hr style={{'width': '90%', 'border': 'none', 'borderBottom': '2px solid rgb(224, 218, 218)'}} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default BooksPage

