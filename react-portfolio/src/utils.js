export const getImageUrl = (path) => {
  if(!path) return "";
  return path.startsWith("/")?path :`/assets/${path}`;
};