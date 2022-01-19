

  $('#map')
      .gmap3({
        center:[-7.077702146573842, 110.04124981331269],
        zoom:15
      })
      .marker([
        {position:[-7.077702146573842, 110.04124981331269]},
        {icon: "https://maps.google.com/mapfiles/marker_grey.png"}
      ]);