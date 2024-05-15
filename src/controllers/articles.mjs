const getArticlesHandler = (req, res) => {
  res.send('Get articles route')
}
const postArticlesHandler = (req, res) => {
  res.send('Post articles route')
}

const getArticleByIdHandler = (req, res) => {
  const articleId = req.params['articleId']
  res.send(`Get article by Id route: ${articleId}`)
}
const deleteArticleByIdHandler = (req, res) => {
  const articleId = req.params['articleId']
  res.send(`Delete article by Id route: ${articleId}`)
}
const putArticleByIdHandler = (req, res) => {
  const articleId = req.params['articleId']
  res.send(`Put article by Id route: ${articleId}`)
}

export {
  getArticlesHandler,
  postArticlesHandler,
  getArticleByIdHandler,
  deleteArticleByIdHandler,
  putArticleByIdHandler
}
