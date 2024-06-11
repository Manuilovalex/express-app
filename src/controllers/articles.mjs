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
    res.status(200).render('articles/articles', { articles: articlesList, theme: 'default' })
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
    res.status(200).render('articles/article', { article, theme: 'default' })
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

export const createArticles = async (req, res, next) => {
  try {
    const db = await connectDB()
    const articles = db.collection('articles')
    const result = await articles.insertMany(req.body)
    res.status(201).send(`Articles created with ids ${result.insertedIds}`)
  } catch (error) {
    next(error)
  }
}

export const updateArticles = async (req, res, next) => {
  try {
    const db = await connectDB()
    const articles = db.collection('articles')
    const result = await articles.updateMany(
      {
        title: "Article Title" 
      },
      { $set: req.body }
    )
    res.status(200).send(`Updated ${result.modifiedCount} articles`)
  } catch (error) {
    next(error)
  }
}

export const replaceArticle = async (req, res, next) => {
  try {
    const db = await connectDB()
    const articles = db.collection('articles')
    const result = await articles.replaceOne(
      {
        title: 'Article Title'
      },
      req.body
    )
    res.status(200).send(`Replaced ${result.modifiedCount} articles`)
  } catch (error) {
    next(error)
  }
}

export const deleteArticles = async (req, res, next) => {
  try {
    const db = await connectDB()
    const articles = db.collection('articles')
    const result = await articles.deleteMany({
      createdAt: {
        $gte: new Date(new Date().setHours(0, 0, 0, 0)),
        $lt: new Date(new Date().setHours(23, 59, 59, 999))
      }
    })
    res.status(200).send(`Deleted ${result.deletedCount} articles`)
  } catch (error) {
    next(error)
  }
}
