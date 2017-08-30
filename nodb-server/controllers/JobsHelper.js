module.exports = {
  /* 
    Creates an array of trimmed tags out of a string.
  */
  cleanTags: tags => tags.split(',').map(tag => tag.trim()),
};
