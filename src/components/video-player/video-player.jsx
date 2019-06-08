import React, {Component, createRef} from "react";
import PropTypes from "prop-types";

class VideoPlayer extends Component {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
  }

  render() {
    const {imgsrc, previewsrc, muted} = this.props;

    return <video
      width="280"
      height="175"
      loop
      muted={muted}
      poster={imgsrc}
      ref={this._videoRef}
    >
      <source src={previewsrc}></source>
    </video>;
  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    if (this.props.isPlaying) {
      video.play();
    } else {
      video.pause();
      video.currentTime = 0;
      video.load();
    }
  }
}

VideoPlayer.propTypes = {
  imgsrc: PropTypes.string.isRequired,
  previewsrc: PropTypes.string.isRequired,
  muted: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default VideoPlayer;
