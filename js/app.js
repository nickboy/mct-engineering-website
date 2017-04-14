var items = [
  {
    "id": "ON001",
    "type": "Onshore",
    "name": "Concrete Foundation"
  },
  {
    "id": "ON002",
    "type": "Onshore",
    "name": "Pipe Rack"
  },
  {
    "id": "ON003",
    "type": "Onshore",
    "name": "Material Take-off"
  },
  {
    "id": "OS001",
    "type": "Offshore",
    "name": "DSU"
  },
  {
    "id": "OS002",
    "type": "Offshore",
    "name": "TBM"
  },
  {
    "id": "OS003",
    "type": "Offshore",
    "name": "CRANE BOOM REST"
  },
  {
    "id": "SS001",
    "type": "Subsea Structural Geotechnical",
    "name": "PLET"
  },
  {
    "id": "SS002",
    "type": "Subsea Structural Geotechnical",
    "name": "SUCTION PILE"
  },
  {
    "id": "SS003",
    "type": "Subsea Structural Geotechnical",
    "name": "CATHODIC PROTECTIO"
  }
]

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    items: items
  }
})