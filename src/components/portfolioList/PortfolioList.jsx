import "./portfolioList.scss"
function portfolioList({id, title, active ,setSelected}) {
    return <li className ={active? "portfolioList active" : "portfolioList"} onClick={()=>setSelected(id)}>{title}</li>
}

export default portfolioList
