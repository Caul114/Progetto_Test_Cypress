describe("HomePage", function () {
  it("Visit HomePage", function () {
    // cy.visit("localhost:3005/"); // url da visitare
    // cy.url().should("include", "localhost:3005");
    // cy.visit("https://www.shop-o-rama.it/"); // url da visitare
    // cy.url().should("include", "www.shop-o-rama.it");
    cy.visit("https://sor-fe-staging.herokuapp.com/"); // url da visitare
    cy.url().should("include", "sor-fe-staging.herokuapp.com/");
    
    // da molti più errori se si utilizza il codice localhost
    //cy.visit("http://localhost:3005/"); // url da visitare
    //cy.url().should("include", "localhost:3005");
  });

  // Chiusura del Banner policy

  it("Chiusura Banner Privacy", function () {
    cy.get('[data-test="close_cookie"]').click({ force: true });
  });
  it("Logo Shop-o-rama", function () {
    cy.get('[data-test="LogoLink_Header"]').click({ force: true }); // Logo di Shop-o-rama
    cy.url().should("include", "herokuapp");
  });
  //commento di prova
describe("Root Categories", function () {
    it("Abbigliamento e Accessori", function () {
      cy.contains("Abbigliamento e accessori").click({ force: true });
      cy.wait(2000);
      cy.url().should("include", "/categorie/abbigliamento-e-accessori");
    });
    it("Benessere", function () {
      cy.contains("Benessere").click({ force: true });
      cy.wait(2000);
      cy.url().should("include", "/categorie/benessere");
    });
    it("Arredamento", function () {
      cy.contains("Arredamento").click({ force: true });
      cy.wait(2000);
      cy.url().should("include", "/categorie/arredamento");
    });
  
    it("Arte", function () {
      cy.contains("Arte").click({ force: true });
      cy.wait(2000);
      cy.url().should("include", "categorie/arte");
    });
        

});
//commento di prova
describe("Root Categories", function () {
  it("Abbigliamento e Accessori", function () {
    cy.contains("Abbigliamento e accessori").click({ force: true });
    cy.wait(2000);
    cy.url().should("include", "/categorie/abbigliamento-e-accessori");
  });
  it("Benessere", function () {
    cy.contains("Benessere").click({ force: true });
    cy.wait(2000);
    cy.url().should("include", "/categorie/benessere");
  });
  it("Arredamento", function () {
    cy.contains("Arredamento").click({ force: true });
    cy.wait(2000);
    cy.url().should("include", "/categorie/arredamento");
  });

  it("Arte", function () {
    cy.contains("Arte").click({ force: true });
    cy.wait(2000);
    cy.url().should("include", "categorie/arte");
  });


  it("Infanzia", function () {
    cy.contains("Infanzia").click({ force: true });
    cy.wait(2000);
    cy.url().should("include", "/categorie/infanzia");
  });

  it("Alimentari", function () {
    cy.contains("Alimentari").click({ force: true });
    cy.wait(2000);
    cy.url().should("include", "/categorie/alimentari");
  });

  it("Magazine", function () {
    cy.contains("Magazine").click({ force: true });
    cy.wait(2000);
    cy.url().should("include", "/magazine");
  });

  it("Idee Regalo", function () {
    cy.contains("Idee Regalo").click({ force: true });
    cy.wait(2000);
    cy.url().should("include", "/idee-regalo");
  });

});

describe("Top Banner", function () {
  it("Left Picture", function () {
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    cy.get('[data-test="head_header_button_search"]').click({ force: true });
  });

  it("Center Picture", function () {
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    cy.get('[data-test="button_center_picture"]').click({ force: true });
  });

  it("Right Picture", function () {
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    cy.get('[data-test="right_picture"]').click({ force: true });
  });
});
});

