export let users = []

const getUsersHandler = (req, res) => {
  res.status(200).send(users)
}

const postUsersHandler = (req, res) => {
  const { username, email } = req.body

  const newId = users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1

  if (!username || !email) {
    return res.status(400).send('Invalid data. Username and email are required.')
  }
  const newUser = { id: newId, username, email }
  users.push(newUser)
  res.status(201).send(newUser)
}

const getUserByIdHandler = (req, res) => {
  const userId = parseInt(req.params['userId'])
  const user = users.find((u) => u.id === userId)
  if (!user) {
    return res.status(404).send(`User with id ${userId} not found`)
  }
  res.status(200).send(user)
}

const deleteUserByIdHandler = (req, res) => {
  const userId = parseInt(req.params['userId'])
  const userIndex = users.findIndex((u) => u.id === userId)
  if (userIndex === -1) {
    return res.status(404).send(`User with id ${userId} not found`)
  }
  users.splice(userIndex, 1)
  res.status(200).send(`User with id ${userId} deleted`)
}

const putUserByIdHandler = (req, res) => {
  const userId = parseInt(req.params['userId'])
  const { username, email } = req.body
  const userIndex = users.findIndex((u) => u.id === userId)
  if (userIndex === -1) {
    return res.status(404).send(`User with id ${userId} not found`)
  }
  if (!username || !email) {
    return res.status(400).send('Invalid data. Username and email are required.')
  }
  users[userIndex] = { id: userId, username, email }
  res.status(200).send(users[userIndex])
}

export { getUsersHandler, postUsersHandler, getUserByIdHandler, deleteUserByIdHandler, putUserByIdHandler }
