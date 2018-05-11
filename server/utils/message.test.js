const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('generates the correct message format', () => {
    const messageParams = {from: 'test', text: 'Hi'};
    const message = generateMessage(messageParams.from, messageParams.text);

    expect(message.from).toBe(messageParams.from);
    expect(message.text).toBe(messageParams.text);
    expect(message.createdAt).toBeA('number');
  })
})
