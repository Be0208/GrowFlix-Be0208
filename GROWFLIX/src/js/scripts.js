function reloadPage() {
    requestAnimationFrame(scrollToTop);
}

function scrollToTop() {
    const currentPosition = window.scrollY;
    if (currentPosition > 0) {
        window.scrollTo(0, currentPosition - Math.min(50, currentPosition));
        requestAnimationFrame(scrollToTop);
    }
}

// ---

const growcastItemsRow = document.getElementById("growcast-items");
const webinarItemsRow = document.getElementById("webinar-items");
const uxUiItemsRow = document.getElementById("ux-ui-items");
const geralItemsRow = document.getElementById("geral-items");
const iframeMovie = document.getElementById("iframe-movie");
const movieModal = new bootstrap.Modal("#movie-modal", {
  keyboard: false,
});

const growcastItems = movies.filter((item) => item.category === "growcast");
const webinarItems = movies.filter((item) => item.category === "webinar");
const uxUiItems = movies.filter((item) => item.category === "ux-ui");
const geralItems = movies.filter((item) => item.category === "geral");

function renderItems(element, items) {
  items.forEach((item) => {
    element.innerHTML += `
    <div class="col-12 col-sm-6 col-md-3 col-movie">
    <div class="item-hover">
      <img
        src="${item.img}"
        class="img-fluid"
        alt=""
      />
      <p class="detail-movie" data-link="${item.link}" onclick="openMovie(this)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="45"
          fill="white"
          class="bi bi-play-circle"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
            d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"
          />
        </svg>
        <span>${item.title}</span>
      </p>
    </div>
  </div>
          `;
  });
}

function openMovie(element) {
  const link = element.getAttribute("data-link");
  console.log(link);
  iframeMovie.innerHTML = `
    <iframe src="${link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  `;
  movieModal.show();
}

renderItems(growcastItemsRow, growcastItems);
renderItems(webinarItemsRow, webinarItems);
renderItems(uxUiItemsRow, uxUiItems);
renderItems(geralItemsRow, geralItems);