import { useState, useEffect } from 'react'
import getCountries from '../../actions/getCountries'
import styles from './styles.module.css'
import Spinner from '../Spinner'
import ErrorPage from '../Error'

export default function Search(textsearch) {  
    
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);    
    
    useEffect(() => {
        const fetchData = async () => {
            const {data, error} = await getCountries(textsearch)
            setLoading(false);         
            setData(data);
            setError(error)
        }
        fetchData()                       
    }, [textsearch])
    
    
    if(loading){
        return(
            <Spinner />
        )
    }

    if(error){
        return(
            <ErrorPage />
        )
    }
    
    return (
        data.map((el) => {
            return (
            <div key={el.id} className={styles.countries}>
                <a href={`/${el.name}`}>
                    <p className={styles.cities}>{el.name}, {el.region}</p>
                    <p className={styles.country}>{el.country}</p>
                </a>
            </div>
            )

        })
        
    )

}