import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames'; // Не забудь цей імпорт
import { Person } from '../types/Person';

type Props = {
  name: string;
  people: Person[];
};

export const PersonLink: React.FC<Props> = ({ name, people }) => {
  const person = people.find(p => p.name === name);

  if (!person) {
    return <span>{name}</span>;
  }

  return (
    <Link
      to={`/people/${person.slug}`}
      className={classNames({
        'has-text-danger': person.sex === 'f',
      })}
    >
      {name}
    </Link>
  );
};
