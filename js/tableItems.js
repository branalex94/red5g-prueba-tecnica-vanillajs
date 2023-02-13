export const tableBodyTemplate = (item) => `<tr>
<td>
  <input 
    type="checkbox" 
    class="table-item__checkbox"
  />
</td>
<td>${item.id}</td>
<td>${item.placa}</td>
<td>${item.marca}</td>
<td>${item.modelo}</td>
<td>${item.kilometraje}</td>
<td>${item.transmision}</td>
<td>${item.tipo}</td>
<td>$${item.precio}</td>
<td class="table-item__buttons-container">
  <button class="table-item__new-button">
    NUEVO
    <i class="fa-regular fa-eye"></i>
  </button>
  <button class="table-item__actions-button">
    <span>Acciones</span>
    <i class="fa-solid fa-caret-down table-item__action-arrow"></i>
    
  </button>
  <div class="table-item__actions-options">
    <button>Editar</button>
    <button>Almacenar</button>
  </div>
</td>
</tr>`
