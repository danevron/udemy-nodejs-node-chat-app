const expect = require('expect');

const {Users} = require('./users');


describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: "1",
      name: "dani",
      room: "A"
    }, {
      id: "2",
      name: "miri",
      room: "A"
    }, {
      id: "3",
      name: "yosi",
      room: "B"
    }];
  });

  describe('#getUserList', () => {
    it('returns the user names for a given room', () => {
      expect(users.getUserList('A')).toEqual(['dani', 'miri']);
    });
  });

  describe('#getUser', () => {
    it('gets a user', () => {
      expect(users.getUser('1')).toEqual({id: '1', name: 'dani', room: 'A'});
    });

    it('returns null if no user found', () => {
      expect(users.getUser('not found')).toBe(undefined);
    })
  });

  describe('#addUser', () => {
    it('adds a user', () => {
      let user = {id: '4', name: 'something', room: 'C'};

      expect(users.addUser(user.id, user.name, user.room)).toEqual(user);
      expect(users.users.length).toBe(4);
    });
  });

  describe('#removeUser', () => {
    it('removes a user', () => {
      users.removeUser('1');
      expect(users.users).toNotInclude({id: '1', name: 'dani', room: 'A'});
    })
  });
})
