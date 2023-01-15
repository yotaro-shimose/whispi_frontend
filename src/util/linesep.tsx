export const lineSep = (text: string) => text.split("\n").map((line, key) => <span key={key}>{line}<br /></span>);
