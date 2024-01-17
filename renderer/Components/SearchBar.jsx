// import React, { useEffect, useState, useContext, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import fetchData from '../Helpers/fetchData';
// import { NotificationContext } from '../NotificationContext';

// function SearchBar({
//   car,
//   setCar,
//   ids,
//   handlerTable,
// }) {
//   const { REACT_APP_API } = process.env;
//   const [name, setName] = useState(0);
//   const parking = JSON.parse(localStorage.getItem('parking'));
//   const token = localStorage.getItem('token');
//   const [products, setProducts]= useState([]);
//   const [listProducts, setListProducts]= useState([]);
//   const { addNotification } = useContext(NotificationContext);
//   const searcher = useRef(null);

//   const handlerProductList = async () => {
//     const url = `${REACT_APP_API}/api/v1/producto/list`;
//     const data = await fetchData(url, addNotification, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         auth: token,
//       },
//       body: JSON.stringify({ parking: parking.ID_parking }),
//     });
//     if (data) {
//       setProducts(data);
//     }
//   };

//   const handlerChangeProduct = (ev) => {
//     const id = parseInt(ev.target.id);
//     if (!ids.has(id)) {
//       ids.add(id);
//       let pr = products.filter((p) => p.id_fe_infoProductos === id);
//       pr = pr[0];
//       pr.cantidad = 1;
//       pr.descuento = 0;
//       pr.total = 1 * pr.valor_unitario;
//       setCar([...car, pr]);
//       setListProducts([]);
//       handlerTable();
//     }
//   };

//   const handlerBlur = (ev) => {
//     if (searcher.current && !searcher.current.contains(ev.target)) {
//       setListProducts([]);
//     }
//   };

//   const handlerProduct = (ev) => {
//     setName(ev.target.value);
//     if (ev.target.value.length === 0) {
//       setListProducts([]);
//       return;
//     }
//     const filerListProducts = products.filter((pt) => {
//       return pt.nombre_producto.indexOf(ev.target.value) !== -1;
//     });
//     const elements = filerListProducts.map((p) => {
//       return <button type="button" id={p.id_fe_infoProductos} onClick={handlerChangeProduct} key={p.id_fe_infoProductos}>{p.nombre_producto}</button>;
//     });
//     setListProducts(elements);
//   };

//   useEffect(() => {
//     handlerProductList();
//     handlerTable();
//     document.addEventListener('click', handlerBlur);
//     return () => {
//       document.removeEventListener('click', handlerBlur);
//     };
//   }, [car]);

//   const handlerSearchProduct = async (ev) => {
//     ev.preventDefault();
//     if (!navigator.onLine) {
//       addNotification('Verifique su conexión a internet', 'info');
//       return;
//     }
//     const url = `${REACT_APP_API}/api/v1/producto/${name}`;
//     let data = await fetchData(url, addNotification, {
//       headers: {
//         'Content-Type': 'application/json',
//         auth: token,
//       },
//     });

//     if (data) {
//       data = data[0];
//       data.cantidad = 1;
//       data.descuento = 0;
//       data.total = 1 * data.valor_unitario;
//       setCar([...car, data]);
//       // addNotification('Producto cargado exitosamente', 'success');
//     }
//   };

//   return (
//     <div className="searchbar--container">
//       <form onSubmit={handlerSearchProduct}>
//         <label htmlFor="producto" />
//         <div className="productos--list" ref={searcher}>
//           <input
//             className="productos--input input"
//             type="text"
//             id="producto"
//             autoComplete="off"
//             onChange={handlerProduct}
//             placeholder="Ingresar Producto"
//           />
//           <div className="productos--productos">
//             {listProducts}
//           </div>
//         </div>
//         <button className="productos--button button" type="submit">Agregar</button>
//         <Link to="/producto">Crear Producto</Link>
//       </form>
//     </div>
//   );
// }

// export default SearchBar;
