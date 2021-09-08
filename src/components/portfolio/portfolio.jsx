import  { useEffect,useState } from 'react';
import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList";

export default function Portfolio() {
    const [selected, setSelected] = useState("netApp");
    const list= [
        {
            id:"netApp",
            title: ".NET Applications",
        },
        {
            id:"react",
            title: "React Applications",
        },
        {
            id:"deploying",
            title: "Deploying",
        },
    ]

    return (
        
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item=>(
                    <PortfolioList 
                    title={item.title}
                    active={selected === item.id}
                    setSelected={setSelected}
                    id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://code.visualstudio.com/assets/apple-touch-icon.png" alt=""/>
                    <h3>Sheep Manager .NET App</h3>
                </div>
                <div className="item">
                <img src="https://code.visualstudio.com/assets/apple-touch-icon.png"  alt=""/>
                    <h3>Sheep Manager with React&NodeJs</h3>
                </div>
                <div className="item">
                    <img src="https://code.visualstudio.com/assets/apple-touch-icon.png" alt=""/>
                    <h3>Online Store with React&NodeJ</h3>
                </div>
                <div className="item">
                <img src="https://code.visualstudio.com/assets/apple-touch-icon.png"  alt=""/>
                    <h3>Load Balancer with Python</h3>
                </div>
                <div className="item">
                    <img src="https://code.visualstudio.com/assets/apple-touch-icon.png" alt=""/>
                    <h3>Portfolio</h3>
                </div>
                <div className="item">
                <img src="https://code.visualstudio.com/assets/apple-touch-icon.png"  alt=""/>
                    <h3>Banking App</h3>
                </div>
            </div>
        </div>
    )
}
