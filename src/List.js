import React, { Component } from 'react';
import './App.css';

class List extends Component {
  // Javascript Defined Method
  constructor() {
    super();

    this.state = {
      checkedItems: [
        "Item1",
        "Item3"
      ]
    };

    // Forcing 'toggleCheck' to always have the same 'this' context no matter where it is invoked/executed
    this.toggleCheck = this.toggleCheck.bind(this);
  }

  // Our Method
  toggleCheck(e) {
    console.log("Event: ", e)
    const { checkedItems } = this.state; // [......]
    const itemText = e.target.innerHTML; // Item1
    const itemIndex = checkedItems.indexOf(itemText); // 0

    // Remember if it is "-1" it is NOT in the array!!!!!
    if(itemIndex === -1) {
      // Add it to checkedItems array
      this.setState({
        checkedItems: [
          ...checkedItems,
          itemText
        ]
      });
    } else {
      // Remove it from checkedItems array, by creating new array without the item in it
      this.setState({
        checkedItems: [
          ...checkedItems.slice(0, itemIndex),
          ...checkedItems.slice(itemIndex + 1)
        ]
      });
    }
  }

  // React Defined Method
  render() {
    const myStyle = [
      { textDecoration: this.state.checkedItems.includes('Item1') ? "line-through" : "none" },
      { textDecoration: this.state.checkedItems.includes('Item2') ? "line-through" : "none" },
      { textDecoration: this.state.checkedItems.includes('Item3') ? "line-through" : "none" },
      { textDecoration: this.state.checkedItems.includes('Item4') ? "line-through" : "none" },
      { textDecoration: this.state.checkedItems.includes('Item2') ? "line-through" : "none" }
    ];
    /*
    [
      'line-through',
      'none',
      'none',
      'none'
    ]
    */

    return (
      <ul>
        <li style={ myStyle[0] } onClick={ this.toggleCheck }>Item1</li>
        <li style={ myStyle[1] } onClick={ this.toggleCheck }>Item2</li>
        <li style={ myStyle[2] } onClick={ this.toggleCheck }>Item3</li>
        <li style={ myStyle[3] } onClick={ this.toggleCheck }>Item4</li>
        <li style={ myStyle[4] } onClick={ this.toggleCheck }>Item2</li>
      </ul>
    );
  }
}

export default List;