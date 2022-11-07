import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Title from '../components/title.js'
import Subtitle from '../components/subtitle'
import Paragraph from '../components/paragraph'
import BorderAnimation from '../components/borderAnimation'
import ImageCarousel from '../components/imageCarousel'
import SansImg from '../images/sans.gif'

/*paragraph layout*/

const textStyle = {
  textAlign:"left", 
  paddingLeft:"3%"
}


export default function Home() {
  return (

      <main >
        <section style={{backgroundColor:"black", paddingTop: "0"}} className={styles.container}>
          <div className={styles.titlecontainer}><Title title = "Loading..."/></div>
          <div className={styles.imgcontainer}>
              <Image src={SansImg} alt="Sans animated gif" width={200} height={200} /> 
            </div>
            <div className={styles.subtitlecontainer}><Subtitle subtitle = "(Scroll Down To Continue)"/></div>
        </section>

        <section className={styles.container}>

          <div className="row">

            <div className="col-lg-6" style={textStyle}>
              <Paragraph text="Hello, I am Daniel and welcome to my world.
               You'll be able to find everething related with my work."/>              
            </div>

            <div className="col-lg-6" >              
                <BorderAnimation/> 
            </div>
          </div>
        </section>

        <section style={{backgroundColor:"black"}} className={styles.container}>

          <div className="row">

            

            <div className="col-lg-6" style={textStyle}>
              <Paragraph text="You will also get to know 
              more about me, what I want, 
              what I like, and what inspired me 
              to do what I do."
              style = {{textShadow:'0px 3px 3px #fff'}}  
              />
            </div>

            <div className="col-lg-6" >
              <ImageCarousel/>
            </div>

          </div>


        </section>

        <section className={styles.container}>

          <div className="row">

            <div className="col-lg-12" >
              <Paragraph text="Thanks for your time. 
              if you'd like to learn more don't forget to reach me out on social media."/>
            </div>

            <div style={{marginTop:"70px"}}>
                <div className="col-lg-12">
                <Title title="Game Over"
                style = {{textShadow:'0px 3px 3px #000', color:"#fff"}}  
                />
                </div>

                <div className="col-12">
                <Subtitle subtitle="(Hope I See You Soon!)"
                />
                </div>
              </div>

          </div>

        </section>
 
      </main>

      
    
  )
}
