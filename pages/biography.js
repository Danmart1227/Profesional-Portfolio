import Image from 'next/image'
import Mario from '../images/mario.gif'
import Charmander from '../images/charmander.gif'
import Bulbasur from '../images/bulbasur.gif'
import Squirtle from '../images/squirtle.gif'
import styles from '../styles/Biography.module.css'
import Slider from '../components/slider'
import Text from '../components/text'
import Paragraph from '../components/paragraph'



export default function Biography() {
    return (
   
        <main>

            <section className={styles.container}>
                <div className={styles.text}>
                    <Text
                    text="Some Pictures..."
                    style= {{textShadow: "0 3px 3px #58CF68"}}
                    />
                </div>
                <div className={styles.slider}>
                    <Slider/>
                </div>
            </section>

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
                        interested in how technology and multimedia can combine to develope such amazing product
                        (of course, for the seven year old me, I was just playing Mario XD)."
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
                    text="But of course, I had a lot of interests I'd love to dive into. 
                    I love acting, music and animals, but sometimes we have to make a choice..."
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

            </main>
    )
}