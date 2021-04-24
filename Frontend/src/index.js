import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'


ReactDOM.render(
    <App />,
    document.getElementById('root')

)


// let card = document.querySelector('.EventsImagesSection')
// let gallery = document.querySelector('.Gallery')
//     let cardes = card.querySelectorAll('.CardForGallery')
// //     cardes.forEach(car => {
// //         console.log(car);
// // })
// let startDrag
// let endDrag
// let totalDrag
// let realTotalDrag = 0
// let reallyVeryTotalDrag = 0
// let preReallyVeryTotalDrag = 0
// let x = 0
// let y = 0

// gallery.addEventListener('dragstart', e => {
//     startDrag = e.screenX
//     y = e.screenX
//     console.log(`Start Drag: ${startDrag}`);
// })

// gallery.addEventListener('drag', (e) => {
//     console.log(e.screenX);

//     // preReallyVeryTotalDrag = e.screenX - startDrag
//     // reallyVeryTotalDrag = reallyVeryTotalDrag + preReallyVeryTotalDrag
//     // if (totalDrag < 0)
//     //     totalDrag = Math.abs(totalDrag)
//     // else if (totalDrag > 0)
//     //     totalDrag = -(totalDrag)
//     // if (x === 0) {x = e.screenX}
//     // else if (x === e.screenX) {
//     //     x = e.screenX
//     //     console.log(`x : ${x}`);
//     // }
    
//     // else if (x !== 0 && x !== e.screenX) {
//     //     preReallyVeryTotalDrag = e.screenX - y
//     //     reallyVeryTotalDrag = reallyVeryTotalDrag + preReallyVeryTotalDrag
//     //     y = x
//     //     x = 0

//     // }


//     cardes.forEach(car => {
//         car.style.transform = `translateX(${x - y}px)`
//         x = e.screenX
//     })
// })
// let imgSecwid = document.querySelector('.EventsImagesSection').clientWidth
// gallery.addEventListener('dragend', e => {
//     endDrag = e.screenX
//     // console.log(`End Drag: ${endDrag}`)
//     totalDrag = startDrag - endDrag
//     // console.log(`Total Drag: ${totalDrag}`)
//     if (totalDrag < 0)  {totalDrag = Math.abs(totalDrag)}
//     else if (totalDrag > 0) {totalDrag = -(totalDrag)}
    
//     realTotalDrag = realTotalDrag + totalDrag
//     // console.log(realTotalDrag);
//     if(realTotalDrag > 0)   {realTotalDrag = 0}
//     console.log(`Gallery Images Section width : ${imgSecwid}`)

//     cardes.forEach(car => {
//         // car.style.transform = `translateX(${totalDrag}px)`
//         // console.log(cardes.length)
//         console.log(car.clientWidth)
//         const cardLength = cardes.length
//         const width = car.clientWidth
//         const allCardsWidthCalc = (width * cardLength) + ( (20 * cardLength) * 2 )
//         const calc = imgSecwid - allCardsWidthCalc
        
//         if( realTotalDrag < calc )  realTotalDrag = calc
//         car.style.transform = `translateX(${realTotalDrag}px)`
//     })

//     x = 0
//     y = 0
// })


