import React, { Component } from "react";

export default class ErrorBoundaries extends Component {
  state = {
    hasError: false,
    error: null,
    errorInfo: null
  };
  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error,
      errorInfo
    });
    if (window.BugSnag) {
    }
  }
  render() {
    if (this.state.hasError) {
      return this.props.render(this.state.error, this.state.errorInfo);
    }
    return this.props.children;
  }
}
