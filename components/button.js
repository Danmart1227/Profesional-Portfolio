import Image from "next/image"
import styles from "../styles/button.module.css"

export default function Button (props) {
    return(
        <button type="button" className={styles.container}>

            <div >
                    <Image src={props.img} alt="icon" width={60} height={60}/>
                <div >
                    {props.name}
                </div>
            </div>
        </button>
    )
}