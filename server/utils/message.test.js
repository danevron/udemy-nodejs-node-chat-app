const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('generates the correct message format', () => {
    const messageParams = {from: 'test', text: 'Hi'};
    const message = generateMessage(messageParams.from, messageParams.text);

    expect(message.from).toBe(messageParams.from);
    expect(message.text).toBe(messageParams.text);
    expect(message.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('generates the correct message format', () => {
    const messageParams = {latitude: 1, longitude: 2};
    const message = generateLocationMessage('Me', messageParams.latitude, messageParams.longitude);

    expect(message.from).toBe('Me');
    expect(message.url).toBe(`https://google.com/maps?q=${messageParams.latitude},${messageParams.longitude}`);
    expect(message.createdAt).toBeA('number');
  })
})