describe("Products section - Our bestsellers", function () {
  beforeEach(() => {
      cy.visit("/");
      cy.url().should("include", "localhost:3005");
      cy.wait(2000);
  });

  it("Product 1", function () {
      cy.get('[data-test="featured-product"]')
          .find('[data-test="ProductsList_Products"]')
          .find('[data-test="ProductsList__0 order-1"]')
          .click({ force: true });
  });

  it("Product 2", function () {
      cy.get('[data-test="featured-product"]')
          .find('[data-test="ProductsList_Products"]')
          .find('[data-test="ProductsList__1 order-2"]')
          .click({ force: true });
  });

  it("Product 3", function () {
      cy.get('[data-test="featured-product"]')
          .find('[data-test="ProductsList_Products"]')
          .find('[data-test="ProductsList__2 order-3"]')
          .click({ force: true });
  });

  it("Product 4", function () {
      cy.get('[data-test="featured-product"]')
          .find('[data-test="ProductsList_Products"]')
          .find('[data-test="ProductsList__3 order-4"]')
          .click({ force: true });
  });

  it("Product 5", function () {
      cy.get('[data-test="featured-product"]')
          .find('[data-test="ProductsList_Products"]')
          .find('[data-test="ProductsList__4 order-5"]')
          .click({ force: true });
  });

  it("Product 6", function () {
      cy.get('[data-test="featured-product"]')
          .find('[data-test="ProductsList_Products"]')
          .find('[data-test="ProductsList__5 order-6"]')
          .click({ force: true });
  });

  it("Product 7", function () {
      cy.get('[data-test="featured-product"]')
          .find('[data-test="ProductsList_Products"]')
          .find('[data-test="ProductsList__6 order-7"]')
          .click({ force: true });
  });

  it("Product 8", function () {
      cy.get('[data-test="featured-product"]')
          .find('[data-test="ProductsList_Products"]')
          .find('[data-test="ProductsList__7 order-8"]')
          .click({ force: true });
  });

  it("Show other products", function () {
      cy.get('[data-test="featured-product"]')
          .find('[data-test="other-products"]')
          .click({ force: true });
      cy.get('[data-test="featured-product"]')
          .find('[data-test="ProductsList_Products"]')
          .find('[data-test="ProductsList__0"]')
          .click({ force: true });
  });

  it("Frecce", function () {
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });

    cy.get(".SliderArrow__Next").click({ force: true });
    cy.wait(1000);
    cy.get(".SliderArrow__Next").click({ force: true });
    cy.wait(1000);
    cy.get(".SliderArrow__Next").click({ force: true });
    cy.wait(1000);

    cy.get(".SliderArrow__Prev").click({ force: true });
    cy.wait(1000);
    cy.get(".SliderArrow__Prev").click({ force: true });
    cy.wait(1000);
    cy.get(".SliderArrow__Prev").click({ force: true });
  });
});

describe("Sezione Magazine", function () {
  it("Articolo 1", function () {
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    cy.get('[data-test="Article__0"]').click({ force: true });
    cy.url().should("include", "magazine");
  });

  it("Articolo 2", function () {
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    cy.get('[data-test="Article__1"]').click({ force: true });
    cy.url().should("include", "magazine");
  });

  it("Articolo 3", function () {
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    cy.get('[data-test="Article__2"]').click({ force: true });
    cy.url().should("include", "magazine");
  });
});


