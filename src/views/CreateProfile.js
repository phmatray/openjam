import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Segment, Container, Header, Form, Button, Label } from 'semantic-ui-react';

import Input from '../components/Input';
import generateHandle from '../lib/utils/generateHandle';
import withTheme from '../hocs/withTheme';
import { createProfile } from '../reducers/data/profile';
import { getErrors } from '../reducers/data/error';
import { getIsAuthenticated, getUser } from '../reducers/auth';

class CreateProfile extends PureComponent {
  state = {
    displaySocialInputs: false,
    handle: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    soundcloud: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: '',
    errors: {},
  };

  componentDidMount() {
    const { isAuthenticated, user } = this.props;
    if (isAuthenticated) {
      const { firstname, lastname } = user;
      const handle = generateHandle(firstname, lastname);
      this.setState({ handle });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = e => {
    e.preventDefault();

    const {
      handle,
      status,
      website,
      location,
      skills,
      githubusername,
      bio,
      soundcloud,
      twitter,
      facebook,
      linkedin,
      youtube,
      instagram,
    } = this.state;

    const profileData = {
      handle,
      status,
      website,
      location,
      skills,
      githubusername,
      bio,
      soundcloud,
      twitter,
      facebook,
      linkedin,
      youtube,
      instagram,
    };

    const { createProfile, history } = this.props;
    createProfile(profileData, history);
  };

  render() {
    const {
      handle,
      status,
      website,
      location,
      skills,
      githubusername,
      bio,
      soundcloud,
      twitter,
      facebook,
      linkedin,
      youtube,
      instagram,
      errors,
      displaySocialInputs,
    } = this.state;

    const { theme } = this.props;

    let socialInputs;

    if (displaySocialInputs) {
      socialInputs = (
        <Container style={{ marginBottom: '1em' }}>
          <Input
            placeholder="SoundClound Profile URL"
            name="soundcloud"
            icon="soundcloud"
            value={soundcloud}
            onChange={this.handleChange}
            error={errors.soundcloud}
          />

          <Input
            placeholder="Twitter Profile URL"
            name="twitter"
            icon="twitter"
            value={twitter}
            onChange={this.handleChange}
            error={errors.twitter}
          />

          <Input
            placeholder="Facebook Profile URL"
            name="facebook"
            icon="facebook"
            value={facebook}
            onChange={this.handleChange}
            error={errors.facebook}
          />

          <Input
            placeholder="LinkedIn Profile URL"
            name="linkedin"
            icon="linkedin"
            value={linkedin}
            onChange={this.handleChange}
            error={errors.linkedin}
          />

          <Input
            placeholder="YouTube Profile URL"
            name="youtube"
            icon="youtube"
            value={youtube}
            onChange={this.handleChange}
            error={errors.youtube}
          />

          <Input
            placeholder="Instagram Profile URL"
            name="instagram"
            icon="instagram"
            value={instagram}
            onChange={this.handleChange}
            error={errors.instagram}
          />
        </Container>
      );
    }

    // Select options for status
    const options = [
      {
        value: 'Listener',
        text: 'Listener',
      },
      {
        value: 'Amateur Musician',
        text: 'Amateur Musician',
      },
      {
        value: 'Professional Musician',
        text: 'Professional Musician',
      },
      {
        value: 'Other',
        text: 'Other',
      },
    ];

    return (
      <Segment basic>
        <Header as="h1">Create Your Profile</Header>
        <p>Let&apos;s get some information to make your profile awesome.</p>

        <Form error noValidate onSubmit={this.handleSubmit}>
          <Input
            as="text-field"
            icon="address card"
            placeholder="Profile handle"
            name="handle"
            value={handle}
            onChange={this.handleChange}
            error={errors.handle}
            info="An unique handle for your profile URL. Your full name, band name, nickname, etc..."
            disabled
            required
          />

          <Input
            as="select-list"
            icon="microphone"
            placeholder="* Status"
            name="status"
            value={status}
            onChange={(e, data) => {
              this.setState({ status: data.value });
            }}
            error={errors.status}
            info="Give us an idea of where you are in your music life."
            options={options}
          />

          <Input
            as="text-field"
            icon="world"
            placeholder="Website"
            name="website"
            value={website}
            onChange={this.handleChange}
            error={errors.website}
            info="Could be your own website or one of your band."
          />

          <Input
            as="text-field"
            icon="location arrow"
            placeholder="Location"
            name="location"
            value={location}
            onChange={this.handleChange}
            error={errors.location}
            info="City or city &amp; state suggested (eg. BOSTON, MA)"
          />

          <Input
            as="text-field"
            icon="music"
            placeholder="Skills"
            name="skills"
            value={skills}
            onChange={this.handleChange}
            error={errors.skills}
            info="Please use comma separated values (eg. Synthetizer,Guitar,Bass,Drums)"
            required
          />

          <Input
            as="text-field"
            icon="github"
            placeholder="GitHub username"
            name="githubusername"
            value={githubusername}
            onChange={this.handleChange}
            error={errors.githubusername}
            info="If you are a developer and you want a GitHub link, include your username"
          />

          <Input
            as="text-area-field"
            placeholder="Short bio"
            name="bio"
            value={bio}
            onChange={this.handleChange}
            error={errors.bio}
            info="Tell us a little about yourself"
          />

          <Form.Field>
            <Button
              type="button"
              content="Add Social Network Links"
              onClick={() => {
                this.setState(prevState => ({
                  displaySocialInputs: !prevState.displaySocialInputs,
                }));
              }}
            />
            <Label pointing="left" color="blue" style={{ marginTop: '1em', marginBottom: '1.5em' }}>
              Optional
            </Label>
          </Form.Field>
          {socialInputs}

          <Form.Button
            fluid
            size="large"
            color={theme.primarySemantic}
            content="Submit"
            onClick={this.handleSubmit}
          />
        </Form>
      </Segment>
    );
  }
}

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
  user: getUser(state),
  errors: getErrors(state),
});

export default withRouter(
  withTheme(
    connect(
      mapStateToProps,
      { createProfile },
    )(CreateProfile),
  ),
);
