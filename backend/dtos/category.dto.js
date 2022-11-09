class CategoryDto {
  id;
  name;
  productId;

  constructor(category) {
    this.id = category._id;
    this.name = category.name;
    this.productId = category.productId;
  }
}

export default CategoryDto;
