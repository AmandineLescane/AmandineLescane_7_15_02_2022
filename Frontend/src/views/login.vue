<template>
    <div class="div_img">
        <img src="../assets/icon-above-font.png"  alt="auth_img" class="auth_img">
    </div>
    <div class="auth_block">
        <div class="auth_title">
            <h2>Bienvenue !</h2>
            <h3>Je me connecte à mon compte</h3>
            <router-link to="/signup"><h5>Je n'ai pas de compte</h5></router-link>
        </div>
        <form>
            <input 
                type="text" 
                placeholder="Email"
                v-model="email"
            >
            <input 
                type="password" 
                placeholder="Mot de passe"
                v-model="password"
            >
            <input 
                class="input_login" 
                type="submit" 
                value="Se connecter" 
                @click.prevent="login()"
            >
            <p id="error">{{ formErr }}</p>
        </form>
    </div>

</template>

<script>
export default {
    name : "login",
    data(){
        return {
            email: "",
            password: "",
            formErr: null,
        }
    },
    methods: {
        login(){
            let user = {
                email: this.email,
                password: this.password,
            };
            if (this.email === "" || this.password === ""){
                return this.formErr = "Veuillez remplir les champs vides ! "           
            } 
            else {            
            fetch('http://localhost:3000/api/user/login', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json',
                },
                mode: 'cors',
            })
            .then(res => {
                res.json()
                .then(data => {
                    let token = data.token;
                    let userId = data.userId;
                    let admin = data.admin;
                    localStorage.setItem("token", JSON.stringify(token));
                    localStorage.setItem("userId", JSON.stringify(userId));
                    localStorage.setItem("admin", JSON.stringify(admin));
                    this.$router.push('/feed');
                })
            })
            .catch(()=> {
                localStorage.clear();
                return this.formErr = "L'adresse email et/ou le mot de passe renseignés sont incorrects";
            })
            }
        }
    }
}
</script>

<style lang="scss" scoped> 
@import "../style.scss";
.auth_block{
    background : $background-color;
    border-radius : 50px;
    padding-top : 10px;
    padding-bottom: 10px;
    border: solid 2px $border-color;
    margin: 25px;
}
.auth_title{
    display : flex;
    color: $font-color;
    flex-direction : column;
    align-items : center; 
}
h2{
    margin-top: 15px;
}
h3{
    margin-bottom: 10px;
    margin-top: 10px;
    font-weight: 400;
}
h5{
    margin-bottom: 5px;
    margin-top: 10px;
}
.div_img{
    display: flex;
    flex-direction : row;
    justify-content: center;
    margin-right: 20px;
    margin-left: 20px;
    .auth_img{
        width: 200px;
    }
}
form{
    display: flex; 
    flex-direction : column;
    align-items : center;
    margin-bottom: 20px;
    input{
        border: solid 3px $border-color;
        border-radius : 10px;
        margin-top: 5px;
        margin-bottom: 5px;
        width : 90%;
        height: 30px;
    }
}
.input_login{
    @include auth-button;
}
a{
    color: $font-color;;
}
#error{
    font-weight: 700;
    color : $font-color;
}
</style>