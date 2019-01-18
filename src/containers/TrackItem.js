// @flow

import React, { PureComponent } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Feed, Icon } from 'semantic-ui-react';

import { playSelected, actions } from '../reducers/ui/player';
import withPlayer from '../hocs/withPlayer';
import type { TrackBasic } from '../types';

type Props = {
  playSelected: (track: TrackBasic) => void,
  pause: () => void,
  playerPlaying: boolean,
  playerTrack: TrackBasic,
};

const Presenter = ({
  playSelected,
  pause,
  onShareClick,
  onLikeClick,
  track,
  isAuthenticated,
  playerPlaying,
  playerTrack,
}) => {
  const buttonPlayPause = playerPlaying ? (
    <Feed.Like onClick={() => pause()}>
      <Icon name="pause" />
      Pause
    </Feed.Like>
  ) : (
    <Feed.Like onClick={() => playSelected(playerTrack)}>
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
            Explore&nbsp;
            <Link to={`/track/${track._id}`}>{track.title}</Link>
            {','}
            <br />
            {`the newest track from ${track.artist}.`}
          </span>
        </Feed.Summary>

        <Feed.Meta>
          {buttonPlayPause}

          {isAuthenticated && (
            <React.Fragment>
              <Feed.Like onClick={() => onShareClick(track._id)}>
                <Icon name="share" />
                {`${track.meta.shares.length} Share`}
              </Feed.Like>
              <Feed.Like onClick={() => onLikeClick(track._id)}>
                <Icon name="like" />
                {`${track.meta.likes.length} Likes`}
              </Feed.Like>
              <Feed.Like as={Link} to={`/track/${track._id}`}>
                <Icon name="comments" />
                Comments
              </Feed.Like>
            </React.Fragment>
          )}
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  );
};

class TrackItem extends PureComponent<Props> {
  handleShareClick = (trackId: string) => {
    console.log(`Shared: ${trackId}`);
  };

  handleLikeClick = (trackId: string) => {
    console.log(`Liked: ${trackId}`);
  };

  generateProps = () => ({
    ...this.props,
    ...this.state,
    onShareClick: this.handleShareClick,
    onLikeClick: this.handleLikeClick,
  });

  render() {
    const props = this.generateProps();
    return <Presenter {...props} />;
  }
}

export default withPlayer(
  connect(
    null,
    { playSelected, pause: actions.pause },
  )(TrackItem),
);
