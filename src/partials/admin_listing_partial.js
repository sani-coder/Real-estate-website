import React, { useState } from "react";

import { Table, AdminListing, Form } from "../components";
//React component that displays the properties of an object. It has two components: Table and AdminListing.

//The code attempts to create a table with the following columns: Name, Price ($), Category, Listed In, County, Town and Action.
// The code below will create a table with the following columns: Name, Price ($), Category, Listed In, County and Town.
const PropertyHead = () => {
  return (
    <Table.Head>
      <Table.Row>
        <Table.Data>Name</Table.Data>
        <Table.Data>Price ($)</Table.Data>
        <Table.Data>Category</Table.Data>
        <Table.Data>Listed In</Table.Data>
        <Table.Data>County</Table.Data>
        <Table.Data>Town</Table.Data>
        <Table.Data>Action</Table.Data>
      </Table.Row>
    </Table.Head>
  );
};
//The code is a function that returns an object with the properties of title, price, category, listedIn and address.
// The code below has a button which when clicked will set the selected property to true or false depending on whether it was already set to true or false.
const PropertyData = ({ property, setSelectId }) => {
  const [selected, setSelected] = useState(false);

  const handleSelect = (id) => {
    setSelected((prevState) => !prevState);
    setSelectId(id);
  };

  return (
    <Table.Row>
      <Table.Data>{property.title}</Table.Data>
      <Table.Data>{property.price}</Table.Data>
      <Table.Data>{property.category}</Table.Data>
      <Table.Data>{property.listedIn}</Table.Data>
      <Table.Data>{property.address.county}</Table.Data>
      <Table.Data>{property.address.city}</Table.Data>
      <Table.Data>
        <Table.Button onClick={() => handleSelect(property.id)}>
          {selected ? "Selected" : "Select"}
        </Table.Button>
      </Table.Data>
    </Table.Row>
  );
};
//The code starts with a <AdminListing.Header> tag, which is the top-level component of an AdminListing component.
// The header has two children: <Form> and <AdminListing.Action>.
// The first child in the header is a Form that contains one input field for searching through listings.
// The second child in the header is an action button that will be used to delete listings when clicked on by users who are logged into your app as admins or moderators (or anyone else with permission). 
//The code is a form that has two buttons.
// The first button will delete the selected item and the second button will not delete the selected item. 
const AdminListingHeader = ({ selectId, handleDeleteAction }) => {
  return (
    <AdminListing.Header>
      <Form>
        <Form.Input type="text" placeholder="Search" />
      </Form>
      <AdminListing.Action>
        <AdminListing.Button
          onClick={() => handleDeleteAction(selectId)}
          bg="var(--bs-danger)">
          Delete
        </AdminListing.Button>
        <AdminListing.Button bg="var(--bs-blue)">
          <AdminListing.Anchor to={selectId && `/add-listing/${selectId}`}>
            Edit
          </AdminListing.Anchor>
        </AdminListing.Button>
        <AdminListing.Button bg="var(--bs-blue)">
          <AdminListing.Anchor to={selectId && `/property/${selectId}`}>
            View
          </AdminListing.Anchor>
        </AdminListing.Button>
      </AdminListing.Action>
    </AdminListing.Header>
  );
};

export { AdminListingHeader, PropertyHead, PropertyData };
