// @flow

import React, { PureComponent } from 'react';
import { withNamespaces } from 'react-i18next';
import { connect } from 'react-redux';
import { Grid, GridRow, GridColumn, Menu, Container } from 'semantic-ui-react';

import background from 'assets/images/backgrounds/container-1867697_1920.jpg';
import { Div } from 'views/elements';
import HeroSimple from 'views/components/Hero/HeroSimple.presenter';
import Feed from 'views/components/Feed';
import Spinner from 'views/components/Spinner';
import Message from 'views/components/Message';
import PostForm from 'views/components/PostForm';
import { getIsAuthenticated } from 'store/modules/auth';
import { fetchPosts, getPosts, getLoading } from 'store/modules/ui/views/share';
import type { PostBasic } from 'lib/types';

import ActionsMenu from './children/ActionsMenu';

type Props = {
  fetchPosts: () => void,
  posts: PostBasic[],
  loading: boolean,
  isAuthenticated: boolean,
  t: any,
};

type State = {
  activeItem: 'newsfeed',
};

class Share extends PureComponent<Props, State> {
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
          divider={false}
        />

        <Div mt="1em" mb="1em">
          <ActionsMenu />
        </Div>

        <Div mb="1em">
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
        </Div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  posts: getPosts(state),
  loading: getLoading(state),
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(
  mapStateToProps,
  { fetchPosts },
)(withNamespaces('common')(Share));
