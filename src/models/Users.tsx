// models/User.js
const mockUsers = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' },
  ];
  
  export const findUser = (username: string, password: string) => {
    return mockUsers.find(
      (user) => user.username === username && user.password === password
    );
  };
  