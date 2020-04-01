describe("HomePage", function () {
    it("Visit HomePage", function () {
        cy.visit("http://localhost:3005/"); // url da visitare
        cy.url().should("include", "localhost:3005");
    });

    // Chiusura del Banner policy
    it("Closure of the Privacy Banner", function () {
        cy.get('[data-test="close_cookie"]').click({ force: true });
        cy.wait(5000);
    });
});

describe("Primary Header", function () {
    beforeEach(() => {
        cy.visit("/");
        cy.url().should("include", "localhost:3005");
        cy.wait(2000);
    });

    it("Logo Shop-o-rama", function () {
        cy.get('[data-test="LogoLink_Header"]').click({ force: true }); // Logo di Shop-o-rama
        cy.url().should("include", "localhost:3005");
    });

    it("Search for all products", function () {     // search, tutti i prodotti
        cy.get('[data-test="search_button"]').click({ force: true });
        cy.url().should("include", "cerca");
    });

    it("Search for 'prodotto' products", function () {      // search, prodotto specifico
        cy.get('[data-test="main-search"]')
            .type('prodotto').should('have.value', 'prodotto');
        cy.get('[data-test="search_button"]').click({ force: true });
        cy.url().should("include", "q=prodotto");
    });

    it("Login Page", function () {      // Login con 'Accedi'
        cy.contains('Accedi').click({ force: true });
        cy.wait(1000);
        cy.get('[data-test="login_close"]').click({ force: true });
    });

    it("'Vendi' Page", function () {      // Pagina 'Vendi'
        cy.get('[data-test="Shop"]').click({ force: true });
        cy.url().should("include", "vendi-su-shoporama");
    });

    it("Shopping Cart Page", function () {      // Carrello
        cy.get('[data-test="Shopping-cart"]').click({ force: true });
        cy.url().should("include", "carrello");
    });

    it("Language", function () {        // lingua inglese e italiana
        cy.get('[data-test="english"]').click({ force: true });
        // cy.url().should("include", "shop-o-rama.com");
        cy.get('[data-test="italiano"]').click({ force: true });
        // cy.url().should("include", "shop-o-rama.it");
    });
});

// Verifica del funzionamento delle Categorie

describe("Root of categories", function () {
    beforeEach(() => {
        cy.visit("/");
        cy.url().should("include", "localhost:3005");
        cy.wait(2000);
    });

    it("Clothing and accessories", function () {
        cy.get('[data-test="category-0"]').click({ force: true });
        cy.url().should("include", "/categorie/clothing-and-accessories");
    });

    it("Jewellery", function () {
        cy.get('[data-test="category-1"]').click({ force: true });
        cy.url().should("include", "/categorie/jewellery");
    });

    it("Wellness", function () {
        cy.get('[data-test="category-2"]').click({ force: true });
        cy.url().should("include", "/categorie/wellness");
    });

    it("Home decor", function () {
        cy.get('[data-test="category-3"]').click({ force: true });
        cy.url().should("include", "/categorie/-home-decor-");
    });

    it("Art", function () {
        cy.get('[data-test="category-4"]').click({ force: true });
        cy.url().should("include", "/categorie/art");
    });

    it("Leisure", function () {
        cy.get('[data-test="category-5"]').click({ force: true });
        cy.url().should("include", "/categorie/leisure");
    });

    it("Baby", function () {
        cy.get('[data-test="category-6"]').click({ force: true });
        cy.url().should("include", "/categorie/baby");
    });

    it("Gourmet food", function () {
        cy.get('[data-test="category-7"]').click({ force: true });
        cy.url().should("include", "categorie/gourmet-food");
    });

    it("Magazine", function () {
        cy.get('[data-test="magazine"]').click({ force: true });
        cy.url().should("include", "magazine");
    });

    it("Gift Ideas", function () {
        cy.get('[data-test="gift"]').click({ force: true });
        cy.url().should("include", "idee-regalo");
    });
});

// Verifica del funzionamento del Top Banner

describe("Top Banner", function () {
    beforeEach(() => {
        cy.visit("/");
        cy.wait(5000);
    });

    it("Left Picture", function () {
        cy.get('[data-test="head_header_button_search"]').click({ force: true });
        cy.url().should("include", "prodotti");
    });

    it("Center Picture", function () {
        cy.get('[data-test="button_center_picture"]').click({ force: true });
        cy.url().should("include", "negozio");
    });
});

// Verifica del funzionamento della Sezione Prodotti - I nostri Prodotti

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
});