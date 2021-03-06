var canvas;
var context;
var tool;
var img;
// 窗口准备好之后进行初始化工作

if (window.addEventListener) {
  window.addEventListener('load',
    init(),
    false);
}

// 初始化canvas
function init() {
  
  canvas = document.getElementById('canvas');
  if (!canvas) {
    return;
  }
  if (!canvas.getContext) {
    return;
  }

  // 初始化画布
  context = canvas.getContext('2d');
  if (!context) {
    return;
  }

  // 绘制背景, 不然的话没有背景，transparent
//   context.fillStyle = '#fff';

  img=new Image();
  img.src='../assets/images/canvas.png';
  img.onload=function(){
      drawImg();
  }
// let lamp=document.getElementById('lamp');
// var bg = context.createPattern(lamp, "no-repeat");//createPattern() 方法在指定的方向内重复指定的元素。
// context.fillStyle = bg;//fillStyle 属性设置或返回用于填充绘画的颜色、渐变或模式。 
  context.fillRect(0, 0, canvas.width, canvas.height);

  // 初始化画笔
  tool = new toolPencil();

  /**
   * 监听鼠标移动事件，进行绘图
   */
  canvas.addEventListener('mousedown', evCanvas, false);
  canvas.addEventListener('mousemove', evCanvas, false);
  canvas.addEventListener('mouseup', evCanvas, false);

}
function drawImg(){
    context.drawImage(img,0,0,img.width,img.height);
}
 

/**
 * 画笔构造函数
 * @returns {toolPencil}
 */
function toolPencil() {
  var tool = this;
  this.started = false;
  /** 
   * 监听鼠标摁下事件
   */
  this.mousedown = function (ev) {
    /**
     * 开始绘制
     */
    ev.preventDefault();
    context.beginPath();
    context.moveTo(ev._x, ev._y);
    tool.started = true;
  };

  /**
   * 如果已经开始绘制，监听鼠标移动，继续绘制
   */
  this.mousemove = function (ev) {
    if (tool.started) {
      context.lineTo(ev._x, ev._y);
      context.stroke();
      context.strokeStyle='#fff';
    }
  };

  /**
   * 结束绘制.
   */
  this.mouseup = function (ev) {
    if (tool.started) {
      tool.mousemove(ev);
      tool.started = false;
    }
  };
}

/**
 * 处理鼠标移动位置相对于画布的位置
 * 
 * @param ev
 */
function evCanvas(ev) {
  var x, y;
  if (ev.offsetX || ev.offsetY == 0) {
    ev._x = ev.offsetX;
    ev._y = ev.offsetY;
  }
  /**
   * 执行三个监听函数 mousedown, mouseup, mousemove
   */
  var func = tool[ev.type];
  if (func) {
    func(ev);
  }
}