class ConfigAPIURL {
  // in production the app is served by the same server as the API,
  // so an empty base url keeps the requests relative to the current origin.
  static baseUrl =
    import.meta.env.VITE_REACT_APP_BaseUrl ||
    import.meta.env.VITE_REACT_APP_Dev_BaseUrl ||
    "";

  static login = this.baseUrl + "/auth/login";
  static session = this.baseUrl + "/auth/session";

  // public website endpoints (no session needed)
  static contact = this.baseUrl + "/contact";
  static newsletter = this.baseUrl + "/newsletter";
  static publicSettings = this.baseUrl + "/public/settings";
  static publicContent = this.baseUrl + "/public/content";
  static publicPageContent = this.baseUrl + "/public/page-content";
}

export default ConfigAPIURL;
