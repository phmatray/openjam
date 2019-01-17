// @flow

import React from 'react';

import withTheme from '../../../hocs/withTheme';

import { Wrapper, Cover, Overlay, Icon } from './cover-toggle/Atoms';

type Props = {
  playTrack: () => void,
  pause: () => void,
  track: {
    _id: string,
    title: string,
    coverurl: { w200: string },
  },
  isActive: boolean,
  playerPlaying: boolean,
  isNew?: boolean,
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
