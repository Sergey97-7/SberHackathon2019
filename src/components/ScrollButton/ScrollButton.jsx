import React, { Component } from "react";
import "./ScrollButton.scss";
export default class ScrollButton extends Component {
  state = {
    visible: false
  };
  scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    if (window.scrollY > 100) {
      this.setState({ visible: true });
    } else {
      this.setState({ visible: false });
    }
  };
  render() {
    return this.state.visible ? (
      <div className="scrollup" onClick={this.scrollToTop}></div>
    ) : null;
  }
}
