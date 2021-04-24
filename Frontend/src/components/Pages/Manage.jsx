import React, { useEffect, useState } from 'react'
import SliderForm from './ManagePages/SliderForm'
import GalleryForm from './ManagePages/GalleryForm'
import BooksForm from './ManagePages/BooksForm'
import './ManageStyles.css'
import './DashboardStyles.css'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ImportContactsRoundedIcon from '@material-ui/icons/ImportContactsRounded';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import SlideshowIcon from '@material-ui/icons/Slideshow';
import Icon from '@material-ui/core/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Logo from '../Logo.svg'
import User from '../images/my.jpeg'
import toggle1 from '../images/menu1.png'
import viewpng from '../images/view64.png'
const view = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDIgOTggOTgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAyIDk4IDk4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOnVybCgjU1ZHSURfMV8pO30KCS5zdDF7ZmlsbDp1cmwoI1NWR0lEXzJfKTt9Cjwvc3R5bGU+CjxnPgoJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI0OSIgeTE9IjIyIiB4Mj0iNDkiIHkyPSI4MCI+CgkJPHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBFRkQxIi8+CgkJPHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBBQ0VBIi8+Cgk8L2xpbmVhckdyYWRpZW50PgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTkzLjksNDkuMkM5My43LDQ5LDg4LjksNDIuNCw4MSwzNS43QzcwLjQsMjYuNyw1OS4zLDIyLDQ5LDIyQzI0LjMsMjIsNC45LDQ4LjEsNC4xLDQ5LjIgICBjLTAuOCwxLjEtMC44LDIuNSwwLDMuNUM0LjMsNTMsOS4xLDU5LjYsMTcsNjYuM0MyNy42LDc1LjMsMzguNyw4MCw0OSw4MGMyNC43LDAsNDQuMS0yNi4xLDQ0LjktMjcuMiAgIEM5NC43LDUxLjcsOTQuNyw1MC4zLDkzLjksNDkuMnogTTQ5LDc0Yy0xOC4yLDAtMzQtMTcuMy0zOC43LTIzQzE1LDQ1LjMsMzAuNywyOCw0OSwyOGMxOC4yLDAsMzQsMTcuMywzOC43LDIzICAgQzgzLDU2LjcsNjcuMyw3NCw0OSw3NHoiLz4KCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMl8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iNDkuMDAwMSIgeTE9IjMzIiB4Mj0iNDkuMDAwMSIgeTI9IjY5Ij4KCQk8c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMEVGRDEiLz4KCQk8c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMEFDRUEiLz4KCTwvbGluZWFyR3JhZGllbnQ+Cgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNDksMzNjLTkuOSwwLTE4LDguMS0xOCwxOGMwLDkuOSw4LjEsMTgsMTgsMThjOS45LDAsMTgtOC4xLDE4LTE4QzY3LDQxLjEsNTguOSwzMyw0OSwzM3ogTTQ5LDYzICAgYy02LjYsMC0xMi01LjQtMTItMTJjMC02LjYsNS40LTEyLDEyLTEyYzYuNiwwLDEyLDUuNCwxMiwxMkM2MSw1Ny42LDU1LjYsNjMsNDksNjN6Ii8+CjwvZz4KPC9zdmc+Cg=='


