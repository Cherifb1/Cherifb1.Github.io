/* Loonstrook */
function renderSlip() {
  const loon = num("#s-bruto");
  const toeslag = num("#s-toeslag");
  const vakUit = $("#s-vakuit").checked;
  const vak = loon * CONFIG.vakantiegeldPct / 100;
  const bruto = loon + toeslag + (vakUit ? vak : 0);
  const lh = num("#s-lh"), pens = num("#s-pensioen"), overig = num("#s-overig"), reis = num("#s-reis");
  const inhoudingen = lh + pens + overig;
  const netto = bruto - inhoudingen;
  const uit = netto + reis;

  const per = $("#s-periode").value;
  let periodeTekst = "";
  if (per) {
    const [y, m] = per.split("-").map(Number);
    periodeTekst = new Date(y, m - 1, 1).toLocaleDateString("nl-NL", { month: "long", year: "numeric" });
  }
  const code = $("#s-code").value.trim().toUpperCase();
  const premium = CONFIG.premiumCodes.includes(code);

  const rij = (naam, bedrag, cls) => '<tr' + (cls ? ' class="' + cls + '"' : '') + '><td>' + naam + '</td><td>' + (bedrag === null ? "" : eur(bedrag)) + '</td></tr>';
  const meta = (k, v) => '<div><span>' + k + '</span>' + (v ? esc(v) : "–") + '</div>';

  $("#slip").innerHTML =
    '<h2>Loonstrook</h2>' +
    '<div>' + (periodeTekst ? esc(periodeTekst) : "Kies een periode") + '</div>' +
    '<div class="meta">' +
      meta("Werkgever", $("#s-werkgever").value) +
      meta("Werknemer", $("#s-naam").value) +
      meta("Adres werkgever", $("#s-adres").value) +
      meta("Functie", $("#s-functie").value) +
      meta("Loonheffingennummer", $("#s-lhnr").value) +
      meta("IBAN werknemer", $("#s-iban").value) +
    '</div>' +
    '<table><thead><tr><th>Bruto</th><th>Bedrag</th></tr></thead><tbody>' +
      rij("Salaris", loon) +
      (toeslag ? rij("Toeslagen en overuren", toeslag) : "") +
      (vakUit ? rij("Vakantiegeld (" + CONFIG.vakantiegeldPct + " %)", vak) : rij("Vakantiegeld opbouw (" + CONFIG.vakantiegeldPct + " %), nog niet uitbetaald", vak, "info")) +
      rij("Totaal bruto", bruto, "total") +
    '</tbody></table>' +
    '<table><thead><tr><th>Inhoudingen</th><th>Bedrag</th></tr></thead><tbody>' +
      rij("Loonheffing", lh) +
      (pens ? rij("Pensioenpremie", pens) : "") +
      (overig ? rij("Overige inhoudingen", overig) : "") +
      rij("Totaal inhoudingen", inhoudingen, "total") +
    '</tbody></table>' +
    '<table><thead><tr><th>Uitbetaling</th><th>Bedrag</th></tr></thead><tbody>' +
      rij("Netto loon", netto) +
      (reis ? rij("Reiskostenvergoeding (onbelast)", reis) : "") +
      rij("Uit te betalen", uit, "total") +
    '</tbody></table>' +
    (premium ? "" : '<p class="foot">Gemaakt met ' + esc(CONFIG.siteNaam) + '.</p>');
}

/* Premium en bedrijfskorting */
function renderPremium() {
  const bedrijf = $("#p-bedrijf").checked;
  $("#p-kvk-wrap").hidden = !bedrijf;
  const kvk = $("#p-kvk").value.trim();
  const kvkOk = /^\d{8}$/.test(kvk);
  $("#p-fout").textContent = bedrijf && kvk.length > 0 && !kvkOk ? "Een KvK-nummer heeft 8 cijfers." : "";
  const korting = bedrijf && kvkOk;
  const f = 1 - (korting ? CONFIG.bedrijfKorting : 0);
  const prijs = (p) => korting ? '<s>' + eur(p) + '</s>' + eur(p * f) : eur(p);

  $("#tape-premium").innerHTML =
    '<h2>Premium</h2>' +
    '<div class="line"><span>Per maand</span><span class="price">' + prijs(CONFIG.prijsMaand) + '</span></div>' +
    '<div class="line"><span>Per jaar</span><span class="price">' + prijs(CONFIG.prijsJaar) + '</span></div>' +
    (korting
      ? '<p>5 % bedrijfskorting toegepast. Vul deze code in bij het afrekenen:</p><div class="promo">' + esc(CONFIG.bedrijfsCode) + '</div><br>'
      : '<p class="note">Betaal je medewerkers via Zzp Werkbank? Vink dat links aan en vul je KvK-nummer in voor 5 % korting.</p>') +
    '<a class="cta" href="' + esc(CONFIG.betaalLink) + '">Ga naar afrekenen</a>';
}

/* Events */
["#f-tarief"].forEach((s) => $(s).addEventListener("input", renderTarief));
["#b-bedrag", "#b-tarief"].forEach((s) => $(s).addEventListener("input", renderBtw));
document.querySelectorAll('input[name="b-richting"]').forEach((r) => r.addEventListener("change", renderBtw));
$("#f-slip").addEventListener("input", renderSlip);
$("#f-slip").addEventListener("change", renderSlip);
["#p-bedrijf", "#p-kvk"].forEach((s) => { $(s).addEventListener("input", renderPremium); $(s).addEventListener("change", renderPremium); });
$("#btn-print").addEventListener("click", () => { try { window.print(); } catch (e) {} });

/* Start */
const nu = new Date();
$("#s-periode").value = nu.getFullYear() + "-" + String(nu.getMonth() + 1).padStart(2, "0");
renderTarief(); renderBtw(); renderSlip(); renderPremium();
show(location.hash.replace("#", "") || "uurtarief");
window.addEventListener("hashchange", () => show(location.hash.replace("#", "")));
