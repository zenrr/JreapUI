import * as React from 'react';
import axios from 'axios';
import * as d3 from "d3";
import * as dagreD3 from 'dagre-d3';
const qs = require('qs');

class BpmDrawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFlow: [{
                id: 0,
                label: '事项受理',
                status: 'success',
                target: 1,
                back_target: null
            }, {
                id: 1,
                label: '初审',
                status: 'success',
                target: [3],
                back_target: null
            }, {
                id: 2,
                label: '初审回复',
                status: 'success',
                target: 3,
                back_target: null
            }, {
                id: 3,
                label: '事情打回',
                status: 'fail',
                target: 4,
                back_target: 1
            }, {
                id: 4,
                label: '事项办结',
                status: 'current',
                target: null,
                back_target: null
            }, {
                id: 5,
                label: '候审补正',
                status: 'done',
                target: null,
                back_target: null
            }],
            title:''
        }
    }
 
    componentDidMount() {
        this.renderDag();     
    }
 
    renderDag() {
        const { dataFlow } = this.state;
        const that = this
        // // Create the input graph
        var g = new dagreD3.graphlib.Graph()
            .setGraph({})
            .setDefaultEdgeLabel(() => {
                console.log(1)
            } );
 
        dataFlow && dataFlow.map((item, i) => {
            g.setNode(item.id, {
                label: item.label,
                class: "type-" + item.status,
            });
            if (item.target && !item.back_target) {
                    g.setEdge(item.id, item.target, {})
            } else if (item.back_target) {
                g.setEdge(item.id,item.target, {})
                g.setEdge(item.id,item.back_target, {})
            }
        })
 
        g.nodes().forEach(function (v) {
            var node = g.node(v);
            // Round the corners of the nodes
            node.rx = node.ry = 5;
        });
 
        // // Create the renderer
        var render = new dagreD3.render();
 
        // // Set up an SVG group so that we can translate the final graph.
        var svg = d3.select("svg"),
            svgGroup = svg.append("g");
            console.log(g)
        var draged = d3.drag()
            .on('drag', function(d,i,a){
                console.log(a)
            })
        svg.selectAll('rect')
        .data('dataFlow')
        .call(draged)     
        // // Run the renderer. This is what draws the final graph.
        render(d3.select("svg g"), g)
        var xCenterOffset = (svg.attr("width") - g.graph().width) / 2;
        svgGroup.attr("transform", "translate(" + xCenterOffset + ", 20)");
        svg.attr("height", g.graph().height + 40);
    }

    dragmove = (d) => {
        console.log(d)
        
    }
    //获取dom节点
    setNodeTree = (nodeTree) => {
        this.nodeTree = nodeTree;
        this.nodeTree.background = "yellow";
    }
    //获取dom节点
    setNodeTreeInner = (nodeTreeInner) => {
        nodeTreeInner.addEventListener('click',(e) => {
            this.setTitle(e.target.rx.animVal.value)
        })
        this.nodeTreeInner = nodeTreeInner;
        
    }

    setTitle = (value) => {
        console.log(222)
        this.setState({
            title:value
        })
    }
 
    render() {
        return (
            <div>
                <div>
                    { this.state.title }
                </div>
                <svg ref={this.setNodeTree} id="svg-canvas"  width= '700px' height='300px' >
                    <g ref={this.setNodeTreeInner} />
                </svg>
            </div>
            
        )
    }
}


function dragged(d) {
    console.log(d)
    circle.raise().attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
}

export default BpmDrawer