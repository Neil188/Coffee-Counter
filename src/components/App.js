import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CoffeeList from './CoffeeList';
import CoffeeCount from './CoffeeCount';
import AddCoffeeForm from './AddCoffeeForm';
import Menu from './Menu';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allCoffeeDays: [
                {
                    key: 1,
                    shop: 'Greggs',
                    date: '2018-01-01',
                    takeaway: true,
                    cake: true,
                },
                // {
                //     key: 2,
                //     shop: 'Costa',
                //     date: new Date('2/2/2018'),
                //     takeaway: false,
                //     cake: false,
                // },
                // {
                //     key: 3,
                //     shop: 'Library',
                //     date: new Date('2/5/2018'),
                //     takeaway: false,
                //     cake: true,
                // },
            ],
        };
        this.countDays = this.countDays.bind(this);
        this.addCoffee = this.addCoffee.bind(this);
    }

    addCoffee(newCoffee) {
        this.setState({
            allCoffeeDays: [
                ...this.state.allCoffeeDays,
                newCoffee,
            ],
        });
    }

    countDays (filter) {
        const { allCoffeeDays } = this.state;
        return allCoffeeDays
            .filter( day => (filter) ? day[filter] : day)
            .length
    }

    render() {
        // get allCoffeeDays from state
        const { allCoffeeDays } = this.state;
        // get pathname and filter from props
        const { location: {pathname}, match: {params: {filter}} } = this.props;

        return (
            <div className="app">
                { /* display menu */ }
                <Menu />
                { /* on root display CoffeeCount */ }
                {(pathname === '/') ?
                    <CoffeeCount
                        total={this.countDays()}
                        takeaway={this.countDays('takeaway')}
                        cake={this.countDays('cake')}
                    />
                    :
                    /* addDay route */
                    (pathname === '/add-coffee') ?
                        <AddCoffeeForm
                            onNewCoffee={this.addCoffee}
                        />
                        :
                        /* else display addDay, passing in filter */
                        <CoffeeList
                            days={allCoffeeDays}
                            filter={filter}
                        />
                }

            </div>
        )
    }
}

App.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            filter: PropTypes.string,
        }),
    }).isRequired,
}