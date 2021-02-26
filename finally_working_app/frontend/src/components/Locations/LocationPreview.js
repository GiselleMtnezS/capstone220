import React ,{Component}from 'react'

export default class LocationPreview extends Component {
constructor(props){
    super(props)
    this.state={
        stats:[]
    }
}
componentDidMount=()=>{
    console.log(this.props.location.stats)
    this.setState({
        stats: this.props.location.stats
    })
}
render (){
// console.log(this.props.location)
var {theme, name, continent, img} = this.props.location
// console.log( name, continent,theme,stats)
var {navigating} = this.props
console.log(navigating)
return(
    <section  
    onClick={(e)=>navigating("/locations/"+name)}
    style={{
        background:theme.background,
        color:theme.color,
        height: "22vw",
        borderRadius:10, 
        // margin: "15%"
        }}>
        <div className="loc-card" 
        style={{
            display:"grid",
            gridTemplateColumn:"300px",
            gridTemplateRows: "210px 210px 80px",
            gridTemplateAreas: '"image" "text" "stats"',

            fontFamily: "roboto",
            borderRadius:"18px",
            background: theme.background,
            boxShadow: "5px 5px 15px rgbs(0,0,0,0.9)",
            textAlign:"center",

            }}>
                
        <div className="loc-card-img" style={{
            gridArea:"image",
            background: `url(${img})`,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            backgroundSize: "cover"
            }}></div>
       
        <div className="loc-card-txt" style={{gridArea:"text", margin:25}}>

            <span style={{color: theme.color, fontSize:13}}>{continent}</span>
            <h2 style={{fontSize:"28px", marginTop:0}}>
                {name}
            </h2>
            <p style={{color:"grey", fontSize:15, fontWeight:300}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia minima vero, suscipit sit assumenda deleniti.</p>
        
        </div>

        <div className="loc-card-stat" 
            style={{
            gridArea:"stats",
            display:"grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "1fr",
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            background: theme.details,

            }}>
                {Object.values(this.state.stats).map((stat,index)=>{
                    console.log(stat, "one stat")
                    return(
                <div key={index} className={"cd-stat"} 
                    style={{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        flexDirection:"column",
                        padding:"10px",
                        color:theme.color,
                        
                        borderLeft:stat.display ==="Tourism Rates"?"1px solid RGBA(255, 255, 255, 0.3)":"",
                        borderRight:stat.display ==="Tourism Rates"?"1px solid RGBA(255, 255, 255, 0.3)": "",

                    }}>
                <div className={"cd-value"} style={{
                    fontSize:22,
                    fontWeight:500,      
                }}> 
                {stat.value}
                {stat.display ==="Population"? <sup style={{fontSize:12}}>m</sup>
                :stat.display ==="Tourism Rates"?  <sup style={{fontSize:12}}>%</sup>   
                :""}
                </div>
                
                <div className={"cd-type"} style={{
                    fontSize:11,
                    fontWeight:300,
                    textTransform: 'uppercase'
                }}>{stat.display}</div>   
            </div>

           
                )})}
                 </div>
        
    </div>
        

    </section>
)
}

}


// <div className={"cd-stat"} 
//             style={{
//                 display:"flex",
//                 alignItems:"center",
//                 justifyContent:"center",
//                 flexDirection:"column",
//                 padding:"10px",
//                 color:"white",

//             }}>
//                 <div className={"cd-value"} style={{
//                     fontSize:22,
//                     fontWeight:500,      
//                 }}>4<sup style={{fontSize:12}} >m</sup></div>    
//                 <div className={"cd-type"} style={{
//                     fontSize:11,
//                     fontWeight:300,
//                     textTransform: 'uppercase'
//                 }}>read</div>   
//             </div>
            
//             <div className={"cd-stat border"} style={{
//                 display:"flex",
//                 alignItems:"center",
//                 justifyContent:"center",
//                 flexDirection:"column",
//                 padding:"10px",
//                 color:"white",

//                 borderLeft:"1px solid rgb(172, 26, 87)",
//                 borderRight:"1px solid rgb(172, 26, 87)",

//             }}>
//                 <div className={"cd-value"}style={{
//                     fontSize:22,
//                     fontWeight:500,      
//                 }}>4<sup style={{fontSize:12}} >m</sup></div>    
//                 <div className={"cd-type"}style={{
//                     fontSize:11,
//                     fontWeight:300,
//                     textTransform: 'uppercase'
//                 }}>views</div>   
//             </div>

//             <div className={"cd-stat"}style={{
//                 display:"flex",
//                 alignItems:"center",
//                 justifyContent:"center",
//                 flexDirection:"column",
//                 padding:"10px",
//                 color:"white",

//             }}>
//                 <div className={"cd-value"}style={{
//                     fontSize:22,
//                     fontWeight:500,      
//                 }}>4<sup style={{fontSize:12}} >m</sup></div>    
//                 <div className={"cd-type"} style={{
//                     fontSize:11,
//                     fontWeight:300,
//                     textTransform: 'uppercase'
//                 }}>comments</div>   
//             </div>
        