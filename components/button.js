
import Image from "next/image"
import styles from "../styles/button.module.css"





export default function Button (props) {

  

    return (

        <a target="_blank" rel="noopener noreferrer" href={props.link}>
        <button className={styles.container} style={props.style} >

            <div >
                    <Image src={props.img} alt={props.altText} width={60} height={60}/>
                <div >
                    {props.name}
                </div>
            </div>
        </button>
        </a>
    )
}