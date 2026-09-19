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
