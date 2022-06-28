
import { useEffect, useState } from 'react';
import Spinner from '../Spinner'
import ErrorPage from '../Error';
import getGeoLocation from '../../actions/getGeoLocation';
import Result from '../Result';

export default function GeoLocation({}){        

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
        
    useEffect(() => {
        const fetchData = async () => {
            const {longitude, latitude, error} = await getGeoLocation()                        
            setLoading(false);             
            setData(`${latitude},${longitude}`);   
            setError(error);
        }
 
        fetchData()                       
    }, [])

    if(loading){
        return(
            <Spinner />
        )
    }
    
    console.log(error)

    if(error){
        return(
            <ErrorPage message={`Location Access Denied 😔`}/>
        )
    }

    return(       
        <Result location={data}/>          
    )

}