import React, { Component } from 'react';
import './App.css';

class List extends Component {
  // Javascript Defined Method
  constructor() {
    super();

    this.state = {
      checkedItems: []
    };

    // Forcing 'toggleCheck' to always have the same 'this' context no matter where it is invoked/executed
    this.toggleCheck = this.toggleCheck.bind(this);
  }

  // Our Method
  toggleCheck(e) {
    const { checkedItems } = this.state; // [......]
    const itemText = e.target.innerHTML; // Item1
    const itemIndex = checkedItems.indexOf(itemText); // 0
    console.log(`Toggled ${ itemIndex === -1 ? 'Check' : 'UnChecked' } `, itemText)

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
    const items = [ 'Cheese', 'Milk', 'Eggs', 'Item1' ]; // Array Object
    const { checkedItems } = this.state;

    return (
      <div>
        <input/>
        <ul>
          {
            items.map((item) => { // item => Milk
              const myStyle = {
                textDecoration: checkedItems.includes(item) ? 'line-through' : 'none'
              }; // none

              return <li style={ myStyle } onClick={ this.toggleCheck }>{ item }</li>;
            })
          }
        </ul>
      </div>
    );
  }
}

export default List;