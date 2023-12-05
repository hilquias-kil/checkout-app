describe("Checkout test", () => {
  it("Should alow users to fill the credit card form", () => {
    cy.visit("http://localhost:3000/");

    cy.get("#creditCardNumber")
      .type("1234123412341234")
      .should("have.value", "1234 1234 1234 1234");

    cy.get("#creditCardExpirationDate")
      .type("1230")
      .should("have.value", "12/30");

    cy.get("#creditCardCVV").type("123").should("have.value", "123");

    cy.get("#creditCardCPF")
      .type("12345678909")
      .should("have.value", "123.456.789-09");

    cy.get("#couponCode").type("123456789").should("have.value", "123456789");

    cy.get("#installments").select("1").should("have.value", "1");

    cy.get("[type=submit]").click();

    cy.get("h2").should("contain", "Parabéns!");
  });

  it("Should display error messages", () => {
    cy.visit("http://localhost:3000/");

    cy.get("[type=submit]").click();

    cy.contains("Insira um numero valido de cartão de crédito").should(
      "be.visible"
    );
    cy.contains("Insira uma data valida").should("be.visible");
    cy.contains("Insira um codigo CVV valido").should("be.visible");
    cy.contains("Insira um CPF valido").should("be.visible");
    cy.contains("Insira um cupom valido").should("be.visible");
    cy.get("[type=submit]").should("be.disabled");
  });

  it("changing plans should change select options", () => {
    cy.visit("http://localhost:3000/");

    cy.get("[data-testid]:last").click();
    cy.get("#installments").children().should("have.length", 2);
  });
});
