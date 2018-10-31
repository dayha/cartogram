//index.js
//获取应用实例
import chartWrap from '../canvas/chartWrap'
import getConfig from './getConfig'
var app = getApp();
Page({
    data: {
        navData: [{
            text: '透明曲线'
        }, {
            text: '心跳图'
        }, {
            text: '标尺取值'
        }, {
            text: '职场'
        }, {
            text: '育儿'
        }, {
            text: '纠纷'
        }, {
            text: '青葱'
        }, {
            text: '上课'
        }, {
            text: '下课'
        }],
        currentTab: 2,
        navScrollLeft: 0,
        animationData: {},
        show: false,

        cavasW: null,
        cavasH: null,

        RulerText:50,
    },
    left_am() {
        let that = this;
        let am = that.data.am;
        am = true;
        that.setData({
            am: am
        })
        let time;
        time = setTimeout(function() {
            am = false;
            that.setData({
                am: am
            })
        }, 1100);
    },
    switchNav(event) {
        var cur = event.currentTarget.dataset.current;
        //每个tab选项宽度占1/5
        var singleNavWidth = this.data.windowWidth / 5;
        //tab选项居中                            
        this.setData({
            navScrollLeft: (cur - 2) * singleNavWidth
        })
        if (cur == 0) {
            let pageThis = this
            app.deviceInfo.then(function(deviceInfo) {
                let backgroundColor = "rgba(191, 243, 255, 0.498039)";
                let borderColor = "rgb(109, 209, 255)";
                let labels = ["星期一", "星期二", "星期三", "星期四", "星期五"];
                let lengthNum = labels.length;
                let data = [1, 17, 3, 41, 5];
                let width = Math.floor(deviceInfo.windowWidth - (deviceInfo.windowWidth / 400) * 10 * 2) //canvas宽度
                let height = Math.floor(width / 1.3) //这个项目canvas的width/height为1.6
                let canvasId = 'myCanvas'
                let canvasConfig = {
                    width: width,
                    height: height,
                    id: canvasId
                }
                let config = getConfig(canvasConfig, labels, data, backgroundColor, borderColor, lengthNum)
                chartWrap.bind(pageThis)(config)
            });
        } else if (cur == 1) {
            // 调用函数
            this.week();
            this.moomd();
        } else if (cur == 3) {

        }
        if (this.data.currentTab == cur) {
            return false;
        } else {
            this.setData({
                currentTab: cur
            })
        }
    },
    onLoad: function() {
        // 调用函数
        this.week();
        this.moomd();
        wx.getSystemInfo({
            success: (res) => {
                this.setData({
                    pixelRatio: res.pixelRatio,
                    windowHeight: res.windowHeight,
                    windowWidth: res.windowWidth
                })
            },
        })
    },

    huanshujv(e) {
        let pageThis = this
        var indexNum = e.currentTarget.dataset.index;
        if (indexNum == 1) {
            app.deviceInfo.then(function(deviceInfo) {
                let backgroundColor = "rgba(191, 243, 255, 0.498039)";
                let borderColor = "rgb(109, 209, 255)";
                let labels = ["星期一", "星期二", "星期三", "星期四", "星期五"];
                let lengthNum = labels.length;
                let data = [1, 17, 3, 41, 5];
                let width = Math.floor(deviceInfo.windowWidth - (deviceInfo.windowWidth / 400) * 10 * 2) //canvas宽度
                let height = Math.floor(width / 1.3) //这个项目canvas的width/height为1.6
                let canvasId = 'myCanvas'
                let canvasConfig = {
                    width: width,
                    height: height,
                    id: canvasId
                }
                let config = getConfig(canvasConfig, labels, data, backgroundColor, borderColor, lengthNum)
                chartWrap.bind(pageThis)(config)
            })
        } else if (indexNum == 2) {
            app.deviceInfo.then(function(deviceInfo) {
                let backgroundColor = "rgba(233,185,25, 0.498039)";
                let borderColor = "rgb(255,132,0)";
                let labels = ["1月", "2月", "3月", "4月", "5月", "7月"];
                let lengthNum = labels.length;
                let data = [9, 2, 30, 41, 0, 20];
                let width = Math.floor(deviceInfo.windowWidth - (deviceInfo.windowWidth / 400) * 10 * 2) //canvas宽度
                let height = Math.floor(width / 1.3) //这个项目canvas的width/height为1.6
                let canvasId = 'myCanvas'
                let canvasConfig = {
                    width: width,
                    height: height,
                    id: canvasId
                }
                let config = getConfig(canvasConfig, labels, data, backgroundColor, borderColor, lengthNum)
                chartWrap.bind(pageThis)(config)
            })
        } else if (indexNum == 3) {
            app.deviceInfo.then(function(deviceInfo) {
                let backgroundColor = "rgba(149,22,234, 0.498039)";
                let borderColor = "rgb(255,0,132)";
                let labels = ["7月", "8月", "9月", "10月", "11月", "12月"];
                let lengthNum = labels.length;
                let data = [80, 17, 3, 5, 5, 8, 10, ];
                let width = Math.floor(deviceInfo.windowWidth - (deviceInfo.windowWidth / 400) * 10 * 2) //canvas宽度
                let height = Math.floor(width / 1.3) //这个项目canvas的width/height为1.6
                let canvasId = 'myCanvas'
                let canvasConfig = {
                    width: width,
                    height: height,
                    id: canvasId
                }
                let config = getConfig(canvasConfig, labels, data, backgroundColor, borderColor, lengthNum)
                chartWrap.bind(pageThis)(config)
            })
        }

    },
    onShow: function() {
        let pageThis = this
        app.deviceInfo.then(function(deviceInfo) {
            let backgroundColor = "rgba(191, 243, 255, 0.498039)";
            let borderColor = "rgb(109, 209, 255)";
            let labels = ["星期一", "星期二", "星期三", "星期四", "星期五"];
            let lengthNum = labels.length;
            let data = [1, 17, 3, 41, 5];
            let width = Math.floor(deviceInfo.windowWidth - (deviceInfo.windowWidth / 400) * 10 * 2) //canvas宽度
            let height = Math.floor(width / 1.3) //这个项目canvas的width/height为1.6
            let canvasId = 'myCanvas'
            let canvasConfig = {
                width: width,
                height: height,
                id: canvasId
            }
            let config = getConfig(canvasConfig, labels, data, backgroundColor, borderColor, lengthNum)
            chartWrap.bind(pageThis)(config)
        });
    },
    canvasIdErrorCallback: function(e) {
        console.error(e.detail.errMsg)
    },

    // 7天统计
    week() {
        // 数据传值
        let cavasID = 'moomd'; //cavas独立的id
        let colorStop = ['#0264E7', '#2C95D6'] //渐变上面颜色值//渐变下面颜色值
        let blood = { //这是数据类型
            title: "血压",
            average: "周平均: 120/87mmHg 81bpm", //平均值+//单位符号,
            moom: ["10月"], //获取本月
            weekday: ["20", "21", "22", "23", "24", "25", "26"], //前6天，加上今天，共7天的数据
            dataNum: [30, 50, 100, 20, 70, 80, 60], //这是每个数字对应每天的数据
        }
        this.cartogram(cavasID, colorStop, blood);
    },

    moomd() {
        // 数据传值
        let cavasID = 'week'; //cavas独立的id
        let colorStop = ['#0264E7', '#2C95D6'] //渐变上面颜色值//渐变下面颜色值
        let blood = { //这是数据类型
            title: "血压",
            average: "月平均: 120/87mmHg 81bpm", //平均值+//单位符号,
            moom: ["10月"], //获取本月
            weekday: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"], //前6天，加上今天，共7天的数据
            dataNum: [30, 50, 100, 20, 60, 80, 60, 30, 50, 100, 20, 60, 80, 60, 30, 50, 100, 20, 60, 80, 60, 30, 50, 100, 20, 60, 80, 60], //这是每个数字对应每天的数据
        }
        this.cartogram(cavasID, colorStop, blood);
    },

    // 统计图
    cartogram(cavasID, colorStop, blood) {
        let that = this;
        let width, height;
        var maxNum = Math.max.apply(null, blood.dataNum); //最大值
        var minNum = Math.min.apply(null, blood.dataNum); //最小值
        // 获取设备 控制cavas的画布大小
        wx.getSystemInfo({
            success: function(res) {
                console.log("手机设备", res);
                width = res.windowWidth - 20;
                height = width / 1.5;
                that.setData({
                    cavasW: width,
                    cavasH: height,
                })
            }
        })
        // 开始画画
        let cavasW = that.data.cavasW;
        let cavasH = that.data.cavasH;
        const context = wx.createCanvasContext(cavasID); //cavas的ID值
        const change1 = context.createLinearGradient(0, cavasH / 2, 0, 0); //渐变的方向 值为依次是 左 上 右 下
        var unit = Math.PI / 180;
        change1.addColorStop(0, colorStop[0]); //渐变上面颜色值
        change1.addColorStop(1, colorStop[1]); //渐变下面颜色值
        context.setFillStyle(change1);
        context.fillRect(0, 0, cavasW, cavasH); //这是绘制范围

        context.setFontSize(cavasW / 20); //标题字体大小
        context.setFillStyle('#fff');
        context.fillText(blood.title, cavasW / 100 * 5, cavasH / 100 * 8); //标题的位置

        context.setFontSize(cavasW / 30); //副标题字体大小
        context.fillText(blood.average, cavasW / 100 * 5, cavasH / 100 * 15); //副标题的位置
        context.setTextAlign('right')
        context.fillText(maxNum, cavasW / 100 * 10, cavasH / 100 * 25); //最大值数字体的位置

        context.fillText(minNum, cavasW / 100 * 10, cavasH - cavasH / 100 * 18); //最小值数字体的位置
        context.setTextAlign('left')
        context.fillText(blood.moom[0], cavasW / 100 * 5, cavasH - cavasH / 100 * 3); //本月的位置

        /*@@@这是数据不显示，值显示曲折的位置，需要显示可以再// 天数循环context.fillText的""变成blood.weekday[i]
          @@@在数据循环context.fillText的""变成blood.dataNum[i]
        */
        // 天数
        for (let i = 0; i < blood.weekday.length; i++) {
            context.fillText("",
                cavasW / 100 * 15 + (cavasW - cavasW / 100 * 15) / blood.weekday.length * i, //这是x轴位置
                cavasH - cavasH / 100 * 3); //本日的位置，这是y轴位置
        }
        // 数据
        for (let i = 0; i < blood.dataNum.length; i++) {
            context.fillText("", //这是值
                cavasW / 100 * 15 + (cavasW - cavasW / 100 * 15) / blood.weekday.length * i, //这是x轴位置
                (cavasH - cavasH / 100 * 3) - blood.dataNum[i] * (cavasH - (cavasH / 100 * 3 + cavasH / 100 * 25)) / maxNum - (cavasW / 100 * 10));
            //本日对应的数据的点位置，这是y轴位置

            // 标点
            context.beginPath();
            context.arc(cavasW / 100 * 15 + (cavasW - cavasW / 100 * 15) / blood.weekday.length * i + (cavasW / 100 / 2), //这是x轴位置
                (cavasH - cavasH / 100 * 3) - blood.dataNum[i] * (cavasH - (cavasH / 100 * 3 + cavasH / 100 * 25)) / maxNum - (cavasW / 100 / 2),
                cavasW / 100, //图形半径
                unit, //半径圆周率
                360 * unit);
            context['fill' + 'style'] = '#fff';
            context.closePath();
            context['fill']();

            context.setStrokeStyle('#fff'); //线条颜色
            context.moveTo(cavasW / 100 * 15 + (cavasW - cavasW / 100 * 15) / blood.weekday.length * i + (cavasW / 100 / 2), (cavasH - cavasH / 100 * 3) - blood.dataNum[i] * (cavasH - (cavasH / 100 * 3 + cavasH / 100 * 25)) / maxNum - (cavasW / 100 / 2));
            //定义直线的终点坐标为(50,10)

            if (i + 1 == blood.dataNum.length) {
                // context.stroke();
                console.log("绘制完成")
            } else {
                context.lineTo(cavasW / 100 * 15 + (cavasW - cavasW / 100 * 15) / blood.weekday.length * (i + 1) + (cavasW / 100 / 2), (cavasH - cavasH / 100 * 3) - blood.dataNum[i + 1] * (cavasH - (cavasH / 100 * 3 + cavasH / 100 * 25)) / maxNum - (cavasW / 100 / 2));
            }
            //沿着坐标点顺序的路径绘制直线
            context.stroke();
        }
        //@@@判断是否要数字出现
        // if (blood.weekday.length<=7){
        //     for (let i = 0; i < blood.weekday.length; i++) {
        //         context.fillText(blood.weekday[i],
        //             cavasW / 100 * 15 + (cavasW - cavasW / 100 * 15) / blood.weekday.length * i, //这是x轴位置
        //             cavasH - cavasH / 100 * 3); //本日的位置，这是y轴位置
        //     }
        //     for (let i = 0; i < blood.dataNum.length; i++) {
        //         context.fillText(blood.dataNum[i], //这是值
        //             cavasW / 100 * 15 + (cavasW - cavasW / 100 * 15) / blood.weekday.length * i + cavasW / 100*3, //这是x轴位置
        //             (cavasH - cavasH / 100 * 3) - blood.dataNum[i] * (cavasH - (cavasH / 100 * 3 + cavasH / 100 * 25)) / maxNum - (cavasW / 100 *4));
        //         //本日对应的数据的点位置，这是y轴位置

        //         // 标点
        //         context.beginPath();
        //         context.arc(cavasW / 100 * 15 + (cavasW - cavasW / 100 * 15) / blood.weekday.length * i + (cavasW / 100*2), //这是x轴位置
        //             (cavasH - cavasH / 100 * 3) - blood.dataNum[i] * (cavasH - (cavasH / 100 * 3 + cavasH / 100 * 25)) / maxNum - (cavasW / 100),
        //             cavasW / 100, //图形半径
        //             unit,//半径圆周率
        //             360 * unit);
        //         context['fill' + 'style'] = '#fff';
        //         context.closePath();
        //         context['fill']();

        //         context.setStrokeStyle('#fff');//线条颜色
        //         context.moveTo(cavasW / 100 * 15 + (cavasW - cavasW / 100 * 15) / blood.weekday.length * i + (cavasW / 100 *2), (cavasH - cavasH / 100 * 3) - blood.dataNum[i] * (cavasH - (cavasH / 100 * 3 + cavasH / 100 * 25)) / maxNum - (cavasW / 100 / 2));
        //         //定义直线的终点坐标为(50,10)

        //         if (i + 1 == blood.dataNum.length) {
        //             // context.stroke();
        //             console.log("绘制完成")
        //         } else {
        //             context.lineTo(cavasW / 100 * 15 + (cavasW - cavasW / 100 * 15) / blood.weekday.length * (i + 1) + (cavasW / 100 *2), (cavasH - cavasH / 100 * 3) - blood.dataNum[i + 1] * (cavasH - (cavasH / 100 * 3 + cavasH / 100 * 25)) / maxNum - (cavasW / 100 / 2));
        //         }
        //         //沿着坐标点顺序的路径绘制直线
        //         context.stroke();
        //     }

        // }else{
        //     // 天数
        //     for (let i = 0; i < blood.weekday.length; i++) {
        //         context.fillText(" ",
        //             cavasW / 100 * 15 + (cavasW - cavasW / 100 * 15) / blood.weekday.length * i, //这是x轴位置
        //             cavasH - cavasH / 100 * 3); //本日的位置，这是y轴位置
        //     }
        //     // 数据
        //     for (let i = 0; i < blood.dataNum.length; i++) {
        //         context.fillText("", //这是值
        //             cavasW / 100 * 15 + (cavasW - cavasW / 100 * 15) / blood.weekday.length * i, //这是x轴位置
        //             (cavasH - cavasH / 100 * 3) - blood.dataNum[i] * (cavasH - (cavasH / 100 * 3 + cavasH / 100 * 25)) / maxNum - (cavasW / 100 *10));
        //         //本日对应的数据的点位置，这是y轴位置

        //         // 标点
        //         context.beginPath();
        //         context.arc(cavasW / 100 * 15 + (cavasW - cavasW / 100 * 15) / blood.weekday.length * i + (cavasW / 100 / 2), //这是x轴位置
        //             (cavasH - cavasH / 100 * 3) - blood.dataNum[i] * (cavasH - (cavasH / 100 * 3 + cavasH / 100 * 25)) / maxNum - (cavasW / 100 / 2),
        //             cavasW / 100, //图形半径
        //             unit,//半径圆周率
        //             360 * unit);
        //         context['fill' + 'style'] = '#fff';
        //         context.closePath();
        //         context['fill']();

        //         context.setStrokeStyle('#fff');//线条颜色
        //         context.moveTo(cavasW / 100 * 15 + (cavasW - cavasW / 100 * 15) / blood.weekday.length * i + (cavasW / 100 / 2), (cavasH - cavasH / 100 * 3) - blood.dataNum[i] * (cavasH - (cavasH / 100 * 3 + cavasH / 100 * 25)) / maxNum - (cavasW / 100 / 2));
        //         //定义直线的终点坐标为(50,10)

        //         if (i + 1 == blood.dataNum.length) {
        //             // context.stroke();
        //             console.log("绘制完成")
        //         } else {
        //             context.lineTo(cavasW / 100 * 15 + (cavasW - cavasW / 100 * 15) / blood.weekday.length * (i + 1) + (cavasW / 100 / 2), (cavasH - cavasH / 100 * 3) - blood.dataNum[i + 1] * (cavasH - (cavasH / 100 * 3 + cavasH / 100 * 25)) / maxNum - (cavasW / 100 / 2));
        //         }
        //         //沿着坐标点顺序的路径绘制直线
        //         context.stroke();
        //     }
        // }


        // 线条
        context.setStrokeStyle('white');
        context.setLineWidth(.2);
        context.moveTo(10, cavasH / 100 * 18);
        context.lineTo(cavasW - 10, cavasH / 100 * 18);
        context.moveTo(10, cavasH - cavasH / 100 * 10);
        context.lineTo(cavasW - 10, cavasH - cavasH / 100 * 10);
        context.stroke();



        context.draw(); //结束绘制
    },
    onReady: function(e) {
        // 使用 wx.createContext 获取绘图上下文 context

    },
    numberRul(e){
        
        let x=e.detail.x
        console.log(x)
    }
})