let currentNumber = 0;

function addAlbum() {
  if (openForm() == true) {
    let albumID = generateElementID();
    console.log(currentNumber);

    const row = document.createElement("tr");
    const artist = document.createElement("td");
    const album = document.createElement("td");
    const year = document.createElement("td");

    row.id = albumID;
    artist.innerHTML = document.getElementById("addArtist").value;
    album.innerHTML = document.getElementById("addAlbum").value;
    year.innerHTML = document.getElementById("addYear").value;

    row.appendChild(artist);
    row.appendChild(album);
    row.appendChild(year);

    document.querySelector(".table").appendChild(row);
  }
}

function openForm() {
  if (document.getElementById("addForm").style.visibility == "visible") {
    return true;
  } else {
    document.getElementById("addForm").style.visibility = "visible";
    return false;
  }
}

function generateElementID() {
  return currentNumber++;
}

function deleteAlbum() {
  // add code
}

function editAlbum() {
  // add code
}
