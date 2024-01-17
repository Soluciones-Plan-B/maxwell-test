export type Emisor = {
  ruc: string;
  nombreComercial: string;
  razonSocial: string;
  contribuyenteEspecial: boolean;
  obligadoContabilidad: boolean;
  direccionMatriz: string;
  dirreccionEstablecimiento: string;
};

export type EmisorLog = Emisor & {
  date: string;
};

export type Product = {
  codigoPrincipal: string;
  codigoAuxiliar: string;
  categoria: string;
  nombre: string;
  cantidad: number;
  unidad: string;
  caducidad: string;
  ubicacion: string;
  precioUnitario: number;
  timestamp: string;
};

export type MenuItem = {
  nombre: string;
  codigoPrincipal: string;
  codigoAuxiliar: string;
  precioUnitario: number;
  cantidad: number;
  categoria: string;
  ingredientes: Array,
  impuestos: {
    codigo: string;
    codigoPorcentaje: string;
    tarifa: number;
  };
};

export type Menu = MenuItem[];

export type FormaPago = {
  formaPago: string;
  total: number;
  plazo: number;
  unidadTiempo: string;
};

export type Descripcion = {
  subtotal: number;
  iva: number;
  total: number;
};

export type Comprobante = {
  fechaEmision: string;
  tipoComprobante: string;
  codigoAmbiente: number;
  numeroSerie: string;
  numeroComprobante: string;
  codigoEspecial: string;
  codigoEmision: number;
};

export type Comprador = {
  consumidorFinal: boolean;
  identificacion: string;
  razonSocial: string;
  direccion: string;
  email: string;
  telefono: string;
  obligadoContabilidad: boolean;
  tipoIdentificacion: string;
};

export type ClaveAcceso = string;
