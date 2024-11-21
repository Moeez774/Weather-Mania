let button1 = document.getElementById("btn1")
let button2 = document.getElementById("btn2")
let button3 = document.getElementById("btn3")
let button4 = document.getElementById("btn4")
let video1 = document.getElementById("vid1")
let video2 = document.getElementById("vid2")
let video3 = document.getElementById("vid3")
let video4 = document.getElementById("vid4")
let videomain = document.getElementById("vidmain")



let mbox = document.getElementById("mainbox")
let sb = document.getElementById("sbtn")
let wm = document.getElementById("mania")
let subhead = document.getElementById("at")
let ui = document.getElementById("user")
let gui = document.getElementById('userinput')
let but = document.getElementById("sbtn")
let lowbox = document.getElementById("low")
let upbox = document.getElementById("upper")
let nfo = document.getElementById("upd")
let t = document.getElementById("C")
let sargodha = document.getElementById("city")
let image1 = document.getElementById("img1")
let image2 = document.getElementById("img2")
let image3 = document.getElementById("img3")
let image4 = document.getElementById("img4")
let load = document.getElementById("loading")
let load1 = document.getElementById("half1")
let load2 = document.getElementById("half2")
let load3 = document.getElementById("second1")
let load4 = document.getElementById("second2")
let e = document.getElementById("er")
let c = document.getElementById("container1")
let c1 = document.getElementById("column1")
let c2 = document.getElementById("column2")
let wi1 = document.getElementById("w1")
let wi2 = document.getElementById("w2")
let wi3 = document.getElementById("w3")
let wi4 = document.getElementById("w4")
let wi = document.getElementById("w")
let mos = document.getElementById("mosam")
let tpl = document.getElementById("tt")
let tpl1 = document.getElementById("t1")
let tpl2 = document.getElementById("t2")
let tpl3 = document.getElementById("t3")
let tps = document.getElementById("tst")
let tps1 = document.getElementById("ts1")
let tps2 = document.getElementById("ts2")
let tps3 = document.getElementById("ts3")
let it1 = document.getElementById("tts1")
let it2 = document.getElementById("tts2")
let it3 = document.getElementById("tts3")
let winds = document.getElementById("wind")
let visibles = document.getElementById("visible")
let cloud = document.getElementById("clouds")
let kal = document.getElementById("tomorow")
let parso = document.getElementById("daytomorow")
let k1 = document.getElementById("kal1")
let k2 = document.getElementById("kal2")
let k3 = document.getElementById("kal3")
let k4 = document.getElementById("kal4")
let k = document.getElementById("kalimage")
let nowm = document.getElementById("now")
let kalC = document.getElementById("h211")
let kalF = document.getElementById("h222")
let kalH = document.getElementById("h233")
let p1 = document.getElementById("parso1")
let p2 = document.getElementById("parso2")
let p3 = document.getElementById("parso3")
let p4 = document.getElementById("parso4")
let np = document.getElementById("nowparso")
let pC = document.getElementById("p211")
let pF = document.getElementById("p222")
let pH = document.getElementById("p233")

//Function for Search button

