import React from 'react';
import './index.css';

export interface Demo2Props {
  name: string;
  age: number;
}

export const Demo2: React.FC<Demo2Props> = ({ name, age }) => {
  return (
    <>
      <div>demo2 component</div>
      <div className='name'>name: {name}</div>
      <div className='age'>age: {age}</div>
    </>
  );
};
