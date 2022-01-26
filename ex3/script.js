let btn = document.querySelector("button");

const api = "https://api.shrtco.de/v2/shorten?url=";

function setLoading(check) {
  const overlay = document.getElementById("overlay");
  if (check) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }
}

btn.addEventListener("click", () => {
  let link = document.getElementById("link-input").value;
  let result_container = document.getElementById("result-container");

  result_container.innerHTML = "";

  setLoading(true);
  let response = window
    .fetch(`${api}${link}`)
    .then((response) => {
      response = response.json();
      return response;
    })
    .then((response) => {
      let code = response.result.code;

      let h3 = document.createElement("h3");
      h3.innerHTML = "Your shortener link";

      result_container.appendChild(h3);

      for (let i = 0; i < 3; i++) {
        let div = document.createElement("div");
        div.classList.add("result");
        let p = document.createElement("p");

        if (i == 0) {
          p.innerHTML = `shrtco.de/${code}`;
        }

        if (i == 1) {
          p.innerHTML = `9qr.de/${code}`;
        }

        if (i == 2) {
          p.innerHTML = `shiny.link/${code}`;
        }

        div.appendChild(p);

        result_container.appendChild(div);
      }
      setLoading(false);
    })
    .catch((error) => {
      let h3 = document.createElement("h3");
      h3.innerHTML = "Cannot shorten this link !";
      h3.style.color = "red";
      setLoading(false);

      result_container.appendChild(h3);
    });
});
