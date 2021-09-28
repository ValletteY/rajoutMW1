/* Mise à jour du compteur toutes les secondes */
window.setInterval(mettreAJourLeCompteur,1000);
document.getElementById("nb_jours").addEventListener('click', mettreAJourLeCompteur);




function mettreAJourLeCompteur()
{
  const dateStage = Date.UTC(2021, 12, 1, 9, 0, 0);
  const dateNow = Date.now();
  console.debug("Nombre de millisecondes stage : " + dateStage);
  console.debug("Nombre de millisecondes maintenant : " + dateNow);


  var diff = dateStage - dateNow;
  //console.debug("Nombre de millisecondes : " + diff);
  var diffJours = Math.floor(diff / (1000*60*60*24));
  //console.debug("Nombre de jours : " + diffJours);
  var diffHeures = Math.floor( (diff - (diffJours * 24 * 60 * 60 * 1000)) / (1000 * 60 * 60) );
  //console.debug("Nombre d'heures : " + diffHeures);
  var diffMinutes = Math.floor((diff - (diffJours * 24 * 60 * 60 * 1000) - (diffHeures * 60 * 60 * 1000)) / (1000 * 60))
  //console.debug("Nombre de minutes : " + diffMinutes);
  var diffSecondes = Math.floor((diff - (diffJours * 24 * 60 * 60 * 1000) - (diffHeures * 60 * 60 * 1000) - (diffMinutes * 60 * 1000)) / (1000))
  //console.debug("Nombre de secondes : " + diffSecondes);

  document.getElementById("nb_jours").innerHTML = diffJours+"J";
  document.getElementById("nb_heures").innerHTML = diffHeures+"H";
  document.getElementById("nb_minutes").innerHTML = diffMinutes+"M";
  document.getElementById("nb_secondes").innerHTML = diffSecondes+"S";

}