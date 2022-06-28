import styles from './styles.module.css'

export default function ErrorPage({message}){

    console.log(message)

    return(        
        <div className={styles.wrapper}>
            <div className={styles.typing_demo}>
                {message}
            </div>
        </div>
    )
}