const small = () => {

  //for collecting user input

  const user2 = gui.value.toUpperCase();
  const url = `https://wttr.in/${user2}?format=j1`;

  //For fetching weather data

  let change = async () => {
    try {
      return new Promise((resolve, reject) => {
        resolve(fetch(url))
      })
    } catch (error) {
      console.log(error)
    }
  }

//For loading animation

  const loading = async () => {

    try {

      let response = await change()

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.message}`)
      }

      let v = await response.json()
      let a1 = v.current_condition[0].FeelsLikeC

      if (a1 > 20) {

        load.style.position = 'relative'
        load.style.bottom = '350px'
        load1.style.display = 'block'
        load3.style.display = 'block'
        load1.style.width = '20px'
        load3.style.width = '20px'
        load1.style.transform = 'translateX(-705px)'
        load3.style.transform = 'translateX(685px)'
        load1.style.animation = 'halfanime 1s ease-in-out infinite'
        load3.style.animation = 'secondanime 1s ease-in-out infinite'
        c1.style.animation = 'flexanime3 1s ease-in-out'
      c2.style.animation = 'flexanime4 1s ease-in-out'
      c1.style.transform = 'translateX(-620px)'
      c2.style.transform = 'translateX(655px)'

      }
      else {

        load.style.position = 'relative'
        load.style.bottom = '350px'
        load2.style.display = 'block'
        load4.style.display = 'block'
        load2.style.width = '20px'
        load4.style.width = '20px'
        load2.style.transform = 'translateX(-705px)'
        load4.style.transform = 'translateX(685px)'
        load2.style.animation = 'halfanime 1s ease-in-out infinite '
        load4.style.animation = 'secondanime 1s ease-in-out infinite'

      }

      c.style.display = 'none'

    } catch (error) {

      load.style.position = 'relative'
      load.style.bottom = '350px'
      load4.style.display = 'block'
      load4.style.width = '20px'
      load4.style.transform = 'translateX(685px)'
      load4.style.animation = 'secondanime 1s ease-in-out 2'
      load1.style.display = 'block'
      load1.style.width = '20px'
      load1.style.transform = 'translateX(-705px)'
      load1.style.animation = 'halfanime 1s ease-in-out 2'
      c1.style.animation = 'flexanime3 1s ease-in-out'
      c2.style.animation = 'flexanime4 1s ease-in-out'
      c1.style.transform = 'translateX(-620px)'
      c2.style.transform = 'translateX(655px)'

    }
  }

//for showing current temperature of asked city and city name

  let degreeSymbol = "\u00B0"

  const run = async () => {

    try {

      let response = await change()

      if (!response.ok) {

        throw new Error(`Error: ${response.status} - ${response.statustext}`)

      }

      let v = await response.json()
      let a = v.current_condition[0].FeelsLikeC
      let a1 = v.current_condition[0].FeelsLikeF
      let a2 = v.current_condition[0].humidity
      let a3 = v.current_condition[0].windspeedKmph
      let a4 = v.current_condition[0].visibility
      let a5 = v.current_condition[0].cloudcover
      let a6 = v.weather[2].date
      let a7 = v.weather[1].date
      let a8 = v.weather[1].avgtempC
      let a9 = v.weather[1].avgtempF
      let a10 = v.weather[1].sunHour
      let a11 = v.weather[2].avgtempC
      let a12 = v.weather[2].avgtempF
      let a13 = v.weather[2].sunHour
      t.innerHTML = `${a}${degreeSymbol}C`
      it1.innerHTML = `${a}${degreeSymbol}C`
      it2.innerHTML = `${a1}${degreeSymbol}F`
      it3.innerHTML = `${a2}%`
      winds.innerHTML = `${a3}Km/h`
      visibles.innerHTML = `${a4}Km`
      cloud.innerHTML = `${a5}%`
      kal.innerHTML = `${a7}`
      parso.innerHTML = `${a6}`
      kalC.innerHTML = `${a8}${degreeSymbol}C`
      kalF.innerHTML = `${a9}${degreeSymbol}F`
      kalH.innerHTML = `${a10}`
      pC.innerHTML = `${a11}${degreeSymbol}C`
      pF.innerHTML = `${a12}${degreeSymbol}F`
      pH.innerHTML = `${a13}`
      load1.style.display = 'none'
      load3.style.display = 'none'
      load2.style.display = 'none'
      load4.style.display = 'none'
      
      if (a >= 30) {

        videomain.style.opacity = '0'
        video1.style.opacity = '1'
        video2.style.opacity = '0'
        video3.style.opacity = '0'
        video4.style.opacity = '0'
        image1.style.opacity = '0'
        image2.style.opacity = '0'
        image3.style.opacity = '0'
        image4.style.opacity = '1'
        wi3.style.opacity = '1'
        wi1.style.opacity = '0'
        wi2.style.opacity = '0'
        wi4.style.opacity = '0'
        wi.style.display = 'flex'
        mos.innerHTML = "Hot Weather"
        k1.style.opacity = '0'
        k2.style.opacity = '0'
        k3.style.opacity = '1'
        k4.style.opacity = '0'

      }
      else if (a >= 20) {

        videomain.style.opacity = '0'
        video1.style.opacity = '0'
        video2.style.opacity = '0'
        video3.style.opacity = '1'
        video4.style.opacity = '0'
        image1.style.opacity = '1'
        image2.style.opacity = '0'
        image3.style.opacity = '0'
        image4.style.opacity = '0'
        wi2.style.opacity = '1'
        wi1.style.opacity = '0'
        wi3.style.opacity = '0'
        wi4.style.opacity = '0'
        wi.style.display = 'flex'
        mos.innerHTML = "Warm Weather"
        k1.style.opacity = '0'
        k2.style.opacity = '1'
        k3.style.opacity = '0'
        k4.style.opacity = '0'

      }
      else if (a >= 10) {

        videomain.style.opacity = '0'
        video1.style.opacity = '0'
        video2.style.opacity = '0'
        video3.style.opacity = '0'
        video4.style.opacity = '1'
        image1.style.opacity = '0'
        image2.style.opacity = '1'
        image3.style.opacity = '0'
        image4.style.opacity = '0'
        wi1.style.opacity = '1'
        wi3.style.opacity = '0'
        wi2.style.opacity = '0'
        wi4.style.opacity = '0'
        wi.style.display = 'flex'
        mos.innerHTML = "Cool Weather"
        k1.style.opacity = '1'
        k2.style.opacity = '0'
        k3.style.opacity = '0'
        k4.style.opacity = '0'

      }
      else {

        videomain.style.opacity = '0'
        video1.style.opacity = '0'
        video2.style.opacity = '1'
        video3.style.opacity = '0'
        video4.style.opacity = '0'
        image1.style.opacity = '0'
        image2.style.opacity = '0'
        image3.style.opacity = '1'
        image4.style.opacity = '0'
        wi4.style.opacity = '1'
        wi1.style.opacity = '0'
        wi2.style.opacity = '0'
        wi3.style.opacity = '0'
        wi.style.display = 'flex'
        mos.innerHTML = "Cold Weather"
        k1.style.opacity = '0'
        k2.style.opacity = '0'
        k3.style.opacity = '0'
        k4.style.opacity = '1'

      }

      if(a8 >= 30) {

        k1.style.opacity = '0'
        k2.style.opacity = '0'
        k3.style.opacity = '1'
        k4.style.opacity = '0'
        nowm.innerHTML = "Hot Weather"

      }

      else if(a8 >= 20) {

        k1.style.opacity = '0'
        k2.style.opacity = '1'
        k3.style.opacity = '0'
        k4.style.opacity = '0'
        nowm.innerHTML = "Warm Weather"

      }

      else if(a8 >= 10) {

        k1.style.opacity = '1'
        k2.style.opacity = '0'
        k3.style.opacity = '0'
        k4.style.opacity = '0'
        nowm.innerHTML = "Cool Weather"

      }

      else {

        k1.style.opacity = '0'
        k2.style.opacity = '0'
        k3.style.opacity = '0'
        k4.style.opacity = '1'
        nowm.innerHTML = "Cold Weather"

      }

      if(a8 >= 30) {

        p1.style.opacity = '0'
        p2.style.opacity = '0'
        p3.style.opacity = '1'
        p4.style.opacity = '0'
        np.innerHTML = "Hot Weather"

      }

      else if(a8 >= 20) {

        p1.style.opacity = '0'
        p2.style.opacity = '1'
        p3.style.opacity = '0'
        p4.style.opacity = '0'
        np.innerHTML = "Warm Weather"

      }
      else if(a8 >= 10) {

        p1.style.opacity = '1'
        p2.style.opacity = '0'
        p3.style.opacity = '0'
        p4.style.opacity = '0'
        np.innerHTML = "Cool Weather"

      }
      else {

        p1.style.opacity = '0'
        p2.style.opacity = '0'
        p3.style.opacity = '0'
        p4.style.opacity = '1'
        np.innerHTML = "Cold Weather"

      }

      e.style.display = 'none'
      c.style.display = 'block'
      c.style.display = 'flex'
      c.style.position = 'relative'
      c.style.bottom = '225px'
      c1.style.animation = 'flexanime1 1s ease-in-out'
      c2.style.animation = 'flexanime2 1s ease-in-out'
      c1.style.transform = 'translateX(0px)'
      c2.style.transform = 'translateX(0px)'
      c.style.transform = 'translateY(-48px)' 
        nfo.style.animation = 'updateanime 0.7s ease-in-out'
        nfo.style.display = 'block'
        nfo.style.transform = 'translateX(105px)'

    } catch (error) {

      console.error("Fetch error: ", error.message);
      e.style.display = 'block'
      nfo.style.display = 'none'

    }
  }


  //for changing textcontent to askign city name

  const ci = async () => {

    return new Promise((resolve, reject) => {
      resolve(user2)
    })

  }

  const run2 = async () => {
    let l = await ci()
    sargodha.innerHTML = l
  }



  const anime = async () => {
    setTimeout(() => {
      nfo.style.animation = 'updateanime 0.7s ease-in-out'
      nfo.style.transform = 'translateX(105px)'
    }, 500)
  }


  // Main Execution function
  
  const execute = async () => {
    await loading()
    try {
      await run()
    } catch (error) {
      console.log(error)
    }
    await run2()
    await anime()
  }

  execute()

  subhead.style.animation = 'second 1s ease-in-out';
  wm.style.animation = 'second 1s ease-in-out';
  wm.style.opacity = '0'
  subhead.style.opacity = '0'
  upbox.style.animation = 'upperanime 1s ease-in-out'
  upbox.style.transform = 'translateY(-306px)'
  lowbox.style.transform = 'translateY(-306px)'
  lowbox.style.animation = 'upperanime 1s ease-in-out'
  but.style.animation = 'btnanime 1s ease-in-out'
  but.style.bottom = '119px'
  but.style.left = '241px'
  but.style.padding = '10px 20px'
  ui.style.width = '65%'

}
sb.addEventListener('click', small)

