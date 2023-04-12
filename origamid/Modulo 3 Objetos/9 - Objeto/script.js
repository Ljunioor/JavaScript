
//ve todas as propriedades
Object.getOwnPropertyDescriptor(Array)

console.log(Object.getOwnPropertyDescriptor(Array));

const esseaqui = ['teste','teste1']

//propiedades
console.log(Object.getOwnPropertyDescriptor(esseaqui))
console.log(Object.getOwnPropertyNames(esseaqui))
console.log(Object.getPrototypeOf(esseaqui))

//consulta tipo de objeto brabo ao invez de type of
console.log(typeof esseaqui);
console.log(Object.prototype.toString.call(esseaqui))
//explicação, Object é o maximo, dentro dele temos prototype(metodo) dentro temos toString(metodo), clonamos com call e ai confirmamos o nosso objeto