const removeAllWhitespace = str => str.replace(/[^A-Za-z]/g, '');

const clean = str => removeAllWhitespace(str).toLowerCase();

const generateHandle = (firstname, lastname) => `${clean(firstname)}-${clean(lastname)}`;

export default generateHandle;
