import React, { Component } from 'react';

import { Fieldset, Form, Wrapper } from './styled';

const findItem = (id, data) => data.filter(item => item._id === id)[0];

class UpdateJob extends Component {
  constructor(props) {
    super(props);

    const id = props.editMode
      ? props.history.location.pathname.split('/').pop()
      : null;

    const data = findItem(id, props.data);

    this.state = {
      editMode: props.editMode,
      id,
      data,
    };
  }

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

    this.state.editMode
      ? this.saveJob(this.state.id, data)
      : this.createNewJob(data);
  };

  createNewJob = data => {
    this.props.createNewJob(data);
  };

  saveJob = (id, data) => {
    this.props.updateItem(id, data);
  };

  render() {
    const { data, editMode } = this.state;

    if (editMode && !data) return <div>Loading...</div>;

    const description = data ? JSON.parse(data.info.description) : null;

    return (
      <Wrapper>
        {this.state.editMode && <h2>Edit a job</h2>}
        <Form
          onSubmit={this.handleSubmit}
          innerRef={el => (this.inputForm = el)}
        >
          <Fieldset>
            <legend>Job description</legend>
            <label>Job Title:</label>
            <input
              type="text"
              name="title"
              required
              defaultValue={data ? data.info.title : ''}
            />
            <h3>Responsibilities:</h3>
            <textarea
              name="responsibilities"
              placeholder="Supports markdown"
              defaultValue={data && description.responsibilities}
            />
            <h3>Requirements:</h3>
            <textarea
              name="requirements"
              placeholder="Supports markdown"
              defaultValue={data && description.requirements}
            />
            <h3>Compensation:</h3>
            <textarea
              name="compensation"
              placeholder="Supports markdown"
              defaultValue={data && description.compensation}
            />
            <label>Image URL (link to jpg/jpeg or png image):</label>
            <input
              type="url"
              name="imgUrl"
              pattern=".+\.jpg|\.jpeg|\.png$"
              defaultValue={data && data.info.imgUrl}
            />
            <label>Tags:</label>
            <input
              type="text"
              name="tags"
              placeholder="Comma or space separated (e.g. Senior, JavaScript, EU Tallinn)"
              defaultValue={data && data.tags.join(' ')}
            />
            <label>Expiration date:</label>
            <input
              type="date"
              name="expDate"
              required
              defaultValue={data && data.expDate.substr(0, 10)}
            />
            <div>
              <label htmlFor="featured">Featured: </label>
              <input
                type="checkbox"
                id="featured"
                name="featured"
                defaultChecked={data && data.isFeatured}
                ref={el => (this.isFeatured = el)}
              />
            </div>
          </Fieldset>
          <Fieldset>
            <legend>About company:</legend>
            <label>Company Name:</label>
            <input
              type="text"
              name="companyName"
              required
              defaultValue={data && data.companyName}
            />
            <label>Website:</label>
            <input
              type="url"
              name="website"
              defaultValue={data && data.info.website}
            />
            <label>Location:</label>
            <input
              type="text"
              name="location"
              defaultValue={data && data.location.substr(3)}
            />
          </Fieldset>
          <input type="reset" value="Reset" />
          <input type="submit" value={editMode ? 'Update' : 'Create'} />
        </Form>
      </Wrapper>
    );
  }
}

export default UpdateJob;
