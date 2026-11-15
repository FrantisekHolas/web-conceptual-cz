# conceptual.cz

Jednostránková prezentace společnosti **CONCEPTUAL s.r.o.** (IČO 05081823): údaje o společnosti a kontakt,
v češtině, angličtině a němčině.

Čistě statický web bez sestavování a bez externích závislostí: písmo i vše ostatní se načítá z vlastního webu,
nic z Google Fonts ani jiných služeb třetích stran.

## Struktura

| Soubor | Účel |
| --- | --- |
| `index.html` | česká verze (výchozí) |
| `en/index.html` | anglická verze (en-US) |
| `de/index.html` | německá verze (de-DE) |
| `assets/style.css` | společné styly všech jazykových verzí |
| `assets/lang.js` | výběr jazyka (viz níže) |
| `assets/fonts/` | písma hostovaná přímo na webu, obě s licencí SIL OFL 1.1 (texty licencí jsou ve stejné složce): [Michroma](https://github.com/googlefonts/Michroma-font) pro název firmy, [Inter](https://github.com/rsms/inter) pro ostatní text |
| `.github/workflows/zverejneni.yml` | zveřejnění na GitHub Pages jen se soubory webu |

Michroma má jen jeden řez. Název firmy je proto mírně zesílený obrysem; sílu nastavuje proměnná
`--brand-stroke` v `assets/style.css` (0 = původní tloušťka).
| `assets/logo.*` | logo (hlavní motiv), JPG + WebP ve dvou velikostech |
| `favicon.ico`, `assets/favicon-*.png` | favicon (zelený dílek puzzle z loga) |
| `apple-touch-icon.png`, `assets/icon-*.png`, `site.webmanifest` | ikony pro mobilní zařízení |

Všechny tři stránky mají stejnou strukturu. Při změně údajů (telefon, e-mail, adresa…) je potřeba upravit
všechny tři soubory `index.html`.

## Jazykové verze

- Výchozí je čeština na adrese `/`, angličtina je na `/en/`, němčina na `/de/`.
- Při první návštěvě `/` se návštěvník přesměruje podle jazyka prohlížeče: anglicky → `/en/`,
  německy → `/de/`. Čeština, slovenština a všechny ostatní jazyky zůstávají na české verzi.
- Přepínač CS / EN / DE v záhlaví si volbu zapamatuje (localStorage) a při další návštěvě `/` ji použije.
- Přímé odkazy na `/en/` a `/de/` se nikdy nepřesměrovávají, takže sdílený odkaz se otevře v jazyce, ve kterém byl poslán.
- Vyhledávací roboti se nepřesměrovávají, aby česká stránka zůstala indexovatelná.

## Náhled

Odkazy mezi jazyky vedou na adresáře (`en/`, `de/`), proto náhled spouštějte přes lokální server, ne otevřením souboru:

```bash
python3 -m http.server 8000
```

a otevřete <http://localhost:8000/>.

## Nasazení

Web je na GitHub Pages: po každém nahrání do `main` ho zveřejní úloha GitHub Actions `.github/workflows/zverejneni.yml` (ručně: záložka **Actions → Zveřejnění webu → Run workflow**). V **Settings → Pages** je **Source: GitHub Actions** a vlastní doména `conceptual.cz`. Zveřejní se jen soubory webu, bez `README.md` a nastavení repozitáře (seznam `VYNECHAT` v úloze; nový soubor, který na web nepatří, je potřeba do seznamu doplnit).

Na jiný statický hosting (webhosting apod.) stačí nahrát do kořene webu obsah repozitáře kromě `README.md` a složky `.github`.
