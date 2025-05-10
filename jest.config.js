module.exports = {
  preset: 'ts-jest', // Utilise ts-jest pour gérer TypeScript
  testEnvironment: 'node', // Définit l'environnement de test comme Node.js
  testMatch: ['**/__tests__/**/*.test.ts'], // Localisation des fichiers de test
  moduleFileExtensions: ['ts', 'js'], // Extensions des fichiers à traiter
  collectCoverage: true, // Active la collecte de couverture
  coverageDirectory: 'coverage', // Répertoire pour les rapports de couverture
  setupFiles: ['<rootDir>/jest.setup.js'], // Ajout du fichier de configuration
};
