let draggedItem = null;
let touchItem = null;
let touchClone = null;

// ===== MOUSE DRAG =====
function onDragStart(e) {
  draggedItem = e.currentTarget;
  draggedItem.classList.add("dragging");
  e.dataTransfer.effectAllowed = "move";
}

function onDragOver(e) {
  e.preventDefault();
  e.currentTarget.classList.add("dragover");
}

function onDrop(e) {
  e.preventDefault();
  const zone = e.currentTarget;
  zone.classList.remove("dragover");

  if (draggedItem) {
    // Remove zone label text
    const label = zone.querySelector(".zone-label");
    if (label) label.remove();

    // Move item into zone
    // const clone = draggedItem.cloneNode(true);
    // clone.removeAttribute('draggable');
    // clone.style.cursor = 'default';
    // zone.appendChild(clone);

    // draggedItem.style.opacity = '0.3';
    // draggedItem.setAttribute('draggable', 'false');

    zone.appendChild(draggedItem);

    draggedItem.style.opacity = "1";
    draggedItem.style.cursor = "grab";

    // draggedItem.style.cursor = "not-allowed";
    // draggedItem = null;
  }
}

document.addEventListener("dragend", () => {
  document
    .querySelectorAll(".draggable-item")
    .forEach((i) => i.classList.remove("dragging"));
  document
    .querySelectorAll(".drop-zone")
    .forEach((z) => z.classList.remove("dragover"));
});

// ===== TOUCH DRAG (mobile) =====
function onTouchStart(e) {
  touchItem = e.currentTarget;
  const rect = touchItem.getBoundingClientRect();
  touchClone = touchItem.cloneNode(true);
  touchClone.style.position = "fixed";
  touchClone.style.left = rect.left + "px";
  touchClone.style.top = rect.top + "px";
  touchClone.style.width = rect.width + "px";
  touchClone.style.opacity = "0.8";
  touchClone.style.zIndex = "9999";
  touchClone.style.pointerEvents = "none";
  document.body.appendChild(touchClone);
}

function onTouchMove(e) {
  if (!touchClone) return;
  e.preventDefault();
  const touch = e.touches[0];
  touchClone.style.left = touch.clientX - 60 + "px";
  touchClone.style.top = touch.clientY - 20 + "px";
}

function onTouchEnd(e) {
  if (!touchClone || !touchItem) return;
  const touch = e.changedTouches[0];
  const el = document.elementFromPoint(touch.clientX, touch.clientY);
  const zone = el ? el.closest(".drop-zone") : null;

  if (zone) {
    const label = zone.querySelector(".zone-label");
    if (label) label.remove();
    // const clone = touchItem.cloneNode(true);
    // clone.removeAttribute("draggable");
    // clone.style.cursor = "default";
    // zone.appendChild(clone);
    // touchItem.style.opacity = "0.3";
    // touchItem.setAttribute("draggable", "false");

    zone.appendChild(touchItem);

    touchItem.style.opacity = "1";
    touchItem.style.cursor = "grab";
  }

  document.body.removeChild(touchClone);
  touchClone = null;
  touchItem = null;
}

// ===== CEK JAWABAN =====
// function checkGame() {
//   const zones = document.querySelectorAll(".drop-zone");
//   let benar = 0;
//   let total = 0;

//   zones.forEach((zone) => {
//     const zoneHabitat = zone.dataset.zone;
//     const items = zone.querySelectorAll(".draggable-item");

//     items.forEach((item) => {
//       total++;
//       if (item.dataset.habitat === zoneHabitat) {
//         benar++;
//         zone.classList.add("correct");
//         zone.classList.remove("wrong");
//       } else {
//         zone.classList.add("wrong");
//         zone.classList.remove("correct");
//       }
//     });
//   });

//   const result = document.getElementById("gameResult");
//   result.style.display = "block";

//   if (total === 0) {
//     result.textContent = "⚠️ Belum ada binatang yang diseret!";
//     result.style.background = "#fff8e1";
//     result.style.color = "#e65100";
//   } else if (benar === 6) {
//     result.textContent = "🏆 Luar biasa! Semua benar! Kamu pintar sekali!";
//     result.style.background = "#e8f5e9";
//     result.style.color = "#2e7d32";
//   } else {
//     result.textContent = `✅ ${benar} dari ${total} benar. Coba lagi yuk!`;
//     result.style.background = "#fff8e1";
//     result.style.color = "#e65100";
//   }
// }

function checkGame() {
  const zones = document.querySelectorAll(".drop-zone");
  let benar = 0;
  let total = 0;

  zones.forEach((zone) => {
    const zoneHabitat = zone.dataset.zone;
    const items = zone.querySelectorAll(".draggable-item");

    let semuaBenar = true;

    items.forEach((item) => {
      total++;

      if (item.dataset.habitat === zoneHabitat) {
        benar++;
      } else {
        semuaBenar = false;
      }
    });

    zone.classList.remove("correct", "wrong");

    if (items.length > 0) {
      if (semuaBenar) {
        zone.classList.add("correct");
      } else {
        zone.classList.add("wrong");
      }
    }
  });

  const result = document.getElementById("gameResult");
  result.style.display = "block";

  if (total === 0) {
    result.textContent = "⚠️ Belum ada binatang yang diseret!";
    result.style.background = "#fff8e1";
    result.style.color = "#e65100";
  } else if (benar === 6 && total === 6) {
    result.textContent = "🏆 Luar biasa! Semua benar! Kamu pintar sekali!";
    result.style.background = "#e8f5e9";
    result.style.color = "#2e7d32";
  } else {
    result.textContent = `✅ ${benar} dari 6 jawaban benar. Coba lagi yuk!`;
    result.style.background = "#fff8e1";
    result.style.color = "#e65100";
  }
}

// ===== RESET =====
function resetGame() {
  location.reload();
}
