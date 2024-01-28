import Accordion from "react-bootstrap/Accordion";

import React from "react";

function Accordians() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          {"Don't"} Know the Username Click here
        </Accordion.Header>
        <Accordion.Body>
          <p>
            Username: <span className="span-element">mosh</span>
          </p>
          <p>
            Password: <span className="span-element">DevMosh22</span>
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Accordians;
