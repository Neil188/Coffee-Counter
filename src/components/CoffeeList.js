import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FaCoffee from 'react-icons/lib/fa/coffee';
import MdCake from 'react-icons/lib/md/cake';
import MdLocalDrink from 'react-icons/lib/md/local-drink';
import CoffeeRow from './CoffeeRow';

const CoffeeList = ({days}) => (
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Shop</th>
                <th>Takeaway</th>
                <th>Cake</th>
            </tr>
        </thead>
        <tbody>
            {days.map( (day,i) => 
                <CoffeeRow
                    key={i}
                    {...day}
                />
            )}
        </tbody>
    </table>
)

CoffeeList.defaultProps = {
    days: [],
}

CoffeeList.propTypes = {
    days: props => {
        if (!Array.isArray(props.days)) {
            return new Error('CoffeeList should be an array')
        }
        if(!props.days.length) {
            return new Error('CoffeeList must have at least one record')
        }
        return null;
    },
}

export default CoffeeList;