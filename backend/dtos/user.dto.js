class UserDto {
  //dto means: d: data t: transform o: object
  id;
  name;
  email;
  role;
  avatar;
  constructor(user) {
    this.id = user._id;
    this.name = user.name;
    this.email = user.email;
    this.role = user.role;
    this.avatar = user.avatar;
  }
}

export default UserDto;
