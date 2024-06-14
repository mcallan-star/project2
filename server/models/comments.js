const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    commentBody: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',   //a foreign key to the user entity
        required: true
    },
    recipeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe',  //a foreign key to the recipe entity
        required: true
    }
    });

    const Comment = mongoose.model('Comment', commentSchema);

    //Create CRUD functions on 'Comment' model

    //CREATE comment
    async function createComment(commentBody, userId, recipeId) {

        const newComment = await Comment.create({
            commentBody: commentBody,
            userId: userId,
            recipeId: recipeId
        });

        return newComment;  //newComment created
    }

//READ comment
async function getComment(id) {
    return await Comment.findOne({"_id": id});
}

//UPDATE comment
async function updateComment(id, commentBody) {
    const updatedComment = await Comment.updateOne({"_id": id}, {$set: {commentBody: commentBody}});
    return updatedComment;  //given the id, the commentBody can be updated
}

//DELETE comment
async function deleteComment(id) {
    await Comment.deleteOne({"_id": id});
};  //no return value for deletion


module.exports = {
    createComment, getComment, updateComment, deleteComment
};