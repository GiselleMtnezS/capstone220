import React, { Component } from 'react';
// import logo from '../img/logo.svg';
// import {Link, Switch, Route} from 'react-router-dom'
import Home  from './components/Home'
import About  from './components/About'
import ContactUs from './components/ContactUs'
import Locations  from './components/Locations/Locations'
import Location1  from './components/Locations/Location1'
import Location2  from './components/Locations/Location2'
import Location3  from './components/Locations/Location3'
import Covid from './components/Covid'



class App extends Component {
  constructor(props){
    super(props)
    this.state={
      path: this.props.navigation,
      
    }
  }
//   componentDidMount=()=>{
//   console.log(this.props)
// this.setState({path: this.props.navigation})
//   }
  render() {
    // var {path} = this.state
    // console.log(this.props.navigation)
// console.log(this.state)
    return (
      <div className="App" >
        { this.props.navigation==="/"?
            (<Home />)
          :
          this.props.navigation==="/about"?
            (<About />)
          :
          this.props.navigation==="/contactus"?
            (<ContactUs/>)
          :
           this.props.navigation==="/locations/"?
            (<Locations navigating ={this.props.navigating} />)
          :
           this.props.navigation==="/locations/location1"?
            (<Location1 />)
          :
           this.props.navigation==="/locations/location2"?
            (<Location2 />)
          :
           this.props.navigation==="/locations/location3"?
            (<Location3 />)
          :
          this.props.navigation==="/covid"?
            (<Covid/>) 
            :
            console.log(this.props.navigation)
            }
   

      </div>
    );
  }
}

export default App;

// {/* <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/contactus">
//             <ContactUs/>
//           </Route>
//           <Route exact path="/locations">
//             <Locations />
//           </Route>
//           <Route exact path="/locations/location1">
//             <Location1 />
//           </Route>
//           <Route exact path="/locations/location2">
//             <Location2 />
//           </Route>
//           <Route exact path="/locations/location3">
//             <Location3 />
//           </Route>
//           <Route path="/covid">
//             <Covid/>
//           </Route>
//         </Switch> */} 
// {/* React-router-dom is not working and we don't have time now; so I made my mini version of it.  */}
       