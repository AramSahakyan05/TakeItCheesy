import { RegisteredUsers } from "./models/RegisteredUsersModel.js";
import bcrypt from 'bcrypt';

export const addUser = async (username, hashedPwd) => {
    try {
      const newUser = new RegisteredUsers({ username: username, password: hashedPwd });
  
      const result = await newUser.save();
  
      console.log('User added:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  }

export const findUserByName = async (username, password, done) => {
    const users = await RegisteredUsers.find({ username: username });

    if (users.length === 0) {
        return done(null, false, { message: 'Incorrect username' });
    }

    const user = users[0];

    if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
    }

    return done(null, false, { message: 'Incorrect password' });
}