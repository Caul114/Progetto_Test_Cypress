
describe("New Product", function() {
    beforeEach(()=>{
      cy.visit("/");
      cy.url().should("include", "localhost:3005");
      cy.wait(2000); 
    });
    it("Product_Center_1", function(){
      cy.get('[data-test="featured-product_center"]')
      .find('[data-test="ProductsList_Products"]')
      .find('[data-test="ProductsList_center_0 order-1"]')
      .click({ force: true });
    })
    it("Product_Center_2", function(){
      cy.get('[data-test="featured-product-center"]')
      .find('[data-test="ProductsList_Products"]')
      .find('[data-test="ProductsList_center_0 order-2"]')
      .click({ force: true });
    })
    it("Product_Center_3", function(){
      cy.get('[data-test="featured-product-center"]')
      .find('[data-test="ProductsList_Products"]')
      .find('[data-test="ProductsList_center_0 order-3"]')
      .click({ force: true });
    })
    it("Product_Center_4", function(){
      cy.get('[data-test="featured-product-center"]')
      .find('[data-test="ProductsList_Products"]')
      .find('[data-test="ProductsList_center_0 order-4"]')
      .click({ force: true });
    })
    it("Product_Center_5", function(){
      cy.get('[data-test="featured-product-center"]')
      .find('[data-test="ProductsList_Products"]')
      .find('[data-test="ProductsList_center_0 order-5"]')
      .click({ force: true });
    })
    it("Product_Center_6", function(){
      cy.get('[data-test="featured-product-center"]')
      .find('[data-test="ProductsList_Products"]')
      .find('[data-test="ProductsList_center_0 order-6"]')
      .click({ force: true });
    })
    it("Product_Center_7", function(){
      cy.get('[data-test="featured-product-center"]')
      .find('[data-test="ProductsList_Products"]')
      .find('[data-test="ProductsList_center_0 order-7"]')
      .click({ force: true });
    })
    it("Product_Center_8", function(){
      cy.get('[data-test="featured-product-center"]')
      .find('[data-test="ProductsList_Products"]')
      .find('[data-test="ProductsList_center_0 order-8"]')
      .click({ force: true });
    })
    it("Product_Center_9", function(){
      cy.get('[data-test="featured-product-center"]')
      .find('[data-test="ProductsList_Products"]')
      .find('[data-test="ProductsList_center_0 order-9"]')
      .click({ force: true });
    })
    it("Product_Center_10", function(){
      cy.get('[data-test="featured-product-center"]')
      .find('[data-test="ProductsList_Products"]')
      .find('[data-test="ProductsList_center_0 order-10"]')
      .click({ force: true });
    })
  })