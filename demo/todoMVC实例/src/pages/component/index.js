'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Layout from 'components/layout/index';
import './index.scss';
import Overlay from 'qnui/lib/overlay';
import 'qnui/lib/overlay/index.scss';

import Badge from 'qnui/lib/badge';
import 'qnui/lib/badge/index.scss';

import 'qnui/lib/icon/index.scss';
import Icon from 'qnui/lib/icon';


import 'qnui/lib/button/index.scss';
import Button from 'qnui/lib/button';

import 'qnui/lib/breadcrumb/index.scss';
import Breadcrumb from 'qnui/lib/breadcrumb';

import Dialog from 'qnui/lib/dialog';
import 'qnui/lib/dialog/index.scss';

import Select, {Combobox} from 'qnui/lib/select';
import 'qnui/lib/select/index.scss';

import Input from 'qnui/lib/input';
import 'qnui/lib/input/index.scss';
class App extends React.Component {

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
    }
    render() {
        const footer=<div>
                    <Button type="primary" onClick={this.onClose}>确定</Button>
                    <Button type="normal" onClick={this.onClose}>关闭</Button>
                </div>;
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
                            <Select placeholder="请选择" id="send-way" size="small">
                                <Option value="0">自己联系</Option>
                                <Option value="1">上门取货</Option>
                            </Select>
                        </div>
                        <div className="line">
                            <label htmlFor="logistics-company">物流公司：</label>
                            <Select placeholder="请选择" id="logistics-company" size="small">
                                <Option value="0">EMS</Option>
                                <Option value="1">圆通</Option>
                                <Option value="2">中通</Option>
                                <Option value="3">韵达</Option>
                            </Select>

                        </div>
                        <div className="line">
                            <label htmlFor="tracking-number">运单号：</label>
                            <Input placeholder="请输入运单号" size="small" id="tracking-number"/>
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
                                <p>￥111.00</p>
                                <p>￥0.01X1</p>
                                <p><Icon type="smile" size="small"></Icon>￥-110.99</p>
                            </div>
                        </div>
                        <div className="receive-address">
                            <span>收货地址：
                                <span><Icon type="atm"></Icon></span>
                                顾超，18621729133，上海，上海市，宝山区，高境镇新二路55号11楼爱用宝，201900
                        </span>
                        </div>
                    </div>
                    <div className="address">
                        <p className="line send-address">
                        <label htmlFor="send-way">发货地址：</label>
                        <Select placeholder="请选择" id="send-way" size="small">
                                <Option value="0">顾超，18621729133，上海，上海市，宝山区，高境镇新二路55号11楼爱用宝，201900</Option>
                                <Option value="1">顾超，18621729133，上海，上海市，宝山区，高境镇新二路55号11楼爱用宝，201900</Option>
                            </Select>
                        </p>
                        <p className="line return-address">
                        <label htmlFor="return-way">退货地址：</label>
                        <Select placeholder="请选择" id="return-way" size="small">
                                <Option value="0">顾超，18621729133，上海，上海市，宝山区，高境镇新二路55号11楼爱用宝，201900</Option>
                                <Option value="1">顾超，18621729133，上海，上海市，宝山区，高境镇新二路55号11楼爱用宝，201900</Option>
                            </Select>
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
