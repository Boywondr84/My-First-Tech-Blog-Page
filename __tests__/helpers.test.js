const {format_url} = require('../utils/helpers');

test('format_url() returns a simplified url string', () => {
    const url1 = format_url('https://www.google.com?q=hello');

    expect (url1).toBe('google.com');
});