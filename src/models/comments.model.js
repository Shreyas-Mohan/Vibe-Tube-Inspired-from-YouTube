import mongoose, {Schema} from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

const commentSchema = new Schema(
   {
      content: {
         type: String,
         required: true
      },
      video: {
         type: Schema.Types.ObjectId,
         ref: 'video',
         required: true
      },
      owner: {
         type: Schema.Types.ObjectId,
         ref: 'user',
         required: true
      }
   },
   {
      timestamps: true
   }
)


commentSchema.plugin(mongooseAggregatePaginate)
export const comment = mongoose.model('comment', commentSchema)