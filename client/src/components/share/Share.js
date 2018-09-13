import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import PostFeed from './PostFeed';
import TrackItem from './TrackItem';
import TwitterTimeline from './TwitterTimeline';
import Spinner from '../common/Spinner';
import { Segment, Header, Feed, Grid } from 'semantic-ui-react';
import { getPosts } from '../../redux/modules/post';
import { fetchTracks } from '../../redux/modules/track';
import { playSelected, pause } from '../../redux/modules/player';
import JoinUs from '../common/messages/JoinUs';

class Share extends Component {
  handlePlayClick = trackId => {
    console.log(`Played: ${trackId}`);
  };

  handleShareClick = trackId => {
    console.log(`Shared: ${trackId}`);
  };

  handleLikeClick = trackId => {
    console.log(`Liked: ${trackId}`);
  };

  componentDidMount() {
    this.props.getPosts();
    this.props.fetchTracks();
  }

  renderTracks() {
    const { tracks } = this.props.track;

    const trackContent =
      tracks === null ? (
        <div>No tracks</div>
      ) : (
        <Feed>
          {tracks.map(track => (
            <TrackItem key={track._id} track={track} />
          ))}
        </Feed>
      );
    return trackContent;
  }

  render() {
    const { posts, loading } = this.props.post;
    const { isAuthenticated } = this.props.auth;

    let postContent;
    if (posts === null || loading) {
      postContent = <Spinner />;
    } else {
      postContent = <PostFeed posts={posts} />;
    }

    let postForm;
    if (isAuthenticated) {
      postForm = <PostForm />;
    } else {
      postForm = <JoinUs />;
    }

    return (
      <Segment basic>
        <Header as="h1">
          Share
          <Header.Subheader>Your latest musical favorites are on OpenJam.</Header.Subheader>
        </Header>

        {postForm}

        <Grid divided padded>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={11} computer={11}>
              {this.renderTracks()}
              {postContent}
            </Grid.Column>
            <Grid.Column width={5} only="computer" style={{ padding: 0 }}>
              <TwitterTimeline
                url={'https://twitter.com/OpenJam_EU?ref_src=twsrc%5Etfw'}
                chrome="noborders noheader nofooter noscrollbar"
                height={515}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

Share.propTypes = {
  getPosts: PropTypes.func.isRequired,
  fetchTracks: PropTypes.func.isRequired,
  playSelected: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  track: PropTypes.object.isRequired,
  player: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  post: state.post,
  track: state.track,
  player: state.player,
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { getPosts, fetchTracks, playSelected, pause },
)(Share);
