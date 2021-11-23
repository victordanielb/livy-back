module.exports = {
  dialect: 'postgres',
  host: 'ec2-3-142-150-245.us-east-2.compute.amazonaws.com',
  username: 'docker',
  password: 'docker',
  database: 'sqlnode',
  define: {
    timestamp: true, // para created_at e updated_at
    underscored: true,
  },
};
