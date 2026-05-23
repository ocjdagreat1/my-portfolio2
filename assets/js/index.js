function scrollToOptions(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

(function () {
  const fullName = "Opara Chibuike Justine";
  let arrayName = [];
  let i = 0;

  let interval = setInterval(() => {
    arrayName.push(fullName[i]); // add one character
    document.getElementById("fullName").innerText = arrayName.join("");

    i++;
    if (i === fullName.length) {
      clearInterval(interval); // stop when done
    }
  }, 200); // print every 500ms
})();

let mybtn = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybtn.style.display = "block";
  } else {
    mybtn.style.display = "none";
  }
  mybtn.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
  });
};