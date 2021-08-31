export const SET_AGE = "SET_AGE";
export const INCRUST_AGE = "INCRUST_AGE";
export const GET_CITIES = "GET_CITIES";

const API_URL = "https://mocki.io/v1/5ba15c9c-1e09-43ff-a40a-259cb2179fab";

export const getCities = () => {
  try {
    return async (dispatch) => {
      const result = await fetch(API_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await result.json()
      if(json){
        dispatch({
            type: GET_CITIES,
            payload: json,
          });
      }else {
          console.log("Fetching data error");
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const setAge = (age) => (dispatch) => {
  dispatch({
    type: SET_AGE,
    payload: age,
  });
};

export const incrustAge = (age) => (dispatch) => {
  dispatch({
    type: INCRUST_AGE,
    payload: age,
  });
};
