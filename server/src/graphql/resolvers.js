import ExampleModel from '../models/exampleModel';

const resolvers = {
  Query: {
    getExamples: async () => {
      try {
        return await ExampleModel.find();
      } catch (error) {
        throw new Error('Error fetching examples');
      }
    },
    getExample: async (_, { id }) => {
      try {
        return await ExampleModel.findById(id);
      } catch (error) {
        throw new Error('Error fetching example');
      }
    },
  },
  Mutation: {
    createExample: async (_, { input }) => {
      try {
        const newExample = new ExampleModel(input);
        return await newExample.save();
      } catch (error) {
        throw new Error('Error creating example');
      }
    },
    updateExample: async (_, { id, input }) => {
      try {
        return await ExampleModel.findByIdAndUpdate(id, input, { new: true });
      } catch (error) {
        throw new Error('Error updating example');
      }
    },
    deleteExample: async (_, { id }) => {
      try {
        return await ExampleModel.findByIdAndRemove(id);
      } catch (error) {
        throw new Error('Error deleting example');
      }
    },
  },
};

export default resolvers;