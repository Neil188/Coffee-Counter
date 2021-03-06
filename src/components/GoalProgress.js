import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SaveIcon from 'react-icons/lib/fa/floppy-o';

const calcGoalProgress = (total=0, goal=0) =>
    goal<=0 ? 100 : Math.floor((total / goal) * 100);

export default class GoalProgress extends Component {

    state = {
        goal: 0,
        progress: 0,
    }

    componentDidMount = () => {
        this.setState({
            goal: this.props.goal,
            progress: calcGoalProgress(this.props.current,this.props.goal),
        })
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.current !== this.props.current) {
            this.setState({
                progress: calcGoalProgress(nextProps.current, this.props.goal) || 0,
            })
        }
    }

    shouldComponentUpdate = (nextProps, nextState) =>
        !(JSON.stringify(nextState) === JSON.stringify(this.state))
        || !(JSON.stringify(nextProps) === JSON.stringify(this.props))

    newGoal= () => {
        let goal = parseInt(this.numberInput.value,10);
        goal = Number.isNaN(goal) ? 0 : goal;
        this.setState({
            goal,
            progress: calcGoalProgress(this.props.current, goal),
        });
    }

    saveGoal = () =>
        this.props.save(this.state.goal)

    render() {

        const { goal, progress } = this.state;
        const { current, goal: savedGoal, save } = this.props;

        return (
            <div className="goal-progress">
                <progress value={current} max={goal}/>
                {progress}%
                <input type="number"
                    ref={(inp => {this.numberInput = inp})}
                    defaultValue={savedGoal}
                    onChange={this.newGoal}/>
                {(save) &&
                    <button disabled={goal === savedGoal}
                        onClick={this.saveGoal}>
                        <SaveIcon />
                    </button>
                }
            </div>
        )
    }

}

GoalProgress.defaultProps = {
    goal: 100,
    current: 0,
}

GoalProgress.propTypes = {
    current: PropTypes.number,
    goal: PropTypes.number,
    save: PropTypes.func.isRequired,
}
