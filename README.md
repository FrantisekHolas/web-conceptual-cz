# conceptual.cz

Jednostránková prezentace společnosti **CONCEPTUAL s.r.o.** (IČO 05081823): údaje o společnosti a kontakt.

Čistě statický web bez sestavování a bez externích závislostí (žádné fonty ani skripty třetích stran).

## Struktura

| Soubor | Účel |
| --- | --- |
| `index.html` | celá stránka včetně stylů |
| `assets/logo.*` | logo (hlavní motiv), JPG + WebP ve dvou velikostech |
| `favicon.ico`, `assets/favicon-*.png` | favicon (zelený dílek puzzle z loga) |
| `apple-touch-icon.png`, `assets/icon-*.png`, `site.webmanifest` | ikony pro mobilní zařízení |

## Náhled

Stačí otevřít `index.html` v prohlížeči, případně:

```bash
python3 -m http.server 8000
```

## Nasazení

Obsah repozitáře nahrajte na libovolný statický hosting (GitHub Pages, webhosting apod.) do kořene webu.
