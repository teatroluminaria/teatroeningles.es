// Animación de fade-in al hacer scroll
document.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".fade-in");

  elements.forEach((element) => {
    const position = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (position < screenPosition) {
      element.classList.add("visible");
    }
  });
});

// Inicialización de la barra de cookies
window.addEventListener("load", function () {
  if (!document.cookie.includes("cookieconsent_status")) {
    // Solo inicializamos el banner si la cookie de aceptación no existe
    let cookieConfig = {
      palette: {
        popup: {
          background: "#000",
        },
        button: {
          background: "#f1d600",
        },
      },
      theme: "classic",
      content: {
        message:
          "Utilizamos cookies para mejorar su experiencia en nuestro sitio web.",
        dismiss: "Aceptar",
        link: "Más información",
        href: "https://www.teatroluminaria.com/cookies",
      },
      position: "bottom",
      onInitialise: function (status) {
        if (status === "dismiss") {
          document.cookie =
            "cookieconsent_status=dismiss; path=/; max-age=" +
            60 * 60 * 24 * 365;
        }
      },
      onStatusChange: function (status) {
        if (status === "dismiss") {
          document.cookie =
            "cookieconsent_status=dismiss; path=/; max-age=" +
            60 * 60 * 24 * 365;
        }
      },
      onRevokeChoice: function () {
        document.cookie =
          "cookieconsent_status=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      },
    };

    if (window.innerWidth <= 1024) {
      cookieConfig.position = "bottom"; // Ocupa todo el ancho en la parte inferior
    } else {
      cookieConfig.position = "bottom-right"; // En pantallas grandes, esquina inferior derecha
    }

    window.cookieconsent.initialise(cookieConfig);
  }
});
