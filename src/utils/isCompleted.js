export function onCompleteHandler({ data, setData, id }) {
  const updateData = data.map((itemData) => {
    if (itemData.id === id) {
      const check = itemData.isComplete === false ? true : false;
      return {
        ...itemData,
        isComplete: check,
      };
    }
    return itemData;
  });
  setData(updateData);
}
