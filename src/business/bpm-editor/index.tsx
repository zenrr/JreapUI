import * as React from 'react';
import axios from 'axios';
import * as d3 from "d3";
import { line } from 'd3';
const qs = require('qs');

class BpmEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
    }
 
    drawBpm = ():any => {
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
        this.drawBpm()
    }
    dragmove = (ref,d) => {
        console.log(d3.selectAll('svg'))
        d3.select(ref)
        .attr("cx", function() {
            return d.cx = d3.event.x
        })
        .attr("cy", d.cy = d3.event.y)
    }

    render() {
        return (
           <div className='bpm_drawer'>
               
           </div>
        )
    }
}


export default BpmEditor