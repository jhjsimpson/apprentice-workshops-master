const albumCollection = [];
let currentrowID = 0;

function addAlbum() {
  const row = document.createElement("tr");
  const artist = document.createElement("td");
  const album = document.createElement("td");
  const year = document.createElement("td");
  const editBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  editBtn.appendChild(document.createTextNode("Save"));
  deleteBtn.appendChild(document.createTextNode("Delete"));

  const artistOb = document.getElementById("addArtist").value;
  const albumOb = document.getElementById("addAlbum").value;
  const yearOb = document.getElementById("addYear").value;

  let rowID = generaterowID();

  let albumInfo = {
    ID: rowID,
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
  let item = albumCollection.find((x) => x.ID == rowID);
  let index = albumCollection.indexOf(item);

  document.getElementById("table-albums").deleteRow(index + 1);

  albumCollection.splice(index, 1);
}

function editAlbum(rowID) {
  let item = albumCollection.find((x) => x.ID == rowID);
  let index = albumCollection.indexOf(item);
  item.artist = document.getElementById("addArtist").value;
  item.album = document.getElementById("addAlbum").value;
  item.year = document.getElementById("addYear").value;

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

    object.ID = rowID;
    artist.innerHTML = object.artist;
    album.innerHTML = object.album;
    year.innerHTML = object.year;

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
  currentrowID++;
  return currentrowID;
}
