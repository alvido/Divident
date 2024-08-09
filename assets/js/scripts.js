// Burger Menu Open //
document.addEventListener("DOMContentLoaded", function () {
  // Выбираем бургер-кнопку и навигацию
  let burgerButton = document.getElementById("burgerButton");
  let navigation = document.querySelector(".navigation");
  let links = document.querySelectorAll(".navigation__link");

  // Если бургер-кнопка существует, добавляем обработчик события
  if (burgerButton) {
    burgerButton.addEventListener("click", function (e) {
      e.stopPropagation(); // Остановка всплытия события
      burgerButton.classList.toggle("burger--active"); // Переключаем класс активности бургер-кнопки
      navigation.classList.toggle("navigation--active"); // Переключаем класс активности навигации
    });
  }

  // links.forEach((link) => {
  //   link.addEventListener("click", function (e) {
  //     burgerButton.classList.remove("burger--active");
  //     navigation.classList.remove("navigation--active");
  //     console.log("link", link);
  //   });
  // });
});

// select2
// In your Javascript (external .js resource or <script> tag)
$(document).ready(function () {
  $("#contributionFrequency").select2({
    minimumResultsForSearch: Infinity,
  });
});

$(document).ready(function () {
  $("#dividendFrequency").select2({
    minimumResultsForSearch: Infinity,
  });
});

//

// //faq collapse
// $(document).ready(function () {
//   $('.faq__title').on('click', faqCollapse);
// });

// function faqCollapse() {
//   var $this = $(this);
//   $this.toggleClass("active");
//   $('.faq__title').not($this).removeClass("active");
//   var $faqText = $this.next('.faq__text');
//   $('.faq__text').not($faqText).slideUp(500);
//   $faqText.slideToggle(500);
// }
// //faq collapse

//faq collapse
$(document).ready(function () {
  $(".faq__title, .faq__btn").on("click", function () {
    faqCollapse($(this));
  });
});

function faqCollapse($element) {
  $element.parent().toggleClass("active");
  // Находим родителя и добавляем ему класс
  $element.parent().find(".faq__text").toggleClass("open");
}
//faq collapse

// Calculator Open //
document.addEventListener("DOMContentLoaded", function () {
  let calculatorButton = document.getElementById("showCalculator");
  let calculatorBlocks = document.querySelectorAll(
    ".calculator__form .shadow__block"
  );

  if (calculatorButton) {
    calculatorButton.addEventListener("click", function () {
      // Меняем текст кнопки в зависимости от состояния класса
      if (calculatorButton.classList.toggle("--active")) {
        calculatorButton.childNodes[0].nodeValue = "Hide Calculator"; // Текст для состояния "активно"
      } else {
        calculatorButton.childNodes[0].nodeValue = "Show Calculator"; // Текст для состояния "неактивно"
      }

      calculatorBlocks.forEach(function (block) {
        block.classList.toggle("--open");
      });
    });
  }
});

//

//
document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".calculator__input");
  inputs.forEach((input) => {
    input.addEventListener("input", validateInput);
  });

  function validateInput(event) {
    const input = event.target;
    const label = document.querySelector(`label[for=${input.id}]`);
    const errorDiv = getNextErrorMessage(input);
    const value = input.value;

    if (isValid(value)) {
      label.classList.remove("error");
      errorDiv.style.display = "none";
    } else {
      label.classList.add("error");
      errorDiv.style.display = "block";
      if (!/^\d+$/.test(value)) {
        errorDiv.textContent = "Expected number, received NaN";
      } else if (Number(value) <= 0) {
        errorDiv.textContent = "Number must be greater than 0";
      } else if (Number(value) > 100000000) {
        errorDiv.textContent = "Number must be less than or equal to 100000000";
      }
    }
  }

  function isValid(value) {
    const num = Number(value);
    return /^\d+$/.test(value) && num > 0 && num <= 100000000;
  }

  function getNextErrorMessage(input) {
    let nextElement = input.nextElementSibling;
    while (nextElement) {
      if (nextElement.classList.contains("error-message")) {
        return nextElement;
      }
      nextElement = nextElement.nextElementSibling;
    }
    // Если не найден элемент с классом 'error-message', создаем его
    const errorDiv = document.createElement("div");
    errorDiv.classList.add("error-message");
    input.parentNode.insertBefore(errorDiv, input.nextSibling);
    return errorDiv;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("stockPriceAppreciation");
  if (input) {
    input.addEventListener("input", function () {
      if (this.value > 100) {
        this.value = 100; // Если введено число больше 100, устанавливаем значение в 100
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll("input, textarea");

  inputs.forEach((input) => {
    input.addEventListener("input", handleInput);
    input.addEventListener("paste", handleInput);
    input.addEventListener("blur", handleBlur); // Для проверки обязательных полей при потере фокуса
  });

  function handleInput() {
    const type = this.getAttribute("type") || "textarea"; // Если тип не указан, считаем, что это textarea
    const value = this.value.trim();
    let label;

    if (type === "textarea") {
      label = this.closest("label");
    } else {
      label = this.parentNode; // Родительский элемент label
    }

    switch (type) {
      case "text":
        // Запрещаем ввод цифр и символов для текстового поля
        this.value = value.replace(/[^a-zA-Z\s]/g, ""); // Разрешаем только буквы и пробелы
        break;
      case "email":
        // Проверка на валидность email
        const isValidEmail = /\S+@\S+\.\S+/.test(value);
        if (!isValidEmail && value !== "") {
          // Проверяем, что значение не пустое
          label.classList.add("error");
        } else {
          label.classList.remove("error");
        }
        break;
      default:
        // Проверка на обязательное заполнение для остальных типов
        if (value === "") {
          label.classList.add("error");
        } else {
          label.classList.remove("error");
        }
        break;
    }
  }

  function handleBlur() {
    // Изменение цвета рамки только для обязательных полей при потере фокуса
    if (this.required && !this.checkValidity()) {
      this.style.borderColor = "red";
    } else {
      this.style.borderColor = ""; // Сброс цвета рамки, если валидация успешна
    }
  }
});

//
