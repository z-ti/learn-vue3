<template>
    <div :class="$style.container"> {{ msg }} </div>
</template>
<script>

export default {
    setup() {
        return {
            msg: 'css module'
        }
    }
}
</script>
<style module>
    .container {
        color: peru;
    }
</style>
