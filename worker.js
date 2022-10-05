

  async fetch(request, env) {
    env.WEATHER.writeDataPoint({
      'blobs': ["Seattle", "USA", "pro_sensor_9000"],
      'doubles': [25, 0.5],
      'indexes': ["a3cd45"] 
    });
    return new Response("OK!");
  }


