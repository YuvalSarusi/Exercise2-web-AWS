import './App.css';
import * as React from "react";
import Cookies from "universal-cookie/es6";
import axios from "axios";

class Shop extends React.Component {
    state = {
        id: 0,
        sales : [],
        shop:{}
    }
    componentDidMount() {
        const id =this.props.match.params.id;
        this.setState({
            id:id
        })
        this.getShopById()
        this.getAllSalesOfShop()
    }

    getShopById = ()=>{
        axios.get("http://localhost:8989/get-shop-by-id",{
            params:{
                shopId: parseInt(this.state.id)
            }
        })
            .then((response)=>{
                const shop = response.data
                this.setState({
                    shop:shop
                })
            })
    }



    getAllSalesOfShop = () =>{
        axios.get("http://localhost:8989/get-all-sales-of-shop",{
            params:{
                shopId: parseInt(this.state.id)
            }
        })
            .then((response)=>{
                const sales = response.data
                this.setState({
                    sales:sales
                })
            })
    }

    render() {
        return (
            <div>
                this is the shop page
                <div>
                    shop name:
                </div>
                <p></p>
                {
                    this.state.shop.name
                }
                <p>
                    {
                        this.state.id
                    }
                </p>
                {
                    this.state.sales.map(sale =>{
                        return(
                            <div>
                                {sale.name}
                                <p></p>
                                {sale.description}
                            </div>
                        )
                    })
                }

            </div>
        )
    }

}




export default Shop;