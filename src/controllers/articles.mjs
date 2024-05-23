export let articles = []

const getArticlesHandler = (req, res) => {
  res.send(articles)
}

const postArticlesHandler = (req, res) => {
  const { title, content } = req.body

  const newId = articles.length > 0 ? Math.max(...articles.map((u) => u.id)) + 1 : 1

  if (!title || !content) {
    return res.status(400).send('Invalid data. Title and content are required.')
  }
  const newArticle = { id: newId, title, content }
  articles.push(newArticle)
  res.status(201).send(newArticle)
}

const getArticleByIdHandler = (req, res) => {
  const articleId = parseInt(req.params['articleId'])
  const article = articles.find((a) => a.id === articleId)
  if (!article) {
    return res.status(404).send(`Article with id ${articleId} not found`)
  }
  res.send(article)
}

const deleteArticleByIdHandler = (req, res) => {
  const articleId = parseInt(req.params['articleId'])
  const article = articles.find((a) => a.id === articleId)
  if (!article) {
    return res.status(404).send(`Article with id ${articleId} not found`)
  }
  articles = articles.filter((a) => a.id !== articleId)
  res.send(`Article with id ${articleId} deleted`)
}

const putArticleByIdHandler = (req, res) => {
  const articleId = parseInt(req.params['articleId'])
  const { title, content } = req.body
  const articleIndex = articles.findIndex((a) => a.id === articleId)
  if (articleIndex === -1) {
    return res.status(404).send(`Article with id ${articleId} not found`)
  }
  if (!title || !content) {
    return res.status(400).send('Invalid data. Title and content are required.')
  }
  articles[articleIndex] = { id: articleId, title, content }
  res.send(articles[articleIndex])
}

export {
  getArticlesHandler,
  postArticlesHandler,
  getArticleByIdHandler,
  deleteArticleByIdHandler,
  putArticleByIdHandler
}
