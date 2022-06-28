import styles from './styles.module.css'
import location from '../../img/location.png'
import search from '../../img/search.png'
import { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Search from '../Search'

export default function Navbar(){
    const [show, setShow] = useState(false);
    const [inputSearch, setInputSearch] = useState('')

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(!show);

    return(
        <>
        <div className={styles.navbar}>    
            <div className={styles.titulo}>
            <a href={`/`}><p>Weather APP JSe</p></a>
            </div>        
            <ul className={styles.wrapper}>
                <li className={`${styles.icon} ${styles.facebook}`}>
                <span className={styles.tooltip}>GeoLocation</span>
                    <a href={`/CurrentLocation`}>                        
                        <img src={location} className={styles.img} />
                    </a>
                </li>               
                
                <li className={`${styles.icon} ${styles.facebook}`} onClick={handleShow}>
                    <span className={styles.tooltip}>Search</span>
                    <img src={search} className={styles.img} />
                </li>                               
            </ul>
            
        </div>
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton closeVariant="white" className={styles.offcanvasheader}>
                <Offcanvas.Title>Search</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>            
            <div className={styles.search_box}>
                <button className={styles.btn_search}><img className={styles.searchimg} src={search}/></button>
                <input 
                    type="text" 
                    className={styles.input_search} 
                    placeholder="Type to Search..." 
                    value={inputSearch}
                    onChange={(e) => setInputSearch(e.target.value)}
                />
            </div>
            {inputSearch.length > 2 ? <Search textsearch={inputSearch}/> : <></>}
            </Offcanvas.Body>
        </Offcanvas>

        </>
    )
}

