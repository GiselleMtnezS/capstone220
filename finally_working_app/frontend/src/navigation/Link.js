import React ,{Component}from 'react'

export default class Link extends Component {
constructor(props){
    super(props)
    this.state={
        to: this.props.to
    }
}
componentDidMount=()=>{
    // console.log(this.props)
}

render (){
    // console.log(this.state.to)
return(
    <li onClick={()=>{this.props.navigating(this.state.to)}}>
        {this.props.children}
    </li>
)
}

}
