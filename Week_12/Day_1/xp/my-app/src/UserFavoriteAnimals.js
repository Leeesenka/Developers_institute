//ex 3 xp

import React from 'react';

const UserFavoriteAnimals = (props) => {
  return (
    <ul>
      {props.favAnimals.map((animal, index) => 
        <li key={index}>{animal}</li>
      )}
    </ul>
  );
}

export default UserFavoriteAnimals;

