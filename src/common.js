export const formatError = (text) =>
    `<span style="color: red;">${text}</span>`;

export function zeroFirstFormat(value) {
    if (value < 10) {
        value = "0" + value;
    }
    return value;
}