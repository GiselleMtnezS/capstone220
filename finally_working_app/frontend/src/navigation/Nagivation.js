import React ,{Component}from 'react'
import App from './../App'
import Link from './Link'
import './../css/index.css'
import Footer from "./Footer"
// react-router-dom was not working with docker-react; since we don't have time to fix it I made my own mini version of it. 
export default class Navigation extends Component {
constructor(){
    super()
    this.state={
        navigation:"/locations/location1",
        pagesDisplay:["Home","About","Contact Us","Locations","Location 1","Location 2","Location 3","Covid Precautions"],
        pagesAddress:["/","/about","/contactus","/locations/","/locations/location1","/locations/location2","/locations/location3","/covid"
]
    }
}

navigating=(to)=>{
//   console.log(to)
  this.setState({navigation:to})
}

render (){
// console.log(this.state)
return(
    <section style={{display:"grid",gridTemplateRows:"65px auto 150px", height:"100vh" }}>
       {/* Navigation */}
       {/* <div > */}
        
      <nav style={{width:"100%", height:"100%", maxHeight:"65px"}}>
          <ul style={{width:"100%", height:"100%", margin:0,padding:0}} className="topnav">
              {this.state.pagesDisplay.map((pageText,index) =>(<Link key={index}navigating ={this.navigating}  
              to={this.state.pagesAddress[index]}>{pageText} 
              </Link>))}
{/*               
              
              <Link navigating ={this.navigating}  
              to="/about">About 
              </Link>
              
              <Link navigating ={this.navigating}  
              to="/contactus">Contact Us 
              </Link>
              
              <Link navigating ={this.navigating}  
              to="/locations/">Locations 
              </Link>
              
              <Link navigating ={this.navigating}  
              to="/locations/location1">Location 1 
              </Link>
              
              <Link navigating ={this.navigating}  
              to="/locations/location2">Location 2 
              </Link>
              
              <Link navigating ={this.navigating}  
              to="/locations/location3">Location 3 
              </Link>
              
              <Link navigating ={this.navigating} 
              to="/covid"> Covid Disclaimer 
              </Link> */}
          </ul
          >
        </nav>
    {/* </div> */}
    
       <App navigation={this.state.navigation} navigating ={this.navigating}/>

       <Footer/>
    </section>
)
}

}

// {/* <div id="html-ver">
// {/* <a href="/">Home</a>
// <a href="/about">About</a>
// <a href="/contact">Contact Us</a>
// <a href="/location1">Location 1</a>
// <a href="/location2">Location 2</a>
// <a href="/location3">Location 3</a>
// <a href="/covid">Covid Disclaimer</a> */}</div> */}
