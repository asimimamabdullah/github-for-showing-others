import React, { useEffect, useState } from 'react'

import './Styles-components.css'
// import { Button } from '@material-ui/core';


let BookSection = (props) => {


    

    let [textIndex, setTextIndex] = useState(0)



        






    useEffect(() => {
    // window.addEventListener('DOMContentLoaded', () => {

        const bookSection = document.querySelector('.Books'),
        books = document.querySelectorAll('.otherSection'),
        BooksForSlide = document.querySelectorAll('.imageSlide')

        let isDragging = false,
            startPos = 0,
            currentTranslate = 0,
            prevTranslate = 0,
            animationID = 0,
            currentIndex = 0,
            totalTranslate = (books.length - 1) * -bookSection.clientWidth


        let getPositionX = (e) => {
            return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX
        }

        let setSliderPosition = () => {
            books.forEach(book => {
                book.style.transform = `translate(${currentTranslate}px)`
            })
        }
        let animation = () => {
            setSliderPosition()
            
            if ( isDragging ) {
                requestAnimationFrame(animation)
            }
        }

        let setPositionByIndex = () => {
            currentTranslate = currentIndex * (-books[0].clientWidth)
            prevTranslate = currentTranslate

            setSliderPosition()
        }

        let touchStart = (index) => {
            return (e) => {
                startPos = getPositionX(e)
                isDragging = true
                currentIndex = index
                setTextIndex(currentIndex)
                // console.log(`${index} index`)

                animationID = requestAnimationFrame(animation)

                bookSection.classList.add('grab')

            }
        }
        
        let touchMove = (e) => {
            if (isDragging) {
                const currentPosition = getPositionX(e)
                console.log('moving')

                // console.log(currentPosition)
                currentTranslate = prevTranslate + currentPosition - startPos

                if (currentTranslate > 0)
                    currentTranslate = 0
                if( currentTranslate < totalTranslate )
                    currentTranslate = totalTranslate
                
                setTextIndex(() => currentIndex)
            }
        }

        let touchEnd = () => {
            isDragging = false
            cancelAnimationFrame(animationID)
            
            const movedBy = currentTranslate - prevTranslate
            if( movedBy < -50 && currentIndex < books.length - 1 ){
                // console.log('in plus')
                currentIndex += 1
            }
            if( movedBy > 50 && currentIndex > 0 ){
                // console.log('in miinus')
                currentIndex -= 1
            }
            
            // console.log(`${currentIndex} index and ${bookSection.clientWidth} width`)
            setTextIndex(currentIndex)
            
            setPositionByIndex()
            
            bookSection.classList.remove('grab')

            

        }

            
        
        books.forEach((book, index) => {      

            bookSection.addEventListener('dragstart', e => e.preventDefault())
            book.addEventListener('dragstart', e => e.preventDefault())

            //  Touch Events
            book.addEventListener('touchstart', touchStart(index))
            book.addEventListener('touchmove', touchMove)
            book.addEventListener('touchend', touchEnd)

            //  Mouse Events
            book.addEventListener('mousedown', touchStart(index))
            book.addEventListener('mouseleave', touchEnd)
            book.addEventListener('mouseup', touchEnd)
            book.addEventListener('mousemove', touchMove)


        })


        BooksForSlide.forEach((book, index) => {   
            book.addEventListener('click', e => {
                currentIndex = index
                setTextIndex(currentIndex)
                setPositionByIndex()
            })
        })
    
    }, [])
    
    return (
        <div className="MainBookSectionAll">
            <div className='BookSection'>
                <div className="sideRotatedText">
                    <hr className='line' />
                    <h1 className='BookSectionTitle'>{props.Books[textIndex].title}</h1>
                </div>
                <div className="textSection" data-content='Sair-ul-Iflaq'>
                    <h1>{props.Books[textIndex].title}</h1>
                </div>
                <div className="Books">
                    {props.Books.map((book) => {
                        return (
                            <div className="otherSection">
                                <div className='flexSection'>
                                    <div className="textSection1">
                                        <h1> { book.title } </h1> <br /> <br/> 
                                        <p> { book.description } </p>
                                    </div>
                                    <div className="imageSection">
                                        <img src={ book.image } alt=""/>
                                    </div>

                                </div>
                                <div className="button">
                                    <button>Read Book</button>
                                </div>
                            </div>
                            
                        )
                    }) }
                    
                </div>
            </div>

            <div className="BooksImagesForSlide">
                {props.Books.map((book) => {
                    return (
                        <div className="imageSlide">
                            <img src={book.image} alt="" draggable='false'/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default BookSection


{/* <div className="otherSection">
                    <div className='flexSection'>
                        <div className="textSection1">
                            <h1>Sair ul Iflaq</h1> <br /> <br/> 
                            <p>This is a book this is a book this is a book this is a book this is a book</p>
                        </div>
                        <div className="imageSection">
                            <img src={Book1} alt=""/>
                        </div>

                    </div>
                    <div className="button">
                        <button>Read Book</button>
                    </div>
                </div>

                <div className="otherSection">
                    <div className='flexSection'>
                        <div className="textSection1">
                            <h1>Sair ul Iflaq</h1> <br /> <br/> 
                            <p>This is a book this is a book this is a book this is a book this is a book</p>
                        </div>
                        <div className="imageSection">
                            <img src={Book1} alt=""/>
                        </div>

                    </div>
                    <div className="button">
                        <button>Read Book</button>
                    </div>
                </div>

                <div className="otherSection">
                    <div className='flexSection'>
                        <div className="textSection1">
                            <h1>Sair ul Iflaq</h1> <br /> <br/> 
                            <p>This is a book this is a book this is a book this is a book this is a book</p>
                        </div>
                        <div className="imageSection">
                            <img src={Book1} alt=""/>
                        </div>

                    </div>
                    <div className="button">
                        <button>Read Book</button>
                    </div>
                </div>

                <div className="otherSection">
                    <div className='flexSection'>
                        <div className="textSection1">
                            <h1>Sair ul Iflaq</h1> <br /> <br/> 
                            <p>This is a book this is a book this is a book this is a book this is a book</p>
                        </div>
                        <div className="imageSection">
                            <img src={Book1} alt=""/>
                        </div>

                    </div>
                    <div className="button">
                        <button>Read Book</button>
                    </div>
                </div>

                <div className="otherSection">
                    <div className='flexSection'>
                        <div className="textSection1">
                            <h1>Sair ul Iflaq</h1> <br /> <br/> 
                            <p>This is a book this is a book this is a book this is a book this is a book</p>
                        </div>
                        <div className="imageSection">
                            <img src={Book1} alt=""/>
                        </div>

                    </div>
                    <div className="button">
                        <button>Read Book</button>
                    </div>
                </div> */}