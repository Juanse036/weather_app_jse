import humidity from '../../img/humidity.png'
import temperature from '../../img/temperature.png'
import windspeed from '../../img/wind-speed.png'
import styles from './styles.module.css'
import { useEffect, useState } from 'react';
import getData from '../../actions/getData';
import Spinner from '../Spinner'
import ErrorPage from '../Error'

export default function Result({location}){    
    

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    
    useEffect(() => {
        const fetchData = async () => {
            const {data, error} = await getData(location)
            setLoading(false);         
            setData(data);
            setError(error)
        }
        fetchData()                       
    }, [])

    if(loading){
        return(
            <Spinner />
        )
    }

    if(error){
        return(
            <ErrorPage message={'Ups! Something Went Wrong'} />
        )
    }   

    return(               
        <div className={styles.alldata}>
            <div className={styles.results}>   
                <div className={`${styles.titles} ${styles.item2}`}>
                    <h1>{data.location.name}, {data.location.region}</h1>
                    <h3>{data.location.country}</h3>
                    <p className={styles.datalabel}>Time: {data.location.localtime}</p>
                </div>
                <div className={`${styles.boxresults} ${styles.item1}`}>                    
                    <img src={data.current.condition.icon} />                    
                    <p className={styles.datanumber}>{data.current.temp_c}°C</p>                    
                    <p className={styles.datalabel}>Condition: {data.current.condition.text}</p>                                        
                </div>
                <div className={`${styles.boxresults} ${styles.item3}`}>
                    <img src={humidity}/>
                    <p className={styles.datanumber}>{data.current.humidity}%</p>                    
                    <p className={styles.datalabel}>Humidity</p>
                </div>
                <div className={`${styles.boxresults} ${styles.item4}`}>
                    <img src={windspeed}/>
                    <p className={styles.datanumber}>{data.current.wind_kph}Km/h</p>                    
                    <p className={styles.datalabel}>Wind Speed</p>
                </div>
                <div className={`${styles.boxresults} ${styles.item5}`}>
                    <img src={temperature}/>
                    <p className={styles.datanumber}>{data.forecast.forecastday[0].day.mintemp_c} / {data.forecast.forecastday[0].day.maxtemp_c} °C </p>                        
                    <p className={styles.datalabel}>Min/Max Temperature</p>    
                </div>
                <div>

                </div>
            </div>  
        </div>        
    )

}