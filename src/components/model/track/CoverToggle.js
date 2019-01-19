// @flow

import React from 'react';

import withTheme from '../../../hocs/withTheme';
import type { TrackBasic } from '../../../types';

import Wrapper from './cover-toggle/Wrapper';
import Cover from './cover-toggle/Cover';
import Overlay from './cover-toggle/Overlay';
import Icon from './cover-toggle/Icon';

type Props = {
  playTrack: (track: TrackBasic) => void,
  pause: () => void,
  track: TrackBasic,
  isActive: boolean,
  playerPlaying: boolean,
  isNew?: boolean,
  theme: any,
};

const CoverToggle = ({ playTrack, pause, track, isActive, isNew, playerPlaying, theme }: Props) => {
  const showPause = playerPlaying && isActive;

  return (
    <Wrapper>
      <Cover
        src={track.coverurl.w200}
        alt={track.title}
        label={
          isNew && { corner: 'left', icon: 'time', size: 'mini', color: theme.primarySemantic }
        }
      />
      <Overlay onClick={() => (showPause ? pause() : playTrack(track))}>
        <Icon
          name={`${showPause ? 'pause' : 'play'} circle outline`}
          inverted
          color="grey"
          size="large"
          style={{ marginRight: 0 }}
        />
      </Overlay>
    </Wrapper>
  );
};

CoverToggle.defaultProps = {
  isNew: true,
};

export default withTheme(CoverToggle);
