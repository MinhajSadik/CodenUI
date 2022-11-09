class ProductDto {
  id;
  name;
  price;
  image;
  description;
  viewsCount;
  downloadCount;

  constructor(product) {
    this.id = product._id;
    this.name = product.name;
    this.price = product.price;
    this.description = product.description;
    this.image = product.image;
    this.viewsCount = product.viewsCount;
    this.downloadCount = product.downloadCount;
  }
}

export default ProductDto;
