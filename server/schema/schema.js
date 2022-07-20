const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLSchema,
    GraphQLNonNull
}=require('graphql')
//mongoose model
const Event = require('../models/Events')