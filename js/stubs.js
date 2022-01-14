var stubbedData = {
  item1: [
    {
      id: "1",
      artistName: "Nas",
      albumName: "Illmatic",
      albumYear: "1994",
    },
    {
      id: "2",
      artistName: "The Notorious B.I.G",
      albumName: "Ready to Die",
      albumYear: "1994",
    },
    {
      id: "3",
      artistName: "Lootpack",
      albumName: "Soundpieces: Da Antidote",
      albumYear: "1998",
    },
  ],
  item2: "1994",
};

function getMusicians_stub() {
  recalculateFavouriteYear();
  return stubbedData;
}

function addMusician_stub(formContentsJson) {
  stubbedData.item1.push(formContentsJson);
}

function editMusician_stub(id, formContentsJson) {
  var musician = stubbedData.item1.find((x) => x.id == id);
  musician.artistName = formContentsJson.artistName;
  musician.albumName = formContentsJson.albumName;
  musician.albumYear = formContentsJson.albumYear;
  var index = stubbedData.item1.indexOf(musician);
  stubbedData.item1[index] = musician;
}

function deleteMusician_stub(id) {
  var musician = stubbedData.item1.find((x) => x.id == id);
  var index = stubbedData.item1.indexOf(musician);
  stubbedData.item1.splice(index, 1);
}

function recalculateFavouriteYear() {
  // recalculate on the frontend? might be overkill
}
