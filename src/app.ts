// https://randomapi.com/api/8csrgnjw?key=LEIX-GF3O-AG7I-6J84

const API_URL = 'https://randomapi.com/api/8csrgnjw?_limit=5_key=LEIX-GF3O-AG7I-6J84';

const dataEntry = document.getElementById('data-entry');

const startApp = async (url) => {
  const res = await fetch(url);
  console.log(res);
    
};

document.addEventListener('DOMContentLoaded', startApp);

startApp();





// const startApp = async () => {
    
// };

// document.addEventListener('DOMContentLoaded', startApp);