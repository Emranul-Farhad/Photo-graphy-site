import React, { useContext, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { Servicestate } from '../../App';
import auth from '../../FirebaseKey/Key';
import Nav from '../Navbar/Nav';
import './Checkout.css'

const Chekout = () => {

    const navigates = useNavigate()
    const { ids } = useParams()
    const [service, setService] = useContext(Servicestate)
    // const [serv, setServ] = useState({})

    const finds = service.find( serv => serv.id ==  ids)
    const [user] = useAuthState(auth)
    // useEffect(() => {
    //     const finds = service.find(ser => ser.id == ids)
    //     if (finds) {
    //         setServ(finds)
    //     }
    //     console.log(finds);
    //     console.log(service);
    // }, [setService, ids])

    const checkout = event => {
        event.preventDefault()
        navigates('/')
        toast.success('order done' ,{id: "checkout"})

    }

    return (
        <div>
            <Nav></Nav>

      <div className='d-flex  justify-content-center align-center mt-5'>
          <div className='leftone'></div>
           {/* <p> Book yours Services </p> */}
           <div className='rightone'></div>
      </div>

            <div className='mt-5'>
                <div class="mainscreen">
                    <div class="card">
                        <div class="leftside">
                            <img
                                src={finds?.image}
                                class="product"
                                alt="Shoes"
                            />
                        </div>
                        <div class="rightside">
                            <form onSubmit={checkout} >
                                <h1>CheckOut</h1>
                                <h2>Payment Information</h2>
                                <p>Cardholder Name</p>
                                <input type="text" class="inputbox" name="name" value={user?.email} required />
                                <p>Card Number</p>
                                <input type="number" class="inputbox" name="card_number" id="card_number" required />

                                <p>Card Type</p>
                                <select class="inputbox" name="card_type" id="card_type" required>
                                    <option value="">--Select a Card Type--</option>
                                    <option value="Visa">Visa</option>
                                    <option value="RuPay">RuPay</option>
                                    <option value="MasterCard">MasterCard</option>
                                </select>
                                <div class="expcvv">

                                    <p class="expcvv_text">Expiry</p>
                                    <input type="date" class="inputbox" name="exp_date" id="exp_date" required />

                                    <p class="expcvv_text2">CVV</p>
                                    <input type="password" class="inputbox" name="cvv" id="cvv" required />
                                </div>
                                <p></p>
                                <button type="submit" class="button">CheckOut</button>
                            </form>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Chekout;



