/*
* @Author: Administrator
* @Date:   2018-01-19 11:17:37
* @Last Modified by:   Administrator
* @Last Modified time: 2018-01-20 16:00:09
*/
var weather;
//请求太原天气
$.ajax({
	url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=太原",
// 通过jsonp获取数据
	dataType:"jsonp",
    type:"get",
    success:function(obj){
    	//声明weather变量
    	weather=obj.data.weather;
    	// console.log(weather);
    }
})
//请求城市
var city;
$.ajax({
    url:"https://www.toutiao.com/stream/widget/local_weather/city/",
    dataType:"jsonp",
    type:"get",
    success:function(obj){
        //声明weather变量
        city=obj.data;
        // console.log(obj.data);
    }
})
//渲染数据
function update(){
	//渲染城市
     var cityName=document.getElementsByClassName("header")[0];
    cityName.innerHTML=weather.city_name;
	//渲染气温
	var temperature=document.getElementsByClassName("ling")[0];
    temperature.innerHTML=weather.current_temperature+"°";
    //渲染当前天气状况
    var tianqi=document.getElementsByClassName("qing")[0];
    tianqi.innerHTML=weather.current_condition;
    //最高温
    var dat_high_temperature=document.getElementById("dat_high_temperature");
    dat_high_temperature.innerHTML=weather.dat_high_temperature;
    //最低温
    var dat_low_temperature=document.getElementById("dat_low_temperature");
    dat_low_temperature.innerHTML=weather.dat_low_temperature;
   //当前天气状况
    var tianqi=document.getElementsByClassName("weather")[0];
    tianqi.innerHTML=weather.day_condition;

    //添加背景图片
    var dat_weather_icon_id=document.getElementById("dat_weather_icon_id");
    dat_weather_icon_id.style=`background-image:url(img/${weather.dat_weather_icon_id}.png);`;
    //明天的气温
     //最高温
    var tomorrow_high_temperature=document.getElementById("tomorrow_high_temperature");
    tomorrow_high_temperature.innerHTML=weather.tomorrow_high_temperature;
    //最低温
    var tomorrow_low_temperature=document.getElementById("tomorrow_low_temperature");
    tomorrow_low_temperature.innerHTML=weather.tomorrow_low_temperature;
   //当前天气状况
    var tomorrow_condition=document.getElementById("tomorrow_condition");
    tomorrow_condition.innerHTML=weather.tomorrow_condition;
    //
    var tomorrow_weather_icon_id=document.getElementById("tomorrow_weather_icon_id");
    tomorrow_weather_icon_id.style=`background-image:url(img/${weather.tomorrow_weather_icon_id}.png);`;
  

  //实时天气
    for(var i in weather.hourly_forecast){
  	//创建父元素div
  	var now=document.createElement("div");
  	now.className="now";
    //获取now的父元素
  	var nowp=document.getElementById("now")
  	//把now插入父元素中
  	nowp.appendChild(now);
    
    var now_time=document.createElement("h2");
    now_time.className="now_time";
    now_time.innerHTML=weather.hourly_forecast[i].hour+":00";
    now.appendChild(now_time);

    var icon=document.createElement("div");
    icon.className="icon";
    icon.style=`background-image:url(img/${weather.hourly_forecast[i].weather_icon_id}.png);`;
    now.appendChild(icon);
 
    var temperature=document.createElement("div");
    temperature.className="temperature";
    temperature.innerHTML=weather.hourly_forecast[i].temperature+"°";
    now.appendChild(temperature);

    //未来几天天气情况
  }
    for(var j in weather.forecast_list){
           

            var furture=document.createElement("div");
            furture.className="recent";
            var furturep=document.getElementById("furture");
            furturep.appendChild(furture);
            

            // var recent_time=document.createElement("div");
            // recent_time.className="recent_time";
            // var recent_timep=document.getElementById("furture");
            // recent_timep=appendChild(recent_time);

            // var month=document.createElement("span");
            // month.className="month";
            // month.innerHTML=weather.forcast_list[j].date.substring(5,7);
            // furture=appendChild(month);

            // var day=document.createElement("span");
            // day.className="day";
            // day.innerHTML=weather.forcast_list[j].date.substring(8);
            // furture=appendChild(day);
            
            var recent_time=document.createElement("div");
             recent_time.className="recent_time";
    
            recent_time.innerHTML=weather.forecast_list[j].date.substring(5,7)+"/"+weather.forecast_list[j].date.substring(8);
             furture.appendChild(recent_time);

            var recent_wea=document.createElement("h2");
            recent_wea.className="recent_wea";
            recent_wea.innerHTML=weather.forecast_list[j].condition;
            furture.appendChild(recent_wea);

            var recent_pic=document.createElement("div");
            recent_pic.className="recent_pic";
            recent_pic.style=`background-image:url(img/${weather.forecast_list[j].weather_icon_id}.png);`;
            furture.appendChild(recent_pic);

            var recent_high=document.createElement("h3");
            recent_high.className="recent_high";
            recent_high.innerHTML=weather.forecast_list[j].high_temperature;
            furture.appendChild(recent_high);

            var recent_low=document.createElement("h4");
            recent_low.className="recent_low";
            recent_low.innerHTML=weather.forecast_list[j].low_temperature;
            furture.appendChild(recent_low);
            
            var recent_wind=document.createElement("h5");
            recent_wind.className="recent_low";
            recent_wind.innerHTML=weather.forecast_list[j].wind_direction;
            furture.appendChild(recent_wind);

            var recent_level=document.createElement("h5");
            recent_level.className="recent_level";
            recent_level.innerHTML=weather.forecast_list[j].wind_level;
            furture.appendChild(recent_level);
    }
    
    // console.log(weather)
    //     for(var j in weather.forcast_list){
    //         console.log(weather.forcast_list[j].date.substring(5,7));
    //         console.log(weather.forcast_list[j].date.substring(8));
    //     }
    
            //获取数据
            var header=document.getElementsByClassName("header")[0];
            var city_box=document.getElementsByClassName("city_box")[0];
           
           // 添加点击事件 display：block出现
            header.onclick=function(){
                
                $(".text").val("");
                $(".button").html("取消");
                city_box.style="display:block";
            }


            //渲染城市
            for(var k in city){
                // console.log(k);
            
            //添加省市
            var citysp=document.getElementById("citys")
            var title=document.createElement("div");
            title.className="title";
            title.innerHTML=k;
            citysp.appendChild(title);


            var con=document.createElement("div");
            con.className="con";


               for(var y in city[k]){
                // console.log(y);
                var erji=document.createElement("div");
                erji.className="son";
                erji.innerHTML=y;
                con.appendChild(erji);
               }
               citys.appendChild(con);
        }
}
//查找各个城市天气信息
function AJAX(str){
    $.ajax({
    url:`https://www.toutiao.com/stream/widget/local_weather/data/?city=${str}`,
// 通过jsonp获取数据
    dataType:"jsonp",
    type:"get",
    success:function(obj){
        //声明weather变量
        weather=obj.data.weather;
        // console.log(weather);
        //调用update
        update();
        //当点击一个二级城市时，出现天气界面，其他的消失。
        $(".city_box").css({"display":"none"});
    }
  })
}
//当页面加载完成执行的代码
window.onload=function(){
    update();

    $(".son").on("click",function(){
        var cityh=this.innerHTML;
        AJAX(cityh);
    })
    //变取消为确认
    $(".text").on("focus",function(){
        $(".button").html("确认");
    })
    //添加点击事件
    var button=document.getElementsByClassName("button")[0];
    button.onclick=function(){
        var btn=this.innerHTML;
        if(btn=="取消")
            {
                var city_box1=document.getElementsByClassName("city_box")[0];
                city_box1.style="display:none";
            }
            else{
                var str=document.getElementById("text").value;
                console.log(str);
                 for(var i in city){
                    if(str==i){
                        AJAX(str);
                        return;
                    }
                    else{
                        for(var j in city[i]){
                            if(str==j){
                                AJAX(str);
                                return;
                            }
                        }
                    }
                 }
                 alert("没有该城市的气象信息");
            }
    }
}