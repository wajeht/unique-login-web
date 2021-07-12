(function main() {
    const generateButton = document.getElementById('generate');
    generateButton.addEventListener('click', () => {
        // api
        const defaultPassword = 'http://localhost:3000/password';
        const passwordByLength = 'http://localhost:3000/password/30';

        //label
        const output = document.getElementById('output');

        fetch(defaultPassword)
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                const { password } = json;

                output.innerHTML = password;
            })
            .catch((err) => {
                console.log(err);
            });
    });
})();
