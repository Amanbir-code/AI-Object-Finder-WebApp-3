Status = "";

function setup() 
{
    canvas = createCapture(480, 380);
    canvas.center();
}

function start()
{
    objectDetector = ml5.objectDetector('cocosdd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    Status = true;
}

function draw() 
{
    image(video, 0, 0, 480, 380);
    if(Status != "")
    {
        objectDetector.detect(video, gotResult);

        for(i = 0; i > objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status: Object Detected";
        document.getElementById("number_of_objects").innerHTML = "Number of objects detected are: "+ objects.length;

        fill("#FF0000");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
            stroke("FF0000")
            rect(objects[i].x, objects[i].y, objects[i].height);
        }
    }
}

function gotResult()
{
    if(error)
    {
        console.log(error);
    }
    console.log(results)
    objects = results;
}