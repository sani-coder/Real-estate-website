import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getPropertyList } from "../redux/actions/propertiesAction";
import {
  AdminListingHeader,
  PropertyData,
  PropertyHead,
} from "../partials/admin_listing_partial";

import { Table, AdminListing } from "../components";
/**
 * This is a functional component that uses React hooks to manage state and access data from the Redux
 * store.
 */

const AdminAgentListing = () => {
  const [selectId, setSelectId] = useState(null);

  const dispatch = useDispatch();

  const { properties } = useSelector((state) => state.propertyList);
/* `useEffect` is a hook in React that allows you to perform side effects in functional components. In
this code, `useEffect` is used to dispatch the `getPropertyList` action when the component mounts or
when the `dispatch` function changes. This ensures that the `getPropertyList` action is only
dispatched when necessary, and helps prevent unnecessary re-renders of the component. */

  useEffect(() => {
    dispatch(getPropertyList());
  }, [dispatch]);

  /**
   * This is a React component that renders an admin listing with a table of properties and a header
   * with a delete action handler.
   * @param id - The id parameter is being passed to the handleDeleteAction function as an argument. It
   * is used to identify which property should be deleted.
   */
  const handleDeleteAction = (id) => console.log(id);
  return (
    <AdminListing>
      <AdminListing.Top>
        <AdminListingHeader
          selectId={selectId}
          handleDeleteAction={handleDeleteAction}
        />
      </AdminListing.Top>
      <AdminListing.Content>
        <Table>
          <PropertyHead />
          <Table.Body>
            {properties.map((property) => (
              <PropertyData property={property} setSelectId={setSelectId} />
            ))}
          </Table.Body>
        </Table>
      </AdminListing.Content>
    </AdminListing>
  );
};

export default AdminAgentListing;
