import userService from "../services/userservices.js";


const createUser = async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

const userList = async (req, res, next) => {
  try {
    const user = await userService.userList(req.body);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const userFindById = async (req, res, next) => {
  try {
    const user = await userService.userFindById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
const userFindByIdAndUpdate = async (req, res, next) => {
  try {
    const user = await userService.userFindByIdAndUpdate(req.params.id,req.body);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const UserFindByIdAndDelete = async (req, res, next) => {
  try {
    const user = await userService.UserFindByIdAndDelete(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export default {
  createUser,
  userList,
  userFindById,
  userFindByIdAndUpdate,
  UserFindByIdAndDelete,
};

