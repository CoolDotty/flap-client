import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PartDescriptor from '../components/PartDescriptor';
import { decrementPart, incrementPart, createPart } from '../actions/parts';
import { partsSelector } from '../selectors/local';

import './Home.sass';

const Home = () => {
  const [selectedPart, setSelectedPart] = useState<string>(null);
  const [newPartName, setNewPartName] = useState<string>("");
  const parts = useSelector(partsSelector);
  const dispatch = useDispatch();

  const isValidPartName = (name: string) => name.length > 0

  return (
    <div>
      <h1>Parts Counter</h1>
      <hr />
      <ul className="partsList">
        {parts.map(part => (
          <li 
            key={part.id} 
            className={selectedPart === part.id ? 'selected' : null}
            onClick={() => setSelectedPart(part.id)}
          >
            {part.name} {part.amount}
            <button
              onClick={e => {
                dispatch(incrementPart(part.id));
              }}
            >
              +
            </button>
            <button
              onClick={e => {
                dispatch(decrementPart(part.id));
              }}
            >
              -
            </button>
          </li>
        ))}
      </ul>
      <input 
        placeholder="Custom Part"
        value={newPartName}
        onChange={e => setNewPartName(e.target.value)}
      />
      <button
        disabled={!isValidPartName(newPartName)}
        onClick={e => {
          dispatch(createPart(newPartName));
          setNewPartName("")
        }}
      >
        Add
      </button>
      <hr />
      <h2>Part Info</h2>
      {selectedPart &&
        (() => {
          const part = parts.find(x => x.id === selectedPart);
          return <PartDescriptor key={selectedPart} name={part.name} amount={part.amount} />;
        })()}
    </div>
  );
};

export default Home;
