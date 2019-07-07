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
  ],
  showperson : true

}



secondstate ={
  enemy:[
    {code:'aa' , time:'0700'},
    {code:'bb' , time:'0800'},
    {code:'cc' , time:'0d900'}
    


    
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
changename = (event) =>
{
  this.setState({
    Friends:[
    {name: 'e' , age: 25},
    {name: event.target.value , age: 28},
    {name: 'g' , age: 29}
    ]
  })
}
toggledetail = () =>
{
  const doesshow = this.state.showperson;
  console.log(doesshow);
  this.setState({showperson:!doesshow})
}

  render () {
  return (
    <div className="App">
      <p>
        <button onClick = {this.toggledetail}>For Change</button>

      </p>
      <p>hi</p>
      {this.state.showperson ? 
      <div>
      <p>
        <Data
        name= {this.state.Friends[0].name}
        age ={this.state.Friends[0].age} />
        <Data
        name= {this.state.Friends[1].name}
        age ={this.state.Friends[1].age}
        changed={this.changename}/>
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
        </div> :null
      }
        
    </div>
  );
  }
}

export default App;
