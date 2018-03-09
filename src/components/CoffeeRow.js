import React from 'react';
import PropTypes from 'prop-types';
import MdCake from 'react-icons/lib/md/cake';
import MdLocalDrink from 'react-icons/lib/md/local-drink';

const CoffeeRow = ({shop, date, takeaway, cake}) => (
    <tr>
        <td>
            {date}
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
    date: PropTypes.string.isRequired,
    takeaway: PropTypes.bool,
    cake: PropTypes.bool,
}

export default CoffeeRow;