import _ from './helper';
import { IOptions } from './interfaces';

const search = (
  keyword?: string,
  collection: Array<object> = [],
  options?: IOptions,
) => (new Promise((resolve, reject) => {
  try {
    if (
      keyword
      && collection.length
    ) {
      const results = [];
      const { columns = [] } = options || {};

      const sanitizedKeyword = _.sanitizeString(keyword);

      for (let i = 0; i < collection.length; i += 1) {
        const item : any = collection[i];
        const keys : Array<string> = Object.keys(item);

        for (let j = 0; j < keys.length; j += 1) {
          const key = keys[j];
          const valid = columns.length
            ? _.includes(columns, key)
            : true;

          if (
            valid === true
            && typeof (item[key]) === 'string'
          ) {
            const { result, meta } = _.isKeywordExists(item[key], sanitizedKeyword);

            if (result === true) {
              item['__meta'] = meta;
              results.push(item);
              break;
            }
          }
        }
      }

      resolve(results);
    }

    resolve(collection);
  } catch (err) {
    reject(err);
  }
}));

export default search;
