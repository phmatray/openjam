// @flow

import axios from 'axios';

type PostInput = {
  type: 'post-basic',
  text: string,
  byUser: string,
};

type LoginInput = {
  email: string,
  password: string,
};

type RegisterInput = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  pin: number,
};

const api = process.env.REACT_APP_ENDPOINT;
if (!api) {
  throw new Error('no endpoint');
}

const apiAlbum = `${api}/album`;
const apiArtist = `${api}/artist`;
const apiLabel = `${api}/label`;
const apiPlaylist = `${api}/playlist`;
const apiPost = `${api}/post`;
const apiProfile = `${api}/profile`;
const apiTrack = `${api}/track`;
const apiUser = `${api}/user`;

// TODO: remove this test method
export function addTrack() {
  console.warn('not implemented');
}

// TODO: remove this test method
export async function fetchTracks(filter: ?'all' | 'original' | ?'remix') {
  let baseUrl = `${apiTrack}?`;
  if (filter && filter !== 'all') {
    baseUrl += `type2=${filter}`;
  }

  const response = await axios.get(`${baseUrl}&%24embed=artists`);
  const tracks = response.data.docs;
  return tracks;
}

// TODO: remove this test method
export function addArtist() {
  console.warn('not implemented');
}

// TODO: remove this test method
export async function fetchArtists(filter: ?'all') {
  const baseUrl = `${apiArtist}?`;

  const response = await axios.get(`${baseUrl}`);
  const artists = response.data.docs;
  return artists;
}

export function restGetAlbums() {
  return axios.get(`${apiAlbum}`);
}

export function restGetAlbum(albumId: string) {
  return axios.get(`${apiAlbum}/${albumId}?%24embed=tracks&%24embed=tracks.artists`);
}

export function restGetArtists() {
  return axios.get(`${apiArtist}?visible=true`);
}

export function restGetArtist(artistId: string) {
  return axios.get(`${apiArtist}/${artistId}?%24embed=tracks&%24embed=tracks.artists`);
}

export function restGetArtistTracks(artistId: string, limit: number = 3) {
  return axios.get(`${apiArtist}/${artistId}/track?%24limit=${limit}&%24embed=artists`);
}

export function restGetLabels() {
  return axios.get(`${apiLabel}`);
}

export function restGetLabel(labelId: string) {
  return axios.get(`${apiLabel}/${labelId}`);
}

export function restGetPlaylists() {
  return axios.get(`${apiPlaylist}?%24embed=tracks`);
}

export function restGetPlaylist(playlistId: string) {
  return axios.get(
    `${apiPlaylist}/${playlistId}?%24embed=tracks&%24embed=tracks.artists&%24embed=tracks.albums`,
  );
}

export function restGetPosts() {
  return axios.get(
    `${apiPost}?%24sort=-createdAt&%24embed=byUser&%24embed=byArtist&%24embed=likes&%24embed=comments`,
  );
}

export function restAddPost(postData: PostInput) {
  return axios.post(`${apiPost}`, postData);
}

export function restGetPost(postId: string) {
  return axios.get(`${apiPost}/${postId}`);
}

export function restDeletePost(postId: string) {
  return axios.delete(`${apiPost}/${postId}`);
}

export function restAddPostLike(postId: string) {
  return axios.post(`${apiPost}/like/${postId}`);
}

export function restDeletePostLike(postId: string) {
  return axios.post(`${apiPost}/unlike/${postId}`);
}

export function restAddPostComment(postId: string, commentData) {
  return axios.post(`${apiPost}/comment/${postId}`, commentData);
}

export function restDeletePostComment(postId: string, commentId: string) {
  return axios.delete(`${apiPost}/comment/${postId}/${commentId}`);
}

export function restAddProfile(profileData) {
  return axios.post(`${apiProfile}`, profileData);
}

export function restDeleteProfile() {
  return axios.delete(`${apiProfile}`);
}

export function restGetProfileMe() {
  return axios.get(`${apiProfile}/me`);
}

export function restGetProfileByHandle(handle: string) {
  return axios.get(`${apiProfile}/handle/${handle}`);
}

export function restGetTracks(trackType: ?'original' | ?'remix') {
  let baseUrl = `${apiTrack}?`;
  if (trackType) {
    baseUrl += `type2=${trackType}`;
  }

  return axios.get(`${baseUrl}&%24embed=artists`);
}

export function restGetTrack(trackId: string) {
  return axios.get(`${apiTrack}/${trackId}?%24embed=albums&%24embed=artists`);
}

export function restGetUsers() {
  return axios.get(`${apiUser}`);
}

export function restGetUser(userId: string) {
  return axios.get(`${apiUser}/${userId}?%24embed=profiles&%24embed=artists`);
}

export function restRegister(userData: RegisterInput) {
  const data = { user: userData, registerType: 'Register' };
  return axios.post(`${api}/register`, data);
}

export function restRegisterActivate(token: string) {
  return axios.post(`${api}/register/activate`, { token });
}

export function restLogin(userData: LoginInput) {
  return axios.post(`${api}/login`, userData);
}

export function restLogout() {
  return axios.delete(`${api}/logout`, {});
}
