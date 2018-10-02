import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import PostFeed from './PostFeed';
import TrackItem from './TrackItem';
import Spinner from '../../../elements/UI/Spinner';
import { Feed, Grid } from 'semantic-ui-react';
import { getPosts } from '../../../redux/modules/post';
import { fetchTracks } from '../../../redux/modules/track';
import { playSelected, pause } from '../../../redux/modules/player';
import JoinUs from '../../../elements/Messages/JoinUs';
import Body from '../../../elements/UI/Body';

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
    const { isAuthenticated } = this.props.auth;

    const trackContent =
      tracks === null ? (
        <div>No tracks</div>
      ) : (
        <Feed>
          {tracks.map(track => (
            <TrackItem key={track._id} track={track} isAuthenticated={isAuthenticated} />
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
      <Body
        breadcrumbSegments={['Share']}
        description="Your latest musical favorites are on OpenJam."
      >
        {postForm}

        <Grid divided padded>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={11} computer={11}>
              {this.renderTracks()}
              {postContent}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Body>
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
