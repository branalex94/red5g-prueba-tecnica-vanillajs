import { loadItems } from './main.js'
import { events } from './eventFunctions.js'

const state = {
  data: [],
  totalPages: 0,
  offset: 0,
  amountPerPage: 10,
  orientation: 'ASC',
  currentPage: 1,
  filteredData: []
}
const results = [
  10, 20, 30, 40
]

function fillFooterOptions () {
  const options = results.map(result => `<option value="${result}">${result}</option>`).join('')
  $('.footer__results-amount').empty().append(options)
}

function init () {
  loadItems(state.data)
  events()
  fillFooterOptions()
}

$(init)

export {
  state
}
