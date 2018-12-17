import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, GridRow, GridColumn, Menu, Container } from 'semantic-ui-react';

import HeroSimple from '../components/HeroSimple';
import Feed from '../components/Feed';
import Spinner from '../components/Spinner';
import Message from '../components/Message';
import { getPosts } from '../redux/modules/page-share';
import background from '../images/backgrounds/container-1867697_1920.jpg';

import PostForm from './share/PostForm';

class Share extends Component {
  state = { activeItem: 'newsfeed' };

  componentDidMount() {
    this.props.getPosts();
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { t } = this.props;
    const { posts, loading } = this.props.post;
    const { isAuthenticated } = this.props.auth;
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
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  post: state.pageShare,
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { getPosts },
)(withNamespaces('common')(Share));
