const selectFilterOptions = document.getElementById("filter_options");
const iframePage = document.getElementById("page");
const BASE_URL = "https://arcane-mesa-16302.herokuapp.com/bar-chart";

selectFilterOptions.addEventListener("change", function () {
  let filterRegion = selectFilterOptions.value;

  iframePage.src = filterRegion !== "ALL" ? BASE_URL + "?region=" + filterRegion : iframePage.src = BASE_URL;
});