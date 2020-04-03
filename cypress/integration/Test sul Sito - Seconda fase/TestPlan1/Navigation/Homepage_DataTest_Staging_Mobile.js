// Accesso alla HomePage

describe("HomePage", function() {
  it("Visit HomePage", function() {
    cy.visit("localhost:3005/"); // url da visitare
    cy.url().should("include", "localhost:3005");
    // cy.visit("https://www.shop-o-rama.it/"); // url da visitare
    // cy.url().should("include", "www.shop-o-rama.it");
    // cy.visit("https://sor-fe-staging.herokuapp.com/"); // url da visitare
    // cy.url().should("include", "sor-fe-staging.herokuapp.com/");
  });

  // Chiusura del Banner policy

  it("Chiusura Banner Privacy", function() {
    cy.get('[data-test="close_cookie"]').click({ force: true });
  });
});

// Verifica del funzionamento delle Categorie

describe("Root Categories", function() {
  describe("Categorie", function() {
    it("Menu categorie", function() {
      cy.get('[data-test="Categorie-Mobile"]').click({ force: true });
      cy.wait(2000);
      // Annulla
      cy.get('[data-test="Annulla-Categorie-Mobile"]').click({ force: true });
      cy.get('[data-test="Categorie-Mobile"]').click({ force: true });
      cy.wait(2000);
    });

    it("Abbigliamento e Accessori", function() {
      cy.contains("Abbigliamento e Accessori").click({ force: true });
      cy.wait(2000);
      cy.url().should("include", "/categorie/?categories_name=abbigliamento");
    });

    it("Gioielli", function() {
      cy.get('[data-test="Categorie-Mobile"]').click({ force: true });
      cy.wait(2000);
      cy.contains("Gioielli").click({ force: true });
      // cy.wait(2000);
      cy.url().should("include", "/categorie/?categories_name=gioielli");
    });

    it("Benessere", function() {
      cy.get('[data-test="Categorie-Mobile"]').click({ force: true });
      cy.wait(2000);
      cy.contains("Benessere").click({ force: true });
      // cy.wait(2000);
      cy.url().should("include", "/categorie/?categories_name=benessere");
    });

    it("Arredamento", function() {
      cy.get('[data-test="Categorie-Mobile"]').click({ force: true });
      cy.wait(2000);
      cy.contains("Arredamento").click({ force: true });
      cy.wait(2000);
      cy.url().should("include", "/categorie/?categories_name=arredamento");
    });

    it("Arte", function() {
      cy.get('[data-test="Categorie-Mobile"]').click({ force: true });
      cy.wait(2000);
      cy.contains("Arte").click({ force: true });
      // cy.wait(2000);
      cy.url().should("include", "categorie/?categories_name=arte");
    });

    it("Tempo libero", function() {
      cy.get('[data-test="Categorie-Mobile"]').click({ force: true });
      cy.wait(2000);
      cy.contains("Tempo libero").click({ force: true });
      // cy.wait(2000);
      cy.url().should("include", "/categorie/?categories_name=tempo-libero");
    });

    it("Infanzia", function() {
      cy.get('[data-test="Categorie-Mobile"]').click({ force: true });
      cy.wait(2000);
      cy.contains("Infanzia").click({ force: true });
      // cy.wait(2000);
      cy.url().should("include", "/categorie/?categories_name=infanzia");
    });

    it("Alimentari", function() {
      cy.get('[data-test="Categorie-Mobile"]').click({ force: true });
      cy.wait(2000);
      cy.contains("Alimentari").click({ force: true });
      // cy.wait(2000);
      cy.url().should("include", "/categorie/?categories_name=alimentari");
    });
  });

  describe("Magazine", function() {
    it("Accesso al Magazine", function() {
      cy.get('[data-test="Magazine-Mobile"]').click({ force: true });
      cy.url().should("include", "/magazine");
    });
  });

  describe("Idee regalo", function() {
    it("Accesso alle Idee regalo", function() {
      cy.get('[data-test="Idee-Regalo-Mobile"]').click({ force: true });
      cy.url().should("include", "/idee-regalo");
    });
  });
});

