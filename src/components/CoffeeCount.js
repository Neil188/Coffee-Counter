import React from 'react';
import PropTypes from 'prop-types';
import FaCoffee from 'react-icons/lib/fa/coffee';
import MdCake from 'react-icons/lib/md/cake';
import MdDirectionsRun from 'react-icons/lib/md/directions-run';

import '../stylesheets/ui.scss';

const percentToDecimal = (decimal) => Math.floor(decimal * 100);

const calcGoalProgress = (total, goal) => percentToDecimal(total/goal);

const CoffeeCount = ({total, takeaway, cake, goal}) => (
    <div className="coffee-count">
        <div className="total-coffees">
            <span>{total}</span>
            <FaCoffee />
            <span>days</span>
        </div>
        <div className="takeaway-cups">
            <span>{takeaway}</span>
            <MdDirectionsRun />
            <span>days</span>
        </div>
        <div className="cake">
            <span>{cake}</span>
            <MdCake />
            <span>days</span>
        </div>
        <div>
            <span>
                {calcGoalProgress(
                    total,
                    goal
                )}
            </span>
            <span>%</span>
        </div>
    </div>
)

CoffeeCount.defaultProps = {
    total: 0,
    takeaway: 0,
    cake: 0,
    goal: 100,
}

CoffeeCount.propTypes = {
    total: PropTypes.number,
    takeaway: PropTypes.number,
    cake: PropTypes.number,
    goal: PropTypes.number,
}

export default CoffeeCount;