import CanvasApp from './customRender.vue'
import { createRenderer } from 'vue'
let canvas, ctx 
const renderer = createRenderer({
    createElement(tag, isSVG, is) {
        return {tag}
    },
    insert(child, parent, anchor) {
        child.parent = parent;
        (parent.childs || (parent.childs = [])).push(child)
        if(parent.nodeType === 1) {
            draw(child)
            // onclick
            if(child.onClick) {
                canvas.addEventListener('click', () => {
                    child.onClick()
                    setTimeout(() => {
                        draw(child)
                    }, 0)
                })
            }
        }
    },
    patchProp(el, key, prevValue, nextValue) {
        
        el[key] = nextValue
    }
})
function draw(el, noClear = false) {
    
    if(!noClear) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
    if(el.tag === 'piechart') {
        let { data, r, x, y } = el
        let total = data.reduce((pre, next) => pre + next.count, 0)
        let start = 0, end = 0;
        data.forEach(item => {
            end += item.count / total * 360
            drawPieChart(start, end, item.color, x, y, r)
            drawPieChartText(item.name, (start + end) / 2, x, y, r)
            start = end
        })
    }
    el.childs && el.childs.forEach(child => draw(child, true))
}
function drawPieChart(start, end, color, cx, cy, r) {
    let x = cx + Math.cos(d2a(start)) * r
    let y = cy + Math.sin(d2a(start)) * r
    ctx.beginPath()
    ctx.moveTo(cx, cy)
    ctx.lineTo(x, y)
    ctx.arc(cx, cy, r, d2a(start), d2a(end), false)
    ctx.fillStyle = color 
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
}
function drawPieChartText(val, pos, cx, cy, r) {
    ctx.beginPath()
    let x = cx + Math.cos(d2a(pos)) * r/1.25 - 20
    let y = cy + Math.sin(d2a(pos)) * r/1.25
    ctx.fillStyle = '#000'
    ctx.font = '20px 微软雅黑'
    ctx.fillText(val, x, y)
    ctx.closePath()
}
function d2a(n) {
    return n * Math.PI / 180
}

// 拓展
function createCanvasApp(appParam) {
    let app = renderer.createApp(appParam)
    let mount = app.mount
    app.mount = function(sel) {
        //创建画布
        canvas = document.createElement('canvas')
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        document.querySelector(sel).appendChild(canvas)
        // get ctx
        ctx = canvas.getContext('2d')
        mount(canvas)
    }
    return app
}

let app = createCanvasApp(CanvasApp)
app.config.isCustomElement = tag => tag === 'piechart'
app.mount('#demo')