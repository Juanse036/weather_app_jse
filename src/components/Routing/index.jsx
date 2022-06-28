import { Routes, Route, useLocation } from "react-router-dom";
import Result from '../Result'
import GeoLocation from '../GeoLocation'

export default function PageRoutes() {    
    const location = useLocation();    
    const loc = location.pathname.split('/');
    const finallocation = loc[1].replace(/%20/g, " ");  

    return(
        <Routes>
            <Route path="/" element={<GeoLocation/>} />             
            <Route path="/CurrentLocation" element={<GeoLocation/>} />             
            <Route path={loc[1]} element={<Result location={finallocation}/>} />                     
        </Routes>
    )
}
