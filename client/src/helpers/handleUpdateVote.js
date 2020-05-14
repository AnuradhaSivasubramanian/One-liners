import Axios from "axios";

/**
 * @method handleUpdateOneliner posts the votes into the database
 *
 * @returns {String} - a response message if the post was successful or not
 */

const handleUpdateOneliner = async (oneliner) => {
  try {
    const response = await Axios.put("/oneliner", oneliner);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

export default handleUpdateOneliner;
