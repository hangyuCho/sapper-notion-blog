import { Client } from "@notionhq/client"
import { typescript, java, javascript, xml } from "svelte-highlight/languages";
import { LanguageType } from "./enums"

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
    let arrRichText = [];
    arr_rich_text = arr_rich_text || [];
    arr_rich_text.forEach((rich_text: any) => {
        let { content, link } = rich_text.text;
        let strText = content;
        let hasLink = link != null;
        if (hasLink) {
            let strLink = rich_text.href;
            strText = `<a href="${strLink}">${strText}</a>`
        }
        arrRichText.push(strText);
    });
    return arrRichText.join();
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
    }
}
