export const joinQuery = (searchQuery, languageFilter, topicFilter) => {

  let joinedQuery = "?q=";

  let query = '';
  let language = '';
  let topic = '';

  query = searchQuery.trim().split(' ').map(word => `${word.trim()}`).join('+');
  language = languageFilter.trim().split(' ').map(word => `${word.trim()}`).join('+');
  topic = topicFilter.trim().split(' ').map(word => `${word.trim()}`).join('+');

  if(language != '') { language = `+language:${language}` }
  if(topic != '') { topic = `+topic:${topic}` }

  joinedQuery += query;
  joinedQuery += language;
  joinedQuery += topic;

  return joinedQuery;
}
