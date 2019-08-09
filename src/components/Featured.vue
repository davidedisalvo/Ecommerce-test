<template>
    <div class="featured">

        <div class="item first"></div><div class="item second"></div><div class="item third"></div><div class="item fourth"></div>
    
        </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.featured {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 300px;
}

.first {
    background: url('../assets/static/images/delivery.jpg');
    background-size: cover;
}
</style>

