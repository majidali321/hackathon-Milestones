const toggleDocument = document.getElementById('toggle-skills') as HTMLButtonElement
const skillls = document.getElementById('skills') as HTMLElement
toggleDocument.addEventListener('click', ()=>{
    if(skillls.style.display === 'none'){
        skillls.style.display = 'block'
    }else {
        skillls.style.display = 'none'
    }
});
