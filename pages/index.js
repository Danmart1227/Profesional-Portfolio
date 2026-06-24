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
              <Paragraph text="Hi, I'm Daniel — an Advanced Technical Support specialist
               with a foundation in front-end programming. I enjoy building internal tools, automations, and API integrations. Here's a look at what I work on."/>              
            </div>

            <div className="col-lg-6" >              
                <BorderAnimation/> 
            </div>
          </div>
        </section>

        <section style={{backgroundColor:"black"}} className={styles.container}>

          <div className="row">

            

            <div className="col-lg-6" style={textStyle}>
              <Paragraph text="Rather than box myself into one stack, 
              I take a broad approach and keep learning across tools. 
              You can browse the skills and tools I work with 
              on the Portfolio page."
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
              <Paragraph text="Thanks for stopping by. 
              If you'd like to get in touch, the contact page is the best way to reach me."/>
            </div>

            <div style={{marginTop:"70px"}}>
                <div className="col-lg-12">
                <Title title="Let's Build"
                style = {{textShadow:'0px 3px 3px #000', color:"#fff"}}  
                />
                </div>

                <div className="col-12">
                <Subtitle subtitle="(Let's connect)"
                />
                </div>
              </div>

          </div>

        </section>
 
      </motion.main>

      
    
  )
}
