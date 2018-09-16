import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid, Button, Icon, Header } from 'semantic-ui-react';
import Slider from 'rc-slider';
import { updatePlaylist, play, pause, previous, next } from '../../redux/modules/player';
import { fetchTracks } from '../../redux/modules/track';

const CircularSocialButtons = () => (
  <div>
    <Button
      circular
      color="facebook"
      icon="facebook f"
      style={{ marginBottom: '0.5em', marginRight: '0.5em' }}
    />
    <Button
      circular
      color="twitter"
      icon="twitter"
      style={{ marginBottom: '0.5em', marginRight: '0.5em' }}
    />
  </div>
);

class Player extends Component {
  componentDidMount() {
    const { fetchTracks, updatePlaylist } = this.props;

    fetchTracks().then(() => {
      const { tracks } = this.props.track;
      updatePlaylist(tracks);
    });
  }

  render() {
    const { height, player } = this.props;
    const { playing, current, audioInfo } = player;

    let buttonPlayPause = playing ? (
      <Button icon onClick={this.props.pause} color="teal" size="big">
        <Icon name="pause" />
      </Button>
    ) : (
      <Button icon onClick={this.props.play} color="teal" size="big">
        <Icon name="play" />
      </Button>
    );

    return (
      <Grid
        verticalAlign="middle"
        textAlign="center"
        style={{ height: height, backgroundColor: 'black', margin: 0 }}
      >
        {current && (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              padding: 0,
            }}
          >
            <div style={{ width: '8em', height: '8em' }}>
              <img
                src={current.coverurl}
                alt="cover"
                style={{
                  width: '7.4em',
                  height: '7.4em',
                  border: '0.1em solid white',
                  margin: '0.2em',
                }}
              />
            </div>
            <div
              style={{
                width: '16em',
                marginLeft: '0.5em',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <div style={{ marginTop: '1em' }}>
                <Header as="h5" inverted>
                  <Link to={`/track/${current._id}`} style={{ color: 'white' }}>
                    <b>{current.title}</b>
                  </Link>
                </Header>
              </div>
              <div style={{ marginTop: '0.5em' }}>
                <Header as="h5" inverted>
                  <i>by</i>
                  &nbsp;&nbsp;
                  {current.artist}
                </Header>
              </div>
            </div>
            <div
              style={{
                margin: '1em',
                color: 'white',
                width: '5em',
                textAlign: 'right',
              }}
            >
              {audioInfo && audioInfo.seek ? audioInfo.seek : '0:00'}
            </div>
            <div
              style={{
                width: '30em',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Slider
                min={0}
                max={100}
                value={(audioInfo && audioInfo.seekPercentage) || 0}
                style={{ marginTop: '1.1em' }}
              />
              <div style={{ marginTop: '1em' }}>
                {/* TODO: open current playlist */}
                <Button icon disabled size="big">
                  <Icon name="list" />
                </Button>
                {/* TODO: set random */}
                <Button icon disabled size="big">
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
                <Button icon disabled size="big">
                  <Icon name="repeat" />
                </Button>
                {/* TODO: share on other medias with a dropdown
                  - copy link to clipboard
                  - generate QR code
                  - share to facebook and twitter
                */}
                <Button icon disabled size="big">
                  <Icon name="share alternate" />
                </Button>
              </div>
            </div>
            <div
              style={{
                margin: '1em',
                color: 'white',
                width: '5em',
                textAlign: 'left',
              }}
            >
              {audioInfo && audioInfo.duration ? audioInfo.duration : '0:00'}
            </div>
            <div style={{ margin: '0.5em' }}>
              <CircularSocialButtons />
            </div>
          </div>
        )}

        {/* <Grid.Row style={{ padding: 0, marginTop: '1px' }}>
          <Grid.Column style={{ padding: 0 }}>
            <Progress percent={23} color="teal" size="tiny" style={{ margin: 0 }} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={3}>
          <Grid.Column>{current && <TrackInfo track={current} />}</Grid.Column>
          <Grid.Column>
            <Button.Group>
              <Button icon>
                <Icon name="random" />
              </Button>
              <Button icon onClick={this.props.previous} size="big">
                <Icon name="step backward" />
              </Button>
              {buttonPlayPause}
              <Button icon onClick={this.props.next} size="big">
                <Icon name="step forward" />
              </Button>
              <Button icon>
                <Icon name="repeat" />
              </Button>
            </Button.Group>
          </Grid.Column>
          <Grid.Column />
        </Grid.Row> */}
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  player: state.player,
  track: state.track,
});

export default connect(
  mapStateToProps,
  { fetchTracks, updatePlaylist, play, pause, previous, next },
)(Player);
