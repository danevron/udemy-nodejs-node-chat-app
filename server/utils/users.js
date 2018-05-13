class Users {
  constructor () {
    this.users = [];
  }

  addUser (id, name, room) {
    let user = {id, name, room};
    this.users.push(user);

    return user;
  }

  removeUser (id) {
    const user = this.getUser(id);

    if (user) {
      this.users = this.users.filter(user => user.id !== id);
    }

    return user;
  }

  getUser (id) {
    return this.users.filter(user => user.id === id)[0];
  }

  getUserList (room) {
    const roomUsers = this.users.filter(user => user.room === room);
    return roomUsers.map(user => user.name);
  }
}

module.exports = {Users};
