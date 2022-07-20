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

//Event Type
const EventType=new GraphQLObjectType({
    name:'Event',
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString}
    })
})