const selectFilterOptions = document.getElementById("filter_options");
const iframePage = document.getElementById("page");
const BASE_URL = "http://ec2-3-17-71-241.us-east-2.compute.amazonaws.com:8000/bar-chart";

selectFilterOptions.addEventListener("change", function () {
  let filterRegion = selectFilterOptions.value;

  iframePage.src = filterRegion !== "ALL" ? BASE_URL + "?region=" + filterRegion : iframePage.src = BASE_URL;
});