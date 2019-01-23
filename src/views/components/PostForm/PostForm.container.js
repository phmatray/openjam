// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';

import withTheme from 'views/hocs/withTheme';
import { Div } from 'views/elements';
import Input from 'views/components/Input';
import { addPost } from 'store/modules/ui/views/share';
import { getErrors } from 'store/modules/data/error';
import { getUser } from 'store/modules/auth';
import type { UserBasic } from 'lib/types';

type NewPost = {
  type: 'post-basic',
  text: string,
  byUser: string,
};

type Props = {
  addPost: (newPost: NewPost) => void,
  user: UserBasic,
  errors: {},
  theme: any,
};

type State = {
  text: string,
  errors: {},
};

class PostForm extends PureComponent<Props, State> {
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

    const { user } = this.props;

    const newPost = {
      type: 'post-basic',
      text: this.state.text,
      byUser: user._id,
    };

    this.props.addPost(newPost);
    this.setState({ text: '' });
  };

  render() {
    const { user, theme } = this.props;
    const { errors } = this.state;

    return (
      <Div mb="1em">
        <Form error noValidate onSubmit={this.handleSubmit}>
          <Input
            as="text-area-field"
            placeholder={`Speak your mind, ${user.firstName}`}
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            error={errors.text}
          />
          <Form.Button
            fluid
            size="large"
            color={theme.primarySemantic}
            content="Share"
            onClick={this.handleSubmit}
          />
        </Form>
      </Div>
    );
  }
}

const mapStateToProps = state => ({
  user: getUser(state),
  errors: getErrors(state),
});

export default withTheme(
  connect(
    mapStateToProps,
    { addPost },
  )(PostForm),
);
