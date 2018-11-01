import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, GridRow, GridColumn, Menu } from 'semantic-ui-react';

import PostForm from './share/PostForm';
import { getPosts } from '../redux/modules/post';
import Feed from '../components/Feed';
import Spinner from '../components/Spinner';
import Message from '../components/Message';
import Body from '../components/Body';

class Share extends Component {
  state = { activeItem: 'newsfeed' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { t } = this.props;
    const { posts, loading } = this.props.post;
    const { isAuthenticated } = this.props.auth;
    const { activeItem } = this.state;

    return (
      <Body breadcrumbSegments={[t('pages.share.header')]} description={t('pages.share.subheader')}>
        <Grid padded>
          <GridRow>
            <GridColumn mobile={16} tablet={4} computer={4} style={{ paddingLeft: 0 }}>
              <Menu fluid vertical tabular>
                <Menu.Item
                  name={'newsfeed'}
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
)(withNamespaces('common')(Share));
