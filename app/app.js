const catalog = [
  {
    "name":"Vice Got a Price!","description":"Congratulations! You're a Leonida Legend.","grade":"platinum",
    "kind":"Completion","stage":5,"missable":false,"warning":"","target":"54 other trophies","sources":["PlayStation trophy list"],
    "guide":"Use the platform trophy list as your final audit. If the game reads 100% and the platinum is still locked, compare the remaining individual trophies against this checklist."
  },
  {
    "name":"Just Like Paradise","description":"Complete Gone Fishing.","grade":"bronze",
    "kind":"Story","stage":1,"missable":false,"warning":"","target":"Gone Fishing","sources":["PlayStation trophy list"],
    "guide":"Follow the story to Gone Fishing and stay through its completion screen. Keep this separate from Cal's optional fishing challenge when you update your tracker."
  },
  {
    "name":"Paradise Lost","description":"Complete Chapter 1.","grade":"bronze",
    "kind":"Story","stage":1,"missable":false,"warning":"","target":"Chapter 1","sources":["PlayStation trophy list"],
    "guide":"Track the chapter transition rather than guessing from the number of jobs done. Before closing the chapter, keep a separate save if available so you can revisit any optional prompt."
  },
  {
    "name":"T**s Ass Drug Money","description":"Complete Chapter 2.","grade":"bronze",
    "kind":"Story","stage":1,"missable":false,"warning":"","target":"Chapter 2","sources":["PlayStation trophy list"],
    "guide":"Keep taking the main story assignments until Chapter 2 ends. Verify the trophy at the transition; clearing side activities is a separate goal and can wait."
  },
  {
    "name":"Vice City, Baby!","description":"Complete Chapter 3.","grade":"bronze",
    "kind":"Story","stage":2,"missable":false,"warning":"","target":"Chapter 3","sources":["PlayStation trophy list"],
    "guide":"Use the journal to distinguish main assignments from optional errands, then finish the third chapter. Check partner opportunities before continuing into the next chapter."
  },
  {
    "name":"Top Of The World, Ma","description":"Complete Chapter 4.","grade":"bronze",
    "kind":"Story","stage":2,"missable":false,"warning":"","target":"Chapter 4","sources":["PlayStation trophy list"],
    "guide":"Keep a save from before the fourth chapter ends if possible. Let the transition finish and check the platform award independently of your next active assignment."
  },
  {
    "name":"You Gotta Know When to Get Off","description":"Complete the final mission.","grade":"gold",
    "kind":"Story","stage":2,"missable":false,"warning":"","target":"Final mission","sources":["PlayStation trophy list"],
    "guide":"Before accepting a finale prompt, archive your current save if available and review any open partner or decision objectives. Stay through the mission result, then check the gold trophy."
  },
  {
    "name":"Trust","description":"Complete Breakfast Run.","grade":"bronze",
    "kind":"Story","stage":1,"missable":false,"warning":"","target":"Breakfast Run","sources":["PlayStation trophy list"],
    "guide":"Check the journal for the exact mission title Breakfast Run. Finish it on your story save, then confirm the record before marking this even if you skip the notification."
  },
  {
    "name":"Break the Bank","description":"Complete The Cartel Heist.","grade":"bronze",
    "kind":"Story","stage":2,"missable":false,"warning":"","target":"The Cartel Heist","sources":["PlayStation trophy list"],
    "guide":"Identify The Cartel Heist by its title in the story journal and continue until the game records the result. A free roam vault robbery belongs to a different trophy."
  },
  {
    "name":"Family Matters","description":"Complete Child's Play.","grade":"bronze",
    "kind":"Story","stage":2,"missable":false,"warning":"","target":"Child's Play","sources":["PlayStation trophy list"],
    "guide":"Follow the main story until Child's Play appears by name. On completion, check that the journal shows the mission cleared before moving on to any optional encounters."
  },
  {
    "name":"DWNFALL","description":"Complete Headliners.","grade":"bronze",
    "kind":"Story","stage":2,"missable":false,"warning":"","target":"Headliners","sources":["PlayStation trophy list"],
    "guide":"When the story offers Headliners, finish the whole assignment on your active save. If the notification is easy to miss, use the platform trophy list to confirm it."
  },
  {
    "name":"Hi-Jacked","description":"Complete VCIA Takedown.","grade":"bronze",
    "kind":"Story","stage":2,"missable":false,"warning":"","target":"VCIA Takedown","sources":["PlayStation trophy list"],
    "guide":"Use the named story assignment VCIA Takedown as your trigger. Keep its completion separate from the unscheduled departure trophy, which also mentions VCIA."
  },
  {
    "name":"Snow Storm","description":"Complete Operation Savage Glory.","grade":"bronze",
    "kind":"Story","stage":2,"missable":false,"warning":"","target":"Operation Savage Glory","sources":["PlayStation trophy list"],
    "guide":"Follow the story until Operation Savage Glory is in the journal. Wait for the result and verify that it registered before loading another save for cleanup."
  },
  {
    "name":"A Long Road","description":"Attain 100% Completion.","grade":"gold",
    "kind":"Completion","stage":5,"missable":false,"warning":"","target":"100% in game","sources":["PlayStation trophy list"],
    "guide":"After finishing the story, audit the game's completion figure. Use its progress categories where available and note which tasks move the percentage; trophy totals alone do not measure it."
  },
  {
    "name":"Cunning Stunts","description":"Complete 250 Stunts.","grade":"silver",
    "kind":"Activities","stage":4,"missable":false,"warning":"","target":"250 credited stunts","sources":["PlayStation trophy list"],
    "guide":"Record stunt progress during your normal travels. Before repeating an easy stunt in bulk, compare the counter before and after one repeat to see whether it adds credit."
  },
  {
    "name":"Master of None","description":"Try each type of activity once.","grade":"bronze",
    "kind":"Activities","stage":3,"missable":false,"warning":"","target":"Every activity type","sources":["PlayStation trophy list"],
    "guide":"Make a list of the activity categories shown in your game. Do one scored or completed session of each before improving results; this is a breadth check rather than a medal grind."
  },
  {
    "name":"The Shootist","description":"Earn a gold medal in all Shooting Range challenges.","grade":"silver",
    "kind":"Activities","stage":4,"missable":false,"warning":"","target":"Gold on every range challenge","sources":["PlayStation trophy list","Competition kit trophy list notes"],
    "guide":"The kit notes 42 challenges. Audit the range menu for missing gold medals and tackle those rows first. Use the result screen to confirm each gold before switching challenge."
  },
  {
    "name":"Top Fun","description":"Win a Top Fun Drone Race at every location.","grade":"bronze",
    "kind":"Activities","stage":3,"missable":false,"warning":"","target":"One drone win per location","sources":["PlayStation trophy list"],
    "guide":"Keep a list of Top Fun venues and check off each after a win. Repeating a familiar course does not address the location requirement, so prioritize new venues as they appear."
  },
  {
    "name":"Earn Cash, Not Kudos","description":"Win 20 different races.","grade":"bronze",
    "kind":"Activities","stage":4,"missable":false,"warning":"","target":"20 distinct race wins","sources":["PlayStation trophy list"],
    "guide":"Record the event name when you win. Move to an unrecorded event after each first place finish so that repeat wins do not inflate your count toward twenty."
  },
  {
    "name":"Baited My Tackle","description":"Beat Cal in a fishing challenge.","grade":"bronze",
    "kind":"Activities","stage":3,"missable":false,"warning":"","target":"Win against Cal","sources":["PlayStation trophy list"],
    "guide":"Look for a fishing challenge that names Cal and play it to a result. Free fishing and the story mission Gone Fishing are separate; record only a result that counts as a win."
  },
  {
    "name":"Stick Fiddler","description":"Complete an arcade game.","grade":"bronze",
    "kind":"Activities","stage":3,"missable":false,"warning":"","target":"One arcade completion","sources":["PlayStation trophy list"],
    "guide":"Choose an arcade game whose goal you understand and play until it records a completion. Leaving after a high score attempt is only useful if the game actually records a clear."
  },
  {
    "name":"Road to Rehabilitation","description":"Complete the final mission for Andy.","grade":"bronze",
    "kind":"Strands","stage":3,"missable":false,"warning":"","target":"Andy's finale","sources":["PlayStation trophy list"],
    "guide":"Track Andy's assignments as a single strand. After each job, check for his next opening and keep the strand unchecked until its last mission registers with the platform."
  },
  {
    "name":"This Was No Boat Accident","description":"Complete the final mission for Kenton.","grade":"bronze",
    "kind":"Strands","stage":3,"missable":false,"warning":"","target":"Kenton's finale","sources":["PlayStation trophy list"],
    "guide":"Check the journal for Kenton's jobs and follow them as a series. If there is no next job right away, note your last completed assignment and return during strand cleanup."
  },
  {
    "name":"The Lone Rider","description":"Complete the final mission for Billy.","grade":"bronze",
    "kind":"Strands","stage":3,"missable":false,"warning":"","target":"Billy's finale","sources":["PlayStation trophy list"],
    "guide":"Log each completed Billy mission without treating the first meeting as a completed strand. The individual trophy is your best confirmation that you reached the finale."
  },
  {
    "name":"Strangers & Freaks","description":"Complete 8 mission strands for strangers across the state of Leonida.","grade":"silver",
    "kind":"Strands","stage":4,"missable":false,"warning":"","target":"8 complete strands","sources":["PlayStation trophy list"],
    "guide":"Keep a list by stranger rather than by mission name. Only add a tally when the whole strand is done, then look for missing contacts in parts of Leonida you have visited less."
  },
  {
    "name":"Supply & Demand","description":"Complete the final mission for Randy.","grade":"bronze",
    "kind":"Strands","stage":3,"missable":false,"warning":"","target":"Randy's finale","sources":["PlayStation trophy list"],
    "guide":"Review Randy's completed assignments when you return to the strand. Follow any remaining lead for that contact, then use the trophy unlock to verify the final mission counted."
  },
  {
    "name":"Spin On This!","description":"Complete the final mission for Tyrone.","grade":"bronze",
    "kind":"Strands","stage":3,"missable":false,"warning":"","target":"Tyrone's finale","sources":["PlayStation trophy list"],
    "guide":"Keep Tyrone on your cleanup list after the first encounter. When a later job appears, complete it and check the platform before adding Tyrone to your total of finished strands."
  },
  {
    "name":"Positive Mental Attitude","description":"Meditate at every spot across Leonida.","grade":"bronze",
    "kind":"Collectibles","stage":4,"missable":false,"warning":"","target":"Every meditation spot","sources":["PlayStation trophy list"],
    "guide":"Mark meditation sites by region as you complete their interaction. When only a few remain, compare your route with any in game markings instead of revisiting all known spots."
  },
  {
    "name":"Fair Game","description":"Hunt a unique animal for Bret.","grade":"bronze",
    "kind":"Strands","stage":3,"missable":false,"warning":"","target":"Bret's unique animal","sources":["PlayStation trophy list"],
    "guide":"Check Bret's objective for any target clue before leaving. Track the named hunt separately from general wildlife encounters and confirm the result with the active objective."
  },
  {
    "name":"Don't Touch My Deck","description":"Complete 3 Collectible Card sets.","grade":"silver",
    "kind":"Collectibles","stage":4,"missable":false,"warning":"","target":"3 complete card sets","sources":["PlayStation trophy list"],
    "guide":"Sort your cards by set before planning a route. Prioritize gaps in the three sets closest to completion; a high pile of cards spread across unfinished sets will not count."
  },
  {
    "name":"You WAiNKer!","description":"WAiNK It at 100 locations.","grade":"silver",
    "kind":"Collectibles","stage":4,"missable":false,"warning":"","target":"100 distinct locations","sources":["PlayStation trophy list"],
    "guide":"Keep a record of locations where the interaction credited progress. Group new stops into regional outings, and check the total between outings so repeats do not mask a missing stop."
  },
  {
    "name":"One Last Thing","description":"Complete 50 Challenges.","grade":"bronze",
    "kind":"Activities","stage":4,"missable":false,"warning":"","target":"50 finished challenges","sources":["PlayStation trophy list"],
    "guide":"Consult the challenge display and work on objectives already close to done. Compare its completed tally between sessions; starting a new challenge does not add to the finish count."
  },
  {
    "name":"Hot Together","description":"Lose a 4 star Wanted Level with your partner and escape the heat.","grade":"bronze",
    "kind":"Activities","stage":2,"missable":true,"warning":"Try while partner play is available; later access is unconfirmed.","target":"Clear four stars together","sources":["PlayStation trophy list"],
    "guide":"During partner play, check that the game shows four stars before starting the escape. Keep the partner with you through the end and confirm the wanted display fully clears."
  },
  {
    "name":"Retail Therapy","description":"Rob 3 shops back-to-back with your partner without losing your Wanted Level.","grade":"bronze",
    "kind":"Activities","stage":2,"missable":true,"warning":"Do this during a partner window; later access is unconfirmed.","target":"3 consecutive shops","sources":["PlayStation trophy list"],
    "guide":"Pick three shops close together before beginning. Keep your partner present, monitor the wanted display between visits, and start a fresh chain if it clears before the third shop."
  },
  {
    "name":"Whip It Good","description":"Discover 100 vehicles.","grade":"bronze",
    "kind":"Collectibles","stage":4,"missable":false,"warning":"","target":"100 vehicle discoveries","sources":["PlayStation trophy list"],
    "guide":"Note models the game registers as new during travel. Vary the places you search for vehicles and check discovery progress after a new model before trying to grind the total."
  },
  {
    "name":"Gunslinger","description":"Take down 5 enemies in a single use of Combat Focus.","grade":"bronze",
    "kind":"Activities","stage":3,"missable":false,"warning":"","target":"5 in one activation","sources":["PlayStation trophy list"],
    "guide":"In the game, wait for an encounter with enough targets and a ready Combat Focus meter. Count only takedowns in the same activation; two partial attempts do not combine."
  },
  {
    "name":"Catch Me If You Can","description":"Make an unscheduled departure at VCIA.","grade":"bronze",
    "kind":"Activities","stage":3,"missable":false,"warning":"","target":"Departure at VCIA","sources":["PlayStation trophy list"],
    "guide":"Use VCIA as the area to investigate. Look for an interaction or objective related to departing, and check the trophy afterward; the description does not identify a specific route."
  },
  {
    "name":"Challenging Tank","description":"Kinda hot in these Rhinos.","grade":"bronze",
    "kind":"Activities","stage":4,"missable":false,"warning":"","target":"Investigate Rhino activity","sources":["PlayStation trophy list"],
    "guide":"Treat Rhinos as the in game lead and watch for an objective or challenge using that name. The clue does not confirm a location, wanted threshold, or required time."
  },
  {
    "name":"Sneakthief","description":"Rob a jewelry store without being detected.","grade":"bronze",
    "kind":"Activities","stage":3,"missable":false,"warning":"","target":"One undetected jewelry job","sources":["PlayStation trophy list"],
    "guide":"Choose a jewelry job with an approach you can observe first. Watch the game's detection feedback all the way through completion and abandon the attempt if the stealth condition fails."
  },
  {
    "name":"Maximum Withdrawal","description":"Rob 5 Bank Vaults and escape.","grade":"silver",
    "kind":"Activities","stage":4,"missable":false,"warning":"","target":"5 vault jobs with escapes","sources":["PlayStation trophy list"],
    "guide":"Record each vault job only after the escape is complete. Favor new vaults until the trophy unlocks, since the official requirement does not clarify whether repeats count."
  },
  {
    "name":"A Classic Blitz Play","description":"Rob an Armored Truck and escape.","grade":"bronze",
    "kind":"Activities","stage":3,"missable":false,"warning":"","target":"One truck job and escape","sources":["PlayStation trophy list"],
    "guide":"Check that the encounter is labeled as an armored truck. After the objective is secured, finish the escape and wait for any pursuit or event status to close before recording success."
  },
  {
    "name":"The Goodtime State","description":"Explore all of Leonida.","grade":"bronze",
    "kind":"Collectibles","stage":4,"missable":false,"warning":"","target":"All exploration credit","sources":["PlayStation trophy list"],
    "guide":"Use the map to spot unfamiliar areas after the story route is done. Sweep neighboring gaps together and check the exploration state after each trip rather than relying on miles traveled."
  },
  {
    "name":"Pest Control","description":"Rob an Illegal Operation belonging to each gang.","grade":"bronze",
    "kind":"Activities","stage":4,"missable":false,"warning":"","target":"One credited job per gang","sources":["PlayStation trophy list"],
    "guide":"Log the gang associated with each finished Illegal Operation. For cleanup, seek an operation with a name you have not checked off instead of repeating your fastest job."
  },
  {
    "name":"In The Beginning…","description":"Enjoy a cocktail with a view on Ocean Beach.","grade":"bronze",
    "kind":"Activities","stage":3,"missable":false,"warning":"","target":"Ocean Beach cocktail","sources":["PlayStation trophy list"],
    "guide":"Use Ocean Beach as the search area and look for a cocktail interaction with a view. Let the interaction finish and check the trophy; the official clue gives no venue name."
  },
  {
    "name":"Capital Offense","description":"Smash your way out of a vehicle showroom in classic style.","grade":"bronze",
    "kind":"Activities","stage":3,"missable":false,"warning":"","target":"Vehicle showroom exit","sources":["PlayStation trophy list"],
    "guide":"Start at a vehicle showroom. Look for an available in game vehicle and a breakable exit, then see whether completion registers. The clue supplies no specific model or business."
  },
  {
    "name":"Let’s Go Bowling","description":"Follow-through at the Kolt & Associates' bowling alley.","grade":"bronze",
    "kind":"Activities","stage":2,"missable":true,"warning":"Check the named venue when available; replay is unconfirmed.","target":"Kolt & Associates bowling alley","sources":["PlayStation trophy list"],
    "guide":"When the named alley is accessible, look for a playable prompt and follow it to a result. Keep an earlier save if allowed because the clue does not establish a return window."
  },
  {
    "name":"Personal Best","description":"A partnership with mass appeal.","grade":"bronze",
    "kind":"Story","stage":2,"missable":true,"warning":"Review partner prompts during the story; trigger unconfirmed.","target":"Partnership clue","sources":["PlayStation trophy list"],
    "guide":"Watch for partnership objectives while both characters are available and check the trophy after each milestone. The clue is too vague to identify a mission, score, or venue."
  },
  {
    "name":"Actions Speak Louder","description":"Choices made (for better or worse).","grade":"bronze",
    "kind":"Story","stage":2,"missable":true,"warning":"Save before major decisions if possible; replay is unconfirmed.","target":"Decision clue","sources":["PlayStation trophy list"],
    "guide":"Keep a separate save before consequential story decisions if the game allows it. Confirm the award after each outcome; no particular decision is identified in the official wording."
  },
  {
    "name":"Bad Luck, I Guess","description":"Second time's the charm.","grade":"bronze",
    "kind":"Story","stage":2,"missable":true,"warning":"Keep a save before repeat encounters; the trigger is unconfirmed.","target":"Second encounter clue","sources":["PlayStation trophy list"],
    "guide":"Note story events that offer an explicit second attempt, and preserve the earlier save if there is a choice. The description does not identify the event or say which result counts."
  },
  {
    "name":"The Truth Is Out There","description":"What the hell just happened?","grade":"bronze",
    "kind":"Activities","stage":4,"missable":false,"warning":"","target":"Unidentified encounter","sources":["PlayStation trophy list"],
    "guide":"Record unusual discoveries during exploration and verify the trophy after completing any related objective. The official description alone cannot establish a location or time."
  },
  {
    "name":"Ten Pin","description":"Bowl 'em over with a melee drive-by.","grade":"bronze",
    "kind":"Activities","stage":3,"missable":false,"warning":"","target":"Melee drive-by","sources":["PlayStation trophy list"],
    "guide":"Use the game controls to identify a melee action from a vehicle. Verify the trophy after a successful in game attempt; the bowling phrase does not specify a numeric target."
  },
  {
    "name":"Dime on the Dollar","description":"Earn $250,000 laundering Marked Bills through your contacts.","grade":"bronze",
    "kind":"Activities","stage":4,"missable":false,"warning":"","target":"$250,000 earned","sources":["PlayStation trophy list"],
    "guide":"Track the amount actually credited by contacts after processing Marked Bills. Keep those payouts separate from the amount submitted and from general cash earned elsewhere."
  },
  {
    "name":"Treat Yo Self","description":"Spend $100,000 across all shops.","grade":"bronze",
    "kind":"Activities","stage":4,"missable":false,"warning":"","target":"$100,000 in shop spending","sources":["PlayStation trophy list"],
    "guide":"Keep a running total of shop receipts and check any in game spending statistic. Make useful purchases first and sample different shop types before spending solely for the award."
  },
  {
    "name":"Little Boxes","description":"Purchase all garage properties.","grade":"bronze",
    "kind":"Collectibles","stage":4,"missable":false,"warning":"","target":"All garage properties","sources":["PlayStation trophy list"],
    "guide":"Check property listings for garages and record each purchase on the same save. Revisit listings after opening new regions so a garage added to the map does not escape your audit."
  },
  {
    "name":"On the Spot","description":"Register 10 vehicles to the Scooter Bros app.","grade":"bronze",
    "kind":"Activities","stage":3,"missable":false,"warning":"","target":"10 accepted registrations","sources":["PlayStation trophy list"],
    "guide":"Open Scooter Bros in the game's interface and check how it confirms each registration. Record ten accepted entries; vehicle discovery alone does not confirm that the app logged one."
  }
];

