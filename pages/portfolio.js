import styles from '../styles/Portfolio.module.css'
import Subtitle from '../components/subtitle'
import Button from '../components/button'
import Text from '../components/text'
import buttoninfo from '../components/buttonInfo'
import skillbarInfo from '../components/skillbarWebInfo'
import cardWebInfo from '../components/cardWebInfo'
import Skillbar from '../components/skillbar'
import Card from '../components/card'



/*buttons columns and row styling*/

const rowStyling = {
    position:"relative", 
    top:"40%",
    textAlign:"center",
    
  }

  const colStyling ={
    position:"absolute",
 
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


  /*Button mapping function*/

function createButton(info) {
    return <Button
    name={info.name}
    img={info.img}
    />
}


  /*Skill Bar mapping function*/

  function createSkillBar (skill) {
    return <Skillbar
    title= {skill.firstSkill}
    subtitle= {skill.secondSkill}
    percentage= {skill.value}
    />
}






export default function Portfolio() {
    return (

        
        <main>
            <section className={styles.container}>
            
              <div className="row" style={rowStyling}>
                <div className="col" style={colStyling}>
                    {buttoninfo.map(createButton)}
                </div>
              </div> 

              <div className={styles.subtitlecontainer}>
                <Subtitle subtitle = "What type of projects would you like to check?"/>
              </div>      
            </section>

                


            <section>
                  <div>
                    <Text 
                      text= "Skills"
                    />
                  </div>
              
                    <div className={styles.barcontainer}>
                      {skillbarInfo.map(createSkillBar)}
                    </div>

            </section>

            

            <section>
                  <div >
                  <Text
                    text= "Projects"
                  />
                  </div>

                        <div className='row' style={rowStyle}>
                            {cardWebInfo.map(card => {
                              return (
                                <div className='col-lg-4 col-md-6 col-sm-6' style={colStyle}>
                                  <Card
                                    img={card.img}
                                    title= {card.title}
                                    text= {card.text}
                                    link= {card.link}
                                    btnText={card.btnText}
                                  />
                                </div>
                              );
                            })}
                        </div>
                      
            </section>

        </main>
    )
}
