<script context="module" lang="ts">
  export const databaseId = process.env.NOTION_DATABASE_ID;

</script>

<script lang="ts">
  export let segment: string;
  segment;
</script>
<div>
  <slot />
</div>

<style>
  /*
  div {
    padding: 0 40px;
    max-width: 900px;
    margin: 0 auto;
  }
  */
</style>