import React, { useRef } from "react";
import { Profile, Form } from "../components";
/**
 * The function creates a container component with a click handler that triggers a hidden file input
 * element to open.
 */

const ProfileContainer = () => {
  const hiddenFileInput = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    hiddenFileInput.current.click();
  };/* The code is defining a React functional component called `ProfileContainer` that returns a JSX
  element. The JSX element is a container component that renders a `Profile` component with
  various sub-components such as `Avatar`, `Bio`, and `Social`. The `Profile` component is
  composed of various `Form` components such as `FormGroup`, `Label`, `Input`, `TextArea`, and
  `SubmitInput`. The `ProfileContainer` component also defines a click handler function that
  triggers a hidden file input element to open when a button is clicked. Finally, the
  `ProfileContainer` component is exported as the default export of the module. */
  
  return (
    <Profile>
      <Form>
        <Profile.Avatar>
          <Profile.Title>Choose Avatar</Profile.Title>
          <Profile.AvatarContent>
            <Profile.Image source="default.jpg" />
            {/* Special file input case */}

            <input
              type="file"
              style={{ display: "none" }}
              ref={hiddenFileInput}
            />

            <Profile.Button onClick={handleClick}>
              Choose File To Upload
            </Profile.Button>
          </Profile.AvatarContent>
        </Profile.Avatar>
        <Profile.Bio>
          <Profile.BioTop>
            <Form.FormGroup>
              <Form.Label>Name</Form.Label>
              <Form.Input type="text" value="Kevin Caster" />
            </Form.FormGroup>
            <Form.FormGroup>
              <Form.Label>Email</Form.Label>
              <Form.Input type="text" value="caster@gmail.com" />
            </Form.FormGroup>
            <Form.FormGroup>
              <Form.Label>Phone</Form.Label>
              <Form.Input type="text" value="+2547564867" />
            </Form.FormGroup>
            <Form.FormGroup>
              <Form.Label>Address</Form.Label>
              <Form.Input type="text" value="P.0 22344 Thailand" />
            </Form.FormGroup>
            <Form.FormGroup>
              <Form.Label>County</Form.Label>
              <Form.Input type="text" value="Thailand" />
            </Form.FormGroup>
            <Form.FormGroup>
              <Form.Label>Town/Estate</Form.Label>
              <Form.Input type="text" value="Westlands" />
            </Form.FormGroup>
          </Profile.BioTop>
          <Profile.BioBottom>
            <Form.FormGroup>
              <Form.Label>About</Form.Label>
              <Form.TextArea name="" id="" cols="30" rows="10"></Form.TextArea>
            </Form.FormGroup>
          </Profile.BioBottom>
        </Profile.Bio>
        <Profile.Social>
          <Profile.SocialHeader>
            <Profile.Title>Social Accounts</Profile.Title>
          </Profile.SocialHeader>
          <Profile.SocialContent>
            <Form.FormGroup>
              <Form.Label for="">Facebook</Form.Label>
              <Form.Input type="text" class="form-input" />
            </Form.FormGroup>
            <Form.FormGroup>
              <Form.Label for="">Twitter</Form.Label>
              <Form.Input type="text" class="form-input" />
            </Form.FormGroup>
            <Form.FormGroup>
              <Form.Label for="">Instagram</Form.Label>
              <Form.Input type="text" class="form-input" />
            </Form.FormGroup>
            <Form.FormGroup>
              <Form.Label for="">Linkedin</Form.Label>
              <Form.Input />
            </Form.FormGroup>
          </Profile.SocialContent>
          <Form.FormGroup>
            <Form.SubmitInput value="Save Changes" />
          </Form.FormGroup>
        </Profile.Social>
      </Form>
    </Profile>
  );
};

export default ProfileContainer;
