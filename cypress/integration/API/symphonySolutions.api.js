describe("API Test", () => {
  it("should find objects with Category: Authentication & Authorization", () => {
    cy.request("GET", "https://api.publicapis.org/entries")
      .its("body.entries")
      .then((entries) => {
        const filteredEntries = entries.filter(
          (entry) => entry.Category === "Authentication & Authorization"
        );

        cy.wrap(filteredEntries)
          .should("have.length.gt", 0)
          .as("filteredEntries");
      });

    cy.get("@filteredEntries").then((filteredEntries) => {
      cy.log(
        `Found ${filteredEntries.length} objects with Category: Authentication & Authorization`
      );
      cy.log(filteredEntries);
    });
  });
});
