import * as React from 'react';
import axios from 'axios';
import * as d3 from "d3";
import { DndProvider  } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend'
const qs = require('qs');
import type ,{p, s} from './type';
import Box from './Box';
import Dustbin from './Dustbin'
import Warehouse from './Warehouse'
import { Row, Col  } from 'antd'



const style: React.CSSProperties = {
    height: '12rem',
    width: '12rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
  }

  
  
  
class BpmEditor extends React.Component <p,s> {
    public readonly state = {
        width:600,
        height:400,
        data:[{
            cx: 0,
            cy: 200,
            r: 40,
            fill:"lime",
            text:{
                content:"dsada"
            }
        }, {
            cx: 250,
            cy: 200,
            r: 40,
            fill:"yellow",
            text:{
                content:"dsada"
            }
        }]
    }
 
    private drawBpm = ():any => {
        const that = this
        const svg = d3.select('body')
                      .append("svg")
                      .attr("width", this.state.width)
                      .attr("height", this.state.height);
        const drag = d3.drag()
                       .on('drag',function(d){
                           that.dragmove(this,d)
                        
                       })
        svg.selectAll("circle")
           .data(this.state.data)
           .enter()
           .append("circle")
           .attr("cx", function(d, i) {
                return d.cx;
           })
            .attr("cy", function(d, i) {
                return d.cy;
            })
            .attr("r", function(d, i) {
                return d.r;
            })
            .text(d => {
                return d.text.content
            })
            .attr("fill", d => d.fill)
            .attr("stroke", "white")
           .call(drag)

    }
    componentDidMount(){
        console.log(this.refs)
        this.drawBpm()
    }
    private dragmove = (ref:any,d:any) => {
        console.log(d3.selectAll('svg'))
        d3.select(ref)
        .attr("cx", function() {
            return d.cx = d3.event.x
        })
        .attr("cy", d.cy = d3.event.y)
    }

    public callBack = () => {
        console.log(111)
    }

    render() {
        
        return (
            <div>
                <a ref="update">321321</a>
                <DndProvider backend={HTML5Backend}>
                <Row gutter={16}>
                    <Col span = {4}>
                        <Warehouse 
                            callBack = {this.callBack}
                        />
                    </Col>
                    <Col span = {20}>
                        <Dustbin />
                    </Col>
                </Row>
                
               
            </DndProvider>
            </div>
            
        )
    }
}


export default BpmEditor