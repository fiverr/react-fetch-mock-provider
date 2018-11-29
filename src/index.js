import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetchMock from 'fetch-mock';

class FetchMockProvider extends Component {

    constructor(props) {
        super(props);

        this.mock();
    }

    componentWillUnmount() {
        fetchMock.restore();
    }

    mock() {
        fetchMock.restore();

        this.props.mocks.forEach(
            ({ request, response } = {}) =>
                fetchMock.mock(
                    request.url,
                    () => new Promise((resolve) =>
                        setTimeout(() => resolve({
                            body: response.body,
                            status: response.status
                        }), 1000)
                    ),
                    { method: request.method }
                )
        );
    }

    render() {
        return this.props.children;
    }
}

FetchMockProvider.propTypes = {
    mocks: PropTypes.arrayOf(
        PropTypes.shape({
            request: PropTypes.shape({
                url: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.instanceOf(RegExp)
                ]),
                method: PropTypes.string
            }),
            response: PropTypes.shape({
                status: PropTypes.number,
                body: PropTypes.object
            })
        }),
    ),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

FetchMockProvider.defaultProps = {
    mocks: []
};

export default FetchMockProvider;
