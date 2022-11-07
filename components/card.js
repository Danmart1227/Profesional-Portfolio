import Image from 'next/image'

/*styling*/

const title = {
  color:"#fff",
  fontFamily: "'Silkscreen', cursive",
  fontSize: "1.6rem"
}

const text = {
  color:"#fff",
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  fontSize: "1.2rem"
}

const button = {
  color:"#fff",
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  fontSize: "1rem",
  background: "rgba( 255, 255, 255, 0.15 )",
  boxShadow: "0 3px 5px 0 #58CF68",
  backdropFilter: "blur( 5px ):",
  webkitBackdropFilter: "blur( 5px )",
  border: "1px solid #58CF68"
}


export default function Card(props) {
  return (

            <div className="card" style={{width: "18rem"}}>
                <Image src={props.img} className="card-img-top" alt="card image" width={300} height={300}/>
                    <div className="card-body bg-black">
                    <h5 className="card-title" style={title}>{props.title}</h5>
                    <p className="card-text" style={text}>{props.text}</p>
                    <a href={props.link} className="btn" style={button}>{props.btnText}</a>
                </div>
            </div>
  
  )
}