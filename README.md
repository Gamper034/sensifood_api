# Sensifood API

Ce projet utilise [NestJS](https://nestjs.com/) et [Prisma](https://www.prisma.io/) pour créer une API.

## Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn
- Docker (pour la base de données)

## Installation

1. Clonez le dépôt :

  ```bash
  git clone https://github.com/votre-utilisateur/sensifood_api.git
  cd sensifood_api
  ```

2. Installez les dépendances :

  ```bash
  npm install
  ```

  ou

  ```bash
  yarn install
  ```

3. La base de données et prisma

- Créer un fichier .env à la racine du projet
- Ajouter la variable -> ```DATABASE_URL="postgresql://anthony:anthony@localhost:5432/sensifood?schema=public"```
- Ajuster dans schema.prisma le type de bdd utilisé

## Configuration de la base de données

1. Assurez-vous que Docker est en cours d'exécution.
2. Démarrez la base de données avec Docker Compose :

  ```bash
  docker-compose up -d
  ```

3. Initialisez Prisma :

  ```bash
  npx prisma migrate dev --name init
  ```

  ou

  ```bash
  yarn prisma migrate dev --name init
  ```

4. Générez le client Prisma :

  ```bash
  npx prisma generate
  ```

  ou

  ```bash
  yarn prisma generate
  ```

## Démarrage du serveur

Pour démarrer le serveur en mode développement :

```bash
npm run start:dev
```

ou

```bash
yarn start:dev
```

## Documentation de l'API

Une fois le serveur démarré, vous pouvez accéder à la documentation de l'API à l'adresse suivante : `http://localhost:3000/api`.

## Contribution

Les contributions sont les bienvenues ! Veuillez soumettre une pull request ou ouvrir une issue pour discuter des changements que vous souhaitez apporter.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.