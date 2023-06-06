
//toggle experiences read more
const plusButtons = document.querySelectorAll('.plus');

plusButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.card');
    const text = card.querySelector('.read-more');
    text.classList.toggle('read-more--open');
  });
});

//link to projects
function gotolink(link) {
    console.log(link.value);
    location.href = link.value;
};