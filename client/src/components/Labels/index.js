import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchLabels } from '../../redux/modules/label';
import { Card } from 'semantic-ui-react';
import LabelItems from './presenter';
import Body from '../../elements/UI/Body';
import H2 from '../../elements/Titles/H2';

class Labels extends Component {
  componentDidMount() {
    this.props.fetchLabels();
  }

  render() {
    const { labels, loading } = this.props;

    return (
      <Body header={['Labels']} description="Pick some music by label.">
        <H2 header="What's new" />

        {labels !== null && (
          <Card.Group itemsPerRow={3}>
            <LabelItems labels={labels} loading={loading} />
          </Card.Group>
        )}
      </Body>
    );
  }
}

Labels.propTypes = {
  labels: PropTypes.array,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  labels: state.label.labels,
  loading: state.label.loading,
});

export default connect(
  mapStateToProps,
  { fetchLabels },
)(Labels);
