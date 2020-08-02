const TheNav = {
    data() {
        return {
            navUl: [
                {
                    id: 1,
                    htmlId: 'nav-1',
                    aHref: './' 
                }
            ]
        }
    },
    template: `
    <nav class="navbar">
        <a href="./" class="nav-log navbar-brand">
            <img src="./assets/got-logo.png" alt="got-logo" class="got-logo" />
        </a>
        <ul class="nav justify-content-end">
            <li v-for="(nav,index) in navUl" :key="index" class="nav-item" :id="nav.htmlId">
                <a :href="nav.aHref" class="nav-link">Characters</a>
            </li>
        </ul>
    </nav>
    `
}