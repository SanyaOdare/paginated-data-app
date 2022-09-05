const dataEntry = document.getElementById('data-entry');

const startApp = async () => {
  const res = await fetch('https://randomapi.com/api/8csrgnjw?key=LEIX-GF3O-AG7I-6J84')
  const data = await res.json()
  console.log(data.results);
  // showData(data.results);
};

document.addEventListener('DOMContentLoaded', startApp);

function showData(entries) {
  // let output = []

  entries.map((entry) => {
    const { id, row, age, gender } = entry;

    const entryElement = document.createElement('tbody')

    entryElement.innerHTML = `
      <tr key=${id}>
        <td>${row}</td>
        <td>${gender}</td>
        <td>${age}</td>
      </tr>
    ` 
  })
}







// const startApp = async () => {
    
// };

// document.addEventListener('DOMContentLoaded', startApp);