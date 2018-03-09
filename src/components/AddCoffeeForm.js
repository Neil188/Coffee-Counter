import React, {Component} from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const regularShops = [
    'Costa',
    'Greggs',
    'Library',
    'Starbucks',
];

class AutoComplete extends Component {

    get value () {
        return this.inputShop.value;
    }

    set value (inputValue) {
        this.inputShop.value = inputValue;
    }

    inputShop

    render() {
        return(
            <div>
                <input ref={(inp => {this.inputShop = inp})}
                    type='text'
                    list='list-shops'
                />
                <datalist id='list-shops'>
                    {this.props.options.map(
                        (opt, i) => <option key={opt}>{opt}</option>
                    )}
                </datalist>
            </div>
        )
    }
}

AutoComplete.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
}

// export default class AddCoffeeForm extends Component {
const AddCoffeeForm = ({ shop, date, cake, takeaway, onNewCoffee }) => {

    const refs = { };

    const handleSubmit= (e) => {
        e.preventDefault();
        onNewCoffee({
            shop: refs.shop.value,
            date: refs.date.value,
            cake: refs.cake.checked,
            takeaway: refs.takeaway.checked,
            key: shortid.generate(),
        });
        refs.shop.value = '';
        refs.date.value = '';
        refs.cake.checked = false;
        refs.takeaway.checked = false;
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='add-coffee-form'>
                <label htmlFor='shop'>
                    Shop name
                </label>
                <AutoComplete options={regularShops}
                    ref={(inp => {refs.shop = inp})}
                />

                <label htmlFor='date'>
                Date
                </label>
                <input
                    id='date'
                    type='date'
                    required
                    defaultValue={date}
                    ref={(inp => {refs.date = inp})}
                />

                <div>
                    <input
                        id='takeaway'
                        type='checkbox'
                        defaultChecked={takeaway}
                        ref={(inp => {refs.takeaway = inp})}
                    />
                    <label htmlFor='takeaway'>Takeaway?</label>
                </div>
                <div>
                    <input
                        id='cake'
                        type='checkbox'
                        defaultChecked={cake}
                        ref={(inp => {refs.cake = inp})}
                    />
                    <label htmlFor='cake'>Cake?</label>
                </div>
                <button>Add Coffee</button>
            </form>
        </div>
    );
}

AddCoffeeForm.defaultProps= {
    shop: 'Greggs',
    date: '2018-01-01',
    cake: false,
    takeaway: false,
}

AddCoffeeForm.propTypes = {
    shop: PropTypes.string,
    date: PropTypes.string,
    takeaway: PropTypes.bool,
    cake: PropTypes.bool,
    onNewCoffee: PropTypes.func.isRequired,
}

export default AddCoffeeForm;