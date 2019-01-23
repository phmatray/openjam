// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Segment, Icon, Table } from 'semantic-ui-react';

import pages from 'config/pages';

const sections = [
  {
    header: 'originals',
    to: '/tracks/originals',
    maxItems: 32,
    maxHeight: 256,
  },
  {
    header: 'remixes',
    to: '/tracks/remixes',
    maxItems: 32,
    maxHeight: 256,
  },
  {
    header: 'artists',
    to: '/artists',
    maxItems: 16,
    maxHeight: 512,
  },
];

const Test = () => (
  <Container style={{ margin: '1em auto' }}>
    <Segment>
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="3">Pages</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {pages.map(({ name, route: { path } }) => (
            <Table.Row key={name}>
              <Table.Cell collapsing>
                <Icon name="folder" />
                {name}
              </Table.Cell>
              <Table.Cell>
                <Link to={path}>{path}</Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Segment>
  </Container>
);

export default Test;
