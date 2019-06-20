import homepageCmp from './pages/homepage.cmp.js';
import emailApp from './apps/email/cmps/email-app.cmp.js';
import emailDetails from './apps/email/cmps/email-details.cmp.js';
import keepApp from './apps/keep/cmps/keep-app.cmp.js';
import bookApp from './apps/book/cmps/book-app.cmp.js';

export default [
    { path: '/', component: homepageCmp },
    { path: '/email', component: emailApp },
    { path: '/email/details', component: emailDetails },
    { path: '/keep', component: keepApp },
    { path: '/book', component: bookApp },
]