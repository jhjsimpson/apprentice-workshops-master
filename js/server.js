var uri = "http://localhost:8080/albums";

function getMusicians_server() {
  fetch(uri, { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(
        `Retrieved ${data.length} musician(s) from database, refreshing and updating table`
      );

      // Insert function to trigger and process data here.
      refreshAndUpdateTable(data);
    })
    .catch((error) => console.error("Unable to get musicians", error));
}

function addMusician_server() {
  fetch(uri, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(parseFormContents()),
  })
    .then((response) => response.json())
    .then(() => {
      console.log("Created new musician");
      clearForm();
      hideForm();
      getMusicians();
    })
    .catch((error) => console.error("Unable to add musician", error));
}

function editMusician_server(id) {
  fetch(`${uri}/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(parseFormContents()),
  })
    .then(() => {
      console.log(`Updated musician with id ${id}`);
      clearForm();
      hideForm();
      getMusicians();
    })
    .catch((error) =>
      console.error(`Unable to edit musician with id ${id}`, error)
    );
}

function deleteMusician_server(id) {
  fetch(`${uri}/${musicianId}`, { method: "DELETE" })
    .then(() => {
      console.log(`Deleted musician with id ${id}`);
      hideForm();
      getMusicians();
    })
    .catch((error) => console.error("Unable to delete musician", error));
}
