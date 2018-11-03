import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';

import Track from '../../components/model/Track';
import Body from '../../components/Body';
import Flex from '../../components/Flex';
import H2 from '../../components/H2';

const TracksPresenter = ({ tracks, t }) => (
  <Body
    breadcrumbSegments={[
      <Link to="/explore">{t('pages.explore.header')}</Link>,
      t('pages.tracks.header'),
    ]}
    description={t('pages.tracks.subheader')}
  >
    <H2 header={t('pages.tracks.new')} />
    <Flex wrap justifyStart>
      {tracks.map(track => (
        <Track key={track._id} track={track} />
      ))}
    </Flex>
  </Body>
);

TracksPresenter.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default withNamespaces('common')(TracksPresenter);
