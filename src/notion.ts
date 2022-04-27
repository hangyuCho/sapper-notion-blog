import { Client } from "@notionhq/client"
import { config } from "dotenv"
config();

const notion = new Client({
    auth: process.env.NOTION_TOKEN
});

export const getDatabase = async (databaseId: string): Promise<Object> => {
    const response = await notion.databases.query({
        database_id: databaseId,
    });
    return response.results;
}

export const getPage = async (blockId: string): Promise<Object> => {
    const blocks: any = [];
    let cursor: string;
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