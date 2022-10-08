import React from 'react'
import "./MovieCard.css"

export const MovieCard = (props) => {
    console.log(props.children.img.src);
    return (
        <div className='col-md-3'>
            <div className='card'>
                <img src={props.children.img.src}alt={props.children.img.alt}></img>
                <div className='details'>
                    <div className='title bor-der p-2'>
                        <h2>#{props.children.ranking} - {props.children.title} ({props.children.year})</h2>
                    </div>
                    <div className='distributor bor-der p-2'>
                        <p>Distributor: {props.children.distributor}</p>
                    </div>
                    < div className='amount bor-der p-2'>
                        <p>Amount: {props.children.amount}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
