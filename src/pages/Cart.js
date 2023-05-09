import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

const Cart = () => {

    const [isEmpty, setIsEmpty] = useState(false);
    const [data, setData] = useState([])
    const [grandTotal, setGrandTotal] = useState(0)
    const navigate = useNavigate()

    const setTotal = (items) => {
        let sum = 0
        items.map((item) => {
            sum += item["price"]
        })
        setGrandTotal(sum)
    }

    const completePurchase = () => {
        alert('Thanks for Your Purchase!! Purchase Successful 🤩🤩🤩')
        localStorage.removeItem('cart')
        setData([])
        navigate(-1)
    }

    useEffect(() => {
        let x = JSON.parse(localStorage.getItem('cart'))
        if(x !== {} && x !== null){
            setData(x)
            setIsEmpty(false)
            setTotal(x)
        }
        else{
            setIsEmpty(false)
        }
    }, [])

    return (
        <div>
            <div className='mt-3'>
                {
                    grandTotal !== 0
                    ?
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {
                                data.map((item, idx) => (
                                    <div className="col"  key={idx}>
                                        <div className="card">
                                            <img className='mx-auto' src = {item["url"]} style={{width: "250px", height: "250px"}} />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <span>
                                                    <p className='text-success'>
                                                        <strong>${item["price"]}</strong>
                                                    </p>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    :
                    <p>No data available</p>    
                }
                {
                    grandTotal !== 0
                    ?
                    <button onClick={() => completePurchase()} className="m-2 fixed-bottom btn btn-primary btn-lg btn-block">Pay Total: <strong className='text-warning'>${grandTotal}</strong></button>
                    :
                    <></>
                }
            </div>
        </div>
    );
}

export default Cart;
