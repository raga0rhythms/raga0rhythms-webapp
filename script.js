"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    siteNav.classList.toggle("is-open", !isOpen);
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      siteNav.classList.remove("is-open");
    }
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());

const contactForm = document.querySelector("#contact-form");
const formNote = document.querySelector("#form-note");

if (contactForm instanceof HTMLFormElement) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;

    const data = new FormData(contactForm);
    const name = String(data.get("name")).trim();
    const email = String(data.get("email")).trim();
    const occasion = String(data.get("occasion")).trim();
    const message = String(data.get("message")).trim();
    const subject = `Performance enquiry: ${occasion}`;
    const body = [
      `Hello Raga 0 Rhythms,`,
      ``,
      message,
      ``,
      `Occasion: ${occasion}`,
      `From: ${name}`,
      `Reply to: ${email}`,
    ].join("\n");
    const mailto = `mailto:hello@raga0rhythms.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    if (formNote) {
      formNote.textContent = "Your email app should open with the enquiry ready to send. If it does not, email hello@raga0rhythms.com directly.";
    }
    window.location.href = mailto;
  });
}
