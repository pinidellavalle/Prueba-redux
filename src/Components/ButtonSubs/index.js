import React from 'react'
import { connect } from 'react-redux'
import { subsCounter } from '../../store'

class ButtonSubs extends React.Component {

    handleClick() {
        const { dispatch } = this.props;
        dispatch(subsCounter());
    }

    render() {
        return (
            <button onClick={() => this.handleClick()}> Restar 1 </button>
        )
    }
}

function mapStateToProps() {
    return {}
}

export default connect(mapStateToProps)(ButtonSubs)