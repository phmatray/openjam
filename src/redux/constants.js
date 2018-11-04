/* eslint-disable import/prefer-default-export */

const apiBase =
  process.env.NODE_ENV === 'production' ? 'https://api.openjam.eu' : 'http://localhost:5000';

export { apiBase };
