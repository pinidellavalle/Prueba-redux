import React from 'react'
import { connect } from 'react-redux'
import { resetCounter } from '../../store'

class ButtonReset extends React.Component {

    handleClick() {
        const { dispatch } = this.props;
        dispatch(resetCounter());
    }

    render() {
        return (
            <button onClick={() => this.handleClick()}> Reset </button>
        )
    }
}

function mapStateToProps() {
    return {}
}

export default connect(mapStateToProps)(ButtonReset)