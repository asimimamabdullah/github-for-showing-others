import React, { useEffect } from 'react'

let Slider = (props) => {

    useEffect(() => {


        // window.addEventListener('DOMContentLoaded', (e) => {
            const slider = document.querySelector('.Slider'),
                slides = document.querySelectorAll('.carousal'),
                prevBtn = document.querySelector('.PrevBtn'),
                nextBtn = document.querySelector('.NextBtn')

            let isDragging = false,
                startPos = 0,
                currentTranslate = 0,
                prevTranslate = 0,
                animationID = 0,
                currentIndex = 0,
                totalTranslate = (slides.length - 1) * (-slider.clientWidth)
                

            let getPositionX = (e) => {
                return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX
            }

            let setSliderPosition = () => {
                slides.forEach(slide => {
                    slide.style.transform = `translate(${currentTranslate + -1}px)`
                })
            }

            let animation = () => {
                setSliderPosition()

                if( isDragging )    requestAnimationFrame(animation)
            }

            let setPositionByIndex = () => {
                // if(currentIndex < 0)    currentIndex = 0
                // if(currentIndex > slides.length)    currentIndex = ((slides.length) - 1)
                currentTranslate = currentIndex * -slider.clientWidth
                // console.log(`${currentTranslate} check`)
                prevTranslate = currentTranslate
                // console.log(`${slider.clientWidth} slider width`)
                setSliderPosition()
            }

            let touchStart = (index) => {
                return (e) => {
                    clearInterval()
                    startPos = getPositionX(e)
                    isDragging = true
                    currentIndex = index
                    console.log(`${index} index`)
                    animationID = requestAnimationFrame(animation)
                    slider.classList.add('grabbing')
                }
            }

            let touchEnd = (e) => {
                // console.log('end')
                isDragging = false
                cancelAnimationFrame(animationID)
                
                const movedBy = currentTranslate - prevTranslate
                
                if (movedBy < -100 && currentIndex < slides.length - 1) {
                    currentIndex += 1                    
                }
                if (movedBy > 100 && currentIndex > 0) {
                    currentIndex -= 1
                }
                setPositionByIndex()
                
                slider.classList.remove('grabbing')
            }


            let touchMove = (e) => {
                // console.log(`${totalTranslate} total`)
                clearInterval(interval)
                if (isDragging) {
                    console.log('moving')

                    const currentPosition = getPositionX(e)

                    // console.log(totalTranslate)
                    currentTranslate = prevTranslate + currentPosition - startPos
                    if (currentTranslate > 0) {
                        currentTranslate = 0
                    }
                    if (currentTranslate < totalTranslate) {
                        currentTranslate = totalTranslate
                    }
                        
                }
                
            }
            
            
            let prevSlide = (e) => {
                if( currentIndex < slides.length - 1 )
                    currentIndex += 1
                setPositionByIndex()
            }

            let nextSlide = (e) => {              
                if ( currentIndex > 0 )
                    currentIndex -= 1
                setPositionByIndex()
                
            }

            let interval = setInterval(() => {
                if( currentIndex < slides.length - 1 )  currentIndex += 1
                setPositionByIndex()
            }, 3000);
                
            slides.forEach((slide, index) => {
                
                // slider.addEventListener('dragstart', e => e.preventDefault())
                // slide.querySelector('img').addEventListener('dragstart', e => e.preventDefault())
                // slide.addEventListener('drag', e => e.preventDefault())

                

                //  Touch Events
                slide.addEventListener('touchstart', touchStart(index))
                slide.addEventListener('touchmove', touchMove)
                slide.addEventListener('touchend', touchEnd)

                //  Mouse Events
                slide.addEventListener('mousedown', touchStart(index))
                slide.addEventListener('mouseup', touchEnd)
                slide.addEventListener('mouseleave', touchEnd)
                slide.addEventListener('mousemove', touchMove)
                
                slide.addEventListener('mouseenter', e => {
                    clearInterval(interval)
                })
            })
            
            //  Button Events
            prevBtn.addEventListener('click', nextSlide)
            nextBtn.addEventListener('click', prevSlide)
            
        // })
    })
    
    
    return (
        <div className='MainSlider'>
            
            <div className='Slider'>

                {
                    props.images.map((image) => {
                        return (
                            <div className={`carousal ${image.text ? 'carousal-with-text' : ''}`}>
                                {image.text ? <div className='carousal-text'><h1>{image.text}</h1></div> : null }
                                {image.text ? <div className="carousal-img"><img src={image.slider} alt="" style={{maxWidth:'70%', width: '70%', height: '100%'}} /></div> : <img src={image.slider} alt="" /> }
                                
                            </div>
                        )
                    })
                }

                {/* <div className='carousal' id='slider-img1'>
                    <img src={slider1} alt=""  />
                </div>
                <div className='carousal carousal-with-text' id='slider-img2'>
                    <div className="carousal-text"><h1>This is the text</h1></div>
                    <div className='carousal-img'><img src={slider2} alt="" style={{maxWidth:'70%', width: '70%', height: '100%'}} /></div>
                </div>
                <div className='carousal' id='slider-img3'>
                    <img src={slider3} alt=""/>
                </div>
                <div className='carousal' id='slider-img4'>
                    <img src={slider4} alt=""  />
                </div>
                <div className='carousal' id='slider-img5'>
                    <img src={slider5} alt=""  />
                </div>
                <div className='carousal' id='slider-img6'>
                    <img src={slider6} alt=""  />
                </div> */}
                <div className="Btns">
                <div className="PrevBtn">
                    <h1>◀</h1>
                </div>
                <div className="NextBtn">
                    <h1>▶</h1>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Slider