import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CoffeeRow from './CoffeeRow';

const CoffeeList = ({days, filter}) => {
    const filteredDays =
            (!filter || !filter.match(/cake|takeaway/)) ?
                days :
                days.filter( day => day[filter])
        ;

    return (
        <div className='coffee-list'>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Shop</th>
                        <th>Takeaway</th>
                        <th>Cake</th>
                    </tr>
                    <tr>
                        <td colSpan={4}>
                            <Link to='/list-days' replace>
                        All Days
                            </Link>
                            <Link to='/list-days/takeaway' replace>
                        Takeaway Days
                            </Link>
                            <Link to='/list-days/cake' replace>
                        Cake Days
                            </Link>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {filteredDays.map( (day,i) =>
                        <CoffeeRow
                            key={day.key}
                            {...day}
                        />
                    )}
                </tbody>
            </table>
        </div>
    )
}

CoffeeList.defaultProps = {
    days: [],
    filter: null,
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
    filter: PropTypes.string,
}

export default CoffeeList;