import React from 'react';
import v4 from 'uuid/v4';
import s from './CountryList.module.css'

const CountryList = ({ allCountries }) => (
    <div className={s.container}>
        { 
            (allCountries.allCountries).map(item => (
                <ul key={v4()} className={s.list}>
                    <li>{item.iso2}</li>
                    <li>{item.name}</li>
                    <li>{item.dialCode}</li>
                </ul> 
            ))
        }
    </div>
);

export default CountryList;