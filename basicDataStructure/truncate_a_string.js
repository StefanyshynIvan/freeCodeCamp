function truncateString(str, num) {
    for(var i = 0; i <= str.length - 1; i += 1){
      if(num >= str.length){
        return str;
      }else {
        return str.substring(0, num) + '...';
      }
    }
    }
    
    truncateString("A-tisket a-tasket A green and yellow basket", 8);