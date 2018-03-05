import React, { Component } from 'react';
import {NouaComponenta} from './NouaComponenta'

export default class ComponentaMea extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ceva: "ana are pizza",
      name: 'Oaoaoa',
      buttonName: 'Change Me',
      obiectulMeu: [
        {
          key: 10,
          value: "ana"
        },
        {
          key: 11,
          value: "are"
        },
        {
          key: 12,
          value: "mere"
        },
      ],

    }


  }

  changeMe() {
    this.setState({name: "albastru"});
    this.state.obiectulMeu.push({key: 13, value: "mari"});
  }

  changeInputName(event) {
      this.setState({ceva: event.target.value})
  }

  render() {
    const listItems = this.state.obiectulMeu.map((obj) =>
    <li key={obj.key}>
      {obj.value}
    </li>
    );
    return(

      <div>
        <h1> Hello, {this.props.test} {this.state.buttonName} {this.state.name}! </h1>
        <button onClick={this.changeMe.bind(this)}> {this.state.buttonName} </button>
        <ul> {listItems} </ul>
        {[1,2,3]}

        <NouaComponenta name={this.state.ceva} change = {this.changeInputName.bind(this)}/>

        <NouaComponenta name={this.state.name} change = {this.changeInputName.bind(this)}/>


      </div>

    )
  }
}
