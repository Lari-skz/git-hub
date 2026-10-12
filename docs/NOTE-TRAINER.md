# 🧑‍🏫 Note pentru trainer

> Fișierul ăsta e pentru tine. Poți să-l ștergi din repo înainte să-l dai internilor (sau să-l lași, nu dă nimic important de gol în afară de bug-uri 😉).

## Pregătire (înainte de sesiune, ~15 min)

1. Creează repo-ul pe GitHub (în organizația companiei) și urcă proiectul:
   ```bash
   gh repo create <org>/peretele-echipei --private --source=. --push
   ```
2. **Settings → Collaborators/Teams:** adaugă internii cu rol *Write*.
3. **Settings → Branches → Add branch protection rule** pentru `main`:
   - ✅ Require a pull request before merging
   - ✅ Require approvals: **1**
   - ✅ Require status checks to pass → `valideaza`
   - ✅ Automatically delete head branches (din Settings → General)

   Așa, nimeni nu poate face push direct pe `main`: regula devine reală, nu doar o rugăminte.
4. **Settings → Pages** (opțional): publică din `main`/root. Internii își văd cartonașul live după merge. Super motivant.
5. Creează issue-urile de mai jos (`gh issue create -t "..." -b "..."`).

## Issues de creat (pentru Exercițiul 4)

Bug-uri plantate intenționat în cod:

| # | Titlu | Unde / soluția |
|---|---|---|
| 1 | 🐛 Contorul afișează cu unu mai puțin | `app.js`: `lista.length - 1` → `lista.length` |
| 2 | 🐛 Căutarea ține cont de majuscule („ana” nu o găsește pe „Ana”) | `app.js`: `.toLowerCase()` pe ambele părți |
| 3 | 🐛 Contorul spune „Suntem 1 oameni” | Singular/plural: „1 om” / „N oameni” |

Feature-uri mici (fiecare = un PR separat):

| # | Titlu | Dificultate |
|---|---|---|
| 4 | ✨ Mesaj „Niciun rezultat” când căutarea nu găsește nimic | ușor |
| 5 | ✨ Sortează alfabetic cartonașele | ușor |
| 6 | ✨ Anul curent în footer, generat din JS | ușor |
| 7 | ✨ Buton de dark mode (variabilele CSS sunt deja pregătite) | mediu |
| 8 | ✨ Filtrare după rol (dropdown) | mediu |
| 9 | ✨ Câmp opțional `github` → link spre profil pe cartonaș | mediu (implică și `valideaza.js`) |
| 10 | 🔒 Numele cu `<script>` ar fi interpretate ca HTML (`innerHTML`) → folosește `textContent` | avansat, bun pentru o discuție despre securitate în review |

Issues 1 și 2 ating aceeași funcție din `app.js`. Dacă le iau doi interni în paralel → **al doilea conflict natural**, în cod, nu în date. Lasă să se întâmple.

## Plan de sesiune (~3h)

| Timp | Ce |
|---|---|
| 0:00 | Prezentarea existentă (concepte) |
| 0:30 | Ex. 0–1: setup, clone, explorare. Desenează pe tablă modelul celor 4 locuri din `GHID-GIT.md` |
| 0:50 | Ex. 2: primul PR. **Pune-i în perechi** pentru review (fiecare e reviewerul celui din dreapta) |
| 1:30 | Pauză |
| 1:40 | Ex. 3: conflicte. Dă tu merge la primul PR, ca să genereze conflicte la toți ceilalți. Rezolvă primul conflict **live, pe proiector** |
| 2:20 | Ex. 4: issues. Fă tu review la câteva PR-uri live, pe proiector, ca să vadă cum arată un review bun |
| 2:50 | Retrospectivă: `git log --oneline --graph` pe `main`. Uitați-vă împreună la istoricul pe care l-ați construit |

## Momente bune de predat

- **La primul „LGTM” fără comentarii:** deschide PR-ul și întreabă reviewerul ce a verificat concret.
- **Când cineva face un PR cu 3 lucruri:** cere-i să-l spargă. E cea mai bună lecție despre PR-uri mici.
- **Când cineva intră în panică la conflict:** `git merge --abort` readuce totul exact cum era. Spune-le asta de la început: le scade mult stresul.
- **Merge vs. squash vs. rebase:** după Ex. 3, arată pe `git log --graph` diferența dintre un merge commit și un squash.
