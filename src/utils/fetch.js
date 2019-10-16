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
    dispatch(error(false));
    const res = await fetch(url, {
      method: type,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: !!body ? JSON.stringify({ ...body }) : null
    });
    dispatch(load(false));
    let data = await res.json();
    console.log("FETCH", res);
    console.log("STATUS", data)
    if (res.status >=400) {
      console.log("STATUS", res)
      // dispatch(error(true, data.status || res.statusText, res.status || data.error));
      dispatch(error(true, res.statusText !== "" && typeof res.statusText !== "undefined" ? res.statusText : data.status, 
      res.statusText !== "" && typeof res.statusText !== "undefined" ? res.statusText : data.status));
    }
    else if (
      (res.status === 200)
    ) {
      // console.log("success", data.value)
      dispatch(success(data.value));
    } else {
      dispatch(error(true, data.error, res.status));
    }
    console.log("success", data.value)
    console.log("FETCH", res);
    return { value: data.value, status: res.status };
  } catch (e) {
    console.log("erROR: ",  e.msg);
    console.log("erROR: ", typeof e.msg);
    dispatch(error(true, e));
    dispatch(load(false));
    return { error: e};
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
