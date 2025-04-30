function strikeStr(str) {
    const words = str.split(" ");
    if (words.length <= 3) {
      return str;
    }
    
    return words.join("\n");
  }
  
  console.log(strikeStr("Це тестовий рядок з багатьма словами"));

  
  console.log(strikeStr("Три слова тут"));
  
