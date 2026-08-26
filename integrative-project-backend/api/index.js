let handler;

try {
  const app = require('../app');
  handler = (req, res) => app(req, res);
} catch (error) {
  console.error('Failed to load API:', error);
  handler = (req, res) => {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end(JSON.stringify({ message: error.message || 'API failed to start' }));
  };
}

module.exports = handler;
