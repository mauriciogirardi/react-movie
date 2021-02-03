import React from 'react';

import {
  TrendingPersons,
  TrendingPersonsCard,
  TrendingPersonsContent,
} from './styles';

interface PersonProps {
  id: number;
  name: string;
  popularity: number;
  profileImg: string;
  known: string;
}

interface TradingPersonProps {
  data: PersonProps[];
  title?: string;
  trending?: boolean;
}

const TradingPerson: React.FC<TradingPersonProps> = ({
  data,
  title,
  trending,
}) => {
  return (
    <TrendingPersons>
      <h1>{title}</h1>
      <TrendingPersonsCard>
        {data.slice(0, 4).map(person => (
          <TrendingPersonsContent key={person.id}>
            <img src={person.profileImg} alt={person.name} />
            <h2>{person.name}</h2>
            {trending && <span>{`Trending for ${person.known}`}</span>}
          </TrendingPersonsContent>
        ))}
      </TrendingPersonsCard>
    </TrendingPersons>
  );
};

export default TradingPerson;
