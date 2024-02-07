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
      
        <span>▶              </span>
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