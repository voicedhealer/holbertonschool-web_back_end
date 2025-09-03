/**
 * Module de gestion du système de fichiers Node.js
 * Utilisé pour lire des fichiers de façon synchrone
 */
const fs = require('fs');

/**
 * Fonction pour compter et afficher les étudiants par domaine d'étude
 * à partir d'un fichier CSV
 * 
 * @param {string} path - Chemin vers le fichier CSV contenant les données des étudiants
 * @throws {Error} Lance une erreur si le fichier ne peut pas être lu
 */
function countStudents(path) {
  let file;
  
  // Tentative de lecture synchrone du fichier
  try {
    // fs.readFileSync() lit le fichier entier de façon synchrone (bloquante)
    // 'utf-8' spécifie l'encodage pour retourner une string au lieu d'un Buffer
    file = fs.readFileSync(path, 'utf-8');
  } catch (err) {
    // Si la lecture échoue (fichier inexistant, permissions, etc.)
    // Lance une erreur standardisée
    throw new Error('Cannot load the database');
  }

  // Traitement des données du fichier CSV
  // trim() supprime les espaces en début/fin
  // split('\n') divise le contenu en lignes (CORRECTION: devrait être '\n' et non '\\n')
  const lines = file.trim().split('\n'); // CORRIGÉ: un seul backslash
  
  // slice(1) supprime la première ligne (header du CSV)
  // filter() enlève les lignes vides après trim()
  const students = lines.slice(1).filter((line) => line.trim() !== '');

  // Affichage du nombre total d'étudiants
  console.log(`Number of students: ${students.length}`);

  // Objet pour regrouper les étudiants par domaine d'étude
  const groups = {};

  // Parcours de chaque ligne d'étudiant
  for (const line of students) {
    // Division de la ligne CSV par les virgules
    const parts = line.split(',');
    
    // Extraction des données (indices fixes basés sur la structure CSV)
    const firstname = parts[0];  // Première colonne : prénom
    const field = parts[3];      // Quatrième colonne : domaine d'étude

    // Initialisation du groupe si il n'existe pas encore
    if (!groups[field]) {
      groups[field] = [];
    }
    
    // Ajout du prénom dans le groupe correspondant
    groups[field].push(firstname);
  }

  // Affichage des statistiques par domaine d'étude
  for (const field in groups) {
    // Vérification que la propriété appartient à l'objet (bonne pratique)
    if (Object.prototype.hasOwnProperty.call(groups, field)) {
      // Création de la liste des prénoms séparés par des virgules
      const list = groups[field].join(', ');
      
      // Affichage du format requis : "Number of students in FIELD: X. List: names"
      console.log(
        `Number of students in ${field}: ${groups[field].length}. List: ${list}`,
      );
    }
  }
}

// Export de la fonction pour utilisation dans d'autres modules
module.exports = countStudents;
