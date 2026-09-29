(() => {
  if (window.__TEAMS_HAND_ASSISTANT_LOADED__) {
    return;
  }

  window.__TEAMS_HAND_ASSISTANT_LOADED__ = true;

  console.log("[Teams Hand Assistant] Extensión cargada correctamente.");

  const badgeId = "teams-hand-assistant-dev-badge";

  if (document.getElementById(badgeId)) {
    return;
  }

  const badge = document.createElement("div");

  badge.id = badgeId;
  badge.textContent = "Teams Hand Assistant activo";

  Object.assign(badge.style, {
    position: "fixed",
    top: "16px",
    right: "16px",
    zIndex: "2147483647",
    padding: "8px 12px",
    borderRadius: "8px",
    background: "#111",
    color: "#fff",
    fontFamily: "system-ui, sans-serif",
    fontSize: "13px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)"
  });

  document.documentElement.appendChild(badge);

  setTimeout(() => {
    badge.remove();
  }, 5000);
})();