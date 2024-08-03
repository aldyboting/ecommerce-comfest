const { registerUser, loginUser, resetUsers } = require('../../js/authService');

describe('User Authentication Service', () => {
  beforeEach(() => {
    resetUsers();
  });

  it('should register a new user', () => {
    const message = registerUser('testuser', 'password123');
    expect(message).toEqual('User registered');
  });

  it('should not register a user with an existing username', () => {
    registerUser('testuser', 'password123');
    expect(() => registerUser('testuser', 'password123')).toThrow('User already exists');
  });

  it('should login an existing user', () => {
    registerUser('testuser', 'password123');
    const message = loginUser('testuser', 'password123');
    expect(message).toEqual('Login successful');
  });

  it('should not login with invalid credentials', () => {
    registerUser('testuser', 'password123');
    expect(() => loginUser('invaliduser', 'wrongpassword')).toThrow('Invalid credentials');
  });
});
