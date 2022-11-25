import styles from '../styles/Contact.module.css'
import { motion } from 'framer-motion'
import Title from '../components/title'
import Subtitle from '../components/subtitle'
import Text from '../components/text'
import Button from '../components/button'
import Submit from '../images/icons/submit.svg'
import Behance from '../images/icons/behance.svg'
import Dribble from '../images/icons/dribble.svg'
import StackOverflow from '../images/icons/stackoverflow.svg'
import Github from '../images/icons/github.svg'
import emailjs from '@emailjs/browser';
import { useState } from 'react'


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




const Result =() =>{
    return(
        <p>Sent!, I&apos;ll contact you soon.</p>
    )
}


export default function Contact() {

    const [result, setResult] = useState(false);


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_60q9h4m', 'template_tpp149f', e.target, 'MbC1BeHLLE33KbS0w')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          setResult(true);
      };

    return (
        <motion.main exit={{opacity: 0}} initial="initial" animate="animate" >
            <motion.section variants={fadeInOut} className={styles.container}>
                <div className={styles.titlecontainer}>
                    <Title
                    title="Send me a Message..."
                    />
                </div>
                <div className={styles.subtitlecontainer}>
                    <Subtitle
                    subtitle="(or reach out to me on social media)"
                    />
                </div>
                <div className={styles.icons}>

                    <a rel="noopener" href="https://www.facebook.com/profile.php?id=100074436124199">
                        <i class="fa-brands fa-square-facebook fa-6x"></i>
                    </a>

                    <a rel="noopener" href="https://twitter.com/dvoidd1999">
                        <i class="fa-brands fa-square-twitter fa-6x"></i>
                    </a>

                    <a rel="noopener" href="https://www.instagram.com/dvoidesign/">
                        <i class="fa-brands fa-square-instagram fa-6x"></i>
                    </a>
                    <a rel="noopener" href="https://www.linkedin.com/in/daniel-martinez-42634a249/">
                        <i class="fa-brands fa-linkedin fa-6x"></i>
                    </a>

                </div>

            </motion.section>


            <section>
                <div>
                    <form onSubmit={sendEmail} className={styles.form}>
                        <div className={styles.text}>
                            <Text text= "Name"/>
                        </div>

                        <div>
                            <input className={styles.field} type="text" name='name'></input>
                        </div>

                        <div className={styles.text}>
                            <Text text= "Email"/>
                        </div>

                        <div>
                            <input className={styles.field} type="email" name='email' required></input>
                        </div>

                        <div className={styles.text}>
                            <Text text= "Message"/>
                        </div>

                        <div>
                            <textarea className={styles.field} rows={10} cols={60} name='message' required></textarea>
                        </div>

                        <div className={styles.text}>
                            <Text text= {result ? <Result/> : null}/>
                        </div>

                        <div className={styles.button}>
                            <Button
                            name= "Submit"
                            img= {Submit}
                            altText= "submit img"
                            />
                        </div>
                    </form>

                </div>

                
                <div className={styles.barcontainer}>
                <div className={styles.text}>
                            <Text 
                            text= "My Network"   
                            />
                        </div>

                    <div className='row' style={{textAlign:"center"}}>
                    

                        <div className='col-lg-3 col-md-3 col-sm-6'>
                        <Button
                            name= "Behance"
                            img= {Behance}
                            link="https://www.behance.net/danielmaren"
                            altText= "behance img"
                            style = {{backgroundColor:'#000', color:"#58CF68"}}   
                            />
                        </div>
                        
                        <div className='col-lg-3 col-md-3 col-sm-6'>
                        <Button
                            name= "Dribble"
                            img= {Dribble}
                            link="https://dribbble.com/DanMart"
                            altText= "dribble img"
                            style = {{backgroundColor:'#000', color:"#58CF68"}}   
                            />
                        </div>
                        
                        <div className='col-lg-3 col-md-3 col-sm-6'>
                        <Button
                            name= "Stackoverflow"
                            img= {StackOverflow}
                            link="https://stackoverflow.com/users/20404951/daniel-martinez"
                            altText= "stackoverflow img"
                            style = {{backgroundColor:'#000', color:"#58CF68"}}   
                            />
                        </div>
                        
                        <div className='col-lg-3 col-md-3 col-sm-6'>
                        <Button
                            name= "Github"
                            img= {Github}
                            link="https://github.com/Danmart1227"
                            altText= "Github img"
                            style = {{backgroundColor:'#000', color:"#58CF68"}}   
                            />
                        </div>

                    </div>
                    </div>

            </section>
            
        </motion.main>
    )
}