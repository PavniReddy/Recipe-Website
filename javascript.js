 const recipeContainer = document.querySelector(".recipe-container");
const homeLink = document.getElementById("homeLink");

const recipes = {
    "idli": `
        <h2>Idli Recipe</h2>
        <p><strong>Ingredients:</strong> 2 cups rice, 1 cup urad dal, salt</p>
        <p><strong>Steps:</strong>

1. Soak – Wash and soak 2 cups rice + 1 cup urad dal separately for 6 hours.<br>
2. Grind – Grind dal to a fluffy paste, rice to a slightly coarse paste.<br>
3. Mix & Ferment – Combine both, add salt, and let batter ferment overnight (8–10 hrs).<br>
4. Prepare Steamer – Grease idli molds and heat water in idli steamer.<br>
5. Pour Batter – Fill molds with batter.<br>
6. Steam – Cook for 10–12 minutes on medium flame.<br>
7. Serve – Take out soft idlis and serve hot with chutney or sambar. <br>
 </p>
    `,
    "dosa": `
        <h2>Dosa Recipe</h2>
        <p><strong>Ingredients:</strong> 3 cups rice, 1 cup urad dal, salt, oil</p>
        <p><strong>Steps:</strong>1. <b>Soak</b> – Wash and soak 2 cups rice + ½ cup urad dal + 1 tsp fenugreek seeds for 6 hours.<br>
2. <b>Grind</b> – Grind to a smooth batter (slightly thick).<br>
3. <b>Ferment</b> – Add salt and ferment overnight (8–10 hrs) until fluffy.<br>
4. <b>Heat Pan</b> – Grease a non-stick/tawa with little oil.<br>
5. <b>Spread Batter</b> – Pour a ladle of batter, spread thin in circular motion.<br>
6. <b>Cook</b> – Drizzle a few drops of oil, cook till golden brown.<br>
7. <b>Serve</b> – Fold and serve hot with chutney or sambar.<br>
</p>
    `,
    "sambaar": `
        <h2>Sambar Recipe</h2>
        <p><strong>Ingredients:</strong> Toor dal, tamarind, vegetables, sambar powder</p>
        <p><strong>Steps:</strong> 1. <b>Cook Dal</b> – Pressure cook 1 cup toor dal with turmeric until soft.<br>
2. <b>Tamarind Water</b> – Soak small lemon-sized tamarind in warm water, extract juice.<br>
3. <b>Boil Veggies</b> – Cook drumstick, carrot, beans, or your choice of veggies in water till soft.<br>
4. <b>Mix</b> – Add tamarind water, salt, turmeric, and boil for 5–7 mins.<br>
5. <b>Add Dal</b> – Mash cooked dal and add to boiling mixture.<br>
6. <b>Sambar Powder</b> – Stir in 2–3 tsp sambar powder, simmer 10 mins.<br>
7. <b>Tempering</b> – Heat oil, splutter mustard seeds, curry leaves, red chili, and hing. Add to sambar.<br>
8. <b>Serve</b> – Garnish with coriander leaves, serve hot with rice or idli/dosa.<br>
</p>
    `,
    "pongal": `
        <h2>Pongal Recipe</h2>
        <p><strong>Ingredients:</strong> 1. <b>Dry Roast</b> – Roast 1 cup moong dal lightly till aroma comes.<br>
2. <b>Cook Rice & Dal</b> – Pressure cook 1 cup rice + roasted moong dal with 4–5 cups water, salt, and a pinch of turmeric until soft.<br>
3. <b>Mash</b> – Once cooked, mash lightly to get soft consistency.<br>
4. <b>Tempering</b> – Heat ghee, add cumin seeds, crushed pepper, ginger, curry leaves, cashews. Fry till golden.<br>
5. <b>Mix</b> – Pour tempering into cooked rice-dal mixture, stir well.<br>
6. <b>Consistency</b> – Adjust with hot water if too thick.<br>
7. <b>Serve</b> – Serve hot with coconut chutney and sambar.<br>
</p>
    `,
    "vada": `
        <h2>Medu Vada Recipe</h2>
        <p><strong>Ingredients:</strong> Urad dal, onion, green chili, curry leaves</p>
        <p><strong>Steps:1. <b>Soak</b> – Wash and soak 1 cup urad dal for 4–5 hours.<br>
2. <b>Grind</b> – Drain water and grind dal to a fluffy, thick batter (add very little water).<br>
3. <b>Mix</b> – Add salt, chopped green chili, ginger, curry leaves, black pepper, and onions (optional).<br>
4. <b>Shape</b> – Wet hands, take small portions, shape into doughnut (hole in center).<br>
5. <b>Heat Oil</b> – Heat oil in a deep pan.<br>
6. <b>Fry</b> – Slide vadas into hot oil, fry on medium flame until golden and crisp.<br>
7. <b>Serve</b> – Drain excess oil and serve hot with chutney and sambar.<br>
</p>
    `,
    "rasam": `
        <h2>Rasam Recipe</h2>
        <p><strong>Ingredients:</strong> Tamarind, tomato, rasam powder, curry leaves</p>
        <p><strong>Steps:</strong> 1. <b>Tamarind Water</b> – Soak small lemon-sized tamarind in warm water, extract juice.<br>
2. <b>Spices</b> – Crush pepper, cumin, garlic, and 2 red chilies coarsely.<br>
3. <b>Boil</b> – In a pot, boil tamarind water with salt, turmeric, and crushed spices for 5–7 mins.<br>
4. <b>Add Dal Water</b> – Add little cooked dal water or plain water, simmer.<br>
5. <b>Tempering</b> – Heat ghee, splutter mustard seeds, curry leaves, add hing. Pour over rasam.<br>
6. <b>Serve</b> – Garnish with coriander leaves, serve hot with rice.<br>
</p>
    `,
    "upma": `
        <h2>Upma Recipe</h2>
        <p><strong>Ingredients:</strong> Rava, onion, green chili, curry leaves</p>
       <p>1. <b>Roast Rava</b> – Dry roast 1 cup semolina (rava/sooji) till aromatic. Keep aside.<br>
2. <b>Tempering</b> – Heat ghee/oil, add mustard seeds, urad dal, green chili, ginger, curry leaves, onion.<br>
3. <b>Boil Water</b> – Add 2½ cups water, salt, and bring to boil.<br>
4. <b>Add Rava</b> – Slowly add roasted rava while stirring to avoid lumps.<br>
5. <b>Cook</b> – Cover and cook for 3–4 mins until soft.<br>
6. <b>Serve</b> – Garnish with ghee/coriander, serve hot.<br>
</p>
    `,
    "curd-rice": `
        <h2>Curd Rice Recipe</h2>
        <p><strong>Ingredients:</strong> Cooked rice, curd, green chili, curry leaves</p>
<p>1. <b>Mix</b> – Take puttu flour (rice flour), sprinkle water and mix until crumbly but moist.<br>
2. <b>Layer</b> – In puttu maker, layer grated coconut and flour alternately.<br>
3. <b>Steam</b> – Place on steamer/pressure cooker and steam for 7–10 mins.<br>
4. <b>Serve</b> – Push out steamed puttu and serve hot with banana, sugar, or curry.<br>
</p>
    `,
    "hyderabadi-biryani": `
        <h2>Hyderabadi Biryani Recipe</h2>
        <p><strong>Ingredients:</strong> Basmati rice, chicken/mutton/vegetables, biryani masala, yogurt</p>
        <p><strong>Steps:</strong>1. <b>Marinate</b> – Mix chicken/mutton with curd, ginger-garlic paste, chili powder, turmeric, garam masala, lemon juice, and mint-coriander. Rest 1 hr.<br>
2. <b>Cook Rice</b> – Half cook basmati rice with whole spices (cardamom, cloves, bay leaf, cinnamon).<br>
3. <b>Layer</b> – In a heavy pot, add marinated meat, then half rice, fried onions, mint. Repeat layers.<br>
4. <b>Dum Cook</b> – Seal pot with dough or tight lid, cook on low flame 30–40 mins.<br>
5. <b>Serve</b> – Fluff gently, serve hot with raita and salan.<br>
</p>
    `,
    "puttu": `
        <h2>Puttu Recipe</h2>
        <p><strong>Ingredients:</strong> Rice flour, coconut, water</p>
        <p><strong>Steps:</strong>1. <b>Mix</b> – Take puttu flour (rice flour), sprinkle water and mix until crumbly but moist.<br>
2. <b>Layer</b> – In puttu maker, layer grated coconut and flour alternately.<br>
3. <b>Steam</b> – Place on steamer/pressure cooker and steam for 7–10 mins.<br>
4. <b>Serve</b> – Push out steamed puttu and serve hot with banana, sugar, or curry.<br>
</p>
    `
};


