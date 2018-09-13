import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
import InputGroup from '../common/InputGroup';
import { createProfile, getCurrentProfile } from '../../redux/modules/profile';
import { Segment, Container, Header, Form, Button, Label } from 'semantic-ui-react';
import isEmpty from '../../validation/is-empty';

class EditProfile extends Component {
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
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile;

      // Bring skills array back to CSV
      const skillsCSV = profile.skills.join(',');

      // If profile field doesn't exist, make empty string
      profile.handle = !isEmpty(profile.handle) ? profile.handle : '';
      profile.website = !isEmpty(profile.website) ? profile.website : '';
      profile.location = !isEmpty(profile.location) ? profile.location : '';
      profile.status = !isEmpty(profile.status) ? profile.status : '';
      profile.githubusername = !isEmpty(profile.githubusername) ? profile.githubusername : '';
      profile.bio = !isEmpty(profile.bio) ? profile.bio : '';
      profile.social = !isEmpty(profile.social) ? profile.social : {};
      profile.soundcloud = !isEmpty(profile.social.soundcloud) ? profile.social.soundcloud : '';
      profile.twitter = !isEmpty(profile.social.twitter) ? profile.social.twitter : '';
      profile.facebook = !isEmpty(profile.social.facebook) ? profile.social.facebook : '';
      profile.linkedin = !isEmpty(profile.social.linkedin) ? profile.social.linkedin : '';
      profile.youtube = !isEmpty(profile.social.youtube) ? profile.social.youtube : '';
      profile.instagram = !isEmpty(profile.social.instagram) ? profile.social.instagram : '';

      // Set component fields state
      this.setState({
        handle: profile.handle,
        website: profile.website,
        location: profile.location,
        status: profile.status,
        skills: skillsCSV,
        githubusername: profile.githubusername,
        bio: profile.bio,
        soundcloud: profile.soundcloud,
        twitter: profile.twitter,
        facebook: profile.facebook,
        linkedin: profile.linkedin,
        youtube: profile.youtube,
        instagram: profile.instagram,
      });
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
            placeholder="SoundCloud Profile URL"
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
        <Header as="h1">Edit Profile</Header>
        <Button as={Link} to="/dashboard">
          Go Back
        </Button>

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
              content="Edit Social Network Links"
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

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile },
)(withRouter(EditProfile));
