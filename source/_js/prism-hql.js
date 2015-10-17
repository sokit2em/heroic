Prism.languages.hql = {
  'string': /("(?!:)(\\?[^'"])*?"(?!:)|\b[a-z\.]+\b)/g
};

Prism.languages.insertBefore('hql', 'string', {
  'operator': /(\+|-|!=|=|!\^|\^|!)|(\b(and|or|not|in)\b)/g,
  'keyword': /(\$key|\$now|<[a-z]+>|\b[0-9]+(ms|s|m|H|d|w)\b)/g
});
