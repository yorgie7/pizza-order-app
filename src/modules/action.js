const Types = {
  ADD_ITEM: "ADD_ITEM",
  DELETE_ITEM: "DELETE_ITEM"
};
// actions
const addItem = task => ({
  type: Types.ADD_ITEM,
  payload: task
});

const deleteItem = id => ({
  type: Types.DELETE_ITEM,
  payload: id
});

export default {
  addItem,
  deleteItem,
  Types
};