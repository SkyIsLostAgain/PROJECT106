//https://teachablemachine.withgoogle.com/models/RCpYsmSly/

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/RCpYsmSly/model.json', modelready);
}
function modelready(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    console.log('Log results')
}