import React, { useEffect, useState } from 'react'
// import GalleryPageFront from '../images/galaxy.jpg'
import './GalleryPageCss.css'


let Gallery = (props) => {

    let [some, setSome] = useState(props.images)
    let [opened, setOpened] = useState(false)

    //start slider in useeffect

    const cards = document.querySelectorAll('.GalleryPageImage'),
        Slider = document.querySelector('.SliderForGalleryPage'),
        slides = document.querySelectorAll('.carousalForGalleryPage')


    let startPos = 0,
        currentTranslate = 0,
        currentIndex = 0,
        prevTranslate = 0,
        animationID = 0,
        isDragging = false;  



    let setSliderPosition = () => {
        slides.forEach(slide => {
            slide.style.transform = `translate(${currentTranslate}px)`
        })
        // Slider.style.transform = `translate(40px)`
    }

    let getPositionX = (e) => {
        return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX
    }


    let animation = () => {
        setSliderPosition()

        if( isDragging )    requestAnimationFrame(animation)
    }

    let setPositionByIndex = () => {
        currentTranslate = currentIndex * (-Slider.clientWidth)
        prevTranslate = currentTranslate

        setSliderPosition()
    }

    

    let touchStart = (index) => {
        return (e) => {
            currentIndex = index
            startPos = getPositionX(e)
            
            isDragging = true
            console.log('mouse down!')
            animationID = requestAnimationFrame(animation)
        }        
    }

    let touchEnd = () => {
        console.log('Mouse up!')
        isDragging = false
        cancelAnimationFrame(animationID)

        const moved = currentTranslate - prevTranslate
        if( moved > 100 && currentIndex > 0)
            currentIndex -= 1
        else if( moved < -100 && currentIndex < (slides.length - 1) )
            currentIndex += 1

        setPositionByIndex()
    }

    let touchMove = (e) => {
        if( isDragging === true ){
            const currentPosition = getPositionX(e)
            currentTranslate = prevTranslate + currentPosition - startPos 
            console.log('moving!')
        }   else {
            currentTranslate = prevTranslate
        }
    }


    //end slider in useeffect





    let openSlider = (index) => {
        return (e) => {
            document.querySelector('.SliderForGalleryPage').style.visibility = 'visible'

            console.log(some)
            setOpened(true)
        }
    }


    let hideSlider = (e) => {
        if(opened){
            if(e.target.alt === 'slider' || e.target.className === 'SliderForGalleryPage'){
                document.querySelector('.SliderForGalleryPage').style.visibility = 'visible'
            } else {
                document.querySelector('.SliderForGalleryPage').style.visibility = 'hidden'
            }
            setOpened(false)
        }
    }

    let handleDragStart = (e) => {
        console.log(e)
    }
    
    useEffect(() => {
        // let cards = document.querySelectorAll('.GalleryPageImage')
        
        // const cards = document.querySelectorAll('.GalleryPageImage'),
        // Slider = document.querySelector('.SliderForGalleryPage'),
        // slides = document.querySelectorAll('.carousalForGalleryPage')

        // let startPos = 0,
        //     currentTranslate = 0,
        //     currentIndex = 0,
        //     prevTranslate = 0,
        //     animationID = 0,
        //     isDragging = false;  


            // let setSliderPosition = () => {
            //     slides.forEach(slide => {
            //         slide.style.transform = `translate(${currentTranslate}px)`
            //     })
            //     // Slider.style.transform = `translate(40px)`
            // }


            // let getPositionX = (e) => {
            //     return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX
            // }
            
        //     let animation = () => {
        //         setSliderPosition()

        //         if( isDragging )    requestAnimationFrame(animation)
        //     }

        //     let setPositionByIndex = () => {
        //         currentTranslate = currentIndex * (-Slider.clientWidth)
        //         prevTranslate = currentTranslate

        //         setSliderPosition()
        //     }
        
        

        // let touchStart = (index) => {
        //     return (e) => {
        //         currentIndex = index
        //         startPos = getPositionX(e)
                
        //         isDragging = true
        //         console.log('mouse down')
        //         animationID = requestAnimationFrame(animation)
        //     }        
        // }
    
        // let touchEnd = () => {
        //     console.log('Mouse up!')
        //     isDragging = false
        //     cancelAnimationFrame(animationID)

        //     const moved = currentTranslate - prevTranslate
        //     if( moved > 100 && currentIndex > 0)
        //         currentIndex -= 1
        //     else if( moved < -100 && currentIndex < (slides.length - 1) )
        //         currentIndex += 1

        //     setPositionByIndex()
        // }
    
        // let touchMove = (e) => {
        //     if( isDragging === true ){
        //         const currentPosition = getPositionX(e)
        //         currentTranslate = prevTranslate + currentPosition - startPos 
        //         console.log('moving!')
        //     }   else {
        //         currentTranslate = prevTranslate
        //     }
        // }



        



        slides.forEach((slide, index) => {

            // Slider.addEventListener('dragstart', e => e.preventDefault())
            // slide.addEventListener('dragstart', e => e.preventDefault())
            slide.querySelector('img').addEventListener('dragstart', e => e.preventDefault())


            //touch Events
            slide.addEventListener('touchstart', touchStart(index))
            slide.addEventListener('touchend', touchEnd)
            slide.addEventListener('touchmove', touchMove)

            //Mouse Events
            slide.addEventListener('mousedown', touchStart(index))
            slide.addEventListener('mousemove', touchMove)
            slide.addEventListener('mouseleave', touchEnd)
            slide.addEventListener('mouseup', touchEnd)

        })

        cards.forEach((card, index) => {
            card.addEventListener('click', (e) => {
            })

        })


        


        
    })

    let handleClick = (e) => {
        let target = e.target
        const list = document.querySelectorAll('.li')
        list.forEach(li => {
            li.classList.remove('active')
        })

        target.classList.add('active')
    }


    
    



    
    return (
        <div className="GalleryPage" onClick={hideSlider}>
            


            <div className="List">
                <ul>
                    <li onClick={handleClick} className='li active' onDrag={handleDragStart}>All</li>
                    <li onClick={handleClick} className='li'>Latest</li>
                    <li onClick={handleClick} className='li'>Old</li>
                    <li onClick={handleClick} className='li'>Older</li>
                    <li onClick={handleClick} className='li'>Oldest</li>
                </ul>
            </div>
            

            <div className="Images" id='Images'>
                {/* <div click={GalleryPageHandleClick} className="GalleryPageImage"><img src={props.images[3].slider} alt="" /></div> */}

                {
                    some.map((image, index) => {
                        return <div key={index} className="GalleryPageImage" onClick={openSlider(index)}><img src={image.slider} alt="openSlider"/></div>
                    })
                }
            </div>

            <div className="SliderForGalleryPage" onClick={hideSlider}>
                {
                    some.map((slide, index) => {
                        return (
                            slide.text ?
                            <div className="carousalForGalleryPage carousal-with-text">
                                <div className="carousal-text">{slide.text}</div>
                                <div className="carousal-img"><img src={slide.slider} alt="slider" style={{maxWidth:'70%', width: '70%', height: '100%'}} /></div>
                            </div>  :
                            <div className="carousalForGalleryPage"><img src={slide.slider} alt="slider"/></div>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default Gallery