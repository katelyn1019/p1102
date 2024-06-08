camera = document.getElementById("camera");
Webcam.set({
    width: 350,
    height:300,
    image_format:"png",
    png_quality:90
});
Webcam.attach(camera);

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML = '<img id="image" src="'+data_uri+'" >';
    });
}

function modelloaded(){
    console.log("model is loaded");
}

model = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/TCGRpKBWH/model.json",modelloaded);
