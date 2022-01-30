const path = "/users/download/index.html"

const isHtml = (path) => !!(path.slice(-5) === '.html')

console.log(isHtml(path))