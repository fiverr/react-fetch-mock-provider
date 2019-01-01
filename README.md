# react-fetch-mock-provider

### Example

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

response props can also be a function that will receive the fetch request params and should return the same object shown above that includes body, status.

### Functinal Examples

```js
import FetchMockProvider from '@fiverr/react-fetch-mock-provider';

<FetchMockProvider mocks={[{
    request: {
        url: /users/,
        method: 'GET'
    },
    response: (request) => ({
        // Build server response based on the GET param in the url!
        body: getResponseByAttachmentsIDsParam(request.split('attachment_id=')[1]),
        status: 200
    })}]}>
    <Users/>
</FetchMockProvider>
```

```js
import FetchMockProvider from '@fiverr/react-fetch-mock-provider';

<FetchMockProvider mocks={[{
    request: {
        url: /users/,
        method: 'POST'
    },
    response: (request, payload) => {
        const {comments} = JSON.parse(payload.body);
        // Build server keys for comments based on the POST payload!
        const keysMapping = reduce(comments, (acc, comment) => {
            acc[comment.id] = uid();
            return acc;
        }, {});

        return {
            body: keysMapping,
            status: 200
        };
    }}]}>
    <Users/>
</FetchMockProvider>
```
