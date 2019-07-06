import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './New_assig/New_assig';
import Info from './New_assig/Second_assig';

class App extends Component {
state = {
  Friends: [
    {name: 'a' , age: 25},
    {name: 'b' , age: 28},
    {name: 'c' , age: 29}
  ]
}
secondstate ={
  enemy:[
    {code:'aa' , time:'0700'},
    {code:'bb' , time:'0800'},
    {code:'cc' , time:'0900'}
    


    
  ]
  
}
 Changestate = () => {
   console.log("assdf");
  this.setState({
    Friends:[
    {name: 'e' , age: 25},
    {name: 'f' , age: 28},
    {name: 'g' , age: 29}
    ]
  })
}

  render () {
  return (
    <div className="App">
      <p>hi</p>
      <p>
        <Data
        name= {this.state.Friends[0].name}
        age ={this.state.Friends[0].age} />
        <Data
        name= {this.state.Friends[1].name}
        age ={this.state.Friends[1].age}/>
        <Data
        name= {this.state.Friends[2].name}
        age ={this.state.Friends[2].age}
        click = {this.Changestate} />
        </p>
        <p>
        <Info
        code = {this.secondstate.enemy[0].code}
        time = {this.secondstate.enemy[0].time} />
        </p>
        <p>
        <button onClick = {this.Changestate}>For Change</button>

      </p>
    </div>
  );
  }
}

export default App;
