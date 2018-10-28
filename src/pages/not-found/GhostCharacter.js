import React from 'react';
import styled, { keyframes } from 'styled-components';

const scale = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const float = keyframes`
  50% { transform: translateY(15px); }
`;

const Container = styled.div`
  margin: 0 auto;
  position: relative;
  width: 250px;
  height: 250px;
  margin-top: -40px;
`;

const Ghost = styled.div`
  width: 50%;
  height: 53%;
  left: 25%;
  top: 10%;
  position: absolute;
  border-radius: 50% 50% 0 0;
  background: #ededed;
  border: 1px solid #bfc0c0;
  border-bottom: none;
  animation: ${float} 2s ease-out infinite;
`;

const GhostCopy = styled(Ghost)`
  z-index: 0;
`;

const Base = styled.div`
  position: absolute;
  background: #ededed;
  top: 85%;
  width: 26%;
  height: 23%;
  border: 1px solid #bfc0c0;
  z-index: 0;
`;

const One = styled(Base)`
  border-radius: 0 0 100% 30%;
  left: -1px;
`;

const Two = styled(Base)`
  left: 23%;
  border-radius: 0 0 50% 50%;
`;

const Three = styled(Base)`
  left: 50%;
  border-radius: 0 0 50% 50%;
`;

const Four = styled(Base)`
  left: 75.5%;
  border-radius: 0 0 30% 100%;
`;

const Face = styled.div`
  position: absolute;
  width: 100%;
  height: 60%;
  top: 20%;
`;

const Eye = styled.div`
  position: absolute;
  background: #54a8e6;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  top: 40%;
`;

const EyeLeft = styled(Eye)`
  left: 25%;
`;

const EyeRight = styled(Eye)`
  right: 25%;
`;

const Mouth = styled.div`
  position: absolute;
  top: 50%;
  left: 45%;
  width: 10px;
  height: 10px;
  border: 3px solid;
  border-radius: 50%;
  border-color: transparent #585959 #585959 transparent;
  transform: rotate(45deg);
`;

const Shadow = styled.div`
  position: absolute;
  width: 30%;
  height: 7%;
  background: #bfc0c0;
  left: 35%;
  top: 80%;
  border-radius: 50%;
  animation: ${scale} 2s infinite;
`;

const Hand = styled.div`
  position: absolute;
  background: rgba(212, 212, 213, 0.5);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  top: 70%;
  border: 1px solid grey;
`;

const HandLeft = styled(Hand)`
  left: 10%;
`;

const HandRight = styled(Hand)`
  right: 10%;
`;

const GhostCharacter = () => {
  return (
    <Container>
      <GhostCopy>
        <One />
        <Two />
        <Three />
        <Four />
      </GhostCopy>
      <Ghost>
        <Face>
          <EyeLeft />
          <EyeRight />
          <Mouth />
        </Face>
        <HandLeft />
        <HandRight />
      </Ghost>
      <Shadow />
    </Container>
  );
};

export default GhostCharacter;
