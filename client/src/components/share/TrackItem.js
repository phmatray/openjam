import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { Feed, Icon } from 'semantic-ui-react';
import { playSelected, pause } from '../../redux/modules/player';

class TrackItem extends Component {
  handleShareClick = trackId => {
    console.log(`Shared: ${trackId}`);
  };

  handleLikeClick = trackId => {
    console.log(`Liked: ${trackId}`);
  };

  render() {
    const { track } = this.props;
    const { playing, current } = this.props.player;

    let buttonPlayPause = playing ? (
      <Feed.Like onClick={() => this.props.pause()}>
        <Icon name="pause" />
        Pause
      </Feed.Like>
    ) : (
      <Feed.Like onClick={() => this.props.playSelected(current)}>
        <Icon name="play" />
        Play
      </Feed.Like>
    );

    return (
      <Feed.Event key={track._id}>
        <Feed.Label>
          <Icon name="music" />
        </Feed.Label>
        <Feed.Content>
          <Feed.Date>
            <Moment fromNow>{track.date}</Moment>
          </Feed.Date>
          <Feed.Summary>
            <span>
              Discover&nbsp;
              <Link to={`/track/${track._id}`}>{track.title}</Link>,<br />
              the newest track from {track.artist}.
            </span>
          </Feed.Summary>

          <Feed.Meta>
            {buttonPlayPause}
            <Feed.Like onClick={this.handleShareClick.bind(undefined, track._id)}>
              <Icon name="share" />
              {track.meta.shares.length} Share
            </Feed.Like>
            <Feed.Like onClick={this.handleLikeClick.bind(undefined, track._id)}>
              <Icon name="like" />
              {track.meta.likes.length} Likes
            </Feed.Like>
            <Feed.Like as={Link} to={`/track/${track._id}`}>
              <Icon name="comments" />
              Comments
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>
    );
  }
}

TrackItem.propTypes = {
  playSelected: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  player: state.player,
});

export default connect(
  mapStateToProps,
  { playSelected, pause },
)(TrackItem);
