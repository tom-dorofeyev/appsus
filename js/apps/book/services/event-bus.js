var bus = new Vue();
bus.$on('show-msg', (ev)=>{
    console.log('The Event just Happened', ev);
})

export default bus;