const stages = [
  ["Start the story", "Chapters 1–2 and early story jobs. Establish a rotating save before major story steps."],
  ["Finish the story", "Chapters 3–4 and the finale. Review the six precaution flags whenever a partner or decision prompt appears."],
  ["Meet the locals", "Follow contact strands; sample every activity type, then log drone wins by venue."],
  ["Sweep Leonida", "Track 250 stunts, 100 WAiNK stops, 3 card sets, 20 race wins and the range golds."],
  ["Audit the platinum", "Check the game's 100% separately, then compare all 54 other trophies with PlayStation."]
];
const kinds = ["All", "Story", "Missable", "Collectibles", "Activities", "Strands", "Completion"];
const key = "leonida-tracker-v1";
const $ = selector => document.querySelector(selector);
const el = (tag, value, className) => {
  const node = document.createElement(tag);
  if (value) node.textContent = value;
  if (className) node.className = className;
  return node;
};

function decode(text) {
  const data = JSON.parse(text);
  if (!data || data.version !== 1 || typeof data.shield !== "boolean" ||
      !Array.isArray(data.earned) || data.earned.length > catalog.length ||
      data.earned.some(i => !Number.isInteger(i) || i < 0 || i >= catalog.length)) {
    throw new Error("Backup is not a valid Leonida tracker file.");
  }
  return {version: 1, shield: data.shield, earned: [...new Set(data.earned)].sort((a,b) => a-b)};
}

