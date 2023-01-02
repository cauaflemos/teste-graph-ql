Comando para rodar: yarn dev || npm run dev
Operation usada para testar : 
query {
  #get all ToDos
  getAllToDo {
    id,
    name,
    description,
    status
  } 
}

mutation($name: String, $description: String, $status: Boolean) {
  addToDo(name:"Lavar Louça", description: "até as 12h", status: true) {
    id
    name
    description
    status
  }
}

mutation($name: String, $status: Boolean) {
  changeToDo(name: "Lavar Louça", status: false) {
    id
    name
    description
    status
  }
}