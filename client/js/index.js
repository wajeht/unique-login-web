(function main() {
    window.addEventListener('load', () => {
        const url = 'http://localhost:3000/password';

        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                const { password } = json;
                console.log({ defaultPassword: password });
            })
            .catch((err) => {
                console.log(err);
            });
    });
})();
