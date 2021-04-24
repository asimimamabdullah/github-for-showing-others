// import React from 'react'
// import Header from './Header'
// import Slider from './Slider'
// import Sairuliflaq from './Sair-ul-Iflaq'
// // import MailingList from './MailingList'
// import BookSection from './BookSection'
// import Gallery from './Gallery'
// import Contact from './Contact'
// import Footer from './Footer'
// import Page from './Pages/Page'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom"

// let App = () => {
    

    
//     return (
//         <Router>
//             <div>
//             <Header />
//             <Slider />
//             {/* <button onClick={handleClick} type='submit'>thanks</button>  */}
//             <Sairuliflaq />
//             <BookSection />
//             <Gallery />
//             <Contact />
//             <Footer />

//             {/* <Switch> */}
//                 <Route path='/page' exact component={Page} />
//             {/* </Switch> */}
//         </div>
//         </Router>

//     )
// }

// export default App












import React, { useState } from 'react'
import Main from './Main'
import BooksPage from './Pages/BooksPage'
import Slider from './Slider'
import Sairuliflaq from './Sair-ul-Iflaq'
// import MailingList from './MailingList'
import BookSection from './BookSection'
import Gallery from './Gallery'
import Contact from './Contact'
import Footer from './Footer'
import GalleryPage from './Pages/GalleryPage'
import Nisab from './Pages/Nisab'
import UploadPage from './Pages/UploadPage'
import Manage from './Pages/Manage'
//slider images
import slider1 from './images/Slider-1.png'
import slider2 from './images/Slider-2.png'
import slider3 from './images/slider-3.jpg'
import slider4 from './images/slider-4.jpg'
import slider5 from './images/slider-5.jpg'
import slider6 from './images/slider-6.jpg'
import slider7 from './images/galaxy.jpg'
import slider8 from './images/galaxy1.jpg'
//books
import Book1 from './images/books/sairuliflaq.jpg'
import Book2 from './images/books/Haal-e-Safar.jpg'
import Book3 from './images/books/ZAR-E-BAGH.jpg'
import Book4 from './images/books/MANZAR-MANZAR-DHOOP.jpg'
import Book5 from './images/books/SHAM-PAI-BIN-SHAM.jpg'
// import * as Images from './images'


let App = () => {


    let [sliderImages, setSliderImages] = useState([{slider: slider1}, {slider: slider2, text: 'This is the Text'}, {slider: slider3}, {slider: slider4}, {slider: slider5}, {slider: slider6}, {slider: slider7}, {slider: slider8}])
    let [Books, setBooks] = useState([
        {
            image: Book1,
            title: 'Sair-ul-Iflaq',
            editions: { edition: { 'editionNumber': '01', 'editionDate': 'Oct, 2006' }, edition2: { 'editionNumber': '21', 'editionDate': 'Nov, 2018' } },
            publisher: 'sahibzada nehal bakht',
            writer: 'Faqir Tabish Kamal',
            description: 'This is a book. This is a book. This is a book. This is a book. This is a book. This is a book. '
        },
        {
            image: Book2,
            title: 'Haal-e-Safar',
            editions: { edition: { 'editionNumber': '01', 'editionDate': 'May, 1987' }, edition2: { 'editionNumber': '21', 'editionDate': 'Dec, 2010' } },
            publisher: 'sahibzada nehal bakht',
            writer: 'Hazrat Faqir Bagh Hussain Kamal (R.A)',
            description: 'This is a book. This is a book. This is a book. This is a book. This is a book. This is a book. '
        },
        {
            image: Book3,
            title: 'Zar-e-Bagh',
            editions: { edition: { 'editionNumber': '01', 'editionDate': 'May, 1987' }, edition2: { 'editionNumber': '21', 'editionDate': 'Dec, 2010' } },
            publisher: 'sahibzada nehal bakht',
            writer: 'Faqir Tabish Kamal',
            description: 'This is a book. This is a book. This is a book. This is a book. This is a book. This is a book. '
        },
        {
            image: Book4,
            title: 'Manzar-Manzar-Dhoop',
            editions: { edition: { 'editionNumber': '01', 'editionDate': 'May, 1987' }, edition2: { 'editionNumber': '21', 'editionDate': 'Dec, 2010' } },
            publisher: 'sahibzada nehal bakht',
            writer: 'Faqir Tabish Kamal',
            description: 'This is a book. This is a book. This is a book. This is a book. This is a book. This is a book. '
        },
        {
            image: Book5,
            title: 'Sham pai bin sham',
            editions: { edition: { 'editionNumber': '01', 'editionDate': 'May, 1987' }, edition2: { 'editionNumber': '21', 'editionDate': 'Dec, 2010' } },
            publisher: 'sahibzada nehal bakht',
            writer: 'Faqir Tabish Kamal',
            description: 'This is a book. This is a book. This is a book. This is a book. This is a book. This is a book. '
        }
    ])

    return (
        <Router>
            {/* <Main /> */}

            <Switch>
                <Route path='/Books'>
                    <Main />
                    <BooksPage books={Books} />
                </Route>
                <Route path='/upload'>
                    <Main />
                    <UploadPage />
                </Route>
                <Route path='/Gallery'>
                    <Main />
                    <GalleryPage images={sliderImages} />
                </Route>
                <Route path='/Nisab'>
                    <Main />
                    <Nisab />
                </Route>
                <Route path='/manage'>
                    <Manage images={sliderImages} />
                </Route>
                <Route path='/'>
                    <Main />
                    <Slider images={sliderImages} />
                    <Sairuliflaq />
                    <BookSection Books={Books} />
                    <Gallery />
                    <Contact />
                    <Footer />
                </Route>
            </Switch>
        </Router>
    )
}


export default App