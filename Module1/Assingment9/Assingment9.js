'use strict';

const number = Number(prompt("Syötä kokonaisluku:"));

 if (number  < 1 || number > 1000) {
     document.querySelector('#target').innerHTML = "Virhe! Syötä luku väliltä 1-1000...";
 } else {
     for (let i = 0; i < rolls; i++) {
         const roll = Math.floor(Math.random() * 6) + 1;
         sum += roll;
     }

     const result = `Nopanheitot yht: ${rolls}. Lukujen summa yht: ${sum}`;
     console.log(result);
     document.querySelector('#target').innerHTML = result;
 }

 alkuluku = True

 while True:
     luku = input("Syötä luku: ")
     luku = int(luku)
     if luku < 1:
         print("Virhe.")
     else:
         break

 if luku == 1:
     alkuluku = False
 else:
     for x in range(2, luku):  # muuttujaan "x" tallettuu joka ikinen arvo 2 - syötetty arvo
         if luku % x == 0:     # Mikäli yhdenkään jakojäännökseksi tulee "0"  -> alkuluku =(false)
             alkuluku = False
             break
 # for x in range(2, luku) toimii koska se tarkistaa kaikki luvut paitsi viimeisen

 if alkuluku:
     print (str(luku) + " on alkuluku!")
 else:
     print(str(luku) + " ei ole alkuluku.")