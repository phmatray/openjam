import { connect } from 'react-redux';
import { updatePlaylist, play, pause, previous, next } from '../../redux/modules/player';
import { fetchTracks } from '../../redux/modules/track';
import Player from './presenter';

const mapStateToProps = state => ({
  player: state.player,
  track: state.track,
});

export default connect(
  mapStateToProps,
  { fetchTracks, updatePlaylist, play, pause, previous, next },
)(Player);
