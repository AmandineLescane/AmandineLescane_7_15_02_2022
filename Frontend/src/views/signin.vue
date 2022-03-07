<template>
    <div class="div_img">
        <img src="../assets/icon-above-font.png"  alt="auth_img" class="auth_img">
    </div>
    <div class="auth_bloc">
        <div class="auth_title">
            <h2>Authentification</h2>
            <h3>Je n'ai pas encore de compte</h3>
            <a href="./login.vue"><h5>J'ai un compte</h5></a>
        </div>
        <form>
            <input type="text" name="firstname" placeholder="Prénom">
            <input type="text" name="lastname" placeholder="Nom">
            <input type="text" name="email" placeholder="Email">
            <input type="text" name="password" placeholder="Mot de passe">
            <input class="input_signin" type="submit" value="S'inscrire">
        </form>
    </div>

</template>

<script>
</script>

<style lang="scss" scoped> 
.auth_bloc{
    background : #ffebeb;
    border-radius : 50px;
    padding-top : 10px;
    padding-bottom: 10px;
}
.auth_title{
    display : flex;
    font-family: 'Roboto';
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
    background-color : #f9d7d6;
    color: black;
    font-weight: bold;
    transition: cubic-bezier(.2, 3, .4, 1) .4s;
    &:hover{
        dar: 50%;
        transform: scale(1.1);
}
}
a{
    color: #ed4033;;
}
</style>