const modal = document.createElement("div");
modal.id = "recipeModal";
modal.style.position = "fixed";
modal.style.top = "0";
modal.style.left = "0";
modal.style.width = "100%";
modal.style.height = "100%";
modal.style.background = "rgba(0,0,0,0.6)";
modal.style.display = "none";
modal.style.justifyContent = "center";
modal.style.alignItems = "center";
modal.style.color = "green";
modal.style.padding = "20px";
modal.style.background = "url('food.jpeg') no-repeat center center";
modal.style.backgroundSize = "cover"; 


modal.innerHTML = `
    <div style="background:#fff; padding:20px; border-radius:10px; max-width:500px; width:90%; position:relative;">
        <span id="closeModal" style="position:absolute; top:10px; right:15px; cursor:pointer; font-weight:bold; font-size:20px;">&times;</span>
        <div id="modalContent"></div>
    </div>
`;
document.body.appendChild(modal);
    
function showRecipe(name) {
    document.getElementById("modalContent").innerHTML = recipes[name] || "<p>Recipe not found!</p>";
    modal.style.display = "flex";
}

document.addEventListener("click",function(event){
    if(event.target.id === "closeModal" || event.target.id === "recipeModal"){
        modal.style.display = "none";
    }
});


homeLink.addEventListener("click", function (event) {
 event.preventDefault(); 
    recipeContainer.style.display = "grid";
});
document.body.classList.add("bg-hidden");

