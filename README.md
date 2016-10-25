# Retningslinjer

Tenkte det ville være greit å ha retningslinjer for hvordan vi bruker denne repoen. :)

## Sync mot GitHub før du begynner å arbeide

### Hva

Det kan hende noen andre har jobbet med noe som vil være i konflikt med det du har tenkt å jobbe på. Dersom du synkroniserer med serveren på GitHub vil du se om det er potensielle merge conflicts.

### Hvordan?

I GitHub programmet, velg "master" branch og trykk "sync". Dersom det er noe nytt å laste ned kan du oppdatere din branch. Velg din egen branch, og trykk compare med master, og trykk "Update from master".

Dette vil lage en ny commit på din branch dersom det er endringer i master.

Dersom du bruker kommandolinjen:

Først hent inn remote:

    git pull

Gå så til din branch:

    git checkout <branch>

Fusjoner grenen med master:

    git merge master

## Bruk grener/branches når du arbeider

### Hva

Ved å bruke branches kan du arbeide i ro og mak med noe uten å forstyrre andres arbeid eller at andre forstyrrer ditt. Når du er ferdig med arbeidet kan du fusjonere arbeidet ved å bruke "pull request".

### Hvordan

I GitHub for Windows, trykk på "Create new branch" ikonet oppe i høyre hjørne. Gi den ett navn, og pass på at din aktive gren/branch er den du lagde. Ikke lag endringer i master direkte.

Dersom du bruker kommandolinjen kan du bruke `git checkout -b <branch>` for å lage en ny branch, og `git checkout <branch>` for å gå til en eksisterene. Husk å synkronisere før du opptar arbeidet dersom du bruker en gammel branch!

Det kan være en god idé å lage nye branches hver gang du jobber med noe nytt.

Du kan også fint fortsette å arbeide i en branch *etter* at du lagde en pull request. Nye commits vil automatisk gå til den nye pull requesten.

## Bruk "Pull requests", ikke push direkte til master

### Hva

Du kan tenke på "pull request" som en anmodning om å fusjonere din gren med hovedgrenen. Husk! Du kan fortsatt jobbe på din gren etter at du har laget en pull request, nye commits vil automatisk gå til pull requesten.

### Hvordan

Alltid arbeid i en gren, ikke commit til master. Når du er ferdig, lag en pull request ved å trykke oppe til høyre hjørne.

Det kan hende det du har arbeidet på er i konflikt med noen annens arbeid, å løse merge conflicts er noe vi vil bli vant med å gjøre.

## Ikke bruk `git rebase` på publiserte arbeider

### Hva

`git rebase` er et triks du kan bruke for å endre på historien og slette commits. Kanskje du lagde 5 små commits som du så ønsker å blande til 1? Gjorde du en pinlig feil som du ønsker å fjerne all spor av? `git rebase` kan fikse dette.

Men den kan og vil forårsake problemer dersom du ikke vet hva du gjør, og den skal aldri brukes dersom du endrer på commits som er publisert til omverdenen. Dersom noen andre jobber på commits som senere blir slettet av rebase vil man ha et hav av problemer og konflikter å løse opp i.

Her er tilfeller hvor det kan være greit å bruke `git rebase`:

* Du bruker det på commits som aldri har blitt publisert til serveren på GitHub.
* Du bruker det på din egen branch, som du er sikker på at andre ikke rører.

### Hvordan

Du må bruke kommandolinjen til å gjøre dette. Husk at du må bruke `git push --force` etter en rebase.

## Jeg vil angre på noe jeg gjorde tidligere

Her må man trå forsiktig. Du må stille deg flere spørsmål. Er endringene publisert, eller er de bare lokale? Vil du ta vare på noen av endringene? Det beste er å unngå rebase og gjøre en offentlig reversering. Se denne linken for mer informasjon: https://github.com/blog/2019-how-to-undo-almost-anything-with-git

## Hjelp! Jeg får "merge conflicts"!

Åpne opp filen som har merge conflicts i en tekstredigeringsprogram og løs konflikten. NB! Som regel må du prøve å finne en løsning som ikke fjerner andres arbeid!

Etter det er gjort, lagre endringene i en commit og publiser/sync.


## Ressurser

Her er noen ressurser om å bruke Git:

https://github.com/blog/2019-how-to-undo-almost-anything-with-git  
http://rogerdudler.github.io/git-guide/  
http://marklodato.github.io/visual-git-guide/index-en.html  
