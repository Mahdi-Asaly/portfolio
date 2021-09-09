import "./works.scss"
import {useState} from "react";
export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data=[
        {
            id: "1",
            icon: "./assets/mobile.png",
            title: "Web Applications",
            description:
              "I have experience developing applications with the latest technologies such as React and Node.js",
            img:
              "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
          },
          {
            id: "2",
            icon: "./assets/globe.png",
            title: "Deploying",
            description:
              "Deploying projects is essential and it's part of the developing process, to keep track of any potential issues or bugs",
            img:
              "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
          },
          {
            id: "3",
            icon: "./assets/writing.png",
            title: "Designing & Maintenance",
            description:
              "When the application is delievered some changes may happen or new features may be added, or some bugs may be reported, we keep track under all the conditions to keep the client up to date.",
            img:
              "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
          },
    ];
    const handleClick= (way)=>{
        console.log(way)
        way === "left" ? setCurrentSlide(currentSlide>0 ? currentSlide-1 : 2) :
        setCurrentSlide(currentSlide<data.length-1? currentSlide+1 : 0)
    }
    return (
        <div className="works" id="works">
            <h1 className="titlework">Works</h1>
            <div className="slider" style={{transform:`translateX(-${currentSlide *100}vw )`}}>
               { data.map(d=>(
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt=""/>
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.description}</p>
                            </div>
                        </div>
                        <div className="right">
                            <img src="https://d33wubrfki0l68.cloudfront.net/4205d0600846259a187789ac358b9107a308d949/a4ec6/img/logo.svg" alt=""/>
                        </div>
                    </div>
                </div>
               ))
                }
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick()}/>
        </div>
    )
}
