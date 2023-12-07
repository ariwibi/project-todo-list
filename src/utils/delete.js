export function onDeleteTodo({ data, setData, id }) {
  console.log(data);
  const finData = data.filter((todo) => todo.id !== id);
  setData(finData);
}
