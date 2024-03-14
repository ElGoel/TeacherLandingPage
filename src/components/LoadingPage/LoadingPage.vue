<template>
    <div :class="{'loading-container': true, loading: isLoading, visible: isLoading }">
        <span class="loader">
        </span>
    </div>
</template>

<script>
export default {
    name: 'LoadingPage',

    props: ['isLoading'],
}

</script>