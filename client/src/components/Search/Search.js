import React from 'react';

import { Form, SearchInput, SubmitButton } from './styled';

const Search = props => {
  let searchInput = null;

  const handleSubmit = e => {
    e.preventDefault();
    props.handleFilter(searchInput.value.toLowerCase());
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