let state = {version: 1, shield: true, earned: []};
const params = new URLSearchParams(location.search);
const demo = params.get("demo");
let kind = "All";
let view = "list";
let stage = 0;
let query = "";
let selected = -1;
if (demo) {
  state = {version: 1, shield: demo === "spoiler", earned: [1,2,7,19,20,44,54]};
  if (demo === "roadmap") view = "route";
  if (demo === "missables") kind = "Missable";
  if (demo === "spoiler") kind = "Story";
  selected = demo === "missables" ? 33 : demo === "spoiler" ? 3 : 16;
  $("#notice").textContent = "Preview checklist · changes here are temporary.";
} else {
  try {
    const raw = localStorage.getItem(key);
    if (raw) state = decode(raw);
  } catch {
    $("#notice").textContent = "Saved progress could not be read. You can still import a backup.";
  }
}

function save() {
  if (demo) return;
  try {
    localStorage.setItem(key, JSON.stringify(state));
    $("#notice").textContent = "Progress saved on this browser.";
  } catch {
    $("#notice").textContent = "Browser storage is unavailable. Export to keep your progress.";
  }
}

function earned(i) {
  return state.earned.includes(i);
}

function hidden(t, i) {
  return state.shield && t.kind === "Story" && !earned(i);
}

function visibleRows() {
  return catalog.map((t,i) => ({t,i})).filter(({t,i}) => {
    if (kind === "Missable" ? !t.missable : kind !== "All" && t.kind !== kind) return false;
    if (stage && stage !== t.stage) return false;
    if ($("#unfinished").checked && earned(i)) return false;
    if (!query) return true;
    const label = hidden(t,i) ? "hidden story trophy" : [t.name,t.description,t.target].join(" ");
    return label.toLowerCase().includes(query);
  });
}

