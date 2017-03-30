# servers-list
Start:

```
npm install
```
Po instalacji npm powinien automatycznie przebudować aplikację, później:

```
npm start
```

Zadanie:
Należy	stworzyć	aplikację	do	zarządzania	infrastrukturą serwerową	w	firmie.
Wymagania:
1. Główny	ekran	powinien	zawierać:
• przewijalną	listę	serwerów	z	następującymi	informacjami	(dotyczącymi	serwerów):
◦ Przyjazna	nazwa	serwera	(definiowana	przez	użytkownika)
◦ Typ	serwera:	Spark,	Tomcat,	Cassandra,	Postgress
◦ Stan	serwera:	startuje,	pracuje	poprawnie,	przeciążony,	błąd	krytyczny,	wyłączony
(najlepiej	w	formie	ikonek;	może	być	to	odpowiednia	czcionka,	ale	wówczas	musi	się
automatycznie	ładować)
◦ Przyciski	akcji:	uruchom,	restartuj,	wyłącz	aktywne	w	zależności	od	stanu	serwera
• przyciski	służące	do	modyfikacji	listy	serwerów:	dodaj	(przechodzi	do	ekranu	dodawania
serwera),	modyfikuj	(przechodzi	do	ekranu	modyfikacji	serwera),	usuń	(usuwa	serwer	lub
serwery	po	zaznaczeniu	go/ich	na	liście)
2. Ekran	dodawania	serwera	powinien	zawierać	informacje	o:
• Przyjaznej	nazwie	do	wyświetlenia	na	ekranie	głównym
• Adresie	IP
• Typie	serwera	(wybór	najlepiej	z	listy	rozwijalnej),	musi	być	walidacja
3. Ekran	modyfikacji	zawiera	te	same	informacje	jak	ekran	dodawania,	ale	bez	możliwości
zmiany	typu	serwera.	W	ogólności	zalecane	jest	żeby	to	był	ten	sam	ekran	w	różnych	trybach.
4. Przejście	do	ekranu	dodawania	lub	modyfikacji	zmienia	adres	na	pasku	adresu	(np.
http://host/servers/add i	http://host/servers/modify ).
5. Z	ekranów	modyfikacji	i	dodawania	serwera	musi	być	możliwość	powrotu	do	ekranu	
głównego	za	pomocą	przycisków	„Zapisz”	(zapisuje	zmiany)	i	„Anuluj”	(ignoruje
wprowadzone	modyfikacje).
6. Aplikacja	musi	w	rozsądnym	zakresie	wspierać	różne	rozdzielczości	i	formaty	ekranów;
najmniejsza	wspierana	rozdzielczość	to	1024x768.
7. Dane	do	wyświetlenia	na	ekranie	głównym	należy	pobrać	za	pomocą REST	z	odpowiednio
przygotowanego	testowego	serwera	(mock-a).	Format	JSON	dowolny
