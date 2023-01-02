import { ToDoDB } from "../database";

const Resolvers = {
  Query: {
    getAllToDo: () => ToDoDB,
  },
  Mutation: {
    addToDo: (_: any, args: any) => {
        const newToDo = {
            id: ToDoDB.length + 1,
            name: args.name,
            description: args.description,
            status: args.status
        };

        ToDoDB.push(newToDo);

        return newToDo;
    },

    changeToDo: (_: any, args: any) => {
        const ToDo = ToDoDB.find(element => element.name === args.name);

        if (ToDo) ToDo.status = args.status;
        
        return ToDo;
    }
  }
};
export default Resolvers;