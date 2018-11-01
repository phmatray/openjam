const isObjectWithValues = obj => obj && Object.keys(obj).length > 0 && obj.constructor === Object;

export default isObjectWithValues;
