/**
 * The function returns a React component that renders a contact form within a section of a webpage.
 * @returns The HomeContactContainer component is being returned.
 */
import React from "react";
import { Section, Form } from "../components";
/**
 * The function returns a JSX component for a contact form section with a header, text, and form input
 * fields.
 * @returns A React functional component that renders a section with a header, content, and two flex
 * items. The first flex item contains a subtitle, text, and another flex container with two flex
 * items. The second flex item contains a form with input fields for name, email, phone number, and a
 * text area for message, as well as a submit button.
 */

const HomeContactContainer = () => {
  return (
    <Section bgColor="--bs-fade-blue">
      <Section.InnerContainer>
        <Section.Header></Section.Header>
        <Section.Content>
          <Section.Flex>
            <Section.FlexItem width="70%">
              <Section.SubTitle size="1">Contact Us</Section.SubTitle>
              <Section.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non,
                nemo dolorem amet cupiditate sequi cum?
              </Section.Text>
              <Section.Flex>
                <Section.FlexItem width="50%">
                  <Section.SubTitle>We Will Get In Touch</Section.SubTitle>
                  <Section.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non,
                  </Section.Text>
                </Section.FlexItem>
                <Section.FlexItem width="50%">
                  <Section.SubTitle>
                    Get Instant Support From Us
                  </Section.SubTitle>
                  <Section.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non,
                  </Section.Text>
                </Section.FlexItem>
              </Section.Flex>
            </Section.FlexItem>
            <Section.FlexItem width="30%" bg="true">
              <Form>
                <Form.FormGroup>
                  <Form.Input type="text" placeholder="Your Name" />
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Input type="text" placeholder="Your Email" />
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Input type="text" placeholder="Your Phone Number" />
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.TextArea
                    placeholder="Your Message"
                    name=""
                    id=""
                    cols="30"
                    rows="10"></Form.TextArea>
                </Form.FormGroup>

                <Form.FormGroup>
                  <Form.SubmitInput type="submit" value="Send Message" />
                </Form.FormGroup>
              </Form>
            </Section.FlexItem>
          </Section.Flex>
        </Section.Content>
      </Section.InnerContainer>
    </Section>
  );
};

export default HomeContactContainer;
