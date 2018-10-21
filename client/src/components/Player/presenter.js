import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';
import {
  PlayerStyled,
  FlexFill,
  ColumnCover,
  ColumnInfo,
  ColumnTime,
  ColumnControls,
  Cover,
  PlayerLink,
  TrackName,
  Edit,
  ArtistName,
  ButtonCollection,
} from './style';
import Progress from './children/Progress';
import Flex from '../../elements/Flex';
import LinkArtistNames from '../../elements/Links/LinkArtistNames';
import { fancyTimeFormat } from '../../utils/playerHelpers';

class Player extends Component {
  render() {
    const { height, play, pause, playing, current, audioInfo } = this.props;

    let buttonPlayPause = playing ? (
      <Button icon onClick={pause} color="teal" size="big">
        <Icon name="pause" />
      </Button>
    ) : (
      <Button icon onClick={play} color="teal" size="big">
        <Icon name="play" />
      </Button>
    );

    return (
      <PlayerStyled height={height}>
        <Flex column>
          <Progress position={audioInfo.position} duration={audioInfo.duration} />

          <FlexFill>
            <ColumnCover>
              <Cover src={current.coverurl.w200} alt="cover" />
            </ColumnCover>
            <ColumnInfo>
              <PlayerLink to={`/track/${current._id}`}>
                <TrackName>{current.title}</TrackName>
                <Edit>{current.edit ? current.edit : <br />}</Edit>
              </PlayerLink>
              <ArtistName>
                <i>by</i>
                &nbsp;&nbsp;
                <LinkArtistNames artists={current.artists} />
              </ArtistName>
            </ColumnInfo>
            <ColumnTime>
              {audioInfo && audioInfo.position ? fancyTimeFormat(audioInfo.position) : '0:00'} /{' '}
              {audioInfo && audioInfo.duration ? fancyTimeFormat(audioInfo.duration) : '0:00'}
            </ColumnTime>
            <ColumnControls>
              <ButtonCollection>
                {/* TODO: open current playlist */}
                <Button icon disabled>
                  <Icon name="list" />
                </Button>
                {/* TODO: set random */}
                <Button icon disabled>
                  <Icon name="random" />
                </Button>
                <Button.Group>
                  <Button icon onClick={this.props.previous} size="big">
                    <Icon name="step backward" />
                  </Button>
                  {buttonPlayPause}
                  <Button icon onClick={this.props.next} size="big">
                    <Icon name="step forward" />
                  </Button>
                </Button.Group>{' '}
                {/* TODO: set loop one and loop all */}
                <Button icon disabled>
                  <Icon name="repeat" />
                </Button>
                {/* TODO: share on other medias with a dropdown
                  - copy link to clipboard
                  - generate QR code
                  - share to facebook and twitter
                */}
                <Button icon disabled>
                  <Icon name="share alternate" />
                </Button>
              </ButtonCollection>
            </ColumnControls>
          </FlexFill>
        </Flex>
      </PlayerStyled>
    );
  }
}

Player.propTypes = {
  play: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,

  status: PropTypes.string.isRequired,
  playing: PropTypes.bool.isRequired,

  current: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    coverurl: PropTypes.shape({
      w200: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    artists: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,

  audioInfo: PropTypes.shape({
    position: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
  }).isRequired,
};

export default Player;
