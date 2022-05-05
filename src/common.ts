export const groupBy = (arr, prop) => {
    return arr.reduce((acc, obj) => {
        var key = obj[prop];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}