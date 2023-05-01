module.exports = {
  apps: [
    {
      name: "backend-app",
      script: "./server.js",
      watch: false,
      force: true,
      env: {
        PORT: 5000,
        JWT_SECRET: "bright",
        NODE_ENV: "production",
      },
    },
  ],
};
