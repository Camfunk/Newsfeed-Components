/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: "Nov 5th, 2018",
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: "Javascript and You, ES6",
    date: "May 7th, 2019",
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: "React vs Angular vs Vue",
    date: "June 7th, 2019",
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: "Professional Software Development in 2019",
    date: "Jan 1st, 2019",
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: "Cointelpro Committed Crimes Against Humanity",
    date: "December 4th, 2019",
    firstParagraph: `COINTELPRO, short for “Counter Intelligence Program,” was the name given to a series of programs initiated by the Bureau between 1956 and 1971 aimed at undermining and eradicating groups, movements, and individuals almost all of which were part of the Left it viewed as threats to national security and social order. `,

    secondParagraph: `Creating internal strife was key to the Bureau’s success. As one 1956 memo regarding the Communist Party explained, harassment from the outside "might serve only to bring the various factions together," whereas "forcing and fostering from within the internal fight currently raging" would help destroy the organization while avoiding the appearance of government interference. `,

    thirdParagraph: `Fred Hampton, chair of the Black Panther Party of Illinois, died of two gunshots to the head. His execution, along with that of fellow Panther Mark Clark, sent waves of shock and outrage through their community. Hampton was a well-liked and charismatic leader at the age of only twenty-one. His death came in the last month of a decade that saw the murders of other prominent civil rights leaders including Medgar Evers in 1963, Malcolm X in 1965, and Reverend Martin Luther King Jr. in 1968.  `
  },
  {
    title: "Viva Revolución Bolivariana de Venezuela",
    date: "December 4th, 2019",
    firstParagraph: `Aunque ayer el gobierno ya había informado de un deterioro de la salud de Chávez, con una nueva infección respiratoria severa, y Chávez ha estado batallando contra el cáncer durante dos años, cuando se anunció la noticia de su muerte provocó una conmoción. Hay muchos informes de gente llorando en las calles o permaneciendo en silencio. Tan pronto como la noticia de la muerte del presidente fue conocida la gente comenzó a agruparse en las plazas Bolívar en el centro de las ciudades y pueblos de todo el país. `,

    secondParagraph: `La campaña Manos Fuera de Venezuela fue lanzada hace más de diez años con el objetivo de defender la revolución bolivariana dirigida por el presidente Hugo Chávez. En la última década e incluso más atrás, Chávez y el pueblo revolucionario de Venezuela han sido una inspiración para todos los que luchamos contra el imperialismo y el capitalismo y por un mundo mejor y más humano, el socialismo. `,

    thirdParagraph: `En este momento nos gustaría enviar nuestras condolencias más sentidas al pueblo bolivariano y a las autoridades. Hacemos un llamamiento especial a los trabajadores, a la juventud y a las personas progresistas del mundo a redoblar nuestro compromiso en la defensa de la revolución venezolana de la intervención imperialista extranjera y también de sus propios enemigos internos. ¡Viva la revolución bolivariana! ¡Manos Fuera de Venezuela! ¡No volverán!  `
  },
  {
    title: "Fine Quotations From The Left",
    date: "December 4th, 2019",
    firstParagraph: `We are marching in a compact group along a precipitous and difficult path, firmly holding each other by the hand. We are surrounded on all sides by enemies, and we have to advance almost constantly under their fire. We have combined, by a freely adopted decision, for the purpose of fighting the enemy, and not of retreating into the neighbouring marsh, the inhabitants of which, from the very outset, have reproached us with having separated ourselves into an exclusive group and with having chosen the path of struggle instead of the path of conciliation. And now some among us begin to cry out: Let us go into the marsh! And when we begin to shame them, they retort: What backward people you are! Are you not ashamed to deny us the liberty to invite you to take a better road! Oh, yes, gentlemen! You are free not only to invite us, but to go yourselves wherever you will, even into the marsh. In fact, we think that the marsh is your proper place, and we are prepared to render you every assistance to get there. Only let go of our hands, don’t clutch at us and don’t besmirch the grand word freedom, for we too are “free” to go where we please, free to fight not only against the marsh, but also against those who are turning towards the marsh! ? -Lenin`,

    secondParagraph: `History shows that wars are divided into two kinds, just and unjust. All wars that are progressive are just, and all wars that impede progress are unjust. We Communists oppose all unjust wars that impede progress, but we do not oppose progressive, just wars. Not only do we Communists not oppose just wars; we actively participate in them. As for unjust wars, World War I is an instance in which both sides fought for imperialist interests; therefore, the Communists of the whole world firmly opposed that war. The way to oppose a war of this kind is to do everything possible to prevent it before it breaks out and, once it breaks out, to oppose war with war, to oppose unjust war with just war, whenever possible.
    “On Protracted War” (May 1938) Mao Tse-Tung `,

    thirdParagraph: `True generosity consists precisely in fighting to destroy the causes which nourish false charity. False charity constrains the fearful and subdued, the "rejects of life," to extend their trembling hands. True generosity lies in striving so that these hands--whether of individuals or entire peoples--need be extended less and less in supplication, so that more and more they become human hands which work and, working, transform the world.  - Paulo Freire `
  }
];

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.

*/
const articles = document.querySelector(".articles");
function createArticle(data) {
  const article = document.createElement("div");
  const articleTitle = document.createElement("h2");
  const articleDate = document.createElement("p");
  const articlePara1 = document.createElement("p");
  const articlePara2 = document.createElement("p");
  const articlePara3 = document.createElement("p");
  const button = document.createElement("span");

  article.appendChild(articleTitle);
  article.appendChild(articleDate);
  article.appendChild(articlePara1);
  article.appendChild(articlePara2);
  article.appendChild(articlePara3);
  article.appendChild(button);

  article.classList.add("article");
  articleDate.classList.add("date");
  button.classList.add("expandButton");

  articleTitle.textContent = data.title;
  articleDate.textContent = data.date;
  articlePara1.textContent = data.firstParagraph;
  articlePara2.textContent = data.secondParagraph;
  articlePara3.textContent = data.thirdParagraph;

  article.addEventListener("click", e => {
    console.log("button clicked", e.target);
    article.classList.toggle("article-open");
  });

  return article;
}

data.forEach(data => {
  articles.appendChild(createArticle(data));
});
