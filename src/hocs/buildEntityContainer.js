import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Spinner from '../components/Spinner';

const EntityContainerHOC = (ComposedComponent, mapStateToProps, mapDispatchToProps) => {
  class EntityContainer extends Component {
    state = { entityId: null };

    componentDidMount() {
      this.setState(
        {
          entityId: this.props.match.params.id,
        },
        async () => {
          await this.props.fetchEntity(this.state.entityId);
        },
      );
    }

    componentWillReceiveProps(newProps) {
      const { params } = newProps.match;

      if (params.id !== this.state.entityId) {
        this.setState({ entityId: params.id }, async () => {
          await this.props.fetchEntity(this.state.entityId);
        });
      }
    }

    render() {
      const { entity, loading } = this.props;
      return entity === null || entity === undefined || loading ? (
        <Spinner />
      ) : (
        <ComposedComponent entity={entity} {...this.props} />
      );
    }
  }

  EntityContainer.propTypes = {
    fetchEntity: PropTypes.func.isRequired,
    entity: PropTypes.object,
    loading: PropTypes.bool,
  };

  EntityContainer.defaultProps = {
    entity: null,
    loading: false,
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(EntityContainer);
};

export default EntityContainerHOC;
