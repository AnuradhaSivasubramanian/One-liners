import Axios from "axios";

/**
 * @method handleFetchOneliner - fetches technology list from the database
 * @param {}
 * @returns {Array<{id: Number, name: String}>} - returns the array of technologies
 */

const handleFetchOneliner = async () => {
  const response = await Axios.get("oneliner");
  const data = await response.data;
  return data;
};

export default handleFetchOneliner;
