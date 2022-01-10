function addAlbum() {
  var newRow = document.createElement("tr");
  var artistName = document.createElement("td");
  var albumName = document.createElement("td");
  var albumYear = document.createElement("td");

  artistName.innerHTML = "New Artist";
  albumName.innerHTML = "New Album";
  albumYear.innerHTML = "New Year";

  newRow.appendChild(artistName);
  newRow.appendChild(albumName);
  newRow.appendChild(albumYear);

  var artistList = document.getElementById("album-list");
  artistList.appendChild(newRow);
}
