
import './App.css';
import ClassComponent from './components/ClassComponent';
import { Component} from 'react';

class App extends Component {
  constructor(props) {
  super(props);
  this.state={
    stateChange: 'Props From Parent',
    renderButton: true,
  }
  this.hideClassComponent = this.hideClassComponent.bind(this);
}
hideClassComponent(){
  this.setState({
    renderButton:false
  })
}


componentDidUpdate() {
  console.log("6");
  console.log("Thấy dòng này sau khi thấy giao diện được render xong");

}
  render(){

    let myButton;
    if(this.state.renderButton){
     myButton = <ClassComponent stateChange ={this.state.stateChange} />
    }
  return (
    <div className="App">
     {myButton}
     <button type="button" onClick={this.hideClassComponent}>Ẩn Class Component props</button>
    </div>
  );
}
}
export default App;
