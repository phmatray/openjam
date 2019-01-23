// @flow

export const getBrandColor = (domain: string) => {
  switch (domain) {
    case 'youtube':
      return '#ff0000';
    case 'facebook':
      return '#3b5998';
    case 'linkedin':
      return '#0077b5';
    case 'instagram':
      return '#405de6';
    case 'github':
      return '#333';
    case 'twitter':
      return '#1da1f2';
    case 'soundcloud':
      return '#ff8800';
    case 'bandcamp':
      return '#629aa9';
    case 'openjam':
      return '#00b5ad';

    default:
      return 'black';
  }
};

export const getBrandIconName = (domain: string) => {
  switch (domain) {
    case 'facebook':
      return ['fab', 'facebook-f'];
    case 'linkedin':
      return ['fab', 'linkedin-in'];
    case 'github':
      return ['fab', 'github-alt'];

    case 'youtube':
    case 'instagram':
    case 'twitter':
    case 'soundcloud':
    case 'bandcamp':
    case 'openjam':
      return ['fab', domain];

    default:
      return ['fa', 'globe'];
  }
};
