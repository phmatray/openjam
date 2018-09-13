import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid, Button, Icon, Progress, Image, Header } from 'semantic-ui-react';
import { updatePlaylist, play, pause, previous, next } from '../../redux/modules/player';
import { fetchTracks } from '../../redux/modules/track';
import TrackInfo from './TrackInfo';

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
    const { playing, current } = player;

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
              backgroundColor: '#222222',
              display: 'flex',
              justifyContent: 'flex-start',
              padding: 0,
            }}
          >
            <div style={{ width: '8em', height: '8em' }}>
              <img src={current.coverurl} style={{ width: '7.4em', height: '7.4em', border:'0.1em solid white', margin: '0.2em' }} />
            </div>
            <div
              style={{
                backgroundColor: '#444444',
                width: '16em',
                marginLeft: '1em',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <div style={{ marginTop: '1em' }}>
                <Header as="h5" inverted>
                  <Link to={`/track/${current._id}`}>
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
            <div style={{ marginLeft: '1em' }}>
              <Button.Group>
                <Button icon onClick={this.props.previous} size="big">
                  <Icon name="step backward" />
                </Button>
                {buttonPlayPause}
                <Button icon onClick={this.props.next} size="big">
                  <Icon name="step forward" />
                </Button>
              </Button.Group>
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
