export const includes = (
  collection: Array<string> | Array<Number>,
  target: string | Number,
) => {
  for (let i = 0; i <= collection.length; i += 1) {
    if (collection[i] === target) {
      return true;
    }
  }

  return false;
};

export const sanitizeString = (
  str: string,
) => String(str)
  .replace(/[^a-z0-9áéíóúñü \.,_-]/gim, '')
  .trim()
  .toLowerCase();

export const isKeywordExists = (
  str: string,
  keyword: string,
) => {
  const tokens = String(str).split(' ');

  for (let i = 0; i < tokens.length; i += 1) {
    if (sanitizeString(str).includes(keyword)) {
      return {
        result: true,
        meta: {

        },
      };
    }
  }

  return {
    result: false,
    __meta: null,
  };
};

export default {
  includes,
  sanitizeString,
  isKeywordExists,
};
