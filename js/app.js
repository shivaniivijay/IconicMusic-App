

// All of our data is available on the global window object.
// Create local variables to work with it in this file.
const { artists, songs } = window;

// For debugging, display all of our data in the console. You can remove this later.
console.log({ artists, songs }, "App Data");

// Function to add URL input field
function addUrlInput(containerId, placeholder) {
  const container = document.getElementById(containerId);
  const div = document.createElement("div");
  div.className = "url-input";
  div.innerHTML = `
    <input type="url" name="${containerId}[]" placeholder="${placeholder}" required>
    <button type="button" class="remove-url">Remove</button>
  `;
  container.appendChild(div);
}

window.addEventListener("load", function () {
  let menuDiv = document.querySelector("#menu");
  let cardsContainer = document.querySelector("#cards-container");

  if (menuDiv && cardsContainer) {
    artists.forEach((artist) => {
      let menuButton = document.createElement("button");
      menuButton.textContent = artist.name;
      menuButton.addEventListener("click", function () {
        let artistH2 = document.querySelector("#selected-artist");
        artistH2.innerHTML = `${artist.name} [`;

        artist.urls.forEach((url, index) => {
          artistH2.innerHTML += `<a href='${url.url}'>${url.name}</a>`;
          if (index < artist.urls.length - 1) {
            artistH2.innerHTML += ", ";
          }
        });

        artistH2.innerHTML += "]";

        cardsContainer.innerHTML = "";
        songs
          .filter((song) => song.artistId === artist.artistId && !song.explicit)
          .forEach((song) => {
            let card = document.createElement("div");
            card.className = "card";

            let figure = document.createElement("figure");
            let imgBtn = document.createElement("button");
            imgBtn.type = "button";
            imgBtn.addEventListener("click", function () {
              window.open(song.url, "_blank");
            });

            let img = document.createElement("img");
            img.src = song.imageUrl;
            img.alt = "Cover";

            imgBtn.appendChild(img);
            figure.appendChild(imgBtn);
            card.appendChild(figure);

            let container = document.createElement("div");
            container.className = "card-content";
            let songTitle = document.createElement("p");
            songTitle.textContent = song.title;
            container.appendChild(songTitle);

            let details = document.createElement("p");
            details.textContent = `Year: ${song.year} - Duration: ${Math.floor(
              song.duration / 60
            )}:${String(song.duration % 60).padStart(2, "0")}`;
            container.appendChild(details);

            card.appendChild(container);
            cardsContainer.appendChild(card);
          });
      });
      menuDiv.appendChild(menuButton);
    });

    let defaultArt = document.querySelector("#menu button");
    if (defaultArt) {
      defaultArt.click();
    }

    document.addEventListener("mousemove", (e) => {
      const cards = document.querySelectorAll(".card");
      const x = (window.innerWidth / 2 - e.clientX) / 25;
      const y = (window.innerHeight / 2 - e.clientY) / 25;

      cards.forEach((card) => {
        card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
        card.classList.add("parallax-card");
      });
    });
  }

  // Newsletter Form Submission
  const newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const email = this.querySelector("#email").value;
      console.log("Newsletter submission:", email);
      // Simulating POST request
      fetch("https://httpbin.org/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email })
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          alert("Thank you for subscribing!");
          this.reset();
        })
        .catch((error) => console.error("Error:", error));
    });
  }

  // Request Artist Form
  const requestArtistForm = document.getElementById("request-artist-form");
  if (requestArtistForm) {
    // Remove URL input field
    document.body.addEventListener("click", function (event) {
      if (event.target.classList.contains("remove-url")) {
        event.target.parentElement.remove();
      }
    });

    // Added initial URL inputs
    addUrlInput("social-media-urls", "Social Media URL");
    addUrlInput("song-video-urls", "Song/Video URL");

    // Added URL button functionality
    const addSocialUrlBtn = document.getElementById("add-social-url");
    if (addSocialUrlBtn) {
      addSocialUrlBtn.addEventListener("click", () =>
        addUrlInput("social-media-urls", "Social Media URL")
      );
    }

    const addSongUrlBtn = document.getElementById("add-song-url");
    if (addSongUrlBtn) {
      addSongUrlBtn.addEventListener("click", () =>
        addUrlInput("song-video-urls", "Song/Video URL")
      );
    }

    // Form submission
    requestArtistForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const formData = new FormData(this);
      const data = Object.fromEntries(formData.entries());

      // Handles multiple URLs
      data.socialMediaUrls = formData.getAll("social-media-urls[]");
      data.songVideoUrls = formData.getAll("song-video-urls[]");

      console.log("Artist request submission:", data);

      // Simulating POST request
      fetch("https://httpbin.org/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
        .then((response) => response.json())
        .then((data) => console.log("Success:", data))
        .catch((error) => console.error("Error:", error));

      alert("Thank you for your artist request!");
      this.reset();
    });
  }
});
