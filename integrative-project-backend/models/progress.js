const mongoose = require('mongoose')

const progressSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    gameId: {
      type: String,
      required: true,
    },
    chapterSlug: {
      type: String,
      required: true,
    },
    completedObjectives: {
      type: [Number],
      default: [],
    },
    chapterCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
)

progressSchema.index({ userId: 1, gameId: 1, chapterSlug: 1 }, { unique: true })

module.exports = mongoose.model('Progress', progressSchema)
