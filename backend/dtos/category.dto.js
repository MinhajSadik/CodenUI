class CategoryDto {
  id;
  name;
  products;

  constructor(category) {
    this.id = category._id;
    this.name = category.name;
    this.products = category.products;
  }
}

export default CategoryDto;
