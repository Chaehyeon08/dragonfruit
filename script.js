function showOnScroll() {
  const targets = document.querySelectorAll(".fade");
  targets.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      sec.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);
document.addEventListener("DOMContentLoaded", () => {

  /* ===========================
     MODAL OPEN HANDLERS
  ============================ */
  const cards = document.querySelectorAll(".odyssey-card");
  const modals = {
    odyssey1: document.getElementById("modal-1"),
    odyssey2: document.getElementById("modal-2"),
    odyssey3: document.getElementById("modal-3")
  };

  cards.forEach(card => {
    card.addEventListener("click", (e) => {
      e.stopPropagation(); // 카드 클릭이 오버레이로 전달되지 않게
      const id = card.id; // odyssey1, odyssey2, odyssey3
      if (modals[id]) {
        modals[id].classList.add("open");
      }
    });
  });

  /* ===========================
     MODAL CLOSE HANDLERS
  ============================ */

  // X 버튼 클릭
  document.querySelectorAll(".close-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      btn.closest(".modal-overlay").classList.remove("open");
    });
  });

  // ESC 닫기
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-overlay.open")
        .forEach(modal => modal.classList.remove("open"));
    }
  });

  // 오버레이(배경) 클릭 시 닫기
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", () => {
      overlay.classList.remove("open");
    });

    // modal-content 클릭하면 이벤트 전파 막기
    overlay.querySelector(".modal-content")
      .addEventListener("click", (e) => {
        e.stopPropagation();
      });
  });

});

