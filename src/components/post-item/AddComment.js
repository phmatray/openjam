import React, { Component } from 'react';
import { ThemeConsumer } from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Flex from '../Flex';
import Div from '../Div';
import Input from '../Input';
import { addComment } from '../../redux/modules/page-share';

import { AvatarSmall, Button, AddCommentForm } from './styles';

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
      firstname: user.firstname,
      lastname: user.lastname,
      handle: user.handle,
      avatar: user.avatar,
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
            <AvatarSmall src={user.avatar} />
            <AddCommentForm error noValidate onSubmit={this.handleSubmit}>
              <Div mb="-1em">
                <Input
                  as="text-area-field"
                  placeholder="Express yourself"
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
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  user: state.auth.user,
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { addComment },
)(AddComment);
