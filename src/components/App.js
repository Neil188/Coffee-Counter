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
            allCoffeeDays: [],
            goal: 10,
        };
        this.countDays = this.countDays.bind(this);
        this.addCoffee = this.addCoffee.bind(this);
    }

    componentDidMount() {
        try {
            const { allCoffeeDays, goal } =
                JSON.parse(localStorage.getItem('coffeeCounter'));

            if (allCoffeeDays) {
                this.setState( () => ({
                    allCoffeeDays, goal,
                }) );
            }
        } catch (e) {
            // do nothing
        }
    }

    componentDidUpdate(prevProps, { allCoffeeDays: prevDays, goal: prevGoal }) {
        const { allCoffeeDays, goal  } = this.state;

        if (prevDays.length !== allCoffeeDays.length
            || prevGoal !== goal)
        {
            const json = JSON.stringify({allCoffeeDays, goal});
            localStorage.setItem('coffeeCounter', json);
        }
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
        const { allCoffeeDays, goal } = this.state;
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
                        goal={goal}
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