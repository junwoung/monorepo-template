import React from 'react';
import './index.css';
export declare enum Gender {
    male = 0,
    female = 1
}
export interface DemoProps {
    name: string;
    age: number;
    gender: Gender;
}
export declare const Demo: React.FC<DemoProps>;
