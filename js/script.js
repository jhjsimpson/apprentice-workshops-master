let albumCollection = [];
let currentRowId = 0;

function generateRowId() {
  currentRowId++;
  return currentRowId;
}

function addAlbum() {
  let rowId = generateRowId();
  const artistName = document.getElementById("addArtist").value;
  const albumName = document.getElementById("addAlbum").value;
  const albumYear = document.getElementById("addYear").value;
  const row = createRowForAlbumTable(rowId, artistName, albumName, albumYear);
  let albumTable = document.getElementById("table-albums");
  albumTable.appendChild(row);
  addAlbum_Server(rowId, artistName, albumName, albumYear);
}

function deleteAlbum(rowId) {
  let item = albumCollection.find((x) => x.id == rowId);
  let index = albumCollection.indexOf(item);
  document.getElementById("table-albums").deleteRow(index + 1);
  albumCollection.splice(index, 1);
}

function editAlbum(rowId) {
  let item = albumCollection.find((x) => x.id == rowId);
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
    let rowId = generateRowId();
    object.id = rowId;
    const row = createRowForAlbumTable(
      rowId,
      object.artistName,
      object.albumName,
      object.albumYear
    );

    let albumTable = document.getElementById("table-albums");
    albumTable.appendChild(row);
  });
  editMusician_server(rowId);
}

function refreshAndUpdateTable(data) {
  albumCollection = [];
  data.forEach((object) => albumCollection.push(object));
  let table = document.getElementById("table-albums");
  let tableElements = table.length;
  for (i = tableElements; i > 1; i--) {
    table.deleteRow(1);
  }
  data.forEach((object) => {
    let rowId = generateRowId();
    const row = createRowForAlbumTable(
      rowId,
      object.artistName,
      object.albumName,
      object.albumYear
    );
    let albumTable = document.getElementById("table-albums");
    albumTable.appendChild(row);
  });
}

function createRowForAlbumTable(rowId, artistName, albumName, albumYear) {
  const row = document.createElement("tr");
  const artist = document.createElement("td");
  const album = document.createElement("td");
  const year = document.createElement("td");
  const editBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  editBtn.appendChild(document.createTextNode("Save"));
  deleteBtn.appendChild(document.createTextNode("Delete"));

  editBtn.setAttribute("id", rowId);
  editBtn.setAttribute("onclick", "editAlbum(this.id)");
  deleteBtn.setAttribute("id", rowId);
  deleteBtn.setAttribute("onclick", "deleteAlbum(this.id)");
  row.setAttribute("id", rowId);

  artist.innerHTML = artistName;
  album.innerHTML = albumName;
  year.innerHTML = albumYear;

  row.appendChild(artist);
  row.appendChild(album);
  row.appendChild(year);
  row.appendChild(editBtn);
  row.appendChild(deleteBtn);

  return row;
}

function refreshPage() {
  location.reload;
}

// Stub functions

window.onload = function () {
  if (config.isStubbed == false) {
    albumCollection = [];
    stubbedData.item1.forEach((element) => {
      albumCollection.push(element);
    });
    refreshAndUpdateTable(albumCollection);
  }
  if (config.isStubbed == true) {
    getMusicians_server();
  }
};

function parseFormContents() {
  const rowId = generateRowId();
  artistName = document.getElementById("addArtist").value;
  albumName = document.getElementById("addAlbum").value;
  albumYear = document.getElementById("addYear").value;
  return {
    id: rowId,
    artistName: artistName,
    albumName: albumName,
    albumYear: albumYear,
  };
}

function parseFormContents_Edit() {
  artistName = document.getElementById("addArtist").value;
  albumName = document.getElementById("addAlbum").value;
  albumYear = document.getElementById("addYear").value;
  return {
    artistName: artistName,
    albumName: albumName,
    albumYear: albumYear,
  };
}

function addAlbum_Server(rowId, artistName, albumName, albumYear) {
  let albumInfo = {
    id: rowId,
    artistName: artistName,
    albumName: albumName,
    albumYear: albumYear,
  };
  albumCollection.push(albumInfo);
  if (config.isStubbed == false) {
    stubbedData.item1.push(albumInfo);
    console.log(stubbedData.item1);
  }
  if (config.isStubbed == true) {
    addMusician_server();
  }
}

function editAlbum_Server(rowId) {}
