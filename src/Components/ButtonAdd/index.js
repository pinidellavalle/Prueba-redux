import React from 'react'
import { connect } from 'react-redux'
import { addCounter } from '../../store'

class ButtonAdd extends React.Component {

    handleClick() {
        const { dispatch } = this.props;
        dispatch(addCounter());
    }

    render() {
        return (
            <button onClick={() => this.handleClick()}> Sumar 1 </button>
        )
    }
}

function mapStateToProps() {
    return {}
}

export default connect(mapStateToProps)(ButtonAdd)