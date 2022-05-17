let selectedRow = null;

function onFormSubmit(e) {
  event.preventDefault();
  let formData = readFormData();
  if (selectedRow == null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
}

//Retrieve the data
function readFormData() {
  const formData = {};
  formData["productCode"] = document.getElementById("productCode").value;
  formData["product"] = document.getElementById("product").value;
  formData["qty"] = document.getElementById("qty").value;
  formData["perPrice"] = document.getElementById("perPrice").value;
  return formData;
}

//Insert the data
function insertNewRecord(data) {
  const table = document
    .getElementById("storeList")
    .getElementsByTagName("tbody")[0];
  const newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.productCode;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.product;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.qty;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.perPrice;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}
