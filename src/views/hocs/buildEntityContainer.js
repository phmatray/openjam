// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Spinner from 'views/components/Spinner';

type Props = {
  fetchEntity: (entityId: string) => void,
  entity?: {},
  loading?: boolean,
  match: { params: { id: string } },
};

type State = {
  entityId: string,
};

const EntityContainerHOC = (ComposedComponent, mapStateToProps, mapDispatchToProps) => {
  class EntityContainer extends Component<Props, State> {
    state = { entityId: '' };

    static defaultProps = {
      entity: null,
      loading: false,
    };

    componentDidMount() {
      this.setState(
        {
          entityId: this.props.match.params.id,
        },
        async () => {
          if (this.state.entityId !== '') {
            await this.props.fetchEntity(this.state.entityId);
          }
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

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(EntityContainer);
};

export default EntityContainerHOC;
