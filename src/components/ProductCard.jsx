import React from 'react';

export const ProductCard = ({ product }) => {
    return (
        <div className="col-sm-12 col-md-4">
            <div className="glassmorphism m-2">
                <h4 className="text-white">{product.nombre}</h4>
                <div className="m-3">
                    <img
                        src={product.img}
                        alt={product.nombre}
                        loading="lazy"
                    />
                    <p>{product.note}</p>
                    {
                        product.buyLink?.length > 0 &&
                        <a
                            href={product.buyLink}
                            target="_blank"
                            rel="noreferrer"
                            className='btn btn-primary ms-3 mt-3'
                        >
                            Visitar
                            <i className="fa-solid fa-shop ms-2"></i>
                        </a>
                    }
                </div>
            </div>
        </div>
    );
};
