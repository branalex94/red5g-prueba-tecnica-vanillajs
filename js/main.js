import { data } from "../assets/data.js";
import { tableBodyTemplate } from "./tableItems.js";
import { footerContextMenu } from "./filterBar.js";
import { state } from "./index.js";

function loadItems(arr) {
  $(".footer__actions-options").remove();
  $(".table__body").empty();

  if (!arr.length) {
    $(".table__body").append(
      "<tr class='table-wrapper table-wrapper--empty'><td colspan='100'>No existen datos para mostrar</td></tr>"
    );
  } else {
    $(".table__body").append(arr.map(tableBodyTemplate).join(""));
    // Logic to figure out total pages
    const pages = Math.ceil(data.length / state.amountPerPage);
    updateState("totalPages", (state.totalPages = pages));
    $(".footer-pages").text(state.totalPages);
  }
  $(".footer__results-page").attr({
    placeholder: state.currentPage
  });
  $(".footer__filter-controller").append(footerContextMenu(arr));
}

function updateState(key, value) {
  $(state).trigger("state.change", [key, value]);
}

function updateArr(offset, amountPerPage) {
  let newData = data.slice(offset, offset + amountPerPage);
  updateState("data", (state.data = newData));
}

export {
  loadItems,
  updateState,
  updateArr
}