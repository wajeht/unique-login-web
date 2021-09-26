Vue.createApp({
  data() {
    return {
      checkedPassword: [],
      checkedUsername: [],
      enteredLength: 14,
      result: {
        username: "",
        password: "",
      },
      isError: false,
      errorMessage: "",
    };
  },
  computed: {
    showResult() {
      return this.isError ? "app__error" : "app__result";
    },
  },
  methods: {
    /**
     * This function will return a list of generated urls from user
     * selected options.
     * @returns {Array} list of generated urls
     */
    generateUrls() {
      try {
        // password
        const passwordParams = this.checkedPassword.join("/");
        const passwordLength = this.enteredLength;
        const passwordAPI = `https://uniquelogin.app/api/password/${passwordLength}/${passwordParams}`;

        // username
        const usernameParams = this.checkedUsername.join("/");
        const usernameAPI = `https://uniquelogin.app/api/username/${usernameParams}`;

        return [passwordAPI, usernameAPI];
      } catch (error) {
        this.isError = true;
        this.errorMessage = error;
      }
    },
    /**
     * This function will fetch api from given urls as input
     * @param {Array} urls
     * @returns {Promise}
     */
    async fetchALL(urls) {
      try {
        const data = await Promise.all(
          urls.map((url) => fetch(url).then((responses) => responses.json()))
        );
        return data;
      } catch (error) {
        this.isError = true;
        this.errorMessage = error;
      }
    },
    /**
     * Generate unique login and display it in result box
     */
    async generateUniqueLogin() {
      try {
        this.isResult = true;

        this.isLoading = true;
        const urls = this.generateUrls();
        const responses = await this.fetchALL(urls);
        const data = await responses;

        this.result.password = data[0].password;
        this.result.username = data[1].username;
      } catch (error) {
        this.isError = true;
        this.errorMessage = error;
      }
    },
  },
}).mount(".app");
