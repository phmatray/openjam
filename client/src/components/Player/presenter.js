import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';
import {
  PlayerStyled,
  FlexFill,
  ColumnCover,
  ColumnInfo,
  ColumnTimeLeft,
  ColumnControls,
  ColumnTimeRight,
  Cover,
  PlayerLink,
  TrackName,
  Edit,
  ArtistName,
  Slider,
  ButtonCollection,
} from './style';
import ArtistNameLinks from '../../elements/ArtistNameLinks';

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
        {current && (
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
                <ArtistNameLinks track={current} />
              </ArtistName>
            </ColumnInfo>
            <ColumnTimeLeft>{audioInfo && audioInfo.seek ? audioInfo.seek : '0:00'}</ColumnTimeLeft>
            <ColumnControls>
              <Slider min={0} max={100} value={(audioInfo && audioInfo.seekPercentage) || 0} />
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
            <ColumnTimeRight>
              {audioInfo && audioInfo.duration ? audioInfo.duration : '0:00'}
            </ColumnTimeRight>
          </FlexFill>
        )}
      </PlayerStyled>
    );
  }
}

Player.propTypes = {
  play: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,

  current: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    coverurl: PropTypes.shape({
      w200: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    artists: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,

  audioInfo: PropTypes.shape({
    seek: PropTypes.string.isRequired,
    seekPercentage: PropTypes.number.isRequired,
    duration: PropTypes.string.isRequired,
  }).isRequired,
};

export default Player;
