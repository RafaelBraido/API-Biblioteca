import User from "../models/User.js";

const createUser = async (data) => {
  const { nome, email, telefone, senha, idade } = data;

  if (!nome || !email || !telefone || !senha || idade === undefined) {
    const error = new Error("Nome, email, telefone, senha e idade são obrigatórios");
    error.statusCode = 400;
    throw error;
  }


  const userExists = await User.findOne({ email });

  if (userExists) {
    const error = new Error("Já existe um usuário com esse email");
    error.statusCode = 400;
    throw error;
  }

  return User.create({ nome, email, telefone, senha, idade });
};

const userList = async (data) => {
  const users = await User.find(data);
  return users;
};
const userFindById = async (id) => {
  const user = await User.findById(id);
  return user;
};
const userFindByIdAndUpdate = async (id) => {
  const user = await User.findByIdAndUpdate(id);
  return user;
};

const UserFindByIdAndDelete = async (id) => {
  const user = await User.findByIdAndDelete(id);
  return user;
}

export default {
  createUser,
  userList,
  userFindById,
  userFindByIdAndUpdate,
  UserFindByIdAndDelete,

};