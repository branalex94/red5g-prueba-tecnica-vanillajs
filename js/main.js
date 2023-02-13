import { data } from '../assets/data.js'
import { tableBodyTemplate } from './tableItems.js'
import { footerContextMenu } from './filterBar.js'
import { state } from './index.js'

function loadItems (arr) {
  $('.footer__actions-options').remove()
  $('.table__body').empty()

  if (!arr.length) {
    const emptyTableBodyContent = "<tr class='table-wrapper table-wrapper--empty'><td colspan='100'>No existen datos para mostrar</td></tr>"
    $('.table__body').append(emptyTableBodyContent)
  } else {
    const tableBodyContent = arr.map(tableBodyTemplate).join('')
    $('.table__body').append(tableBodyContent)
    // Logic to figure out total pages
    const pages = Math.ceil(data.length / state.amountPerPage)
    updateState('totalPages', (state.totalPages = pages))
    $('.footer-pages').text(state.totalPages)
  }
  $('.footer__results-page').attr({
    placeholder: state.currentPage
  })
  const footerContent = footerContextMenu(arr)
  $('.footer__filter-controller').append(footerContent)
}

function updateState (key, value) {
  $(state).trigger('state.change', [key, value])
}

function updateArr (offset, amountPerPage) {
  const newData = data.slice(offset, offset + amountPerPage)
  updateState('data', (state.data = newData))
}

export {
  loadItems,
  updateState,
  updateArr
}
