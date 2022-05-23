const Controller = {
  search: (ev) => {
    ev.preventDefault();
    const form = document.querySelector('.search .search__form');
    const data = Object.fromEntries(new FormData(form));
    const response = fetch(`/search?q=${data.query}`).then((response) => {
      response.json().then((results) => {
        Controller.updateTable(results);
      });
    });
  },

  updateTable: (results) => {
    const table = document.querySelector('.table .table__body');
    const rows = [];
    for (let result of results) {
      rows.push(`<tr class="table__body--row"><td><p>${result}</p></td><tr/>`);
    }
    table.innerHTML = rows;
  },
};

const form = document.querySelector('.search .search__form');
form.addEventListener("submit", Controller.search);
