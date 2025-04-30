function checkSpam(str) {
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('росі') || lowerStr.includes('xxx');
  }
  
  console.log(checkSpam("Це повідомлення містить РОСІ"));
  console.log(checkSpam("безпечний текст"));
  console.log(checkSpam("Прихована реклама XXX inside"));
  
