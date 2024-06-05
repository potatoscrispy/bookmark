var siteName = document.getElementById("site-name");
var siteURL = document.getElementById("site-url");
var viewBlock = document.getElementById("view");
var alertName = document.getElementById("alert-name");
var alertURL = document.getElementById("alert-url");
var bookmarkes = [];

function addBookmark() {
  // if (siteName.value == null || siteName.value == "" || siteURL.value == null || siteURL.value == "") {
  //   alert("Please Fill In All Required Fields");
  // } else {
  //   bookmarkes.push({ name: siteName.value, url: siteURL.value });
  // }
  if (validData()) {
    bookmarkes.push({ name: siteName.value, url: siteURL.value });
    clearForm();
    viewAll();
  }
}

function clearForm() {
  siteName.value = null;
  siteURL.value = null;
}

function viewAll() {
  var res = ``;
  if (bookmarkes.length != 0) {
    for (var i = 0; i < bookmarkes.length; i++) {
      i % 2 == 0 ? (res += `<tr class="table-color4">`) : (res += `<tr class="table-color5">`);
      res += `
      <th scope="row">${bookmarkes[i].name}</th>
        <td>${bookmarkes[i].url}</td>
        <td><a class="btn btn-warning btn-warning-color" onclick="visitWebsite(${i})"><span>View</span> <i class="fa fa-eye"></i></a></td>
        <td><a class="btn btn-danger btn-warning-color" onclick="deleteBookmark(${i})"><span>Delete</span> <i class="fa fa-trash"></i></a></td>
      </tr>
      `;
    }
  }
  viewBlock.innerHTML = res;
}

function deleteBookmark(index) {
  bookmarkes.splice(index, 1);
  viewAll();
}

function visitWebsite(index) {
  var website = "https://" + bookmarkes[index].url;
  location.href = website;
}

function validData() {
  var name = siteName.value.toString().trim();
  var url = siteURL.value.trim();
  if (name.length >= 3 && url != "") {
    return true;
  } else if (name.length < 3 && url != "") {
    alertName.classList.remove("d-none");
    siteName.value = null;
  } else if (name.length >= 3 && url == "") {
    alertURL.classList.remove("d-none");
    siteURL.value = null;
  } else {
    alertName.classList.remove("d-none");
    alertURL.classList.remove("d-none");
  }
}

function clearAlert() {
  alertName.classList.add("d-none");
  alertURL.classList.add("d-none");
}
