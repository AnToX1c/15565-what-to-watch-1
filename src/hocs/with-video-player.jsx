import React, {Component} from 'react';

const withVideoPlayer = (WrappedComponent) => {
  class WithVideoPlayer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        activeId: null,
      };

      this._timeoutId = null;
      this._handleOnMouseEnter = this._handleOnMouseEnter.bind(this);
    }

    render() {
      return <WrappedComponent
        {...this.props}
        activeFilm={this.state.activeId}
        onMouseEnter={this._handleOnMouseEnter}
      />;
    }

    _handleOnMouseEnter(id) {
      if (id === null) {
        this.setState({
          activeId: id,
        });
        if (this._timeoutId) {
          clearTimeout(this._timeoutId);
        }
      } else {
        this._timeoutId = setTimeout(() => {
          this.setState({
            activeId: id,
          });
        }, 1000);
      }
    }
  }

  return WithVideoPlayer;
};

export default withVideoPlayer;
