const { createApp } = Vue

    createApp({
        data() {
            return {
            message: 'Hello World!',
            image: 'img/world.png'
            }
        }
    }).mount('#app')