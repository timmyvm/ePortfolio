function openMenu() {
  const body = document.body;

  body.classList.add("open");
}

function closeMenu() {
  const body = document.body;

  body.classList.remove("open");
}

// template_gep9qzf
// service_ywlarfc
// wqw-eOdfiWViLzshq

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
    loading.classList.add('hidden')
    alert(
      "An error has occured! Please try again, or contact me at tim.mota21@gmail.com"
    );
  }
}
