<script lang="ts">
    export let open = false;
    export let onClick = () => {
        open = !open;
    }
</script>
<button on:click={onClick}>
<svg class:open viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5">
    <path class="top" d="m 30,33 l 38, 35" />
    <path class="middle" d="m 30,67 l 38, -35" />
    <path class="bottom" d="m 70,67 l 38, -35" />
</svg>
</button>

<style>
    .top {
        stroke-dasharray: 40 160;
    }
    .middle {
        transform-origin: 50%;
    }
    .bottom {
        stroke-dasharray: 40 85;
    }
    .open {
        transform: rotate(45deg);
    }
    .open .top, .open .bottom {
        stroke-dashoffset: -64px;
    }
    .open .middle {
        transform: rotate(90deg);
    }
</style>