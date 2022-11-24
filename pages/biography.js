import Image from 'next/image'
import { motion } from 'framer-motion'
import Mario from '../images/mario.gif'
import Charmander from '../images/charmander.gif'
import Bulbasur from '../images/bulbasur.gif'
import Squirtle from '../images/squirtle.gif'
import styles from '../styles/Biography.module.css'
import Slider from '../components/slider'
import Text from '../components/text'
import Paragraph from '../components/paragraph'


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



export default function Biography() {
    return (
   
        <motion.main exit={{opacity: 0}} initial="initial" animate="animate" >

        <motion.section variants={fadeInOut} className={styles.container}>
                <div className={styles.text}>
                    <Text
                    text="Some Pictures..."
                    style= {{textShadow: "0 3px 3px #58CF68"}}
                    />
                </div>
                <div className={styles.slider}>
                    <Slider/>
                </div>
            </motion.section>

            <section>
                <div className={styles.paragraph}>
                    <Paragraph
                    text="You might've realized that I'm a videogame enjoyer
                    and, in fact, I am..."
                    />
                </div>

                <div className={styles.paragraph}>
                    <Paragraph
                    text="Hello, my name is Daniel Martinez, I'm a 22 year old colombian artist and developer,
                    and as I mention before, video games made a big part of what I am today."
                    />                    
                </div>

                <div className="row" style={{padding:"50px 30px", marginTop:"20px"}}>

                    <div className="col-lg-6" style={{textAlign:"center"}} >
                        <Paragraph
                        text="I had a very normal upbringing, but at a very young age I was already 
                        interested in technology and multimedia, I wasn't clear about my future though.
                        (of course, just seven year old me playing Mario XD)."
                        />                    
                 </div>
                
                    <div className="col-lg-6" style={{paddingTop:"10%", paddingLeft:"15%"}}>
                        <Image src={Mario} alt="Mario image" width={400} height={400}/>
                    </div>
                </div>

                <div className={styles.paragraph}>
                    <Paragraph
                    text="Thanks to that interest I ended up signing to Multimedia Engineering major 
                    (a.k.a Computer Science and Media Arts) that I'm currently working on."
                    />                    
                </div>

                <div className={styles.paragraph}>
                    <Paragraph
                    text="Finally, I love spending my time playing music,
                     I'm attratcted to all kinds of traditional art and, of course, I love programming
                    (the bigger the path, the bigger the choice...)."
                    />                    
                </div>

                <div className="row" style={{padding:"50px 30px", marginTop:"20px"}}>
                    <div className="col-lg-4 col-md-4 col-sm-4" style={{paddingLeft:"15%"}}>
                        <Image src={Charmander} alt="Mario image" width={200} height={200}/>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4" style={{paddingLeft:"10%"}}>
                        <Image src={Bulbasur} alt="Mario image" width={200} height={200}/>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4" style={{paddingLeft:"10%"}}>
                        <Image src={Squirtle} alt="Mario image" width={200} height={200}/>
                    </div>
                </div>

            </section>

            </motion.main>
    )
}