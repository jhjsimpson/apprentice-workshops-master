const albumCollection = [];

function addAlbum() {
  const row = document.createElement("tr");
  const artist = document.createElement("td");
  const album = document.createElement("td");
  const year = document.createElement("td");
  const editBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  editBtn.appendChild(document.createTextNode("Edit"));
  deleteBtn.appendChild(document.createTextNode("Delete"));

  const artistOb = document.getElementById("addArtist").value;
  const albumOb = document.getElementById("addAlbum").value;
  const yearOb = document.getElementById("addYear").value;

  let rowId = generateRowId();

  let albumInfo = {
    ID: rowId,
    artist: artistOb,
    album: albumOb,
    year: yearOb,
  };

  artist.innerHTML = albumInfo.artist;
  album.innerHTML = albumInfo.album;
  year.innerHTML = albumInfo.year;

  row.appendChild(artist);
  row.appendChild(album);
  row.appendChild(year);
  row.appendChild(editBtn);
  row.appendChild(deleteBtn);

  row.setAttribute("id", rowId);
  editBtn.setAttribute("id", rowId);
  deleteBtn.setAttribute("id", rowId);

  editBtn.setAttribute("onclick", "editAlbum(this.id)");
  deleteBtn.setAttribute("onclick", "deleteAlbum(this.id)");

  let albumTable = document.getElementById("table-albums");
  albumTable.appendChild(row);

  addToAlbums(albumInfo);
}

function deleteAlbum(rowId) {
  let item = albumCollection.find((x) => x.ID == rowId);
  let index = albumCollection.indexOf(item);
  document.getElementById("table-albums").deleteRow(index + 1);
  albumCollection.splice(index, 1);
}

function editAlbum() {
  // add code
}

function addToAlbums(albumInfo) {
  albumCollection.push(albumInfo);
}

let currentRowId = 0;
function generateRowId() {
  currentRowId++;
  return currentRowId;
}

function returnAlbumIndex() {}
