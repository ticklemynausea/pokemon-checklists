import React, { Component, createContext } from "react";

const setValue = (data, key, checked) => {
 if (checked) {
   return { ...data, [key]: true };
  } else {
    const { [key]: deletedKey, ...rest } = data;
    return rest;
  }
}

const hasValue = (data, key) => {
  return key in data;
}

const loadLocal = () => {
  const state = localStorage.getItem("checklist");
  return JSON.parse(state) || {};

}
const persistLocal = (state) => {
  localStorage.setItem("checklist", JSON.stringify(state));
}

const {
  Provider,
  Consumer
} = createContext();

class Store extends Component {
  setValue = (key, checked) => {
    this.setState({
      data: setValue(this.state.data, key, checked)
    }, () => {
      persistLocal(this.state.data);
    })
  }

  hasValue = (key) => {
    return hasValue(this.state.data, key);
  }

  state = {
    data: loadLocal(),
    setValue: this.setValue,
    hasValue: this.hasValue,
  }

  render() {
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    );
  }
}

export { Consumer };

export default Store;
