'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Layout from 'components/layout/index';
import './index.scss';
import {Button,Icon,Dialog,Select,Combobox,Input,Field} from 'qnui';

//  自定义按钮
const footer=(
            <div>
                <Button type="primary" onClick={this.onClose}>确定</Button>
                <Button type="normal" onClick={this.onClose}>关闭</Button>
            </div>
            );
//发货方式
const sendWay=[
    {label:'自己联系',value:'自己联系'},
    {label:'上门取货',value:'上门取货'}];
// 物流公司
const company=[
    {label:'EMS',value:'EMS'},
    {label:'圆通',value:'圆通'},
    {label:'中通',value:'中通'},
    {label:'韵达',value:'韵达'}];
// 发货地址
const address=[
    {label:'顾超1，18621729133，上海，上海市，宝山区，高境镇新二路55号11楼爱用宝，201900',
    value:'顾超1，18621729133，上海，上海市，宝山区，高境镇新二路55号11楼爱用宝，201900'},
    {label:'顾超，18621729133，上海，上海市，宝山区，高境镇新二路55号11楼爱用宝，201900',value:'顾超，18621729133，上海，上海市，宝山区，高境镇新二路55号11楼爱用宝，201900'}
];

class App extends React.Component {
field = new Field(this);
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
        this.onOpen=this.onOpen.bind(this);
        this.onClose=this.onClose.bind(this);
    }
    onOpen() {
        this.setState({visible: true});
    }
    onClose(){
        this.setState({visible: false});
        console.log(this.field.getValues());
    }
    render() {
         const init = this.field.init;

        return (
            <div className="component-page">
                <Button type="primary" onClick={this.onOpen}>发货</Button>
                <Dialog visible={this.state.visible}
                    onOk={this.onClose}
                    onCancel={this.onClose}
                    onClose={this.onClose}
                    title="发货"
                    footer={footer}
                    >
                    <div className="send-message">
                        <div className="line">
                            <label htmlFor="send-way">发货方式：</label>
                            <Select
                                {...init('sendWay')}
                                placeholder="请选择"
                                id="send-way"
                                size="small"
                                dataSource={sendWay}
                            />
                        </div>
                        <div className="line">
                            <label htmlFor="logistics-company">物流公司：</label>
                            <Select
                                {...init('company')}
                                placeholder="请选择"
                                id="logistics-company"
                                size="small"
                                dataSource={company}
                            />

                        </div>
                        <div className="line">
                            <label htmlFor="tracking-number">运单号：</label>
                            <Input
                                placeholder="请输入运单号"
                                size="small"
                                id="tracking-number"
                                {...init('number')}
                            />
                        </div>

                    </div>
                    <div className="goods">
                        <div className="goods-info">
                            <div className="goods-describe">
                                <img src="./1.jpg"/>
                                <div className="goods-name">
                                    <span>测试宝贝，不要拍，不要发货。</span>
                                </div>
                            </div>
                            <div className="goods-price">
                                <div className="price original-price">
                                    <span>￥111.00</span>
                                </div>
                                <div className="price current-price">
                                    <span>
                                        ￥0.01
                                    </span>
                                    <div className="number">X
                                        <span>1</span>
                                    </div>

                                </div>
                                <div className="price privilege-price">
                                    <span>
                                        <Icon
                                            type="smile"
                                            size="small"
                                            style={{color:'#3089dc'}}></Icon>￥-110.99
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="receive-address">
                            <span>收货地址：
                                <span><Icon type="atm" style={{color:'#3089dc'}}></Icon></span>
                                顾超，18621729133，上海，上海市，宝山区，高境镇新二路55号11楼爱用宝，201900
                        </span>
                        </div>
                    </div>
                    <div className="address">
                        <p className="line send-address">
                        <label htmlFor="send-way">发货地址：</label>
                        <Select
                            placeholder="请选择"
                            id="send-way"
                            size="small"
                            {...init('address')}
                            dataSource={address}
                        />
                        </p>
                        <p className="line return-address">
                        <label htmlFor="return-way">退货地址：</label>
                        <Select
                            placeholder="请选择"
                            id="return-way"
                            size="small"
                            {...init('address')}
                            dataSource={address}
                        />
                        </p>
                    </div>
                </Dialog>
            </div>
        );
    }

}
ReactDOM.render(
  <Layout>
      <App />
  </Layout>,
  document.getElementById('container'));
