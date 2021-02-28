import React ,{Component}from 'react'
/* // <style>

// .topnav {
//     background-color: #3366ff;
//     overflow: hidden;
//     }

// .topnav a {
//     float: left;
//     color: #f2f2f2;
//     text-align: center;
//     padding: 14px 16px;
//     text-decoration: none;
//     font-size: 17px;
//     }

// .topnav a:hover {
//     background-color: #ddd;
//     color: black;
//     }

// .topnav a.active {
//     background-color: #4CAF50;
//     color: white;
//     }


// </style> */
export default class ContactUs extends Component {
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
    style={{width:"25vw",height:"30vw",
    background: "rgba(250,250,250,0.5)",
    borderRadius:"50px", padding:"50px",
textAlign:"center",
    }}
    >    
    <form
     onSubmit={(e)=>{e.preventDefault();console.log("submitted needs a function!")}}>
  
      <label >First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
  
      <label >Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
  
      <label >Country</label>
      <select id="country" name="country">
        <option value="australia">Australia</option>
        <option value="canada">Canada</option>
        <option value="usa">USA</option>
      </select>
  
      <label >Subject</label>
      <textarea id="subject" name="subject" placeholder="Let us know!" style={{height:"200px"}}></textarea>
  
      <button type="submit" >Submit</button>
      </form></div>
      </section>
       
      
        

   
)
}

}

