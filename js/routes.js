import homepageCmp from './pages/homepage.cmp.js';
import appNav from './pages/app-nav.cmp.js';
import emailApp from './apps/email/cmps/email-app.cmp.js';
import emailStatus from './apps/email/cmps/email-status.cmp.js';
import emailDetails from './apps/email/cmps/email-details.cmp.js';
import emailCompose from './apps/email/cmps/email-compose.cmp.js';
import emailComposeFull from './apps/email/cmps/email-compose-full.cmp.js';
import keepApp from './apps/keep/cmps/keep-app.cmp.js';
import bookApp from './apps/book/cmps/book-app.cmp.js';
import bookDetails from './apps/book/cmp/book-details.cmp.js';

export default [
    { path: '/', component: homepageCmp },
    { path: '/nav', component: appNav },
    { path: '/status', component: emailStatus },
    { path: '/email', component: emailApp },
    { path: '/email/new', component: emailComposeFull },
    { path: '/email/details/:emailId', component: emailDetails },
    { path: '/keep', component: keepApp },
    { path: '/book', component: bookApp },
    { path: '/book/:theBookId', component: bookDetails},
]