// Verifica del funzionamento del Top Banner

describe("Top Banner", function() {
  it("Center Picture", function() {
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    cy.get('[data-test="button_center_picture"]').click({ force: true });
  });

  it("Right Picture", function() {
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    cy.get('[data-test="right_picture"]').click({ force: true });
  });
});

// Verifica del funzionamento del Carousel delle Categorie

describe("Carousel Categorie", function() {
  it("Frecce", function() {
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });

    cy.get('[data-test="FeaturedCategory__Arrow SliderArrow__Next"]').click({
      force: true
    });
    cy.wait(1000);
    cy.get('[data-test="FeaturedCategory__Arrow SliderArrow__Next"]').click({
      force: true
    });
    cy.wait(1000);
    cy.get('[data-test="FeaturedCategory__Arrow SliderArrow__Next"]').click({
      force: true
    });
    cy.wait(1000);

    cy.get('[data-test="FeaturedCategory__Arrow SliderArrow__Prev"]').click({
      force: true
    });
    cy.wait(1000);
    cy.get('[data-test="FeaturedCategory__Arrow SliderArrow__Prev"]').click({
      force: true
    });
    cy.wait(1000);
    cy.get('[data-test="FeaturedCategory__Arrow SliderArrow__Prev"]').click({
      force: true
    });
  });

  it("Abbigliamento e accessori", function() {
    cy.get('[data-test="FeaturedCategory__0"]').click({
      force: true
    });
    cy.url().should("include", "/categorie/?categories_name=abbigliamento");
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
  });

  it("Gioielli", function() {
    cy.get('[data-test="FeaturedCategory__1"]').click({
      force: true
    });
    cy.url().should("include", "/categorie/?categories_name=gioielli");
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
  });

  it("Benessere", function() {
    cy.get('[data-test="FeaturedCategory__2"]').click({
      force: true
    });
    cy.url().should("include", "/categorie/?categories_name=benessere");
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
  });

  it("Arredamento", function() {
    cy.get('[data-test="FeaturedCategory__3"]').click({
      force: true
    });
    cy.url().should("include", "/categorie/?categories_name=arredamento");
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
  });

  it("Arte", function() {
    cy.get('[data-test="FeaturedCategory__4"]').click({
      force: true
    });
    cy.url().should("include", "/categorie/?categories_name=arte");
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
  });

  it("Tempo Libero", function() {
    cy.get('[data-test="FeaturedCategory__5"]').click({
      force: true
    });
    cy.url().should("include", "/categorie/?categories_name=tempo-libero");
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
  });

  it("Infanzia", function() {
    cy.get('[data-test="FeaturedCategory__6"]').click({
      force: true
    });
    cy.url().should("include", "/categorie/?categories_name=infanzia");
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
  });

  it("Alimentari", function() {
    cy.get('[data-test="FeaturedCategory__7"]').click({
      force: true
    });
    cy.url().should("include", "/categorie/?categories_name=alimentari");
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
  });
});

// Verifica del funzionamento della Sezione Prodotti - I nostri BestSeller

describe("Sezione Prodotti - I nostri BestSeller", function() {
  it("Prodotto 1", function() {
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    cy.get('[data-test="featured-product"]')
      .find('[data-test="ProductsList__0"]')
      .click({ force: true });
  });

  it("Prodotto 2", function() {
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    cy.get('[data-test="featured-product"]')
      .find('[data-test="ProductsList__1"]')
      .click({ force: true });
  });

  it("Prodotto 3", function() {
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    cy.get('[data-test="featured-product"]')
      .find('[data-test="ProductsList__2"]')
      .click({ force: true });
  });

  it("Prodotto 4", function() {
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    cy.get('[data-test="featured-product"]')
      .find('[data-test="ProductsList__3"]')
      .click({ force: true });
  });

  it("Prodotto 5", function() {
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    cy.get('[data-test="featured-product"]')
      .find('[data-test="ProductsList__4"]')
      .click({ force: true });
  });

  it("Prodotto 6", function() {
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    cy.get('[data-test="featured-product"]')
      .find('[data-test="ProductsList__5"]')
      .click({ force: true });
  });

  it("Prodotto 7", function() {
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    cy.get('[data-test="featured-product"]')
      .find('[data-test="ProductsList__6"]')
      .click({ force: true });
  });

  it("Prodotto 8", function() {
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    cy.get('[data-test="featured-product"]')
      .find('[data-test="ProductsList__7"]')
      .click({ force: true });
  });

  it("Mostra altri prodotti", function() {
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    cy.get('[data-test="featured-product"]')
      .find('[data-test="ProductList_show_other_products_for_categories"]')
      .click({ force: true });
  });
});

