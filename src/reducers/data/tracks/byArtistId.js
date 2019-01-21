//  @flow

type ActionByArtistId = {};

type StateByArtistId = ?[];
type State = {};

const byArtistId = (state: StateByArtistId = null, action: ActionByArtistId) => state;

export default byArtistId;

export const getTrackByArtistId = (state: State, artistId: string) => state[artistId];
