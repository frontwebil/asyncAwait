const select = document.getElementById('select');
const button = document.getElementById('button');
let api = `https://jsonplaceholder.typicode.com/posts`;

select.addEventListener('change',function(){
  api = `https://jsonplaceholder.typicode.com/${this.value}`
  console.log(api)
})

async function showInfo(){
  try{
    const response = await fetch(api);
    if(response.ok){
      const data = await response.json();
      console.log(data)
    }else {
      console.log("Error HTTP: " + response.status)
    }
  }
  catch(error){
    console.log('Ошибка при виконанні запроса: ' + error.message)
  }

}


button.addEventListener('click' , ()=>{
  showInfo()
})
