# react-fetch-mock-provider

A "Reactified" wrapper around [`fetch-mock`](https://github.com/wheresrhys/fetch-mock), that provides a more React-friendly interface.

This component allows you to easily mock HTTP requests made with `fetch`.

## Installation

```
npm install -D @fiverr/react-fetch-mock-provider
```

## Usage

### Basic mocking

```js
import FetchMockProvider from '@fiverr/react-fetch-mock-provider';

<FetchMockProvider mocks={[{
    request: {
        url: /users/,
        method: 'GET'
    },
    response: {
        body: {
            users: {
                1: {id: 1, name: 'one'},
                2: {id: 2, name: 'two'},
                3: {id: 3, name: 'three'},
                4: {id: 4, name: 'four'},
                5: {id: 5, name: 'five'},
            }
        },
        status: 200
    }}]}>
    <Users/>
</FetchMockProvider>
```

### Using a Function for `response`

Same as in `fetch-mock`, the `response` prop can be a function.

See the full documentation [here](http://www.wheresrhys.co.uk/fetch-mock/#api-mockingmock_response).

```js
import FetchMockProvider from '@fiverr/react-fetch-mock-provider';

<FetchMockProvider mocks={[{
    request: {
        url: /users/,
        method: 'GET'
    },
    response: (request, payload) => {
        const status = payload.body.someRequiredParameter ? 200 : 500;

        return {
            body: {},
            status
        };
    }}]}>
    <Users/>
</FetchMockProvider>
```
