import { Client } from "@notionhq/client"
import { typescript, java, javascript, xml, css } from "svelte-highlight/languages";
import { LanguageType, ParagraphType } from "./enums"

export const notion = new Client({
    auth: process.env.NOTION_TOKEN
});

export const getDatabase = async (databaseId: string) => {
    const response = await notion.databases.query({
        database_id: databaseId,
    });
    return response.results;
}

export const getDatabaseByCondition = async (databaseId: string, filter: any) => {
    const response = await notion.databases.query({
        database_id: databaseId,
        filter 
    });
    return response.results;
}

export const getPage = async (pageId: string) => {
    const response = await notion.pages.retrieve({
        page_id: pageId,
    });
    return response;
}

export const getBlocks = async (blockId: string) => {
    const blocks: any = [];
    let cursor: string;
    blockId = blockId || "";
    while (true) {
        const { results, next_cursor } = await notion.blocks.children.list({
            start_cursor: cursor,
            block_id: blockId,
        });
        blocks.push(...results);
        if(!next_cursor) {
            break;
        }
        cursor = next_cursor;
    }

    return blocks;
}

export const getBlock = async(blockId: any) => {
    const response = await notion.blocks.children.list({
        block_id: blockId,
    });
    return response.results;
}

export const renderText = (arr_rich_text: any) => {

  /*
            <!--
        {#each item.paragraph.rich_text as r_text}
          {#if r_text != null }
            {#if item.paragraph.rich_text[0] != null }
            {console.log(r_text)}
            <p>{@html renderText(r_text.plain_text)}</p>
          {/if}
          {:else}
            <p>{@html renderText(item.paragraph.rich_text.plain_text)}</p>
          {/if}
        {/each}
            -->
*/

  
    let arrRichText = [];
    arr_rich_text = arr_rich_text || [];
    arr_rich_text.forEach((rich_text: any) => {
        let strText = "";
        if (rich_text.type == ParagraphType.Text) {
          let { content, link } = rich_text.text;
          let { bold, italic, strikethrough, underline, code, color } = rich_text.annotations;
          let hasAnnotation = bold || italic || strikethrough || underline || code || color;
          strText += hasAnnotation ? `
          <span style="
            ${bold ? "font-weight: 800;" : ""}
            ${italic ? "font-style: italic;" : ""}
            ${strikethrough ? "" : ""}
            ${underline ? "text-decoration: underline;" : ""}
            ${code ? "" : ""}
            ${color ? "color: " + color + ";" : ""}
          ">` : "";
          strText += content;
          let hasLink = link != null;
          if (hasLink) {
              let strLink = rich_text.href;
              strText = `<a href="${strLink}">${strText}</a>`
          }
          strText += hasAnnotation ? "</span>" : "";
        } else if (rich_text.type == ParagraphType.Equation) {
          strText = `$$${rich_text.equation.expression}$$`;
        }
        arrRichText.push(strText);
    });
    {console.log(arrRichText.join(""));}
    return arrRichText.join("").replace(/\n/g, "");
}

export const renderCode = (code: any) => {
    return code.rich_text.map((obj: any) => obj.plain_text).join("\n");
}

export const getLanguage = (lang: string) => {
    switch (lang) {
        case LanguageType.Java: { return java; }
        case LanguageType.JavaScript: { return javascript; }
        case LanguageType.TypeScript: { return typescript; }
        case LanguageType.Xml: { return xml; }
        case LanguageType.Css: { return css; }
    }
}
