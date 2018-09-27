import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const Social = ({ href }) => {
  const extractDomainName = href => {
    const split = href.split('.');
    const domainName = split[1];
    return domainName;
  };

  const getIcon = domainName => {
    switch (domainName) {
      case 'facebook':
        return 'facebook f';

      case 'github':
        return 'github alt';

      case 'linkedin':
        return 'linkedin in';

      case 'twitter':
      case 'instagram':
        return domainName;

      default:
        return 'chain';
    }
  };

  const getColor = domainName => {
    switch (domainName) {
      case 'facebook':
        return 'facebook';

      case 'github':
        return 'github alt';

      case 'linkedin':
        return 'linkedin in';

      case 'twitter':
      case 'instagram':
        return domainName;

      default:
        return 'chain';
    }
  };

  const domainName = extractDomainName(href);
  const icon = getIcon(domainName);
  const color = getColor(domainName);

  return <Button as="a" href={href} target="_blank" rel="noopener noreferrer" circular color={color} icon={icon} />;
};

Social.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default Social;
