<template>
    <div class="div_img">
        <img src="../assets/icon-above-font.png"  alt="auth_img" class="auth_img">
    </div>
    <div class="auth_block">
        <div class="auth_title">
            <h2>Bienvenue !</h2>
            <h3>Je crée mon compte</h3>
            <router-link to="/login"><h5>J'ai déjà un compte</h5></router-link>
        </div>
        <form>
            <input type="text" name="prenom" placeholder="Prénom" v-model="prenom">
            <input type="text" name="nom" placeholder="Nom" v-model="nom">
            <input type="text" name="email" placeholder="Email" v-model="email">
            <input type="text" name="password" placeholder="Mot de passe" v-model="password">
            <input class="input_signin" type="submit" value="S'inscrire" v-on:click="submit()">
        </form>
        <p>{{ formErr }}</p>
    </div>

</template>

<script>
export default {
    name : "signup",
    data(){
        return {
            prenom: "",
            nom: "", 
            email: "",
            password: "",
            formErr: null,
        }
    },
    methods: {
        submit(){
            let newUser = {
                name : this.nom,
                lastname: this.prenom,
                email: this.email, 
                password: this.password,
            };
            let login = {
                email: this.email, 
                password: this.password,
            };

            const regExpEmail = ('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
            const regExpPassword = ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

            if(regExpEmail.test(email.value) === false || email.value == ""){
                return this.formErr = "Veuillez rentrer une adresse mail valide";
            }
            else if (regExpPassword.test(password.value) === false || password.value == ""){
                return this.formErr = "Veuillez rentrer un mot de passe valide (au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial";
            } else {
            fetch('http://localhost:3000/api/user', {
                        method: 'POST',
                        body: JSON.stringify(newUser),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        mode: 'cors',
                    })
            .then(res => {
                if(res.status === 201){
                    fetch('http://localhost:3000/api/user/login', {
                        method: 'POST',
                        body: JSON.stringify(login),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        mode: 'cors',
                    })
                    .then(res => {
                        if(res.status === 200){
                            const content = res.json();
                            localStorage.setItem("userLog", JSON.stringify(content));
                            localStorage.setItem("token", JSON.stringify(content.token));
                            this.$router.push('/feed');
                        }
                    })
                    .catch(()=> {
                        localStorage.clear();
                        alert ("L'adresse email et le mot de passe renseignés ne sont pas valides")
                    })
                }
            })
            .catch(()=> {
                alert ("L'adresse email est déjà utilisé")
            })
            }
        }
    }      
}
</script>

<style lang="scss" scoped> 
*{
    font-family : 'Quicksand';
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
    font-family: 'Quicksand';
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
.input_signin{
    width: 50%;
    font-family: 'Quicksand';
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
.fa-solid{
    color: #ed4033
}
</style>