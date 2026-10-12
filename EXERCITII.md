# 🏋️ Exerciții

Fă exercițiile în ordine. Fiecare se bazează pe cel dinainte.
Ține deschisă [fițuica de comenzi](docs/GHID-GIT.md) într-un tab alăturat.

> **Convenție:** acolo unde scrie `prenume-nume`, folosește numele tău, fără diacritice și cu liniuță, ex. `maria-ionescu`.

---

## Exercițiul 0 — Pregătirea (o singură dată)

```bash
# Spune-i lui Git cine ești (apare în fiecare commit)
git config --global user.name "Prenume Nume"
git config --global user.email "emailul-tau@exemplu.ro"   # același email ca pe GitHub

# Branch-ul implicit să se numească main
git config --global init.defaultBranch main

# Verifică
git config --global --list
```

Apoi autentifică-te la GitHub. Cel mai simplu e cu GitHub CLI:

```bash
gh auth login
```

(Alternativ: o cheie SSH — trainerul îți arată cum, dacă ai nevoie.)

---

## Exercițiul 1 — Clone și explorare

**Scop:** să ai proiectul pe calculator și să înțelegi ce e în el.

```bash
git clone <URL-ul-repo-ului-primit-de-la-trainer>
cd <numele-folderului>

git status          # Pe ce branch sunt? Am modificări?
git log --oneline   # Ce commit-uri există deja?
git branch -a       # Ce branch-uri există (local și pe remote)?
git remote -v       # Unde e „origin”?
```

**Întrebări de verificare** (răspunde-ți singur, apoi verifică cu colegul):
- Câte commit-uri are proiectul? Cine le-a făcut?
- Ce înseamnă `origin/main` față de `main`?
- Deschide `index.html` în browser. Câte persoane spune contorul că sunt? Câte cartonașe vezi? 🤔 (ține minte asta pentru Exercițiul 4)

---

## Exercițiul 2 — Primul tău Pull Request (fără conflicte)

**Scop:** ciclul complet branch → commit → push → PR → review → merge.

### 2.1 Creează un branch

```bash
git switch main
git pull                                   # pornește mereu de la cea mai nouă versiune
git switch -c prezentare/prenume-nume      # creează branch-ul și treci pe el
```

### 2.2 Fă o modificare

Creează fișierul `interni/prenume-nume.md` cu conținutul:

```markdown
# Prenume Nume

- **Echipa:** (ex. Frontend)
- **Un lucru despre mine:** ...
- **Ce vreau să învăț în internship:** ...
```

### 2.3 Primul commit

```bash
git status                       # fișierul apare ca „untracked” (roșu)
git add interni/prenume-nume.md
git status                       # acum e „staged” (verde)
git commit -m "Adaugă prezentarea lui Prenume Nume"
git log --oneline                # commit-ul tău e primul din listă
```

### 2.4 Încă un commit (ca să vezi cum arată un diff)

Adaugă în fișier un rând nou, de ex. `- **Limbajul preferat:** ...`, apoi:

```bash
git diff                         # ce s-a schimbat față de ultimul commit?
git add -p                       # adaugă interactiv, bucată cu bucată (răspunde y)
git commit -m "Adaugă limbajul preferat"
```

### 2.5 Push

```bash
git push -u origin prezentare/prenume-nume
```

`-u` leagă branch-ul tău local de cel de pe GitHub. Data viitoare va fi suficient `git push`.

### 2.6 Deschide Pull Request-ul

Pe GitHub va apărea un banner galben „Compare & pull request”. Sau din terminal:

```bash
gh pr create --fill
```

Completează template-ul (Ce? De ce? Cum am testat?) și **cere review** de la colegul din dreapta ta (Reviewers → colegul).

### 2.7 Fă review la PR-ul colegului

Citește mai întâi [PR-SI-CODE-REVIEW.md](docs/PR-SI-CODE-REVIEW.md). Apoi, în PR-ul colegului:
1. Tab-ul **Files changed**.
2. Lasă **cel puțin un comentariu** pe un rând (click pe `+` lângă rând). Poate fi o întrebare sau o sugestie.
3. Încearcă butonul **Suggest changes** (iconița ±): propui direct textul corectat.
4. **Review changes** → *Approve* sau *Request changes*.

### 2.8 Răspunde la review și dă merge

Dacă ai primit sugestii: aplică-le (local → commit → `git push`, PR-ul se actualizează singur) sau apasă *Commit suggestion* pe GitHub.
După aprobare → **Squash and merge**. Apoi:

```bash
git switch main
git pull                                   # ia și schimbarea ta, acum din main
git branch -d prezentare/prenume-nume      # șterge branch-ul local, nu mai e nevoie de el
```

