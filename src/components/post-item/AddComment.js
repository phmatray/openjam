import React, { Component } from 'react';
import { ThemeConsumer } from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Flex from '../Flex';
import Div from '../Div';
import Input from '../Input';
import { addComment } from '../../reducers/ui/views/share';

import { AvatarSmall, Button, AddCommentForm } from './styles';
import { getUser } from '../../reducers/auth';
import { getErrors } from '../../reducers/data/error';

class AddComment extends Component {
  state = {
    text: '',
    errors: {},
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = e => {
    e.preventDefault();

    const { user, postId } = this.props;

    const newComment = {
      text: this.state.text,
      firstName: user.firstName,
      lastName: user.lastName,
      handle: user.handle,
      profileImageUrl: user.profileImageUrl,
    };

    this.props.addComment(postId, newComment);
    this.setState({ text: '' });
  };

  render() {
    const { errors } = this.state;
    const { user } = this.props;

    return (
      <ThemeConsumer>
        {theme => (
          <Flex>
            <AvatarSmall src={user.profileImageUrl} />
            <AddCommentForm error noValidate onSubmit={this.handleSubmit}>
              <Div mb="-1em">
                <Input
                  as="text-area-field"
                  placeholder={`Express yourself ${user.firstName}...`}
                  name="text"
                  value={this.state.text}
                  onChange={this.handleChange}
                  error={errors.text}
                />
                <Button
                  circular
                  compact
                  icon="send"
                  color={theme.primarySemantic}
                  content="Send"
                  onClick={this.handleSubmit}
                />
              </Div>
            </AddCommentForm>
          </Flex>
        )}
      </ThemeConsumer>
    );
  }
}

AddComment.propTypes = {
  postId: PropTypes.string.isRequired,
  user: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
    profileImageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  user: getUser(state),
  errors: getErrors(state),
});

export default connect(
  mapStateToProps,
  { addComment },
)(AddComment);
