export const getUniqueID = (name: string) => {
  return name + '_' + new Date().getTime();
};
