function myzakat() {
    let amount=document.getElementById('amount').value;
let amountZakat=amount*1/40;

   let gold=document.getElementById('amountOfGold').value;
    let amountOfGold=gold*135000;
    let amountOfGoldzakat=amountOfGold/40;

   let silver=document.getElementById('amountOfSilver').value;
    let amountOfSilver=silver*1800;
    let amountOfSilverzakat=amountOfSilver/40;
  
    
    document.getElementById('h1').innerText=amountZakat+amountOfGoldzakat+amountOfSilverzakat;

}