<template>
    <div class="button">
        <button>X</button>
    </div>
</template>

<script></script>

<style scoped>
.button {
    position: relative;
}
button {
    background: red;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    border: none;
    cursor: pointer;
    position: absolute;
    top: -145px;
    right: 5px;
}
button:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
        0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
</style>
