import React ,{Component}from 'react'

export default class Location2 extends Component {
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
                    src="https://external-content.duckduckgo.com/iu/?u=https://www.foxworldtravel.com/wp-content/uploads/2014/09/punta-cana2.jpg&f=1&nofb=1" 
                />


                <div className="location1-wrapper" style={{
                width:"100%", 
                color:"#00a5f7",
                display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",
                    }}>
                        <div style={{width:"60%", height:"100%"}}>
                             <div style={{display:"grid",gridTemplateColumns:"100%",}}>
                                    <div className="location1-top" style={{
                                        // color:"#00E4E2"
                                        }}>  
                                        <h1 className="location1-text"style={{ marginBottom:"0px"
                                        }}>Visiting Playa Del Carmen?</h1>

                                        <h2 style={{
                                            // color:"rgba(0,215,255,1)"
                                            }}>Playa del Carmen is a city located along the Caribbean Sea in the municipality of Solidaridad, 
                                            in the state of Quintana Roo, Mexico.<br></br><br></br> It is a popular tourist area in eastern Mexico. Playa del Carmen features a wide array of tourist activities 
                                            due to its geographical location in the Riviera Maya. It has also been the destination of PGA Tour golf tournaments and the set location for various television shows. 
                                            The town has one of the fastest-growing populations in Mexico.</h2>

                                    </div>  
                            </div>
                        </div>

                        {/* <div style={{width:"100%", background:"rgba(250,250,250,0.5)"}}>
                                    <h1 className="location1-text-middle"> WHERE TO GO? <span style={{display:"block", fontSize:"0.8em"}}>AND</span> WHAT TO DO? </h1>
                        </div> */}
                        <div style={{width:"60%", height:"100%"}}>

                            <div className="location1-bottom" >
    
                                    <h2 className="location1-text-middle" style={{
                                        fontSize:"5em"
                                // color:"rgba(235,175,149,1"
                                }}>Top Rated Hotels</h2>
                                <ul style={{fontSize:"2em", listStyle:"none"}}>
                                    <li>Fairmont Mayakoba</li>
                                    <li>Banyan Tree Mayakoba</li>
                                    <li>Palmaia - The House of Aia</li>
                                    <li>Rosewood Mayakoba</li>
                                    <li>Grand Velas Riviera Maya</li>
                                </ul>
                                <h1 style={{fontSize:"5em",
                                }}>Main Attractions</h1>
                                    <h2>The Beach!
                                    <p>The hotel or resort that you are staying in will have it's own, but Playa Del Carmen has miles and miles to explore!</p>
                                    </h2>
                                    <h2>Snorkeling and Scuba Diving
                                    <p>Just offshore of Cozumel has some of the best and most exciting water exploration that you can ask for</p>
                                    </h2>
                                    <h2>Rio Secreto
                                    <p>Rio Secreto is an underground river and a network of caves. Swimming the Underground River is sure to be a blast for the entire family</p>
                                    </h2>
                                    <h2>Xplor
                                    <p>Xplor is and ourdoor, fun filled playground. They offer activities such as zip lining, rafting, and spelunking. They also offer swimming in the underground river network</p>
                                    </h2> 
                                    <h2>Golf Courses
                                    
                                    <p>There are too many golf courses to list, but rest assured, whichever one you pick is guarenteed to be challenging and beautiful</p>

                                    </h2>
                            </div>
                        </div>
                        
 
                </div>
    </section>

)
}

}
