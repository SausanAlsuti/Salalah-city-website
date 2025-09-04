// Init AOS
AOS.init({duration:1000, once:true});

// Smooth scroll for hero button
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
// Lightbox (images & videos)
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

// Reset content each time
function openLightbox(content, type="img") {
  lightbox.innerHTML = `
    <span id="lightboxClose">&times;</span>
    ${type === "img" 
      ? `<img src="${content}" alt="">`
      : `<video src="${content}" controls autoplay></video>`}
  `;
  lightbox.classList.add('open');
  document.getElementById('lightboxClose').addEventListener('click', ()=> lightbox.classList.remove('open'));
}

document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', ()=> openLightbox(img.src, "img"));
});

document.querySelectorAll('.gallery video').forEach(video => {
  video.addEventListener('click', ()=> openLightbox(video.src, "video"));
});

// Close on ESC
document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') lightbox.classList.remove('open'); });

// Lightbox
// const lightbox = document.getElementById('lightbox');
// const lightboxImg = document.getElementById('lightboxImg');
// const lightboxClose = document.getElementById('lightboxClose');

document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', ()=>{
    lightboxImg.src = img.src;
    lightbox.classList.add('open');
  });
});

const closeLb = ()=> lightbox.classList.remove('open');
lightboxClose.addEventListener('click', closeLb);
lightbox.addEventListener('click', (e)=>{ if(e.target===lightbox) closeLb(); });
document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeLb(); });