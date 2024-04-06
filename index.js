

function findMatching(drivers, query) {
    
    const lowerQuery = query.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase() === lowerQuery);
  }
  

  function fuzzyMatch(drivers, query) {
    
    const lowerQuery = query.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase().startsWith(lowerQuery));
  }
  
  
  function matchName(drivers, query) {
    return drivers.filter(driver => driver.name === query);
  }
  