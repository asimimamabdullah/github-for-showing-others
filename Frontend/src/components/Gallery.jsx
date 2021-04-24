import React, { useEffect, useState } from 'react'
import Card from './CardForGallery'
import './Styles-components.css'
import Galaxy from './images/galaxy.jpg'
import Galaxy1 from './images/galaxy1.jpg'


let Gallery = () => {


    let [cards, setCards] = useState([{image: Galaxy, title: 'This is the Image', paragraph: 'this is a paragraph this is a paragraph this is a paragraph this is a paragraph this is a paragraph'}, {image: Galaxy1, title: 'This is the Image', paragraph: 'this is a paragraph this is a paragraph this is a paragraph this is a paragraph this is a paragraph'}, {image: Galaxy1, title: 'This is the Image', paragraph: 'this is a paragraph this is a paragraph this is a paragraph this is a paragraph this is a paragraph'}, {image: Galaxy1, title: 'This is the Image', paragraph: 'this is a paragraph this is a paragraph this is a paragraph this is a paragraph this is a paragraph'}, {image: Galaxy1, title: 'This is the Image', paragraph: 'this is a paragraph this is a paragraph this is a paragraph this is a paragraph this is a paragraph'}])

    useEffect(() => {

        // document.addEventListener('DOMContentLoaded', () => {
            const ImageSection = document.querySelector('.EventsImagesSection'),
                Cards = document.querySelectorAll('.CardForGallery')
                
                ImageSection.addEventListener('dragstart', e => e.preventDefault())

            
            let dragging = false,
                initialPosition = 0,
                currentTranslate = 0,
                prevTranslate = 0,
                animationID = 0,
                currentIndex = 0,
                totalTranslate = ((Cards.length - 1) * -Cards[0].clientWidth) - ((Cards.length - 1) * 20)
            
            let getPositionX = (e) => {
                return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX
            }
            
            let setSliderPosition = () => {
                Cards.forEach(card => {
                    // if (currentTranslate === 0) {
                    //     card.style.transform = `translate(${currentTranslate}px)`
                    // } else if (currentTranslate < 0) {
                    //     card.style.transform = `translate(${currentTranslate - 20}px)`
                        
                    // }
                    card.style.transform = `translate(${currentTranslate}px)`

                    
                })
            }
            let animation = () => {
                setSliderPosition()
                if( dragging )  requestAnimationFrame(animation)
            }

            let setPositionByIndex = () => {
                if (currentTranslate === 0) {
                    currentTranslate = currentIndex * -Cards[0].clientWidth
                } else if (currentTranslate < 0) {
                    currentTranslate = (currentIndex * -Cards[0].clientWidth) - (currentIndex * 20)
                    
                }
                // currentTranslate = currentIndex * -Cards[0].clientWidth
                prevTranslate = currentTranslate

                console.log(`${currentTranslate} current translate`)
                setSliderPosition()
            }


            let touchStart = (index) => {
                return (e) => {
                    // currentIndex = index
                    dragging = true
                    initialPosition = getPositionX(e)

                    animationID = requestAnimationFrame(animation)
                    console.log(initialPosition + ' start')
                    
                }
            }

            let touchEnd = () => {
                
                const moved = currentTranslate - prevTranslate
                dragging = false
                console.log(`${moved} moved`)

                if( moved < -50 && currentIndex < Cards.length - 1 )
                    currentIndex += 1
                if( moved > 50 && currentIndex > 0 )
                    currentIndex -= 1

                setPositionByIndex()

                cancelAnimationFrame(animationID)
            }

            let touchMove = (e) => {
                if (dragging) {
                    const currentPosition = getPositionX(e)
                    currentTranslate = prevTranslate + currentPosition - initialPosition


                    if (currentTranslate > 0) {
                        currentTranslate = 0
                    }
                    if (currentTranslate < totalTranslate) {
                        currentTranslate = totalTranslate
                    }
                    console.log(`${currentPosition} current`)
                    
                }
            }
            

            // ImageSection.addEventListener('mousedown', touchStart)
            Cards.forEach((card, index) => {


                //  Mouse Events
                card.addEventListener('mousedown', touchStart(index))
                card.addEventListener('mouseup', touchEnd)
                // ImageSection.addEventListener('mouseleave', touchEnd)
                card.addEventListener('mouseleave', touchEnd)
                card.addEventListener('mousemove', touchMove)

                //  Touch Events
                card.addEventListener('touchstart', touchStart(index))
                card.addEventListener('touchmove', touchMove)
                card.addEventListener('touchend', touchEnd)
            })
        // })
    })


    return (
        <div className="Gallery">
            <div className="AbsoluteText">
                <h1>check the gallery</h1>
            </div>
            <div className="EventsImagesSection">
                {/* <Card image={Galaxy} title='This is the Image' paragraph='this is a paragraph this is a paragraph this is a paragraph this is a paragraph this is a paragraph' /> 
                <Card image={Galaxy1} title='This is the Image' paragraph='this is a paragraph this is a paragraph this is a paragraph this is a paragraph this is a paragraph' />  */}
                {cards.map((card, index) => {
                    return (<Card key={index} image={card.image} title={card.title} paragraph={card.paragraph} />)
                })}
            </div>
        </div>
    )
}


export default Gallery