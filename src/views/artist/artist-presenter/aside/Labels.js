import React from 'react';
import PropTypes from 'prop-types';
import { Header, Label } from 'semantic-ui-react';

const Labels = ({ labels }) => (
  <React.Fragment>
    <Header as="h3">Labels</Header>
    <div>
      {labels.map(_ => (
        <Label key={_} tag style={{ margin: '0px 8px 4px 8px' }}>
          {_}
        </Label>
      ))}
    </div>
    <br />
  </React.Fragment>
);

Labels.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Labels;
