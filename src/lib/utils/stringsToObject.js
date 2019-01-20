// @flow

type Options = { prefix: string };
type StringsToObject = (string[], Options) => any;

const stringsToObject: StringsToObject = (strings, options) => {
  type Key = string;
  type Value = string;
  type KeyValue = { key: Key, value: Value };

  type ToValue = Key => Value;
  type ToKeyValue = Key => KeyValue;
  type ToKeyValues = (Key[]) => KeyValue[];
  type ToObject = (KeyValue[]) => {};

  const toValue: ToValue = key => `${options.prefix}/${key}`;
  const toKeyValue: ToKeyValue = key => ({ key, value: toValue(key) });
  const toKeyValues: ToKeyValues = keys => keys.map(toKeyValue);

  const toObject: ToObject = keyValues =>
    keyValues.reduce((obj, item) => {
      // eslint-disable-next-line no-param-reassign
      obj[item.key] = item.value;
      return obj;
    }, {});

  return toObject(toKeyValues(strings));
};

export default stringsToObject;
