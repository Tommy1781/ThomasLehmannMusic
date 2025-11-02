
// Language toggle (DE/EN)
const langButtons = document.querySelectorAll('[data-lang-btn]');
const blocks = document.querySelectorAll('[data-lang]');
langButtons.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const target = btn.getAttribute('data-lang-btn');
    langButtons.forEach(b=>b.classList.toggle('active', b===btn));
    blocks.forEach(el=>{
      const lang = el.getAttribute('data-lang');
      el.classList.toggle('hide', lang !== target);
    });
  });
});
