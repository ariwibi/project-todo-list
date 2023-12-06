export function onDeleteTodo({ data, setData, id }) {
  const finData = data.filter((todo) => todo.id !== id);
  setData(finData);
}
