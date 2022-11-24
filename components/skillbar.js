import styles from '../styles/skillbar.module.css'


export default function Skillbar(props) {
    return(

        <div>
            <div style={{paddingTop:"10px", paddingBottom:"10px"}}>
                <h2 className={styles.title}>{props.title}</h2>
                <h3 className={styles.subtitle}>{props.subtitle}</h3>
            </div>

                    <div className={styles.label}>
                        {props.percentage}
                    </div>   

            <div className="progress bg-gray-200" style={{height:"20px"}}>                    
                <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" 
                role="progressbar" 
                style={{width:props.percentage}} 
                aria-label="Basic example" 
                aria-valuenow="0" 
                aria-valuemin="0" 
                aria-valuemax="100">  
                              
                </div>
                    
            </div>
        </div>
    )
}