// 0埋め関数
export const zeroPadding = (no: number, digit: number) => {
    return ('0'.repeat(digit) + no).slice( (-1 * digit) );
}