import React, { useState, useEffect } from 'react';
import { Link, useParams, Routes, Route } from 'react-router-dom';
import { busca } from '../api/api';
import '../assets/css/blog.css';
import ListaCategorias from '../components/ListaCategorias';
import ListaPost from '../components/ListaPost';
import SubCategoria from '../paginas/SubCategoria';

const Categoria = ({ url }) => {
  const { id } = useParams();
  const [ subcategorias, setSubCategorias ] = useState([]);

  useEffect(() => {
    busca(`/categorias/${id}`, (categoria) => {
      setSubCategorias(categoria.subcategorias);
    });
  }, [id]);

  return (
    <>
      <div className='container'>
        <h2 className='titulo-pagina'>Pet Notícias</h2>
      </div>
      <ListaCategorias />
      <ul className='lista-categorias container flex'>
        {subcategorias.map((subcategoria) => {
          return (
            <li className={`lista-categorias__categoria lista-categorias__categoria--${id}`} key={subcategorias}>
            <Link to={`${url}/${subcategoria}`}>
              {subcategoria}
            </Link>
          </li>
          );
        })
        }
      </ul>
      <Routes>
        <Route index element={<ListaPost url={`/posts?categoria=${id}`} />} />
        <Route path=':subcategoria' element={<SubCategoria />}  />
      </Routes>
    </>
  );
}

export default Categoria;