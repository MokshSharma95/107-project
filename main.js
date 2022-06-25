 startClassification()
    {
        navigator.mediaDevices.getUserMedia();
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/VZ2yX3Ds7/' , modelReady);
    }