export function generateDate() {
  const currentDate = new Date();

  const day = currentDate.toLocaleDateString("id-ID", { weekday: "long" });
  const date = currentDate.getDate();
  const month = currentDate.toLocaleDateString("id-ID", { month: "long" });
  const year = currentDate.getFullYear();

  return `${day}/${date}/${month}/${year}`;
}
