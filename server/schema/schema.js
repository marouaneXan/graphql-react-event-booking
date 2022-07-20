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

//create RootQuery
const RootQuery=new GraphQLObjectType({
    name:RootQuery,
    fields:{
        //Get all events
        events:{
            type:GraphQLList(EventType),
            resolve(parent,args){
                return ["Romantic coocking", "Sailing", "All night Coding"]
            }
        },
        //Get event by id
        event:{
            type:EventType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                return Event.findById(args.id)
            }
        }
    }
})