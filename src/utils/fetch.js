export const fetchData = async url => await (await fetch(url)).json();
// export const fetchData = async url => {
//   const a = await fetch(url);
  //   throw Error("error");
  //   return a;
// };
// export const fetchData = async url => await throw new Error();
export const fetchDataRedux = async (url, dispatch, load, error, success) => {
  try {
    dispatch(load(true));
    const res = await fetch(url);
     dispatch(load(false))
    const data = await res.json();
      dispatch(success(data.value));
  } catch (e) {
     dispatch(error(true, e))
     dispatch(load(false))
  }
};
