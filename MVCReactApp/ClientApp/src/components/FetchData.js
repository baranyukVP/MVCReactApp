import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store/MasterList';

class FetchData extends Component {
    componentDidMount() {
        // This method is called when the component is first added to the document
        this.ensureDataFetched();
    }

    componentDidUpdate() {
        // This method is called when the route parameters change
        this.ensureDataFetched();
    }

    ensureDataFetched() {
        const masterId = parseInt(this.props.match.params.masterId, 10) || 0;
        this.props.getMastersRequest(masterId);
    }

    render() {
        const { master } = this.props;
        console.log(this.props);
        console.log(master)
        return (
            <div>
                <h1>Masters</h1>
                {master && (
                            <div>
                                <h3>
                                    {master.name}
                                </h3>
                                <p>
                                    {master.description}
                                </p>
                            </div>
                        )
                 }
            </div>
        );
    }
}

function renderPagination(props) {
    const prevStartDateIndex = (props.masterId || 0) - 5;
    const nextStartDateIndex = (props.masterId || 0) + 5;

    return <p className='clearfix text-center'>
        <Link className='btn btn-default pull-left' to={`/fetch-data/${prevStartDateIndex}`}>Previous</Link>
        <Link className='btn btn-default pull-right' to={`/fetch-data/${nextStartDateIndex}`}>Next</Link>
        {props.isLoading ? <span>Loading...</span> : []}
    </p>;
}

export default connect(
    state => state.masters,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(FetchData);
