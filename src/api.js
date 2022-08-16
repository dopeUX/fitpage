import axios from "axios";

const callData = async () => {
  try {
    const result = await axios.get(
      "https://mobile-app-challenge.herokuapp.com/data"
    );
    return result.data;
  } catch (err) {
    return err;
  }
};

export default callData;
