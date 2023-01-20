import { state } from "./index.js";
import { sortByString, sortByNum } from "./sorting.js";
import { updateState, loadItems } from "./main.js";
import { modal } from "./loadingModal.js";
import { updateArr } from "./main.js";

// Function to load initial items on context menu click
function handleClickItemsLoad() {
  // Append modal to DOM
  $(".app-wrapper").append(modal);
  updateArr(state.offset, state.amountPerPage);
  $(".table__body").empty();
  // Set timeout function to simulate server request
  setTimeout(function () {
    $(".modal").remove();
    loadItems(state.data);
  }, 3000);
}

function handleShowOptions(e) {
  e.stopPropagation();
  $(this).siblings(".table-item__actions-options")[0].classList.toggle("active-option");
}

function handleFooterShowOptions(e) {
  e.stopPropagation();
  $(this).siblings(".footer__actions-options")[0].classList.toggle("active");
}

// Function to change HTML select element results amount and update on current page change
function handleResultsChange() {
  updateState("amountPerPage", (state.amountPerPage = Number(this.value)));
  if (state.data.length) {
    updateArr(state.offset, state.amountPerPage);
    loadItems(state.data);
  }
}

// Function to filter table by header
function handleTableHeadingSortClick() {
  // Normalize header text without accents and split string by spaces so we can retrieve the first word only
  const text = String($(this).text().trim().toLowerCase()).normalize('NFD').replace(/[\u0300-\u036f]/g, '').split(" ")[0];
  let newData;
  // Raw implementation to detect numeric fields
  if (/id|precio|kilometraje/g.test(text)) {
    newData = sortByNum(state.data, state.orientation, text);
  } else {
    newData = sortByString(state.data, state.orientation, text);
  }
  updateState("data", (state.data = newData));
  updateState("orientation", (state.orientation = state.orientation === "ASC" ? "DESC" : "ASC"));
  loadItems(state.data);
}

// Filter bar Right arrow functionality
function handleRightArrowClick() {
  if (state.currentPage === state.totalPages) return;

  if (state.data.length) {
    updateState("offset", (state.offset += state.amountPerPage));
    updateState("currentPage", (state.currentPage++));
    updateArr(state.offset, state.amountPerPage);
    loadItems(state.data);
  }
}

// Filter bar left arrow functionality
function handleLeftArrowClick() {
  if (state.currentPage === 1) return;

  if (state.data.length) {
    updateState("offset", (state.offset -= state.amountPerPage));
    updateState("currentPage", (state.currentPage--));
    updateArr(state.offset, state.amountPerPage);
    loadItems(state.data);
  }
}

// Search bar filter function
function handleSearchInput() {
  const input = $(this).val().toLowerCase();
  let newData = [];
  if (!input) {
    loadItems(state.data);
    return;
  };
  newData = state.data.filter(item => item.marca.toLowerCase().includes(input));
  updateState("filteredData", (state.filteredData = newData));
  loadItems(state.filteredData);
}

export function events() {
  // Attach all necessary events in one main function
  $(".table__body").on("click", ".table-item__actions-button", handleShowOptions);
  $(".footer").on("click", ".footer__actions-button", handleFooterShowOptions);
  $(".footer").on("click", ".load-action", handleClickItemsLoad);
  $(".table__header").on("click", "th", handleTableHeadingSortClick);
  $("#results").on("change", handleResultsChange);
  $(".right-arrow").on("click", handleRightArrowClick);
  $(".left-arrow").on("click", handleLeftArrowClick);
  $(".footer__search-input").on("input", handleSearchInput);
}