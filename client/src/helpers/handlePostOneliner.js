import Axios from "axios";

/**
 * @method handlePostOneliner posts the votes into the database
 * @param {Array<tech_id: Number, vote_type: String>} vote_list
 * @returns {String} - a response message if the post was successful or not
 */

const handlePostOneliner = async (oneliner) => {
  try {
    const response = await Axios.post("/oneliner", oneliner);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

export default handlePostOneliner;
