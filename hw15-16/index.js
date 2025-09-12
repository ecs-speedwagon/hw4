const input = document.querySelector("#search-box");
const list = document.querySelector("#country-list");
const info = document.querySelector("#country-info");
let timeout;

input.addEventListener("input", () => {
  clearTimeout(timeout);
  timeout = setTimeout(searchCountry, 400);
});

function searchCountry() {
  const query = input.value.trim();
  if (!query) return clearResults();

  fetch(`https://restcountries.com/v2/name/${encodeURIComponent(query)}?fields=name,capital,region,flags,population,languages,currencies,nativeName,flag`)
    .then(res => res.ok ? res.json() : Promise.reject())
    .then(showResults)
    .catch(() => {
      clearResults();
      info.innerHTML = `<div class="small" style="color:red">Країн не знайдено</div>`;
    });
}

function showResults(countries) {
  clearResults();
  if (countries.length > 10) {
    info.innerHTML = `<div class="small" style="color:orange">Забагато результатів, уточни пошук</div>`;
    return;
  }
  if (countries.length > 1) {
    list.innerHTML = countries.map(c => `
      <li class="country-item">
        <img src="${c.flags?.svg || c.flag}" alt="flag">
        <div>
          <div class="country-name">${c.name}</div>
          <div class="small">${c.capital ? `Capital: ${c.capital}` : ""} ${c.region ? ` • ${c.region}` : ""}</div>
        </div>
      </li>`).join("");
    return;
  }
  if (countries.length === 1) renderCountryDetails(countries[0]);
}

function renderCountryDetails(c) {
  const languages = Array.isArray(c.languages)
    ? c.languages.map(l => l.name).join(", ")
    : "";
  info.innerHTML = `
    <div style="display:flex;gap:14px;align-items:center;">
      <img src="${c.flags?.svg || c.flag}" width="120" style="border-radius:6px"/>
      <div>
        <div class="country-name">${c.name}${c.nativeName ? ` — ${c.nativeName}` : ""}</div>
        <div class="small">Capital: ${c.capital || "—"}</div>
        <div class="small">Population: ${c.population?.toLocaleString() || "—"}</div>
        <div class="small">Languages: ${languages || "—"}</div>
        <div class="small">Currency: ${c.currencies ? c.currencies.map(cur=>cur.name).join(", ") : "—"}</div>
      </div>
    </div>`;
}

function clearResults() {
  list.innerHTML = "";
  info.innerHTML = "";
}