const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');
//toggle <nav>
toggle.addEventListener('click', () => {
  document.body.classList.toggle('show-nav');
});
//show modalo
open.addEventListener('click', () => {
  modal.classList.add('show-modal');
});
//隐藏modal
close.addEventListener('click', () => {
  modal.classList.remove('show-modal');
});
//点击其他地方隐藏modal
window.addEventListener('click', e => {
  e.target == modal ? modal.classList.remove('show-modal') : false;
});