describe("Sezione 'Apri il tuo negozio'", function () {
  it("Accesso alla registrazione del negozio per il Seller", function () {
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    cy.get('[data-test="RibbonCTA__Content"]').click({ force: true });
    cy.url().should("include", "/accedi#registrazione_venditore");
  });
  it("Prodotto 3", function () {
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    cy.get('[data-test="product-list"]')
      .find('[data-test="ProductsList__2"]')
      .click({ force: true });
  });
  describe("Iscrizione alla Newsletter", function () {
    it("Iscrivo un utente già registrato", function () {
      cy.get('[data-test="NewsletterSignup"]')
        .find('[name="email"]')
        .type("kenshiro@getnada.com")
        .should("have.value", "kenshiro@getnada.com");
  
      cy.get('[type="checkbox"]').check();
  
      cy.get('[data-test="PolicyModal_Accept"]').click({ force: true });
  
      cy.get('[data-test="NewsletterSignup__sorForm"]')
        .submit()
        .should("contain", "Utente già registrato alla nostra newsletter");
    });
  });
});
describe("Footer", function () {
  describe("Guadagna con noi", function () {
    it("Vendi su Shop-o-rama", function () {
      cy.get('[data-test="Vendi su Shop-o-rama"]').click({ force: true });
      cy.url().should("include", "/vendi-su-shoporama");
      cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    });
});

it("Guida per artigiani digitali", function () {
  cy.get('[data-test="Guida per artigiani digitali"]').click({
    force: true
  });
  cy.url().should("include", "/guida-per-artigiani-digitali");
  cy.get('[data-test="LogoLink_Header"]').click({ force: true });
});

  describe("Piacere di conoscerci", function () {
    it("Lavora con noi", function () {
      cy.get('[data-test="Lavora con noi"]').click({ force: true });
      cy.url().should("include", "/lavora-con-noi");
      cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    });

    it("Chi siamo", function () {
      cy.get('[data-test="Chi siamo"]').click({ force: true });
      cy.url().should("include", "/chi-siamo");
      cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    });

    it("Magazine", function () {
      cy.get('[data-test="Magazine"]').click({ force: true });
      cy.url().should("include", "/magazine");
      cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    });
  });
  describe("Informazioni", function () {
    it("Condizioni generali di vendita", function () {
      cy.get('[data-test="Condizioni generali di vendita"]').click({
        force: true
      });
      cy.url().should("include", "/condizioni-generali-di-vendita");
      cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    });
});
it("Condizioni e termini generali", function () {
  cy.get('[data-test="Condizioni e termini generali"]').click({
    force: true
  });
  cy.url().should("include", "/condizioni-e-termini-generali");
  cy.get('[data-test="LogoLink_Header"]').click({ force: true });
});
it("Programma di protezione", function () {
  cy.get('[data-test="Programma di protezione"]').click({ force: true });
  cy.url().should("include", "/programma-di-protezione");
  cy.get('[data-test="LogoLink_Header"]').click({ force: true });
});

it("Pagamenti", function () {
  cy.get('[data-test="Pagamenti"]').click({ force: true });
  cy.url().should("include", "/pagamenti");
  cy.get('[data-test="LogoLink_Header"]').click({ force: true });
});
it("Spedizioni", function () {
  cy.get('[data-test="Spedizioni"]').click({ force: true });
  cy.url().should("include", "/spedizioni");
  cy.get('[data-test="LogoLink_Header"]').click({ force: true });
});
});

describe("Bisogno di aiuto?", function () {
it("Contatti", function () {
  cy.get('[data-test="Contatti"]').click({ force: true });
  cy.url().should("include", "/contatti");
  cy.get('[data-test="LogoLink_Header"]').click({ force: true });
});
it("Guide e tutorials", function () {
  cy.get('[data-test="Guide e tutorials"]').click({ force: true });
  cy.get('[data-test="LogoLink_Header"]').click({ force: true });
});
});

describe("Footer logo Shop-o-rama", function () {
it("Footer logo Shop-o-rama", function () {
  cy.get('[data-test="homepage di Shop-o-rama"]').click({ force: true });
});
});
describe("Note legali", function () {
  it("Cookies", function () {
    cy.get('[data-test="cookies"]').click({ force: true });
    cy.url().should("include", "/cookie");
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
  });

  it("Legale", function () {
    cy.get('[data-test="legale"]').click({ force: true });
    cy.url().should("include", "/legale");
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
  });

  it("Privacy", function () {
    cy.get('[data-test="privacy"]').click({ force: true });
    cy.url().should("include", "/politica-sulla-privacy");
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
  });
});

describe("Social", function () {
  it("Instagram", function () {
    cy.get('[data-test="Footer Instagram"]').click({ force: true });
  });

  it("Facebook", function () {
    cy.get('[data-test="Footer Instagram"]').click({ force: true });
  });

  it("Linkedin", function () {
    cy.get('[data-test="Footer Linkedin"]').click({ force: true });
  });
});