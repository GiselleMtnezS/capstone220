import React, {Component}from 'react'

export default class About extends Component {
constructor(){
    super()
    this.state={}
}
render (){

return(
    <section style={{ 
        background: "linear-gradient(180deg, rgba(78,107,209,1) 5%, rgba(4,210,253,1) 61%, rgba(0,215,255,1) 85%, rgba(250,250,250,1) 100%"
        ,width:"100%",height:"100%",
        display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center"}}>
        <div style={{width:"25vw",height:"25vw",
         background: "rgba(250,250,250,0.4)",
         borderRadius:"50px", padding:"50px",
textAlign:"center",
         }}>
        <h1 style={{fontSize:"2em"}}>This wonderful website is a project that we started working on near the beginning of 2021</h1>

<p style={{fontSize:"2em"}}>We strive to provide the most accurate and up to date information on the locations that we feature here. If you have any questions, please don't hesitate to contact us on
    our contact page. 
    <p>Thank you!</p>
</p>

{/* <p style={{fontSize:"2em"}}>We feature 3 locations around the world at a time and offer current information about those specific places. Please visit <a href="tripadvisor.com">Tripadvisor</a>
   for specific dates/prices for your desired vacation!
</p> */}
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