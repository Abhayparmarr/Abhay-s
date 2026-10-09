(() => {
  const container = document.getElementById("travelGlobe");

  if (!container) return;

  container.innerHTML = `
    <div class="globe-scene">
      <div class="globe">
        <div class="globe-land"></div>
        <div class="globe-shine"></div>
      </div>

      <svg class="globe-routes" viewBox="0 0 400 400">
        <path d="M90 150 Q200 20 300 160" class="route"/>
        <path d="M90 150 Q120 280 270 260" class="route"/>
        <circle cx="90" cy="150" r="6" class="route-point"/>
        <circle cx="300" cy="160" r="6" class="route-point"/>
        <circle cx="270" cy="260" r="6" class="route-point"/>
      </svg>

      <div class="globe-caption">
        <span>✦</span>
        <div>
          <strong>One World. Endless Adventures.</strong>
          <p>Where will your next journey take you?</p>
        </div>
      </div>
    </div>
  `;
})();
