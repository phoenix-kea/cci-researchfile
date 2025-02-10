let serial;
let port;
let potValue = 0;          
let connectBtn;
let videoFiles = [];       
let videos = [];          
let currentIndex = 0; 

function preload() {
  videoFiles = [
    'video1.mp4', 
    'video2.mp4', 
    'video3.mp4', 
    'video4.mp4',
    'video4.mp4',
    'video5.mp4',
    'video6.mp4',
    'video7.mp4',
    'video8.mp4',
    'video9.mp4',
    'video10.mp4',
    'video11.mp4',
    'video12.mp4',
    'video13.mp4',
    'video14.mp4',
    'video15.mp4',
    'video16.mp4',
    'video17.mp4',
    'video18.mp4',
    'video19.mp4',
    'video20.mp4',
    'video21.mp4',
    'video22.mp4',
    'video23.mp4',
    'video24.mp4',
    'video25.mp4',
    'video26.mp4',
    'video27.mp4',
    'video28.mp4',
    'video29.mp4', 
    'video30.mp4', 
    'video31.mp4', 
    'video32.mp4',
    'video33.mp4',
    'video34.mp4',


    'video35.mp4', 
    'video36.mp4', 
    'video37.mp4', 
    'video38.mp4',
    'video39.mp4',
    'video40.mp4',
    'video41.mp4',
    'video42.mp4',
    'video43.mp4',
    'video44.mp4',
    'video45.mp4',
    'video46.mp4',
    'video47.mp4',
    'video48.mp4',
    'video49.mp4',
    'video50.mp4',
    'video51.mp4',
    'video52.mp4',
    'video53.mp4',
    'video54.mp4',
    'video55.mp4',
    'video56.mp4',
    'video57.mp4',
    'video58.mp4',
    'video59.mp4',
    'video60.mp4',
    'video61.mp4',
    'video62.mp4',
    'video63.mp4',
    'video64.mp4', 
    'video65.mp4', 
    'video66.mp4', 
    'video67.mp4',
    'video68.mp4',
    'video69.mp4',



    'video70.mp4', 
    'video71.mp4', 
    'video72.mp4', 
    'video73.mp4',
    'video74.mp4',
    'video75.mp4',
    'video76.mp4',
    'video77.mp4',
    'video78.mp4',
    'video99.mp4',
    'video100.mp4',
    'video101.mp4',
    'video102.mp4',
    'video103.mp4',
    'video104.mp4',
    'video105.mp4',
    'video106.mp4',
    'video107.mp4',
    'video108.mp4',
    'video109.mp4',
    'video110.mp4',
    'video111.mp4',
    'video112.mp4',
    'video113.mp4',
    'video114.mp4',
    'video115.mp4',
    'video116.mp4',
    'video117.mp4',
    'video118.mp4',
    'video119.mp4', 
    'video120.mp4', 
    'video121.mp4', 
    'video122.mp4',
    'video123.mp4',
    'video124.mp4',




    'video125.mp4', 
    'video126.mp4', 
    'video127.mp4', 
    'video128.mp4',
    'video129.mp4',
    'video130.mp4',
    'video131.mp4',
    'video132.mp4',
    'video133.mp4',
    'video134.mp4',
    'video135.mp4',
    'video136.mp4',
    'video137.mp4',
    'video138.mp4',
    'video139.mp4',
    'video140.mp4',
    'video141.mp4',
    'video142.mp4',
    'video143.mp4',
    'video144.mp4',
    'video145.mp4',
    'video146.mp4',
    'video147.mp4',
    'video148.mp4',
    'video149.mp4',
    'video150.mp4',
    'video151.mp4',
    'video152.mp4',
    'video153.mp4',
 




  ];


   
}

function setup() {
 createCanvas(0,950);
 background(220);
  port = createSerial();


  for (let i = 0; i < videoFiles.length; i++) {
    let vid = createVideo(videoFiles[i]);
    vid.hide(); 
    videos.push(vid);
  }

  if (videos.length > 0) {
    videos[currentIndex].show();
    videos[currentIndex].play();
    
  }
  

  connectBtn = createButton('Connect to Arduino');
  connectBtn.position(20, 20); 
  connectBtn.mousePressed(connectBtnClick); 


}

function draw() {
  

  let val = port.readUntil("\n");
  if (val.length > 0) {
    potValue = int(val); 
    updateVideo();
  
    background(220);
    fill(0);
    text(val, 10, height-20);
    
  if (videos.length > 0) {
    image(videos[currentIndex], 0, 0, width, height); 
  }

  fill(255);
  textSize(16);
  textAlign(LEFT, TOP);

    
  }

  if (!port.opened()) {
    connectBtn.html('Connect to Arduino');
  } else {
    connectBtn.html('Disconnect');
  }

}

function connectBtnClick() {
  if (!port.opened()) {
    port.open('Arduino', 9600); 
  } else { 
    port.close();
  }
}

function serialEvent() {
  let data = serial.readLine();
  if (data.length > 0) {
    potValue = int(data); 
    updateVideo();       
  }
}

function updateVideo() {
  let newIndex = floor(map(potValue, 0, 1023, 0, videos.length -1));

  if (newIndex !== currentIndex && newIndex < videos.length) {
    videos[currentIndex].stop();
    videos[currentIndex].hide();

    currentIndex = newIndex;

    videos[currentIndex].show();
    videos[currentIndex].play();
  }
}