const app = new Vue({
    el: "#app",
    data: {
        title: "Hola Mundo con Vue",
        fruits: [
            "Manzana",
            "Pera", 
            "Platano"
        ],
        users: [
            { nombre: "Francisco", edad: 13 },
            { nombre: "Roberto", edad: 18 },
            { nombre: "Carlos", edad: 35 }
        ],
        total: 0,
        bg: "bg-warning",
        color: false,
        message: "Hola Mundo!",
        counter: 0
    },
    methods: {
        addUser () {
            this.users.push({
                nombre: this.users.nombre,
                edad: this.users.edad
            });

            this.users.nombre = ""
            this.users.edad = ""
            
            console.log("Agregamos usuario");
        }
    },
    computed: {
        sumAges () {
            this.total = 0;
            for (user of this.users) {
                this.total += user.edad;
            }
            return this.total;
        },
        reversed () {
            return this.message.split("").reverse().join("");
        },
        changeColor () {
            return {
                'bg-success' : this.counter <= 20,
                'bg-warning' : this.counter > 20 && this.counter < 50,
                'bg-danger' : this.counter >= 50
            }
        }
    }
});