//Accessing the DOM Elements
let face = document.getElementById('face');
let happyMood = document.getElementById('happy');
let sadMood = document.getElementById('sad');
let angryMood = document.getElementById('angry');
let confusedMood = document.getElementById('confused');

//Action

const happyMoodAction = emoji => {
   return {
   type: "HAPPY_MOOD",
   face: emoji
}};


const sadMoodAction = emoji => {
   return {
 type: "SAD_MOOD",
 face: emoji
}};

const angryMoodAction = emoji => {
   return {
 type: "ANGRY_MOOD",
 face: emoji
}};

const confusedMoodAction = emoji => {
   return {
 type: "CONFUSED_MOOD",
 face: emoji
}};


//State
const initialState = {
 face: '(__)'
};

//Reducer
const reducer = (state = initialState, action) =>{
 switch(action.type){
  case 'HAPPY_MOOD':
   return{
      ...state,
      face: action.face
   };

 case 'SAD_MOOD': 
  return{
   ...state,
   face: action.face
  };

 case "ANGRY_MOOD":
  return{
   ...state,
   face: action.face
  };

 case "CONFUSED_MOOD":
  return{
   ...state,
   face: action.face
  } ;
 }
}

const { createStore } = Redux;

const store = createStore(reducer);


function happyMoodFn (){
 return store.dispatch(happyMoodAction("¯_(ツ)_/¯"))
};

function sadMoodFn(){
 return store.dispatch(sadMoodAction("《〠_〠》"))
}

function angryMoodFn(){
 return store.dispatch(angryMoodAction("(◡‿◡✿)"));
}

function confusedMoodFn(){
 return store.dispatch(confusedMoodAction("(｡:hearts:‿:hearts:｡)"));
}

// Event Listener
happyMood.addEventListener('click', happyMoodFn)
sadMood.addEventListener('click', sadMoodFn)
angryMood.addEventListener('click', angryMoodFn);
confusedMood.addEventListener('click', confusedMoodFn);

store.subscribe(() => (face.innerHTML = store.getState().face));