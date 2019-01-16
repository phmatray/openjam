import React, { PureComponent } from 'react';
import { ThemeConsumer } from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';

import Div from '../../components/Div';
import Input from '../../components/Input';
import { addPost } from '../../reducers/ui/views/share';
import { getErrors } from '../../reducers/data/error';
import { getUser } from '../../reducers/auth';

class PostForm extends PureComponent {
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
    const { user } = this.props;
    const { errors } = this.state;

    return (
      <ThemeConsumer>
        {theme => (
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
        )}
      </ThemeConsumer>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: getUser(state),
  errors: getErrors(state),
});

export default connect(
  mapStateToProps,
  { addPost },
)(PostForm);
