# Progetto_Test_Cypress
Progetto per testare il sito di riferimento con Cypress.io

--------------------------------------------------------------------------------------------------------------------------------------

In questa breve guida viene indicato come scaricare sul proprio pc il progetto Cypress implementato per fare test sulla piattaforma di staging.

1. Posizionarsi con il prompt dei comandi sulla directory sulla quale si vuole scaricare il progetto:

$ cd [...]


2. Scaricare da github.com il progetto (assicurarsi di avere le credenziali github per poter scaricare il progetto):

$ git clone https://github.com/Caul114/Progetto_Test_Cypress.git


3. Posizionarsi all'interno del progetto scaricato:

$ cd Progetto_Test_Cypress\


4. Lanciare per la prima volta il progetto (occorre attendere che vengano create le dipendenze e che una volta terminate le verifiche si apra la finestra di lavoro di Cypress)

$ npx cypress open


5. Per scaricare gli eventuali aggiornamenti che vengono inseriti giorno per giorno:

$ git pull


-------------------------------------------------------------------------------------------------

Le sezioni che si possono provare in questo momento (basta un click dalla finestra di Cypress):

..\Progetto_Test_Cypress\cypress\integration\Test sul Sito\TestPlan1\4. Navigation\Homepage_DataTest_Staging_Desktop.js
..\Progetto_Test_Cypress\cypress\integration\Test sul Sito\TestPlan1\4. Navigation\Homepage_DataTest_Staging_Mobile.js
..\Progetto_Test_Cypress\cypress\integration\Test sul Sito\TestPlan2\2.1 Registrazione Buyer\Prova_Mobile.js
