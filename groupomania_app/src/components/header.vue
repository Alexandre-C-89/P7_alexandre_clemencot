<template>
    <div class="Header">
        <div class="header__logo">
            <h1>Groupomania</h1>
        <ul>
            <li>Connection</li>
            <li>Créer un compte</li>
            <li></li>
        </ul>
        </div>

    </div>
</template>

<script>

</script>

<style>
#Header{
    background-color: #2c3e50;
    border: 1px solid black;
}
.header__logo{
    margin: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
img{
    width: 5%;
    height: 5%;
}
h1{
    margin: 10px;
}
ul{
    text-decoration: none;
    list-style: none;
    display: flex;
    flex-direction: row;
}
li{
    margin: 10px;
}
</style>