/* Gestion des évènements */
document.getElementById("form_inscription").addEventListener('submit', validationFormulaireInscription);
// La saisie du mot de passe : la méthode est appelée lorsqu'un caractère est saisie
// voir https://developer.mozilla.org/fr/docs/Web/Events pour la liste des événements possibles
document.getElementById("mdp1").addEventListener('input', validationDuMotDePasse);


function validationFormulaireInscription()
{
  //alert("Validation du formulaire avant envoi");
  if(document.getElementById("mdp1").value != document.getElementById("mdp2").value )
  {
    alert("Les 2 mots de passe sont différents");
    //console.debug(this);
    //console.debug(event);
    event.preventDefault(); // Annule la propagation de l'événement -> dans notre cas, annulation de l'envoi du formulaire
  }
  if(validationDuMotDePasse() == false)
  {
    alert("Le mot de passe n'est pas conforme aux règles de sécurité de notre site.");
    event.preventDefault();
  }
}

function validationDuMotDePasse()
{
    var mdp = document.getElementById("mdp1").value;
    var nbMajuscules=0, nbMinuscules=0, nbChiffres=0, nbSpeciaux=0;
    for(var i=0 ; i<mdp.length ; i++)
    {
      if(mdp.charAt(i) >= 'A' && mdp.charAt(i) <= 'Z')
      {
        nbMajuscules++;
      }
      else if(mdp.charAt(i) >= 'a' && mdp.charAt(i) <= 'z')
      {
        nbMinuscules++;
      }
      else if(mdp.charAt(i) >= '0' && mdp.charAt(i) <= '9')
      {
        nbChiffres++;
      }
      else
      {
        nbSpeciaux++;
      }
      //console.debug("caractère : " + i + " : " + mdp.charAt(i));
    }
    //console.debug("Nombre de caractères : " + mdp.length);
    //console.debug("Nombre de majuscules : " + nbMajuscules);
    //console.debug("Nombre de minuscules : " + nbMinuscules);
    //console.debug("Nombre de chiffres : " + nbChiffres);
    //console.debug("Nombre de caractères spéciaux : " + nbSpeciaux);

    // Gestion du vert-rouge sur la longueur du mot de passe
    if( (mdp.length >= 8) && document.getElementById("mdp_longueur").classList.contains('rouge') )
    {
      document.getElementById("mdp_longueur").classList.add('vert');
      document.getElementById("mdp_longueur").classList.remove('rouge');
    }
    else if ( (mdp.length < 8) && document.getElementById("mdp_longueur").classList.contains('vert') )
    {
      document.getElementById("mdp_longueur").classList.add('rouge');
      document.getElementById("mdp_longueur").classList.remove('vert');
    }
    // Gestion du vert-rouge sur la le nombre de Majuscules
    if( (nbMajuscules >= 1) && document.getElementById("mdp_majuscule").classList.contains('rouge') )
    {
      document.getElementById("mdp_majuscule").classList.add('vert');
      document.getElementById("mdp_majuscule").classList.remove('rouge');
    }
    else if ( (nbMajuscules == 0) && document.getElementById("mdp_majuscule").classList.contains('vert') )
    {
      document.getElementById("mdp_majuscule").classList.add('rouge');
      document.getElementById("mdp_majuscule").classList.remove('vert');
    }
    // Gestion du vert-rouge sur la le nombre de Minuscules
    if( (nbMinuscules >= 1) && document.getElementById("mdp_minuscule").classList.contains('rouge') )
    {
      document.getElementById("mdp_minuscule").classList.add('vert');
      document.getElementById("mdp_minuscule").classList.remove('rouge');
    }
    else if ( (nbMinuscules == 0) && document.getElementById("mdp_minuscule").classList.contains('vert') )
    {
      document.getElementById("mdp_minuscule").classList.add('rouge');
      document.getElementById("mdp_minuscule").classList.remove('vert');
    }
    // Gestion du vert-rouge sur la le nombre de Chiffres
    if( (nbChiffres >= 1) && document.getElementById("mdp_chiffre").classList.contains('rouge') )
    {
      document.getElementById("mdp_chiffre").classList.add('vert');
      document.getElementById("mdp_chiffre").classList.remove('rouge');
    }
    else if ( (nbChiffres == 0) && document.getElementById("mdp_chiffre").classList.contains('vert') )
    {
      document.getElementById("mdp_chiffre").classList.add('rouge');
      document.getElementById("mdp_chiffre").classList.remove('vert');
    }
    // Gestion du vert-rouge sur la le nombre de caractères spéciaux
    if( (nbSpeciaux >= 1) && document.getElementById("mdp_speciaux").classList.contains('rouge') )
    {
      document.getElementById("mdp_speciaux").classList.add('vert');
      document.getElementById("mdp_speciaux").classList.remove('rouge');
    }
    else if ( (nbChiffres == 0) && document.getElementById("mdp_speciaux").classList.contains('vert') )
    {
      document.getElementById("mdp_speciaux").classList.add('rouge');
      document.getElementById("mdp_speciaux").classList.remove('vert');
    }

    // Si tous les éléments sont présents, cette fonction renvoie la valeur true
    if( (mdp.length >=8) && (nbMajuscules >= 1) && (nbMinuscules >= 1) && (nbChiffres >= 1) && (nbSpeciaux >= 1) )
    {
      return true;
    }
    return false;
}
