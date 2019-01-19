// @flow

import React from 'react';
import { Segment } from 'semantic-ui-react';

import Flex from '../Flex';
import Div from '../Div';
import Span from '../Span';
import { SegmentPostAudio } from '../SegmentPost';

import LikeButton from './LikeButton';
import ShareButton from './ShareButton';
import PlayButton from './PlayButton';
import Intro from './Intro';
import graph from './graph.jpg';
import Content from './styled/Content';
import PostAudioSegmentGroup from './styled/PostAudioSegmentGroup';
import Cover from './post-audio/Cover';

type Props = {
  post: {
    track: {
      title: string,
      coverurl: { w200: string },
      artists: { name: string }[],
    },
  },
};

const PostAudio = ({ post }: Props) => {
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

export default PostAudio;
