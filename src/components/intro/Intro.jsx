import "./intro.scss"
import {init} from 'ityped';
import {useEffect, useRef} from "react";
export default function Intro() {
    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current,{
            showCursor:true,
            backDelay:1500,
            backSpeed:100,
            strings: [" Developer ", " Designer"],
        });
    },[])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img id="imgman"src="assets/me2.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello There! I'm</h2>
                    <h1>Mahdi Asali</h1>
                    <h3>Software<span ref={textRef}> </span></h3>
                </div>
                <a href="#portfolio">
                    <img id="scroldown" src="assets/down.png" alt=""/>
                </a>
            </div>
        </div>
    )
}