✅ **Felicitări, ai făcut un ciclu complet!**

---

## Exercițiul 3 — Pe perete (cu conflicte, intenționat)

**Scop:** să vezi un conflict de merge în condiții sigure și să înveți că nu e nimic grav.

Acum toți veți modifica **același fișier**, `data/echipa.js`, chiar în **același loc** (finalul listei). Primul PR intră fără probleme. Restul vor avea conflict. Exact asta vrem. 😈

### 3.1 Adaugă-te

```bash
git switch main && git pull
git switch -c perete/prenume-nume
```

Adaugă-te la finalul listei din `data/echipa.js`:

```js
  {
    nume: "Prenume Nume",
    rol: "Intern Frontend",
    hobby: "Ceva amuzant despre tine",
    emoji: "🚀",
  },
```

```bash
node scripts/valideaza.js       # verifică înainte să faci commit
git add data/echipa.js
git commit -m "Mă adaugă pe peretele echipei"
git push -u origin perete/prenume-nume
gh pr create --fill
```

### 3.2 Când PR-ul tău are conflict

GitHub va scrie *„This branch has conflicts that must be resolved”*. Rezolvă-l local:

```bash
git switch main
git pull                         # aduce ce au adăugat colegii între timp
git switch perete/prenume-nume
git merge main                   # 💥 CONFLICT (content): Merge conflict in data/echipa.js
git status                       # îți arată fișierul cu conflict
```

Deschide `data/echipa.js`. Vei vedea:

```
<<<<<<< HEAD
  { ...tu... },
=======
  { ...colegul care a intrat înaintea ta... },
>>>>>>> main
```

- Partea de sus (`HEAD`) = varianta ta. Partea de jos = ce e deja în `main`.
- Aici vrem **ambele** variante: păstrează ambele obiecte și **șterge cele 3 linii cu markeri**.

```bash
node scripts/valideaza.js       # te prinde dacă ai uitat vreun marker
git add data/echipa.js
git commit                       # Git propune deja un mesaj de merge, salvează-l
git push
```

PR-ul se actualizează, conflictul dispare, colegul îți dă *Approve*, faci merge. 🎉

> 💡 **Alternativă avansată:** `git rebase main` în loc de `git merge main` dă un istoric liniar. Va trebui apoi `git push --force-with-lease`. Discutăm la final diferența.

---

## Exercițiul 4 — Rezolvă un issue (PR-uri mici!)

**Scop:** munca de zi cu zi. Iei un task, faci o schimbare mică și focusată, ceri review.

Trainerul a creat **Issues** pe GitHub. Alege unul și asignează-l ție (*Assignees → assign yourself*), ca să nu lucreze doi oameni la același lucru.

Câteva indicii (ai observat deja unul în Exercițiul 1 😉):
- Contorul spune un număr greșit de oameni.
- Căutarea după „ana” nu o găsește pe „Ana Mentor”.
- Și altele, în lista de Issues.

```bash
git switch main && git pull
git switch -c fix/contor-gresit          # numele branch-ului spune ce face
# ... repari ...
git add app.js
git commit -m "Repară contorul de membri (afișa cu unu mai puțin)"
git push -u origin fix/contor-gresit
gh pr create --fill
```

În descrierea PR-ului scrie `Closes #<număr-issue>`: la merge, issue-ul se închide automat.

**Regula de aur:** dacă în timp ce repari contorul observi și o greșeală de stil în CSS, **NU** o repara în același PR. Deschide alt branch, alt PR. De ce? Vezi [PR-SI-CODE-REVIEW.md](docs/PR-SI-CODE-REVIEW.md).

---

## Exercițiul 5 — Bonus: comenzi care îți salvează ziua

Fă-le pe un branch de joacă: `git switch -c joaca/prenume-nume`.

| Situația | Comanda | Încearcă |
|---|---|---|
| Ai stricat un fișier și vrei înapoi versiunea din ultimul commit | `git restore <fisier>` | Șterge tot din `style.css`, apoi restaurează-l |
| Ai dat `git add` din greșeală | `git restore --staged <fisier>` | |
| Ai greșit mesajul ultimului commit (încă nu ai dat push) | `git commit --amend` | |
| Trebuie să schimbi urgent branch-ul, dar ai modificări neterminate | `git stash` → ... → `git stash pop` | |
| Vrei să anulezi un commit care e deja pe GitHub | `git revert <hash>` | Creează un commit nou care face opusul |
| Cine a scris rândul ăsta și de ce? | `git blame app.js` | |
| Istoric frumos, ca un arbore | `git log --oneline --graph --all` | |

⚠️ **Nu folosi niciodată** `git push --force` pe `main` sau pe un branch pe care lucrează și alții.
