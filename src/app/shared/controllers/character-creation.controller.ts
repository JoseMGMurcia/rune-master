export const getUniqueID = (name: String) => {
  return name + '_' + new Date().getTime();
};
