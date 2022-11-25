import Image from "next/image"
import Link from "next/link"
import styles from "/styles/footer.module.css"
import ProfilePanda from "/images/profilepanda.jpg"



export default function Footer () {
    return (
        

    <div className={styles.container} >   
        
                <div className={styles.pandaimage}>
                <Image src={ProfilePanda} alt="panda image" width={120} height={120} style={{borderRadius:"50%"}}/>
                </div>

                    <div style={{top:"20%", fontFamily:"Silkscreen, cursive", fontSize:"1.5rem"}} className={styles.text}>
                        <p>Social Media</p>
                    </div>

                    <div className={styles.icons}>

                    <a rel="noopener" href="https://www.facebook.com/profile.php?id=100074436124199">
                        <i class="fa-brands fa-square-facebook fa-3x"></i>
                    </a>

                    <a rel="noopener" href="https://twitter.com/dvoidd1999">
                        <i class="fa-brands fa-square-twitter fa-3x"></i>
                    </a>

                    <a rel="noopener" href="https://www.instagram.com/dvoidesign/">
                        <i class="fa-brands fa-square-instagram fa-3x"></i>
                    </a>
                    <a rel="noopener" href="https://www.linkedin.com/in/daniel-martinez-42634a249/">
                        <i class="fa-brands fa-linkedin fa-3x"></i>
                    </a>

                    </div>


            <div style={{textAlign:"left", left:"15px"}} className={styles.list}>
                <h2>Network</h2>
                    <ul style={{margin:"0", padding:"0"}}>
                        <a rel="noopener" href="https://www.behance.net/danielmaren">
                        <li>Behance</li>
                        </a>
                        <a rel="noopener" href="https://dribbble.com/DanMart">
                        <li>Dribble</li>
                        </a>

                        <a rel="noopener" href="https://stackoverflow.com/users/20404951/daniel-martinez">
                        <li>StackOverflow</li>
                        </a>

                        <a rel="noopener" href="https://github.com/Danmart1227">
                        <li>Github</li>
                        </a>

                    </ul>
            </div>

            <div style={{textAlign:"right", right:"15px"}} className={styles.list}>
                <h2 >About Me</h2>
                    <ul>

                        <Link href='/biography'>
                            <a >
                            <li>Biography</li>
                            </a>
                        </Link>

                        <Link href='/contact'>
                            <a >
                            <li>Contact Me</li>
                            </a>
                        </Link>
                    </ul>
            </div>

    

            <div style={{top:"35%"}} className={styles.text}>
            <p>@ Copyright 2022 Daniel Martinez.</p>
            </div>
</div>
           
    )
}