const $ = {};

window.$ = $;

function _createModal(options) {
  const modal = document.createElement("div");
  modal.classList.add("vmodal");
  modal.setAttribute("data-close", "true");
  modal.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="modal-window">
			<div class="modal-header">
				<p class="modal-title">Обратный звонок</p>	
				<p class="modal-close" data-close="true">&times;</p>
			</div>
			<div class="modal-body">
				<p class="modal-body-text">Оставляйте номер, мы вам перезвоним!</p>
				<input type="texts" class="modal-input" placeholder="Ваш телефон"></input>
				<button class="modal-button call_modalThanks" onClick="elements">Перезвоните мне</button>
      </div>
		</div>`
  );
  document.body.appendChild(modal);
  return modal;
}

function _createModalThanks(options) {
  const modal = document.createElement("div");
  modal.classList.add("vmodal");
  modal.setAttribute("data-close", "true");
  modal.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="modal-window">
			<div class="modal-header">
				<p class="modal-title">Спасибо за вашу заявку!</p>
				<p class="modal-close" data-close="true">&times;</p>
			</div>
			<div class="modal-body">
				<p class="modal-body-text">Наш менеджер свяжется с вами 
в ближайшее время!</p>
      </div>
		</div>
	`
  );
  document.body.appendChild(modal);
  return modal;
}

$.modal = function (options) {
  const ANIMATION_SPEED = 300;
  const $modal = _createModal(options);
  let closing = false;

  const modal = {
    open() {
      !closing && $modal.classList.add("open");
    },
    close() {
      closing = true;
      $modal.classList.add("hide");
      setTimeout(() => {
        $modal.classList.remove("hide");
      }, ANIMATION_SPEED);
      $modal.classList.remove("open");
      closing = false;
    },
  };

  $modal.addEventListener("click", (event) => {
    if (event.target.dataset.close) {
      modal.close();
    }
  });

  return modal;
};

$.modale = function (options) {
  const ANIMATION_SPEED = 300;
  const $modalThanks = _createModalThanks(options);
  let closing = false;

  const modalThanks = {
    open() {
      !closing && $modalThanks.classList.add("open");
    },
    close() {
      closing = true;
      $modalThanks.classList.add("hide");
      setTimeout(() => {
        $modalThanks.classList.remove("hide");
      }, ANIMATION_SPEED);
      $modalThanks.classList.remove("open");
      closing = false;
    },
  };

  $modalThanks.addEventListener("click", (event) => {
    if (event.target.dataset.close) {
      modalThanks.close();
    }
  });

  return modalThanks;
};

const modal = $.modal();
const modalThanks = $.modale();

//вызов основного модульного окна
document.querySelectorAll(".header__call_modal").forEach((elem) => {
  elem.addEventListener("click", modal.open);
});

//вызов уведомляющего модульного окна
let elements = () => {
  document.querySelectorAll(".call_modalThanks").forEach((elem) => {
    elem.addEventListener("click", (e) => {
      if (elem.previousElementSibling.value) {
        modalThanks.open();

        if (elem.classList.contains("modal-button")) {
          modal.close();
        }
      }
    });
  });
};

const clickThanksModal = () => {
  modal.close();
  modalThanks.open();
};

document.oninput = function () {
  var input = document.querySelectorAll("input");
  input.forEach((elem) => {
    elem.value = elem.value.replace(/[^\+\d]/g, "");
  })
};

elements();
