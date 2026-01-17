//Az oldal betöltésekor minden infót elrejtünk.
function mindenszolgaltatasinfoelrejtese()
{
  // alert("A weboldal fejlesztés alatt áll!");
  //Szolgáltatások láthatósága.
  document.getElementById("reszponzivweboldalid").style.display = "none";
  document.getElementById("desktopappid").style.display = "none";
  document.getElementById("informatikainfoid").style.display = "none";
  //Elérhetőségek láthatósága.
  //document.getElementById("zsolaelerhetosegdivid").style.display = "none";
}
//Zsola elérhetőségének megjelenítése!
function zsolaelerhetosegmegjelenitese()
{
  document.getElementById("zsolaelerhetosegdivid").style.display = "block";
}

// Reszponzív weboldal infójának megjelenítése, a többi elrejtése.
function reszponzivweboldalinfomegjelenitese()
{
  document.getElementById("reszponzivweboldalid").style.display = "block";
  document.getElementById("desktopappid").style.display = "none";
  document.getElementById("informatikainfoid").style.display = "none";
}
// Desktop app infójának megjelenítése, a többi elrejtése.
function desktopappinfomegjelenitese()
{
  document.getElementById("reszponzivweboldalid").style.display = "none";
  document.getElementById("desktopappid").style.display = "block";
  document.getElementById("informatikainfoid").style.display = "none";
}
// Informatikai oktatás infójának megjelenítése, a többi elrejtése.
function informatikaioktatasinfomegjelenitese()
{
  document.getElementById("reszponzivweboldalid").style.display = "none";
  document.getElementById("desktopappid").style.display = "none";
  document.getElementById("informatikainfoid").style.display = "block";
}