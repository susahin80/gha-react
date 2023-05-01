module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/susahin80/gha-react",
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      "@semantic-release/release-notes-generator",
      "@semantic-release/npm",
      "@semantic-release/github",
    ],
  ],
};
