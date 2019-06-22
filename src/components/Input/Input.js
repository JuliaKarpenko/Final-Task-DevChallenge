import React, { Component } from 'react';
import s from './Input.module.css';
import v4 from 'uuid/v4';
import '../Flag/flags.png';
import PropTypes from 'prop-types';

export default class Input extends Component {
    // state = {
    //     phone: Number,
    // }

    hangleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
        console.log(this)
    }

    render() {

        const { allCountries, isOpen } = this.props;

        return (
            <div className="wrapper-form">
                <form className="form" onChange={this.hangleChange}>
                    <input
                        className={s.input}
                        type="text"
                        onChange={this.hangleChange}
                        placeholder="+380"
                        list="options"
                    />
                    {isOpen && 
                        <div className={s.container}>
                            <datalist id="options" onChange={this.hangleChange} className={s.list}>
                                {allCountries.allCountries.map(item => (
                                    <div key={v4()} className={s.itemList}>
                                        <svg className={`flag ${item.iso2}`} src='./flags.png'></svg>
                                        <option className={s.item} value={item.dialCode}> {item.name} +{item.dialCode}</option>
                                    </div>
                                ))}
                            </datalist>
                        </div>
                    }

                </form>
            </div>
        )
    }
}

Input.propTypes = {
    allCountries: PropTypes.object,
    isOpen: PropTypes.bool
};