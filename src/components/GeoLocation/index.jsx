
import { useEffect, useState } from 'react';
import Spinner from '../Spinner'
import getGeoLocation from '../../actions/getGeoLocation';
import Result from '../Result';

export default function GeoLocation({}){        

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
        
    useEffect(() => {
        const fetchData = async () => {
            const {longitude, latitude} = await getGeoLocation()                        
            setLoading(false);             
            setData(`${latitude},${longitude}`);                
        }
 
        fetchData()                       
    }, [])

    if(loading){
        return(
            <Spinner />
        )
    }

    if( !navigator.geolocation ){
        alert(`Your Broswe doesn't have Geolocation option`)
        throw new Error(`Your Browse doesn't have Geolocation option`)
    }   

    return(       
        <Result location={data}/>          
    )

}