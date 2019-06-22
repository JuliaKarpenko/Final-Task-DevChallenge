import React from 'react';
import './flag.css';
import s from './Flag.module.css';

const Flag = () => (
    <div className={s.container}>
        <svg className='flag ua' src='./flags.png'></svg>
    </div>
);

export default Flag;