homeLink.addEventListener("click", function(event) {
    event.preventDefault();

   recipeContainer.style.display = "grid";
   videoContainer.style.display = "none";
   

    document.body.classList.remove("bg-hidden");
    document.body.classList.add("bg-shown");
});

const recipesLink = document.getElementById("recipesLink");
const videoContainer = document.getElementById("videoContainer");
const videoList = document.getElementById("videoList");

const recipeVideos = {
    "Idli": "https://www.youtube.com/watch?v=Ayo80PIb-Qg",
    "Dosa": "https://www.youtube.com/embed/N8Fu-jcrR0w?si=riur2AzkBuSGi8cE" ,
    "Sambar":"https://www.youtube.com/embed/weMHNBo70ew?si=pF2i1-GaVGSFxyYM",
    "Pongal":"https://www.youtube.com/embed/rjdpb2UsFJM?si=FdUqw87nH3cQdGOE",
    "Vada": "https://www.youtube.com/embed/ygW0SxmDrMQ?si=4TaPjYTR-79Adw7Y" ,
    "Rasam":"https://www.youtube.com/embed/lrmPvXKrv9E?si=qjmfg2ok0hRStMdg",
    "Upma": "https://www.youtube.com/embed/cAoYsLXUKGI?si=JP2zBuz8qp0KrH20",
    "Curd Rice": "https://www.youtube.com/embed/VFpzansM-XM?si=xlybNZahvZzNQm9L" ,
    "Hyderabadi Biryani":"https://www.youtube.com/embed/YFnjaHVYlwM?si=FVR0j7hp8TZ2b3Uw" ,
    "Puttu":"https://www.youtube.com/embed/Rr72jCYwMdc?si=BjWQbv0bXrM3EOSP" 
};

recipesLink.addEventListener("click", (e) => {
    e.preventDefault();
    recipeContainer.style.display = "none";
    videoContainer.style.display = "block";
    
    videoList.innerHTML = ""; 

    for (let dish in recipeVideos) {
        let li = document.createElement("li");
        li.innerHTML = `
            <h3>${dish}</h3>
            <iframe width="300" height="200" 
                src="${recipeVideos[dish]}" 
                frameborder="0" allowfullscreen target"=_blank">
            </iframe> 
        `;
        videoList.appendChild(li);
    }
});

 recipesLink.addEventListener("click", (e) => {
    e.preventDefault();
    videoContainer.style.display = "block";
    videoList.innerHTML = ""; 
    
    for (let dish in recipeVideos) {
        let li = document.createElement("li");
        li.innerHTML = `
            <h3>${dish}</h3>
            <iframe width="300" height="200" 
                src="${recipeVideos[dish].replace("watch?v=", "embed/")}" 
                frameborder="0" allowfullscreen>
            </iframe>
        `;
        videoList.appendChild(li);
    }
});



