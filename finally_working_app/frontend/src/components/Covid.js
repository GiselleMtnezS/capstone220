import React ,{Component}from 'react'

export default class Covid extends Component {
constructor(){
    super()
    this.state={}
}
render (){

return(
    <section style={{ 
        background: "linear-gradient(180deg, rgba(78,107,209,1) 5%, rgba(213,150,238,1) 45%, rgba(231,156,242,0.87718837535014) 84%, rgba(0,215,255,1) 100%)",
        // marginTop:"-18.72px",
        display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center",
        width:"100%",height:"100%", color:"white"}}>  
    <div className="container-contact" 
    style={{width:"45vw",height:"30vw",
    background: "rgba(250,250,250,0.5)",
    borderRadius:"50px", padding:"50px",
    color:"rgba(78,107,209,1)",
    textAlign:"center",
    }}
    >    
        <h2>As we all know, the current covid-19 pandemic has put a hamper on travelling this past year. 
            
        </h2>
        
        <h2 style={{textDecoration:"underline"}}>If you must travel, take these precautionas as given by the CDC, to protect yourself and others from COVID-19:</h2>
        <ul style={{textAlign:"left", fontSize:"1.2em"}}>
            <li>If you are eligible, get fully vaccinated for COVID-19. Wait 2 weeks after getting your second vaccine dose to travel—it takes time for your body to build protection after any vaccination.</li>
            <li>Get tested with a viral test 1-3 days before you travel. Keep a copy of your test results with you during travel in case you are asked for them. Do NOT travel if you test positive.</li>
            <li>Check travel restrictions before you go.</li>
            <li>Wear a mask over your nose and mouth when in public settings. Masks are required on planes, buses, trains, and other forms of public transportation traveling into, within, or out of the United States and in U.S. transportation hubs such as airports and stations.</li>
            <li>Avoid crowds and stay at least 6 feet/2 meters (about 2 arm lengths) from anyone who did not travel with you. It’s important to do this everywhere — both indoors and outdoors.</li>
            <li>Wash your hands often or use hand sanitizer (with at least 60% alcohol).</li>
            <li>Bring extra supplies, such as masks and hand sanitizer.</li>
            <li>Avoid contact with anyone who is sick.</li>
            <li>Avoid touching your eyes, nose, and mouth.</li>
        </ul>
    </div>
    </section>
)
}

}


{/* <style>
        .topnav {
            background-color: #3366ff;
            overflow: hidden;
            }

        .topnav a {
            float: left;
            color: #f2f2f2;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            font-size: 17px;
            }

        .topnav a:hover {
            background-color: #ddd;
            color: black;
            }

        .topnav a.active {
            background-color: #4CAF50;
            color: white;
            }
    </style> */}