// Verifica del funzionamento della Sezione Magazine

describe("Sezione Magazine", function() {
  it("Articolo 1", function() {
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    cy.get('[data-test="Article__0"]').click({ force: true });
    cy.url().should("include", "magazine");
  });

  it("Articolo 2", function() {
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    cy.get('[data-test="Article__1"]').click({ force: true });
    cy.url().should("include", "magazine");
  });

  it("Articolo 3", function() {
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    cy.get('[data-test="Article__2"]').click({ force: true });
    cy.url().should("include", "magazine");
  });
});

// Verifica del funzionamento della Sezione Apri il tuo negozio

describe("Sezione 'Apri il tuo negozio'", function() {
  it("Accesso alla registrazione del negozio per il Seller", function() {
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    cy.get('[data-test="RibbonCTA__Content"]').click({ force: true });
    cy.url().should("include", "/accedi#registrazione_venditore");
  });
});

// Verifica del funzionamento della Sezione Prodotti - I nostri Prodotti

describe("Sezione Prodotti - I nostri Prodotti", function() {
  it("Prodotto 1", function() {
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    cy.get('[data-test="product-list"]')
      .find('[data-test="ProductsList__0"]')
      .click({ force: true });
  });

  it("Prodotto 2", function() {
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    cy.get('[data-test="product-list"]')
      .find('[data-test="ProductsList__1"]')
      .click({ force: true });
  });

  it("Prodotto 3", function() {
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    cy.get('[data-test="product-list"]')
      .find('[data-test="ProductsList__2"]')
      .click({ force: true });
  });

  it("Prodotto 4", function() {
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    cy.get('[data-test="product-list"]')
      .find('[data-test="ProductsList__3"]')
      .click({ force: true });
  });

  it("Prodotto 5", function() {
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    cy.get('[data-test="product-list"]')
      .find('[data-test="ProductsList__4"]')
      .click({ force: true });
  });

  it("Prodotto 6", function() {
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    cy.get('[data-test="product-list"]')
      .find('[data-test="ProductsList__5"]')
      .click({ force: true });
  });

  it("Prodotto 7", function() {
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    cy.get('[data-test="product-list"]')
      .find('[data-test="ProductsList__6"]')
      .click({ force: true });
  });

  it("Prodotto 8", function() {
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    cy.get('[data-test="product-list"]')
      .find('[data-test="ProductsList__7"]')
      .click({ force: true });
  });

  it("Prodotto in vetrina 1", function() {
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    cy.get('[data-test="featured-item-0"]').click({ force: true });
  });
  it("Prodotto in vetrina 2", function() {
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    cy.get('[data-test="featured-item-1"]').click({ force: true });
  });

  it("Mostra altri prodotti", function() {
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    cy.get('[data-test="product-list"]')
      .find('[data-test="ProductList_show_other_products_for_categories"]')
      .click({ force: true });
  });
});

// Verifica del funzionamento dell'Iscrizione alla Newsletter

