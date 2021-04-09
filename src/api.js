/* eslint-disable no-undef */
import { ip, port } from './parameters';

const login = async (name, lastName, email, age) => {
  try {
    await fetch(`http://${ip}:${port}/sign_in`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        name, lastName, email, age,
      }),
    });

    return true;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default login;
