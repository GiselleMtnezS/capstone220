import React ,{Component}from 'react'

export default class Footer extends Component {
constructor(props){
    super(props)
    this.state={
        to: this.props.to
    }
}
componentDidMount=()=>{
    console.log(this.props)
}

render (){
    // console.log(this.state.to)
return(
    <footer style={{
        
// borderTop:"white 5px solid",
}} 
    className="section-footer">
      
          <h3>Please visit again soon!</h3>
            <h2>@copyright.Zach.GMtnezS</h2>
  </footer>
)
}

}
