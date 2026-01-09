(function (window) {

  // STEP 7: Create the object
  var byeSpeaker = {};

  // DO NOT attach speakWord to byeSpeaker
  var speakWord = "Good Bye";

  // STEP 8: Attach speak function to the object
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // STEP 9: Expose to global scope
  window.byeSpeaker = byeSpeaker;

})(window);
