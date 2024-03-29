let filterToggle = true;

const pets = [
  {
    id: 1,
    name: "Dusty",
    color: "Green",
    specialSkill: "Gives sincere apologies.",
    type: "cat",
    imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
  },
  {
      id: 2,
    name: "Trouble",
    color: "Brown",
    specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
    type: "dino",
    imageUrl: "https://images.pexels.com/photos/2564846/pexels-photo-2564846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    name: "Whiskers",
    color: "Yellow",
    specialSkill: "Can prove he is a real man by drinking whiskey.",
    type: "dino",
    imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
  },
  {
    id: 4,
    name: "Coco",
    color: "Black",
    specialSkill: "Burps minimally.",
    type: "dog",
    imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
  },
  {
    id: 5,
    name: "Spooky",
    color: "Brown",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "cat",
    imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
  },
  {
    id: 6,
    name: "Tiger",
    color: "Black",
    specialSkill: "Can read (but cannot understand) Hebrew.",
    type: "dog",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
  },
  {
    id: 7,
    name: "Oreo",
    color: "Yellow",
    specialSkill: "Able to stop chewing ice or whistling on request.",
    type: "cat",
    imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
  },
  {
    id: 8,
    name: "Ginger",
    color: "Grey",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "dino",
    imageUrl: "https://images.pexels.com/photos/1319591/pexels-photo-1319591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 9,
    name: "Sassy",
    color: "Brown",
    specialSkill: "Adept at talking self and others out of fights.",
    type: "cat",
    imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
  },
  {
    id: 10,
    name: "Sammy",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "cat",
    imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
  },
  {
    id: 11,
    name: "Coco",
    color: "Orange",
    specialSkill: "Can be around food without staring creepily at it.",
    type: "dino",
    imageUrl: "https://images.pexels.com/photos/8206760/pexels-photo-8206760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 12,
    name: "Buster",
    color: "Green",
    specialSkill: "Does not use excessive acronyms.",
    type: "dog",
    imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
  },
  {
    id: 13,
    name: "Chester",
    color: "Red",
    specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
    type: "dog",
    imageUrl: "https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 14,
    name: "Samantha",
    color: "Brown",
    specialSkill: "Always up for dessert.",
    type: "cat",
    imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
  },
  {
    id: 15,
    name: "Coco",
    color: "Red",
    specialSkill: "Burps minimally.",
    type: "cat",
    imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
  },
  {
    id: 16,
    name: "Smokey",
    color: "Brown",
    specialSkill: "Drives at a safe rate of speed in snow or rain.",
    type: "dino",
    imageUrl: "https://images.unsplash.com/photo-1583144006017-74800d22ed08?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
   id: 17,
    name: "Muffin",
    color: "Yellow",
    specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
    type: "cat",
    imageUrl: "https://plus.unsplash.com/premium_photo-1675188410128-08479b027489?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 18,
    name: "Salem",
    color: "Brown",
    specialSkill: "Proficient in air guitar",
    type: "dino",
    imageUrl: "https://images.unsplash.com/photo-1552337125-8cb858777cdf?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 19,
    name: "Callie",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "dog",
    imageUrl: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg"
  },
  {
    id: 20,
    name: "Spooky",
    color: "Black",
    specialSkill: "Uses litter box at appropriate hours.",
    type: "cat",
    imageUrl: "https://images.unsplash.com/photo-1568995430555-091fd9226ed3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 21,
    name: "Miss kitty",
    color: "Red",
    specialSkill: "Owns a Nintendo Power Glove.",
    type: "dino",
    imageUrl: "https://images.unsplash.com/photo-1560148271-00b5e5850812?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 22,
    name: "Snuggles",
    color: "Orange",
    specialSkill: "Is comfortable with jokes about his receding hairline.",
    type: "cat",
    imageUrl: "https://images.unsplash.com/photo-1526674183561-4bfb419ab4e5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 23,
    name: "Buddy",
    color: "Red",
    specialSkill: "Enjoys fine wine.",
    type: "dog",
    imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
  },
  {
    id: 24,
    name: "George",
    color: "Brown",
    specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
    type: "dog",
    imageUrl: "https://images.unsplash.com/photo-1596207143439-9a9fab470a06?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 25,
    name: "Salem",
    color: "Red",
    specialSkill: "Knows the words to 4 rap songs.",
    type: "cat",
    imageUrl: "https://plus.unsplash.com/premium_photo-1673967792498-b8db6df56fb4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 26,
    name: "Bubba",
    color: "Yellow",
    specialSkill: "Cleans himself.",
    type: "dog",
    imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
  },
  {
    id: 27,
    name: "Chloe",
    color: "Green",
    specialSkill: "Admits he is wrong",
    type: "dino",
    imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
  },
  {
    id: 28,
    name: "Nala",
    color: "Purple",
    specialSkill: "Dances when he has to.",
    type: "cat",
    imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
  },
  {
    id: 29,
    name: "Oscar",
    color: "Green",
    specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
    type: "cat",
    imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
  },
  {
    id: 30,
    name: "Lucy",
    color: "Red",
    specialSkill: "Doesn’t get weirded out by the word “moist.”",
    type: "dino",
    imageUrl: "https://images.unsplash.com/photo-1517922522248-f8ae08b6b390?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

// render to DOM utility function
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML= htmlToRender
}
// get the card on DOM
const cardsOnDom = (array) => {
  let domString = "";
    for (const pet of array){
    domString += `<div class="card" style="width: 18rem;">
      <div class="card-body">
      <h5 class="card-title">${pet.name}</h5>
      <img src="${pet.imageUrl}" class="card-img-top" alt="card img cap">
        <p class="card-text">Color: ${pet.color}</p>
        <p class="card-text">Special Skill: ${pet.specialSkill}</p>
        <p class="card-text">Type: ${pet.type}</p>
        <button type:"click" class ="btn-delete" id="delete--${pet.id}" >Delete</button>
    </div>
  </div>`;
  }
  renderToDom ("#app", domString);
};

// renders all cards on page load 
cardsOnDom(pets);


// targets pet tyle category on the DOM
const showAllButton = document.querySelector("#show-btn");
const showCatButton = document.querySelector("#cat");
const showDogButton = document.querySelector("#dog");
const showDinoButton = document.querySelector("#dino");

// function to filter pets based on type
const filter = (typeString) => {
  filterToggle= false;
  const typeArray = [];

  for (const pet of pets) {
    if (pet.type === typeString) {
      typeArray.push(pet);
    }
  }
  cardsOnDom(typeArray) ;
};

//  Add click event listener to filter all the pet type on button click
showCatButton.addEventListener("click", () => {
  const catButton = filter("cat");
  cardsOnDom(catButton);
});

showDogButton.addEventListener("click", () => {
  const dogButton = filter("dog");
  cardsOnDom(dogButton);
});

showDinoButton.addEventListener("click", () => {
  const dinoButton = filter("dino");
  cardsOnDom(dinoButton);
});


// Add click event listener to show all the pets on button click using the function we created above
showAllButton.addEventListener("click", () => {
  filterToggle = true;
  cardsOnDom(pets);
});


const form = document. querySelector("#form");

const createMember = (e) =>{
  e.preventDefault();
  const newMemberObj = {
    id: pets.length + 1,
    name: document.querySelector("#name").value,
    color: document.querySelector("#color").value,
    skill: document.querySelector("#specialSkills").value,
    type: document.querySelector("#typeOf").value,
    imageUrl: document.querySelector("#image").value,
  };
  pets.push(newMemberObj);
  cardsOnDom(pets);
  form.reset();
}

form.addEventListener("submit", createMember);


const app = document.querySelector("#app")

// 1. add a btn to domstring 
// 2. create an even listerner 

app.addEventListener("click", (e) => {
    if( e.target.id.includes ("delete")){
      const [ , id] = e.target.id.split("--");
    
      const index = pets.findIndex((e) => e.id === Number(id));

      const pet = pets.find((p) => p.id === Number(id))
      pets.splice(index, 1);
      // cardsOnDom(pets);

      if(filterToggle){
        cardsOnDom(pets)
      } else {
        filter(pet.type);
      }
    }
});
// 3. make sure to target the e.target.id includes delte w/ if ststament
// 4. add logic to remove from array
// 5. repaint dom with updated array 
const startApp = () => {
  cardsOnDom(pets);
  // events(); // ALWAYS LAST
};

startApp();
