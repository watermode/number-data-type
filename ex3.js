function truncate(str, maxlength) {
    if (str.length > maxlength) {
      return str.slice(0, maxlength - 1) + "…";
    }
    return str;
  }
  
  console.log(truncate("Це дуже довгий рядок тексту", 20));
  console.log(truncate("Короткий", 20));
  
