import React from 'react';

import { Cast, CastCard, CastContent, FakeImage } from './styles';

interface CastProps {
  id: number;
  character: string;
  name: string;
  img: string;
}

interface TradingPersonProps {
  data: CastProps[];
  title?: string;
}

const Casts: React.FC<TradingPersonProps> = ({ data, title }) => {
  return (
    <Cast>
      <h1>{title}</h1>
      <CastCard>
        {data.slice(0, 4).map(person => (
          <CastContent key={person.id}>
            {person.img && <img src={person.img} alt={person.name} />}
            {!person.img && <FakeImage />}
            <h2>{person.name}</h2>
            <span>{person.character}</span>
          </CastContent>
        ))}
      </CastCard>
    </Cast>
  );
};

export default Casts;
