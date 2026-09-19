document.getElementById("more").innerHTML = `
  <!-- 3. LOONSTROOK -->
<section class="tool" id="loonstrook">
<h1>Loonstrook maken voor je medewerker</h1>
<p class="lead">Vul de gegevens in en bewaar de loonstrook als pdf. Deze tool maakt de loonstrook. Ze betaalt geen salaris uit en doet geen loonaangifte bij de Belastingdienst.</p>
<div class="layout">
<form class="panel" id="f-slip" onsubmit="return false">
<h2>Werkgever</h2>
<div class="field"><label for="s-werkgever">Bedrijfsnaam</label><input id="s-werkgever" type="text" autocomplete="organization"></div>
<div class="row2">
<div class="field"><label for="s-adres">Adres</label><input id="s-adres" type="text"></div>
<div class="field"><label for="s-lhnr">Loonheffingennummer</label><input id="s-lhnr" type="text" placeholder="123456789L01"></div>
</div>
<h2>Werknemer</h2>
<div class="row2">
<div class="field"><label for="s-naam">Naam</label><input id="s-naam" type="text"></div>
<div class="field"><label for="s-functie">Functie</label><input id="s-functie" type="text"></div>
</div>
<div class="row2">
<div class="field"><label for="s-periode">Periode</label><input id="s-periode" type="month"></div>
<div class="field"><label for="s-iban">IBAN werknemer</label><input id="s-iban" type="text" placeholder="NL00 BANK 0123 4567 89"></div>
</div>
<h2>Loon en inhoudingen</h2>
<div class="row2">
<div class="field"><label for="s-bruto">Brutoloon per maand (€)</label><input id="s-bruto" type="number" inputmode="decimal" min="0" step="0.01" value="3000"></div>
<div class="field"><label for="s-toeslag">Toeslagen en overuren (€)</label><input id="s-toeslag" type="number" inputmode="decimal" min="0" step="0.01" value="0"></div>
</div>
<div class="check"><input type="checkbox" id="s-vakuit"><label for="s-vakuit">Vakantiegeld in deze periode uitbetalen (8 %)</label></div>
<div class="field">
<label for="s-lh">Loonheffing (€)</label>
<span class="hint">Neem het bedrag uit de loonheffingentabel van de Belastingdienst of uit je salarissoftware.</span>
<input id="s-lh" type="number" inputmode="decimal" min="0" step="0.01" value="0">
</div>
<div class="row2">
<div class="field"><label for="s-pensioen">Pensioenpremie werknemer (€)</label><input id="s-pensioen" type="number" inputmode="decimal" min="0" step="0.01" value="0"></div>
<div class="field"><label for="s-overig">Overige inhoudingen (€)</label><input id="s-overig" type="number" inputmode="decimal" min="0" step="0.01" value="0"></div>
</div>
<div class="field"><label for="s-reis">Reiskostenvergoeding, onbelast (€)</label><input id="s-reis" type="number" inputmode="decimal" min="0" step="0.01" value="0"></div>
<div class="field">
<label for="s-code">Premium-code (optioneel)</label>
<span class="hint">Met een geldige code verdwijnt de vermelding onderaan de loonstrook.</span>
<input id="s-code" type="text" autocomplete="off">
</div>
<p class="note">Gebruik deze tool alleen voor echte dienstverbanden. Een loonstrook voor inkomen dat niet bestaat is fraude.</p>
</form>

<div>
<div id="slip" aria-live="polite"></div>
<div class="actions">
<button type="button" class="cta" id="btn-print">Bewaar als pdf</button>
</div>
<p class="note">Werkt de knop niet? Open het menu van je browser, kies Delen of Afdrukken en dan Opslaan als pdf. Alleen de loonstrook wordt bewaard.</p>
</div>
</div>
</section>

<!-- 4. BEDRIJVEN EN PREMIUM -->
<section class="tool" id="premium">
<h1>Betaal je medewerkers via Zzp Werkbank? Dan krijg je 5 % korting op Premium.</h1>
<p class="lead">Premium is voor zzp'ers en bedrijven die vaker loonstroken maken of meerdere medewerkers hebben.</p>
<div class="layout">
<div class="panel">
<h2>Wat zit er in Premium</h2>
<ul class="benefits">
<li>Onbeperkt loonstroken maken</li>
<li>Meerdere medewerkers in één overzicht</li>
<li>Eigen logo op de loonstrook</li>
<li>Jaartotalen op de loonstrook</li>
<li>Loonstroken zonder vermelding van Zzp Werkbank</li>
</ul>
<div class="check">
<input type="checkbox" id="p-bedrijf">
<label for="p-bedrijf">Ik gebruik Zzp Werkbank om medewerkers uit te betalen</label>
</div>
<div class="field" id="p-kvk-wrap" hidden>
<label for="p-kvk">KvK-nummer</label>
<span class="hint">8 cijfers</span>
<input id="p-kvk" type="text" inputmode="numeric" maxlength="8" autocomplete="off">
<div id="p-fout" class="warn" role="alert"></div>
</div>
</div>

<div>
<div class="tape" id="tape-premium" aria-live="polite"></div>
</div>
</div>
</section>


`;
