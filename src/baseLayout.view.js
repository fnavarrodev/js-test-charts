const BaseLayoutView = {
    render() {
        document.querySelector('#app').innerHTML += `
            <header></header>
            <main>
                <article class="content">
                    <section class="charts" id="charts"></section>
                </article>
            </main>
            <footer></footer>
        `;
    },
};

export {BaseLayoutView};
