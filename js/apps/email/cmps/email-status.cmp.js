'use strict'

export default {
    props: ['status'],
    template: `
    <section>
            <div class="status-bar">
            <div :style="{width:status}" class="status-loader" >{{status}}</div>
            </div>
    </section>

    `,
}