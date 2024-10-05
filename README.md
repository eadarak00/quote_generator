# Machine à Citations - Projet de Certification freeCodeCamp

Ce projet fait partie du programme de certification **Développement Front-End Libraries** de **freeCodeCamp**. L'objectif est de créer une application de machine à citations aléatoires conforme aux critères de test fournis par la plateforme.

## Objectif du Projet

L'application doit générer des citations aléatoires au chargement de la page et permettre à l'utilisateur de générer une nouvelle citation à chaque clic. De plus, il est possible de tweeter la citation directement depuis l'application via un lien intégré.

Ce projet fait partie des exigences pour la certification, et doit passer avec succès tous les tests fournis par freeCodeCamp pour être validé.

## Critères de Réussite

Pour réussir ce projet, les exigences suivantes doivent être respectées :

1. Un élément avec l'id `#quote-box` doit contenir la citation.
2. À l'intérieur de `#quote-box`, un élément avec l'id `#text` doit afficher la citation.
3. À l'intérieur de `#quote-box`, un élément avec l'id `#author` doit afficher l'auteur de la citation.
4. Un élément cliquable avec l'id `#new-quote` doit permettre de générer une nouvelle citation.
5. Un élément avec l'id `#tweet-quote` doit être un lien `<a>` qui permet de tweeter la citation courante.
6. La machine à citations doit afficher une citation aléatoire au chargement de la page.
7. Au clic sur `#new-quote`, une nouvelle citation doit être affichée, avec son auteur.
8. Le lien `#tweet-quote` doit inclure une URL valide pour tweeter la citation affichée.

## Technologies Utilisées

- **HTML** pour la structure de la page.
- **CSS** et **Bootstrap** pour la mise en page et le style.
- **JavaScript (ES6)** pour la logique et les fonctionnalités.
- **React** pour la gestion des composants et l'interactivité.
- **freeCodeCamp** pour la suite de tests intégrée.

## Comment Exécuter le Projet

1. Cloner ce dépôt sur votre machine locale :
   ```bash
   git clone https://github.com/eadarak00/quote_generator.git
   ```

2. Ouvrez le fichier `index.html` dans votre navigateur pour exécuter l'application.

3. Activez la suite de tests freeCodeCamp en cliquant sur l'icône correspondante sur la page du projet.

4. Sélectionnez le projet "Random Quote Machine" dans le menu déroulant des tests et lancez les tests.

## Déroulement du Test

Pour valider le projet, suivez ces étapes :

1. **Initialisation** : La page doit afficher une citation et son auteur dès le premier chargement.
2. **Interaction Utilisateur** : Chaque clic sur le bouton **Nouvelle Citation** doit afficher une nouvelle citation et mettre à jour l'auteur.
3. **Lien Twitter** : Le lien **Tweeter** doit permettre de partager la citation courante avec l'auteur sur Twitter.
4. **Conformité des Tests** : Tous les tests fournis par freeCodeCamp doivent passer avec succès pour obtenir la certification.

## API Utilisée

Le projet récupère des citations en utilisant l'API [Ninjas Quotes API](https://api-ninjas.com/api/quotes). Une clé API est nécessaire pour accéder à cette ressource. Remplacez votre clé API personnelle dans le fichier `script.js`.

### Exemple de requête

```javascript
fetch('https://api.api-ninjas.com/v1/quotes?category=inspiration', {
    method: 'GET',
    headers: {
        'X-Api-Key': 'VOTRE_CLE_API'
    }
})
.then(response => response.json())
.then(data => console.log(data));
```

## Structure du Projet

- `index.html` : Structure HTML de la page.
- `style.css` : Fichier CSS pour la personnalisation du style.
- `script.js` : Script JavaScript gérant la logique de génération de citations et la connexion à l'API.
- `README.md` : Ce fichier de documentation.


## Certification

Ce projet fait partie des 5 projets requis pour obtenir la certification **Front-End Development Libraries** de freeCodeCamp. Une fois tous les projets validés, vous pouvez soumettre votre solution sur la plateforme freeCodeCamp pour obtenir votre certification.
