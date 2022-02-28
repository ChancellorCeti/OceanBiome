const navbar=document.querySelector('.navbar');
const weather=document.querySelector('.weather');
const plantsanimals=document.querySelector('.plantsanimals');
const geography=document.querySelector('.geography');
const biodiversity=document.querySelector('.biodiversity');
const info=document.querySelector('.information')
const infobutton=document.querySelector('.infobutton')
var geo,plant,bio,weather2;
var info2;
var ismainpressed;
var para;
var para2;
var para3;
var para4;
var para5;
var infoexists;
var info2exists;
infobutton.disabled=true;
if(geo!==true&&weather2!==true&&plant!==true&&bio!==true&&ismainpressed!==true){
  infoexists=true;
}
function addInfo(textcontent){
 
  var textcont=textcontent;
  para=document.createElement("p");
  let text=document.createTextNode(textcont)
  para.appendChild(text);
  navbar.parentElement.appendChild(para);
  para.classList.add('para')
  console.log(navbar);
  if(weather2==true){
    para2.parentElement.removeChild(para2);
  }else if(plant==true){
    para4.parentElement.removeChild(para4);
  }else if(bio==true){
    navbar.parentElement.removeChild(para3)
  }
  
  geo=true;
  plant=false;
  bio=false;
  weather2=false;
}
function addInfo2(textcontent2){
  
  var textcont2=textcontent2;
   para2=document.createElement("p");
  let text2=document.createTextNode(textcont2)
  para2.appendChild(text2);
  navbar.parentElement.appendChild(para2);
  
  para2.classList.add('para2')
  console.log(navbar);
  if(geo==true){
    navbar.parentElement.removeChild(para);
  }else if(plant==true){
    para4.parentElement.removeChild(para4);
  }else if(geo==true){
    para.parentElement.removeChild(para)
  }else if(bio==true){
    para3.parentElement.removeChild(para3);
  }
  
  
  weather2=true;
  geo=false;
  bio=false;
  plant=false;
}
function addInfo3(textcontent3){
   var textcont3=textcontent3;
   para3=document.createElement("p");
  let text3=document.createTextNode(textcont3)
  para3.appendChild(text3);
  navbar.parentElement.appendChild(para3);
  
  para3.classList.add('para3')
  console.log(navbar);
  if(geo==true){
    navbar.parentElement.removeChild(para);
  }
  if(weather2==true){
    para2.parentElement.removeChild(para2)
  }else if(plant==true){
      para4.parentElement.removeChild(para4);
  }
 
  bio=true;
  geo=false;
  weather2=false;
  plant=false;
}
function addInfo4(textcontent4){
  var textcont4=textcontent4;
  para4=document.createElement("p");
 let text4=document.createTextNode(textcont4)
 para4.appendChild(text4);
 navbar.parentElement.appendChild(para4);
 
 para4.classList.add('para4')
 console.log(navbar);
 if(geo==true){
   navbar.parentElement.removeChild(para);
 }
 if(weather2==true){
   para2.parentElement.removeChild(para2)
 }else if(bio==true){
     para3.parentElement.removeChild(para3);
 }
 

 bio=false;
 geo=false;
 weather2=false;
 plant=true;
}
function addMain(textcontent5){
  
  var textcont5=textcontent5;
  para5=document.createElement("p");
  let text5=document.createTextNode(textcont5)
  para5.appendChild(text5);
  navbar.parentElement.appendChild(para5);
  para5.classList.add('information2')
  info2=document.querySelector('.information2');
  console.log(navbar);
  if(weather2==true){
    para2.parentElement.removeChild(para2);
  }else if(plant==true){
    para4.parentElement.removeChild(para4);
  }else if(bio==true){
    navbar.parentElement.removeChild(para3)
  }else if(geo==true){
    para.parentElement.removeChild(para);
  }
  geo=false;
  plant=false;
  bio=false;
  weather2=false;
  ismainpressed=true;
}

