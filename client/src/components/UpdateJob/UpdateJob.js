import React, { Component } from 'react';

import { Fieldset, Form, Wrapper } from './styled';

class UpdateJob extends Component {
  handleSubmit = e => {
    e.preventDefault();

    const data = {};

    this.inputForm.childNodes.forEach(node => {
      node.childNodes.forEach(
        node => node.name && (data[node.name] = node.value)
      );
    });

    data.description = JSON.stringify({
      responsibilities: data.responsibilities,
      requirements: data.requirements,
      compensation: data.compensation,
    });

    data.isFeatured = this.isFeatured.checked;

    data.location = 'in ' + data.location;

    if (!data.imgUrl) data.imgUrl = '/placeholder-image.jpg';

    this.props.createNewJob(data);
  };

  render() {
    return (
      <Wrapper>
        <Form
          onSubmit={this.handleSubmit}
          innerRef={el => (this.inputForm = el)}
        >
          <Fieldset>
            <legend>Job description</legend>
            <label>Job Title:</label>
            <input type="text" name="title" required />
            <h3>Responsibilities:</h3>
            <textarea name="responsibilities" placeholder="Supports markdown" />
            <h3>Requirements:</h3>
            <textarea name="requirements" placeholder="Supports markdown" />
            <h3>Compensation:</h3>
            <textarea name="compensation" placeholder="Supports markdown" />
            <label>Image URL (link to jpg/jpeg or png image):</label>
            <input type="url" name="imgUrl" pattern=".+\.jpg|\.jpeg|\.png$" />
            <label>Tags:</label>
            <input
              type="text"
              name="tags"
              placeholder="Comma or space separated (e.g. Senior, JavaScript, EU Tallinn)"
            />
            <label>Expiration date:</label>
            <input type="date" name="expDate" required />
            <div>
              <label htmlFor="featured">Featured: </label>
              <input
                type="checkbox"
                id="featured"
                name="featured"
                ref={el => (this.isFeatured = el)}
              />
            </div>
          </Fieldset>
          <Fieldset>
            <legend>About company:</legend>
            <label>Company Name:</label>
            <input type="text" name="companyName" required />
            <label>Website:</label>
            <input type="url" name="website" />
            <label>Location:</label>
            <input type="text" name="location" />
          </Fieldset>
          <input type="reset" value="Reset" />
          <input type="submit" value={this.props.isNew ? 'Create' : 'Save'} />
        </Form>
      </Wrapper>
    );
  }
}

export default UpdateJob;
