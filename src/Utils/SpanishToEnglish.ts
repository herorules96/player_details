export const spanishToEnglish = (str: string) => {
  return str.replace(/[áéíóúñÁÉÍÓÚÑ]/gi, function (match) {
    switch (match) {
      case "á":
        return "a";
      case "é":
        return "e";
      case "í":
        return "i";
      case "ó":
        return "o";
      case "ú":
        return "u";
      case "ñ":
        return "n";
      case "Á":
        return "A";
      case "É":
        return "E";
      case "Í":
        return "I";
      case "Ó":
        return "O";
      case "Ú":
        return "U";
      case "Ñ":
        return "N";
      default:
        return "";
    }
  });
};
