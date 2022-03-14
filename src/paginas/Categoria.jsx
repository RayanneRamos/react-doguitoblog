import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { busca } from '../api/api';
import '../assets/css/blog.css';
import ListaCategorias from '../components/ListaCategorias';
import ListaPost from '../components/ListaPost';

const Categoria = () => {
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
      <ListaPost url={`/posts?categoria=${id}`} />
    </>
  );
}

export default Categoria;