// Topic: indexed access type

const obj = {
  clientes: [
    { name: 'valter' }
  ]
};

// Sub topic: number access index
type Typ = typeof obj['clientes'][number];
