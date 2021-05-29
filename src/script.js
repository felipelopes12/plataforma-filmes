var pergunta = parseInt(prompt("Separamos 5 opções de filmes para você assistir hoje!!!\nQual você gostaria de assitir?\nToy Store - Digite 1\nStar Wars - Digite 2\nInterstellar- Digite 3\nVingadores: Ultimato - Digite 4\nCoringa - Digite 5\nSecretária - Digite 6\nJurassic Park - Digite 7 \nShrek Digite - 8"))



var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNmY1MTdiMDUtYzU4Ny00NWY0LTk2YjctMWU3ZTUxZjg1OTE2XkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"]

if (pergunta == 1) {
  document.write("<h2>Toy Store</h2>")
  document.write("<img src =" + listaFilmes[0] + ">")
} 
else if (pergunta == 2) {
  document.write("<h2>O Star Wars</h2>")
  document.write("<img src =" + listaFilmes[1] + ">")
} 
else if (pergunta == 3) {
  document.write("<h2>Interstellar</h2>")
  document.write("<img src =" + listaFilmes[2] + ">")
} 
else if (pergunta == 4) {
  document.write("<h2>Vingadores: Ultimato</h2>")
  document.write("<img src =" + listaFilmes[3] + ">")
} 
else if (pergunta == 5) {
  document.write("<h2>Coringa</h2>")
  document.write("<img src =" + listaFilmes[4] + ">")
}
  
else if (pergunta == 6) {
  document.write("<h2>Secretária</h2>")
  document.write("<img src =" + listaFilmes[5] + ">") 
}

else if (pergunta == 7) {
  document.write("<h2>Jurassic Park</h2>")
  document.write("<img src =" + listaFilmes[6] + ">") 
}

else if (pergunta == 8) {
  document.write("<h2>Shrek</h2>")
  document.write("<img src =" + listaFilmes[7] + ">") 
}



else {
  alert("Desculpa, no momento só temos esses 8 filmes selecionados para você.")
  
  document.write("<h2>Filmes Recomendados para você:</h2>")
  for (var i = 0; i < listaFilmes.length-1; i++) {
  document.write("<img src =" + listaFilmes[i] + ">")
  }
}



  