function renderDetail() {
  const panel = $("#detail");
  panel.replaceChildren(el("p", "FIELD NOTES", "eyebrow"));
  const t = catalog[selected];
  if (!t) {
    panel.append(el("h2", "Choose a trophy"), el("p", "Open a checklist entry to see its target, guide and sources."));
    return;
  }
  const masked = hidden(t, selected);
  panel.append(el("h2", masked ? "Hidden story trophy" : t.name));
  panel.append(el("span", t.grade, "badge " + t.grade), el("span", "Stage " + t.stage, "badge"));
  if (t.missable) panel.append(el("span", "Potentially missable", "badge risk"));
  if (masked) {
    panel.append(el("p", "The spoiler shield holds back this trophy’s name, description and guide until you mark it earned or turn the shield off."));
    return;
  }
  panel.append(el("p", t.description, "official"), el("h3", "Target"), el("p", t.target));
  if (t.warning) panel.append(el("p", t.warning, "warning"));
  panel.append(el("h3", "How to track it"), el("p", t.guide));
  panel.append(el("h3", "Sources"), el("p", t.sources.join(" · "), "source"));
}

function renderRows() {
  const rows = visibleRows();
  if (!rows.some(row => row.i === selected)) selected = rows[0]?.i ?? -1;
  $("#results").textContent = rows.length + " of 55 trophies" + (stage ? " · Stage " + stage : "");
  $("#clearStage").hidden = !stage;
  const items = rows.map(({t,i}) => {
    const masked = hidden(t,i);
    const title = masked ? "Hidden story trophy" : t.name;
    const row = el("li", "", "trophy" + (i === selected ? " selected" : ""));
    const check = el("input");
    check.type = "checkbox";
    check.checked = earned(i);
    check.setAttribute("aria-label", "Earned: " + title);
    check.addEventListener("change", () => {
      state.earned = check.checked ? [...state.earned,i].sort((a,b) => a-b) : state.earned.filter(id => id !== i);
      save();
      render();
      const next = $("#rows").querySelector('[data-id="' + i + '"] input');
      (next || $("#unfinished")).focus({preventScroll:true});
    });
    const button = el("button", "", "rowOpen");
    button.setAttribute("aria-pressed", String(i === selected));
    button.append(el("strong", title), el("span", masked ? "Shielded until earned" : t.description, "description"));
    button.addEventListener("click", () => {
      selected = i;
      const previous = $("#rows .selected");
      previous?.classList.remove("selected");
      previous?.querySelector("button").setAttribute("aria-pressed", "false");
      row.classList.add("selected");
      button.setAttribute("aria-pressed", "true");
      renderDetail();
    });
    row.dataset.id = i;
    const badges = el("div", "", "badges");
    badges.append(el("span", t.grade, "badge " + t.grade));
    if (t.missable) badges.append(el("span", "Watch", "badge risk"));
    row.append(check,button,badges);
    return row;
  });
  $("#rows").replaceChildren(...items);
  $("#empty").hidden = rows.length > 0;
  renderDetail();
}

