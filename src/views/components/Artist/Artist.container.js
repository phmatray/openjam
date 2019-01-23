// @flow

import React from 'react';
import { connect } from 'react-redux';

import { selectArtist } from 'store/modules/data/artists';
import type { ArtistBasic } from 'lib/types';

import ArtistPresenter from './Artist.presenter';

type Props = {
  artistId?: ?string,
  artistEntity?: ?ArtistBasic,
};

const Artist = ({ artistId, artistEntity }: Props) => {
  if (artistId === null && artistEntity === null) {
    throw Error('This component must have artistId or artist props');
  }

  return artistEntity ? <ArtistPresenter artist={artistEntity} /> : null;
};

Artist.defaultProps = {
  artistId: null,
  artistEntity: null,
};

const mapStateToProps = (state, props) => ({
  artistEntity: selectArtist(state, props),
});

export default connect(mapStateToProps)(Artist);
