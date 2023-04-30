import axios from 'axios';

export const getUsers = async loadTweets => {
  try {
    const response = await axios.get(
      `https://644d457157f12a1d3ddbd32a.mockapi.io/api/users?limit=${loadTweets}&page=1`
    );

    return response.data;
  } catch (error) {
    console.log(error.message);
    return [];
  }
};
