import React from 'react';

export interface Demo2Props {
  name: string;
  age: number;
}

export const Demo2: React.FC<Demo2Props> = ({ name, age }) => {
  return (
    <>
      <div>demo2 component</div>
      <div>name: {name}</div>
      <div>age: {age}</div>
    </>
  );
};
