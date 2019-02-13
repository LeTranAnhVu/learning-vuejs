new Vue ({
    el: "#app",
    data: {
        msg: 'd',
        msg2: 'd',
        price: null,
        radioValue: false,
        orders: [],
        menu: [
            {
                name: 'com chien chay toi',
                value: '50k'
            },
            {
                name: 'com cuon thit bo pho mai',
                value: '60k'
            },
            {
                name: 'bo luc lac xao khoai tay',
                value: '70k'
            },
        ]
    },
    methods: {
        divFire: function(){
            console.log('div clicked');
            
        },
        btnFire: function() {
            console.log('btn clicked');
        },
        submit: function() {
            console.log('submit fire');
            
        }
    }
});