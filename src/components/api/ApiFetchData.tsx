import React from "react";
import {Admin} from "../../interface/Admin";
import axios from "axios";

export default class ApiFetchData extends React.Component<{}, {data:any,message:string,error:string}>{

    public url: string;
    public method: string;
    public obj: any;
    public key:string;
    constructor(props:any) {
        super(props);
        this.state = {
            data: [],
            message:'',
            error:''
        };
        this.url = '';
        this.obj =  {};
        this.method = '';
        this.key = '';
    }
    Fetching(){
        if (this.url!=='') {
            let object = null;
            if (this.method==='POST')
            {
                object =JSON.stringify(this.obj)
            }
            fetch(
                this.url,{
                    method: this.method,
                    body: object,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
                )
                .then(response => response.json())
                .then(datas => {
                    (datas.hasOwnProperty("data"))? localStorage.setItem(this.key,JSON.stringify(datas.data)):localStorage.setItem(this.key,JSON.stringify(datas));
                    this.setState(
                        {
                            data: (datas.hasOwnProperty("data"))? datas.data:datas,
                            message: 'success',
                            error: ''
                        }
                    );
                })
                .catch((err)=>{
                    console.log(err + "error")
                    this.setState({data:null,message:'error code',error:err})
                });
        }
    }
    postAxios(){
        axios.post(this.url,this.obj)
            .then(res => {
                console.log(res.data.data);
                (res.hasOwnProperty("data"))? localStorage.setItem(this.key,JSON.stringify(res.data.data)):localStorage.setItem(this.key,JSON.stringify(res.data));
                this.setState(
                    {
                        data: (res.hasOwnProperty("data"))? res.data.data:res,
                        message: 'success',
                        error: ''
                    }
                );
            })
            .catch(error => {
                console.log(error);
                this.setState({data:null,message:'error code',error:error})

            });
    }
    getAxios(){
        axios.get(this.url)
            .then(response => {
                console.log(response.data.data);
                (response.hasOwnProperty("data"))? localStorage.setItem(this.key,JSON.stringify(response.data.data)):localStorage.setItem(this.key,JSON.stringify(response.data));
                this.setState(
                    {
                        data: (response.hasOwnProperty("data"))? response.data.data:response,
                        message: 'success',
                        error: ''
                    }
                );
            })
            .catch(error => {
                localStorage.setItem("error_detail",JSON.stringify(error.response.data.data))
                this.setState({data:error.response.data,message:'error code',error:error.response.data})

            });
    }
        componentDidMount() {
        // this.Fetching();
            if (this.url!=='') {
                console.log(this.method + " " + this.url);
                if (this.method === 'GET')
                    this.getAxios();
                else {
                    this.postAxios();
                }
            }
        }
    }

