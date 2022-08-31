const {format_url} = require('../utils/helpers');
const {format_date} = require('../utils/helpers');
const {format_plural} = require('../utils/helpers');

test('format_url() returns a simplified url string', () => {
    const url1 = format_url('https://www.google.com?q=hello');

    expect (url1).toBe('google.com');
});

test('format_date() returns a date string', () => {
    const date = new Date('2022-08-30 15:42:00');

    expect(format_date(date)).toBe('8/30/2022');
});

test('format_plural() returns a pluralized word', () => {
    const plural = format_plural("moon", 2);

    expect(plural).toBe("moons");
})