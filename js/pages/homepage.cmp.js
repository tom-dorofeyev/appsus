'use strict'
import appNav from './app-nav.cmp.js'

export default {
    template: `
    <section class="homepage-container">
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">Home</a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
          <router-link to="/email"><a class="nav-link js-scroll-trigger">Emails</a></router-link>
          </li>
          <li class="nav-item">
          <router-link to="/keep"><a class="nav-link js-scroll-trigger">Notes</a></router-link>
          </li>
          <li class="nav-item">
          <router-link to="/book"><a class="nav-link js-scroll-trigger" href="#signup">Books</a></router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#signup">About</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    <div class="container d-flex h-100 align-items-center">
      <div class="mx-auto text-center">
        <h1 class="mx-auto my-0 text-uppercase">APPSUS</h1>
        <h2 class="text-white-50 mx-auto mt-2 mb-5">A Powerfull, responsive, one page App to handel your Emails Notes and Books</h2>
      </div>
    </div>
    </section>
    `,
    components: {
        appNav,
    },
    methods: {
    },
    data() {
        return {

        }
    },
}