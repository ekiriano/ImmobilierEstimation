module.exports = {(codepostal, ville, surface, nbpieces, nbwc, anconstr, dpe, luminosite, calme, transport, estime)} => {
	return ´
  <!doctype html>
  <html>
  <head>
  <style>
    body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald'
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Oswald'
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
  </style>
  </head>
  <body>

      <p>Recapitutalif de votre estimmation</p>
      <p> codepostal : ${codepostal}</p>
      <p>ville : ${ville}</p>
	  <p>surface  : ${surface}</p>
      <p>nbpieces : ${nbpieces} </p>
      <p>nbwc : ${nbwc}</p>
      <p>anconstr : ${anconstr}</p>
      <p>dpe : ${dpe}</p>
      <p>luminosite : ${luminosite}</p>
      <p>calme : ${calme}</p>
      <p>transport : ${transport}</p>
      <p> estime : ${estime}</p>
      </body>
      </html>

`;

};
