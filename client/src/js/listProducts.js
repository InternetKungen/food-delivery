(async (listEl) => {
    if(listEl) {
      const resp = await getData("http://localhost:3000/products");
  
      const data = await resp.json();
  
      for(let item of data) {
        const li = document.createElement('li');
  
        li.textContent = `${item.name}, Pris: ${item.price}, type: ${item.type}`;
        listEl.append(li);
      }
  
      const value = getJwtValue("sub");
    }
  })(document.querySelector('.products-list'));