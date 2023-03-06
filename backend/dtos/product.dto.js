class ProductDto {
  id;
  tags;
  name;
  price;
  image;
  productId;
  thumbnail;
  categoryId;
  viewsCount;
  description;
  categoryName;
  downloadCount;
  techStack;


  constructor(product) {
    this.id = product._id;
    this.name = product.name;
    this.price = product.price;
    this.image = product.image;
    this.productId = product.productId;
    this.categoryId = product.categoryId;
    this.description = product.description;
    this.categoryName = product.categoryName
    this.thumbnail = product.thumbnail
    this.tags = product.tags
    this.techStack = product.techStack
  }
}

export default ProductDto;