geography.addEventListener('click',(e)=>{
  if(infoexists==true){
    info.parentElement.removeChild(info);
  }else if(info2exists==true){
    navbar.parentElement.removeChild(info2)
  }
  infobutton.disabled=false;
  biodiversity.disabled=false;
  geography.disabled=true;
  plantsanimals.disabled=false;
  weather.disabled=false;
  addInfo("Ocean covers 71% of earth's surface and contains 97% of water. Earth has only one ocean, but geographers typically divide it into Atlantic, Indian, Arctic, and the Southern (in the Antarctica region) ocean. Oceans are also divided into different vertical or horizontal zones based on physical or biological charectaristics of different aspects of ocean. Different parts of the ocean can be grouped by light penetration or by depth, temperature, or distance from land. Ocean basins have a ridge in mid-ocean, which develops into mountain range beneath the ocean. Collectively, the global ridge system in the ocean features the longest mountain range on earth. At 40,000 miles this mountain range is much longer than the longest mountain ranges on land.Oceans also have deep canyons called trenches. Mariana Trench and Philppina Trencn in Pacific Ocean are the two deepest trenches in the ocean. Atlantic ocean is shallower because a significant part of Atlantic Ocean is made up of Continental shelves. Average depth of global ocean is 3,720 meters (12,200 feet). There are different types of ocean currents that move large quantities of water and heat around the planet. These have enormous influence on the climate");
  info2exists=false;
  infoexists=false;
  
})
weather.addEventListener('click',(e)=>{
  if(infoexists==true){
    info.parentElement.removeChild(info);
  }else if(info2exists==true){
    navbar.parentElement.removeChild(info2)
  }
  infobutton.disabled=false;
  biodiversity.disabled=false;
  geography.disabled=false;
  plantsanimals.disabled=false;
  weather.disabled=true;
  info2exists=false;
  infoexists=false;
  addInfo2("When the land heats up, the air above it heats up as well. On the other hand, the ocean heats up and cools down relatively slowly, causing areas with lots of water to have a more stable climate. Ocean temperatures vary because the ocean is spread out all over the Earth. However, the Southern and Arctic oceans can get very cold, with the Arctic Ocean having an average surface temperature of 28 degrees fahrenheit. Regions closer to the equator, on the other hand, have more pleasant temperatures. One major weather event to look out for are hurricanes. They form near the equator over warm ocean waters and are the deadliest type of storm. Hurricanes form when warm moist air over water begins to rise. The rising air is replaced by cooler air. This process continues to grow large clouds and thunderstorms. These thunderstorms continue to grow and begin to rotate thanks to earth's Coriolis Effect(basically, it makes things that would normally be moving in a straight line move in a curve due to the mass of the Earth). Since the Ocean has the most water, it is where all hurricanes form. Tsunamis also start in the ocean. The vast majority of tsunamis form due to earthquakes — specifically tectonic tsunamis. As an earthquake happens, the ground beneath the water is moved up and/or down abruptly and as this movement happens, a mass of water is displaced and starts moving in all directions. These tsunamis then spread out and wreak havoc on coastlines. ")
})
biodiversity.addEventListener('click',(e)=>{
  if(infoexists==true){
    info.parentElement.removeChild(info);
  }else if(info2exists==true){
    navbar.parentElement.removeChild(info2)
  }
  info2exists=false;
  infoexists=false;
  infobutton.disabled=false;
  biodiversity.disabled=true;
  geography.disabled=false;
  plantsanimals.disabled=false;
  weather.disabled=false;
  
  addInfo3("The ocean has a lot of biodiversity. 32 out of the 33 described animal phyla are represented in there, and it is home to over 250,000 known species, with many more undiscovered. The different temperatures at different levels of the environment contribute heavily to the biodiversity. The seabed can sometimes be 50 degrees colder than the surface, which is why you will find such different animals at different levels of the ocean. All the animals have adapted and evolved to survive in their level of the ocean. Biodiversity in the ocean is important because it ensures that extinction events don't impact the entire ecosystem and that other species survive. If there were less species, the moment one species' numbers started to decline, their predators would start to die and their prey would begin to overpopulate, destroying the ecosystem. Biodiversity makes sure there are multiple predators and food sources for each species, making a much more stable food web. Ocean biodiversity is at risk though. Excessive fishing has made more than one-third of all sharks, rays, and chimaeras at risk of extinction. Many more species are also at risk and may disappear in the next few years. However, 10% of your expenses on a vacation to the ocean will be spent preserving biodiversity, which is why you should book a vacation today!")
})
plantsanimals.addEventListener('click',(e)=>{
  if(infoexists==true){
    info.parentElement.removeChild(info);
  }else if(info2exists==true){
    navbar.parentElement.removeChild(info2)
  }
  biodiversity.disabled=false;
  info2exists=false;
  infoexists=false;
  geography.disabled=false;
  plantsanimals.disabled=true;
  weather.disabled=false;
  infobutton.disabled=false;
  addInfo4("Life in the ocean started and evolved for 3 billion years before that life moved to land. The depth of water and distance from shore have strong impact on biodiversity of ocean regions. There are some animal species that are found only in ocean (eg sponges, corals, jellyfish, sea urchins, sea stars etc.), others that live primarily in the ocean (e.g. cephalopods like squid, crustaceans like crabs or lobsters, crustaceans like shales, and dolphins), and some land animals that have adapted to oceans. Animals that have adapted to the ocean include seabirds like seagulls, pelicans, sea-turtles; sea birds spend most of their life on the sea, going to land only for breeding. Sharks, rays, dolphins, and whales live in well-lit open water in the ocean. In order to survive there, they have developed countershading; countershading is a form of camouflage that makes these marine animals difficult to spot. These are lighter on the under side, and darker on the top side i.e. they can blend with dark water below them and shallower water above. Some animal species live in the twilight zone that receive very little sunlight. Animals that live in the twilight zone have adapted to life there. Viperfish have very large eyes to be able to see in the darkness and capture prey. Some animals that live in this zone can also be very dark or small to hide from predators e.g. some jellies, crustaceans, etc. Some other animals like comb jellies have developed bioluminescence to make their own light to help find food or find partners Midnight zones near the bottom of the ocean have complete darkness, very high water pressure, and almost freezing temperature. Animals that live in midnight zone have evolved differently. Lanternfish have evolved to emit light through Bioluminescent organs in order to be able to see in darkness (some animals in this zone have developed eyes that protrude away from the body to get a better field of vision.) Plants too have evolved differently in oceans. Mangroves live in the intertidal zone (foreshore and seashore) and have adapted to life in saltwater . During high tide, the trees get covered in saltwater. Some mangroves here have adapted to completely exclude salt (when their leaves are squeezed, one gets almost pure water); Red mangroves now contain a substance that keeps salt out. On the other hand, white mangroves leaves are speckled white because of the salt. White mangrove trees can keep their salt in the leaves To cope with ocean waves on coral leaves, seagrasses have developed roots called rhizomes that are very spread out and grow horizontally. Rhizomes keep seagrasses anchored so that they don't get torn out or float away when the waves or the currents are very strong. Plants too have evolved differently in oceans. Mangroves live in the intertidal zone (foreshore and seashore) and have adapted to life in saltwater . During high tide, the trees get covered in saltwater. Some mangroves here have adapted to completely exclude salt (when their leaves are squeezed, one gets almost pure water); Red mangroves now contain a substance that keeps salt out. On the other hand, white mangroves leaves are speckled white because of the salt. White mangrove trees can keep their salt in the leaves To cope with ocean waves on coral leaves, seagrasses have developed roots called rhizomes that are very spread out and grow horizontally. Rhizomes keep seagrasses anchored so that they don't get torn out or float away when the waves or the currents are very strong ")
})
infobutton.addEventListener('click',(e)=>{
  infobutton.disabled=true;
  info2exists=true;
  infoexists=false;
  addMain("The ocean is the largest biome on the earth and possesses a vast array of life forms. This is the perfect place for a vacation, with the most beautiful scenery in the world. Read through this digital brochure to learn more about the wonders of the ocean and why you should come here!")
})