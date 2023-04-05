import React, { useRef } from "react";
import { Add, Form } from "../components";

const Descrition = () => {
  return (
    <Add.Description>
      <Add.DescriptionHeader>
        <Add.Title>Description</Add.Title>
      </Add.DescriptionHeader>
      <Add.DescriptionContent>
        <Add.DescriptionContentTop>
          <Form.FormGroup>
            <Form.Label>
              Property Title <span>(required)</span>
            </Form.Label>
            <Form.Input />
          </Form.FormGroup>
          <Form.FormGroup>
            <Form.Label>
              Property Price <span>(required)</span>
            </Form.Label>
            <Form.Input type="text" />
          </Form.FormGroup>
          <Form.FormGroup>
            <Form.Label>
              Category <span>(required)</span>
            </Form.Label>
            <Form.Select name="category">
              <Form.Option disabled defaultValue>
                None
              </Form.Option>
              <Form.Option>Apartment</Form.Option>
              <Form.Option>House</Form.Option>
              <Form.Option>Land</Form.Option>
            </Form.Select>
          </Form.FormGroup>
          <Form.FormGroup>
            <Form.Label>
              Listed In <span>(required)</span>
            </Form.Label>
            <Form.Select name="none" id="">
              <Form.Option disabled defaultValue>
                None
              </Form.Option>
              <Form.Option>Rental</Form.Option>
              <Form.Option>Sales</Form.Option>
            </Form.Select>
          </Form.FormGroup>
        </Add.DescriptionContentTop>
        <Add.DescriptionContentBottom>
          <Form.FormGroup>
            <Form.Label>
              Description <span>(required)</span>
            </Form.Label>
            <Form.TextArea name="" id="" cols="30" rows="10"></Form.TextArea>
          </Form.FormGroup>
        </Add.DescriptionContentBottom>
      </Add.DescriptionContent>
    </Add.Description>
  );
};

//The code is an example of a form that allows the user to input their address, county, and town.
const Location = () => {
  return (
    <Add.Location>
      <Add.LocationHeader>
        <Add.Title>Property Location</Add.Title>
      </Add.LocationHeader>
      <Add.LocationContent>
        <Add.LocationContentTop>
          <Form.FormGroup>
            <Form.Label>
              Address <span>(required)</span>
            </Form.Label>
            <Form.Input type="text" />
          </Form.FormGroup>
        </Add.LocationContentTop>
        <Add.LocationContentBottom>
          <Form.FormGroup>
            <Form.Label>
              County<span>(required)</span>
            </Form.Label>
            <Form.Input type="text" />
          </Form.FormGroup>
          <Form.FormGroup>
            <Form.Label>
              Town<span>(required)</span>
            </Form.Label>
            <Form.Input type="text" />
          </Form.FormGroup>
          <Form.FormGroup>
            <Form.Label>
              Latitude<span>(for google maps)</span>
            </Form.Label>
            <Form.Input />
          </Form.FormGroup>
          <Form.FormGroup>
            <Form.Label>
              Longitude<span>(for google maps)</span>
            </Form.Label>
            <Form.Input type="text" />
          </Form.FormGroup>
        </Add.LocationContentBottom>
      </Add.LocationContent>
    </Add.Location>
  );
};
//The code is an example of how to use the React.useRef() function.
// The code demonstrates a form that has been rendered using the <Form> component. The <Add> component is used to add new content to the form, and it also contains a description header and description content.
//The code in the Add.Media component is a simple form with two inputs, one for an image and one for text.
const Media = () => {
  const hiddenFileInput = useRef(null);

  const handleFileButton = (e) => {
    e.preventDefault();
    hiddenFileInput.current.click();
  };

  return (
    <Add.Media>
      <Add.MediaHeader>
        {/* Add.MediaHeader component which contains an Add.Title property that displays "Property Images" followed by some other properties such as title and description */}
        <Add.Title>Property Images</Add.Title>
      </Add.MediaHeader>
      <Add.MediaContent>
        <Form.FormGroup>
          <Form.Label>Images</Form.Label>
          {/* Special input file case */}
          <input
            type="file"
            ref={hiddenFileInput}
            style={{ display: "none" }}
          />
          <Add.Button onClick={handleFileButton}>Upload Files</Add.Button>
        </Form.FormGroup>
      </Add.MediaContent>
    </Add.Media>
  );
};

//he first form group has a label of "Rooms" followed by an input text field; 
//the second form group has labels of "Bedrooms" followed by an input text field; 
//the third form group has labels of "Bathrooms" followed by an input text field; 
//finally there is a fourth form group with no label but only contains options for brick or wood or cement as its select option.
const Details = () => {
  return (
    <Add.Details>
      <Add.DetailsHeader>
        <Add.Title>Property Details</Add.Title>
      </Add.DetailsHeader>
      <Add.DetailsContent>
        <Form.FormGroup>
          <Form.Label>Rooms</Form.Label>
          <Form.Input type="text" />
        </Form.FormGroup>
        <Form.FormGroup>
          <Form.Label>Bedrooms</Form.Label>
          <Form.Input type="text" />
        </Form.FormGroup>
        <Form.FormGroup>
          <Form.Label>Bathrooms</Form.Label>
          <Form.Input type="text" />
        </Form.FormGroup>
        <Form.FormGroup>
          <Form.Label>Structure Type</Form.Label>
          <Form.Select name="none" id="" class="form-select">
            <Form.Option disabled defaultValue>
              Not Available
            </Form.Option>
            <Form.Option>Brick</Form.Option>
            <Form.Option>Wood</Form.Option>
            <Form.Option>Cement</Form.Option>
          </Form.Select>
        </Form.FormGroup>
      </Add.DetailsContent>
    </Add.Details>
  );
};

export { Descrition, Location, Media, Details };
