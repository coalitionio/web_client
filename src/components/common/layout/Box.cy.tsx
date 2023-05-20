import React from "react";
import { Box } from "@ui/common/layout";

describe("<Box /> testing", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Box>Test Box</Box>);
    cy.contains("Test Box");
  });
});
