export const bn = (n) => String(n).replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[d]);
export const taka = (n) => `${bn(n)} টাকা`;
