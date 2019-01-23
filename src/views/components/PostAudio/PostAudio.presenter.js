// @flow

import React from 'react';
import { Segment } from 'semantic-ui-react';

import { Flex, Div, Span } from 'views/elements';
import Intro from 'views/components/PostText/children/Intro';
import LikeButton from 'views/components/PostText/children/LikeButton';
import Content from 'views/components/PostText/styled/Content';
import type { PostAudio } from 'lib/types';

import graph from './graph.jpg';
import ShareButton from './children/ShareButton';
import PlayButton from './children/PlayButton';
import Cover from './styled/Cover';
import PostAudioSegmentGroup from './styled/PostAudioSegmentGroup';
import SegmentPostAudio from './styled/SegmentPostAudio';

type Props = {
  post: PostAudio,
};

const PostAudioComponent = ({ post }: Props) => {
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

export default PostAudioComponent;
