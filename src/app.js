const API_URL = 'https://randomapi.com/api/8csrgnjw?key=LEIX-GF3O-AG7I-6J84'

const dataEntry = document.querySelector('data-entry');
const tableRow = document.getElementById('table-row');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

async function showData(url, table) {

  const tableHead = table.querySelector('thead');
  const tableBody = table.querySelector('tbody');

  const res = await fetch(url)
  const {results, page } = await res.json()
  console.log(results);
  // startApp(results);

  // clear the table
  tableHead.innerHTML = '<tr></tr>';
  tableBody.innerHTML = '';

  // populate table header
  for (const resultText of results) {
    const resultElement = document.createElement('th');

    resultElement.textContent = resultText;
    tableBody.querySelector('tr').appendChild(resultElement);
  }

  // populate the rows
  for (const eachElement of page ) {
    const pageElement = document.createElement('tr');

    for (const pageText of eachElement) {
      const cellElement = document.createElement('td');

      cellElement.textContent = pageText;
      pageElement.appendChild(cellElement);
    }
    
    tableBody.appendChild(pageElement);
  }
}

showData(API_URL, document.querySelector('tbody'));

// function startApp(entries) {
//   tableRow.innerHTML = ''

//   entries.map((entry) => {
//     const { id, row, age, gender } = entry

//     const entryElement = document.createElement('tr');
//     entryElement.innerHTML = `
//       <td key=${id}>${row}</td>
//       <td>${gender}</td>
//       <td>${age}</td>
//     `
//     tableRow.appendChild(entryElement);
//   })
// };

// document.addEventListener('DOMContentLoaded', startApp);


// const startApp = async () => {
//   const res = await fetch('')
//   const data = await res.json();
  // showData(data.results);
//   console.table(data.results);
// };

// document.addEventListener('DOMContentLoaded', startApp);

// function showData(entries) {
  // let output = []

//   entries.map((entry) => {
//     const { id, row, age, gender } = entry;

//     const entryElement = tableData

//     entryElement.innerHTML = `
//       <tr key=${id}>
//         <td>${row}</td>
//         <td>${gender}</td>
//         <td>${age}</td>
//       </tr>
//     ` 
//   })
// }

// function showPrevious() {

// }
// prevButton.addEventListener('click', showPrevious)


// function showNext() {

// }

// nextButton.addEventListener('click', showNext)






// const startApp = async () => {
    
// };

// document.addEventListener('DOMContentLoaded', startApp);