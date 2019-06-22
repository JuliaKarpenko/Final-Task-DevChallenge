import React from 'react';
import v4 from 'uuid/v4';
import s from './CountryList.module.css';
import PropTypes from 'prop-types';

const CountryList = ({ allCountries, isOpen }) => (
    isOpen && 
        <div className={s.block}>
        <div className={s.container}>
            {allCountries.allCountries.map(item => (
                <div key={v4()} className={s.itemList}>
                    <svg className={`flag ${item.iso2}`} src='./flags.png'></svg>
                    <option className={s.item} value={item.dialCode}> {item.name} +{item.dialCode}</option>
                </div>
            ))}

        </div>
    </div>
);

CountryList.propTypes = {
    allCountries: PropTypes.object,
    isOpen: PropTypes.bool
};

export default CountryList;