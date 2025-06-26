# ⛈️⚡ Real-Time Rainwater Harvesting Dashboard 🌿💡

Welcome to the **Rainwater Harvesting Simulation Dashboard**, a real-time full-stack MERN application that visualizes the operational lifecycle of a rainwater collection system. It simulates sensor readings, computes energy conversion metrics, and displays live updates on an interactive dashboard every 5 seconds.

---

## 🔗 Live Demo & Repositories

* 📊 **Live Dashboard**: [https://pandarainwaterharvesting.vercel.app/](https://pandarainwaterharvesting.vercel.app/)
* 🌐 **Frontend**: [https://github.com/subramanyamchoda/rainwaterharvesting\_client](https://github.com/subramanyamchoda/rainwaterharvesting_client)
* 💪 **Backend**: [https://github.com/subramanyamchoda/rainwaterharvesting\_server](https://github.com/subramanyamchoda/rainwaterharvesting_server)

---

## ✨ Key Features

* ⏰ Simulates data every 5 seconds for real-time display
* 🌧️ Tracks tank water level, flow rate, turbine RPM, power output, and battery storage
* 📈 Displays **6 real-time charts** using Chart.js
* 🚀 Live updates via **WebSockets (Socket.IO)**
* 🏐 Fully responsive and animated UI

---

## 📊 Dashboard Metrics

| Chart                   | Description                                 |
| ----------------------- | ------------------------------------------- |
| 🚰 Tank Level           | Simulated water volume in the reservoir     |
| 🌊 Flow Rate            | Calculated flow based on current tank level |
| ⚙️ Turbine RPM          | Derived from flow; max 1500 RPM             |
| ⚡ Electricity Generated | Power output from turbine RPM               |
| 🔋 Battery Storage      | Cumulative energy stored                    |
| 🧱 System Overview      | Polar chart showing overall system health   |

---

## 🧠 Simulation Flow

### 🌧️ 1. Tank Level Monitoring

Simulated water tank receives rainwater. Tank level is updated every 5 seconds.

### 🌊 2. Flow Rate Calculation

Water flow rate is proportional to tank water level:

* Higher tank level = faster flow
* Lower tank level = slower flow

### ⚙️ 3. Turbine RPM

The flow drives a simulated turbine:

* Faster water flow = higher RPM (capped at 1500)

### ⚡ 4. Electricity Generation

Turbine rotation is converted to electrical energy:

* More RPM = higher power output

### 🔋 5. Battery Storage

Generated electricity is added to a battery model over time.

---

## 🛠️ Tech Stack & Deployment

| Layer      | Technology                           |
| ---------- | ------------------------------------ |
| Frontend   | React.js + Tailwind CSS + Chart.js   |
| Backend    | Node.js + Express                    |
| Real-time  | Socket.IO                            |
| Database   | MongoDB Atlas                        |
| Deployment | Vercel (Frontend) + Render (Backend) |

---

## 🚀 Project Images
<p align="center">
  <img src="https://subramanyamchoda.vercel.app/rainwater1.png" width="400"/>
  <img src="https://subramanyamchoda.vercel.app/rainwater2.png" width="400"/>
  <img src="https://subramanyamchoda.vercel.app/rainwater3.png" width="400"/>
  <img src="https://subramanyamchoda.vercel.app/rainwater4.png" width="400"/>
  <img src="https://subramanyamchoda.vercel.app/rainwater5.png" width="400"/>

</p>
---
## 🚀 Getting Started

### 1. Clone the Repositories

```bash
# Frontend
git clone https://github.com/subramanyamchoda/rainwaterharvesting_client.git
cd rainwaterharvesting_client
npm install

# Backend
git clone https://github.com/subramanyamchoda/rainwaterharvesting_server.git
cd rainwaterharvesting_server
npm install
```

### 2. Set Environment Variables

#### Backend: `.env`

```env
PORT=5000
MONGODB_URI=your-mongodb-uri
```

#### Frontend: `.env`

```env
VITE_API_BASE_URL=http://localhost:5000
```

> 🔒 Replace `your-mongodb-uri` with your MongoDB Atlas URI.

### 3. Start the Application

```bash
# Start backend
npm run dev

# In separate terminal for frontend
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## 🖊️ Contributing

We welcome community contributions!

```bash
# Fork the repository
# Create your branch
git checkout -b feature/YourFeature
# Commit changes
git commit -m "Add YourFeature"
# Push to GitHub
git push origin feature/YourFeature
# Open a Pull Request 🎉
```

---

## 🙌 Acknowledgments

This project was created for practical experience in:

* Real-time system simulation
* WebSocket communication
* Dynamic environmental data visualization
* Full-stack MERN architecture
* Responsive, animated dashboard interfaces

---

## ✅ Try It Live

* 📊 [**Live Dashboard**](https://pandarainwaterharvesting.vercel.app/)
* 👁‍🗨️ Demo Video Available in Repo

Thanks for exploring the Rainwater Harvesting Dashboard! Feel free to ⭐ the repo or connect on LinkedIn 🌱
