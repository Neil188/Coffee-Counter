import React from 'react';
import PropTypes from 'prop-types';
import FaCoffee from 'react-icons/lib/fa/coffee';
import MdCake from 'react-icons/lib/md/cake';
import MdLocalDrink from 'react-icons/lib/md/local-drink';

const CoffeeRow = ({shop, date, takeaway, cake}) => (
    <tr>
        <td>
            {date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}
        </td>
        <td>
            {shop}
        </td>
        <td>
            {takeaway && <MdLocalDrink />}
        </td>
        <td>
            {cake && <MdCake />}
        </td>
    </tr>
);

CoffeeRow.defaultProps = {
    takeaway: false, 
    cake: false,
}

CoffeeRow.propTypes = {
    shop: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired, 
    takeaway: PropTypes.bool, 
    cake: PropTypes.bool,
}

export default CoffeeRow;