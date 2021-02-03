import React from 'react';
import { FiX } from 'react-icons/fi';
import ReactPlayer from 'react-player/lazy';

import { Container } from './styles';

interface MoviePlayerModalProps {
  isOpen(): void;
  title?: string;
  video?: string;
}

const MoviePlayerModal: React.FC<MoviePlayerModalProps> = ({
  isOpen,
  title,
  video,
}) => {
  const youtuberUrl = 'https://www.youtube.com/watch?v=';

  return (
    <Container>
      <header>
        <h3>{title}</h3>
        <FiX type="button" onClick={isOpen} />
      </header>
      {video && <ReactPlayer url={youtuberUrl + video} playing width="100%" />}
    </Container>
  );
};

export default MoviePlayerModal;
