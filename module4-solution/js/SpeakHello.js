(function (window) {

  // STEP 3: Create the object
  var helloSpeaker = {};

  // DO NOT attach speakWord to helloSpeaker
  var speakWord = "Hello";

  // STEP 4: Attach speak function to the object
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // STEP 5: Expose to global scope
  window.helloSpeaker = helloSpeaker;

})(window);
