// @flow

import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { Feed, Icon } from 'semantic-ui-react';

import type { TrackBasic } from 'lib/types';

type Props = {
  pause: () => void,
  playSelected: (track: TrackBasic) => void,
  onShareClick: (trackId: string) => void,
  onLikeClick: (trackId: string) => void,
  track: TrackBasic,
  playerTrack: TrackBasic,
  playerPlaying: boolean,
  isAuthenticated: boolean,
};

const TrackItem = ({
  playSelected,
  pause,
  onShareClick,
  onLikeClick,
  track,
  isAuthenticated,
  playerPlaying,
  playerTrack,
}: Props) => {
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
            {`the newest track from ${track.artists[0].artist.name}.`}
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

export default TrackItem;
