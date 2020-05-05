import handleFetchOneliner from "../helpers/handleFetchOneliner";
export const fetchOneliner = () => {
  return async function (dispatch, getState) {
    try {
      const results = await handleFetchOneliner();
      console.log(results);
      dispatch({
        type: "FETCH_ONELINER",
        guest: results,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
