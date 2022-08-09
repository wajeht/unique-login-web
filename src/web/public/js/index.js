Vue.createApp({
  data() {
    return {
      checkedPassword: [],
      checkedUsername: [],
      enteredLength: 14,
      result: {
        username: '',
        password: '',
      },
      isError: false,
      errorMessage: '',
    };
  },
  computed: {
    showResult() {
      return this.isError ? 'app__error' : 'app__result';
    },
  },
  methods: {
    /**
     * This function will return a list of generated urls from user
     * selected options.
     * @returns {Array} list of generated urls
     */
    generateUrls() {
      // password
      const passwordParams = this.checkedPassword.join('/');
      const passwordLength = this.enteredLength;
      const passwordAPI = `/api/password/${passwordLength}/${passwordParams}`;

      // username
      const usernameParams = this.checkedUsername.join('/');
      const usernameAPI = `/api/username/${usernameParams}`;

      return [passwordAPI, usernameAPI];
    },
    /**
     * Generate unique login and display it in result box
     */
    async generateUniqueLogin() {
      try {
        this.isResult = true;

        this.isLoading = true;
        const urls = this.generateUrls();
        const data = await Promise.all(
          urls.map((url) =>
            fetch(url).then((res) => {
              if (res.status === 429) {
                throw new Error('Too many requests, please try again later!');
              } else {
                return res.json();
              }
            }),
          ),
        );

        this.result.password = data[0].password;
        this.result.username = data[1].username;
      } catch (error) {
        this.isError = true;
        this.errorMessage = error.message;
      }
    },
  },
}).mount('.app');
