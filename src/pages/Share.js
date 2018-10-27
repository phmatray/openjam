import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, GridRow, GridColumn, Menu } from 'semantic-ui-react';
import PostForm from './share/PostForm';
import { getPosts } from '../redux/modules/post';
import Feed from '../components/Feed';
import Spinner from '../elements/UI/Spinner';
import JoinUs from '../elements/Messages/JoinUs';
import Body from '../elements/UI/Body';

class Share extends Component {
  state = { activeItem: 'newsfeed' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts, loading } = this.props.post;
    const { isAuthenticated } = this.props.auth;
    const { activeItem } = this.state;

    return (
      <Body
        breadcrumbSegments={['Share']}
        description="Your latest musical favorites are on OpenJam."
      >
        <Grid padded>
          <GridRow>
            <GridColumn mobile={16} tablet={4} computer={4} style={{ paddingLeft: 0 }}>
              <Menu fluid vertical tabular>
                <Menu.Item
                  name="newsfeed"
                  active={activeItem === 'newsfeed'}
                  onClick={this.handleItemClick}
                />
                {/* <Menu.Item
                  name="marketplace"
                  active={activeItem === 'marketplace'}
                  onClick={this.handleItemClick}
                /> */}
              </Menu>
            </GridColumn>
            <GridColumn stretched mobile={16} tablet={12} computer={12} style={{ padding: 0 }}>
              {isAuthenticated ? <PostForm /> : <JoinUs />}
              {posts === null || loading ? <Spinner /> : <Feed posts={posts} />}
            </GridColumn>
          </GridRow>
        </Grid>
      </Body>
    );
  }
}

Share.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { getPosts },
)(Share);
