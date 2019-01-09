import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, GridRow, GridColumn, Menu, Container } from 'semantic-ui-react';

import HeroSimple from '../components/HeroSimple';
import Feed from '../components/Feed';
import Spinner from '../components/Spinner';
import Message from '../components/Message';
import { fetchPosts, getPosts, getLoading } from '../reducers/ui/pages/share';
import background from '../images/backgrounds/container-1867697_1920.jpg';

import PostForm from './share/PostForm';
import { getIsAuthenticated } from '../reducers/auth';

class Share extends Component {
  state = { activeItem: 'newsfeed' };

  componentDidMount() {
    this.props.fetchPosts();
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { posts, loading, isAuthenticated, t } = this.props;
    const { activeItem } = this.state;

    return (
      <React.Fragment>
        <HeroSimple
          background={background}
          header={t('pages.share.header')}
          subheader={t('pages.share.subheader')}
        />

        <Container>
          <Grid padded>
            <GridRow>
              <GridColumn mobile={16} tablet={4} computer={4} style={{ paddingLeft: 0 }}>
                <Menu fluid vertical tabular>
                  <Menu.Item
                    name="newsfeed"
                    active={activeItem === 'newsfeed'}
                    onClick={this.handleItemClick}
                    content={t('pages.share.newsfeed')}
                  />
                  {/* <Menu.Item
                  name="marketplace"
                  active={activeItem === 'marketplace'}
                  onClick={this.handleItemClick}
                /> */}
                </Menu>
              </GridColumn>
              <GridColumn stretched mobile={16} tablet={12} computer={12} style={{ padding: 0 }}>
                {isAuthenticated ? <PostForm /> : <Message />}
                {posts === null || loading ? <Spinner /> : <Feed posts={posts} />}
              </GridColumn>
            </GridRow>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

Share.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  posts: getPosts(state),
  loading: getLoading(state),
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(
  mapStateToProps,
  { fetchPosts },
)(withNamespaces('common')(Share));
