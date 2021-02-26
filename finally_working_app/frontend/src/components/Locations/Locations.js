import React ,{Component}from 'react'
import LocationPreview from './LocationPreview'
export default class Locations extends Component {
constructor(){
    super()
    this.state={
        locations:[
            {name:"location1", display: "Spain",continent:"Europe", 
            theme:{background:"palegoldenrod", color:"rgb(252, 109, 44)", details:"yellow"},
            img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhandluggageonly.co.uk%2Fwp-content%2Fuploads%2F2015%2F06%2FNissi-Beach-2.jpg&f=1&nofb=1",
            stats:{population: {value:123, display:"Population"}, touristRate:{value:23, display: "Tourism Rates"}, ratings: {value:4.5, display:"Rating"} }
        
            },

            {name:"location2", display:"No idea",continent:"Australia",
            theme:{background:"paleturquoise", color:"rgb(4, 95, 180)", details:"rgb(73, 174, 236)"},
             img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.australia.com%2Fcontent%2Faustralia%2Fen_us%2Fplaces%2Fperth-and-surrounds%2F_jcr_content%2Fhero%2Fmobile.adapt.768.high.jpg&f=1&nofb=1",
             stats:{population: {value:154, display:"Population"}, touristRate:{value:14, display: "Tourism Rates"}, ratings: {value:5, display:"Rating"} }
             
            },

            {name:"location3", display:"Singapore",continent:"Asia",
            theme:{background:"rgb(183, 250, 183)", color:"green", details:"greenyellow"},
             img:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.livinginsingapore.org%2Fwp-content%2Fuploads%2F2013%2F02%2Fsiloso_beach_sentosa_island_singapore.jpg&f=1&nofb=1",
             stats:{population: {value:134, display:"Population"}, touristRate:{value:36, display: "Tourism Rates"}, ratings: {value:4, display:"Rating"} }
            },
            
            ]
    }
}
render (){

return(
    <section style={{ marginTop:"-18.72px",width:"100%",height:"100%"}} style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", width:"100%", height:"70%"}} >
        {/* Locations */}
        <div  style={{display:"grid", gridTemplateColumns:"30% 30% 30%", width:"75%", gridGap:"3%", paddingLeft:"1.5%"}}>
        {this.state.locations.map((location, index) => ( <LocationPreview navigating ={this.props.navigating} key={index} location={location}/>))}
        </div>
        {/* <LocationPreview location={}/> */}
        {/* <LocationPreview location={}/> */}
        {/* <LocationPreview location={}/> */}

    </section>
)
}

}
