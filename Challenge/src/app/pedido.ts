export class Pedido {
    constructor(
        public  number: number, // Numero de pedido random de 1 a 1000
        public  name: string,  // Nombre del cliente
        public  description: string,  // Descripción del pedido
        public date: Date, // Fecha de creación del pedido
        public status: string
        ) 
        {}
}
