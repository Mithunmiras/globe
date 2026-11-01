class LocalStorage {
  static theme = "light";
  static lng = {
    displayName: "English (India /en_IN)",
    code: "en_IN",
  };
  static userLoggedIn = false;
  static userDetails = {
    permission: [],
    profileImage: "",
    userName: "",
    email: "",
    mobileNo: "",
  };
  static userPermission = [];
}

export default LocalStorage;
