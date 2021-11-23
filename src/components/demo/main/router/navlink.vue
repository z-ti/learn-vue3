<template>
    <div :class="{active: isActive}" @click="navigate">
        {{route.name}}
    </div>
</template>
<script>
import { RouterLink, useLink } from 'vue-router'

export default {
    props: {
        ...RouterLink.props,
        inactiveClass: String
    },
    setup(props) {
        const { route, href, isActive, isExactActive, navigate } = useLink(props)
        console.log('routeLink::::', route, href, isActive, isExactActive, navigate)
        return {
            route,
            isActive,
            navigate
        }
    }
}
</script>
<style scoped>
.active {
    background-color: pink;
}
</style>
