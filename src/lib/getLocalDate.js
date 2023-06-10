
export const getLocalDate = (isoDateString) => {
    const date = new Date(isoDateString);
    const localDateString = date.toLocaleString();
    return localDateString;
}