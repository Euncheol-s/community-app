const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:8080',
            changeOrigin: true,
        })
    );
};
//프론트엔드에서 '/api'로 요청을 보내면 백엔드인 8080포트로 요청이 도착하게 작동하는 코드