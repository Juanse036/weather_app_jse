import styles from './styles.module.css'

export default function ErrorPage(){
    return(        
        <div className={styles.wrapper}>
            <div className={styles.typing_demo}>
                Ups! Something Went Wrong
            </div>
        </div>
    )
}