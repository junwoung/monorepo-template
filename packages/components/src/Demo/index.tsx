import React from 'react';
import './index.css';

export enum Gender {
  male,
  female,
}

export interface DemoProps {
  name: string;
  age: number;
  gender: Gender;
}

export const Demo: React.FC<DemoProps> = ({ name, age, gender }) => {
  return (
    <>
      <div>demo component</div>
      <div className="name">name: {name}</div>
      <div>age: {age}</div>
      <div>gender: {gender === Gender.male ? '男' : '女'}</div>
    </>
  );
};
