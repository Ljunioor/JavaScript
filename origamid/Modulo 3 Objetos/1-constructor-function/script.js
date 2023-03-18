

function Carro(marcaCarro, preçoCarro, anoCarro) {
this.marca = marcaCarro,
this.preço = preçoCarro,
this.ano = anoCarro 
}



const honda = new Carro();
honda.ano = 1998;
honda.marca = 'Honda';
honda.preço = 15000;

const ford = new Carro('ford', 71000, 2016);

function Revenda (marcaCarro2, preçoCompra){
  const lucro = 1.3;
  const preçoRevenda = preçoCompra * lucro;
  this.marca = marcaCarro2;
  this.preço = preçoRevenda;
}
const Tesla = new Revenda('Tesla', 400000);
