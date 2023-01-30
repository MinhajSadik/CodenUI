class ProductDto {
  id;
  name;
  price;
  image;
  productId;
  // categoryId;
  viewsCount;
  description;
  downloadCount;

  constructor(product) {
    this.id = product._id;
    this.name = product.name;
    this.image = product.image;
    this.price = product.price;
    this.productId = product.productId;
    // this.categoryId = product.categoryId;
    this.viewsCount = product.viewsCount;
    this.description = product.description;
    this.downloadCount = product.downloadCount;
  }
}

export default ProductDto;
