var toggleDocument = document.getElementById('toggle-skills');
var skillls = document.getElementById('skills');
toggleDocument.addEventListener('click', function () {
    if (skillls.style.display === 'none') {
        skillls.style.display = 'block';
    }
    else {
        skillls.style.display = 'none';
    }
});
