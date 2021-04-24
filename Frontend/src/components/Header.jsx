import React, { useState } from 'react'
import logo from './Logo.svg'
import './Styles-components.css'



import {Link} from "react-router-dom"


let Header  = () => {
    let [menuButton, setMenuButton] = useState(false)

    let handleMouseEnter = (event) => {
        console.log(event)
    }

    function handleBarsClick() {
        let bars = document.querySelector('.bars')
        let nav = document.querySelector('nav')
        bars.classList.toggle('open')
        nav.classList.toggle('open')
        document.body.classList.toggle('open')
        // if(!menuButton){
        //     bars.classList.add('open')
        //     setMenuButton(true)
        // } else {
        //     bars.classList.remove('open')
        //     setMenuButton(false)
        // }
    }
    return (
        <div className='Header'>
            <div className="main-logo">
                <Link to='/'><img src={logo} alt="" /></Link>
            </div>
            <nav className='clickOpen'>
                <ul>
                    <li onMouseEnter={handleMouseEnter}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li onMouseEnter={handleMouseEnter}>
                        <Link to='/gallery'>Gallery</Link>
                    </li>
                    <li><Link to='/nisab'>Nisab e Kamal</Link></li>
                    <li><Link to='/Books'>Books</Link></li>
                    <li><Link to='/contact'>contact</Link></li>
                    {/* <li><Link to='/upload'>Upload</Link></li> */}
                    <li className='dropDown'><Link to='/manage'>Manage</Link>
                        <ul className='dropDown-Content'>
                            <li><Link to='/ManageGallery'>Gallery</Link></li>
                            <li><Link to='/ManageSlider'>Slider</Link></li>
                            <li><Link to='/ManageBooks'>Books</Link></li>
                            <li><Link to='/ManageAccounts'>Accounts</Link></li>
                        </ul>
                    </li>
                    
                </ul>
            </nav>
            <div className="bars" onClick={handleBarsClick}><span className="bar"></span></div>
        </div>
    )
}

export default Header



















// import React, { useState } from 'react'
// import logo from './Logo.svg'
// import './Styles-components.css'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//     useRouteMatch,
//     useParams
//   } from "react-router-dom"

// import App from './App'

// let Header  = () => {
//     let [menuButton, setMenuButton] = useState(false)

//     let handleMouseEnter = (event) => {
//         console.log(event)
//     }

//     function handleBarsClick() {
//         let bars = document.querySelector('.bars')
//         let nav = document.querySelector('nav')
//         bars.classList.toggle('open')
//         nav.classList.toggle('open')
//         document.body.classList.toggle('open')
//         // if(!menuButton){
//         //     bars.classList.add('open')
//         //     setMenuButton(true)
//         // } else {
//         //     bars.classList.remove('open')
//         //     setMenuButton(false)
//         // }
//     }
//     return (
//         // <Router>
//             <div className='Header' id='home'>
//                 <div className="main-logo">
//                     <img src={logo} alt=""  />
//                 </div>
//                 <nav className='clickOpen'>
//                     <ul>
//                         <li onMouseEnter={handleMouseEnter}>
//                             {/* <Link to='/'>Home</Link> */}
//                             <a href="#home">Home</a>
//                         </li>
//                         <li onMouseEnter={handleMouseEnter}>
//                             {/* <Link to='/gallery'>Gallery</Link> */}
//                             <a href="#home">Home</a>
//                         </li>
//                         <li>
//                             {/* <Link to='/nisab'>Nisab e Kamal</Link> */}
//                             <a href="#home">Home</a>
//                         </li>
//                         <li>
//                         {/* <Link to='/books'>Books</Link> */}
//                         <a href="#home">Home</a>

//                         </li>
//                         <li>
//                             {/* <Link to='/contact'>Contact</Link> */}
//                             <a href="#home">Home</a>
//                         </li>
//                     </ul>
//                 </nav>

//                 {/* <Route path='/'>
//                     <App />
//                 </Route> */}
                
//                 <div className="bars" onClick={handleBarsClick}><span className="bar"></span></div>
//             </div>
//         {/* </Router> */}
//     )
// }

// export default Header