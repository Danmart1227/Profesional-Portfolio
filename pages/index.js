import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Title from '../components/title.js'
import Subtitle from '../components/subtitle'
import Paragraph from '../components/paragraph'
import BorderAnimation from '../components/borderAnimation'
import ImageCarousel from '../components/imageCarousel'
import SansImg from '../images/sans.gif'

const rowStyling = {
  position:"absolute", 
  top:"200px"
}

export default function Home() {
  return (
    
   
    

      <main >
        <section style={{backgroundColor:"black"}} className={styles.container}>
          <div className={styles.titlecontainer}><Title title = "Loading..."/></div>
          <div className={styles.imgcontainer}>
              <Image src={SansImg} alt="Sans animated gif" width={200} height={200} /> 
            </div>
            <div className={styles.subtitlecontainer}><Subtitle subtitle = "(Scroll Down To Continue)"/></div>
        </section>

        <section className={styles.container}>

          <div className="row" style={rowStyling}>

            <div className="col-lg-6" style={{textAlign:"left", paddingLeft:"3%"}}>
              <Paragraph text="I am a digital artist and web developer. 
              I specialize in front-end development and experience design. 
              Feel free to check my portfolio."/>              
            </div>

            <div className="col-lg-6" style={{paddingLeft:"20%"}}>
              <BorderAnimation/>
            </div>
          </div>
        </section>

        <section style={{backgroundColor:"black"}} className={styles.container}>

          <div className="row" style={rowStyling}>

            

            <div className="col-lg-6" style={{textAlign:"Left", paddingLeft:"3%"}}>
              <Paragraph text="You will also get to know 
              more about me, what I want, 
              what I like, and what inspired me 
              to do what I do. Check my 
              Biography."
              style = {{textShadow:'0px 3px 3px #fff'}}  
              />
            </div>

            <div className="col-lg-6">
              <ImageCarousel/>
            </div>

          </div>


        </section>

        <section className={styles.container}>

          <div className="row" style={rowStyling}>

            <div className="col-12" style={{textAlign:"Center", marginBottom:"30px"}}>
              <Paragraph text="If you'd like to learn about the tools and technologies I use, 
               you can check my Blog."/>
            </div>

            <div className="col-12">
            <Title title="Game Over"
            style = {{textShadow:'0px 3px 3px #000', color:"#fff"}}  
            />
            </div>

            <div className="col-12">
            <Subtitle subtitle="(Hope I See You Soon!)"
            />
            </div>

          </div>

        </section>
 
      </main>

      
    
  )
}
