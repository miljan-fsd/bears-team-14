import React, { Component } from 'react';

import { Form, SearchInput, SubmitButton } from './styled';

const Search = props => {
  let searchInput = null;

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Searching for', searchInput.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SearchInput innerRef={el => (searchInput = el)} />
      <SubmitButton>
        <i className="fa fa-search" aria-hidden="true" />&nbsp;Search
      </SubmitButton>
    </Form>
  );
};

export default Search;
