import http from 'node:http'

var PORT = 3000
let startedAt = new Date()

function sendJson(res, status, data, extra) {
    res.writeHead(status, {'Content-Type': 'application/json; charset=utf-8'})
    res.end(JSON.stringify(data))
}

const server = http.createServer((req, res) => {
  if (req.method == 'GET' && req.url == '/api/health') {
    sendJson(res, 200, {status: 'ok', uptime: Math.round(process.uptime()), startedAt})
  } else {
    let message = 'Ресурс не знайдено'
    sendJson(res, 404, {error: message})
  }
})

server.listen(PORT, () => console.log(`Сервер запущено: http://localhost:${PORT}/api/health`))
