const Capital_ALPHABET_LIST = [...Array(26)].map((v, i) =>
  String.fromCodePoint(i + 65)
);

const Small_ALPHABET_LIST = [...Array(26)].map((v, i) =>
  String.fromCodePoint(i + 97)
);

const ALPHABET_LIST = [...Capital_ALPHABET_LIST, ...Small_ALPHABET_LIST];

const CaesarCryptDecipher = (param: string) => {
  const splitParam = param.split("");

  const decipheredParamList = splitParam.map((word) => {
    if (!ALPHABET_LIST.includes(word)) {
      return word;
    }

    // 3文字ずらす
    const index = ALPHABET_LIST.indexOf(word);
    if (index - 3 >= 0) {
      return ALPHABET_LIST[index - 3];
    } else {
      return ALPHABET_LIST[index - 3 + 52];
    }
  });

  let decipheredParam = "";
  decipheredParamList.forEach((param) => (decipheredParam += param));

  return decipheredParam;
};

const param = "fsdz{Fdhvdu_flskhu_lv_fodvvlfdo_flskhu}";
const decipheredParam = CaesarCryptDecipher(param);
console.log(decipheredParam);
