const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return `Health Check ${new Date()}`;
    }},  
];

module.exports = routes;