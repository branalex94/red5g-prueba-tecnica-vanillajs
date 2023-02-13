export const footerContextMenu = (array) =>
  !array.length
    ? (`
    <div
      class="footer__actions-options"
    >
      <button
        class="footer__actions-options__button load-action">
        Cargue Masivo
      </button>
      <button
        class="footer__actions-options__button">
        Nuevo Registro
      </button>
    </div>`
      )
    : (
    `<div
    class="footer__actions-options footer__actions-filled-table"
  >
    <button
      class="footer__actions-options__button ">
      Almacenar
    </button>
    <button
      class="footer__actions-options__button ">
      Cargue Masivo
    </button>
    <button
      class="footer__actions-options__button ">
      Descargar excel
    </button>
    <button
      class="footer__actions-options__button ">
      Nuevo registro
    </button>
    <button
      class="footer__actions-options__button warning">
      Eliminar
    </button>
  </div>`
      )
