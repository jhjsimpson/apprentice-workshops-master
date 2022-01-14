let albumCollection = [];
let currentRowID = 0;

function addAlbum() {
  const row = document.createElement("tr");
  const artist = document.createElement("td");
  const album = document.createElement("td");
  const year = document.createElement("td");
  const editBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  editBtn.appendChild(document.createTextNode("Save"));
  deleteBtn.appendChild(document.createTextNode("Delete"));

  const artistObject = document.getElementById("addArtist").value;
  const albumObject = document.getElementById("addAlbum").value;
  const yearObject = document.getElementById("addYear").value;

  let rowID = generaterowID();

  let albumInfo = {
    id: rowID,
    artistName: artistObject,
    albumName: albumObject,
    albumYear: yearObject,
  };

  artist.innerHTML = albumInfo.artistName;
  album.innerHTML = albumInfo.albumName;
  year.innerHTML = albumInfo.albumYear;

  row.appendChild(artist);
  row.appendChild(album);
  row.appendChild(year);
  row.appendChild(editBtn);
  row.appendChild(deleteBtn);

  row.setAttribute("id", rowID);
  editBtn.setAttribute("id", rowID);
  deleteBtn.setAttribute("id", rowID);

  editBtn.setAttribute("onclick", "editAlbum(this.id)");
  deleteBtn.setAttribute("onclick", "deleteAlbum(this.id)");

  let albumTable = document.getElementById("table-albums");
  albumTable.appendChild(row);

  addToAlbums(albumInfo);
}

function deleteAlbum(rowID) {
  let item = albumCollection.find((x) => x.id == rowID);
  let index = albumCollection.indexOf(item);

  document.getElementById("table-albums").deleteRow(index + 1);

  albumCollection.splice(index, 1);
}

function editAlbum(rowID) {
  let item = albumCollection.find((x) => x.id == rowID);
  let index = albumCollection.indexOf(item);

  item.artistName = document.getElementById("addArtist").value;
  item.albumName = document.getElementById("addAlbum").value;
  item.albumYear = document.getElementById("addYear").value;

  albumCollection[index] = item;

  const rowCount = document.getElementById("table-albums").rows.length;
  for (i = rowCount; i > 1; i--) {
    document.getElementById("table-albums").deleteRow(1);
  }

  albumCollection.forEach((object) => {
    const row = document.createElement("tr");
    const artist = document.createElement("td");
    const album = document.createElement("td");
    const year = document.createElement("td");
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    editBtn.appendChild(document.createTextNode("Save"));
    deleteBtn.appendChild(document.createTextNode("Delete"));

    let rowID = generaterowID();

    object.id = rowID;
    artist.innerHTML = object.artistName;
    album.innerHTML = object.albumName;
    year.innerHTML = object.albumYear;

    row.appendChild(artist);
    row.appendChild(album);
    row.appendChild(year);
    row.appendChild(editBtn);
    row.appendChild(deleteBtn);

    row.setAttribute("id", rowID);
    editBtn.setAttribute("id", rowID);
    deleteBtn.setAttribute("id", rowID);

    editBtn.setAttribute("onclick", "editAlbum(this.id)");
    deleteBtn.setAttribute("onclick", "deleteAlbum(this.id)");

    let albumTable = document.getElementById("table-albums");
    albumTable.appendChild(row);
  });
}

function addToAlbums(albumInfo) {
  albumCollection.push(albumInfo);
}

function generaterowID() {
  currentRowID++;
  return currentRowID;
}

function refreshAndUpdateTable(data) {
  let table = document.getElementById("table-albums");
  let tableElements = table.length;
  for (i = tableElements; i > 1; i--) {
    table.deleteRow(1);
  }

  // Horrible repetitive code

  data.forEach((object) => {});

  // add data to rows and
}

// functions that can switch between the stubs and server
// uses functions in code to refresh the array and page (CRUD)
//

window.onload = function () {
  if (config.isStubbed == false) {
    albumCollection = [];
    stubbedData.item1.forEach((element) => {
      albumCollection.push(element);
    });
    console.log(albumCollection);
  }

  if (config.isStubbed == true) {
    getMusicians_server();
  }
};