let Manage = (props) => {

    // let [toDo, setToDo] = useState('')

    // let handleChange = (e) => {
    //     console.log(e.target.value)
    //     setToDo(e.target.value)
    //     // if(e.target.value === 'something') {
    //     //     setToDo(e.target.value)
    //     // } else if (e.target.value === 'anything') {
    //     //     setToDo(e.target.value)
    //     // }
    // }

    // let handleSubmit = (e) => {
    //     e.preventDefault()
    // }


    // let getImages = async () => {

    //     try {

    //         let response = await fetch('/getimages')
    //         let data = await response.json()
    //         // console.log(data)

    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

    // useEffect(() => {
    //     getImages()
    // }, [])



    const toggleMenu = () => {
        const toggle = document.querySelector('.toggle')
        const navigation = document.querySelector('.navigation')
        const main = document.querySelector('.main')
        main.classList.toggle('active')
        navigation.classList.toggle('active')
        toggle.classList.toggle('active')
    }

    useEffect(() => {
    }, [])

    const handleEnter = (e, index) => {
        // console.log(e.target)
        const imageCard = document.querySelectorAll('.imageCard')[index]

        imageCard.classList.toggle('active')
    }

    return (




        <div className="Dashboard">
            <div className="navigation">
                <ul>
                    <li>
                        <a href="#">
                            <span className='icon'><img src={Logo} alt="" width='150' /></span>
                            {/* <span className='title'><h2>Brand</h2></span> */}
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className='icon'><svg width='25' height='25' aria-hidden="true" focusable="false" data-prefix="far" data-icon="images" className="svg-inline--fa fa-images fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v48H54a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6v-10h48zm42-336H150a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6V86a6 6 0 0 0-6-6zm6-48c26.51 0 48 21.49 48 48v256c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h384zM264 144c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40zm-72 96l39.515-39.515c4.686-4.686 12.284-4.686 16.971 0L288 240l103.515-103.515c4.686-4.686 12.284-4.686 16.971 0L480 208v80H192v-48z"></path></svg></span>
                            <span className='title'>Gallery</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className='icon'><svg wdith='25' height='25' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" className="svg-inline--fa fa-home fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path></svg></span>
                            <span className='title'>Home</span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <span className='icon'><svg width='25' height='25' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="book-open" className="svg-inline--fa fa-book-open fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"></path></svg></span>
                            <span className='title'>Books</span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <span className='icon'><SlideshowIcon width='25' height='25' /></span>
                            <span className='title'>Slide Show</span>
                        </a>
                    </li>
                </ul>
            </div>


            <div className="main">
                <div className="topbar">
                    <div className="toggle" onClick={toggleMenu}><img src={toggle1} alt="" /></div>
                    <div className="user"><img className='userimage' src={User} alt="" width='50px' height='50px' /></div>
                </div>
                <div className="cardBox">
                    <div className="card">
                        <div>
                            <div className="numbers">1026</div>
                            <div className="cardName">Daily Visits</div>
                        </div>
                        <div className="iconBox"><img width='64' height='64' alt='' src={viewpng} color='blue' /></div>
                    </div>
                    <div className="card">
                        <div>
                            <div className="numbers">1026</div>
                            <div className="cardName">Daily Visits</div>
                        </div>
                        <div className="iconBox"><img width='64' height='64' alt='' src={viewpng} /></div>
                    </div>
                </div>

                <div className="GalleryManage">
                    <div className="GalleryTitle">
                        <h1>Gallery</h1>
                    </div>
                    
                    <div className="wrapper">
                    {
                        props.images && (props.images.map((image, index) => {
                            // return <img src={image.slider} alt="" width='150' />
                            return (
                                <div className="imageCard" onMouseEnter={(e) => handleEnter(e, index)}>
                                    <div className="imgSec"><img src={image.slider} alt="" /></div>
                                    <div className="name"><span>name</span></div>
                                    <hr className='hr' />
                                    <div className="fileType">
                                        <span>Jpg</span>
                                        <span>875.55 KB</span>
                                        <span>size</span>
                                    </div>
                                </div>
                            )
                        }))
                    }
                    </div>


                </div>

                

            </div>


        </div>


        // <div className="Manage" onSubmit={handleSubmit}>
        //     <h1>Managing the website</h1>
        //     <form className='SelectorForm'>
        //         <select onChange={handleChange} name="" id="">
        //             <option>Select an option</option>
        //             <option>Slider</option>
        //             <option>Gallery</option>
        //             <option>Books</option>
        //             <option>Nasb</option>
        //         </select>
        //     </form>

            

        //     { toDo === 'Slider' ? <SliderForm /> : toDo === 'Gallery' ? <GalleryForm /> : toDo === 'Books' ? <BooksForm /> : toDo === 'Nasb' ? <h1>{toDo}</h1> : null }
        // </div>
    )
}

export default Manage