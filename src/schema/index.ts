import { gql } from "apollo-server-express";

const Schema = gql`
  type ToDo {
    id: ID!
    name: String
    description: String
    status: Boolean
  }
  type Mutation {
    addToDo(name: String, description: String, status: Boolean): ToDo,
    changeToDo(name: String, status: Boolean): ToDo
  }
  type Query {
    getAllToDo: [ToDo]
  }
`;

export default Schema;
