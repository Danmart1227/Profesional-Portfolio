import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/Portfolio.module.css'
import Image from 'next/image'
import Subtitle from '../components/subtitle'
import Text from '../components/text'
import buttonInfo from '../components/buttonInfo'
import skillbarInfo from '../components/skillbarInfo'
import portfolioInfo from '../components/portfolioInfo'
import Skillbar from '../components/skillbar'
import Card from '../components/card'


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




/*buttons columns and row styling*/

const rowStyling = {
    position:"relative", 
    top:"35%",
    textAlign:"center",
    
  }

  /*Card columns and row styling*/

  const rowStyle = {
    textAlign:"center", 
    paddingLeft:"10%",
    marginTop:"50px",
    marginBottom:"50px"
  }

  const colStyle = {
    marginTop:"50px",
  }


export default function Portfolio() {

  /*Hooks*/

      const [filter, setFilter] = useState('development');

      const [projects, setProjects] = useState([]);

      const [skills, setSkills] = useState([]);

      const [isActive, setActive] = useState({activeObject: null});

      /*Skills*/
      useEffect(() => {
        setSkills(skillbarInfo);
        }, []);
        useEffect(() => {
        setSkills([]);
        const filtered = skillbarInfo.map(p => ({ ...p, filtered: p.category.includes(filter) }));
        setSkills(filtered);
        }, [filter]);

      /*Projects*/
      useEffect(() => {
        setProjects(portfolioInfo);
        }, []);
        useEffect(() => {
        setProjects([]);
        const filtered = portfolioInfo.map(p => ({ ...p, filtered: p.category.includes(filter) }));
        setProjects(filtered);
        }, [filter]);

      

    return (

        
      <motion.main exit={{opacity: 0}} initial="initial" animate="animate" >
            <motion.section variants={fadeInOut} className={styles.container}>

            
            
              <div className="row" style={rowStyling}>
          
                
                {buttonInfo.map(item =>(

                  <div className='col-lg-4'>

                  <button className={item.id === isActive.activeObject ? `${styles.btnactive}`: `${styles.btncontainer}`} 
                    active={filter === item.category} 
                    onClick={() => {setFilter(item.category); 
                    setActive({...isActive, activeObject: item.id});
                    }} >

                    <div >
                            <Image src={item.img} alt='Logo' width={60} height={60}/>
                        <div >
                          {item.name}
                        </div>
                    </div>
                    </button>
                  </div>
                ))}

            </div>
            


              <div className={styles.subtitlecontainer}>
                <Subtitle subtitle = "What type of projects would you like to check?"/>
              </div>      
            </motion.section>

            <section>
                  <div>
                    <Text 
                      text= "Skills"
                    />
                  </div>
              
                    <div className={styles.barcontainer}>
                    {skills.map(item => item.filtered === true ? (
                               
                              <Skillbar
                              title= {item.firstSkill}
                              subtitle= {item.secondSkill}
                              percentage= {item.value}
                              />
                            
                           ): '')}
                    </div>

            </section>

            

            <section>
                  <div >
                  <Text
                    text= "Projects"
                  />
                  </div>

                        <div className='row' style={rowStyle}>
                            {projects.map(item => item.filtered === true ? (
                               
                                <motion.div 
                                whileHover={{scale: 1.1}} 
                                key={item.key}
                                className='col-lg-4 col-md-6 col-sm-6' 
                                style={colStyle}>
                                  <Card
                                    
                                    img={item.img}
                                    title= {item.title}
                                    text= {item.text}
                                    link= {item.link}
                                    btnText={item.btnText}
                                  />
                                </motion.div>
                             
                            ): '')}
                        </div>
                      
            </section>

        </motion.main>
    )
}