describe("Iscrizione alla Newsletter", function() {
  it("Iscrivo un utente già registrato", function() {
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

// Verifica del funzionamento del Footer

describe("Footer", function() {
  describe("Guadagna con noi", function() {
    it("Vendi su Shop-o-rama", function() {
      cy.get('[data-test="Vendi su Shop-o-rama"]').click({ force: true });
      cy.url().should("include", "/vendi-su-shoporama");
      cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    });

    it("Guida per artigiani digitali", function() {
      cy.get('[data-test="Guida per artigiani digitali"]').click({
        force: true
      });
      cy.url().should("include", "/guida-per-artigiani-digitali");
      cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    });
  });

  describe("Piacere di conoscerci", function() {
    it("Lavora con noi", function() {
      cy.get('[data-test="Lavora con noi"]').click({ force: true });
      cy.url().should("include", "/lavora-con-noi");
      cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    });

    it("Chi siamo", function() {
      cy.get('[data-test="Chi siamo"]').click({ force: true });
      cy.url().should("include", "/chi-siamo");
      cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    });

    it("Magazine", function() {
      cy.get('[data-test="Magazine"]').click({ force: true });
      cy.url().should("include", "/magazine");
      cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    });
  });

  describe("Informazioni", function() {
    it("Condizioni generali di vendita", function() {
      cy.get('[data-test="Condizioni generali di vendita"]').click({
        force: true
      });
      cy.url().should("include", "/condizioni-generali-di-vendita");
      cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    });

    it("Condizioni e termini generali", function() {
      cy.get('[data-test="Condizioni e termini generali"]').click({
        force: true
      });
      cy.url().should("include", "/condizioni-e-termini-generali");
      cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    });

    it("Programma di protezione", function() {
      cy.get('[data-test="Programma di protezione"]').click({ force: true });
      cy.url().should("include", "/programma-di-protezione");
      cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    });

    it("Pagamenti", function() {
      cy.get('[data-test="Pagamenti"]').click({ force: true });
      cy.url().should("include", "/pagamenti");
      cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    });

    it("Spedizioni", function() {
      cy.get('[data-test="Spedizioni"]').click({ force: true });
      cy.url().should("include", "/spedizioni");
      cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    });
  });

  describe("Bisogno di aiuto?", function() {
    it("Contatti", function() {
      cy.get('[data-test="Contatti"]').click({ force: true });
      cy.url().should("include", "/contatti");
      cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    });

    it("Guide e tutorials", function() {
      cy.get('[data-test="Guide e tutorials"]').click({ force: true });
      cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    });
  });

  describe("I nostri partner", function() {
    it("Frecce", function() {
      cy.get('[data-test="LogoLink_Header"]').click({ force: true });

      cy.get('[data-test="undefined SliderArrow__Next"]').click({
        force: true
      });
      cy.wait(1000);
      cy.get('[data-test="undefined SliderArrow__Next"]').click({
        force: true
      });
      cy.wait(1000);
      cy.get('[data-test="undefined SliderArrow__Next"]').click({
        force: true
      });
      cy.wait(1000);

      cy.get('[data-test="undefined SliderArrow__Prev"]').click({
        force: true
      });
      cy.wait(1000);
      cy.get('[data-test="undefined SliderArrow__Prev"]').click({
        force: true
      });
      cy.wait(1000);
      cy.get('[data-test="undefined SliderArrow__Prev"]').click({
        force: true
      });
    });
  });

  describe("Social", function() {
    it("Instagram", function() {
      cy.get('[data-test="Footer Instagram"]').click({ force: true });
    });

    it("Facebook", function() {
      cy.get('[data-test="Footer Instagram"]').click({ force: true });
    });

    it("Linkedin", function() {
      cy.get('[data-test="Footer Linkedin"]').click({ force: true });
    });
  });

  describe("Footer logo Shop-o-rama", function() {
    it("Footer logo Shop-o-rama", function() {
      cy.get('[data-test="homepage di Shop-o-rama"]').click({ force: true });
    });
  });

  describe("Note legali", function() {
    it("Cookies", function() {
      cy.get('[data-test="cookies"]').click({ force: true });
      cy.url().should("include", "/cookie");
      cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    });

    it("Legale", function() {
      cy.get('[data-test="legale"]').click({ force: true });
      cy.url().should("include", "/legale");
      cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    });

    it("Privacy", function() {
      cy.get('[data-test="privacy"]').click({ force: true });
      cy.url().should("include", "/politica-sulla-privacy");
      cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    });
  });
});
