import { loadItems } from "./main.js";
import { events } from "./eventFunctions.js";

const state = {
  data: [],
  totalPages: 0,
  offset: 0,
  amountPerPage: 10,
  orientation: "ASC",
  currentPage: 1,
  filteredData: []
}
let results = [
  10, 20, 30, 40
];

$(document).ready(function () {
  loadItems(state.data);
  events();
  $(".footer__results-amount").empty().append(results.map(result => `<option value="${result}">${result}</option>`).join(""));
});

export {
  loadItems,
  state
}