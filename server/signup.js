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

export const checkLogin = async (name, passCode) => {
  const users = await RegisteredUsers.find({});
  if(users.length !== 0) {
    for (const { username, password } of users) {
      const checkPassword = await bcrypt.compare(passCode, password);
      if (username === name && checkPassword) {
        return true; 
      }
    }
  }
  return false; 
};

export const checkSignUp = async (req, res) => {
  const { username, password, confirmPassword } = req.body;
  const hashedPwd = await bcrypt.hash(password, 10);
  try {
    const existingUser = await RegisteredUsers.findOne({username: username});
    if (existingUser) {
      res.json({ error: 'User already exists' });
    } 
    if(password === confirmPassword) {
      await addUser(username, hashedPwd);
      res.json({ success: true });
    } else {
      res.json({error: "Incorrect password"})
    }
  } catch (error) {
      console.error('Error during signup:', error);
      return res.status(500).json({ error: 'Internal server error' });
  }
}