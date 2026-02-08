const form = document.getElementById("eventForm");
const titleInput = document.getElementById("EventTitle");
const dateInput = document.getElementById("EventDate");
const categoryInput = document.getElementById("EventCategory");
const descInput = document.getElementById("EventDescription");
const eventContainer = document.getElementById("all-events-container");
const clearBtn = document.getElementById("clear-event-btn");
const sampleBtn = document.getElementById("add-sample-event");

form.addEventListener("submit", addEvent);
clearBtn.addEventListener("click", clearAllEvents);
sampleBtn.addEventListener("click", addSampleEvent);
eventContainer.addEventListener("click", handleDelete);

function addEvent(e) {
  e.preventDefault();

  removeEmptyText();

  const card = createEventCard(
    titleInput.value,
    dateInput.value,
    categoryInput.value,
    descInput.value
  );

  eventContainer.appendChild(card);
  form.reset();
}

function createEventCard(title, date, category, desc) {
  const card = document.createElement("div");
  card.className = "event-card";

  card.innerHTML = `
    <button class="delete-btn">X</button>
    <h4>${title}</h4>
    <small>${date} | ${category}</small>
    <p>${desc}</p>
  `;

  return card;
}

function handleDelete(e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
    showEmptyText();
  }
}

function clearAllEvents() {
  eventContainer.innerHTML = `<p class="empty-text">No Events Yet.</p>`;
}

function addSampleEvent() {
  removeEmptyText();
  const sample = createEventCard(
    "Web Dev Workshop",
    "2026-02-10",
    "Workshop",
    "Hands-on session on modern web development."
  );
  eventContainer.appendChild(sample);
}

function removeEmptyText() {
  const empty = document.querySelector(".empty-text");
  if (empty) empty.remove();
}

function showEmptyText() {
  if (eventContainer.children.length === 0) {
    eventContainer.innerHTML = `<p class="empty-text">No Events Yet.</p>`;
  }
}
