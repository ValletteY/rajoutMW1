for (const { geometry, properties } of donnees.features) {  //décriptage de chaque features dans le fichier de données
    const el_ecrit = document.createElement('table');
    el_ecrit.textContent=(`${properties.title}   :   ${geometry.coordinates} `);
    menu.appendChild(el_ecrit);
}