function renderRoute() {
  $("#stages").replaceChildren(...stages.map(([name,summary],index) => {
    const entries = catalog.map((t,i) => ({t,i})).filter(({t}) => t.stage === index + 1);
    const section = el("article", "", "stage");
    const content = el("div");
    const highlights = entries
      .filter(({t,i}) => !hidden(t,i))
      .filter(({t}) => t.kind === "Story" || t.grade !== "bronze" || t.missable)
      .map(({t}) => t.target);
    content.append(el("h3", name), el("p", summary));
    if (highlights.length) content.append(el("p", highlights.join(" · "), "targets"));
    const button = el("button", entries.filter(({i}) => earned(i)).length + "/" + entries.length + " · View");
    button.addEventListener("click", () => {
      view = "list";
      kind = "All";
      stage = index + 1;
      query = $("#search").value = "";
      $("#unfinished").checked = false;
      render();
      $("#search").focus();
    });
    section.append(el("strong", "0" + (index + 1), "number"), content, button);
    return section;
  }));
}

function render() {
  $("#earned").textContent = state.earned.length;
  $("#meter").value = state.earned.length;
  $("#shield").checked = state.shield;
  $("#list").hidden = view !== "list";
  $("#route").hidden = view !== "route";
  for (const button of $("#tabs").children) button.setAttribute("aria-pressed", String(button.dataset.view === view));
  for (const button of $("#filters").children) button.setAttribute("aria-pressed", String(button.textContent === kind));
  if (view === "list") renderRows();
  else renderRoute();
}

