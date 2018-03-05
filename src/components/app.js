import React, { Component } from 'react';
import CoffeeList from './CoffeeList';
import CoffeeCount from './CoffeeCount';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allCoffeeDays: [
                {
                    shop: 'Greggs',
                    date: new Date('2/1/2018'),
                    takeaway: true,
                    cake: true,
                },
                {
                    shop: 'Costa',
                    date: new Date('2/2/2018'),
                    takeaway: false,
                    cake: false,
                },
                {
                    shop: 'Library',
                    date: new Date('2/5/2018'),
                    takeaway: false,
                    cake: true,
                },
            ],
        };
        this.countDays = this.countDays.bind(this);
    }

    countDays (filter) {
        const { allCoffeeDays } = this.state;
        return allCoffeeDays
            .filter( day => (filter) ? day[filter] : day)
            .length
    }

    render() {
        const { allCoffeeDays } = this.state;
        return (
            <div className="app">
                <CoffeeList days={allCoffeeDays}/>
                <CoffeeCount
                    total={this.countDays()}
                    takeaway={this.countDays('takeaway')}
                    cake={this.countDays('cake')}
                />
            </div>
        )
    }
}