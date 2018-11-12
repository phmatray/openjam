import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';
import { Header, Tab, Card, Label } from 'semantic-ui-react';

import Section from '../../../components/Section';
import { fetchTracks } from '../../../redux/modules/track';

class Tabs extends Component {
  componentDidMount() {
    const { fetchTracks } = this.props;
    fetchTracks();
  }

  getYears = years =>
    years
      .reverse()
      .map(_ => (_.from === _.to ? `${_.from}` : `${_.from}-${_.to}`))
      .join(', ');

  render() {
    const { artist, tracks, loading } = this.props;
    const { description, members } = artist.information;
    const hasDescription = description.length > 0;

    const titlesPane = {
      menuItem: 'Titles',
      render: () => (
        <Tab.Pane attached color="teal" loading={loading}>
          {tracks !== null && <Section title="Pinned titles" items={tracks} maxHeight={128} />}
          {tracks !== null && (
            <Section title="Titles" items={tracks} maxHeight={384} showDivider={false} />
          )}
        </Tab.Pane>
      ),
    };

    const descriptionPane = {
      menuItem: 'Description',
      render: () => (
        <Tab.Pane attached color="teal">
          <Header as="h2">Description</Header>
          <div>
            {hasDescription ? (
              description.map(_ => <ReactMarkdown key={_} source={_} />)
            ) : (
              <span>There is no description for this artist</span>
            )}
          </div>
          <br />

          <Header as="h2">Members</Header>
          <Card.Group itemsPerRow={2} doubling>
            {members.map(_ => (
              <Card key={_.name} color="teal">
                <Card.Content>
                  <Card.Header>{_.name}</Card.Header>
                  <Card.Meta>{this.getYears(_.years)}</Card.Meta>
                  <Card.Description>
                    {_.roles.map(role => (
                      <Label key={role} style={{ margin: '0px 4px 4px 0' }}>
                        {role}
                      </Label>
                    ))}
                  </Card.Description>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        </Tab.Pane>
      ),
    };

    const panes = [titlesPane, descriptionPane];

    return <Tab menu={{ secondary: true, pointing: true }} panes={panes} />;
  }
}

Tabs.propTypes = {
  fetchTracks: PropTypes.func.isRequired,
  tracks: PropTypes.array,
  loading: PropTypes.bool,
};

Tabs.defaultProps = {
  tracks: [],
  loading: false,
};

const mapStateToProps = state => ({
  tracks: state.track.tracks,
  loading: state.track.loading,
});

export default connect(
  mapStateToProps,
  { fetchTracks },
)(Tabs);
