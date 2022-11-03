import Image from "next/image"
import SliderOne from '../images/slider1.jpg'
import SliderTwo from '../images/slider2.jpg'
import SliderThree from '../images/slider3.jpg'

export default function ImageCarousel() {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel carousel-fade " data-bs-ride="carousel" data-bs-interval="3000">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <Image src={SliderOne} className="d-block w-100 " alt="baby picture" style={{filter:"grayscale(100%)", borderRadius:"50%"}} width={400} height={400}/>
                </div>
                <div className="carousel-item">
                    <Image src={SliderTwo} className="d-block w-100 " alt="favorite hobbie" style={{filter:"grayscale(100%)", borderRadius:"50%"}} width={400} height={400}/>
                </div>
                <div className="carousel-item">
                    <Image src={SliderThree} className="d-block w-100 " alt="grown picture" style={{filter:"grayscale(100%)", borderRadius:"50%"}} width={400} height={400}/>
                </div>
            </div>
        </div>
    )
}