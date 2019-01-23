// @flow

import { withNamespaces } from 'react-i18next';

import EntityContainerHOC from 'views/hocs/buildEntityContainer';
// // import { getAlbum } from 'store/modules/ui/views/album.reducer';
// // import { fetchAlbum, getAlbum, getAlbumLoading } from 'store/modules/ui/views/album';

import Presenter from './Album.presenter';

const mapStateToProps = state => ({
  // // entity: getAlbum(state),
  // // loading: getAlbumLoading(state),
});

export default EntityContainerHOC(withNamespaces('common')(Presenter), mapStateToProps, {
  // // fetchEntity: fetchAlbum,
});
