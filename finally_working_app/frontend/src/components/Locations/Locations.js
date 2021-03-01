import React ,{Component}from 'react'
import LocationPreview from './LocationPreview'
export default class Locations extends Component {
constructor(){
    super()
    this.state={
        locations:[
            {name:"location1", display: "Playa Del Carmen",continent:"Mexico", 
            theme:{background:"palegoldenrod", color:"rgb(252, 109, 44)", details:"yellow"},
            img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.getyourguide.com%2Fimg%2Flocation_img-308-3944880789-148.jpg&f=1&nofb=1",
            stats:{population: {value:123, display:"Population"}, touristRate:{value:23, display: "Tourism Rates"}, ratings: {value:4.5, display:"Rating"} },
            description: "Playa del Carmen is a city located along the Caribbean Sea in the municipality of Solidaridad, in the state of Quintana Roo, Mexico.",

            },

            {name:"location2", display:"Punta Cana",continent:"Caribbean",
            theme:{background:"paleturquoise", color:"rgb(4, 95, 180)", details:"rgb(73, 174, 236)"},
             img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.foxworldtravel.com%2Fwp-content%2Fuploads%2F2014%2F09%2Fpunta-cana2.jpg&f=1&nofb=1",
             stats:{population: {value:154, display:"Population"}, touristRate:{value:14, display: "Tourism Rates"}, ratings: {value:5, display:"Rating"} },
             description:"Punta Cana is a resort town within the Veron-Punta Cana municipal district, in the easternmost province of the Dominican Republic",
            },

            {name:"location3", display:"San Juan",continent:" Puerto Rico",
            theme:{background:"rgb(183, 250, 183)", color:"green", details:"greenyellow"},
             img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.timeout.com%2Fimages%2F102852687%2Fimage.jpg&f=1&nofb=1",
             stats:{population: {value:134, display:"Population"}, touristRate:{value:36, display: "Tourism Rates"}, ratings: {value:4, display:"Rating"} },
             description: "San Juan is the capital and most-populous municipality in the Commonwealth of Puerto Rico, an unincorporated territory of the United States.",

            },
            
            ]
    }
}

render (){

return(
    <section style={{ 
        width:"100%",height:"100%",
        background: "linear-gradient(180deg, rgba(78,107,209,1) 5%, rgba(4,210,253,1) 61%, rgba(0,215,255,1) 85%, rgba(250,250,250,1) 100%",
         
        
        display:"flex", flexDirection:"column", 
        alignItems:"center", 
        paddingTop:"0vw",
        // justifyContent:"space-evenly",
        }} >
        {/* Locations */}
        <div  style={{display:"grid", gridTemplateColumns:"30% 30% 30%", width:"85%", gridGap:"3%", marginTop:"5vw"}}>
        {this.state.locations.map((location, index) => ( <LocationPreview navigating ={this.props.navigating} key={index} location={location}/>))}
        </div>
        {/* <LocationPreview location={}/> */}
        {/* <LocationPreview location={}/> */}
        {/* <LocationPreview location={}/> */}

    </section>
)
}

}
