// Open-Close Menu Functions

function openMenu() {
  const body = document.body;

  body.classList.add("open");
}

function closeMenu() {
  const body = document.body;

  body.classList.remove("open");
}

// Contact Email Send

async function sendEmail(event) {
  event.preventDefault();
  console.log("sendEmail function is called");
  const body = document.body;
  const loading = document.querySelector(".contact__form__loading");
  const form = document.querySelector(".contact__form ");

  try {
    loading.classList.remove("hidden");

    await emailjs.sendForm(
      "service_ywlarfc",
      "template_ncq8fbv",
      event.target,
      "wqw-eOdfiWViLzshq"
    );
    form.reset();
    loading.classList.add("hidden");

    body.classList.add("success-open");
    setTimeout(() => {
      body.classList.remove("success-open");
    }, 4000);

    console.log("done");
  } catch {
    loading.classList.add("hidden");
    alert(
      "An error has occured! Please try again, or contact me at tim.mota21@gmail.com"
    );
  }
}

// Light Dark Mode

document.querySelector(".nav__switch__button").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

document
  .querySelector(".switch__themes__menu")
  .addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

// Cursor

const cursorDot = document.querySelector(".cursor__dot");
const cursorOutline = document.querySelector(".cursor__outline");

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  // cursorOutline.style.left = `${posX}px`;
  // cursorOutline.style.top = `${posY}px`;

  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, {duration:300, fill: "forwards"})
});
