# 📋 Fițuica de Git

## Modelul mental: cele 4 „locuri”

```
 Working directory  ──git add──▶  Staging area  ──git commit──▶  Repo local  ──git push──▶  GitHub (origin)
 (fișierele tale)                 („coșul” pentru                 (istoricul de          (repo-ul comun)
                                   următorul commit)                pe calculatorul tău)
                    ◀────────────────────────── git pull (= fetch + merge) ──────────────────────────
```

Dacă înțelegi desenul ăsta, înțelegi 80% din Git.

## Zilnic

| Comanda | Ce face |
|---|---|
| `git status` | Unde sunt, ce am modificat. **Rulează-o des, e gratis.** |
| `git switch main` | Treci pe branch-ul `main` |
| `git pull` | Aduce modificările de pe GitHub și le combină cu ale tale |
| `git switch -c nume-branch` | Creează un branch nou și treci pe el |
| `git diff` | Ce am modificat și n-am pus încă în staging |
| `git diff --staged` | Ce va intra în următorul commit |
| `git add <fisier>` | Pune fișierul în staging |
| `git add -p` | Pune în staging bucată cu bucată (te obligă să-ți citești codul) |
| `git commit -m "mesaj"` | Salvează un „snapshot” în istoricul local |
| `git push` | Trimite commit-urile pe GitHub |
| `git log --oneline --graph` | Istoricul, compact |

## Branch-uri

| Comanda | Ce face |
|---|---|
| `git branch` | Branch-urile locale (`*` = cel curent) |
| `git branch -a` | Inclusiv cele de pe remote |
| `git branch -d nume` | Șterge un branch deja integrat |
| `git fetch` | Aduce informații de pe GitHub **fără** să modifice fișierele tale |
| `git merge main` | Aduce `main` în branch-ul curent |
| `git rebase main` | Mută commit-urile tale „deasupra” lui `main` (istoric liniar) |

**Nume bune de branch:** `feature/cautare-dupa-rol`, `fix/contor-gresit`, `docs/readme-instalare`.

## Mesaje de commit bune

- La imperativ, ca o comandă: *„Adaugă butonul de dark mode”*, nu *„am adăugat chestii”*.
- Prima linie sub ~60 de caractere. Dacă e nevoie de detalii: un rând gol, apoi explicația (**de ce**, nu doar ce).
- ❌ `fix`, `update`, `asdf`, `modificari finale v2`
- ✅ `Repară căutarea case-sensitive după nume`

## Când ceva a mers prost

| Problema | Soluția |
|---|---|
| Vreau să renunț la modificările dintr-un fișier | `git restore <fisier>` |
| Am dat `add` greșit | `git restore --staged <fisier>` |
| Greșeală în ultimul commit (fără push) | Corectează, `git add`, apoi `git commit --amend` |
| Trebuie să anulez un commit deja publicat | `git revert <hash>` |
| Am modificări, dar trebuie să schimb branch-ul | `git stash`, apoi `git stash pop` |
| Conflict la merge | Editează fișierul, șterge markerii `<<<<<<<` `=======` `>>>>>>>`, apoi `git add`, `git commit` |
| M-am pierdut complet | `git status` și citește ce scrie. Git îți spune aproape mereu ce să faci. |
| Chiar m-am pierdut complet | `git reflog`: Git ține minte tot ce ai făcut în ultimele ~90 de zile |

## Ce NU face

- ❌ `git push --force` pe `main` sau pe branch-uri comune (dacă trebuie neapărat: `--force-with-lease`, doar pe branch-ul tău)
- ❌ Commit cu parole, chei API, fișiere `.env`. Ce a ajuns pe GitHub trebuie considerat compromis, chiar dacă ștergi ulterior.
- ❌ `git add .` orbește. Uită-te mai întâi la `git status`.
- ❌ Să lucrezi zile întregi fără `git pull`. Cu cât aștepți mai mult, cu atât conflictele sunt mai mari.
