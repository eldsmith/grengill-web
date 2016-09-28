# VEF2A#
#####Friðberg Reynir Traustason#####
----

##Lýsing##
Verkefnið er keyrt með Node og Express í bakendanum og hýsing er á Heroku.

Eins og er þá er þetta útfærsla af video seríu frá Scotch [sem finnst hér](https://school.scotch.io/getting-started-with-nodejs)
sem ég notaði til að koma mér í gang fyrir Node, ætlaði að tweaka þetta og nota Youtube API í staðinn fyrir Twitter en það verður að bíða.

Ég býst við því að þetta verkefni verði einskonar minimalistic Youtube playlist maker svæði, þar sem hægt er að leita og bæta við vidjóum í playlista. Síðan mögulega mun ég setja upp [discord](http://discord.gg) bot sem mun þá spila þessa playlista á discord serverum sem félagarnir hafa stjórn yfir.

Veit ekki hvort ég mun nenna að setja upp full on db en ef það gerist þá verður mongoDB fyrir valinu, annars nota ég bara áfram lokijs.

##Staðan eftir Verkefni 2##
Hægt er að leita að hlutum á twitter og sjá leitir sem þú hefur áður gert á '/'
Einnig er 'api/results' þar sem hægt er að fá json aftur og er það notað fyrir ajax á '/result' síðuni

Planið var að vinna verkefnið á scotch.io og fara svo að vinna að minni eigin útfærslu en það tókst ekki. Til að sýna samt að ég hef fullan skilning á öllu því sem ég gerði bætti ég við slatta af commentum þar sem ég er að útsḱýra hvað er að gerast í Node.

### Leiðbeiningar ###

* Til að skoða verkefnið þá er því hýst á heroku hér: https://fridberg-vef2a.herokuapp.com/
* Annars til að runna því local þá ætti ekki að þurfa gera meira en bara `npm install` og keyra upp main.js á node og setja upp .env breytur