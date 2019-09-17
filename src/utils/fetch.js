export const fetchData = async url => await (await fetch(url)).json();
