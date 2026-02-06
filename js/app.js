// Date and time

function updateDateTime() {
  const el = document.getElementById("date-time");
  const now = new Date();

  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  el.innerHTML = `${day}/${month}/${year} | ${hours}:${minutes}:${seconds}`;
}

updateDateTime();
setInterval(updateDateTime, 1000);




//sidebar

const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");

// open sidebar
openBtn.onclick = () => {
  sidebar.classList.add("active");
};

// close sidebar
closeBtn.onclick = () => {
  sidebar.classList.remove("active");
};

// close when clicking outside
document.onclick = (e) => {
  if (!sidebar.contains(e.target) && e.target !== openBtn) {
    sidebar.classList.remove("active");
  }
};



//image slider
 (function () {
  const slides = document.getElementById('slides');
  const slideCount = slides.children.length;
  let index = 0;
  let autoplay = true;
  let timer = null;

  const dotsWrap = document.getElementById('dots');
  for (let i = 0; i < slideCount; i++) {
    const d = document.createElement('div'); d.className = 'dot'; d.dataset.i = i; dotsWrap.appendChild(d);
  }
  const dots = Array.from(dotsWrap.children);
  function go(i) {
    index = (i + slideCount) % slideCount;
    slides.style.transform = `translateX(${-index * 100}%)`;
    dots.forEach((dot, ii) => dot.classList.toggle('active', ii === index));
  }
  go(0);

  document.getElementById('prev').addEventListener
    ('click', () => { go(index - 1); resetTimer(); });
  document.getElementById('next').addEventListener
    ('click', () => { go(index + 1); resetTimer(); });
  dots.forEach(d => d.addEventListener('click', e => { go(Number(e.currentTarget.dataset.i)); resetTimer(); }));

  function startTimer() {
    timer = setInterval(() => go(index + 1), 3300);
  }
  function resetTimer() {
    if (timer) clearInterval(timer); if (autoplay) startTimer();
  }
  startTimer();

  // pause on hover
  const slider = document.getElementById('slider');
  slider.addEventListener('mouseenter', () => { if (timer) clearInterval(timer); });
  slider.addEventListener('mouseleave', () => { if (autoplay) startTimer(); });
})();

// accordion 

const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const item = header.parentElement;

    document.querySelectorAll(".accordion-item").forEach(i => {
      if (i !== item) i.classList.remove("active");
    });

    item.classList.toggle("active");
  });
});


  // faq
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });



// from

document.getElementById('contact')
  .addEventListener(
    'submit',
    function (e) {
      e.preventDefault();
      const status = document.getElementById('status');
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      if (!name || !email) {
        status.textContent = 'Please fill required fields.';
        return;
      }
      status.textContent = 'Sending...';

      setTimeout(() => {
        status.textContent = 'Message sent — thanks!';
        this.reset();
      }, 900);
    });