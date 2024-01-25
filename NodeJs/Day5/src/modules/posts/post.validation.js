import Joi from "joi";

const postShema = Joi.object({
    title: Joi.string().min(3).required(),
    content: Joi.string().min(10).required(),
    userID: Joi.string().hex().min(24).max(24)
})

export default postShema;