import React, { Component } from 'react';
import axios from 'axios';
import './styles/App.scss'

//components
import FutureWeatherList from "./components/FutureWeatherList";
import NowWeatherInfo from './components/NowWeatherInfo'
import Loading from './components/Loading'




class App extends Component {
  state = {
    nowWeatherInfo: {}, //当前的天气状况
    futureWeatherList: [], //未来五天的天气状态
    loading: true,///是否显示loading状态
  }
  componentDidMount() {
    axios
      .get(
        'http://api.openweathermap.org/data/2.5/forecast?id=1790645&appid=80a56277a8bd090ac1a700fd7af89018&lang=zh_cn'
      )
      .then(response => {
        const { list } = response.data
        const nowWeatherInfo = list[0]
        console.log('response', response.data)
        console.log('nowWeatherInfo', nowWeatherInfo)
        console.log('nowWeatherInfo', nowWeatherInfo.weather[0].icon)

        this.setState({
          nowWeatherInfo: {
            ...nowWeatherInfo.weather[0],
            ...nowWeatherInfo.wind,
            ...nowWeatherInfo.main,
          },
          loading: false,          
          futureWeatherList: list.slice(0, 5)
        })
      })
      .catch(function(error) {
        console.log(error)
      })

    //获取图标
    //http://openweathermap.org/img/w/10d.png
  }

  render() {
    const { nowWeatherInfo, futureWeatherList, loading } = this.state
    console.log('this.state', this.state)
    return (
      <div className="weather-app">
        {loading && <Loading />}
        <NowWeatherInfo data={nowWeatherInfo} />
        <div className="white-space" />
        <FutureWeatherList data={futureWeatherList} />
      </div>
    )
  }
}

export default App;
