// @flow

import axios from 'axios';

const logionEndpoint = process.env.REACT_APP_ENDPOINT;
if (!logionEndpoint) {
  throw new Error('no endpoint');
}

export function restGetPosts() {
  return axios.get(
    `${logionEndpoint}/post?%24sort=-createdAt&%24embed=byUser&%24embed=byArtist&%24embed=likes&%24embed=comments`,
  );
}

export function restAddPost(postData: { type: 'post-basic', text: string, byUser: string }) {
  return axios.post(`${logionEndpoint}/post`, postData);
}

export function restGetPost(id: string) {
  return axios.get(`${logionEndpoint}/post/${id}`);
}

export function restDeletePost(id: string) {
  return axios.delete(`${logionEndpoint}/post/${id}`);
}

export function restGetUser(id: string) {
  return axios.get(`${logionEndpoint}/user/${id}?%24embed=profiles&%24embed=artists`);
}
