/* global twttr */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TwitterTimeline extends Component {
  state = { initialized: false };

  componentDidMount() {
    if (this.state.initialized) {
      return;
    }

    if (typeof twttr === 'undefined') {
      const twittertimeline = this.node;
      const twitterscript = document.createElement('script');
      twitterscript.src = '//platform.twitter.com/widgets.js';
      twitterscript.async = true;
      twitterscript.id = 'twitter-wjs';
      twittertimeline.parentNode.appendChild(twitterscript);
    } else {
      twttr.widgets.load();
    }

    this.initialized();
  }

  initialized() {
    this.setState({ initialized: true });
  }

  render() {
    const { url, chrome, limit, width, height, loading } = this.props;
    return (
      <a
        ref={node => (this.node = node)}
        className="twitter-timeline"
        href={url}
        data-chrome={chrome}
        data-tweet-limit={limit}
        data-width={width}
        data-height={height}
      >
        {loading || 'Tweets by OpenJam_EU'}
      </a>
    );
  }
}

TwitterTimeline.propTypes = {
  url: PropTypes.string,
  chrome: PropTypes.string,
  limit: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  loading: PropTypes.bool,
};

TwitterTimeline.defaultProps = {
  url: '',
  chrome: '',
  limit: null,
  width: null,
  height: null,
  loading: null,
};

export default TwitterTimeline;
