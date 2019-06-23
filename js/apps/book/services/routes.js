
import homePage from '../cmp/home-page.cmp.js';
import bookapp from '../cmp/book-app.cmp.js';
import bookDetails from '../cmp/book-details.cmp.js'


export default [
    { path: '/', component: homePage},
    { path: '/bookApp', component: bookapp },
    { path: '/bookApp/:theBookId', component: bookDetails}
]
