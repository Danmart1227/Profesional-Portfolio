import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { animate, motion } from 'framer-motion'
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

/*frame motion*/

const easing = [.5, -.05, 0.02, 0.99]

const fadeInOut = {
  initial: {
    y: 30,
    opacity:0.2
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: .5,
      ease: easing
    }

  }
}


export default function Home() {
  return (

      <motion.main exit={{opacity: 0}} initial="initial" animate="animate" >

        <motion.section variants={fadeInOut} style={{backgroundColor:"black", paddingTop: "0"}} className={styles.container}>
          <div className={styles.titlecontainer}><Title title = "Loading..."/></div>
          <div className={styles.imgcontainer}>
              <Image src={SansImg} alt="Sans animated gif" width={200} height={200} /> 
            </div>
            <div className={styles.subtitlecontainer}><Subtitle subtitle = "(Scroll Down To Continue)"/></div>
        </motion.section>

        <section className={styles.container}>

          <div className="row">

            <div className="col-lg-6" style={textStyle}>
              <Paragraph text="Hello, I am Daniel and welcome to my world.
               You'll be able to find everything related to my work."/>              
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
              <Paragraph text="Thank you for your time. 
              if you'd like to learn more about me don't forget to reach me out on social media."/>
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
 
      </motion.main>

      
    
  )
}
