import { Client } from "@notionhq/client"
import { BlockType } from "./enums";

export const notion = new Client({
    auth: process.env.NOTION_TOKEN
});

export const getDatabase = async (databaseId: string) => {
    const response = await notion.databases.query({
        database_id: databaseId,
    });
    return response.results;
}

export const getPage = async (blockId: string) => {
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
    //console.log(response.results);
    return response.results;
}

export const  renderBlock = async(pageInfo: any)  =>  {
    let { type, id } = pageInfo
    switch (type) {
        case BlockType.Heading_1:  {
            return `<h1>${renderText(pageInfo.heading_1.rich_text)}</h1>`;
        }
        case BlockType.Heading_2:  {
            return `<h2>${renderText(pageInfo.heading_2.rich_text)}</h2>`;
        }
        case BlockType.Heading_3:  {
            return `<h3>${renderText(pageInfo.heading_3.rich_text)}</h3>`;
        }
        case BlockType.Numbered_list_item: {
            return `${renderText(pageInfo.numbered_list_item.rich_text)}`;
        }
        case BlockType.Table: {
            //console.log(pageInfo);
            //console.log(pageInfo.table.rich_text);
            //let childBlock = await getBlock(id);
            const childBlock = await notion.blocks.children.list({
                block_id: id,
            });
            let { results } = childBlock;
            let arrRows = [];
            for(let block of results) {
                let objCell = block.table_row.cells || [];
                let arrCols = [];
                for(let cell of objCell) {
                    //console.log(cell);
                    arrCols.push(`<div> class="col">${renderText(cell)}</div>`);
                }
                arrRows.push(`
                <div> class="row">
                ${arrCols.join()}
                </div>
                `);
            }
            return `<section>${arrRows.join()}</section>`;
        }
        default: {
            return `<h1>${type} is not support..</h1>`
        }
    }

};
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
        arrRichText.push(`
            <p>${strText}</p>
        `);
    });
    return arrRichText.join();
}