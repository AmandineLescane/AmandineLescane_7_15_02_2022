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
            <input type="text" name="email" placeholder="Email">
            <input type="text" name="password" placeholder="Mot de passe">
            <input class="input_login" type="submit" value="Se connecter" v-on:click="login()">
        </form>
        <p>{{ formErr }}</p>
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
            const user = {
                email: this.email,
                password: this.password,
            }
            fetch('http://localhost:3000/api/user/login', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json',
                },
                mode: 'cors',
            })
            .then(res => {
                if(res.status === 200){
                    localStorage.setItem("userLog", JSON.stringify(res.data));
                    this.$router.push('/feed');
                }
            })
            .catch(()=> {
                localStorage.clear();
                alert ("L'adresse email et le mot de passe renseignés ne sont pas valides")
            })
        }
    }
}
</script>

<style lang="scss" scoped> 
*{
    font-family:'quicksand';
}
.auth_block{
    background : #ffebeb;
    border-radius : 50px;
    padding-top : 10px;
    padding-bottom: 10px;
    border: solid 2px #f9d7d6;
    margin: 15px;
}
.auth_title{
    display : flex;
    color: #ed4033;
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
        border: solid 3px #f9d7d6;
        border-radius : 10px;
        margin-top: 5px;
        margin-bottom: 5px;
        width : 90%;
        height: 30px;
    }
}
.input_login{
    width: 50%;
    background-color : #f9d7d6;
    color: black;
    font-weight: bold;
    transition: cubic-bezier(.03,.36,.63,1.17) .3s;
    &:hover{
        transform: scale(1.1);
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }
}
a{
    color: #ed4033;;
}
</style>