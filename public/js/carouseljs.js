 (function () {
    const carousel = document.querySelector(".Template-CarouselHero");
    if (!carousel) return;

    const track = carousel.querySelector(".carousel-track");
    const slides = Array.from(track.querySelectorAll("img"));
    const dots = Array.from(carousel.querySelectorAll(".carousel-dots .dot"));
    const prev = carousel.querySelector(".carousel-btn.prev");
    const next = carousel.querySelector(".carousel-btn.next");

    let index = 0;
    let timer = null;
    const AUTOPLAY_MS = 5000;

    function render() {
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle("is-active", i === index));
    }

    function go(i) {
      index = (i + slides.length) % slides.length;
      render();
    }

    function start() {
      stop();
      timer = setInterval(() => go(index + 1), AUTOPLAY_MS);
    }

    function stop() {
      if (timer) clearInterval(timer);
      timer = null;
    }

    prev.addEventListener("click", () => { go(index - 1); start(); });
    next.addEventListener("click", () => { go(index + 1); start(); });

    dots.forEach((d) => {
      d.addEventListener("click", () => { go(Number(d.dataset.go)); start(); });
    });

    carousel.addEventListener("mouseenter", stop);
    carousel.addEventListener("mouseleave", start);

    render();
    start();
  })();