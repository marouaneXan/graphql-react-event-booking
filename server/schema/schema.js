const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
} = require("graphql");
//mongoose model
const Event = require("../models/Events");

//Event Type
const EventType = new GraphQLObjectType({
  name: "Event",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
  }),
});

//create RootQuery
const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    //Get all events
    events: {
      type: GraphQLList(EventType),
      resolve(parent, args) {
        return Event.find();
      },
    },
    //Get event by id
    event: {
      type: EventType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Event.findById(args.id);
      },
    },
  },
});

//Create mutation
const mutation = new GraphQLObjectType({
  name: "mutation",
  fields: {
    //Create event
    addEvent: {
      type: EventType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const newEvent = new Event({
          name: args.name,
        });
        return newEvent.save();
      },
    },
    //Delete event
    deleteEvent: {
      type: EventType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Event.findByIdAndDelete(args.id);
      },
    },
    //Update event
    updateEvent: {
      type: EventType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        return Event.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
            },
          },
          { new: true }
        );
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
