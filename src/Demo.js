import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

// through class

// class Demo extends Component{
//        render(){
//            return <div className="maindiv_style">
//            <p>WellCome To My Page</p>
//            <h1>Hello {this.props.name}</h1> 
//             </div>
//        }
// }


// Through Function
const Demo = (props) => {

    return <div className="maindiv_style">
           <p>WellCome To My Page</p>
           <h1>Hello {props.name}</h1> 
            </div>

}

export default Demo;