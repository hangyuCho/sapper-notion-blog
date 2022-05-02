<script context="module" lang="ts">
    import { renderBlock, getBlock, notion } from '../../notion'
    console.log("preload")
</script>
<script lang="ts">
    export let pageInfo: any;
	export async function blockInit() {
        try {
            //console.log("call blockinit")
            let result = await renderBlock(pageInfo);
            //console.log("call blockinit result : ", result)
            return result;
        } catch (e) {
            console.log(e);
        }
        //return new Promise(resolve => {
            //resolve(renderBlock(pageInfo, await getBlock(pageInfo.id)))
        //}
        //const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        //const data = await res.json();
        //return data
    }
    //console.log("init")
</script>
{#await blockInit()}
    <h1>loading...</h1>
{:then result} 
    {#if !result}
    <p>nothing...</p>
    {:else}
    {@html result}
    {/if}
{/await}

