import handleFetchOneliner from "../helpers/handleFetchOneliner";
export const fetchOneliner = () => {
  return async function (dispatch, getState) {
    try {
      const results = await handleFetchOneliner();

      dispatch({
        type: "FETCH_ONELINER",
        guest: results,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
