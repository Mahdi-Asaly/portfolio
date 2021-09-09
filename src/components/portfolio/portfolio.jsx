import  { useEffect,useState } from 'react';
import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList";
import {reactPortfolio, webPortfolio , deployingPortfolio } from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("netApp");
    const [data, setData] = useState([]);
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
    useEffect(()=>{
        switch(selected){
            case "netApp":
                setData(webPortfolio);
                break;
            case "react":
                setData(reactPortfolio);
                break;
            case "deploying":
                setData(deployingPortfolio);
                break;
            default:
                setData(webPortfolio);
        }
    },[selected]);
    return (
        
        <div className="portfolio" id="portfolio">
            <h1>My Projects</h1>
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
                {data.map(d=>(
                <div className="item">
                <img src={d.img} onClick={()=>{
                    window.location.href = d.gitUrl;
                }} alt=""/>
                <h3>{d.title}</h3>
                 </div>
                ))}


            </div>
        </div>
    )
}
