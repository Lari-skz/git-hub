# 👋 Peretele Echipei — atelier practic de Git & GitHub

Bine ai venit! Acesta este proiectul pe care îl vom folosi ca să învățăm Git și GitHub **făcând**, nu doar privind slide-uri.

Proiectul e o pagină web mică: un „perete” cu cartonașe, câte unul pentru fiecare membru al echipei. Până la finalul atelierului, **fiecare dintre voi va fi pe perete**, adăugat prin propriul Pull Request, verificat de un coleg prin code review.

## Ce vei învăța

| Concept | Unde exersezi |
|---|---|
| `clone`, `status`, `add`, `commit`, `log`, `diff` | Exercițiile 1–2 |
| Branch-uri și `push` | Exercițiul 2 |
| Pull Request + code review | Exercițiile 2–4 |
| `pull` / `fetch` și ținerea la zi cu `main` | Exercițiul 3 |
| Conflicte de merge (și cum NU intri în panică) | Exercițiul 3 |
| Rezolvarea unui bug real, PR-uri mici | Exercițiul 4 |
| Bonus: `stash`, `restore`, `revert`, `amend` | Exercițiul 5 |

## Structura proiectului

```
├── index.html            # pagina
├── style.css             # stilurile
├── app.js                # logica (are câteva bug-uri intenționate 😉)
├── data/echipa.js        # lista membrilor — aici vei apărea și tu
├── interni/              # fiecare intern își creează propriul fișier aici
├── scripts/valideaza.js  # verifică data/echipa.js (rulează și automat pe fiecare PR)
├── EXERCITII.md          # 👉 ÎNCEPE DE AICI
└── docs/
    ├── GHID-GIT.md            # fițuica cu comenzi
    └── PR-SI-CODE-REVIEW.md   # de ce PR-uri mici și cum faci review
```

## Cum rulezi proiectul

Nu e nevoie de nicio instalare. Deschide `index.html` în browser. Atât.

Opțional, pentru verificare (necesită Node.js):

```bash
node scripts/valideaza.js
```

## Regulile casei

1. **Nimeni nu face push direct pe `main`.** Totul trece prin Pull Request.
2. **Un PR = o singură schimbare.** Mai bine 5 PR-uri mici decât unul uriaș.
3. **Fiecare PR primește cel puțin un review** înainte de merge.
4. **Nu există întrebări proaste.** Dacă te-ai blocat mai mult de 10 minute, întreabă.

👉 Mergi la [EXERCITII.md](EXERCITII.md) și hai să începem!
