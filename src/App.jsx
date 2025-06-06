import React, { useState, useEffect } from 'react';
import { Line, PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import axios from 'axios';


ChartJS.register(...registerables);

const App = () => {
  const [data, setData] = useState({
    waterLevel: [],
    waterFlow: [],
    turbineSpeed: [],
    electricityGenerated: [],
    batterystorage: []
  });

  const [polarData, setPolarData] = useState({
    labels: ['Water Level', 'Water Flow', 'Electricity Generated', 'Battery '],
    datasets: [{
      data: [0, 0, 0, 0, 0],
      backgroundColor: [
        'rgba(0,123,255,0.6)',
        'rgba(255,99,132,0.6)',
        'rgba(54,162,235,0.6)',
        'rgba(255,206,86,0.6)',
        'rgba(153,102,255,0.6)'
      ],
      borderColor: [
        'rgba(0,123,255,1)',
        'rgba(255,99,132,1)',
        'rgba(54,162,235,1)',
        'rgba(255,206,86,1)',
        'rgba(153,102,255,1)'
      ],
      borderWidth: 2
    }]
  });

  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchPredictionData();
      setTime(prev => prev + 5);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    updatePolarChart();
  }, [data]); 

  const fetchPredictionData = async () => {
    try {
      const response = await axios.get('https://rainwaterharvesting.onrender.com/predict');
      console.log("Prediction Response:", response.data);
      const predictedData = response.data;

      setData(prevData => ({
        waterLevel: [...prevData.waterLevel, predictedData.waterLevel],
        waterFlow: [...prevData.waterFlow, predictedData.waterFlow],
        turbineSpeed: [...prevData.turbineSpeed, predictedData.turbineSpeed],
        electricityGenerated: [...prevData.electricityGenerated, predictedData.electricityGenerated],
        batterystorage: [...prevData.batterystorage, predictedData.batterystorage]
      }));
    } catch (error) {
      console.error("Error fetching prediction data:", error);
    }
  };

  const updatePolarChart = () => {
    setPolarData({
      labels: ['Water Level', 'Water Flow', 'Electricity Generated', 'Battery storage'],
      datasets: [{
        data: [
          data.waterLevel.length > 0 ? data.waterLevel[data.waterLevel.length - 1] : 0,
          data.waterFlow.length > 0 ? data.waterFlow[data.waterFlow.length - 1] : 0,
          
          data.electricityGenerated.length > 0 ? data.electricityGenerated[data.electricityGenerated.length - 1] : 0,
          data.batterystorage.length > 0 ? data.batterystorage[data.batterystorage.length - 1] : 0
        ],
        backgroundColor: [
          'rgba(0,123,255,0.6)',  
          'rgb(255, 99, 132)',  
            
          'rgba(255,206,86,0.6)',  
          'rgba(153,102,255,0.6)'  
        ],
        borderColor: [
          'rgba(0,123,255,1)',
          'rgba(255,99,132,1)',  
          'rgba(54,162,235,1)',
          'rgba(255,206,86,1)',
          'rgba(153,102,255,1)'
        ],
        borderWidth: 2,
        fill: true
      }]
    });
  };
  
  const generateChartData = (label, dataPoints, color) => ({
    labels: dataPoints.map((_, index) => index * 5),
    datasets: [{
      label: label,
      data: dataPoints,
      fill: true,
      backgroundColor: color,
      borderColor: color,
      borderWidth: 2,
      tension: 0.4
    }]
  });

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-200 to-gray-200 flex flex-col animate-fade-in">
      <h1 className="text-4xl font-bold text-gray-800 py-6 text-center animate-pulse">
        🌊 Rainwater Harvesting System Dashboard ⚡
      </h1>

      <div className="w-full flex-1 overflow-y-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {['waterLevel', 'waterFlow', 'turbineSpeed', 'electricityGenerated', 'batterystorage'].map((key, index) => (
            <div key={index} className="bg-white shadow-xl rounded-xl p-6 transform transition duration-500 hover:scale-105">
              <h2 className={`text-2xl font-semibold ${key === 'waterLevel' ? 'text-blue-700' :
                key === 'waterFlow' ? 'text-red-600' :
                key === 'turbineSpeed' ? 'text-green-700' :
                key === 'electricityGenerated' ? 'text-yellow-600' :
                'text-purple-700'}`}>
                {key === 'waterLevel' ? '💧 Water Level (cm)' :
                 key === 'waterFlow' ? '🌊 Water Flow Speed (m/s)' :
                 key === 'turbineSpeed' ? '⚙️ Turbine Speed (RPM)' :
                 key === 'electricityGenerated' ? '⚡ Electricity Generated (W)' :
                 '🔋 Battery  (W)'}
              </h2>
              <Line data={generateChartData(key, data[key],
                key === 'waterLevel' ? 'rgba(0,123,255,1)' :
                key === 'waterFlow' ? 'rgba(255,99,132,1)' :
                key === 'turbineSpeed' ? 'rgba(54,162,235,1)' :
                key === 'electricityGenerated' ? 'rgba(255,206,86,1)' :
                'rgba(153,102,255,1)')}/>
              <p className="text-lg font-semibold text-gray-700 text-center mt-4">
                📊 Latest: {data[key].length > 0 ? data[key][data[key].length - 1] : "Loading..."}
              </p>
            </div>
          ))}

          
          <div className="md:col-span-2 items-center justify-center lg:col-span-1 bg-white shadow rounded-xl  py-6 h-119 w-full transform transition duration-500 hover:scale-105">
  <h1 className="text-lg font-bold text-center text-indigo-600">📊 Overall  Statistics</h1>
  <div className="h-full">
    <PolarArea data={polarData} options={{
      responsive: true,
      maintainAspectRatio: false, 
      plugins: {
        legend: {
          position: 'top', 
        },
      },
      scales: {
        r: {
          min: 0,
          max: 30, 
        },
      },
    }} />
  </div>
</div>



        </div>
      </div>

      
      <div className=" bg-blue-400 text-white text-lg font-semibold w-full text-center flex flex-row items-center justify-center py-6  space-x-16">
      <h1 className='w-8 h-8 animate-ping bg-white rounded'></h1>
            <h1 className='w-8 h-8 animate-spin bg-white rounded'></h1>
            <h1 className='w-8 h-8 animate-bounce bg-white rounded'></h1>
            <img src="last.png" alt="" className='rounded animate-bounce' width="35px"/>
            <h1 className=' animate-bounce rounded'>⏳ Time Elapsed: {time}s </h1>
            <img src="last.png" alt="" className='rounded animate-bounce' width="35px" />
            
            <h1 className='w-8 h-8 animate-bounce bg-white rounded'></h1>
            <h1 className='w-8 h-8 animate-spin bg-white rounded'></h1>
            <h1 className='w-8 h-8 animate-ping bg-white rounded'></h1>
            
            
       
        
      </div>
    </div>
  );
};

export default App;
