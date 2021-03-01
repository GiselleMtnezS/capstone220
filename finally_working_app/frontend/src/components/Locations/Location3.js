import React ,{Component}from 'react'

export default class Location3 extends Component {
constructor(){
    super()
    this.state={}
}
render (){

return(
    <section style={{ 
        display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",
        textAlign:"center",
        width:"100%",height:"100%"
        }}>
                <img style={{ width:"100%", height:"auto"}}
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.timeout.com%2Fimages%2F102852687%2Fimage.jpg&f=1&nofb=1" 
                />


                <div className="location3-wrapper" style={{
                width:"100%", color:"white",
                display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",
                }}>
                        <div style={{width:"60%", height:"100%"}}>
                             <div style={{display:"grid",gridTemplateColumns:"100%",}}>
                                    <div className="location3-top" style={{
                                        // color:"#00E4E2"
                                        }}>  
                                        <h1 className="location3-text"style={{ marginBottom:"0px"
                                        }}>Visiting San Juan?</h1>

                                        <h2 style={{
                                            // color:"rgba(0,215,255,1)"
                                            }}>San Juan is the capital and most-populous municipality in the Commonwealth of Puerto Rico, an unincorporated territory of the United States.
                                            <br></br><br></br> 
                                            As of the 2010 census, 
it is the 46th-largest city under the jurisdiction of the United States, with a population of 395,326. San Juan was founded by Spanish colonists in 1521, who called it 
Ciudad de Puerto Rico ("Rich Port City"). Puerto Rico's capital is the third oldest European-established capital city in the Americas, after Santo Domingo, 
in the Dominican Republic, founded in 1496, and Panama City, in Panama, founded in 1521,and is the oldest European-established city in the U.S. proper or U.S. 
territories. Several historical buildings are located in San Juan; among the most notable are the city's former defensive forts, Fort San Felipe del Morro and Fort San 
Cristóbal, and La Fortaleza, the oldest executive mansion in continuous use in the Americas.</h2>

                                    </div>  
                            </div>
                        </div>

                        {/* <div style={{width:"100%", background:"rgba(250,250,250,0.5)"}}>
                                    <h1 className="location3-text-middle"> WHERE TO GO? <span style={{display:"block", fontSize:"0.8em"}}>AND</span> WHAT TO DO? </h1>
                        </div> */}
                        <div style={{width:"60%", height:"100%"}}>

                            <div className="location3-bottom" >
    
                                    <h2 className="location3-text-middle" style={{
                                        fontSize:"5em"
                                // color:"rgba(235,175,149,1"
                                }}>Top Rated Hotels</h2>
                                <ul style={{fontSize:"2em", listStyle:"none"}}>
                                <li>The Condado Plaza Hilton</li>
                                <li>352 Guest House</li>
                                <li>Tropica Beach Hotel</li>
                                <li>Dream Inn</li>
                                <li>The Dreamcatcher</li>
                                </ul>
                                <h1 style={{fontSize:"5em",
                                }}>Main Attractions</h1>
                                   <h2>Old San Juan</h2>
                                <p>With almost 500 years of history, Old San Juan is a gateway to the past. Old San Juan has over 400 restored colonial buildings filled with shops, restaurants, museums, hotels, and other public buildings</p>
                                <h2>Fuerte San Felipe del Morro</h2>
                                <p>Built in 1539, El Morro protects the entrance to San Juan Bay. Explore the forts outposts, barracks, dungeons, and tunnels</p>
                                <h2>San Juan Cathedral</h2>
                                <p>One of the oldest Cathedrals in the America's, the Cathedral still holds regular services and tours are available</p>
                                <h2>Museo de las Americas</h2>
                                <p>The Museo de las Americas explores the history of Puerto Rice. Be ready to take a dive into Art, Ethnic Groups, and the colonization that has made Puerto Rico what it is today</p>
                                <h2>Condado and Ocean Park Beach</h2>
                                <p>This white sand beach is very clean and popular with the locals. Also nearby is a huge convention center with shopping, theaters, restaurants, and periodic festivals!</p>
  
                                  
                            </div>
                        </div>
                        
 
                </div>
    </section>

)
}

}


