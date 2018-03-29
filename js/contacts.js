"use strict";

(function () {
  var contactsFormTrigger = document.querySelector(".contacts-form-trigger");
  var popUpContacts = document.querySelector(".pop-up-contacts");
  var submitBtn = popUpContacts.querySelector(".submit-btn");
  var closeForm = popUpContacts.querySelector(".close-form");
  var name = popUpContacts.querySelector(".name");
  var email = popUpContacts.querySelector(".email");
  var message = popUpContacts.querySelector(".message");
  var contactsForm = popUpContacts.querySelector(".pop-up-contacts-form");

  var ESC_KEYCODE = 27;

  var hideContactsForm = function () {
    name.classList.remove("invalid");
    email.classList.remove("invalid");
    message.classList.remove("invalid");
    popUpContacts.classList.add("hidden");

    closeForm.removeEventListener("click", onCloseFormClick);
    document.removeEventListener("keydown", onEscPress);
    contactsFormTrigger.addEventListener("click", onContactsFormTriggerClick);
  };

  var onEscPress = function (evtEsc) {
    if (evtEsc.keyCode === ESC_KEYCODE) {
      hideContactsForm();
    }
  };

  var onCloseFormClick = function () {
    hideContactsForm();
  };

  var onSubmitClick = function (evtSubmit) {
    evtSubmit.preventDefault();

    var allFilled = true;

    name.classList.remove("invalid");
    email.classList.remove("invalid");
    message.classList.remove("invalid");

    if(!name.value) {
      name.classList.add("invalid");
      allFilled = false;
    }

    if (!email.value) {
      email.classList.add("invalid");
      allFilled = false;
    }

    if (!message.value) {
      message.classList.add("invalid");
      allFilled = false;
    }

    if (allFilled) {
      hideContactsForm();
      contactsForm.submit();
    }
  }

  var onContactsFormTriggerClick = function (evtTrigger) {
    evtTrigger.preventDefault();

    popUpContacts.classList.remove("hidden");
    popUpContacts.classList.add("show-animation");

    name.focus();

    contactsFormTrigger.removeEventListener("click", onContactsFormTriggerClick);
    closeForm.addEventListener("click", onCloseFormClick);
    document.addEventListener("keydown", onEscPress);
    submitBtn.addEventListener("click", onSubmitClick);
  };

  contactsFormTrigger.addEventListener("click", onContactsFormTriggerClick);
  submitBtn.addEventListener("click", onSubmitClick);
})()