for (const label of kinds) {
  const button = el("button", label);
  button.addEventListener("click", () => {
    kind = label;
    stage = 0;
    render();
  });
  $("#filters").append(button);
}
$("#tabs").addEventListener("click", event => {
  if (!event.target.dataset.view) return;
  view = event.target.dataset.view;
  render();
});
$("#search").addEventListener("input", event => {
  query = event.target.value.trim().toLowerCase();
  renderRows();
});
$("#unfinished").addEventListener("change", renderRows);
$("#clearStage").addEventListener("click", () => {
  stage = 0;
  render();
  $("#search").focus();
});
$("#shield").addEventListener("change", event => {
  state.shield = event.target.checked;
  save();
  render();
});
$("#export").addEventListener("click", () => {
  const url = URL.createObjectURL(new Blob([JSON.stringify(state,null,2)], {type:"application/json"}));
  const link = el("a");
  link.href = url;
  link.download = "leonida-progress.json";
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});
$("#import").addEventListener("click", () => $("#backup").click());
$("#backup").addEventListener("change", async event => {
  const file = event.target.files[0];
  if (!file) return;
  try {
    if (file.size > 16384) throw new Error("Backup exceeds 16 KB.");
    state = decode(await file.text());
    save();
    render();
    if (demo) $("#notice").textContent = "Backup loaded in the preview.";
  } catch (error) {
    $("#notice").textContent = "Import failed. Existing progress was kept. " + error.message;
  } finally {
    event.target.value = "";
  }
});
render();
if (demo === "checklist") {
  const rows = $("#rows");
  const openRow = rows.querySelector(".selected");
  if (openRow) rows.scrollTop = Math.max(0, openRow.getBoundingClientRect().top - rows.getBoundingClientRect().top - 120);
}
window.__shotReady = true;
