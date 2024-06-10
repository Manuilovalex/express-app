import mongoose from 'mongoose'
import { CONFIG } from '../config.mjs'

const connectDB = async () => {
  try {
    await mongoose.connect(CONFIG.URI)
    console.log('MongoDB Connected')
  } catch (error) {
    console.error('MongoDB connection error:', error.message)
    process.exit(1) // Exit process with failure
  }
}

export default connectDB
