const BaseLayoutView = {
    render() {
        document.querySelector('#app').innerHTML += `
            <header></header>
            <main>
                <article class="content">
                    <section class="charts">
                        <div class="siema siemaChart" id="charts">
                        </div>
                    </section>
                </article>
            </main>
            <footer></footer>
        `;
    },
};

export {BaseLayoutView};
