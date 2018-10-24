import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../../elements/Inputs/TextFieldGroup';
import TextAreaFieldGroup from '../../elements/Inputs/TextAreaFieldGroup';
import SelectListGroup from '../../elements/Inputs/SelectListGroup';
import InputGroup from '../../elements/Inputs/InputGroup';
import { createProfile } from '../../redux/modules/profile';
import generateHandle from '../../utils/generateHandle';
import { Segment, Container, Header, Form, Button, Label } from 'semantic-ui-react';

class CreateProfile extends Component {
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
    if (this.props.auth.isAuthenticated) {
      const firstname = this.props.auth.user.firstname;
      const lastname = this.props.auth.user.lastname;

      const handle = generateHandle(firstname, lastname);

      this.setState({ handle: handle });
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

    const profileData = {
      handle: this.state.handle,
      status: this.state.status,
      website: this.state.website,
      location: this.state.location,
      skills: this.state.skills,
      githubusername: this.state.githubusername,
      bio: this.state.bio,
      soundcloud: this.state.soundcloud,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram,
    };

    this.props.createProfile(profileData, this.props.history);
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

    let socialInputs;

    if (displaySocialInputs) {
      socialInputs = (
        <Container style={{ marginBottom: '1em' }}>
          <InputGroup
            placeholder="SoundClound Profile URL"
            name="soundcloud"
            icon="soundcloud"
            value={soundcloud}
            onChange={this.handleChange}
            error={errors.soundcloud}
          />

          <InputGroup
            placeholder="Twitter Profile URL"
            name="twitter"
            icon="twitter"
            value={twitter}
            onChange={this.handleChange}
            error={errors.twitter}
          />

          <InputGroup
            placeholder="Facebook Profile URL"
            name="facebook"
            icon="facebook"
            value={facebook}
            onChange={this.handleChange}
            error={errors.facebook}
          />

          <InputGroup
            placeholder="LinkedIn Profile URL"
            name="linkedin"
            icon="linkedin"
            value={linkedin}
            onChange={this.handleChange}
            error={errors.linkedin}
          />

          <InputGroup
            placeholder="YouTube Profile URL"
            name="youtube"
            icon="youtube"
            value={youtube}
            onChange={this.handleChange}
            error={errors.youtube}
          />

          <InputGroup
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
        <p>Let's get some information to make your profile awesome.</p>

        <Form error noValidate onSubmit={this.handleSubmit}>
          <TextFieldGroup
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

          <SelectListGroup
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

          <TextFieldGroup
            icon="world"
            placeholder="Website"
            name="website"
            value={website}
            onChange={this.handleChange}
            error={errors.website}
            info="Could be your own website or one of your band."
          />

          <TextFieldGroup
            icon="location arrow"
            placeholder="Location"
            name="location"
            value={location}
            onChange={this.handleChange}
            error={errors.location}
            info="City or city &amp; state suggested (eg. BOSTON, MA)"
          />

          <TextFieldGroup
            icon="music"
            placeholder="Skills"
            name="skills"
            value={skills}
            onChange={this.handleChange}
            error={errors.skills}
            info="Please use comma separated values (eg. Synthetizer,Guitar,Bass,Drums)"
            required
          />

          <TextFieldGroup
            icon="github"
            placeholder="GitHub username"
            name="githubusername"
            value={githubusername}
            onChange={this.handleChange}
            error={errors.githubusername}
            info="If you are a developer and you want a GitHub link, include your username"
          />

          <TextAreaFieldGroup
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
            color="teal"
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
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  errors: state.errors,
});

export default withRouter(
  connect(
    mapStateToProps,
    { createProfile },
  )(CreateProfile),
);
