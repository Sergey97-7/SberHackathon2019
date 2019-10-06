export const fetchData = async url => await (await fetch(url)).json();
// export const fetchData = async url => {
//   const a = await fetch(url);
//   throw Error("error");
//   return a;
// };
// export const fetchData = async url => await throw new Error();
export const fetchDataRedux = async (
  url,
  dispatch,
  load,
  error,
  success,
  type = "GET",
  body
) => {
  try {
    dispatch(load(true));
    const res = await fetch(url, {
      method: type,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: !!body ? JSON.stringify({ body }) : null
    });
    dispatch(load(false));
    const data = await res.json();
    if (
      (res.status === 200 || res.status === 204) &&
      data.hasOwnProperty("value")
    ) {
      dispatch(success(data.value));
    } else {
      dispatch(error(true, data.error, res.status));
    }
    return { data, status: res.status };
  } catch (e) {
    console.log("erROR: ", e);
    dispatch(error(true, e));
    dispatch(load(false));
  }
};
//TODO FIX !
export const fetchDataPost = async () => {
  const rawResponse = await fetch("/rest/users/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ body: "" })
  });
  const res = await rawResponse.json();
  if (res.value.hasOwnProperty("id")) this.props.createCurrentUser(res.value);
  else {
    console.log("adminEditResponse: ", res);
  }
};
