import { ObjectId } from 'mongodb'
import { connectDB } from '../config/mongoConfig.mjs'

export const createArticle = async (req, res, next) => {
  try {
    const db = await connectDB()
    const articles = db.collection('articles')
    const result = await articles.insertOne(req.body)
    res.status(201).send(`Article created with id ${result.insertedId}`)
  } catch (error) {
    next(error)
  }
}

export const getArticles = async (req, res, next) => {
  try {
    const db = await connectDB()
    const articles = db.collection('articles')
    const articlesList = await articles.find({}).toArray()
    res.status(200).json(articlesList)
  } catch (error) {
    next(error)
  }
}

export const getArticle = async (req, res, next) => {
  try {
    const db = await connectDB()
    const articles = db.collection('articles')
    const article = await articles.findOne({ _id: new ObjectId(req.params.id) })
    if (!article) {
      return res.status(404).send('Article not found')
    }
    res.status(200).json(article)
  } catch (error) {
    next(error)
  }
}

export const deleteArticle = async (req, res, next) => {
  try {
    const db = await connectDB()
    const articles = db.collection('articles')
    const result = await articles.deleteOne({ _id: new ObjectId(req.params.id) })

    if (result.deletedCount === 0) {
      return res.status(404).send('Article not found')
    }
    res.status(200).send(`Article with id ${req.params.id} deleted`)
  } catch (error) {
    next(error)
  }
}

export const updateArticle = async (req, res, next) => {
  try {
    const db = await connectDB()
    const articles = db.collection('articles')
    const result = await articles.updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body })
    if (result.matchedCount === 0) {
      return res.status(404).send('Article not found')
    }
    res.status(200).send(`Article with id ${req.params.id} updated`)
  } catch (error) {
    next(error)
  }
}
