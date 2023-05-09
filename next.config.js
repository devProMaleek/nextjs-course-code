const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'devProMaleek',
        mongodb_password: 'devProMaleek07',
        mongodb_clusterName: 'devpromaleek-cluster',
        mongodb_database: 'blog_site',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'devProMaleek',
      mongodb_password: 'devProMaleek07',
      mongodb_clusterName: 'devpromaleek-cluster',
      mongodb_database: 'blog_site',
    },
  };
};
