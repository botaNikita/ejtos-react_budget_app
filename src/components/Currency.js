import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    const setNewCurrency = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    };
    return (
        <select className="form-select-lg" id="currencySelect" value={currency} onChange={setNewCurrency}>
            <option value="$" name="marketing">$ Dollar</option>
            <option value="£" name="sales">£ Pound</option>
            <option value="€" name="finance">€ Euro</option>
            <option value="₹" name="hr">₹ Ruppee</option>
        </select>
    );
};
export default Currency;