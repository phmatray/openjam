import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Segment, Header, Image } from 'semantic-ui-react';
import JoinUs from '../common/messages/JoinUs';
import cover from '../../img/backgrounds/cover-social.jpg';

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/share');
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <Segment basic>
        <Header as="h1">
          So much more than a music streaming service...
          <Header.Subheader>
            OpenJam is the first open-source community music streaming platform.
          </Header.Subheader>
        </Header>

        <Image src={cover} />

        <JoinUs />
      </Segment>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Landing);
