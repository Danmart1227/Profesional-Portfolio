import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/Portfolio.module.css'
import Text from '../components/text'
import skillbarInfo from '../components/skillbarInfo'
import portfolioInfo from '../components/portfolioInfo'
import Skillbar from '../components/skillbar'
import Card from '../components/card'


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

      const [filter] = useState('development');

      const [projects, setProjects] = useState([]);

      const [skills, setSkills] = useState([]);

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
                                key={item.id}
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

            <section>
                  <div>
                    <Text
                      text= "Skills"
                    />
                  </div>

                    <div className={styles.barcontainer}>
                    {skills.map(item => item.filtered === true ? (


                              <Skillbar
                              key={item.id}
                              title= {item.firstSkill}
                              subtitle= {item.secondSkill}
                              percentage= {item.value}
                              />

                           ): '')}
                    </div>

            </section>

        </motion.main>
    )
}
