(async (listEl) => {
    if(listEl) {
      const resp = await getData("http://localhost:3000/orders/65fc7c64548d783ec66c57e7");
  
      const data = await resp.json();
  
      for(let item of data.items) {
        const li = document.createElement('li');
  
        li.textContent = `${item.name}, Pris: ${item.price}, Antal: ${item.amount}`;
        listEl.append(li);
      }
  
      const value = getJwtValue("sub");
    }
  })(document.querySelector('.order-list'));



  // (async (listEl) => {
  //   if(listEl) {
  //     const userId = getJwtValue("sub"); // Hämta användarens ID från JWT
  //     const resp = await getData(`http://localhost:3000/orders/${userId}`); // Använd användarens ID i URL:en
  
  //     const data = await resp.json();
  
  //     for(let item of data.items) {
  //       const li = document.createElement('li');
  
  //       li.textContent = `${item.name}, Pris: ${item.price}, Antal: ${item.amount}`;
  //       listEl.append(li);
  //     }
  //   }
  // })(document.querySelector('.order-list'));