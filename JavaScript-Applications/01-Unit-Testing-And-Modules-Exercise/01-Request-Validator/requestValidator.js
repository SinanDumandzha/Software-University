function validateRequest(request) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const uriRegex = /^[A-Za-z0-9.*]+$/gi;
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const messageRegex = /^[^<>\&'"]*$/gi;

    if (!request.hasOwnProperty('method') || !validMethods.includes(request.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!request.hasOwnProperty('uri') || (!request.uri.match(uriRegex))) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!request.hasOwnProperty('version') || (!validVersions.includes(request.version))) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (!request.hasOwnProperty('message') || (!request.message.match(messageRegex) && request.message !== '')) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return request;
}