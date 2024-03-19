import { onMounted } from "vue";
import * as Cesium from "cesium";
import { cesiumContainer } from "./App.vue";

onMounted(() => {
// 判断container元素是否获取到了
if (cesiumContainer) {
// 初始化cesium场景
const viewer = new Cesium.Viewer(cesiumContainer.value, {
timeline: false, //时间轴控件
animation: false, //动画控件
geocoder: false, //搜索按钮
homeButton: false, //主页按钮
sceneModePicker: false, //投影方式按钮
baseLayerPicker: false, //基础图层选择按钮
navigationHelpButton: false, //帮助手势按钮
fullscreenButton: false, // 隐藏全屏按钮
terrain: Cesium.Terrain.fromWorldTerrain(), //开启三维地形显示
requestWaterMask: true, // 水特效
requestVertexNormals: true, // 地形光
creditContainer: document.createElement("none") //隐藏左下角的logo
});
const position_China = Cesium.Cartesian3.fromDegrees(104.10194, 30.65984, 10000000);
const position_xujiaping_lsd = Cesium.Cartesian3.fromDegrees(104.0181325814514, 31.635673068527957, 4500); //徐家坪滑坡相机坐标
const position_xujiaping_lsd_ground = Cesium.Cartesian3.fromDegrees(104.0166, 31.636, 1800); //徐家坪滑坡地面坐标

//首先初始化定位到中国上空
viewer.camera.setView({
destination: position_China
});
// 添加图标
viewer.entities.add({
position: position_xujiaping_lsd_ground,
// 添加图片
billboard: {
image: '/images/点位符号.jpg',
// 设置颜色和透明度
color: Cesium.Color.WHITE.withAlpha(0.8),
// 高度（像素）
height: 50,
width: 50,
//逆时针旋转
rotation: 0,
// 大小是否以米为单位
sizeInMeters: false,
//相对于坐标点的垂直和水平位置
verticalOrigin: Cesium.VerticalOrigin.CENTER,
horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
// 标签在屏幕空间距离原点的像素偏移量
pixelOffset: new Cesium.Cartesian2(0, 0),
scale: 0.5,
// 显示在距相机的属性，显示区间
distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 8000000),
// 是否显示
show: true
},
// 添加文字标注
label: {
// 文本，支持换行符‘\n’
text: '徐家坪滑坡',
// CSS语法指定字体
font: '14pt Source Han Sans CN',
//字体颜色
fillColor: Cesium.Color.BLACK,
// 背景颜色
backgroundColor: Cesium.Color.AQUA,
// 是否显示背景颜色
showBackground: false,
outlineColor: Cesium.Color.WHITE,
outlineWidth: 5,
scale: 1,
// 设置样式：FILL：填写标签的文本，但不要勾勒轮廓；OUTLINE：概述标签的文本，但不要填写；FILL_AND_OUTLINE：填写并概述标签文本。
style: Cesium.LabelStyle.FILL_AND_OUTLINE,
// 相对于坐标的水平位置
verticalOrigin: Cesium.VerticalOrigin.CENTER,
// 相对于坐标的水平位置
horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
// 该属性指定标签在屏幕空间中距此标签原点的像素偏移量
pixelOffset: new Cesium.Cartesian3(-30, -30),
// 显示在距相机的距离处的属性，多少区间内是可以显示的
distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 1000000),
// 是否显示
show: true
}
});

// flyto快速切换视角，带飞行动画，设置飞行时间
viewer.camera.flyTo({
destination: position_xujiaping_lsd,
orientation: {
//默认（0,-90,0）
heading: Cesium.Math.toRadians(0),
pitch: Cesium.Math.toRadians(-90),
roll: Cesium.Math.toRadians(0)
},
duration: 10, //飞行时间，单位秒      
});
// viewer._cesiumWidget._creditContainer.style.display = "none"; // 消除左下角的logo
// 打印创建的viewer在控制台中
console.log(viewer);
}
});
