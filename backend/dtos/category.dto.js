class CategoryDto {
  id;
  name;
  products;
  categoryId;

  constructor(category) {
    this.id = category._id;
    this.name = category.name;
    this.categoryId = category.categoryId;
    this.products = category.products;
  }
}

export default CategoryDto;
