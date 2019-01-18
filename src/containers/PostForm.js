// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';

import withTheme from '../hocs/withTheme';
import Div from '../components/Div';
import Input from '../components/Input';
import { addPost } from '../reducers/ui/views/share';
import { getErrors } from '../reducers/data/error';
import { getUser } from '../reducers/auth';

type NewPost = {
  type: 'post-basic',
  text: string,
  byUser: string,
};

type Props = {
  addPost: (newPost: NewPost) => void,
  user: { _id: string, firstName: string },
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
