const getUsersHandler = (req, res) => {
  res.send('Get users route')
}
const postUsersHandler = (req, res) => {
  res.send('Post users route')
}

const getUserByIdHandler = (req, res) => {
  const userId = req.params['userId']
  res.send(`Get user by Id route: ${userId}`)
}
const deleteUserByIdHandler = (req, res) => {
  const userId = req.params['userId']
  res.send(`Delete user by Id route: ${userId}`)
}
const putUserByIdHandler = (req, res) => {
  const userId = req.params['userId']
  res.send(`Put user by Id route: ${userId}`)
}

export { getUsersHandler, postUsersHandler, getUserByIdHandler, deleteUserByIdHandler, putUserByIdHandler }
