# 🔍 Pull Requests și Code Review

## Ce e un Pull Request (PR)?

Un PR e o **cerere**: *„Am făcut modificările astea pe branch-ul meu. Vă rog să vă uitați peste ele și, dacă sunt ok, să le integrăm în `main`.”*

Un PR nu e doar un buton de merge. E un **loc de discuție**: acolo se lasă comentarii, se rulează testele automate (vezi tab-ul *Checks*: la noi rulează `scripts/valideaza.js`) și rămâne pentru totdeauna răspunsul la întrebarea *„de ce e codul așa?”*.

## De ce PR-uri multe și MICI?

La noi în echipă preferăm **multe PR-uri mici** în locul unuia mare. Motivele:

| PR mic (≈ 50–200 linii) | PR uriaș (2000 de linii) |
|---|---|
| Review-ul durează 10 minute | Review-ul durează o zi... sau nu se face deloc |
| Reviewer-ul chiar înțelege ce citește | *„LGTM 👍”*: nimeni n-a citit tot, toată lumea speră că e bine |
| Bug-urile se văd ușor | Bug-urile se ascund printre 40 de fișiere |
| Conflicte rare și mici | Conflicte uriașe, pentru că `main` a mers mult înainte |
| Dacă strică ceva, `git revert` pe o singură schimbare | Revert-ul ia cu el și lucrurile bune |
| Feedback rapid: afli devreme că ai greșit direcția | Afli după 2 săptămâni de muncă că trebuia altfel |
| Istoric clar: fiecare commit din `main` are un scop | *„Diverse modificări”* 🤷 |

**Regula practică:** dacă descrierea PR-ului tău conține cuvântul **„și”** („Adaugă dark mode **și** repară căutarea **și** schimbă fontul”), probabil sunt 3 PR-uri.

> Glumă veche, dar adevărată: *„10 linii de cod = 10 comentarii la review. 500 de linii de cod = «arată bine»”.*

## Ce e Code Review-ul?

Code review = un coleg citește codul tău **înainte** să ajungă în `main`. Nu e un examen și nici o critică la adresa ta. Scopul e:

1. **Să prindă bug-uri** mai devreme, când e ieftin să le reparăm.
2. **Să răspândească cunoștințele:** cel puțin încă un om știe cum funcționează bucata asta de cod.
3. **Să păstreze codul consecvent** (stil, convenții, arhitectură).
4. **Să învățăm unii de la alții**, în ambele direcții. Un intern care face review unui senior învață enorm și, deseori, găsește lucruri reale.

### Când ești AUTORUL PR-ului

- ✅ Citește-ți singur diff-ul pe GitHub înainte să ceri review. O să găsești singur jumătate din probleme.
- ✅ Completează descrierea: **ce**, **de ce**, **cum ai testat**. Pune screenshot dacă e ceva vizual.
- ✅ Răspunde la fiecare comentariu, fie cu o modificare, fie cu o explicație.
- ✅ Nu lua comentariile personal. Ele sunt despre cod, nu despre tine.
- ❌ Nu da *Resolve conversation* la comentariile altora fără să răspunzi.

### Când ești REVIEWER

- ✅ Comentează **codul, nu persoana**: *„funcția asta ar putea...”*, nu *„tu ai greșit...”*.
- ✅ Pune **întrebări** în loc de ordine: *„Ce se întâmplă dacă lista e goală?”*
- ✅ Spune **de ce**: *„Aș folosi `const` aici, pentru că variabila nu se reasignează și e mai clar pentru cine citește.”*
- ✅ Marchează ce e opțional: prefixul **`nit:`** (de la *nitpick*) = *„detaliu mic, nu blochează PR-ul”*.
- ✅ Laudă ce e bine făcut! *„Frumoasă soluția cu filter, n-o știam.”*
- ✅ Folosește **Suggest changes** pentru corecturi mici, ca autorul să le aplice dintr-un click.
- ❌ Nu da *Approve* fără să fi citit. Approve-ul tău înseamnă *„și eu răspund de codul ăsta”*.

### Exemple de comentarii

| ❌ Nu așa | ✅ Ci așa |
|---|---|
| „E greșit.” | „Cred că aici contorul o să arate cu unu mai puțin: `lista.length - 1`. E intenționat?” |
| „De ce ai făcut așa??” | „Mă ajuți să înțeleg de ce ai ales `forEach` în loc de `map`? Poate îmi scapă ceva.” |
| „Codul ăsta e urât.” | „nit: aș redenumi `x` în `persoana`, ca să fie mai ușor de citit.” |
| „LGTM” (fără să citești) | „Am testat local căutarea cu «ANA» și «ana», merge în ambele cazuri. Approve ✅” |

### Ce verifici la un review (checklist)

- [ ] Face PR-ul ce spune descrierea? Doar atât?
- [ ] Funcționează? (Pentru lucruri mici: `gh pr checkout <număr>` și testează local.)
- [ ] Cazuri limită: listă goală, text cu majuscule, diacritice, câmpuri lipsă?
- [ ] Nume clare pentru variabile și funcții?
- [ ] A rămas cod de debug (`console.log`) sau cod comentat?
- [ ] Trec verificările automate (tab-ul *Checks* e verde)?

## Ciclul complet, pe scurt

```
issue ─▶ branch ─▶ commit-uri ─▶ push ─▶ PR ─▶ review ─▶ modificări ─▶ approve ─▶ merge ─▶ șterge branch-ul
                                                  ▲            │
                                                  └────────────┘   (de câte ori e nevoie, e normal!)
```
