import Image from 'next/image'
import styles from '../styles/card.module.css'

/*styling*/

const title = {
  color:"#58CF68",
  fontFamily: "'Silkscreen', cursive",
  fontSize: "1.6rem"
}

const text = {
  color:"#fff",
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  fontSize: "1.2rem",
  textTransform:"capitalize",
  letterSpacing:"5px",
  marginBottom:"30px"
}




export default function Card(props) {
  return (

            <div className="card" style={{width: "18rem"}}>
                <Image src={props.img} className="card-img-top" alt="card image" width={300} height={300}/>
                    <div className="card-body bg-black">
                    <h5 className="card-title" style={title}>{props.title}</h5>
                    <hr style={{borderColor:"#fff"}}></hr>
                    <p className="card-text" style={text}>{props.text}</p>
                    <a href={props.link} target="_blank" rel="noopener noreferrer" className={styles.button}>{props.btnText}</a>
                </div>
            </div>
  
  )
}