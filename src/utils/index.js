// 将开尔文的数据转换成摄氏度
export function kelvinsToCelsiusTemperature(temperature) {
    let celsiusTemperature = (-272.15 + temperature).toFixed(0)
    return celsiusTemperature
}

export function getLastStr(str){
    const lastIndex = str.lastIndexOf(' ');
    const date = str.substring(lastIndex+1);
    return date.substring(0,5);
} 