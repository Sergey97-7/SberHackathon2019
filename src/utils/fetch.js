export const fetchData = async url => await (await fetch(url)).json();
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
    dispatch(error(false, "", null));
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
    if (res.status >= 400) {
      let errorMsg = "Unknown error";
      let errorStatus = "";
      if (typeof data.error !== "undefined" && data.error !== "") {
        errorMsg = data.error;
      } else if (
        typeof res.statusText !== "undefined" &&
        res.statusText !== ""
      ) {
        errorMsg = res.statusText;
      }
      if (typeof data.status !== "undefined" && data.status !== "") {
        errorStatus = data.status;
      } else if (typeof res.status !== "undefined" && res.status !== "") {
        errorStatus = res.status;
      }
      dispatch(error(true, errorMsg, errorStatus));
    } else if (res.status === 200) {
      dispatch(success(data.value));
    } else {
      dispatch(error(true, data.error, res.status));
    }
    return { value: data.value, status: res.status };
  } catch (e) {
    dispatch(error(true, e));
    dispatch(load(false));
    return { error: e };
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
