import styles from '../styles/borderAnimation.module.css'
import Image from 'next/image'
import Avatar from '../images/avatar.png'


export default function BorderAnimation() {
    return (
        
        <div className={styles.box}>
            <div className={styles.content}>
                <Image className={styles.img} src={Avatar} alt="avatar image" width={450} height={450}/>
                <div className={styles.text}>
                    <span>Internal Tools<br/>
                    <span>Automations</span>     
                    <br/>
                    <span>Integrations</span>
                    </span>
                </div>
            </div>
        </div>
       
    )
}