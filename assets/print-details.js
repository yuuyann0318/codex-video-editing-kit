const printDetails=[...document.querySelectorAll('details')];
addEventListener('beforeprint',()=>printDetails.forEach(d=>{d.dataset.wasOpen=d.open?'1':'0';d.open=true}));
addEventListener('afterprint',()=>printDetails.forEach(d=>{if(d.dataset.wasOpen!=='1')d.open=false;delete d.dataset.wasOpen}));
