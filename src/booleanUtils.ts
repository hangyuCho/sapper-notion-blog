export const isNotEmptyByDetailMenu = (item: any) => { return item.properties.상세메뉴.select != null }
export const isNotEmptyByDesc = (item: any) => { return item.properties.설명.rich_text.length > 0 }
export const isNotEmptyByName = (item: any) => { return item.properties.이름.title.length > 0 }
export const isNotEmptyByFilterKeyword = (item: any) => { return item.properties.필터키워드.rich_text.length > 0 }
export const isInActiveCard = (item: any) => { return item.properties.비활성여부.checkbox == false }
export const isIterable = (x: unknown): boolean => { return !!x?.[Symbol.iterator]; }
