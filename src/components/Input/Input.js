import React from 'react';
import s from './Input.module.css'

// const INITIAL_STATE = {
//     phone: '',

// };

const Input = () => (
    <form >
        <input
            className={s.input}
            type="phone"
            name="phone"
            // value={phone}
            // onChange={this.hangleChange}
            placeholder="+1"
        />
    </form>
);

export default Input;