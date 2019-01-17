// @flow

import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Header, Tab, Card, Label } from 'semantic-ui-react';

import getYears from '../../../lib/utils/getYears';
import Section from '../../../components/Section';
import withTheme from '../../../hocs/withTheme';

type Props = {
  artist: {
    tracks: {
      track: any,
    }[],
    information: {
      description: any,
      members: any,
    },
  },
  loading?: boolean,
};

const Tabs = ({ artist, loading, theme }: Props) => {
  const { description, members } = artist.information;
  const hasDescription = description && description[0].length > 0;

  const titlesPane = {
    menuItem: 'Titles',
    render: () => (
      <Tab.Pane attached color={theme.primarySemantic} loading={loading}>
        {artist.tracks !== null && (
          <Section
            title="Titles"
            items={artist.tracks.map(t => t.track)}
            maxHeight={256}
            showDivider={false}
          />
        )}
      </Tab.Pane>
    ),
  };

  const descriptionPane = {
    menuItem: 'Description',
    render: () => (
      <Tab.Pane attached color={theme.primarySemantic}>
        <Header as="h2">Description</Header>
        <div>
          {hasDescription ? (
            description.map(_ => <ReactMarkdown key={_} source={_} />)
          ) : (
            <span>There is no description for this artist</span>
          )}
        </div>
        <br />

        {members && (
          <React.Fragment>
            <Header as="h2">Members</Header>
            <Card.Group itemsPerRow={2} doubling>
              {members.map(_ => (
                <Card key={_.name} color={theme.primarySemantic}>
                  <Card.Content>
                    <Card.Header>{_.name}</Card.Header>
                    {_.years && <Card.Meta>{getYears(_.years)}</Card.Meta>}
                    {_.roles && (
                      <Card.Description>
                        {_.roles.map(role => (
                          <Label key={role} style={{ margin: '0px 4px 4px 0' }}>
                            {role}
                          </Label>
                        ))}
                      </Card.Description>
                    )}
                  </Card.Content>
                </Card>
              ))}
            </Card.Group>
          </React.Fragment>
        )}
      </Tab.Pane>
    ),
  };

  const panes = [titlesPane, descriptionPane];

  return <Tab menu={{ secondary: true, pointing: true }} panes={panes} />;
};

Tabs.defaultProps = {
  loading: false,
};

export default withTheme(Tabs);
