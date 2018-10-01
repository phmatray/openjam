import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import logoWhite from '../../img/logos/logo_white.svg';

const Social = ({ href }) => {
  const extractHostname = url => {
    let hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf('//') > -1) {
      hostname = url.split('/')[2];
    } else {
      hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
  };

  // To address those who want the "root domain," use this function:
  const extractRootDomain = url => {
    let domain = extractHostname(url);
    const splitArr = domain.split('.');
    const arrLen = splitArr.length;

    //extracting the root domain here
    //if there is a subdomain
    if (arrLen > 2) {
      domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
      //check to see if it's using a Country Code Top Level Domain (ccTLD) (i.e. ".me.uk")
      if (splitArr[arrLen - 2].length === 2 && splitArr[arrLen - 1].length === 2) {
        //this is using a ccTLD
        domain = splitArr[arrLen - 3] + '.' + domain;
      }
    }
    return domain;
  };

  // To address those who want the "root domain" without the extension.
  const extractWithoutExtension = url => {
    var domain = extractRootDomain(url);
    const splitArr = domain.split('.');
    const result = splitArr[0];
    return result;
  };

  const getIcon = domainName => {
    switch (domainName) {
      case 'facebook':
        return 'facebook f';
      case 'github':
        return 'github alt';
      case 'linkedin':
        return 'linkedin';
      case 'youtube':
        return 'youtube';
      case 'soundcloud':
        return 'soundcloud';
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
        return 'github';
      case 'openjam':
        return 'teal';
      case 'soundcloud':
        return 'orange';

      case 'linkedin':
      case 'youtube':
      case 'twitter':
      case 'instagram':
        return domainName;

      default:
        return 'black';
    }
  };

  const domainName = extractWithoutExtension(href);
  if (domainName === 'openjam') {
    return <Button as="a" href={href} target="_blank" rel="noopener noreferrer" circular />;
  } else {
    const icon = getIcon(domainName);
    const color = getColor(domainName);

    return (
      <Button
        as="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        circular
        icon={icon}
        color={color}
      />
    );
  }
};

Social.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default Social;
