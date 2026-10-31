document.addEventListener("DOMContentLoaded", () => {
  const dlInput = document.getElementById("sim-datalake");
  const tpInput = document.getElementById("sim-touchpoints");
  const bwInput = document.getElementById("sim-bandwidth");

  const dlVal = document.getElementById("sim-datalake-val");
  const tpVal = document.getElementById("sim-touchpoints-val");
  const bwVal = document.getElementById("sim-bandwidth-val");

  const roiOut = document.getElementById("sim-roi-output");
  const velOut = document.getElementById("sim-velocity-output");
  const multOut = document.getElementById("sim-multiplier-output");
  const statusOut = document.getElementById("sim-status-output");

  function updateSynergyTelemetry() {
    if (!dlInput || !tpInput || !bwInput) return;

    const dl = parseFloat(dlInput.value);
    const tp = parseFloat(tpInput.value);
    const bw = parseFloat(bwInput.value);

    dlVal.textContent = `${dl}%`;
    tpVal.textContent = `${tp.toLocaleString()} Nodes`;
    bwVal.textContent = `${bw}%`;

    // Deterministic C-Suite Synergy Formula
    const baseBillions = (dl / 100) * (bw / 100) * (1.4 + (tp / 25000) * 3.8);
    const velocity = Math.round((dl * bw) / 20.1);
    const multiplier = ((dl + bw) / 39.5).toFixed(1);

    roiOut.textContent = `+$${baseBillions.toFixed(2)}B`;
    velOut.textContent = `${velocity}x Baseline`;
    multOut.textContent = `${multiplier}x Top-Down Alpha`;

    if (dl >= 80 && bw >= 80) {
      statusOut.textContent = "FUTURE-PROOFED (ISO-99.9%)";
    } else if (dl >= 55) {
      statusOut.textContent = "PARADIGM TRANSITIONING";
    } else {
      statusOut.textContent = "SILOED BANDWIDTH ALERT";
    }
  }

  if (dlInput && tpInput && bwInput) {
    dlInput.addEventListener("input", updateSynergyTelemetry);
    tpInput.addEventListener("input", updateSynergyTelemetry);
    bwInput.addEventListener("input", updateSynergyTelemetry);
    updateSynergyTelemetry();
  }
});
