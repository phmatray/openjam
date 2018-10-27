import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import styled from 'styled-components';
import LikeButton from './LikeButton';
import ShareButton from './ShareButton';
import PlayButton from './PlayButton';
import Intro from './Intro';
import { Content, PostAudioSegmentGroup } from './styles';
import graph from './graph.jpg';
import { SegmentPostAudio } from '../SegmentPost';
import Flex from '../Flex';
import Div from '../Div';
import Span from '../Span';

const Cover = styled.img`
  margin-right: 1em;
  border-radius: 6px;
  width: 150px;
  height: 150px;
  min-width: 150px;
  transition: all 0.3s ease;
  transition-property: width, height, min-width;
  box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15);

  @media only screen and (max-width: 767px) {
    width: 80px;
    height: 80px;
    min-width: 80px;
  }
`;

const PostAudio = ({ post }) => {
  const { coverurl, title, artists } = post.track;
  const artistName = artists[0].name;

  return (
    <SegmentPostAudio>
      <Intro post={post} />

      <Content>
        {/* <Flex ></Flex> */}
        <Flex>
          <Cover src={coverurl.w200} alt={title} />
          <PostAudioSegmentGroup>
            <Segment style={{ height: '50%' }}>
              <div>
                <Span color="#666">{artistName}</Span>
              </div>
              <div>
                <strong>{title}</strong>
              </div>
            </Segment>
            <Segment style={{ height: '50%' }}>
              {/* TODO: replace this by an audio wave */}
              <img src={graph} alt="" style={{ width: '100%', height: '100%' }} />
            </Segment>
          </PostAudioSegmentGroup>
        </Flex>

        <Div mt="1em">
          <LikeButton />
          <ShareButton />
          <PlayButton />
        </Div>
      </Content>
    </SegmentPostAudio>
  );
};

PostAudio.propTypes = {
  post: PropTypes.shape({
    track: PropTypes.object.isRequired,
  }).isRequired,
};

export default PostAudio;
