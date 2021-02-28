import React ,{Component}from 'react'

export default class Home extends Component {
constructor(){
    super()
    this.state={}
}
render (){

return(
    <section style={{ width:"100%",height:"100%"}} >
        <header style={{color: "white",width:"100vw", height:"100%",
    display:"flex", flexDirection:"column", justifyContent:"start",
    
    background: 'url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fitalianrentalblog.files.wordpress.com%2F2013%2F12%2F160056939.jpg&f=1&nofb=1")', 
    // backgroundPosition: "-30% 60%", did nothing
    backgroundRepeat:"no-repeat",
    backgroundSize:"100% 100%", //this is better than cover
    }}>
        <div className="header-text-background" style={{
        display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center",
       
        }}>
            <div style={{
        display:"flex", flexDirection:"column",alignItems:"center",
        borderRadius:"20%", maxWidth:"60%", marginLeft:"0%"
        }}>
            <h1 style={{fontSize:"2.8em"}}>Welcome to our Tourism Site!</h1>
      
      <h2  style={{fontSize:"1.5em", lineHeight:"55px", maxWidth:"70%", textAlign:"center"}}>We provide the BEST and<br></br> most UP-TO-DATE information!</h2>
      </div></div>
      <div className="header-text-background another" style={{
        display:"flex", flexDirection:"column", 
        justifyContent:"center",alignItems:"center",
       
        }}>
            <div style={{
        display:"flex", flexDirection:"column",alignItems:"center",
        borderRadius:"20%", maxWidth:"60%", marginLeft:"0%"
        }}>
            <button>CONTACT US!</button>  
      <h3>If you need any assistance, please feel free to send us a message!</h3>
      <h3> Thank you and have a great day!</h3>
             

           </div></div>
       
        </header>
{/* <div className="section-body" style={{ height:"12vw" }}>
      


      <h3>If you need any assistance, please feel free to click on our 'About Us' page and send us a message. Thank you and have a great day!</h3>
  </div> */}


        
    </section>
)
}

}

