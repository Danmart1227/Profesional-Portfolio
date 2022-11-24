import Image from "next/image"
import Link from "next/link"
import styles from "/styles/navbar.module.css"
import ProfilePic from "/images/profileavatar.jpg"





export default function Header() {

 
    return (

      

    <div className={styles.box}>
   
        <div className={styles.avatarimage}>
        <Image src={ProfilePic} alt="avatar image img" width={150} height={150} style={{borderRadius:"50%"}} />
        </div>
  
        

         
        
            <nav className="navbar navbar-expand-lg " >

            <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                    <i class="fas fa-bars" style={{color:"#fff", fontSize:"28px"}}></i>
                </span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
                <Link href='/'>
                <li className="nav-item">
                    <a className="nav-link">Home</a>
                </li>
                </Link>

                <Link href='/portfolio'>
                <li className="nav-item">
                    <a className="nav-link">Portfolio</a>
                </li>
                </Link>
            

                <Link href='/biography'> 
                <li className="nav-item">
                    <a className="nav-link">Biography</a>
                </li>
                </Link>

                <Link href='/contact'> 
                <li className="nav-item">
                    <a className="nav-link">Contact</a>
                </li>
                </Link>
            </ul>
            </div>
   
            </nav>

        

            
  
            
            
    
      </div>


   
    )

  

  
    
}
  
