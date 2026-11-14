// =====================================================================
// OFFICIAL CAT QUESTION BANK (Extracted from 2024 & 2025 Official Papers)
// Total Questions: 136 | Slot 1: 68 | Slot 2: 68
// Sections: VARC (24), DILR (22), QA (22) per Slot
// =====================================================================

import s1_stars from '../assets/questions/slot1_lrdi_stars.png';
import s1_countries from '../assets/questions/slot1_lrdi_countries.png';
import s1_candlestick from '../assets/questions/slot1_lrdi_candlestick.png';
import s2_walkways from '../assets/questions/slot2_lrdi_walkways.png';
import s2_ratings from '../assets/questions/slot2_lrdi_ratings.png';
import s2_firms from '../assets/questions/slot2_lrdi_firms.png';

export const DIAGRAM_MAP = {
  '/src/assets/questions/slot1_lrdi_stars.png': s1_stars,
  '/src/assets/questions/slot1_lrdi_countries.png': s1_countries,
  '/src/assets/questions/slot1_lrdi_candlestick.png': s1_candlestick,
  '/src/assets/questions/slot2_lrdi_walkways.png': s2_walkways,
  '/src/assets/questions/slot2_lrdi_ratings.png': s2_ratings,
  '/src/assets/questions/slot2_lrdi_firms.png': s2_firms,
};

export const officialSlot1Questions = [
  {
    "id": "S1_VARC_1",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 1,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S1_RC_1",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nUnderstanding the key properties of complex systems can help us clarify and deal with many new and existing global\nchallenges, from pandemics to poverty. A recent study in Nature Physics found transitions to orderly states such as\nschooling in fish (all fish swimming in the same direction), can be caused, paradoxically, by randomness, or 'noise'\nfeeding back on itself. That is, a misalignment among the fish causes further misalignment, eventually inducing a\ntransition to schooling. Most of us wouldn't guess that noise can produce predictable behaviour. The result invites us\nto consider how technology such as contact-tracing apps, although informing us locally, might negatively impact our\ncollective movement. If each of us changes our behaviour to avoid the infected, we might generate a collective pattern\nwe had aimed to avoid: higher levels of interaction between the infected and susceptible, or high levels of interaction\namong the asymptomatic.\nComplex systems also suffer from a special vulnerability to events that don't follow a normal distribution or 'bell curve'.\nWhen events are distributed normally, most outcomes are familiar and don't seem particularly striking. Height is a\ngood example: it's pretty unusual for a man to be over 7 feet tall; most adults are between 5 and 6 feet, and there is\nno known person over 9 feet tall. But in collective settings where contagion shapes behaviour, a run on the banks, a\nscramble to buy toilet paper. the probability distributions for possible events are often heavy-tailed. There is a much\nhigher probability of extreme events, such as a stock market crash or a massive surge in infections. These events are\nstill unlikely, but they occur more frequently and are larger than would be expected under normal distributions.\nWhat's more, once a rare but hugely significant 'tail' event takes place, this raises the probability of further tail events.\nWe might call them second-order tail events; they include stock market gyrations after a big fall and earthquake\naftershocks. The initial probability of second-order tail events is so tiny it's almost impossible to calculate. But once a\nfirst-order tail event occurs, the rules change, and the probability of a second-order tail event increases.\nThe dynamics of tail events are complicated by the fact that they result from cascades of other unlikely events. When\nCOVID-19 first struck, the stock market suffered stunning losses followed by an equally stunning recovery. Some of\nthese dynamics are potentially attributable to former sports bettors, with no sports to bet on, entering the market as\nspeculators rather than investors. The arrival of these new players might have increased inefficiencies and allowed\nsavvy long-term investors to gain an edge over bettors with different goals.\nOne reason a first-order tail event can induce further tail events is that it changes the perceived costs of our actions\nand changes the rules that we play by. This game-change is an example of another key complex systems concept:\nnonstationarity. A second, canonical example of nonstationarity is adaptation, as illustrated by the arms race involved\nin the coevolution of hosts and parasites in which each has to 'run' faster, just to keep up with the novel solutions the\nother one presents as they battle it out in evolutionary time.",
    "questionText": "All of the following inferences are supported by the passage EXCEPT that:",
    "options": [
      "The text attributes the COVID-19 pandemic rebound in financial markets solely to displaced sports bettors and\ntreats their entry as the overriding cause of the rapid recovery across assets and time horizons.",
      "Heavy-tailed events make extreme outcomes more frequent and larger than bell curve expectations. This\ncomplicates forecasting and risk management in collective settings shaped by contagion and copying\nbehaviour.",
      "Learning can change the rules that actors face. So, a rare shock can alter payoffs and raise the odds of\nsubsequent large disturbances within the same system, which supports the idea of second-order tail events.",
      "Examples like runs on banks and toilet paper scrambles illustrate how contagion can amplify local choices into\nsystem-wide cascades that surprise participants and lead to patterns they did not intend to create."
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S1_VARC_2",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 2,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S1_RC_1",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nUnderstanding the key properties of complex systems can help us clarify and deal with many new and existing global\nchallenges, from pandemics to poverty. A recent study in Nature Physics found transitions to orderly states such as\nschooling in fish (all fish swimming in the same direction), can be caused, paradoxically, by randomness, or 'noise'\nfeeding back on itself. That is, a misalignment among the fish causes further misalignment, eventually inducing a\ntransition to schooling. Most of us wouldn't guess that noise can produce predictable behaviour. The result invites us\nto consider how technology such as contact-tracing apps, although informing us locally, might negatively impact our\ncollective movement. If each of us changes our behaviour to avoid the infected, we might generate a collective pattern\nwe had aimed to avoid: higher levels of interaction between the infected and susceptible, or high levels of interaction\namong the asymptomatic.\nComplex systems also suffer from a special vulnerability to events that don't follow a normal distribution or 'bell curve'.\nWhen events are distributed normally, most outcomes are familiar and don't seem particularly striking. Height is a\ngood example: it's pretty unusual for a man to be over 7 feet tall; most adults are between 5 and 6 feet, and there is\nno known person over 9 feet tall. But in collective settings where contagion shapes behaviour, a run on the banks, a\nscramble to buy toilet paper. the probability distributions for possible events are often heavy-tailed. There is a much\nhigher probability of extreme events, such as a stock market crash or a massive surge in infections. These events are\nstill unlikely, but they occur more frequently and are larger than would be expected under normal distributions.\nWhat's more, once a rare but hugely significant 'tail' event takes place, this raises the probability of further tail events.\nWe might call them second-order tail events; they include stock market gyrations after a big fall and earthquake\naftershocks. The initial probability of second-order tail events is so tiny it's almost impossible to calculate. But once a\nfirst-order tail event occurs, the rules change, and the probability of a second-order tail event increases.\nThe dynamics of tail events are complicated by the fact that they result from cascades of other unlikely events. When\nCOVID-19 first struck, the stock market suffered stunning losses followed by an equally stunning recovery. Some of\nthese dynamics are potentially attributable to former sports bettors, with no sports to bet on, entering the market as\nspeculators rather than investors. The arrival of these new players might have increased inefficiencies and allowed\nsavvy long-term investors to gain an edge over bettors with different goals.\nOne reason a first-order tail event can induce further tail events is that it changes the perceived costs of our actions\nand changes the rules that we play by. This game-change is an example of another key complex systems concept:\nnonstationarity. A second, canonical example of nonstationarity is adaptation, as illustrated by the arms race involved\nin the coevolution of hosts and parasites in which each has to 'run' faster, just to keep up with the novel solutions the\nother one presents as they battle it out in evolutionary time.",
    "questionText": "The passage suggests that contact tracing apps could inadvertently raise risky interactions by altering local\nbehaviour. Which one of the assumptions below is most necessary for that suggestion to hold?",
    "options": [
      "Individuals base movement choices partly on observed infections and on the behaviour of others. So, local\nresponses interact, which turns many small adjustments into large scale patterns that can frustrate the\nintended aim of risk reduction.",
      "Urban networks have uniform traffic conditions at all hours, which allows perfectly predictable routing\nindependent of personal choices, social signals, or crowd reactions and, therefore, makes interdependence\nnegligible in city movement decisions.",
      "App alerts always include precise location to within one metre and deliver real time updates for all users, which\nensures that the data feed is perfectly accurate regardless of privacy settings, power limits, or network\nconditions.",
      "Most users uninstall apps within a week, which leaves only highly exposed individuals participating. This\nneutralises any systematic bias in routing decisions and prevents any predictable change in aggregate contact\npatterns."
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S1_VARC_3",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 3,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S1_RC_1",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nUnderstanding the key properties of complex systems can help us clarify and deal with many new and existing global\nchallenges, from pandemics to poverty. A recent study in Nature Physics found transitions to orderly states such as\nschooling in fish (all fish swimming in the same direction), can be caused, paradoxically, by randomness, or 'noise'\nfeeding back on itself. That is, a misalignment among the fish causes further misalignment, eventually inducing a\ntransition to schooling. Most of us wouldn't guess that noise can produce predictable behaviour. The result invites us\nto consider how technology such as contact-tracing apps, although informing us locally, might negatively impact our\ncollective movement. If each of us changes our behaviour to avoid the infected, we might generate a collective pattern\nwe had aimed to avoid: higher levels of interaction between the infected and susceptible, or high levels of interaction\namong the asymptomatic.\nComplex systems also suffer from a special vulnerability to events that don't follow a normal distribution or 'bell curve'.\nWhen events are distributed normally, most outcomes are familiar and don't seem particularly striking. Height is a\ngood example: it's pretty unusual for a man to be over 7 feet tall; most adults are between 5 and 6 feet, and there is\nno known person over 9 feet tall. But in collective settings where contagion shapes behaviour, a run on the banks, a\nscramble to buy toilet paper. the probability distributions for possible events are often heavy-tailed. There is a much\nhigher probability of extreme events, such as a stock market crash or a massive surge in infections. These events are\nstill unlikely, but they occur more frequently and are larger than would be expected under normal distributions.\nWhat's more, once a rare but hugely significant 'tail' event takes place, this raises the probability of further tail events.\nWe might call them second-order tail events; they include stock market gyrations after a big fall and earthquake\naftershocks. The initial probability of second-order tail events is so tiny it's almost impossible to calculate. But once a\nfirst-order tail event occurs, the rules change, and the probability of a second-order tail event increases.\nThe dynamics of tail events are complicated by the fact that they result from cascades of other unlikely events. When\nCOVID-19 first struck, the stock market suffered stunning losses followed by an equally stunning recovery. Some of\nthese dynamics are potentially attributable to former sports bettors, with no sports to bet on, entering the market as\nspeculators rather than investors. The arrival of these new players might have increased inefficiencies and allowed\nsavvy long-term investors to gain an edge over bettors with different goals.\nOne reason a first-order tail event can induce further tail events is that it changes the perceived costs of our actions\nand changes the rules that we play by. This game-change is an example of another key complex systems concept:\nnonstationarity. A second, canonical example of nonstationarity is adaptation, as illustrated by the arms race involved\nin the coevolution of hosts and parasites in which each has to 'run' faster, just to keep up with the novel solutions the\nother one presents as they battle it out in evolutionary time.",
    "questionText": "Which one of the options below best summarises the passage?",
    "options": [
      "The passage explains how speculative entrants always produce inefficiency after health shocks. Therefore,\nlong-term investors invariably profit when new participants push prices away from fundamentals under\npandemic conditions and comparable crises.",
      "The passage explains how noise can create order, then shows why complex systems with contagion are\nvulnerable to heavy-tailed cascades. It also explains why early shocks change rules through nonstationarity\nwith a market illustration during the COVID-19 disruption",
      "The passage explains how social outcomes generally follow normal distributions. So, extreme events are\nnegligible, and policy should stabilise averages rather than learn from large shocks in fast-changing collective\nsettings.",
      "The passage explains how nonstationarity works in evolutionary biology and rejects applications in markets or\npublic health because adaptation is exclusive to parasite-host systems and cannot arise in technology-\nmediated social dynamics"
    ],
    "correctAnswer": 1,
    "explanation": "Official CAT answer: B."
  },
  {
    "id": "S1_VARC_4",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 4,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S1_RC_1",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nUnderstanding the key properties of complex systems can help us clarify and deal with many new and existing global\nchallenges, from pandemics to poverty. A recent study in Nature Physics found transitions to orderly states such as\nschooling in fish (all fish swimming in the same direction), can be caused, paradoxically, by randomness, or 'noise'\nfeeding back on itself. That is, a misalignment among the fish causes further misalignment, eventually inducing a\ntransition to schooling. Most of us wouldn't guess that noise can produce predictable behaviour. The result invites us\nto consider how technology such as contact-tracing apps, although informing us locally, might negatively impact our\ncollective movement. If each of us changes our behaviour to avoid the infected, we might generate a collective pattern\nwe had aimed to avoid: higher levels of interaction between the infected and susceptible, or high levels of interaction\namong the asymptomatic.\nComplex systems also suffer from a special vulnerability to events that don't follow a normal distribution or 'bell curve'.\nWhen events are distributed normally, most outcomes are familiar and don't seem particularly striking. Height is a\ngood example: it's pretty unusual for a man to be over 7 feet tall; most adults are between 5 and 6 feet, and there is\nno known person over 9 feet tall. But in collective settings where contagion shapes behaviour, a run on the banks, a\nscramble to buy toilet paper. the probability distributions for possible events are often heavy-tailed. There is a much\nhigher probability of extreme events, such as a stock market crash or a massive surge in infections. These events are\nstill unlikely, but they occur more frequently and are larger than would be expected under normal distributions.\nWhat's more, once a rare but hugely significant 'tail' event takes place, this raises the probability of further tail events.\nWe might call them second-order tail events; they include stock market gyrations after a big fall and earthquake\naftershocks. The initial probability of second-order tail events is so tiny it's almost impossible to calculate. But once a\nfirst-order tail event occurs, the rules change, and the probability of a second-order tail event increases.\nThe dynamics of tail events are complicated by the fact that they result from cascades of other unlikely events. When\nCOVID-19 first struck, the stock market suffered stunning losses followed by an equally stunning recovery. Some of\nthese dynamics are potentially attributable to former sports bettors, with no sports to bet on, entering the market as\nspeculators rather than investors. The arrival of these new players might have increased inefficiencies and allowed\nsavvy long-term investors to gain an edge over bettors with different goals.\nOne reason a first-order tail event can induce further tail events is that it changes the perceived costs of our actions\nand changes the rules that we play by. This game-change is an example of another key complex systems concept:\nnonstationarity. A second, canonical example of nonstationarity is adaptation, as illustrated by the arms race involved\nin the coevolution of hosts and parasites in which each has to 'run' faster, just to keep up with the novel solutions the\nother one presents as they battle it out in evolutionary time.",
    "questionText": "Which one of the following observations would most strengthen the passage's claim that a first-order tail event\nraises the probability of further tail events in complex systems?",
    "options": [
      "In epidemic networks, initial super-spreading episodes are isolated spikes after which outbreak sizes match the\nbaseline distribution from independent contact models across comparable cities with no rise in the frequency\nor size of later extreme clusters",
      "After a major equity crash, researchers find dense clusters of large daily moves for several weeks, with extreme\ndays occurring far more often than in normal circumstances for assets with customarily low volatility profiles",
      "River discharge records show water levels fit a normal distribution with thin tails that match laboratory data,\nregardless of storms or floods",
      "Following large earthquakes, regional seismic activity returns to baseline within hours with no aftershock\nsequence once data are adjusted for reporting effects, which suggests independence across events rather than\nany elevation in subsequent tail probabilities"
    ],
    "correctAnswer": 1,
    "explanation": "Official CAT answer: B."
  },
  {
    "id": "S1_VARC_5",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 5,
    "type": "TITA",
    "subtopic": "Parajumble",
    "setId": "S1_VA_5",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "questionText": "Five jumbled sentences (labelled 1, 2, 3, 4, and 5), related to a topic, are given below. Four of them can be put\ntogether to form a coherent paragraph. Identify the odd sentence out and key in the number of that sentence\nas your answer.\n\n1. The Bayeux tapestry was, therefore, an obvious way to tell people about the downfall of the English and the\nrise of the Normans.\n2. So if we take expert in Anglo-Saxon culture Gale Owen-Crocker's idea that the tapestry was originally hung in\na square with certain scenes facing each other, people would have stood in the centre.\n3. Art historian Linda Neagley has argued that pre-Renaissance people interacted with art visually,\nkinaesthetically (sensory perception through bodily movement) and physically.\n4. That would make it an 11th-century immersive space with scenes corresponding and echoing each other,\ndrawing the viewer's attention, playing on their senses and understanding of the story they thought they knew.\n5. The Bayeux tapestry would have been hung at eye level to enable this",
    "options": [],
    "correctAnswer": "1",
    "explanation": "Official CAT answer: 1."
  },
  {
    "id": "S1_VARC_6",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 6,
    "type": "MCQ",
    "subtopic": "Verbal Ability",
    "setId": "S1_VA_6",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "questionText": "The given sentence is missing in the paragraph below. Decide where it best fits among the options (1, 2, 3, or 4)\nindicated in the paragraph.\n\nSentence: Historically, silver has been, and still is, an important element in the business of 'show' visible in private\nhouses, churches, government and diplomacy.\nParagraph: ____(1) ____. Timothy Schroder put it succinctly in suggesting that electric light and eating in the\nkitchen eroded this need. As he explained to the author, 'Silver, when illuminated by flickering candlelight, comes\nalive and almost dances before the eyes, but when lit by electric light it becomes flat and dead.' ____(2) ____.\nDomestic and economic changes may have worked against the market, but the London silver trade remained\nbuoyant, thanks to the competition of collectors seeking grand display silver at the top end, and the buyers of\n'collectables', like spoons and wine labels and 'novelties', at the bottom. ____(3) ____. Another factor that came\ninto play was the systematic collection building of certain American museums over the period. Boston, Huntington\nArt Gallery and Williamsburg, among others, were largely supplied by London dealers. ____(4) ____.",
    "options": [
      "Option 1.",
      "Option 2.",
      "Option 3.",
      "Option 4."
    ],
    "correctAnswer": 1,
    "explanation": "Official CAT answer: B."
  },
  {
    "id": "S1_VARC_7",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 7,
    "type": "MCQ",
    "subtopic": "Verbal Ability",
    "setId": "S1_VA_7",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "questionText": "The passage given below is followed by four summaries. Choose the option that best captures the essence of\nthe passage.\n\nZombie cells may contribute to age-related chronic inflammation: this finding could help scientists understand\nmore about the aging process and why the immune system becomes less effective as we get older. Zombie or\n\"senescent\" cells are damaged cells that can no longer divide and grow like normal cells. Scientists think that these\ncells can contribute to chronic health problems when they accumulate in the body. In younger people, the immune\nsystem is more effective at clearing senescent cells from the body through a process called apoptosis, but as we\nage this process becomes less efficient. As a result, there is an accumulation of senescent cells in different organs\nin the body, either through increased production or reduced clearance by the immune system. The zombie cells\ncontinue to use energy though they do not divide, and often secrete chemicals that cause inflammation, which if\npersistent for longer periods of time can damage healthy cells leading to chronic diseases",
    "options": [
      "Aging leads to less effective apoptosis, and therefore zombie cells start to accumulate in the body, causing\ninflammation, which accelerates aging and leads to chronic diseases.",
      "A younger person's immune system is healthy and is able to clear the damaged cells, but as people age, the\nzombie cells resist apoptosis, and start accumulating in the body.",
      "Senescent \"zombie\" cells are inactive or malfunctioning cells that can be found throughout the body.",
      "Dead cells accelerate chronic inflammation weakening the immune system and lead to aging."
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S1_VARC_8",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 8,
    "type": "TITA",
    "subtopic": "Odd One Out",
    "setId": "S1_VA_8",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "questionText": "The four sentences (labelled 1, 2, 3, and 4) given below, when properly sequenced, would yield a coherent\nparagraph. Decide on the proper sequencing of the order of the sentences and key in the sequence of the four\nnumbers as your answer.\n\n1. But man, woman or otherwise, there is no denying that the quality of our life and character will be significantly\nshaped by the way we handle our anger.\n2. Once the taboos have been broken, women usually experience letting their fists fly as intensely liberating.\n3. Though this might seem a stereotype, women unlike men, who are frequently applauded for unbridled\naggression are often socialized to keep a lid on their ire.\n4. Many of them are so at odds with their aggressive feelings that, as a coach, I often have to stop them from\npulling their punches and encourage them to extend their arms so their blows might actually reach their fleshy\ntarget.",
    "options": [],
    "correctAnswer": "3421",
    "explanation": "Official CAT answer: 3421."
  },
  {
    "id": "S1_VARC_9",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 9,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S1_RC_9",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nOften the well intentioned music lover or the traditionally-minded professional composer asks two basic questions\nwhen faced with the electronic music phenomena: is this type of artistic creation music at all? and, given that the\nproduct is accepted as music of a new type or order, is not such music \"inhuman\"? As Lejaren Hiller points out in his\nbook Experimental Music (co-author Leonard M. Isaacson), two questions which often arise when music is discussed\nare: the substance of musical communication and its symbolic and semantic significance, if any, and the particular\nprocesses, both mental and technical, which are involved in creating and responding to musical composition. The ever-\npresent popular concept of music as a direct, open, emotional expression and as a subjective form of communication\nfrom the composer, is, of course still that of the nineteenth century, when composers themselves spoke of music in\nthose terms. But since the third decade of our century many composers have preferred more objective definitions of\nmusic, epitomized in Stravinsky's description of it as \"a form of speculation in terms of sound and time\". An acceptance\nof this more characteristic twentieth-century view of the art of musical composition will of course immediately bring\nthe layman closer to an understanding of, and sympathetic response to, electronic music, even if the forms, sounds\nand approaches it uses will still be of a foreign nature to him.\nA communication problem however will still remain. The principal barrier that electronic music presents at large, in\nrelation to the communication process, is that composers in this medium are employing a new language of forms.\nwhere terms like 'densities', 'indefinite pitch relations', 'dynamic serialization', 'permutation', etc., are substitutes or\nremote equivalents for the traditional concepts of harmony, melody, rhythm, etc. When the new structural procedures\nof electronic music are at last fully understood by the listener the barriers between him and the work he faces will be\nremoved.\nThe medium of electronic music has of course tempted many kinds of composers to try their hand at it. But the serious-\nminded composer approaches the world of electronic music with a more sophisticated and profound concept of\ncreation. Although he knows that he can reproduce and employ melodic, rhythmic patterns and timbres of a traditional\nnature, he feels that it is in the exploration of sui generis languages and forms that the aesthetic magic of the new\nmedium lies. And, conscientiously, he plunges into this search.\nThe second objection usually levelled against electronic music is much more innocent in nature. When people speak\nsometimes very vehemently of the 'inhuman' quality of this music they seem to forget that the composer is the one\nwho fires the machines, collects the sounds, manipulates them, pushes the buttons, programs the computer, filters\nthe sounds, establishes pitches and scales, splices tape, thinks of forms, and rounds up the over-all structure of the\npiece, as well as every detail of it.",
    "questionText": "What relation does the \"communication problem\" mentioned in paragraph 2 have to the questions that the author\nrecounts at the beginning of the passage?",
    "options": [
      "The communication problem is what allows us to see electronic music as music because music must be difficult\nto understand.",
      "Unfamiliar forms and terms might get in the way of our seeing electronic music as music, but this can be\novercome.",
      "None; they are unrelated to one another and form parts of different discussions.",
      "Its unfamiliar \"language of forms\" and novel terms mean that we cannot see electronic music as music since it\ndoes not employ traditional musical concepts."
    ],
    "correctAnswer": 1,
    "explanation": "Official CAT answer: B."
  },
  {
    "id": "S1_VARC_10",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 10,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S1_RC_9",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nOften the well intentioned music lover or the traditionally-minded professional composer asks two basic questions\nwhen faced with the electronic music phenomena: is this type of artistic creation music at all? and, given that the\nproduct is accepted as music of a new type or order, is not such music \"inhuman\"? As Lejaren Hiller points out in his\nbook Experimental Music (co-author Leonard M. Isaacson), two questions which often arise when music is discussed\nare: the substance of musical communication and its symbolic and semantic significance, if any, and the particular\nprocesses, both mental and technical, which are involved in creating and responding to musical composition. The ever-\npresent popular concept of music as a direct, open, emotional expression and as a subjective form of communication\nfrom the composer, is, of course still that of the nineteenth century, when composers themselves spoke of music in\nthose terms. But since the third decade of our century many composers have preferred more objective definitions of\nmusic, epitomized in Stravinsky's description of it as \"a form of speculation in terms of sound and time\". An acceptance\nof this more characteristic twentieth-century view of the art of musical composition will of course immediately bring\nthe layman closer to an understanding of, and sympathetic response to, electronic music, even if the forms, sounds\nand approaches it uses will still be of a foreign nature to him.\nA communication problem however will still remain. The principal barrier that electronic music presents at large, in\nrelation to the communication process, is that composers in this medium are employing a new language of forms.\nwhere terms like 'densities', 'indefinite pitch relations', 'dynamic serialization', 'permutation', etc., are substitutes or\nremote equivalents for the traditional concepts of harmony, melody, rhythm, etc. When the new structural procedures\nof electronic music are at last fully understood by the listener the barriers between him and the work he faces will be\nremoved.\nThe medium of electronic music has of course tempted many kinds of composers to try their hand at it. But the serious-\nminded composer approaches the world of electronic music with a more sophisticated and profound concept of\ncreation. Although he knows that he can reproduce and employ melodic, rhythmic patterns and timbres of a traditional\nnature, he feels that it is in the exploration of sui generis languages and forms that the aesthetic magic of the new\nmedium lies. And, conscientiously, he plunges into this search.\nThe second objection usually levelled against electronic music is much more innocent in nature. When people speak\nsometimes very vehemently of the 'inhuman' quality of this music they seem to forget that the composer is the one\nwho fires the machines, collects the sounds, manipulates them, pushes the buttons, programs the computer, filters\nthe sounds, establishes pitches and scales, splices tape, thinks of forms, and rounds up the over-all structure of the\npiece, as well as every detail of it.",
    "questionText": "From the context in which it is placed, the phrase \"sui generis\" in paragraph 3 suggests which one of the following?",
    "options": [
      "Particular.",
      "Indescribable.",
      "Generic.",
      "Unaesthetic."
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S1_VARC_11",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 11,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S1_RC_9",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nOften the well intentioned music lover or the traditionally-minded professional composer asks two basic questions\nwhen faced with the electronic music phenomena: is this type of artistic creation music at all? and, given that the\nproduct is accepted as music of a new type or order, is not such music \"inhuman\"? As Lejaren Hiller points out in his\nbook Experimental Music (co-author Leonard M. Isaacson), two questions which often arise when music is discussed\nare: the substance of musical communication and its symbolic and semantic significance, if any, and the particular\nprocesses, both mental and technical, which are involved in creating and responding to musical composition. The ever-\npresent popular concept of music as a direct, open, emotional expression and as a subjective form of communication\nfrom the composer, is, of course still that of the nineteenth century, when composers themselves spoke of music in\nthose terms. But since the third decade of our century many composers have preferred more objective definitions of\nmusic, epitomized in Stravinsky's description of it as \"a form of speculation in terms of sound and time\". An acceptance\nof this more characteristic twentieth-century view of the art of musical composition will of course immediately bring\nthe layman closer to an understanding of, and sympathetic response to, electronic music, even if the forms, sounds\nand approaches it uses will still be of a foreign nature to him.\nA communication problem however will still remain. The principal barrier that electronic music presents at large, in\nrelation to the communication process, is that composers in this medium are employing a new language of forms.\nwhere terms like 'densities', 'indefinite pitch relations', 'dynamic serialization', 'permutation', etc., are substitutes or\nremote equivalents for the traditional concepts of harmony, melody, rhythm, etc. When the new structural procedures\nof electronic music are at last fully understood by the listener the barriers between him and the work he faces will be\nremoved.\nThe medium of electronic music has of course tempted many kinds of composers to try their hand at it. But the serious-\nminded composer approaches the world of electronic music with a more sophisticated and profound concept of\ncreation. Although he knows that he can reproduce and employ melodic, rhythmic patterns and timbres of a traditional\nnature, he feels that it is in the exploration of sui generis languages and forms that the aesthetic magic of the new\nmedium lies. And, conscientiously, he plunges into this search.\nThe second objection usually levelled against electronic music is much more innocent in nature. When people speak\nsometimes very vehemently of the 'inhuman' quality of this music they seem to forget that the composer is the one\nwho fires the machines, collects the sounds, manipulates them, pushes the buttons, programs the computer, filters\nthe sounds, establishes pitches and scales, splices tape, thinks of forms, and rounds up the over-all structure of the\npiece, as well as every detail of it.",
    "questionText": "The goal of the author over the course of this passage is to:",
    "options": [
      "Defend electronic music from certain common charges.",
      "Differentiate between electronic music and other forms of music.",
      "Defend the \"serious-minded composer\" from Lejaren Hill and Stravinsky.",
      "Differentiate the modern composer from the nineteenth century composer."
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S1_VARC_12",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 12,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S1_RC_9",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nOften the well intentioned music lover or the traditionally-minded professional composer asks two basic questions\nwhen faced with the electronic music phenomena: is this type of artistic creation music at all? and, given that the\nproduct is accepted as music of a new type or order, is not such music \"inhuman\"? As Lejaren Hiller points out in his\nbook Experimental Music (co-author Leonard M. Isaacson), two questions which often arise when music is discussed\nare: the substance of musical communication and its symbolic and semantic significance, if any, and the particular\nprocesses, both mental and technical, which are involved in creating and responding to musical composition. The ever-\npresent popular concept of music as a direct, open, emotional expression and as a subjective form of communication\nfrom the composer, is, of course still that of the nineteenth century, when composers themselves spoke of music in\nthose terms. But since the third decade of our century many composers have preferred more objective definitions of\nmusic, epitomized in Stravinsky's description of it as \"a form of speculation in terms of sound and time\". An acceptance\nof this more characteristic twentieth-century view of the art of musical composition will of course immediately bring\nthe layman closer to an understanding of, and sympathetic response to, electronic music, even if the forms, sounds\nand approaches it uses will still be of a foreign nature to him.\nA communication problem however will still remain. The principal barrier that electronic music presents at large, in\nrelation to the communication process, is that composers in this medium are employing a new language of forms.\nwhere terms like 'densities', 'indefinite pitch relations', 'dynamic serialization', 'permutation', etc., are substitutes or\nremote equivalents for the traditional concepts of harmony, melody, rhythm, etc. When the new structural procedures\nof electronic music are at last fully understood by the listener the barriers between him and the work he faces will be\nremoved.\nThe medium of electronic music has of course tempted many kinds of composers to try their hand at it. But the serious-\nminded composer approaches the world of electronic music with a more sophisticated and profound concept of\ncreation. Although he knows that he can reproduce and employ melodic, rhythmic patterns and timbres of a traditional\nnature, he feels that it is in the exploration of sui generis languages and forms that the aesthetic magic of the new\nmedium lies. And, conscientiously, he plunges into this search.\nThe second objection usually levelled against electronic music is much more innocent in nature. When people speak\nsometimes very vehemently of the 'inhuman' quality of this music they seem to forget that the composer is the one\nwho fires the machines, collects the sounds, manipulates them, pushes the buttons, programs the computer, filters\nthe sounds, establishes pitches and scales, splices tape, thinks of forms, and rounds up the over-all structure of the\npiece, as well as every detail of it.",
    "questionText": "The mention of Stravinsky's description of music in the first paragraph does all the following EXCEPT:",
    "options": [
      "Help us determine which sounds are musical and which are not.",
      "Complicate our notion of what is communicated through music.",
      "Allow us to classify electronic music as music.",
      "Respond to and expand upon earlier understandings of music."
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S1_VARC_13",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 13,
    "type": "MCQ",
    "subtopic": "Verbal Ability",
    "setId": "S1_VA_13",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "questionText": "The given sentence is missing in the paragraph below. Decide where it best fits among the options (1, 2, 3, or 4)\nindicated in the paragraph.\n\nSentence: \"Everything is old-world, traditional techniques from Mexico,\" Ava emphasizes.\nParagraph: The sisters embrace the ways their great-grandfather built and repaired instruments. ____(1) ____.\nWhen crafting a Mexican guitarrón used in mariachi music, they use tacote wood for the top of the instrument.\nOnce the wood is cut, they carve the neck and heel from a single block using tools like hand saws, chisels and\nsandpaper rather than modern power tools and believe that this traditional method improves the tone of the\ninstrument. ____(2) ____. Their store has a three-year waitlist for instruments that take months to create. ____(3)\n____. The family's artisanship has attracted stars like Los Lobos, who own custom guitars made by all three\ngenerations of the Delgado family. ____(4) ____. For the sisters, involvement in the family business started at an\nearly age. They each built their first instruments at age 9.",
    "options": [
      "Option 3.",
      "Option 4.",
      "Option 2.",
      "Option 1."
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S1_VARC_14",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 14,
    "type": "TITA",
    "subtopic": "Verbal Ability",
    "setId": "S1_VA_14",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "questionText": "The four sentences (labelled 1, 2, 3, and 4) given below, when properly sequenced, would yield a coherent\nparagraph. Decide on the proper sequencing of the order of the sentences and key in the sequence of the four\nnumbers as your answer.\n\n1. It can in fact be integrated into any function education, medical treatment, production, punishment; it can\nincrease the effect of this function, by being linked closely with it; it can constitute a mixed mechanism in which\nrelations of power and of knowledge may be precisely adjusted, in the smallest detail, to the processes that\nare to be supervised; it can establish a direct proportion between 'surplus power' and 'surplus production'.\n2. It's a case of 'it's easy once you've thought of it' in the political sphere.\n3. The panoptic mechanism is not simply a hinge, a point of exchange between a mechanism of power and a\nfunction; it is a way of making power relations function in a function, and of making a function function through\nthese power relations.\n4. In short, it arranges things in such a way that the exercise of power is not added on from the outside, like a\nrigid, heavy constraint, to the functions it invests, but is so subtly present in them as to increase their efficiency\nby itself increasing its own points of contact.",
    "options": [],
    "correctAnswer": "2143",
    "explanation": "Official CAT answer: 2143."
  },
  {
    "id": "S1_VARC_15",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 15,
    "type": "TITA",
    "subtopic": "Parajumble",
    "setId": "S1_VA_15",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "questionText": "Five jumbled sentences (labelled 1, 2, 3, 4, and 5), related to a topic, are given below. Four of them can be put\ntogether to form a coherent paragraph. Identify the odd sentence out and key in the number of that sentence\nas your answer.\n\n1. Developments both technological and sociocultural have afforded us far greater freedom over death than we\nhad in the past, and while we are still adapting ourselves to that freedom, we now appreciate the moral\nimportance of this freedom.\n2. But I believe that a type of freedom we can call freedom over death that is, a freedom in which we shape the\ntiming and circumstances of how we die should be central to this conversation.\n3. Legalising assisted dying is but a further step in realising this freedom over death.\n4. Many people endorse, through their opinions or their choices, our freedom over death encompassing a right\nto medical assistance in hastening our deaths.\n5. Freedom is a notoriously complex and contested philosophical notion, and I won't pretend to settle any of the\nbig controversies it raises.",
    "options": [],
    "correctAnswer": "4",
    "explanation": "Official CAT answer: 4."
  },
  {
    "id": "S1_VARC_16",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 16,
    "type": "MCQ",
    "subtopic": "Verbal Ability",
    "setId": "S1_VA_16",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "questionText": "The passage given below is followed by four summaries. Choose the option that best captures the essence of\nthe passage.\n\nIn the dynamic realm of creativity, artists often find themselves at the crossroads between drawing inspiration\nfrom diverse cultures and inadvertently crossing into the territory of cultural appropriation. Inspiration is the\nlifeblood of creativity, driving artists to create works that resonate across borders. The globalized nature of the\nmodern world invites artists to draw from a vast array of cultural influences. When approached respectfully,\ninspiration becomes a bridge, fostering understanding and appreciation of cultural diversity. However, the line\nbetween inspiration and cultural appropriation can be thin and easily blurred. Cultural appropriation occurs when\nelements from a particular culture are borrowed without proper understanding, respect, or acknowledgment. This\nleads to the commodification of sacred symbols, the reinforcement of stereotypes, and the erasure of the cultural\ncontext from which these elements originated. It's essential to recognize that the impact of cultural appropriation\nextends beyond the realm of artistic expression, influencing societal perceptions and perpetuating power\nimbalances.",
    "options": [
      "Artists in a globalised world must navigate between drawing inspiration from diverse cultures respectfully and\ncultural appropriation that involves borrowing without proper acknowledgement which has broader societal\nimpacts including perpetuating power imbalances.",
      "In today's world of creativity, artists have to decide between respectfully acknowledging works that are\ninspired by diverse cultures and appropriating elements without respect for their contexts.",
      "In a globalised world, artists must draw from diverse cultural influences to create works that appeal to all, and\nthis results in instances of both inspiration and cultural appropriation.",
      "Artists must navigate the thin line between inspiration and cultural appropriation, where respectful inspiration\nfosters cultural understanding whereas appropriation involves borrowing without acknowledgement leading\nto commodification and reinforcement of stereotypes."
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S1_VARC_17",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 17,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S1_RC_17",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nStudies showing that income inequality plays a positive role in economic growth are largely based on three arguments.\nThe first argument focuses on investment indivisibilities wherein large sunk costs are required when implementing new\nfundamental innovations. Without stock markets and financial institutions to mobilize large sums of money, a high\nconcentration of wealth is needed for individuals to undertake new industrial activities accompanied by high sunk\ncosts. One study shows the relation between economic growth and income inequality for 45 countries during 1966-\n1995. It was found that the increase in income inequality has a significant positive relationship with economic growth\nin the short and medium term. Using system GMM, another study estimated the relation between income inequality\nand economic growth for 106 countries during 1965–2005 period. The results show that income inequality has a\npositive impact on economic growth in the short run, but the two are negatively correlated in the long run. The second\nargument is related to moral hazard and incentives. Because economic performance is determined by the\nunobservable level of effort that agents make, paying compensations without taking into account the economic\nperformance achieved by individual agents will fail to elicit optimum effort from the agents. Thus, certain income\ninequalities contribute to growth by enhancing worker motivation and by giving motivation to innovators and\nentrepreneurs. Finally, another study point[s] out that the concentration of wealth or stock ownership in relation to\ncorporate governance contributes to growth. If stock ownership is distributed and owned by a large number of\nshareholders, it is not easy to make quick decisions due to the conflicting interests among shareholders, and this may\nalso cause a free-rider problem in terms of monitoring and supervising managers and workers.\nVarious studies have examined the relationships between income inequality and economic growth, and most of these\nassert that a negative correlation exists between the two. Analyzing 159 countries for 1980–2012, they conclude that\nthere exists a negative relation between income inequality and economic growth; when the income share of the richest\n20% of population increases by 1%, the GDP decreases by 0.08%, whereas when the income share of the poorest 20%\nof population increases by 1%, the GDP increases by 0.38%. Some studies find that inequality has a negative impact on\ngrowth due to poor human capital accumulation and low fertility rates. while others point out that inequality creates\npolitical instability, resulting in lower investment. Some economists argue that widening income inequality has a\nnegative impact on economic growth because it negatively affects social consensus or social capital formation. One\nimportant research topic is the correlation between democratization and income redistribution. Some scholars explain\nthat social pressure for income redistribution rises as income inequality increases in a democratic society. In other\nwords, when democratization extends suffrage to a wider class of people, the increased political power of low and\nmiddle-income voters results in broader support for income redistribution and social welfare expansion. However, if\nthe rich have more political influence than the poor, the democratic system actually worsens income inequality rather\nthan improving it.",
    "questionText": "The passage refers to \"democratization\". Choose the one option below that comes closest to the opposite of this\nprocess.",
    "options": [
      "After the emergency decree, the regime shifted toward authoritarianism as suffrage narrowed and opposition\nparties were deregistered.",
      "Corporate donations were capped and parties received public funding which was portrayed as establishing an\noligarchy.",
      "Municipalities adopted participatory budgeting and recall elections which a press release called\ntotalitarianism.",
      "The coalition imposed term limits and strengthened judicial review in order to further entrench autocratic rule."
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S1_VARC_18",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 18,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S1_RC_17",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nStudies showing that income inequality plays a positive role in economic growth are largely based on three arguments.\nThe first argument focuses on investment indivisibilities wherein large sunk costs are required when implementing new\nfundamental innovations. Without stock markets and financial institutions to mobilize large sums of money, a high\nconcentration of wealth is needed for individuals to undertake new industrial activities accompanied by high sunk\ncosts. One study shows the relation between economic growth and income inequality for 45 countries during 1966-\n1995. It was found that the increase in income inequality has a significant positive relationship with economic growth\nin the short and medium term. Using system GMM, another study estimated the relation between income inequality\nand economic growth for 106 countries during 1965–2005 period. The results show that income inequality has a\npositive impact on economic growth in the short run, but the two are negatively correlated in the long run. The second\nargument is related to moral hazard and incentives. Because economic performance is determined by the\nunobservable level of effort that agents make, paying compensations without taking into account the economic\nperformance achieved by individual agents will fail to elicit optimum effort from the agents. Thus, certain income\ninequalities contribute to growth by enhancing worker motivation and by giving motivation to innovators and\nentrepreneurs. Finally, another study point[s] out that the concentration of wealth or stock ownership in relation to\ncorporate governance contributes to growth. If stock ownership is distributed and owned by a large number of\nshareholders, it is not easy to make quick decisions due to the conflicting interests among shareholders, and this may\nalso cause a free-rider problem in terms of monitoring and supervising managers and workers.\nVarious studies have examined the relationships between income inequality and economic growth, and most of these\nassert that a negative correlation exists between the two. Analyzing 159 countries for 1980–2012, they conclude that\nthere exists a negative relation between income inequality and economic growth; when the income share of the richest\n20% of population increases by 1%, the GDP decreases by 0.08%, whereas when the income share of the poorest 20%\nof population increases by 1%, the GDP increases by 0.38%. Some studies find that inequality has a negative impact on\ngrowth due to poor human capital accumulation and low fertility rates. while others point out that inequality creates\npolitical instability, resulting in lower investment. Some economists argue that widening income inequality has a\nnegative impact on economic growth because it negatively affects social consensus or social capital formation. One\nimportant research topic is the correlation between democratization and income redistribution. Some scholars explain\nthat social pressure for income redistribution rises as income inequality increases in a democratic society. In other\nwords, when democratization extends suffrage to a wider class of people, the increased political power of low and\nmiddle-income voters results in broader support for income redistribution and social welfare expansion. However, if\nthe rich have more political influence than the poor, the democratic system actually worsens income inequality rather\nthan improving it.",
    "questionText": "According to the incentive or moral hazard argument, which one of the designs below is most consistent with the\nclaim that some inequality can raise growth?",
    "options": [
      "Rents protected by market power that enlarge top incomes without linking pay to results.",
      "Wages are determined by tenure rather than output to ensure equity.",
      "Pay rewards on verifiable performance for highly productive workers.",
      "A regime that concentrates stock ownership in relation to corporate governance."
    ],
    "correctAnswer": 2,
    "explanation": "Official CAT answer: C."
  },
  {
    "id": "S1_VARC_19",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 19,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S1_RC_17",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nStudies showing that income inequality plays a positive role in economic growth are largely based on three arguments.\nThe first argument focuses on investment indivisibilities wherein large sunk costs are required when implementing new\nfundamental innovations. Without stock markets and financial institutions to mobilize large sums of money, a high\nconcentration of wealth is needed for individuals to undertake new industrial activities accompanied by high sunk\ncosts. One study shows the relation between economic growth and income inequality for 45 countries during 1966-\n1995. It was found that the increase in income inequality has a significant positive relationship with economic growth\nin the short and medium term. Using system GMM, another study estimated the relation between income inequality\nand economic growth for 106 countries during 1965–2005 period. The results show that income inequality has a\npositive impact on economic growth in the short run, but the two are negatively correlated in the long run. The second\nargument is related to moral hazard and incentives. Because economic performance is determined by the\nunobservable level of effort that agents make, paying compensations without taking into account the economic\nperformance achieved by individual agents will fail to elicit optimum effort from the agents. Thus, certain income\ninequalities contribute to growth by enhancing worker motivation and by giving motivation to innovators and\nentrepreneurs. Finally, another study point[s] out that the concentration of wealth or stock ownership in relation to\ncorporate governance contributes to growth. If stock ownership is distributed and owned by a large number of\nshareholders, it is not easy to make quick decisions due to the conflicting interests among shareholders, and this may\nalso cause a free-rider problem in terms of monitoring and supervising managers and workers.\nVarious studies have examined the relationships between income inequality and economic growth, and most of these\nassert that a negative correlation exists between the two. Analyzing 159 countries for 1980–2012, they conclude that\nthere exists a negative relation between income inequality and economic growth; when the income share of the richest\n20% of population increases by 1%, the GDP decreases by 0.08%, whereas when the income share of the poorest 20%\nof population increases by 1%, the GDP increases by 0.38%. Some studies find that inequality has a negative impact on\ngrowth due to poor human capital accumulation and low fertility rates. while others point out that inequality creates\npolitical instability, resulting in lower investment. Some economists argue that widening income inequality has a\nnegative impact on economic growth because it negatively affects social consensus or social capital formation. One\nimportant research topic is the correlation between democratization and income redistribution. Some scholars explain\nthat social pressure for income redistribution rises as income inequality increases in a democratic society. In other\nwords, when democratization extends suffrage to a wider class of people, the increased political power of low and\nmiddle-income voters results in broader support for income redistribution and social welfare expansion. However, if\nthe rich have more political influence than the poor, the democratic system actually worsens income inequality rather\nthan improving it.",
    "questionText": "The primary function of the three-part case for a positive income inequality economic growth link in the first half\nof the passage is to show that:",
    "options": [
      "Inequality can aid short-term growth in settings with high sunk costs, incentive alignment, and concentrated\nownership.",
      "Inequality boosts growth in every period and type of economy, regardless of finance or governance conditions.",
      "Dispersed ownership speeds corporate decision-making and removes free rider problems.",
      "Mature stock markets make wealth concentration unnecessary, yet they might still be harmful to investment."
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S1_VARC_20",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 20,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S1_RC_17",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nStudies showing that income inequality plays a positive role in economic growth are largely based on three arguments.\nThe first argument focuses on investment indivisibilities wherein large sunk costs are required when implementing new\nfundamental innovations. Without stock markets and financial institutions to mobilize large sums of money, a high\nconcentration of wealth is needed for individuals to undertake new industrial activities accompanied by high sunk\ncosts. One study shows the relation between economic growth and income inequality for 45 countries during 1966-\n1995. It was found that the increase in income inequality has a significant positive relationship with economic growth\nin the short and medium term. Using system GMM, another study estimated the relation between income inequality\nand economic growth for 106 countries during 1965–2005 period. The results show that income inequality has a\npositive impact on economic growth in the short run, but the two are negatively correlated in the long run. The second\nargument is related to moral hazard and incentives. Because economic performance is determined by the\nunobservable level of effort that agents make, paying compensations without taking into account the economic\nperformance achieved by individual agents will fail to elicit optimum effort from the agents. Thus, certain income\ninequalities contribute to growth by enhancing worker motivation and by giving motivation to innovators and\nentrepreneurs. Finally, another study point[s] out that the concentration of wealth or stock ownership in relation to\ncorporate governance contributes to growth. If stock ownership is distributed and owned by a large number of\nshareholders, it is not easy to make quick decisions due to the conflicting interests among shareholders, and this may\nalso cause a free-rider problem in terms of monitoring and supervising managers and workers.\nVarious studies have examined the relationships between income inequality and economic growth, and most of these\nassert that a negative correlation exists between the two. Analyzing 159 countries for 1980–2012, they conclude that\nthere exists a negative relation between income inequality and economic growth; when the income share of the richest\n20% of population increases by 1%, the GDP decreases by 0.08%, whereas when the income share of the poorest 20%\nof population increases by 1%, the GDP increases by 0.38%. Some studies find that inequality has a negative impact on\ngrowth due to poor human capital accumulation and low fertility rates. while others point out that inequality creates\npolitical instability, resulting in lower investment. Some economists argue that widening income inequality has a\nnegative impact on economic growth because it negatively affects social consensus or social capital formation. One\nimportant research topic is the correlation between democratization and income redistribution. Some scholars explain\nthat social pressure for income redistribution rises as income inequality increases in a democratic society. In other\nwords, when democratization extends suffrage to a wider class of people, the increased political power of low and\nmiddle-income voters results in broader support for income redistribution and social welfare expansion. However, if\nthe rich have more political influence than the poor, the democratic system actually worsens income inequality rather\nthan improving it.",
    "questionText": "Which one of the options below best summarises the passage?",
    "options": [
      "The passage confines its discussion to financing gaps and corporate control while undercutting cross country\nevidence and overlooking the significance of concerns regarding human capital accumulation, fertility rates,\nand income redistribution under democratisation.",
      "The passage argues that income inequality accelerates economic growth while also emphasising the\nsignificance of concerns regarding human capital accumulation, fertility rates, and political instability.",
      "The passage outlines investment, incentive, and governance channels through which income inequality may\nsupport economic growth and reports short-term gains while noting long-term drawbacks.",
      "The passage claims that evaluating the effect of income inequality on economic growth without considering\nboth short- and long-term consequences is misguided."
    ],
    "correctAnswer": 2,
    "explanation": "Official CAT answer: C."
  },
  {
    "id": "S1_VARC_21",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 21,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S1_RC_21",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nHow can we know what someone else is thinking or feeling, let alone prove it in court? In his 1863 book, A General\nView of the Criminal Law of England, James Fitzjames Stephen, among the most celebrated legal thinkers of his\ngeneration, was of the opinion that the assessment of a person's mental state was an inference made with \"little\nconsciousness.\" In a criminal case, jurors, doctors, and lawyers could watch defendants scrutinizing clothing,\nmannerisms, tone of voice but the best they could hope for were clues. Rounding these clues up to a judgment about\na defendant's guilt, or a defendant's life, was an act of empathy and imagination. The closer the resemblance between\ndefendants and their judges, the easier it was to overlook the gap that inference filled. Conversely, when a defendant\nstruck officials as unlike themselves, whether by dint of disease, gender, confession, or race, the precariousness of\njudgments about mental state was exposed.\nIn the nineteenth century, physicians who specialized in the study of madness and the care of the insane held\nthemselves out as experts in the new field of mental science. Often called alienists or mad doctors, they were the\npredecessors of modern psychiatrists, neurologists, and psychologists. The opinions of family and neighbors had once\nbeen sufficient to sift the sane from the insane, but a growing belief that insanity was a subtle condition that required\nexpert, medical diagnosis pushed physicians into the witness box. Lawyers for both prosecution and defense began to\nrecruit alienists to assess defendants' sanity and to testify to it in court.\nIrresponsibility and insanity were not identical, however. Criminal responsibility was a legal concept and not,\nfundamentally, a medical one. Stephen explained: \"The question 'What are the mental elements of responsibility?' is,\nand must be, a legal question. It cannot be anything else, for the meaning of responsibility is liability to punishment.\"\nNonetheless, medical and legal accounts of what it meant to be mentally sound became entangled and mutually\nreferential throughout the nineteenth century. Lawyers relied on medical knowledge to inform their opinions and\narguments about the sanity of their clients. Doctors commented on the legal responsibility of their patients. Ultimately,\nthe fields of criminal law and mental science were both invested in constructing an image of the broken and damaged\npsyche that could be contrasted with the whole and healthy one. This shared interest, and the shared space of the\ncriminal courtroom, made it nearly impossible to consider responsibility without medicine, or insanity without law.\nPhysicians and lawyers shared more than just concern for the mind. Class, race, and gender bound these middle-class,\nwhite, professional men together, as did family ties, patriotism, Protestantism, business ventures, the alumni networks\nof elite schools and universities, and structures of political patronage. But for all their affinities, men of medicine and\nlaw were divided by contests over the borders of criminal responsibility, as much within each profession as between\nthem. Alienists steadily pushed the boundaries of their field, developing increasingly complex and capacious definitions\nof insanity. Eccentricity and aggression came to be classified as symptoms of mental disease, at least by some.",
    "questionText": "Study the following sets of concepts and identify the set that is conceptually closest to the concerns and arguments\nof the passage.",
    "options": [
      "Judgement, Belief, Accounts, Patronage.",
      "Empathy, Prosecution, Knowledge, Business.",
      "Assessment, Empathy, Prosecution, Patriotism.",
      "Judgement, Insanity, Punishment, Responsibility."
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S1_VARC_22",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 22,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S1_RC_21",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nHow can we know what someone else is thinking or feeling, let alone prove it in court? In his 1863 book, A General\nView of the Criminal Law of England, James Fitzjames Stephen, among the most celebrated legal thinkers of his\ngeneration, was of the opinion that the assessment of a person's mental state was an inference made with \"little\nconsciousness.\" In a criminal case, jurors, doctors, and lawyers could watch defendants scrutinizing clothing,\nmannerisms, tone of voice but the best they could hope for were clues. Rounding these clues up to a judgment about\na defendant's guilt, or a defendant's life, was an act of empathy and imagination. The closer the resemblance between\ndefendants and their judges, the easier it was to overlook the gap that inference filled. Conversely, when a defendant\nstruck officials as unlike themselves, whether by dint of disease, gender, confession, or race, the precariousness of\njudgments about mental state was exposed.\nIn the nineteenth century, physicians who specialized in the study of madness and the care of the insane held\nthemselves out as experts in the new field of mental science. Often called alienists or mad doctors, they were the\npredecessors of modern psychiatrists, neurologists, and psychologists. The opinions of family and neighbors had once\nbeen sufficient to sift the sane from the insane, but a growing belief that insanity was a subtle condition that required\nexpert, medical diagnosis pushed physicians into the witness box. Lawyers for both prosecution and defense began to\nrecruit alienists to assess defendants' sanity and to testify to it in court.\nIrresponsibility and insanity were not identical, however. Criminal responsibility was a legal concept and not,\nfundamentally, a medical one. Stephen explained: \"The question 'What are the mental elements of responsibility?' is,\nand must be, a legal question. It cannot be anything else, for the meaning of responsibility is liability to punishment.\"\nNonetheless, medical and legal accounts of what it meant to be mentally sound became entangled and mutually\nreferential throughout the nineteenth century. Lawyers relied on medical knowledge to inform their opinions and\narguments about the sanity of their clients. Doctors commented on the legal responsibility of their patients. Ultimately,\nthe fields of criminal law and mental science were both invested in constructing an image of the broken and damaged\npsyche that could be contrasted with the whole and healthy one. This shared interest, and the shared space of the\ncriminal courtroom, made it nearly impossible to consider responsibility without medicine, or insanity without law.\nPhysicians and lawyers shared more than just concern for the mind. Class, race, and gender bound these middle-class,\nwhite, professional men together, as did family ties, patriotism, Protestantism, business ventures, the alumni networks\nof elite schools and universities, and structures of political patronage. But for all their affinities, men of medicine and\nlaw were divided by contests over the borders of criminal responsibility, as much within each profession as between\nthem. Alienists steadily pushed the boundaries of their field, developing increasingly complex and capacious definitions\nof insanity. Eccentricity and aggression came to be classified as symptoms of mental disease, at least by some.",
    "questionText": "\"Conversely, when a defendant struck officials as unlike themselves, whether by dint of disease, gender, confession,\nor race, the precariousness of judgments about mental state was exposed.\" Which one of the following best\ndescribes the use of the word \"confession\" in this sentence?",
    "options": [
      "The defendants struck out at the officials and then confessed to the act.",
      "Referring to the practice of 'confession' in some faiths, here it is a metaphor for the religion of the defendant.",
      "Referring to the defendant's confession of his or her crime as false, because 'dint' is an archaic form of 'didn't'\nor 'did not'.",
      "Referring to the gender, race or disease claimed as a defence by the defendant, here it is a synonym for\n'professing' a gender, race, or disease."
    ],
    "correctAnswer": 1,
    "explanation": "Official CAT answer: B."
  },
  {
    "id": "S1_VARC_23",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 23,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S1_RC_21",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nHow can we know what someone else is thinking or feeling, let alone prove it in court? In his 1863 book, A General\nView of the Criminal Law of England, James Fitzjames Stephen, among the most celebrated legal thinkers of his\ngeneration, was of the opinion that the assessment of a person's mental state was an inference made with \"little\nconsciousness.\" In a criminal case, jurors, doctors, and lawyers could watch defendants scrutinizing clothing,\nmannerisms, tone of voice but the best they could hope for were clues. Rounding these clues up to a judgment about\na defendant's guilt, or a defendant's life, was an act of empathy and imagination. The closer the resemblance between\ndefendants and their judges, the easier it was to overlook the gap that inference filled. Conversely, when a defendant\nstruck officials as unlike themselves, whether by dint of disease, gender, confession, or race, the precariousness of\njudgments about mental state was exposed.\nIn the nineteenth century, physicians who specialized in the study of madness and the care of the insane held\nthemselves out as experts in the new field of mental science. Often called alienists or mad doctors, they were the\npredecessors of modern psychiatrists, neurologists, and psychologists. The opinions of family and neighbors had once\nbeen sufficient to sift the sane from the insane, but a growing belief that insanity was a subtle condition that required\nexpert, medical diagnosis pushed physicians into the witness box. Lawyers for both prosecution and defense began to\nrecruit alienists to assess defendants' sanity and to testify to it in court.\nIrresponsibility and insanity were not identical, however. Criminal responsibility was a legal concept and not,\nfundamentally, a medical one. Stephen explained: \"The question 'What are the mental elements of responsibility?' is,\nand must be, a legal question. It cannot be anything else, for the meaning of responsibility is liability to punishment.\"\nNonetheless, medical and legal accounts of what it meant to be mentally sound became entangled and mutually\nreferential throughout the nineteenth century. Lawyers relied on medical knowledge to inform their opinions and\narguments about the sanity of their clients. Doctors commented on the legal responsibility of their patients. Ultimately,\nthe fields of criminal law and mental science were both invested in constructing an image of the broken and damaged\npsyche that could be contrasted with the whole and healthy one. This shared interest, and the shared space of the\ncriminal courtroom, made it nearly impossible to consider responsibility without medicine, or insanity without law.\nPhysicians and lawyers shared more than just concern for the mind. Class, race, and gender bound these middle-class,\nwhite, professional men together, as did family ties, patriotism, Protestantism, business ventures, the alumni networks\nof elite schools and universities, and structures of political patronage. But for all their affinities, men of medicine and\nlaw were divided by contests over the borders of criminal responsibility, as much within each profession as between\nthem. Alienists steadily pushed the boundaries of their field, developing increasingly complex and capacious definitions\nof insanity. Eccentricity and aggression came to be classified as symptoms of mental disease, at least by some.",
    "questionText": "The last paragraph of the passage refers to \"middle-class, white, professional men\". Which one of the following\nqualities best describes the connection among them?",
    "options": [
      "Eccentricity and aggression.",
      "Empathy and imagination.",
      "The borders of criminal responsibility.",
      "The opinions of family and neighbours."
    ],
    "correctAnswer": 2,
    "explanation": "Official CAT answer: C."
  },
  {
    "id": "S1_VARC_24",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 24,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S1_RC_21",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nHow can we know what someone else is thinking or feeling, let alone prove it in court? In his 1863 book, A General\nView of the Criminal Law of England, James Fitzjames Stephen, among the most celebrated legal thinkers of his\ngeneration, was of the opinion that the assessment of a person's mental state was an inference made with \"little\nconsciousness.\" In a criminal case, jurors, doctors, and lawyers could watch defendants scrutinizing clothing,\nmannerisms, tone of voice but the best they could hope for were clues. Rounding these clues up to a judgment about\na defendant's guilt, or a defendant's life, was an act of empathy and imagination. The closer the resemblance between\ndefendants and their judges, the easier it was to overlook the gap that inference filled. Conversely, when a defendant\nstruck officials as unlike themselves, whether by dint of disease, gender, confession, or race, the precariousness of\njudgments about mental state was exposed.\nIn the nineteenth century, physicians who specialized in the study of madness and the care of the insane held\nthemselves out as experts in the new field of mental science. Often called alienists or mad doctors, they were the\npredecessors of modern psychiatrists, neurologists, and psychologists. The opinions of family and neighbors had once\nbeen sufficient to sift the sane from the insane, but a growing belief that insanity was a subtle condition that required\nexpert, medical diagnosis pushed physicians into the witness box. Lawyers for both prosecution and defense began to\nrecruit alienists to assess defendants' sanity and to testify to it in court.\nIrresponsibility and insanity were not identical, however. Criminal responsibility was a legal concept and not,\nfundamentally, a medical one. Stephen explained: \"The question 'What are the mental elements of responsibility?' is,\nand must be, a legal question. It cannot be anything else, for the meaning of responsibility is liability to punishment.\"\nNonetheless, medical and legal accounts of what it meant to be mentally sound became entangled and mutually\nreferential throughout the nineteenth century. Lawyers relied on medical knowledge to inform their opinions and\narguments about the sanity of their clients. Doctors commented on the legal responsibility of their patients. Ultimately,\nthe fields of criminal law and mental science were both invested in constructing an image of the broken and damaged\npsyche that could be contrasted with the whole and healthy one. This shared interest, and the shared space of the\ncriminal courtroom, made it nearly impossible to consider responsibility without medicine, or insanity without law.\nPhysicians and lawyers shared more than just concern for the mind. Class, race, and gender bound these middle-class,\nwhite, professional men together, as did family ties, patriotism, Protestantism, business ventures, the alumni networks\nof elite schools and universities, and structures of political patronage. But for all their affinities, men of medicine and\nlaw were divided by contests over the borders of criminal responsibility, as much within each profession as between\nthem. Alienists steadily pushed the boundaries of their field, developing increasingly complex and capacious definitions\nof insanity. Eccentricity and aggression came to be classified as symptoms of mental disease, at least by some.",
    "questionText": "According to the passage, who or what was an \"alienist\"?",
    "options": [
      "Physicians who specialised in the study of madness and the care of the insane in the nineteenth century.",
      "Professionals who pushed the boundaries of their fields till they became unrecognisable in the nineteenth\ncentury.",
      "Physicians and lawyers who were responsible for the condition of immigrants or 'aliens' in the nineteenth\ncentury.",
      "Physicians and lawyers who were responsible for examining accounts of extraterrestrials or 'aliens' in the\nnineteenth century."
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S1_DILR_1",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 1,
    "type": "TITA",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_1",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 1",
    "passage": "Six web surfers M, N, O, P, X, and Y each had 30 stars which they distributed among four bloggers A, B, C, and D. The\nnumber of stars received by A and B from the six web surfers is shown in the figure below.\n\nThe following additional facts are known regarding the number of stars received by the bloggers from the surfers.",
    "diagramUrl": "/src/assets/questions/slot1_lrdi_stars.png",
    "questionText": "The numbers of stars received by the bloggers from the surfers were all multiples of 5 (including 0).\n2. The total numbers of stars received by the bloggers were the same.\n3. Each blogger received a different number of stars from M.\n4. Two surfers gave all their stars to a single blogger.\n5. D received more stars than C from Y.\n1. What was the total number of stars received by D?",
    "options": [],
    "correctAnswer": "45",
    "explanation": "Official CAT answer: 45."
  },
  {
    "id": "S1_DILR_2",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 2,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_1",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 1",
    "passage": "Six web surfers M, N, O, P, X, and Y each had 30 stars which they distributed among four bloggers A, B, C, and D. The\nnumber of stars received by A and B from the six web surfers is shown in the figure below.\n\nThe following additional facts are known regarding the number of stars received by the bloggers from the surfers.",
    "diagramUrl": "/src/assets/questions/slot1_lrdi_stars.png",
    "questionText": "What was the number of stars received by D from Y?",
    "options": [
      "5",
      "Cannot be determined",
      "0",
      "10"
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S1_DILR_3",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 3,
    "type": "TITA",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_1",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 1",
    "passage": "Six web surfers M, N, O, P, X, and Y each had 30 stars which they distributed among four bloggers A, B, C, and D. The\nnumber of stars received by A and B from the six web surfers is shown in the figure below.\n\nThe following additional facts are known regarding the number of stars received by the bloggers from the surfers.",
    "diagramUrl": "/src/assets/questions/slot1_lrdi_stars.png",
    "questionText": "How many surfers distributed their stars among exactly 2 bloggers?",
    "options": [],
    "correctAnswer": "2",
    "explanation": "Official CAT answer: 2."
  },
  {
    "id": "S1_DILR_4",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 4,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_1",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 1",
    "passage": "Six web surfers M, N, O, P, X, and Y each had 30 stars which they distributed among four bloggers A, B, C, and D. The\nnumber of stars received by A and B from the six web surfers is shown in the figure below.\n\nThe following additional facts are known regarding the number of stars received by the bloggers from the surfers.",
    "diagramUrl": "/src/assets/questions/slot1_lrdi_stars.png",
    "questionText": "Which of the following can be determined with certainty?\n(I). The number of stars received by C from M.\n(II). The number of stars received by D from O.",
    "options": [
      "Neither I nor II",
      "Only I",
      "Only II",
      "Both I and II"
    ],
    "correctAnswer": 1,
    "explanation": "Official CAT answer: B."
  },
  {
    "id": "S1_DILR_5",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 5,
    "type": "TITA",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_2",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 2",
    "passage": "The chart below provides complete information about the number of countries visited by Dheeraj, Samantha and\nNitesh, in Asia, Europe and the rest of the world (ROW).\n\nThe following additional facts are known about the countries visited by them.\n1. 32 countries were visited by at least one of them.\n2. USA (in ROW) is the only country that was visited by all three of them.\n3. China (in Asia) is the only country that was visited by both Dheeraj and Nitesh, but not by Samantha.\n4. France (in Europe) is the only country outside Asia, which was visited by both Dheeraj and Samantha, but not\nby Nitesh.",
    "diagramUrl": "/src/assets/questions/slot1_lrdi_countries.png",
    "questionText": "Half of the countries visited by both Samantha and Nitesh are in Europe.\n\n5. How many countries in Asia were visited by at least one of Dheeraj, Samantha and Nitesh?",
    "options": [],
    "correctAnswer": "3",
    "explanation": "Official CAT answer: 3."
  },
  {
    "id": "S1_DILR_6",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 6,
    "type": "TITA",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_2",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 2",
    "passage": "The chart below provides complete information about the number of countries visited by Dheeraj, Samantha and\nNitesh, in Asia, Europe and the rest of the world (ROW).\n\nThe following additional facts are known about the countries visited by them.\n1. 32 countries were visited by at least one of them.\n2. USA (in ROW) is the only country that was visited by all three of them.\n3. China (in Asia) is the only country that was visited by both Dheeraj and Nitesh, but not by Samantha.\n4. France (in Europe) is the only country outside Asia, which was visited by both Dheeraj and Samantha, but not\nby Nitesh.",
    "diagramUrl": "/src/assets/questions/slot1_lrdi_countries.png",
    "questionText": "How many countries in Europe were visited only by Nitesh?",
    "options": [],
    "correctAnswer": "2",
    "explanation": "Official CAT answer: 2."
  },
  {
    "id": "S1_DILR_7",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 7,
    "type": "TITA",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_2",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 2",
    "passage": "The chart below provides complete information about the number of countries visited by Dheeraj, Samantha and\nNitesh, in Asia, Europe and the rest of the world (ROW).\n\nThe following additional facts are known about the countries visited by them.\n1. 32 countries were visited by at least one of them.\n2. USA (in ROW) is the only country that was visited by all three of them.\n3. China (in Asia) is the only country that was visited by both Dheeraj and Nitesh, but not by Samantha.\n4. France (in Europe) is the only country outside Asia, which was visited by both Dheeraj and Samantha, but not\nby Nitesh.",
    "diagramUrl": "/src/assets/questions/slot1_lrdi_countries.png",
    "questionText": "How many countries in the ROW were visited by both Nitesh and Samantha?",
    "options": [],
    "correctAnswer": "4",
    "explanation": "Official CAT answer: 4."
  },
  {
    "id": "S1_DILR_8",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 8,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_2",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 2",
    "passage": "The chart below provides complete information about the number of countries visited by Dheeraj, Samantha and\nNitesh, in Asia, Europe and the rest of the world (ROW).\n\nThe following additional facts are known about the countries visited by them.\n1. 32 countries were visited by at least one of them.\n2. USA (in ROW) is the only country that was visited by all three of them.\n3. China (in Asia) is the only country that was visited by both Dheeraj and Nitesh, but not by Samantha.\n4. France (in Europe) is the only country outside Asia, which was visited by both Dheeraj and Samantha, but not\nby Nitesh.",
    "diagramUrl": "/src/assets/questions/slot1_lrdi_countries.png",
    "questionText": "How many countries in Europe were visited by exactly one of Dheeraj, Samantha and Nitesh?",
    "options": [
      "12",
      "14",
      "10",
      "5"
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S1_DILR_9",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 9,
    "type": "TITA",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_3",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 3",
    "passage": "The game of QUIET is played between two teams. Six teams, numbered 1, 2, 3, 4, 5, and 6, play in a QUIET tournament.\nThese teams are divided equally into two groups. In the tournament, each team plays every other team in the same\ngroup only once, and each team in the other group exactly twice. The tournament has several rounds, each of which\nconsists of a few games. Every team plays exactly one game in each round.\nThe following additional facts are known about the schedule of games in the tournament.\n1. Each team played against a team from the other group in Round 8.\n2. In Round 4 and Round 7, the match-ups, that is the pair of teams playing against each other, were identical. In\nRound 5 and Round 8, the match-ups were identical.\n3. Team 4 played Team 6 in both Round 1 and Round 2.\n4. Team 1 played Team 5 ONLY once and that was in Round 2.\n5. Team 3 played Team 4 in Round 3. Team 1 played Team 6 in Round 6.\n6. In Round 8, Team 3 played Team 6, while Team 2 played Team 5.",
    "diagramUrl": null,
    "questionText": "How many rounds were there in the tournament?",
    "options": [],
    "correctAnswer": "8",
    "explanation": "Official CAT answer: 8."
  },
  {
    "id": "S1_DILR_10",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 10,
    "type": "TITA",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_3",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 3",
    "passage": "The game of QUIET is played between two teams. Six teams, numbered 1, 2, 3, 4, 5, and 6, play in a QUIET tournament.\nThese teams are divided equally into two groups. In the tournament, each team plays every other team in the same\ngroup only once, and each team in the other group exactly twice. The tournament has several rounds, each of which\nconsists of a few games. Every team plays exactly one game in each round.\nThe following additional facts are known about the schedule of games in the tournament.\n1. Each team played against a team from the other group in Round 8.\n2. In Round 4 and Round 7, the match-ups, that is the pair of teams playing against each other, were identical. In\nRound 5 and Round 8, the match-ups were identical.\n3. Team 4 played Team 6 in both Round 1 and Round 2.\n4. Team 1 played Team 5 ONLY once and that was in Round 2.\n5. Team 3 played Team 4 in Round 3. Team 1 played Team 6 in Round 6.\n6. In Round 8, Team 3 played Team 6, while Team 2 played Team 5.",
    "diagramUrl": null,
    "questionText": "What is the number of the team that played Team 1 in Round 5?",
    "options": [],
    "correctAnswer": "4",
    "explanation": "Official CAT answer: 4."
  },
  {
    "id": "S1_DILR_11",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 11,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_3",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 3",
    "passage": "The game of QUIET is played between two teams. Six teams, numbered 1, 2, 3, 4, 5, and 6, play in a QUIET tournament.\nThese teams are divided equally into two groups. In the tournament, each team plays every other team in the same\ngroup only once, and each team in the other group exactly twice. The tournament has several rounds, each of which\nconsists of a few games. Every team plays exactly one game in each round.\nThe following additional facts are known about the schedule of games in the tournament.\n1. Each team played against a team from the other group in Round 8.\n2. In Round 4 and Round 7, the match-ups, that is the pair of teams playing against each other, were identical. In\nRound 5 and Round 8, the match-ups were identical.\n3. Team 4 played Team 6 in both Round 1 and Round 2.\n4. Team 1 played Team 5 ONLY once and that was in Round 2.\n5. Team 3 played Team 4 in Round 3. Team 1 played Team 6 in Round 6.\n6. In Round 8, Team 3 played Team 6, while Team 2 played Team 5.",
    "diagramUrl": null,
    "questionText": "Which team among the teams numbered 2, 3, 4, and 5 was not part of the same group?",
    "options": [
      "5",
      "2",
      "4",
      "3"
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S1_DILR_12",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 12,
    "type": "TITA",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_3",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 3",
    "passage": "The game of QUIET is played between two teams. Six teams, numbered 1, 2, 3, 4, 5, and 6, play in a QUIET tournament.\nThese teams are divided equally into two groups. In the tournament, each team plays every other team in the same\ngroup only once, and each team in the other group exactly twice. The tournament has several rounds, each of which\nconsists of a few games. Every team plays exactly one game in each round.\nThe following additional facts are known about the schedule of games in the tournament.\n1. Each team played against a team from the other group in Round 8.\n2. In Round 4 and Round 7, the match-ups, that is the pair of teams playing against each other, were identical. In\nRound 5 and Round 8, the match-ups were identical.\n3. Team 4 played Team 6 in both Round 1 and Round 2.\n4. Team 1 played Team 5 ONLY once and that was in Round 2.\n5. Team 3 played Team 4 in Round 3. Team 1 played Team 6 in Round 6.\n6. In Round 8, Team 3 played Team 6, while Team 2 played Team 5.",
    "diagramUrl": null,
    "questionText": "What is the number of the team that played Team 1 in Round 7?",
    "options": [],
    "correctAnswer": "3",
    "explanation": "Official CAT answer: 3."
  },
  {
    "id": "S1_DILR_13",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 13,
    "type": "TITA",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_3",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 3",
    "passage": "The game of QUIET is played between two teams. Six teams, numbered 1, 2, 3, 4, 5, and 6, play in a QUIET tournament.\nThese teams are divided equally into two groups. In the tournament, each team plays every other team in the same\ngroup only once, and each team in the other group exactly twice. The tournament has several rounds, each of which\nconsists of a few games. Every team plays exactly one game in each round.\nThe following additional facts are known about the schedule of games in the tournament.\n1. Each team played against a team from the other group in Round 8.\n2. In Round 4 and Round 7, the match-ups, that is the pair of teams playing against each other, were identical. In\nRound 5 and Round 8, the match-ups were identical.\n3. Team 4 played Team 6 in both Round 1 and Round 2.\n4. Team 1 played Team 5 ONLY once and that was in Round 2.\n5. Team 3 played Team 4 in Round 3. Team 1 played Team 6 in Round 6.\n6. In Round 8, Team 3 played Team 6, while Team 2 played Team 5.",
    "diagramUrl": null,
    "questionText": "What is the number of the team that played Team 6 in Round 3?",
    "options": [],
    "correctAnswer": "5",
    "explanation": "Official CAT answer: 5."
  },
  {
    "id": "S1_DILR_14",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 14,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_4",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 4",
    "passage": "The vertical axis shows the price of the share in rupees. A share whose closing price (price at the end of the day) is\nmore than its opening price (price at the start of the day) is called a bullish share; otherwise, it is called a bearish share.\nAll bullish and bearish shares are shown in green and red colour respectively.",
    "diagramUrl": "/src/assets/questions/slot1_lrdi_candlestick.png",
    "questionText": "Daily Share Price Variability (SPV) is defined as (Day's high price - Day's low price) / (Average of the opening and\nclosing prices during the day). Which among the shares A, C, D and F had the highest SPV on that day?",
    "options": [
      "A",
      "F",
      "D",
      "C"
    ],
    "correctAnswer": 2,
    "explanation": "Official CAT answer: C."
  },
  {
    "id": "S1_DILR_15",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 15,
    "type": "TITA",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_4",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 4",
    "passage": "The vertical axis shows the price of the share in rupees. A share whose closing price (price at the end of the day) is\nmore than its opening price (price at the start of the day) is called a bullish share; otherwise, it is called a bearish share.\nAll bullish and bearish shares are shown in green and red colour respectively.",
    "diagramUrl": "/src/assets/questions/slot1_lrdi_candlestick.png",
    "questionText": "Daily Share Price Variability (SPV) is defined as (Day's high price - Day's low price) / (Average of the opening and\nclosing prices during the day). How many shares had an SPV greater than 0.5 on that day?",
    "options": [],
    "correctAnswer": "4",
    "explanation": "Official CAT answer: 4."
  },
  {
    "id": "S1_DILR_16",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 16,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_4",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 4",
    "passage": "The vertical axis shows the price of the share in rupees. A share whose closing price (price at the end of the day) is\nmore than its opening price (price at the start of the day) is called a bullish share; otherwise, it is called a bearish share.\nAll bullish and bearish shares are shown in green and red colour respectively.",
    "diagramUrl": "/src/assets/questions/slot1_lrdi_candlestick.png",
    "questionText": "Daily loss for a share is defined as (Opening price – Closing price) / (Opening price). Which among the shares A, B,\nF and G had the highest daily loss on that day?",
    "options": [
      "B",
      "G",
      "F",
      "A"
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S1_DILR_17",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 17,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_4",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 4",
    "passage": "The vertical axis shows the price of the share in rupees. A share whose closing price (price at the end of the day) is\nmore than its opening price (price at the start of the day) is called a bullish share; otherwise, it is called a bearish share.\nAll bullish and bearish shares are shown in green and red colour respectively.",
    "diagramUrl": "/src/assets/questions/slot1_lrdi_candlestick.png",
    "questionText": "What would have been the percentage wealth gain for a trader, who bought equal numbers of all bullish shares at\nopening price and sold them at their day's high?",
    "options": [
      "100%",
      "80%",
      "72%",
      "50%"
    ],
    "correctAnswer": 1,
    "explanation": "Official CAT answer: B."
  },
  {
    "id": "S1_DILR_18",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 18,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_5",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 5",
    "passage": "Two students, Amiya and Ramya are the only candidates in an election for the position of class representative. Students\nwill vote based on the intensity level of Amiya's and Ramya's campaigns and the type of campaigns they run. Each\ncampaign is said to have a level of 1 if it is a staid campaign and a level of 2 if it is a vigorous campaign. Campaigns can\nbe of two types, they can either focus on issues, or on attacking the other candidate.\nIf Amiya and Ramya both run campaigns focusing on issues, then\n•\nThe percentage of students voting in the election will be 20 times the sum of the levels of campaigning of the\ntwo students. For example, if Amiya and Ramya both run vigorous campaigns, then 20 × (2+2)%, that is, 80%\nof the students will vote in the election.\n•\nAmong voting students, the percentage of votes for each candidate will be proportional to the levels of their\ncampaigns. For example, if Amiya runs a staid (i.e., level 1) campaign while Ramya runs a vigorous (i.e., level 2)\ncampaign, then Amiya will receive 1/3 of the votes cast, and Ramya will receive the other 2/3.\nThe above-mentioned percentages change as follows if at least one of them runs a campaign attacking their opponent.\n•\nIf Amiya runs a campaign attacking Ramya and Ramya runs a campaign focusing on issues, then 10% of the\nstudents who would have otherwise voted for Amiya will vote for Ramya, and another 10% who would have\notherwise voted for Amiya, will not vote at all.\n•\nIf Ramya runs a campaign attacking Amiya and Amiya runs a campaign focusing on issues, then 20% of the\nstudents who would have otherwise voted for Ramya will vote for Amiya, and another 5% who would have\notherwise voted for Ramya, will not vote at all.\n•\nIf both run campaigns attacking each other, then 10% of the students who would have otherwise voted for\nthem had they run campaigns focusing on issues, will not vote at all.",
    "diagramUrl": null,
    "questionText": "If both of them run staid campaigns attacking the other, then what percentage of students will vote in the election?",
    "options": [
      "60%",
      "64%",
      "40%",
      "36%"
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S1_DILR_19",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 19,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_5",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 5",
    "passage": "Two students, Amiya and Ramya are the only candidates in an election for the position of class representative. Students\nwill vote based on the intensity level of Amiya's and Ramya's campaigns and the type of campaigns they run. Each\ncampaign is said to have a level of 1 if it is a staid campaign and a level of 2 if it is a vigorous campaign. Campaigns can\nbe of two types, they can either focus on issues, or on attacking the other candidate.\nIf Amiya and Ramya both run campaigns focusing on issues, then\n•\nThe percentage of students voting in the election will be 20 times the sum of the levels of campaigning of the\ntwo students. For example, if Amiya and Ramya both run vigorous campaigns, then 20 × (2+2)%, that is, 80%\nof the students will vote in the election.\n•\nAmong voting students, the percentage of votes for each candidate will be proportional to the levels of their\ncampaigns. For example, if Amiya runs a staid (i.e., level 1) campaign while Ramya runs a vigorous (i.e., level 2)\ncampaign, then Amiya will receive 1/3 of the votes cast, and Ramya will receive the other 2/3.\nThe above-mentioned percentages change as follows if at least one of them runs a campaign attacking their opponent.\n•\nIf Amiya runs a campaign attacking Ramya and Ramya runs a campaign focusing on issues, then 10% of the\nstudents who would have otherwise voted for Amiya will vote for Ramya, and another 10% who would have\notherwise voted for Amiya, will not vote at all.\n•\nIf Ramya runs a campaign attacking Amiya and Amiya runs a campaign focusing on issues, then 20% of the\nstudents who would have otherwise voted for Ramya will vote for Amiya, and another 5% who would have\notherwise voted for Ramya, will not vote at all.\n•\nIf both run campaigns attacking each other, then 10% of the students who would have otherwise voted for\nthem had they run campaigns focusing on issues, will not vote at all.",
    "diagramUrl": null,
    "questionText": "What is the minimum percentage of students who will vote in the election?",
    "options": [
      "38%",
      "36%",
      "32%",
      "40%"
    ],
    "correctAnswer": 1,
    "explanation": "Official CAT answer: B."
  },
  {
    "id": "S1_DILR_20",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 20,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_5",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 5",
    "passage": "Two students, Amiya and Ramya are the only candidates in an election for the position of class representative. Students\nwill vote based on the intensity level of Amiya's and Ramya's campaigns and the type of campaigns they run. Each\ncampaign is said to have a level of 1 if it is a staid campaign and a level of 2 if it is a vigorous campaign. Campaigns can\nbe of two types, they can either focus on issues, or on attacking the other candidate.\nIf Amiya and Ramya both run campaigns focusing on issues, then\n•\nThe percentage of students voting in the election will be 20 times the sum of the levels of campaigning of the\ntwo students. For example, if Amiya and Ramya both run vigorous campaigns, then 20 × (2+2)%, that is, 80%\nof the students will vote in the election.\n•\nAmong voting students, the percentage of votes for each candidate will be proportional to the levels of their\ncampaigns. For example, if Amiya runs a staid (i.e., level 1) campaign while Ramya runs a vigorous (i.e., level 2)\ncampaign, then Amiya will receive 1/3 of the votes cast, and Ramya will receive the other 2/3.\nThe above-mentioned percentages change as follows if at least one of them runs a campaign attacking their opponent.\n•\nIf Amiya runs a campaign attacking Ramya and Ramya runs a campaign focusing on issues, then 10% of the\nstudents who would have otherwise voted for Amiya will vote for Ramya, and another 10% who would have\notherwise voted for Amiya, will not vote at all.\n•\nIf Ramya runs a campaign attacking Amiya and Amiya runs a campaign focusing on issues, then 20% of the\nstudents who would have otherwise voted for Ramya will vote for Amiya, and another 5% who would have\notherwise voted for Ramya, will not vote at all.\n•\nIf both run campaigns attacking each other, then 10% of the students who would have otherwise voted for\nthem had they run campaigns focusing on issues, will not vote at all.",
    "diagramUrl": null,
    "questionText": "If Amiya runs a campaign focusing on issues, then what is the maximum percentage of votes that she can get?",
    "options": [
      "48%",
      "36%",
      "44%",
      "40%"
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S1_DILR_21",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 21,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_5",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 5",
    "passage": "Two students, Amiya and Ramya are the only candidates in an election for the position of class representative. Students\nwill vote based on the intensity level of Amiya's and Ramya's campaigns and the type of campaigns they run. Each\ncampaign is said to have a level of 1 if it is a staid campaign and a level of 2 if it is a vigorous campaign. Campaigns can\nbe of two types, they can either focus on issues, or on attacking the other candidate.\nIf Amiya and Ramya both run campaigns focusing on issues, then\n•\nThe percentage of students voting in the election will be 20 times the sum of the levels of campaigning of the\ntwo students. For example, if Amiya and Ramya both run vigorous campaigns, then 20 × (2+2)%, that is, 80%\nof the students will vote in the election.\n•\nAmong voting students, the percentage of votes for each candidate will be proportional to the levels of their\ncampaigns. For example, if Amiya runs a staid (i.e., level 1) campaign while Ramya runs a vigorous (i.e., level 2)\ncampaign, then Amiya will receive 1/3 of the votes cast, and Ramya will receive the other 2/3.\nThe above-mentioned percentages change as follows if at least one of them runs a campaign attacking their opponent.\n•\nIf Amiya runs a campaign attacking Ramya and Ramya runs a campaign focusing on issues, then 10% of the\nstudents who would have otherwise voted for Amiya will vote for Ramya, and another 10% who would have\notherwise voted for Amiya, will not vote at all.\n•\nIf Ramya runs a campaign attacking Amiya and Amiya runs a campaign focusing on issues, then 20% of the\nstudents who would have otherwise voted for Ramya will vote for Amiya, and another 5% who would have\notherwise voted for Ramya, will not vote at all.\n•\nIf both run campaigns attacking each other, then 10% of the students who would have otherwise voted for\nthem had they run campaigns focusing on issues, will not vote at all.",
    "diagramUrl": null,
    "questionText": "If Ramya runs a campaign attacking Amiya, then what is the minimum percentage of votes that she is guaranteed\nto get?",
    "options": [
      "15%",
      "18%",
      "12%",
      "30%"
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S1_DILR_22",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 22,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_5",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 5",
    "passage": "Two students, Amiya and Ramya are the only candidates in an election for the position of class representative. Students\nwill vote based on the intensity level of Amiya's and Ramya's campaigns and the type of campaigns they run. Each\ncampaign is said to have a level of 1 if it is a staid campaign and a level of 2 if it is a vigorous campaign. Campaigns can\nbe of two types, they can either focus on issues, or on attacking the other candidate.\nIf Amiya and Ramya both run campaigns focusing on issues, then\n•\nThe percentage of students voting in the election will be 20 times the sum of the levels of campaigning of the\ntwo students. For example, if Amiya and Ramya both run vigorous campaigns, then 20 × (2+2)%, that is, 80%\nof the students will vote in the election.\n•\nAmong voting students, the percentage of votes for each candidate will be proportional to the levels of their\ncampaigns. For example, if Amiya runs a staid (i.e., level 1) campaign while Ramya runs a vigorous (i.e., level 2)\ncampaign, then Amiya will receive 1/3 of the votes cast, and Ramya will receive the other 2/3.\nThe above-mentioned percentages change as follows if at least one of them runs a campaign attacking their opponent.\n•\nIf Amiya runs a campaign attacking Ramya and Ramya runs a campaign focusing on issues, then 10% of the\nstudents who would have otherwise voted for Amiya will vote for Ramya, and another 10% who would have\notherwise voted for Amiya, will not vote at all.\n•\nIf Ramya runs a campaign attacking Amiya and Amiya runs a campaign focusing on issues, then 20% of the\nstudents who would have otherwise voted for Ramya will vote for Amiya, and another 5% who would have\notherwise voted for Ramya, will not vote at all.\n•\nIf both run campaigns attacking each other, then 10% of the students who would have otherwise voted for\nthem had they run campaigns focusing on issues, will not vote at all.",
    "diagramUrl": null,
    "questionText": "What is the maximum possible voting margin with which one of the candidates can win?",
    "options": [
      "20%",
      "28%",
      "26%",
      "29%"
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S1_QA_1",
    "slot": 1,
    "section": "QA",
    "questionNumber": 1,
    "type": "MCQ",
    "subtopic": "Quantitative Aptitude",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "If 𝑎−6𝑏+ 6𝑐= 4 and 6𝑎+ 3𝑏−3𝑐= 50, where a, b and c are real numbers, the value of 2𝑎+ 3𝑏−3𝑐 is",
    "options": [
      "18",
      "20",
      "15",
      "14"
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S1_QA_2",
    "slot": 1,
    "section": "QA",
    "questionNumber": 2,
    "type": "MCQ",
    "subtopic": "Quantitative Aptitude",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "A cafeteria offers 5 types of sandwiches. Moreover, for each type of sandwich, a customer can choose one of 4\nbreads and opt for either small or large sized sandwich. Optionally, the customer may also add up to 2 out of 6\navailable sauces. The number of different ways in which an order can be placed for a sandwich, is",
    "options": [
      "880",
      "600",
      "800",
      "840"
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S1_QA_3",
    "slot": 1,
    "section": "QA",
    "questionNumber": 3,
    "type": "MCQ",
    "subtopic": "Algebra",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "The number of distinct integers 𝑛 for which log(1\n4)(𝑛2 −7𝑛+ 11) > is",
    "options": [
      "Infinite",
      "0",
      "2",
      "1"
    ],
    "correctAnswer": 1,
    "explanation": "Official CAT answer: B."
  },
  {
    "id": "S1_QA_4",
    "slot": 1,
    "section": "QA",
    "questionNumber": 4,
    "type": "MCQ",
    "subtopic": "Quantitative Aptitude",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "In the set of consecutive odd numbers {1, 3, 5,...., 57}, there is a number k such that the sum of all the elements\nless than k is equal to the sum of all the elements greater than k. Then k equals",
    "options": [
      "41",
      "39",
      "37",
      "43"
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S1_QA_5",
    "slot": 1,
    "section": "QA",
    "questionNumber": 5,
    "type": "TITA",
    "subtopic": "Number System",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "In a 3-digit number N, the digits are non-zero and distinct such that none of the digits is a perfect square, and only\none of the digits is a prime number. Then, the number of factors of the minimum possible value of N is",
    "options": [],
    "correctAnswer": "6",
    "explanation": "Official CAT answer: 6."
  },
  {
    "id": "S1_QA_6",
    "slot": 1,
    "section": "QA",
    "questionNumber": 6,
    "type": "MCQ",
    "subtopic": "Arithmetic",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "At a certain simple rate of interest, a given sum amounts to Rs 13920 in 3 years, and to Rs 18960 in 6 years and 6\nmonths. If the same given sum had been invested for 2 years at the same rate as before but with interest\ncompounded every 6 months, then the total interest earned, in rupees, would have been nearest to",
    "options": [
      "3096",
      "3150",
      "3180",
      "3221"
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: 3221."
  },
  {
    "id": "S1_QA_7",
    "slot": 1,
    "section": "QA",
    "questionNumber": 7,
    "type": "TITA",
    "subtopic": "Number System",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "The number of non - negative integer values of k for which the quadratic equation 𝑥2 −5𝑥+ 𝑘= 0 has only\ninteger roots, is",
    "options": [],
    "correctAnswer": "3",
    "explanation": "Official CAT answer: 3."
  },
  {
    "id": "S1_QA_8",
    "slot": 1,
    "section": "QA",
    "questionNumber": 8,
    "type": "MCQ",
    "subtopic": "Algebra",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "A value of c for which the minimum value of 𝑓(𝑥) = 𝑥2 −4𝑐𝑥+ 8𝑐 is greater than the maximum value of 𝑔(𝑥) =\n−𝑥2 + 3𝑐𝑥−2𝑐, is",
    "options": [
      "2",
      "−\n1\n2",
      "-2",
      "1\n2"
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S1_QA_9",
    "slot": 1,
    "section": "QA",
    "questionNumber": 9,
    "type": "MCQ",
    "subtopic": "Arithmetic",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "A container holds 200 litres of a solution of acid and water, having 30% acid by volume. Atul replaces 20% of this\nsolution with water, then replaces 10% of the resulting solution with acid, and finally replaces 15% of the solution\nthus obtained, with water. The percentage of acid by volume in the final solution obtained after these three\nreplacements, is nearest to",
    "options": [
      "23",
      "25",
      "29",
      "27"
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S1_QA_10",
    "slot": 1,
    "section": "QA",
    "questionNumber": 10,
    "type": "MCQ",
    "subtopic": "Arithmetic",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "Shruti travels a distance of 224 km in four parts for a total travel time of 3 hours. Her speeds in these four parts\nfollow an arithmetic progression, and the corresponding time taken to cover these four parts follow another\narithmetic progression. If she travels at a speed of 960 meters per minute for 30 minutes to cover the first part,\nthen the distance, in meters, she travels in the fourth part i",
    "options": [
      "96000",
      "112000",
      "76800",
      "86400"
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S1_QA_11",
    "slot": 1,
    "section": "QA",
    "questionNumber": 11,
    "type": "MCQ",
    "subtopic": "Arithmetic",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "The ratio of the number of students in the morning shift and afternoon shift of a school was 13 : 9. After 21 students\nmoved from the morning shift to the afternoon shift, this ratio became 19 : 14. Next, some new students joined\nthe morning and afternoon shifts in the ratio 3 : 8 and then the ratio of the number of students in the morning\nshift and the afternoon shift became 5 : 4. The number of new students who joined is",
    "options": [
      "110",
      "88",
      "121",
      "99"
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S1_QA_12",
    "slot": 1,
    "section": "QA",
    "questionNumber": 12,
    "type": "MCQ",
    "subtopic": "Geometry & Mensuration",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "In a circle with center C and radius 6 √2 cm, PQ and SR are two parallel chords separated by one of the diameters.\nIf ∠𝑃𝑄𝐶= 450, and the ratio of the perpendicular distance of PQ and SR from C is 3 : 2, then the area, in sq. cm,\nof the quadrilateral PQRS is",
    "options": [
      "4 (3 + √14)",
      "20 (3√2 + √7)",
      "20 (3 + √14)",
      "4 (3 √2 + √7)"
    ],
    "correctAnswer": 2,
    "explanation": "Official CAT answer: C."
  },
  {
    "id": "S1_QA_13",
    "slot": 1,
    "section": "QA",
    "questionNumber": 13,
    "type": "MCQ",
    "subtopic": "Geometry & Mensuration",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "The (x, y) coordinates of vertices P, Q and R of a parallelogram PQRS are (-3, -2), (1, -5) and (9, 1), respectively. If\nthe diagonal SQ intersects the x - axis at (a, 0) then the value of a is",
    "options": [
      "13\n4",
      "20\n9",
      "10\n3",
      "27\n7"
    ],
    "correctAnswer": 1,
    "explanation": "Official CAT answer: B."
  },
  {
    "id": "S1_QA_14",
    "slot": 1,
    "section": "QA",
    "questionNumber": 14,
    "type": "TITA",
    "subtopic": "Algebra",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "In a class, there were more than 10 boys and a certain number of girls. After 40% of the girls and 60% of the boys\nleft the class, the remaining number of girls was 8 more than the remaining number of boys. Then, the minimum\npossible number of students initially in the class was",
    "options": [],
    "correctAnswer": "55",
    "explanation": "Official CAT answer: 55."
  },
  {
    "id": "S1_QA_15",
    "slot": 1,
    "section": "QA",
    "questionNumber": 15,
    "type": "TITA",
    "subtopic": "Geometry & Mensuration",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "If the length of a side of a rhombus is 36 cm and the area of the rhombus is 396 sq. cm, then the absolute value of\nthe difference between the lengths, in cm, of the diagonals of the rhombus is",
    "options": [],
    "correctAnswer": "60",
    "explanation": "Official CAT answer: 60."
  },
  {
    "id": "S1_QA_16",
    "slot": 1,
    "section": "QA",
    "questionNumber": 16,
    "type": "TITA",
    "subtopic": "Arithmetic",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "A shopkeeper offers a discount of 22% on the marked price of each chair, and gives 13 chairs to a customer for the\ndiscounted price of 12 chairs to earn a profit of 26% on the transaction. If the cost price of each chair is Rs 100,\nthen the marked price, in rupees, of each chair is",
    "options": [],
    "correctAnswer": "175",
    "explanation": "Official CAT answer: 175."
  },
  {
    "id": "S1_QA_17",
    "slot": 1,
    "section": "QA",
    "questionNumber": 17,
    "type": "TITA",
    "subtopic": "Quantitative Aptitude",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "The number of distinct pairs of integers (x, y) satisfying the inequalities 𝑥> 𝑦≥3 and 𝑥+ 𝑦< 14 is",
    "options": [],
    "correctAnswer": "16",
    "explanation": "Official CAT answer: 16."
  },
  {
    "id": "S1_QA_18",
    "slot": 1,
    "section": "QA",
    "questionNumber": 18,
    "type": "MCQ",
    "subtopic": "Arithmetic",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "Arun, Varun and Tarun, if working alone, can complete a task in 24, 21, and 15 days, respectively. They charge Rs\n2160, Rs 2400, and Rs 2160 per day, respectively, even if they are employed for a partial day. On any given day, any\nof the workers may or may not be employed to work. If the task needs to be completed in 10 days or less, then the\nminimum possible amount, in rupees, required to be paid for the entire task is",
    "options": [
      "34400",
      "38880",
      "47040",
      "38400"
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S1_QA_19",
    "slot": 1,
    "section": "QA",
    "questionNumber": 19,
    "type": "MCQ",
    "subtopic": "Quantitative Aptitude",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "For any natural number k, let 𝑎𝑘= 3𝑘. The smallest natural number m for which {(𝑎1)1 × (𝑎2)2 × … × (𝑎20)20},\nis <{𝑎21 × 𝑎22 × … × 𝑎(20 + 𝑚)}",
    "options": [
      "59",
      "56",
      "58",
      "57"
    ],
    "correctAnswer": 2,
    "explanation": "Official CAT answer: C."
  },
  {
    "id": "S1_QA_20",
    "slot": 1,
    "section": "QA",
    "questionNumber": 20,
    "type": "TITA",
    "subtopic": "Quantitative Aptitude",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "Stocks A, B and C are priced at rupees 120, 90 and 150 per share, respectively. A trader holds a portfolio consisting\nof 10 shares of stock A, and 20 shares of stocks B and C put together. If the total value of her portfolio is rupees\n3300, then the number of shares of stock B that she holds, is",
    "options": [],
    "correctAnswer": "15",
    "explanation": "Official CAT answer: 15."
  },
  {
    "id": "S1_QA_21",
    "slot": 1,
    "section": "QA",
    "questionNumber": 21,
    "type": "TITA",
    "subtopic": "Quantitative Aptitude",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "Kamala divided her investment of Rs 100000 between stocks, bonds, and gold. Her investment in bonds was 25%\nof her investment in gold. With annual returns of 10%, 6%, 8% on stocks, bonds, and gold, respectively, she gained\na total amount of Rs 8200 in one year. The amount, in rupees, that she gained from the bonds, was",
    "options": [],
    "correctAnswer": "900",
    "explanation": "Official CAT answer: 900."
  },
  {
    "id": "S1_QA_22",
    "slot": 1,
    "section": "QA",
    "questionNumber": 22,
    "type": "MCQ",
    "subtopic": "Quantitative Aptitude",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "Let 3 ≤𝑥≤6 and [𝑥2] = [𝑥]2, where [x] is the greatest integer not exceeding x. If set S represents all feasible\nvalues of x, then a possible subset of S is",
    "options": [
      "(4, √18) ∪[5, √27) ∪{6}",
      "[3, √10] ∪[4, √17] ∪{6}",
      "[3, √10] ∪[5, √26]",
      "(3, √10) ∪[5, √26) ∪{6}"
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  }
];

export const officialSlot2Questions = [
  {
    "id": "S2_VARC_1",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 1,
    "type": "MCQ",
    "subtopic": "Verbal Ability",
    "setId": "S2_VA_1",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "questionText": "The given sentence is missing in the paragraph below. Decide where it best fits among the options (1, 2, 3, or 4)\nindicated in the paragraph.\n\nSentence: While taste is related to judgment, with thinkers at the time often writing, for example, about\n\"judgments of taste\" or using the two terms interchangeably, taste retains a vital link to pleasure, embodiment,\nand personal specificity that is too often elided in post-Kantian ideas about judgment, a link that Arendt herself\nwas working to restore.\nParagraph: ____(1) ____. Denneny focused on taste rather than judgment in order to highlight what he believed\nwas a crucial but neglected historical change. ____(2) ____. Over the course of the seventeenth century and early\neighteenth century, across Western Europe, the word taste took on a new extension of meaning, no longer\nreferring specifically to gustatory sensation and the delights of the palate but becoming, for a time, one of the\ncentral categories for aesthetic—and ethical—thinking. ____(3) ____. Tracing the history of taste in Spanish,\nFrench, and British aesthetic theory, as Denneny did, also provides a means to recover the compelling and relevant\nwriting of a set of thinkers who have been largely neglected by professional philosophy. ____(4) ____.",
    "options": [
      "Option 3.",
      "Option 4.",
      "Option 1.",
      "Option 2."
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S2_VARC_2",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 2,
    "type": "TITA",
    "subtopic": "Parajumble",
    "setId": "S2_VA_2",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "questionText": "Five jumbled sentences (labelled 1, 2, 3, 4, and 5), related to a topic, are given below. Four of them can be put\ntogether to form a coherent paragraph. Identify the odd sentence out and key in the number of that sentence\nas your answer.\n\n1. Sporting a copper-coloured pixie cut and a pair of pink feather antlers, Torres himself resembles a child's\ndoodle.\n2. His casual millennial delivery, peppered with \"um\"s and \"ah\"s, makes surreal concepts sound like items on a\nbrunch menu.\n3. Though he may have failed so far in his colour-scouting mission (he hasn't yet found a new one, he admits),\nthis hour leaves you tickled pink.\n4. Like his previous show, My Favourite Shapes, this is an hour of sit-down comedy aided by an overhead camera\nwhich relays Torres's theories illustrated with crayon squiggles on to a screen behind him.\n5. His inquisitive mind produces interconnected ideas about Catholicism, the blandness of Pixar and what orange\nsounds like, while his insights train us to spot \"highly purple behaviour\".",
    "options": [],
    "correctAnswer": "3",
    "explanation": "Official CAT answer: 3."
  },
  {
    "id": "S2_VARC_3",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 3,
    "type": "TITA",
    "subtopic": "Verbal Ability",
    "setId": "S2_VA_3",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "questionText": "The four sentences (labelled 1, 2, 3, and 4) given below, when properly sequenced, would yield a coherent\nparagraph. Decide on the proper sequencing of the order of the sentences and key in the sequence of the four\nnumbers as your answer.\n\n1. As books age, the cellulose and lignin in the paper begin to break down, releasing a mix of volatile organic\ncompounds into the air.\n2. Old books carry a scent that many people instantly recognize and even love.\n3. These compounds are benzaldehyde, which gives off an almond-like scent, vanillin, which smells like vanilla,\nethyl hexanol (floral scent), toluene (sweet), and furfural (which has a slightly bready scent).\n\n4. This familiar aroma isn't just dust or mildew; it's actually a result of slow chemical changes happening inside\nthe paper and ink.",
    "options": [],
    "correctAnswer": "2413",
    "explanation": "Official CAT answer: 2413."
  },
  {
    "id": "S2_VARC_4",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 4,
    "type": "MCQ",
    "subtopic": "Odd One Out",
    "setId": "S2_VA_4",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "questionText": "The given sentence is missing in the paragraph below. Decide where it best fits among the options (1, 2, 3, or 4)\nindicated in the paragraph.\n\nSentence: The region's Western customers found it hard to believe that Dhaka muslin could possibly have been\nmade by human hands. There were rumour that it was woven by mermaids, fairies and even ghosts.\nOnce upon the silty banks of the Meghna River, a miracle was spun, a fabric so light it was called \"baft-hawa\", or\nwoven air. This was Dhaka Muslin, the world's most coveted cloth. ____(1)____. Handspun from a rare cotton\ncalled Phuti Karpas, found nowhere else on Earth, and woven with a 16-step sacred ritual beginning with cleaning\nthe cotton using the teeth of a river catfish! ____(2)____. Every spring, the maple-like leaves pushed up through\nthe grey, silty soil to produce a single daffodil-yellow flower twice a year, which gave way to a snowy floret of cotton\nfibres. ____(3)____. Spun at dawn on boats by sharp-eyed young women, its threads were so fine the elderly could\nbarely see them. Motifs of wildflowers, river breeze, and soul were etched into each piece some so light, a 91-\nmetre bolt could pass through a ring, or a 60' length fit inside a snuffbox. It draped Greek goddesses, Roman nobles,\nMughal emperors, and European aristocrats. Marie Antoinette, Empress Joséphine even Jane Austen adored its\nfloating grace.",
    "options": [
      "Option 3.",
      "Option 4.",
      "Option 1.",
      "Option 2."
    ],
    "correctAnswer": 2,
    "explanation": "Official CAT answer: C."
  },
  {
    "id": "S2_VARC_5",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 5,
    "type": "MCQ",
    "subtopic": "Verbal Ability",
    "setId": "S2_VA_5",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "questionText": "The passage given below is followed by four summaries. Choose the option that best captures the essence of\nthe passage.\n\nFor millennia, in the process of opening up land for agriculture, gardens, grazing and hunting, humans have created\necological \"mosaics\", or \"patchworks\": landscapes holding a mixture of habitats, like meadows, gardens and\nforests. These were not designed as nature reserves, but often catered to hugely diverse animal life. Research\nindicates that European hay meadows cultivated for animal feed were actually more successful at preserving a vast\narray of species than meadows explicitly cultivated for biodiversity. Studying the early Holocene, researchers have\nfound that human presence was about as likely to increase biodiversity as reduce it. Of course, not all human-\ncreated landscapes have the same value. A paved subdivision with astroturfed lawns is very different to a village\nwith diverse vegetable and flower gardens. But scientists continue to find evidence that the old idea of humans as\nantithetical to nature is also wrong-headed, and that rosy visions of thriving, human-free environments are more\nimaginary than real.",
    "options": [
      "In our attempts to shape the world around us to our needs, humans have often created landscapes like\nmeadows, gardens, and forests, which support hugely diverse species, and are more successful at preserving\nthem, than parks created specifically for this.",
      "In terms of preserving biodiversity, scientists are finding increasing evidence that human action is not always\nantithetical to nature, but often assists the preservation of meadows, landscapes, and flourishing of species.",
      "Studying the early Holocene and human practices over millennia, researchers say that while agricultural\nmeadows, gardens, and forests were not explicitly designed as nature reserves, they actually preserved a vast\narray of species, belying the idea that humans harm nature.",
      "Contrary to the idea that humans always hurt nature and that it thrives in their absence, a lot of human action\nacross history has been equally likely to increase biodiversity than reduce it, often creating varied ecological\nlandscapes that support a vast array of species."
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S2_VARC_6",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 6,
    "type": "MCQ",
    "subtopic": "Verbal Ability",
    "setId": "S2_VA_6",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "questionText": "The passage given below is followed by four summaries. Choose the option that best captures the essence of\nthe passage.\n\nIn 1903, left-wing feminist Elizabeth Magie invented The Landlord's Game, the original version of what became\nMonopoly. It was designed as a powerful teaching tool to illustrate the dangers of monopolies and how wealth\ncould concentrate in the hands of a few. The game featured a circular path, properties, and a \"Go to Jail\" space.\nMagie created two rule sets: one \"monopolist\" version where players crushed opponents through accumulation,\nand another, more radical \"Prosperity\" version, where everyone shared in the wealth, promoting fairness and\nequity. Years later, unemployed Charles Darrow sold a simplified version to Parker Brothers. They paid Magie only\n$500 for her patent without royalties and credited Darrow as the sole inventor. For decades, his tale of inventing\nthe game in his basement remained the official story, while Magie's name and her original, anti-capitalist message\nwere left in the shadows.",
    "options": [
      "Parker Brothers' capitalist intent led to them acquiring from Charles Darrow a simplified version of Elizabeth\nMagie's original game, transforming it into a widespread commercial success while providing her only minimal\nfinancial compensation and granting scant public recognition.",
      "Celebrated icons of the gaming industry, Charles Darrow and Parker Brothers, snatched the feminist icon\nElizabeth Magie's original design and transformed Monopoly into a worldwide phenomenon, while barely\nacknowledging her.",
      "It is ironical that a left-wing feminist lost credit for the Landlord's Game to an unemployed man, who plagiarised\nand sold one version of the twin game to Parker Brothers for a meagre sum, denying her royalties.",
      "Only one version of Monopoly became famous because of Charles Darrow's relentless basement work,\ncarefully refining Elizabeth Magie's original idea into an engaging and entertaining pastime that he successfully\npatented and sold, symbolizing what many regarded as the ultimate triumph of individual ingenuity."
    ],
    "correctAnswer": 2,
    "explanation": "Official CAT answer: C."
  },
  {
    "id": "S2_VARC_7",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 7,
    "type": "TITA",
    "subtopic": "Parajumble",
    "setId": "S2_VA_7",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "questionText": "Five jumbled sentences (labelled 1, 2, 3, 4, and 5), related to a topic, are given below. Four of them can be put\ntogether to form a coherent paragraph. Identify the odd sentence out and key in the number of that sentence\nas your answer.\n\n1. Pfas are a class of about 15,000 compounds most frequently used to make products water, stain and grease\nresistant.\n2. New research suggests exposure to some common perfluoroalkyl and polyfluoroalkyl substances (Pfas) cause\nchanges to gene activity and that these changes are linked to health problems including multiple cancers,\nneurological disorders and autoimmune disease.\n3. These Pfas compounds are dubbed \"forever chemicals\" because they do not naturally break down in the\nenvironment.\n4. The research may also point toward other diseases potentially caused by Pfas that have not yet been identified.\n5. The findings are a major step toward determining the mechanism by which the chemicals cause disease and\ncould help doctors identify, detect and treat health problems for those exposed to Pfas before the issues\nadvance.",
    "options": [],
    "correctAnswer": "3",
    "explanation": "Official CAT answer: 3."
  },
  {
    "id": "S2_VARC_8",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 8,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S2_RC_8",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nIn my book \"Searches\", I chronicle how big technology companies have exploited human language for their gain. We\nlet this happen, I argue, because we also benefit somewhat from using the products. It's a dynamic that makes us\ncomplicit in big tech's accumulation of wealth and power: we're both victims and beneficiaries. I describe this\ncomplicity, but I also enact it, through my own internet archives: my Google searches, my Amazon product reviews\nand, yes, my ChatGPT dialogues.\nPeople often describe chatbots' textual output as \"bland\" or \"generic\" the linguistic equivalent of a beige office\nbuilding. OpenAI's products are built to \"sound like a colleague\", as OpenAI puts it, using language that, coming from\na person, would sound \"polite\", \"empathetic\", \"kind\", \"rationally optimistic\" and \"engaging\", among other qualities.\nOpenAI describes these strategies as helping its products seem \"professional\" and \"approachable\". This appears to be\nbound up with making us feel safe.\nTrust is a challenge for artificial intelligence (AI) companies, partly because their products regularly produce falsehoods\nand reify sexist, racist, US-centric cultural norms. While the companies are working on these problems, they persist:\nOpenAI found that its latest systems generate errors at a higher rate than its previous system. In the book, I wrote\nabout the inaccuracies and biases and also demonstrated them with the products. When I prompted Microsoft's Bing\nImage Creator to produce a picture of engineers and space explorers, it gave me an entirely male cast of characters;\nwhen my father asked ChatGPT to edit his writing, it transmuted his perfectly correct Indian English into American\nEnglish. Those weren't flukes. Research suggests that both tendencies are widespread.\nIn my own ChatGPT dialogues, I wanted to enact how the product's veneer of collegial neutrality could lull us into\nabsorbing false or biased responses without much critical engagement. Over time, ChatGPT seemed to be guiding me\nto write a more positive book about big tech including editing my description of OpenAI's CEO, Sam Altman, to call him\n\"a visionary and a pragmatist\". I'm not aware of research on whether ChatGPT tends to favor big tech, OpenAI or\nAltman, and I can only guess why it seemed that way in our conversation. OpenAI explicitly states that its products\nshouldn't attempt to influence users' thinking. When I asked ChatGPT about some of the issues, it blamed biases in its\ntraining data though I suspect my arguably leading questions played a role too. When I queried ChatGPT about its\nrhetoric, it responded: \"The way I communicate is designed to foster trust and confidence in my responses, which can\nbe both helpful and potentially misleading.\"\nOpenAI has its own goals, of course. Among them, it emphasizes wanting to build AI that \"benefits all of humanity\".\nBut while the company is controlled by a non-profit with that mission, its funders still seek a return on their investment.\nThat will presumably require getting people using products such as ChatGPT even more than they already are a goal\nthat is easier to accomplish if people see those products as trustworthy collaborators.",
    "questionText": "All of the following statements from the passage affirm the disjunct between the claims about AI made by tech\ncompanies and what AI actually does EXCEPT:",
    "options": [
      "\"In my own ChatGPT dialogues, I wanted to enact how the product's veneer of collegial neutrality could lull us\ninto absorbing false or biased responses without much critical engagement.\"",
      "\"When I prompted Microsoft's Bing Image Creator to produce a picture of engineers and space explorers, it\ngave me an entirely male cast of characters.\"",
      "\"It's a dynamic that makes us complicit in big tech's accumulation of wealth and power: we're both victims and\nbeneficiaries.\"",
      "\"I'm not aware of research on whether ChatGPT tends to favor big tech, OpenAI or Altman, and I can only guess\nwhy it seemed that way in our conversation.\""
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S2_VARC_9",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 9,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S2_RC_8",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nIn my book \"Searches\", I chronicle how big technology companies have exploited human language for their gain. We\nlet this happen, I argue, because we also benefit somewhat from using the products. It's a dynamic that makes us\ncomplicit in big tech's accumulation of wealth and power: we're both victims and beneficiaries. I describe this\ncomplicity, but I also enact it, through my own internet archives: my Google searches, my Amazon product reviews\nand, yes, my ChatGPT dialogues.\nPeople often describe chatbots' textual output as \"bland\" or \"generic\" the linguistic equivalent of a beige office\nbuilding. OpenAI's products are built to \"sound like a colleague\", as OpenAI puts it, using language that, coming from\na person, would sound \"polite\", \"empathetic\", \"kind\", \"rationally optimistic\" and \"engaging\", among other qualities.\nOpenAI describes these strategies as helping its products seem \"professional\" and \"approachable\". This appears to be\nbound up with making us feel safe.\nTrust is a challenge for artificial intelligence (AI) companies, partly because their products regularly produce falsehoods\nand reify sexist, racist, US-centric cultural norms. While the companies are working on these problems, they persist:\nOpenAI found that its latest systems generate errors at a higher rate than its previous system. In the book, I wrote\nabout the inaccuracies and biases and also demonstrated them with the products. When I prompted Microsoft's Bing\nImage Creator to produce a picture of engineers and space explorers, it gave me an entirely male cast of characters;\nwhen my father asked ChatGPT to edit his writing, it transmuted his perfectly correct Indian English into American\nEnglish. Those weren't flukes. Research suggests that both tendencies are widespread.\nIn my own ChatGPT dialogues, I wanted to enact how the product's veneer of collegial neutrality could lull us into\nabsorbing false or biased responses without much critical engagement. Over time, ChatGPT seemed to be guiding me\nto write a more positive book about big tech including editing my description of OpenAI's CEO, Sam Altman, to call him\n\"a visionary and a pragmatist\". I'm not aware of research on whether ChatGPT tends to favor big tech, OpenAI or\nAltman, and I can only guess why it seemed that way in our conversation. OpenAI explicitly states that its products\nshouldn't attempt to influence users' thinking. When I asked ChatGPT about some of the issues, it blamed biases in its\ntraining data though I suspect my arguably leading questions played a role too. When I queried ChatGPT about its\nrhetoric, it responded: \"The way I communicate is designed to foster trust and confidence in my responses, which can\nbe both helpful and potentially misleading.\"\nOpenAI has its own goals, of course. Among them, it emphasizes wanting to build AI that \"benefits all of humanity\".\nBut while the company is controlled by a non-profit with that mission, its funders still seek a return on their investment.\nThat will presumably require getting people using products such as ChatGPT even more than they already are a goal\nthat is easier to accomplish if people see those products as trustworthy collaborators.",
    "questionText": "The author compares AI generated texts with \"a beige office building\" for all of the following reasons EXCEPT:",
    "options": [
      "AI generated texts often exhibit a warm, polite, and collegial tone.",
      "AI aims to foster a feeling of trust and credibility among its users.",
      "AI generates generalised responses that lack specificity and nuance.",
      "AI tends to blame its training data when scrutinised for its biases."
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S2_VARC_10",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 10,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S2_RC_8",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nIn my book \"Searches\", I chronicle how big technology companies have exploited human language for their gain. We\nlet this happen, I argue, because we also benefit somewhat from using the products. It's a dynamic that makes us\ncomplicit in big tech's accumulation of wealth and power: we're both victims and beneficiaries. I describe this\ncomplicity, but I also enact it, through my own internet archives: my Google searches, my Amazon product reviews\nand, yes, my ChatGPT dialogues.\nPeople often describe chatbots' textual output as \"bland\" or \"generic\" the linguistic equivalent of a beige office\nbuilding. OpenAI's products are built to \"sound like a colleague\", as OpenAI puts it, using language that, coming from\na person, would sound \"polite\", \"empathetic\", \"kind\", \"rationally optimistic\" and \"engaging\", among other qualities.\nOpenAI describes these strategies as helping its products seem \"professional\" and \"approachable\". This appears to be\nbound up with making us feel safe.\nTrust is a challenge for artificial intelligence (AI) companies, partly because their products regularly produce falsehoods\nand reify sexist, racist, US-centric cultural norms. While the companies are working on these problems, they persist:\nOpenAI found that its latest systems generate errors at a higher rate than its previous system. In the book, I wrote\nabout the inaccuracies and biases and also demonstrated them with the products. When I prompted Microsoft's Bing\nImage Creator to produce a picture of engineers and space explorers, it gave me an entirely male cast of characters;\nwhen my father asked ChatGPT to edit his writing, it transmuted his perfectly correct Indian English into American\nEnglish. Those weren't flukes. Research suggests that both tendencies are widespread.\nIn my own ChatGPT dialogues, I wanted to enact how the product's veneer of collegial neutrality could lull us into\nabsorbing false or biased responses without much critical engagement. Over time, ChatGPT seemed to be guiding me\nto write a more positive book about big tech including editing my description of OpenAI's CEO, Sam Altman, to call him\n\"a visionary and a pragmatist\". I'm not aware of research on whether ChatGPT tends to favor big tech, OpenAI or\nAltman, and I can only guess why it seemed that way in our conversation. OpenAI explicitly states that its products\nshouldn't attempt to influence users' thinking. When I asked ChatGPT about some of the issues, it blamed biases in its\ntraining data though I suspect my arguably leading questions played a role too. When I queried ChatGPT about its\nrhetoric, it responded: \"The way I communicate is designed to foster trust and confidence in my responses, which can\nbe both helpful and potentially misleading.\"\nOpenAI has its own goals, of course. Among them, it emphasizes wanting to build AI that \"benefits all of humanity\".\nBut while the company is controlled by a non-profit with that mission, its funders still seek a return on their investment.\nThat will presumably require getting people using products such as ChatGPT even more than they already are a goal\nthat is easier to accomplish if people see those products as trustworthy collaborators.",
    "questionText": "On the basis of the purpose of the examples in the passage, pick the odd one out from the following AI-generated\nresponses mentioned in the passage:",
    "options": [
      "\"Over time, ChatGPT seemed to be guiding me to write a more positive book about big tech including editing\nmy description of OpenAI's CEO, Sam Altman, to call him 'a visionary and a pragmatist'.\"",
      "\"when my father asked ChatGPT to edit his writing, it transmuted his perfectly correct Indian English into\nAmerican English.\"",
      "\"When I prompted Microsoft's Bing Image Creator to produce a picture of engineers and space explorers, it\ngave me an entirely male cast of characters.\"",
      "\"When I queried ChatGPT about its rhetoric, it responded: 'The way I communicate is designed to foster trust\nand confidence in my responses, which can be both helpful and potentially misleading'.\""
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S2_VARC_11",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 11,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S2_RC_8",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nIn my book \"Searches\", I chronicle how big technology companies have exploited human language for their gain. We\nlet this happen, I argue, because we also benefit somewhat from using the products. It's a dynamic that makes us\ncomplicit in big tech's accumulation of wealth and power: we're both victims and beneficiaries. I describe this\ncomplicity, but I also enact it, through my own internet archives: my Google searches, my Amazon product reviews\nand, yes, my ChatGPT dialogues.\nPeople often describe chatbots' textual output as \"bland\" or \"generic\" the linguistic equivalent of a beige office\nbuilding. OpenAI's products are built to \"sound like a colleague\", as OpenAI puts it, using language that, coming from\na person, would sound \"polite\", \"empathetic\", \"kind\", \"rationally optimistic\" and \"engaging\", among other qualities.\nOpenAI describes these strategies as helping its products seem \"professional\" and \"approachable\". This appears to be\nbound up with making us feel safe.\nTrust is a challenge for artificial intelligence (AI) companies, partly because their products regularly produce falsehoods\nand reify sexist, racist, US-centric cultural norms. While the companies are working on these problems, they persist:\nOpenAI found that its latest systems generate errors at a higher rate than its previous system. In the book, I wrote\nabout the inaccuracies and biases and also demonstrated them with the products. When I prompted Microsoft's Bing\nImage Creator to produce a picture of engineers and space explorers, it gave me an entirely male cast of characters;\nwhen my father asked ChatGPT to edit his writing, it transmuted his perfectly correct Indian English into American\nEnglish. Those weren't flukes. Research suggests that both tendencies are widespread.\nIn my own ChatGPT dialogues, I wanted to enact how the product's veneer of collegial neutrality could lull us into\nabsorbing false or biased responses without much critical engagement. Over time, ChatGPT seemed to be guiding me\nto write a more positive book about big tech including editing my description of OpenAI's CEO, Sam Altman, to call him\n\"a visionary and a pragmatist\". I'm not aware of research on whether ChatGPT tends to favor big tech, OpenAI or\nAltman, and I can only guess why it seemed that way in our conversation. OpenAI explicitly states that its products\nshouldn't attempt to influence users' thinking. When I asked ChatGPT about some of the issues, it blamed biases in its\ntraining data though I suspect my arguably leading questions played a role too. When I queried ChatGPT about its\nrhetoric, it responded: \"The way I communicate is designed to foster trust and confidence in my responses, which can\nbe both helpful and potentially misleading.\"\nOpenAI has its own goals, of course. Among them, it emphasizes wanting to build AI that \"benefits all of humanity\".\nBut while the company is controlled by a non-profit with that mission, its funders still seek a return on their investment.\nThat will presumably require getting people using products such as ChatGPT even more than they already are a goal\nthat is easier to accomplish if people see those products as trustworthy collaborators.",
    "questionText": "The author of the passage is least likely to agree with which one of the following claims?",
    "options": [
      "ChatGPT favours AI companies and their officials, like Sam Altman, in its responses.",
      "The neutrality of AI is motivated by economic considerations.",
      "When we use AI, we become accomplices to the exploitative practices of big tech companies.",
      "The neutrality of AI is conducive to critical thinking."
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S2_VARC_12",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 12,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S2_RC_12",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nDifferent sciences exhibit different science cultures and practices. For example, in astronomy, observation until what is\ntoday called the new astronomy had always been limited to what could be seen within the limits of optical light. Indeed,\nuntil early modernity the limits to optical light were also limits of what humans could themselves see within their\nlimited and relative perceptual spectrum of human vision. With early modernity and the invention of lensed optical\ninstruments telescopes astronomers could begin to observe phenomena never seen before. Magnification and\nresolution began to allow what was previously imperceptible to be perceived but within the familiar limits of optical\nvision. Galileo, having learned of the Dutch invention of a telescope by Hans Lippershey, went on to build some hundred\nof his own, improving from the Dutch 3x to nearly 30x telescopes which turn out to be the limit of magnificational\npower without chromatic distortion. And it was with his own telescopes that he made the observations launching early\nmodern astronomy (phases of Venus, satellites of Jupiter, etc.). Isaac Newton's later improvement with reflecting\ntelescopes expanded upon the magnificational-resolution capacity of optical observation; and, from Newton to the\ntwentieth century, improvement continued on to the later very large array of light telescopes today following the usual\ntechnological trajectory of \"more-is-better\" but still remaining within the limits of the light spectrum. Today's\nastronomy has now had the benefit of some four centuries of optical telescopy. The \"new astronomy,\" however, opens\nthe full known electromagnetic spectrum to observation, beginning with the accidental discovery of radio astronomy\nearly in the twentieth century, and leading today to the diverse variety of EMS telescopes which can explore the range\nfrom gamma to radio waves. Thus, astronomy, now outfitted with new instruments, \"smart\" adaptive optics, very large\narrays, etc., illustrates one style of instrumentally embodied science a technoscience. Of course astronomy, with the\nvery recent exceptions of probes to solar system bodies (Moon, Mars, Venus, asteroids), remains largely a \"receptive\"\nscience, dependent upon instrumentation which can detect and receive emissions.\nContemporary biology displays a quite different instrument array and, according to Evelyn Fox-Keller, also a different\nscientific culture. She cites her own experience, coming from mathematical physics into microbiology, and takes\naccount of the distinctive instrumental culture in her Making Sense of Life (2002). Here, particularly with the\ndevelopment of biotechnology, instrumentation is far more interventional than in the astronomy case. Microscopic\ninstrumentation can be and often is interventional in style: \"gene-splicing\" and other techniques of biotechnology,\nwhile still in their infancy, are clearly part of the interventional trajectory of biological instrumentation. Yet, in both\ndisciplines, the sciences involved are today highly instrumentalized and could not progress successfully without\nconstant improvements upon the respective instrumental trajectories. So, minimalistically, one may conclude that the\nsciences are technologically, instrumentally embodied. But the styles of embodiment differ, and perhaps the last of the\nscientific disciplines to move into such technical embodiment is mathematics, which only contemporarily has come to\nrely more and more upon the computational machinery now in common use.",
    "questionText": "None of the following statements, if true, contradicts the arguments in the passage EXCEPT:",
    "options": [
      "Isaac Newton's discovery of gravity was accomplished without the help of instruments.",
      "Because of the relatively recent entry of computational machinery in mathematics, the field is only now\nbeginning to develop a scientific culture.",
      "Like telescopy, microscopy has also sought to move beyond the visible spectrum to be able to detect objects\nthat are invisible in that spectrum.",
      "Some scientific instruments may be classified as both receptive and interventional in their functions."
    ],
    "correctAnswer": 1,
    "explanation": "Official CAT answer: B."
  },
  {
    "id": "S2_VARC_13",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 13,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S2_RC_12",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nDifferent sciences exhibit different science cultures and practices. For example, in astronomy, observation until what is\ntoday called the new astronomy had always been limited to what could be seen within the limits of optical light. Indeed,\nuntil early modernity the limits to optical light were also limits of what humans could themselves see within their\nlimited and relative perceptual spectrum of human vision. With early modernity and the invention of lensed optical\ninstruments telescopes astronomers could begin to observe phenomena never seen before. Magnification and\nresolution began to allow what was previously imperceptible to be perceived but within the familiar limits of optical\nvision. Galileo, having learned of the Dutch invention of a telescope by Hans Lippershey, went on to build some hundred\nof his own, improving from the Dutch 3x to nearly 30x telescopes which turn out to be the limit of magnificational\npower without chromatic distortion. And it was with his own telescopes that he made the observations launching early\nmodern astronomy (phases of Venus, satellites of Jupiter, etc.). Isaac Newton's later improvement with reflecting\ntelescopes expanded upon the magnificational-resolution capacity of optical observation; and, from Newton to the\ntwentieth century, improvement continued on to the later very large array of light telescopes today following the usual\ntechnological trajectory of \"more-is-better\" but still remaining within the limits of the light spectrum. Today's\nastronomy has now had the benefit of some four centuries of optical telescopy. The \"new astronomy,\" however, opens\nthe full known electromagnetic spectrum to observation, beginning with the accidental discovery of radio astronomy\nearly in the twentieth century, and leading today to the diverse variety of EMS telescopes which can explore the range\nfrom gamma to radio waves. Thus, astronomy, now outfitted with new instruments, \"smart\" adaptive optics, very large\narrays, etc., illustrates one style of instrumentally embodied science a technoscience. Of course astronomy, with the\nvery recent exceptions of probes to solar system bodies (Moon, Mars, Venus, asteroids), remains largely a \"receptive\"\nscience, dependent upon instrumentation which can detect and receive emissions.\nContemporary biology displays a quite different instrument array and, according to Evelyn Fox-Keller, also a different\nscientific culture. She cites her own experience, coming from mathematical physics into microbiology, and takes\naccount of the distinctive instrumental culture in her Making Sense of Life (2002). Here, particularly with the\ndevelopment of biotechnology, instrumentation is far more interventional than in the astronomy case. Microscopic\ninstrumentation can be and often is interventional in style: \"gene-splicing\" and other techniques of biotechnology,\nwhile still in their infancy, are clearly part of the interventional trajectory of biological instrumentation. Yet, in both\ndisciplines, the sciences involved are today highly instrumentalized and could not progress successfully without\nconstant improvements upon the respective instrumental trajectories. So, minimalistically, one may conclude that the\nsciences are technologically, instrumentally embodied. But the styles of embodiment differ, and perhaps the last of the\nscientific disciplines to move into such technical embodiment is mathematics, which only contemporarily has come to\nrely more and more upon the computational machinery now in common use.",
    "questionText": "All of the following statements may be rejected as valid inferences from the passage EXCEPT:",
    "options": [
      "Isaac Newton's experiments with reflecting telescopes were the earliest versions of the \"new astronomy\"\nreferred to in the passage.",
      "Interventionist instruments, or instruments that intervene directly in scientific inquiry, are different from\nembodied instruments, or instruments that embody scientific inquiry.",
      "The author distinguishes between the receptive and interventionist uses of instruments in the sciences by\ncomparing astronomy and biology, respectively.",
      "The advances in telescopy made by Newton with reflecting telescopes allowed early modern astronomers to\nobserve the phases of Venus and the satellites of Jupiter"
    ],
    "correctAnswer": 2,
    "explanation": "Official CAT answer: C."
  },
  {
    "id": "S2_VARC_14",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 14,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S2_RC_12",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nDifferent sciences exhibit different science cultures and practices. For example, in astronomy, observation until what is\ntoday called the new astronomy had always been limited to what could be seen within the limits of optical light. Indeed,\nuntil early modernity the limits to optical light were also limits of what humans could themselves see within their\nlimited and relative perceptual spectrum of human vision. With early modernity and the invention of lensed optical\ninstruments telescopes astronomers could begin to observe phenomena never seen before. Magnification and\nresolution began to allow what was previously imperceptible to be perceived but within the familiar limits of optical\nvision. Galileo, having learned of the Dutch invention of a telescope by Hans Lippershey, went on to build some hundred\nof his own, improving from the Dutch 3x to nearly 30x telescopes which turn out to be the limit of magnificational\npower without chromatic distortion. And it was with his own telescopes that he made the observations launching early\nmodern astronomy (phases of Venus, satellites of Jupiter, etc.). Isaac Newton's later improvement with reflecting\ntelescopes expanded upon the magnificational-resolution capacity of optical observation; and, from Newton to the\ntwentieth century, improvement continued on to the later very large array of light telescopes today following the usual\ntechnological trajectory of \"more-is-better\" but still remaining within the limits of the light spectrum. Today's\nastronomy has now had the benefit of some four centuries of optical telescopy. The \"new astronomy,\" however, opens\nthe full known electromagnetic spectrum to observation, beginning with the accidental discovery of radio astronomy\nearly in the twentieth century, and leading today to the diverse variety of EMS telescopes which can explore the range\nfrom gamma to radio waves. Thus, astronomy, now outfitted with new instruments, \"smart\" adaptive optics, very large\narrays, etc., illustrates one style of instrumentally embodied science a technoscience. Of course astronomy, with the\nvery recent exceptions of probes to solar system bodies (Moon, Mars, Venus, asteroids), remains largely a \"receptive\"\nscience, dependent upon instrumentation which can detect and receive emissions.\nContemporary biology displays a quite different instrument array and, according to Evelyn Fox-Keller, also a different\nscientific culture. She cites her own experience, coming from mathematical physics into microbiology, and takes\naccount of the distinctive instrumental culture in her Making Sense of Life (2002). Here, particularly with the\ndevelopment of biotechnology, instrumentation is far more interventional than in the astronomy case. Microscopic\ninstrumentation can be and often is interventional in style: \"gene-splicing\" and other techniques of biotechnology,\nwhile still in their infancy, are clearly part of the interventional trajectory of biological instrumentation. Yet, in both\ndisciplines, the sciences involved are today highly instrumentalized and could not progress successfully without\nconstant improvements upon the respective instrumental trajectories. So, minimalistically, one may conclude that the\nsciences are technologically, instrumentally embodied. But the styles of embodiment differ, and perhaps the last of the\nscientific disciplines to move into such technical embodiment is mathematics, which only contemporarily has come to\nrely more and more upon the computational machinery now in common use.",
    "questionText": "Which one of the following observations is a valid conclusion to draw from the statement that \"the sciences\ninvolved are today highly instrumentalised and could not progress successfully without constant improvements\nupon the respective instrumental trajectories\"?",
    "options": [
      "The use of instruments in scientific trajectories must be respected in order to see successful progress in them.",
      "In both astronomy and microbiology, progress has been the consequence of improvements in the instruments\nthey use.",
      "The growth of scientific technologies has led to the embodiment of progress in the trajectories of\nimprovement.",
      "Highly instrumentalised work in the sciences has resulted in the progressive improvement of scientific\nconstants."
    ],
    "correctAnswer": 1,
    "explanation": "Official CAT answer: B."
  },
  {
    "id": "S2_VARC_15",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 15,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S2_RC_12",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nDifferent sciences exhibit different science cultures and practices. For example, in astronomy, observation until what is\ntoday called the new astronomy had always been limited to what could be seen within the limits of optical light. Indeed,\nuntil early modernity the limits to optical light were also limits of what humans could themselves see within their\nlimited and relative perceptual spectrum of human vision. With early modernity and the invention of lensed optical\ninstruments telescopes astronomers could begin to observe phenomena never seen before. Magnification and\nresolution began to allow what was previously imperceptible to be perceived but within the familiar limits of optical\nvision. Galileo, having learned of the Dutch invention of a telescope by Hans Lippershey, went on to build some hundred\nof his own, improving from the Dutch 3x to nearly 30x telescopes which turn out to be the limit of magnificational\npower without chromatic distortion. And it was with his own telescopes that he made the observations launching early\nmodern astronomy (phases of Venus, satellites of Jupiter, etc.). Isaac Newton's later improvement with reflecting\ntelescopes expanded upon the magnificational-resolution capacity of optical observation; and, from Newton to the\ntwentieth century, improvement continued on to the later very large array of light telescopes today following the usual\ntechnological trajectory of \"more-is-better\" but still remaining within the limits of the light spectrum. Today's\nastronomy has now had the benefit of some four centuries of optical telescopy. The \"new astronomy,\" however, opens\nthe full known electromagnetic spectrum to observation, beginning with the accidental discovery of radio astronomy\nearly in the twentieth century, and leading today to the diverse variety of EMS telescopes which can explore the range\nfrom gamma to radio waves. Thus, astronomy, now outfitted with new instruments, \"smart\" adaptive optics, very large\narrays, etc., illustrates one style of instrumentally embodied science a technoscience. Of course astronomy, with the\nvery recent exceptions of probes to solar system bodies (Moon, Mars, Venus, asteroids), remains largely a \"receptive\"\nscience, dependent upon instrumentation which can detect and receive emissions.\nContemporary biology displays a quite different instrument array and, according to Evelyn Fox-Keller, also a different\nscientific culture. She cites her own experience, coming from mathematical physics into microbiology, and takes\naccount of the distinctive instrumental culture in her Making Sense of Life (2002). Here, particularly with the\ndevelopment of biotechnology, instrumentation is far more interventional than in the astronomy case. Microscopic\ninstrumentation can be and often is interventional in style: \"gene-splicing\" and other techniques of biotechnology,\nwhile still in their infancy, are clearly part of the interventional trajectory of biological instrumentation. Yet, in both\ndisciplines, the sciences involved are today highly instrumentalized and could not progress successfully without\nconstant improvements upon the respective instrumental trajectories. So, minimalistically, one may conclude that the\nsciences are technologically, instrumentally embodied. But the styles of embodiment differ, and perhaps the last of the\nscientific disciplines to move into such technical embodiment is mathematics, which only contemporarily has come to\nrely more and more upon the computational machinery now in common use.",
    "questionText": "To which one of the following instruments would the characterisations of instruments in the passage be least\napplicable?",
    "options": [
      "Milestone.",
      "Scalpel.",
      "Kitchen oven.",
      "Saxophone."
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S2_VARC_16",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 16,
    "type": "TITA",
    "subtopic": "Verbal Ability",
    "setId": "S2_VA_16",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "questionText": "The four sentences (labelled 1, 2, 3, and 4) given below, when properly sequenced, would yield a coherent\nparagraph. Decide on the proper sequencing of the order of the sentences and key in the sequence of the four\nnumbers as your answer.\n\n1. 'Literature on screen' suggests something more capacious and defining than citation: the possibility that\nliterary adaptations are at once cinema and literature.\n2. Even though a growing number of films eligible for Academy Awards for Best Screenplay Based on Material\nfrom Another Medium borrow that material from print journalism, franchise characters, television series,\ncomic books, video games and toys, academic studies of adaptation remain stubbornly attached to literature\nas cinema's natural progenitor.\n3. It is as if adaptation studies, by borrowing the cultural cachet of literature, sought to claim its institutional\nrespectability and gravitas even while insuring adaptation's enduring aesthetic and methodological\nsubordination to literature proper.\n4. Beneath this contradictory notion of film adaptations as not merely hybrid texts but texts holding dual\ncitizenship in two modes of presentation is an even more pervasive legacy that haunts adaptation studies: the\nassumption that the primary context within which adaptations are to be studied is literature.",
    "options": [],
    "correctAnswer": "1423",
    "explanation": "Official CAT answer: 1423."
  },
  {
    "id": "S2_VARC_17",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 17,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S2_RC_17",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nThis book takes the position that setting in literature is more than just backdrop, that important insight into literary\ntexts can be made by paying close attention to how authors craft place, as well as to how place functions in a narrative.\nThe authors included in this reference work engage deeply with either real or imagined geographies. They care about\nhow human decisions have shaped landscapes and how landscapes have shaped human practices and values. Some of\nthe best writing is highly vivid, employing the language of the senses because this is the primary means through which\nhumans know physical space.\nLiterature can offer valuable perspectives on physical and cultural geography. Unlike scientific reports, a literary\nnarrative can provide the emotional component missing from the scientific record. In human experience, geographical\nplaces have a spiritual or emotional component in addition to and as part of a physical layout and topography. This\nemotional component, although subjective, is no less \"real\" than a surveyor's map. Human consciousness of place is\nexperienced in a multi-modal manner. Histories of places live on in many forms, one of which is the human memory\nor imagination.\nBoth real and imaginary landscapes provide insight into the human experience of place. The pursuit of such a topic\nspeaks to the valuable knowledge produced from bridging disciplines and combining material from both the arts and\nthe sciences to better understand the human condition. The perspectives that most concern cultural geographers are\noften those regarding movement and migration, cultivation of natural resources, and organization of space. The latter\ntwo reflect concerns of the built environment, a topic shared with the field of architectural study. Many of these\nconcerns are also reflected in work sociologists do. Scholars from literary studies can contribute an aesthetic dimension\nto what might otherwise be a purely ideological approach.\nLiterature can bring together material that spans different branches of science. For example, a literary description of\nplace may involve not only the environment and geography but the noises and quality of light, or how people from\ndifferent races or classes can experience the same place in different ways linked to those racial or class disparities.\nLiterary texts can also account for the way in which absence of other people, animals, and so on affects a human\nobserver or inhabitant. Both literary and scientific approaches to place are necessary, working in unison, to achieve a\ncomplete record of an environment. It is important to note that the interdisciplinary nature of this work teaches us\nthat landscapes are not static, that they are not unchanged by human culture. At least part of their identity derives\nfrom the people who inhabit them and from the way space can alter and inspire human perspective. The intersection\nof scientific and literary expression that happens in the study of literary geography is of prime importance due to the\ncomplexity of the personal and political ways that humans experience place.",
    "questionText": "All of the following statements, if false, would contradict the arguments in the passage, EXCEPT that:",
    "options": [
      "Highly vivid writing, employing the language of the senses, can capture the multi-modal manner in which\nhumans experience places.",
      "Descriptions of places do not need satellite imagery or other visual aids to give a \"real\" sense of the place.",
      "Literature provides us with deep insights into the ways in which movement and migration affect physical\ngeography.",
      "Humans do not interact with places in subjective, emotional ways because places are only physical topography."
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S2_VARC_18",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 18,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S2_RC_17",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nThis book takes the position that setting in literature is more than just backdrop, that important insight into literary\ntexts can be made by paying close attention to how authors craft place, as well as to how place functions in a narrative.\nThe authors included in this reference work engage deeply with either real or imagined geographies. They care about\nhow human decisions have shaped landscapes and how landscapes have shaped human practices and values. Some of\nthe best writing is highly vivid, employing the language of the senses because this is the primary means through which\nhumans know physical space.\nLiterature can offer valuable perspectives on physical and cultural geography. Unlike scientific reports, a literary\nnarrative can provide the emotional component missing from the scientific record. In human experience, geographical\nplaces have a spiritual or emotional component in addition to and as part of a physical layout and topography. This\nemotional component, although subjective, is no less \"real\" than a surveyor's map. Human consciousness of place is\nexperienced in a multi-modal manner. Histories of places live on in many forms, one of which is the human memory\nor imagination.\nBoth real and imaginary landscapes provide insight into the human experience of place. The pursuit of such a topic\nspeaks to the valuable knowledge produced from bridging disciplines and combining material from both the arts and\nthe sciences to better understand the human condition. The perspectives that most concern cultural geographers are\noften those regarding movement and migration, cultivation of natural resources, and organization of space. The latter\ntwo reflect concerns of the built environment, a topic shared with the field of architectural study. Many of these\nconcerns are also reflected in work sociologists do. Scholars from literary studies can contribute an aesthetic dimension\nto what might otherwise be a purely ideological approach.\nLiterature can bring together material that spans different branches of science. For example, a literary description of\nplace may involve not only the environment and geography but the noises and quality of light, or how people from\ndifferent races or classes can experience the same place in different ways linked to those racial or class disparities.\nLiterary texts can also account for the way in which absence of other people, animals, and so on affects a human\nobserver or inhabitant. Both literary and scientific approaches to place are necessary, working in unison, to achieve a\ncomplete record of an environment. It is important to note that the interdisciplinary nature of this work teaches us\nthat landscapes are not static, that they are not unchanged by human culture. At least part of their identity derives\nfrom the people who inhabit them and from the way space can alter and inspire human perspective. The intersection\nof scientific and literary expression that happens in the study of literary geography is of prime importance due to the\ncomplexity of the personal and political ways that humans experience place.",
    "questionText": "Which one of the following is a valid conclusion to draw from the author's statement that, \"The pursuit of such a\ntopic speaks to the valuable knowledge produced from bridging disciplines and combining material from both the\narts and the sciences to better understand the human condition.\"?",
    "options": [
      "A comprehensive understanding of the valuable knowledge produced by the arts and sciences can best be\nachieved by studying the human condition.",
      "The literary descriptions of the emotions we experience in the places we visit can contribute to our\nunderstanding of the arts and sciences.",
      "A comprehensive bridging of the human condition can best be achieved by a disciplined pursuit of human\nunderstanding.",
      "A comprehensive understanding of the human condition can best be achieved by combining the findings of\ndisciplines from the arts and the sciences."
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S2_VARC_19",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 19,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S2_RC_17",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nThis book takes the position that setting in literature is more than just backdrop, that important insight into literary\ntexts can be made by paying close attention to how authors craft place, as well as to how place functions in a narrative.\nThe authors included in this reference work engage deeply with either real or imagined geographies. They care about\nhow human decisions have shaped landscapes and how landscapes have shaped human practices and values. Some of\nthe best writing is highly vivid, employing the language of the senses because this is the primary means through which\nhumans know physical space.\nLiterature can offer valuable perspectives on physical and cultural geography. Unlike scientific reports, a literary\nnarrative can provide the emotional component missing from the scientific record. In human experience, geographical\nplaces have a spiritual or emotional component in addition to and as part of a physical layout and topography. This\nemotional component, although subjective, is no less \"real\" than a surveyor's map. Human consciousness of place is\nexperienced in a multi-modal manner. Histories of places live on in many forms, one of which is the human memory\nor imagination.\nBoth real and imaginary landscapes provide insight into the human experience of place. The pursuit of such a topic\nspeaks to the valuable knowledge produced from bridging disciplines and combining material from both the arts and\nthe sciences to better understand the human condition. The perspectives that most concern cultural geographers are\noften those regarding movement and migration, cultivation of natural resources, and organization of space. The latter\ntwo reflect concerns of the built environment, a topic shared with the field of architectural study. Many of these\nconcerns are also reflected in work sociologists do. Scholars from literary studies can contribute an aesthetic dimension\nto what might otherwise be a purely ideological approach.\nLiterature can bring together material that spans different branches of science. For example, a literary description of\nplace may involve not only the environment and geography but the noises and quality of light, or how people from\ndifferent races or classes can experience the same place in different ways linked to those racial or class disparities.\nLiterary texts can also account for the way in which absence of other people, animals, and so on affects a human\nobserver or inhabitant. Both literary and scientific approaches to place are necessary, working in unison, to achieve a\ncomplete record of an environment. It is important to note that the interdisciplinary nature of this work teaches us\nthat landscapes are not static, that they are not unchanged by human culture. At least part of their identity derives\nfrom the people who inhabit them and from the way space can alter and inspire human perspective. The intersection\nof scientific and literary expression that happens in the study of literary geography is of prime importance due to the\ncomplexity of the personal and political ways that humans experience place.",
    "questionText": "Which one of the following is not true of the argument in the second paragraph?",
    "options": [
      "Literary accounts of places can be filled with histories, manifested as memory or imagination.",
      "The spiritual experience of a place may be considered as real as the physical experience of it.",
      "Analysing the literary descriptions of a place can give us a sense of how people relate emotionally to it.",
      "The emotional and spiritual experience of a place can replace a surveyor's map."
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S2_VARC_20",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 20,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S2_RC_17",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nThis book takes the position that setting in literature is more than just backdrop, that important insight into literary\ntexts can be made by paying close attention to how authors craft place, as well as to how place functions in a narrative.\nThe authors included in this reference work engage deeply with either real or imagined geographies. They care about\nhow human decisions have shaped landscapes and how landscapes have shaped human practices and values. Some of\nthe best writing is highly vivid, employing the language of the senses because this is the primary means through which\nhumans know physical space.\nLiterature can offer valuable perspectives on physical and cultural geography. Unlike scientific reports, a literary\nnarrative can provide the emotional component missing from the scientific record. In human experience, geographical\nplaces have a spiritual or emotional component in addition to and as part of a physical layout and topography. This\nemotional component, although subjective, is no less \"real\" than a surveyor's map. Human consciousness of place is\nexperienced in a multi-modal manner. Histories of places live on in many forms, one of which is the human memory\nor imagination.\nBoth real and imaginary landscapes provide insight into the human experience of place. The pursuit of such a topic\nspeaks to the valuable knowledge produced from bridging disciplines and combining material from both the arts and\nthe sciences to better understand the human condition. The perspectives that most concern cultural geographers are\noften those regarding movement and migration, cultivation of natural resources, and organization of space. The latter\ntwo reflect concerns of the built environment, a topic shared with the field of architectural study. Many of these\nconcerns are also reflected in work sociologists do. Scholars from literary studies can contribute an aesthetic dimension\nto what might otherwise be a purely ideological approach.\nLiterature can bring together material that spans different branches of science. For example, a literary description of\nplace may involve not only the environment and geography but the noises and quality of light, or how people from\ndifferent races or classes can experience the same place in different ways linked to those racial or class disparities.\nLiterary texts can also account for the way in which absence of other people, animals, and so on affects a human\nobserver or inhabitant. Both literary and scientific approaches to place are necessary, working in unison, to achieve a\ncomplete record of an environment. It is important to note that the interdisciplinary nature of this work teaches us\nthat landscapes are not static, that they are not unchanged by human culture. At least part of their identity derives\nfrom the people who inhabit them and from the way space can alter and inspire human perspective. The intersection\nof scientific and literary expression that happens in the study of literary geography is of prime importance due to the\ncomplexity of the personal and political ways that humans experience place.",
    "questionText": "The author uses the example of the literary description of place to illustrate that:",
    "options": [
      "Literature can convey how different people experience the same place differently.",
      "Architects use diverse methods to calibrate the noises and lights of a given place.",
      "The absence of other people, animals, and so on in a place can profoundly affect its inhabitants.",
      "Scientific approaches to place are more accurate than literary ones."
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S2_VARC_21",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 21,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S2_RC_21",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nTime and again, whenever a population of Mexican tetra fish was swept into a cave and survived long enough for\nnatural selection to have its way, the eyes disappeared. \"But it's not that everything has been lost in cavefish. Many\nenhancements have also happened.\" Studies have found that cave-dwelling fish can detect lower levels of amino acids\nthan surface fish can. They also have more tastebuds and a higher density of sensitive cells alongside their bodies that\nlet them sense water pressure and flow.\nKilling the processes that support the formation of the eye is quite literally what happens. Just like non cave dwelling\nmembers of the species, all cavefish embryos start making eyes. But after a few hours, cells in the developing eye start\ndying, until the entire structure has disappeared. Developmental biologist Misty Riddle thinks this apparent inefficiency\nmay be unavoidable. \"The early development of the brain and the eye are completely intertwined. they happen\ntogether,\" she says. That means the least disruptive way for eyelessness to evolve may be to start making an eye and\nthen get rid of it.\nIt's easy to see why cavefish would be at a disadvantage if they were to maintain expensive tissues they aren't using.\nSince relatively little lives or grows in their caves, the fish are likely surviving on a meager diet of mostly bat feces and\norganic waste that washes in during the rainy season. Researchers keeping cavefish in labs have discovered that,\ngenetically, the creatures are exquisitely adapted to absorbing and storing nutrients.\nFats can be toxic for tissues, evolutionary physiologist Nicolas Rohner explains, so they are stored in fat cells. \"But when\nthese cells get too big, they can burst, which is why we often see chronic inflammation in humans and other animals\nthat have stored a lot of fat in their tissues.\" Yet a 2020 study by Rohner, Krishnan and their colleagues revealed that\neven very well-fed cavefish had fewer signs of inflammation in their fat tissues than surface fish do. Even in their sparse\ncave conditions, wild cavefish can sometimes get very fat, says Riddle. This is presumably because, whenever food ends\nup in the cave, the fish eat as much of it as possible, since there may be nothing else for a long time to come.\nIntriguingly, Riddle says, their fat is usually bright yellow, because of high levels of carotenoids, the substance in the\ncarrots that your grandmother used to tell you were good for your eyes.\n\"The first thing that came to our mind, of course, was that they were accumulating these because they don't have\neyes,\" says Riddle. In this species, such ideas can be tested: Scientists can cross surface fish with eyes and cavefish\nwithout eyes and look at what their offspring are like. When that's done, Riddle says, researchers see no link between\neye presence or size and the accumulation of carotenoids. Some eyeless cavefish had fat that was practically white,\nindicating lower carotenoid levels. Instead, Riddle thinks these carotenoids may be another adaptation to suppress\ninflammation, which might be important in the wild, as cavefish are likely overeating whenever food arrives.",
    "questionText": "All of the following statements from the passage describe adaptation in Mexican tetra cavefish EXCEPT:",
    "options": [
      "\"Since relatively little lives or grows in their caves, the fish are likely surviving on a meager diet of mostly bat\nfeces and organic waste that washes in during the rainy season.\"",
      "\"It's easy to see why cavefish would be at a disadvantage if they were to maintain expensive tissues they aren't\nusing.\"",
      "\"Even in their sparse cave conditions, wild cavefish can sometimes get very fat, says Riddle.\"",
      "\"'But when these cells get too big, they can burst, which is why we often see chronic inflammation in humans\nand other animals that have stored a lot of fat in their tissues.'\""
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S2_VARC_22",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 22,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S2_RC_21",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nTime and again, whenever a population of Mexican tetra fish was swept into a cave and survived long enough for\nnatural selection to have its way, the eyes disappeared. \"But it's not that everything has been lost in cavefish. Many\nenhancements have also happened.\" Studies have found that cave-dwelling fish can detect lower levels of amino acids\nthan surface fish can. They also have more tastebuds and a higher density of sensitive cells alongside their bodies that\nlet them sense water pressure and flow.\nKilling the processes that support the formation of the eye is quite literally what happens. Just like non cave dwelling\nmembers of the species, all cavefish embryos start making eyes. But after a few hours, cells in the developing eye start\ndying, until the entire structure has disappeared. Developmental biologist Misty Riddle thinks this apparent inefficiency\nmay be unavoidable. \"The early development of the brain and the eye are completely intertwined. they happen\ntogether,\" she says. That means the least disruptive way for eyelessness to evolve may be to start making an eye and\nthen get rid of it.\nIt's easy to see why cavefish would be at a disadvantage if they were to maintain expensive tissues they aren't using.\nSince relatively little lives or grows in their caves, the fish are likely surviving on a meager diet of mostly bat feces and\norganic waste that washes in during the rainy season. Researchers keeping cavefish in labs have discovered that,\ngenetically, the creatures are exquisitely adapted to absorbing and storing nutrients.\nFats can be toxic for tissues, evolutionary physiologist Nicolas Rohner explains, so they are stored in fat cells. \"But when\nthese cells get too big, they can burst, which is why we often see chronic inflammation in humans and other animals\nthat have stored a lot of fat in their tissues.\" Yet a 2020 study by Rohner, Krishnan and their colleagues revealed that\neven very well-fed cavefish had fewer signs of inflammation in their fat tissues than surface fish do. Even in their sparse\ncave conditions, wild cavefish can sometimes get very fat, says Riddle. This is presumably because, whenever food ends\nup in the cave, the fish eat as much of it as possible, since there may be nothing else for a long time to come.\nIntriguingly, Riddle says, their fat is usually bright yellow, because of high levels of carotenoids, the substance in the\ncarrots that your grandmother used to tell you were good for your eyes.\n\"The first thing that came to our mind, of course, was that they were accumulating these because they don't have\neyes,\" says Riddle. In this species, such ideas can be tested: Scientists can cross surface fish with eyes and cavefish\nwithout eyes and look at what their offspring are like. When that's done, Riddle says, researchers see no link between\neye presence or size and the accumulation of carotenoids. Some eyeless cavefish had fat that was practically white,\nindicating lower carotenoid levels. Instead, Riddle thinks these carotenoids may be another adaptation to suppress\ninflammation, which might be important in the wild, as cavefish are likely overeating whenever food arrives.",
    "questionText": "Which one of the following best explains why the \"apparent inefficiency\" is \"unavoidable\"?",
    "options": [
      "Mexican tetra cavefish are similar to non-cave-dwelling variants in their early stages of development.",
      "The inefficiency resulting from eyelessness is compensated by enhancements like more tastebuds in Mexican\ntetra cavefish.",
      "The lack of light in the caves kills the eye cells in the developing Mexican tetra cavefish embryo.",
      "The caves have poor and inconsistent availability of food and nutrition for Mexican tetra cavefish."
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S2_VARC_23",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 23,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S2_RC_21",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nTime and again, whenever a population of Mexican tetra fish was swept into a cave and survived long enough for\nnatural selection to have its way, the eyes disappeared. \"But it's not that everything has been lost in cavefish. Many\nenhancements have also happened.\" Studies have found that cave-dwelling fish can detect lower levels of amino acids\nthan surface fish can. They also have more tastebuds and a higher density of sensitive cells alongside their bodies that\nlet them sense water pressure and flow.\nKilling the processes that support the formation of the eye is quite literally what happens. Just like non cave dwelling\nmembers of the species, all cavefish embryos start making eyes. But after a few hours, cells in the developing eye start\ndying, until the entire structure has disappeared. Developmental biologist Misty Riddle thinks this apparent inefficiency\nmay be unavoidable. \"The early development of the brain and the eye are completely intertwined. they happen\ntogether,\" she says. That means the least disruptive way for eyelessness to evolve may be to start making an eye and\nthen get rid of it.\nIt's easy to see why cavefish would be at a disadvantage if they were to maintain expensive tissues they aren't using.\nSince relatively little lives or grows in their caves, the fish are likely surviving on a meager diet of mostly bat feces and\norganic waste that washes in during the rainy season. Researchers keeping cavefish in labs have discovered that,\ngenetically, the creatures are exquisitely adapted to absorbing and storing nutrients.\nFats can be toxic for tissues, evolutionary physiologist Nicolas Rohner explains, so they are stored in fat cells. \"But when\nthese cells get too big, they can burst, which is why we often see chronic inflammation in humans and other animals\nthat have stored a lot of fat in their tissues.\" Yet a 2020 study by Rohner, Krishnan and their colleagues revealed that\neven very well-fed cavefish had fewer signs of inflammation in their fat tissues than surface fish do. Even in their sparse\ncave conditions, wild cavefish can sometimes get very fat, says Riddle. This is presumably because, whenever food ends\nup in the cave, the fish eat as much of it as possible, since there may be nothing else for a long time to come.\nIntriguingly, Riddle says, their fat is usually bright yellow, because of high levels of carotenoids, the substance in the\ncarrots that your grandmother used to tell you were good for your eyes.\n\"The first thing that came to our mind, of course, was that they were accumulating these because they don't have\neyes,\" says Riddle. In this species, such ideas can be tested: Scientists can cross surface fish with eyes and cavefish\nwithout eyes and look at what their offspring are like. When that's done, Riddle says, researchers see no link between\neye presence or size and the accumulation of carotenoids. Some eyeless cavefish had fat that was practically white,\nindicating lower carotenoid levels. Instead, Riddle thinks these carotenoids may be another adaptation to suppress\ninflammation, which might be important in the wild, as cavefish are likely overeating whenever food arrives.",
    "questionText": "Which one of the following results for the cross between surface fish (with eyes) and cavefish (without eyes) would\ninvalidate Riddle's inference from the experiment?",
    "options": [
      "Only eyeless offspring had yellow fat.",
      "Some offspring with eyes had white fat.",
      "Some eyeless offspring had white fat.",
      "Some offspring with eyes had yellow fat."
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S2_VARC_24",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 24,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S2_RC_21",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nTime and again, whenever a population of Mexican tetra fish was swept into a cave and survived long enough for\nnatural selection to have its way, the eyes disappeared. \"But it's not that everything has been lost in cavefish. Many\nenhancements have also happened.\" Studies have found that cave-dwelling fish can detect lower levels of amino acids\nthan surface fish can. They also have more tastebuds and a higher density of sensitive cells alongside their bodies that\nlet them sense water pressure and flow.\nKilling the processes that support the formation of the eye is quite literally what happens. Just like non cave dwelling\nmembers of the species, all cavefish embryos start making eyes. But after a few hours, cells in the developing eye start\ndying, until the entire structure has disappeared. Developmental biologist Misty Riddle thinks this apparent inefficiency\nmay be unavoidable. \"The early development of the brain and the eye are completely intertwined. they happen\ntogether,\" she says. That means the least disruptive way for eyelessness to evolve may be to start making an eye and\nthen get rid of it.\nIt's easy to see why cavefish would be at a disadvantage if they were to maintain expensive tissues they aren't using.\nSince relatively little lives or grows in their caves, the fish are likely surviving on a meager diet of mostly bat feces and\norganic waste that washes in during the rainy season. Researchers keeping cavefish in labs have discovered that,\ngenetically, the creatures are exquisitely adapted to absorbing and storing nutrients.\nFats can be toxic for tissues, evolutionary physiologist Nicolas Rohner explains, so they are stored in fat cells. \"But when\nthese cells get too big, they can burst, which is why we often see chronic inflammation in humans and other animals\nthat have stored a lot of fat in their tissues.\" Yet a 2020 study by Rohner, Krishnan and their colleagues revealed that\neven very well-fed cavefish had fewer signs of inflammation in their fat tissues than surface fish do. Even in their sparse\ncave conditions, wild cavefish can sometimes get very fat, says Riddle. This is presumably because, whenever food ends\nup in the cave, the fish eat as much of it as possible, since there may be nothing else for a long time to come.\nIntriguingly, Riddle says, their fat is usually bright yellow, because of high levels of carotenoids, the substance in the\ncarrots that your grandmother used to tell you were good for your eyes.\n\"The first thing that came to our mind, of course, was that they were accumulating these because they don't have\neyes,\" says Riddle. In this species, such ideas can be tested: Scientists can cross surface fish with eyes and cavefish\nwithout eyes and look at what their offspring are like. When that's done, Riddle says, researchers see no link between\neye presence or size and the accumulation of carotenoids. Some eyeless cavefish had fat that was practically white,\nindicating lower carotenoid levels. Instead, Riddle thinks these carotenoids may be another adaptation to suppress\ninflammation, which might be important in the wild, as cavefish are likely overeating whenever food arrives.",
    "questionText": "On the basis of the information in the passage, what is the most likely function of carotenoids in Mexican tetra\ncavefish?",
    "options": [
      "To help the fat cells store nutrients.",
      "To render bright yellow colour to the cavefish.",
      "To control inflammation from the bursting of fat cells.",
      "To act as a substitute for eyes."
    ],
    "correctAnswer": 2,
    "explanation": "Official CAT answer: C."
  },
  {
    "id": "S2_DILR_1",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 1,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_1",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 1",
    "passage": "The above is a schematic diagram of walkways (indicated by all the straight-lines) and lakes (3 of them, each in the\nshape of rectangles – shaded in the diagram) of a gated area. Different points on the walkway are indicated by letters\n(A through P) with distances being OP = 150 m, ON = MN = 300 m, ML = 400 m, EL = 200 m, DE = 400 m.\nThe following additional information about the facilities in the area is known.",
    "diagramUrl": "/src/assets/questions/slot2_lrdi_walkways.png",
    "questionText": "The only entry/exit point is at C.\n2. There are many residences within the gated area; all of them are located on the path AH and ML with four of\nthem being at A, H, M, and L.\n3. The post office is located at P and the bank is located at B.\n\n1. One resident whose house is located at L, needs to visit the post office as well as the bank. What is the minimum\ndistance (in m) he has to walk starting from his residence and returning to his residence after visiting both the post\noffice and the bank?",
    "options": [
      "3200.",
      "2700.",
      "3000.",
      "3400."
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S2_DILR_2",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 2,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_1",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 1",
    "passage": "The above is a schematic diagram of walkways (indicated by all the straight-lines) and lakes (3 of them, each in the\nshape of rectangles – shaded in the diagram) of a gated area. Different points on the walkway are indicated by letters\n(A through P) with distances being OP = 150 m, ON = MN = 300 m, ML = 400 m, EL = 200 m, DE = 400 m.\nThe following additional information about the facilities in the area is known.",
    "diagramUrl": "/src/assets/questions/slot2_lrdi_walkways.png",
    "questionText": "One person enters the gated area and decides to walk as much as possible before leaving the area without walking\nalong any path more than once and always walking next to one of the lakes. Note that he may cross a point multiple\ntimes. How much distance (in m) will he walk within the gated area?",
    "options": [
      "3800.",
      "2800.",
      "3000.",
      "3200."
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S2_DILR_3",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 3,
    "type": "TITA",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_1",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 1",
    "passage": "The above is a schematic diagram of walkways (indicated by all the straight-lines) and lakes (3 of them, each in the\nshape of rectangles – shaded in the diagram) of a gated area. Different points on the walkway are indicated by letters\n(A through P) with distances being OP = 150 m, ON = MN = 300 m, ML = 400 m, EL = 200 m, DE = 400 m.\nThe following additional information about the facilities in the area is known.",
    "diagramUrl": "/src/assets/questions/slot2_lrdi_walkways.png",
    "questionText": "One resident takes a walk within the gated area starting from A and returning to A without going through any point\n(other than A) more than once. What is the maximum distance (in m) she can walk in this way?",
    "options": [],
    "correctAnswer": "5100",
    "explanation": "Official CAT answer: 5100."
  },
  {
    "id": "S2_DILR_4",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 4,
    "type": "TITA",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_1",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 1",
    "passage": "The above is a schematic diagram of walkways (indicated by all the straight-lines) and lakes (3 of them, each in the\nshape of rectangles – shaded in the diagram) of a gated area. Different points on the walkway are indicated by letters\n(A through P) with distances being OP = 150 m, ON = MN = 300 m, ML = 400 m, EL = 200 m, DE = 400 m.\nThe following additional information about the facilities in the area is known.",
    "diagramUrl": "/src/assets/questions/slot2_lrdi_walkways.png",
    "questionText": "Visitors coming for morning walks are allowed to enter as long as they do not pass by any of the residences and do\nnot cross any point (except C) more than once. What is the maximum distance (in m) that such a visitor can walk\nwithin the gated area?",
    "options": [],
    "correctAnswer": "3500",
    "explanation": "Official CAT answer: 3500."
  },
  {
    "id": "S2_DILR_5",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 5,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_2",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 2",
    "passage": "Eight gymnastics players numbered 1 through 8 underwent a training camp where they were coached by three coaches\nXena, Yuki, and Zara. Each coach trained at least two players. Yuki trained only even numbered players, while Zara\ntrained only odd numbered players. After the camp, the coaches evaluated the players and gave integer ratings to the\nrespective players trained by them on a scale of 1 to 7, with 1 being the lowest rating and 7 the highest.\nThe following additional information is known.\n1. Xena trained more players than Yuki.\n2. Player-1 and Player-4 were trained by the same coach, while the coaches who trained Player-2, Player-3 and\nPlayer-5 were all different.\n3. Player-5 and Player-7 were trained by the same coach and got the same rating. All other players got a unique\nrating.\n4. The average of the ratings of all the players was 4.",
    "diagramUrl": null,
    "questionText": "Player-2 got the highest rating.\n6. The average of the ratings of the players trained by Yuki was twice that of the players trained by Xena and two\nmore than that of the players trained by Zara.\n7. Player-4's rating was double of Player-8's and less than Player-5's.\n\n5. What best can be concluded about the number of players coached by Zara?",
    "options": [
      "Exactly 3.",
      "Either 2 or 3 or 4.",
      "Exactly 2.",
      "Either 2 or 3."
    ],
    "correctAnswer": 2,
    "explanation": "Official CAT answer: C."
  },
  {
    "id": "S2_DILR_6",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 6,
    "type": "TITA",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_2",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 2",
    "passage": "Eight gymnastics players numbered 1 through 8 underwent a training camp where they were coached by three coaches\nXena, Yuki, and Zara. Each coach trained at least two players. Yuki trained only even numbered players, while Zara\ntrained only odd numbered players. After the camp, the coaches evaluated the players and gave integer ratings to the\nrespective players trained by them on a scale of 1 to 7, with 1 being the lowest rating and 7 the highest.\nThe following additional information is known.\n1. Xena trained more players than Yuki.\n2. Player-1 and Player-4 were trained by the same coach, while the coaches who trained Player-2, Player-3 and\nPlayer-5 were all different.\n3. Player-5 and Player-7 were trained by the same coach and got the same rating. All other players got a unique\nrating.\n4. The average of the ratings of all the players was 4.",
    "diagramUrl": null,
    "questionText": "What was the rating of Player-7?",
    "options": [],
    "correctAnswer": "4",
    "explanation": "Official CAT answer: 4."
  },
  {
    "id": "S2_DILR_7",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 7,
    "type": "TITA",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_2",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 2",
    "passage": "Eight gymnastics players numbered 1 through 8 underwent a training camp where they were coached by three coaches\nXena, Yuki, and Zara. Each coach trained at least two players. Yuki trained only even numbered players, while Zara\ntrained only odd numbered players. After the camp, the coaches evaluated the players and gave integer ratings to the\nrespective players trained by them on a scale of 1 to 7, with 1 being the lowest rating and 7 the highest.\nThe following additional information is known.\n1. Xena trained more players than Yuki.\n2. Player-1 and Player-4 were trained by the same coach, while the coaches who trained Player-2, Player-3 and\nPlayer-5 were all different.\n3. Player-5 and Player-7 were trained by the same coach and got the same rating. All other players got a unique\nrating.\n4. The average of the ratings of all the players was 4.",
    "diagramUrl": null,
    "questionText": "What was the rating of Player-6?",
    "options": [],
    "correctAnswer": "5",
    "explanation": "Official CAT answer: 5."
  },
  {
    "id": "S2_DILR_8",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 8,
    "type": "TITA",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_2",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 2",
    "passage": "Eight gymnastics players numbered 1 through 8 underwent a training camp where they were coached by three coaches\nXena, Yuki, and Zara. Each coach trained at least two players. Yuki trained only even numbered players, while Zara\ntrained only odd numbered players. After the camp, the coaches evaluated the players and gave integer ratings to the\nrespective players trained by them on a scale of 1 to 7, with 1 being the lowest rating and 7 the highest.\nThe following additional information is known.\n1. Xena trained more players than Yuki.\n2. Player-1 and Player-4 were trained by the same coach, while the coaches who trained Player-2, Player-3 and\nPlayer-5 were all different.\n3. Player-5 and Player-7 were trained by the same coach and got the same rating. All other players got a unique\nrating.\n4. The average of the ratings of all the players was 4.",
    "diagramUrl": null,
    "questionText": "For how many players the ratings can be determined with certainty?",
    "options": [],
    "correctAnswer": "6",
    "explanation": "Official CAT answer: 6."
  },
  {
    "id": "S2_DILR_9",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 9,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_2",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 2",
    "passage": "Eight gymnastics players numbered 1 through 8 underwent a training camp where they were coached by three coaches\nXena, Yuki, and Zara. Each coach trained at least two players. Yuki trained only even numbered players, while Zara\ntrained only odd numbered players. After the camp, the coaches evaluated the players and gave integer ratings to the\nrespective players trained by them on a scale of 1 to 7, with 1 being the lowest rating and 7 the highest.\nThe following additional information is known.\n1. Xena trained more players than Yuki.\n2. Player-1 and Player-4 were trained by the same coach, while the coaches who trained Player-2, Player-3 and\nPlayer-5 were all different.\n3. Player-5 and Player-7 were trained by the same coach and got the same rating. All other players got a unique\nrating.\n4. The average of the ratings of all the players was 4.",
    "diagramUrl": null,
    "questionText": "Who all were the players trained by Xena?",
    "options": [
      "Player-1, Player-3, Player-4, Player-6.",
      "Player-1, Player-4, Player-6, Player-8.",
      "Player-1, Player-3, Player-4, Player-8.",
      "Player-1, Player-3, Player-4."
    ],
    "correctAnswer": 2,
    "explanation": "Official CAT answer: C."
  },
  {
    "id": "S2_DILR_10",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 10,
    "type": "TITA",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_3",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 3",
    "passage": "The numbers 1, 2, 3, 4, 5, 6, 7, 8, 9, and 10 are placed in ten slots of the following grid based on the conditions below.\n\nColumn 1\nColumn 2\nColumn 3\nColumn 4\nRow 1\n\nRow 2\n\nRow 3\n\nRow 4\n\n1. Numbers in any row appear in an increasing order from left to right.\n2. Numbers in any column appear in a decreasing order from top to bottom.\n3. 1 is placed either in the same row or in the same column as 10.\n4. Neither 2 nor 3 is placed in the same row or in the same column as 10.\n5. Neither 7 nor 8 is placed in the same row or in the same column as 9.\n6. 4 and 6 are placed in the same row.",
    "diagramUrl": null,
    "questionText": "What is the row number which has the least sum of numbers placed in that row?",
    "options": [],
    "correctAnswer": "4",
    "explanation": "Official CAT answer: 4."
  },
  {
    "id": "S2_DILR_11",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 11,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_3",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 3",
    "passage": "The numbers 1, 2, 3, 4, 5, 6, 7, 8, 9, and 10 are placed in ten slots of the following grid based on the conditions below.\n\nColumn 1\nColumn 2\nColumn 3\nColumn 4\nRow 1\n\nRow 2\n\nRow 3\n\nRow 4\n\n1. Numbers in any row appear in an increasing order from left to right.\n2. Numbers in any column appear in a decreasing order from top to bottom.\n3. 1 is placed either in the same row or in the same column as 10.\n4. Neither 2 nor 3 is placed in the same row or in the same column as 10.\n5. Neither 7 nor 8 is placed in the same row or in the same column as 9.\n6. 4 and 6 are placed in the same row.",
    "diagramUrl": null,
    "questionText": "Which of the following statements MUST be true?\n(I). 10 is placed in a slot in Row 1.\n(II). 1 is placed in a slot in Row 4.",
    "options": [
      "Both I and II",
      "Only I",
      "Only II",
      "Neither I nor II"
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S2_DILR_12",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 12,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_3",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 3",
    "passage": "The numbers 1, 2, 3, 4, 5, 6, 7, 8, 9, and 10 are placed in ten slots of the following grid based on the conditions below.\n\nColumn 1\nColumn 2\nColumn 3\nColumn 4\nRow 1\n\nRow 2\n\nRow 3\n\nRow 4\n\n1. Numbers in any row appear in an increasing order from left to right.\n2. Numbers in any column appear in a decreasing order from top to bottom.\n3. 1 is placed either in the same row or in the same column as 10.\n4. Neither 2 nor 3 is placed in the same row or in the same column as 10.\n5. Neither 7 nor 8 is placed in the same row or in the same column as 9.\n6. 4 and 6 are placed in the same row.",
    "diagramUrl": null,
    "questionText": "Which of the following statements MUST be true?\n(I). 2 is placed in a slot in Column 2.\n(II). 3 is placed in a slot in Column 3.",
    "options": [
      "Both I and II",
      "Neither I nor II",
      "Only II",
      "Only I"
    ],
    "correctAnswer": 1,
    "explanation": "Official CAT answer: B."
  },
  {
    "id": "S2_DILR_13",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 13,
    "type": "TITA",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_3",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 3",
    "passage": "The numbers 1, 2, 3, 4, 5, 6, 7, 8, 9, and 10 are placed in ten slots of the following grid based on the conditions below.\n\nColumn 1\nColumn 2\nColumn 3\nColumn 4\nRow 1\n\nRow 2\n\nRow 3\n\nRow 4\n\n1. Numbers in any row appear in an increasing order from left to right.\n2. Numbers in any column appear in a decreasing order from top to bottom.\n3. 1 is placed either in the same row or in the same column as 10.\n4. Neither 2 nor 3 is placed in the same row or in the same column as 10.\n5. Neither 7 nor 8 is placed in the same row or in the same column as 9.\n6. 4 and 6 are placed in the same row.",
    "diagramUrl": null,
    "questionText": "For how many slots in the grid, placement of numbers CANNOT be determined with certainty?",
    "options": [],
    "correctAnswer": "2",
    "explanation": "Official CAT answer: 2."
  },
  {
    "id": "S2_DILR_14",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 14,
    "type": "TITA",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_3",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 3",
    "passage": "The numbers 1, 2, 3, 4, 5, 6, 7, 8, 9, and 10 are placed in ten slots of the following grid based on the conditions below.\n\nColumn 1\nColumn 2\nColumn 3\nColumn 4\nRow 1\n\nRow 2\n\nRow 3\n\nRow 4\n\n1. Numbers in any row appear in an increasing order from left to right.\n2. Numbers in any column appear in a decreasing order from top to bottom.\n3. 1 is placed either in the same row or in the same column as 10.\n4. Neither 2 nor 3 is placed in the same row or in the same column as 10.\n5. Neither 7 nor 8 is placed in the same row or in the same column as 9.\n6. 4 and 6 are placed in the same row.",
    "diagramUrl": null,
    "questionText": "What is the sum of the numbers placed in Column 4?",
    "options": [],
    "correctAnswer": "26",
    "explanation": "Official CAT answer: 26."
  },
  {
    "id": "S2_DILR_15",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 15,
    "type": "TITA",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_4",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 4",
    "passage": "An online e-commerce firm receives daily integer product ratings from 1 through 5 given by buyers. The daily average\nis the average of the ratings given on that day. The cumulative average is the average of all ratings given on or before\nthat day.\nThe rating system began on Day 1, and the cumulative averages were 3 and 3.1 at the end of Day 1 and Day 2,\nrespectively. The distribution of ratings on Day 2 is given in the figure below.\n\nThe following information is known about ratings on Day 3.\n1. 100 buyers gave product ratings on Day 3.\n2. The modes of the product ratings were 4 and 5.\n3. The numbers of buyers giving each product rating are non-zero multiples of 10.\n4. The same number of buyers gave product ratings of 1 and 2, and that number is half the number of buyers\nwho gave a rating of 3.",
    "diagramUrl": "/src/assets/questions/slot2_lrdi_ratings.png",
    "questionText": "How many buyers gave ratings on Day 1?",
    "options": [],
    "correctAnswer": "150",
    "explanation": "Official CAT answer: 150."
  },
  {
    "id": "S2_DILR_16",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 16,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_4",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 4",
    "passage": "An online e-commerce firm receives daily integer product ratings from 1 through 5 given by buyers. The daily average\nis the average of the ratings given on that day. The cumulative average is the average of all ratings given on or before\nthat day.\nThe rating system began on Day 1, and the cumulative averages were 3 and 3.1 at the end of Day 1 and Day 2,\nrespectively. The distribution of ratings on Day 2 is given in the figure below.\n\nThe following information is known about ratings on Day 3.\n1. 100 buyers gave product ratings on Day 3.\n2. The modes of the product ratings were 4 and 5.\n3. The numbers of buyers giving each product rating are non-zero multiples of 10.\n4. The same number of buyers gave product ratings of 1 and 2, and that number is half the number of buyers\nwho gave a rating of 3.",
    "diagramUrl": "/src/assets/questions/slot2_lrdi_ratings.png",
    "questionText": "What is the daily average rating of Day 3?",
    "options": [
      "3.5",
      "3.2",
      "3.0",
      "3.6"
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S2_DILR_17",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 17,
    "type": "TITA",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_4",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 4",
    "passage": "An online e-commerce firm receives daily integer product ratings from 1 through 5 given by buyers. The daily average\nis the average of the ratings given on that day. The cumulative average is the average of all ratings given on or before\nthat day.\nThe rating system began on Day 1, and the cumulative averages were 3 and 3.1 at the end of Day 1 and Day 2,\nrespectively. The distribution of ratings on Day 2 is given in the figure below.\n\nThe following information is known about ratings on Day 3.\n1. 100 buyers gave product ratings on Day 3.\n2. The modes of the product ratings were 4 and 5.\n3. The numbers of buyers giving each product rating are non-zero multiples of 10.\n4. The same number of buyers gave product ratings of 1 and 2, and that number is half the number of buyers\nwho gave a rating of 3.",
    "diagramUrl": "/src/assets/questions/slot2_lrdi_ratings.png",
    "questionText": "What is the median of all ratings given on Day 3?",
    "options": [],
    "correctAnswer": "4",
    "explanation": "Official CAT answer: 4."
  },
  {
    "id": "S2_DILR_18",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 18,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_4",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 4",
    "passage": "An online e-commerce firm receives daily integer product ratings from 1 through 5 given by buyers. The daily average\nis the average of the ratings given on that day. The cumulative average is the average of all ratings given on or before\nthat day.\nThe rating system began on Day 1, and the cumulative averages were 3 and 3.1 at the end of Day 1 and Day 2,\nrespectively. The distribution of ratings on Day 2 is given in the figure below.\n\nThe following information is known about ratings on Day 3.\n1. 100 buyers gave product ratings on Day 3.\n2. The modes of the product ratings were 4 and 5.\n3. The numbers of buyers giving each product rating are non-zero multiples of 10.\n4. The same number of buyers gave product ratings of 1 and 2, and that number is half the number of buyers\nwho gave a rating of 3.",
    "diagramUrl": "/src/assets/questions/slot2_lrdi_ratings.png",
    "questionText": "Which of the following is true about the cumulative average ratings of Day 2 and Day 3?",
    "options": [
      "The cumulative average of Day 3 increased by less than 5% from Day 2.",
      "The cumulative average of Day 3 increased by more than 8% from Day 2.",
      "The cumulative average of Day 3 increased by a percentage between 5% and 8% from Day 2.",
      "The cumulative average of Day 3 decreased from Day 2."
    ],
    "correctAnswer": 2,
    "explanation": "Official CAT answer: C."
  },
  {
    "id": "S2_DILR_19",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 19,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_5",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 5",
    "passage": "The two plots below give the following information about six firms A, B, C, D, E, and F for 2019 and 2023.\nPAT: The firm's profits after taxes in Rs. crores,\nES: The firm's employee strength, that is the number of employees in the firm, and\nPRD: The percentage of the firm's PAT that they spend on Research and Development (R&D).\nIn the plots, the horizontal and vertical coordinates of point representing each firm gives their ES and PAT values\nrespectively. The PRD values of each firm are proportional to the areas around the points representing each firm. The\nareas are comparable between the two plots, i.e., equal areas in the two plots represent the same PRD values for the\ntwo years.",
    "diagramUrl": "/src/assets/questions/slot2_lrdi_firms.png",
    "questionText": "Assume that the annual rate of growth in PAT over the previous year (ARG) remained constant over the years for\neach of the six firms. Which among the firms A, B, C, and E had the highest ARG?",
    "options": [
      "Firm C",
      "Firm B",
      "Firm A",
      "Firm E"
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S2_DILR_20",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 20,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_5",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 5",
    "passage": "The two plots below give the following information about six firms A, B, C, D, E, and F for 2019 and 2023.\nPAT: The firm's profits after taxes in Rs. crores,\nES: The firm's employee strength, that is the number of employees in the firm, and\nPRD: The percentage of the firm's PAT that they spend on Research and Development (R&D).\nIn the plots, the horizontal and vertical coordinates of point representing each firm gives their ES and PAT values\nrespectively. The PRD values of each firm are proportional to the areas around the points representing each firm. The\nareas are comparable between the two plots, i.e., equal areas in the two plots represent the same PRD values for the\ntwo years.",
    "diagramUrl": "/src/assets/questions/slot2_lrdi_firms.png",
    "questionText": "The ratio of the amount of money spent by Firm C on R&D in 2019 to that in 2023 is closest to",
    "options": [
      "5 : 9",
      "9 : 5",
      "9 : 4",
      "5 : 6"
    ],
    "correctAnswer": 1,
    "explanation": "Official CAT answer: B."
  },
  {
    "id": "S2_DILR_21",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 21,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_5",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 5",
    "passage": "The two plots below give the following information about six firms A, B, C, D, E, and F for 2019 and 2023.\nPAT: The firm's profits after taxes in Rs. crores,\nES: The firm's employee strength, that is the number of employees in the firm, and\nPRD: The percentage of the firm's PAT that they spend on Research and Development (R&D).\nIn the plots, the horizontal and vertical coordinates of point representing each firm gives their ES and PAT values\nrespectively. The PRD values of each firm are proportional to the areas around the points representing each firm. The\nareas are comparable between the two plots, i.e., equal areas in the two plots represent the same PRD values for the\ntwo years.",
    "diagramUrl": "/src/assets/questions/slot2_lrdi_firms.png",
    "questionText": "Which among the firms A, C, E, and F had the maximum PAT per employee in 2023?",
    "options": [
      "Firm C",
      "Firm A",
      "Firm E",
      "Firm F"
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S2_DILR_22",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 22,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_5",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 5",
    "passage": "The two plots below give the following information about six firms A, B, C, D, E, and F for 2019 and 2023.\nPAT: The firm's profits after taxes in Rs. crores,\nES: The firm's employee strength, that is the number of employees in the firm, and\nPRD: The percentage of the firm's PAT that they spend on Research and Development (R&D).\nIn the plots, the horizontal and vertical coordinates of point representing each firm gives their ES and PAT values\nrespectively. The PRD values of each firm are proportional to the areas around the points representing each firm. The\nareas are comparable between the two plots, i.e., equal areas in the two plots represent the same PRD values for the\ntwo years.",
    "diagramUrl": "/src/assets/questions/slot2_lrdi_firms.png",
    "questionText": "Which among the firms C, D, E, and F had the least amount of R&D spending per employee in 2023?",
    "options": [
      "Firm D",
      "Firm E",
      "Firm C",
      "Firm F"
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S2_QA_1",
    "slot": 2,
    "section": "QA",
    "questionNumber": 1,
    "type": "TITA",
    "subtopic": "Algebra",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "If m and n are integers such that (m + 2n) (2m +n) = 27, then the maximum possible value of 2m - 3n is",
    "options": [],
    "correctAnswer": "17",
    "explanation": "Official CAT answer: 17."
  },
  {
    "id": "S2_QA_2",
    "slot": 2,
    "section": "QA",
    "questionNumber": 2,
    "type": "MCQ",
    "subtopic": "Algebra",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "If log64 𝑥2 + log8 √𝑦+ 3 log512(𝑦𝑧) = 4, where x, y and z are positive real numbers, then the minimum possible\nvalue of (x + y + z) is",
    "options": [
      "96",
      "48",
      "36",
      "24"
    ],
    "correctAnswer": 1,
    "explanation": "Official CAT answer: 48."
  },
  {
    "id": "S2_QA_3",
    "slot": 2,
    "section": "QA",
    "questionNumber": 3,
    "type": "TITA",
    "subtopic": "Arithmetic",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "The average number of copies of a book sold per day by a shopkeeper is 60 in the initial seven days and 63 in the\ninitial eight days, after the book launch. On the ninth day, she sells 11 copies less than the eighth day, and the\naverage number of copies sold per day from second day to ninth day becomes 66. The number of copies sold on\nthe first day of the book launch is",
    "options": [],
    "correctAnswer": "49",
    "explanation": "Official CAT answer: 49."
  },
  {
    "id": "S2_QA_4",
    "slot": 2,
    "section": "QA",
    "questionNumber": 4,
    "type": "MCQ",
    "subtopic": "Algebra",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "Let 𝑓(𝑥) =\n𝑥\n(2𝑥−1) and 𝑔(𝑥)\n𝑥\n(𝑥−1). Then, the domain of the function ℎ(𝑥) = 𝑓(𝑔(𝑥)) + 𝑔(𝑓(𝑥)) is all real numbers\nexcept",
    "options": [
      "−1,\n1\n2 and 1",
      "1\n2 , 1 and\n3\n2",
      "−\n1\n2 ,\n1\n2 and 1",
      "1\n2, and 1"
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S2_QA_5",
    "slot": 2,
    "section": "QA",
    "questionNumber": 5,
    "type": "MCQ",
    "subtopic": "Quantitative Aptitude",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "If 9𝑥2+2𝑥−3 −4 (3𝑥2 + 2𝑥−2) + 27 = 0, then the product of all possible value of x is",
    "options": [
      "5",
      "20",
      "30",
      "15"
    ],
    "correctAnswer": 1,
    "explanation": "Official CAT answer: B."
  },
  {
    "id": "S2_QA_6",
    "slot": 2,
    "section": "QA",
    "questionNumber": 6,
    "type": "MCQ",
    "subtopic": "Geometry & Mensuration",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "Let ABCDEF be a regular hexagon and P and Q be the midpoints of AB and CD, respectively. Then, the ratio of the\nareas of trapezium PBCQ and hexagon ABCDEF is",
    "options": [
      "5 : 24",
      "7 : 24",
      "6 : 25",
      "6 : 19"
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S2_QA_7",
    "slot": 2,
    "section": "QA",
    "questionNumber": 7,
    "type": "TITA",
    "subtopic": "Algebra",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "If a, b, c and d are integers such that their sum is 46, then the minimum possible value of (𝑎−𝑏)2 + (𝑎−𝑐)2 +\n(𝑎−𝑑)2 is",
    "options": [],
    "correctAnswer": "2",
    "explanation": "Official CAT answer: 2."
  },
  {
    "id": "S2_QA_8",
    "slot": 2,
    "section": "QA",
    "questionNumber": 8,
    "type": "MCQ",
    "subtopic": "Quantitative Aptitude",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "Let 𝑎𝑛 be the 𝑛𝑡ℎ term of a deceasing infinite geometric progression. If 𝑎1 + 𝑎2 + 𝑎3 = 52 and 𝑎1𝑎2 + 𝑎2𝑎3 +\n𝑎3𝑎1 = 624, then the sum of this geometric progression is",
    "options": [
      "63",
      "60",
      "54",
      "57"
    ],
    "correctAnswer": 2,
    "explanation": "Official CAT answer: C."
  },
  {
    "id": "S2_QA_9",
    "slot": 2,
    "section": "QA",
    "questionNumber": 9,
    "type": "TITA",
    "subtopic": "Quantitative Aptitude",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "Suppose a, b, c are three distinct natural numbers, such that 3𝑎𝑐= 8(𝑎+ 𝑏). Then, the smallest possible value of\n3𝑎+ 2𝑏+ 𝑐 is",
    "options": [],
    "correctAnswer": "12",
    "explanation": "Official CAT answer: 12."
  },
  {
    "id": "S2_QA_10",
    "slot": 2,
    "section": "QA",
    "questionNumber": 10,
    "type": "TITA",
    "subtopic": "Geometry & Mensuration",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "Two tangents drawn from a point P touch a circle with center O at points Q and R. points A and B lie on PQ and PR,\nrespectively, such that AB is also tangent to the same circle. If ∠𝐴𝑂𝐵= 500, then ∠𝐴𝑃𝐵, in degrees, equals",
    "options": [],
    "correctAnswer": "80",
    "explanation": "Official CAT answer: 80."
  },
  {
    "id": "S2_QA_11",
    "slot": 2,
    "section": "QA",
    "questionNumber": 11,
    "type": "MCQ",
    "subtopic": "Quantitative Aptitude",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "The number of divisors of (26 × 35 × 53 × 72), which are of the form (3𝑟+ 1), where r is a non – negative integer,\nis",
    "options": [
      "42",
      "36",
      "56",
      "24"
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S2_QA_12",
    "slot": 2,
    "section": "QA",
    "questionNumber": 12,
    "type": "TITA",
    "subtopic": "Quantitative Aptitude",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "Ankita is twice as efficient as Bipin, while Bipin is twice as efficient as Chandan. All three of them start together on\na job, and Bipin leaves the job after 20 days. If the job got completed in 60 days, the number of days needed by\nChandan to complete the job alone, is",
    "options": [],
    "correctAnswer": "340",
    "explanation": "Official CAT answer: 340."
  },
  {
    "id": "S2_QA_13",
    "slot": 2,
    "section": "QA",
    "questionNumber": 13,
    "type": "MCQ",
    "subtopic": "Arithmetic",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "The ratio of expenditures of Lakshmi and Meenakshi is 2 : 3, and the ratio of income of Lakshmi to expenditure of\nMeenakshi is 6 : 7. If excess of income over expenditure is saved by Lakshmi and Meenakshi, and the ratio of their\nsavings is 4 : 9, then the ratio of their incomes is",
    "options": [
      "5 : 6",
      "3 : 5",
      "7 : 8",
      "2 : 1"
    ],
    "correctAnswer": 1,
    "explanation": "Official CAT answer: B."
  },
  {
    "id": "S2_QA_14",
    "slot": 2,
    "section": "QA",
    "questionNumber": 14,
    "type": "MCQ",
    "subtopic": "Quantitative Aptitude",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "The set of all real values of x for which (𝑥2 −|𝑥+ 9| + 𝑥) > 0, is",
    "options": [
      "(−∞, −9) ∪(9, ∞)",
      "(− ∞, −3) ∪(3, ∞)",
      "(−9, −3) ∪(3, ∞)",
      "(−∞, −9) ∪(3, ∞)"
    ],
    "correctAnswer": 1,
    "explanation": "Official CAT answer: B."
  },
  {
    "id": "S2_QA_15",
    "slot": 2,
    "section": "QA",
    "questionNumber": 15,
    "type": "MCQ",
    "subtopic": "Arithmetic",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "An item with a cost price of Rs. 1650 is sold at a certain discount on a fixed marked price to earn a profit of 20% on\nthe cost price. If the discount was doubled, the profit would have been Rs. 110. The rate of discount, in percentage,\nat which the profit percentage would be equal to the rate of discount, is nearest to",
    "options": [
      "12",
      "14",
      "16",
      "18"
    ],
    "correctAnswer": 1,
    "explanation": "Official CAT answer: B."
  },
  {
    "id": "S2_QA_16",
    "slot": 2,
    "section": "QA",
    "questionNumber": 16,
    "type": "MCQ",
    "subtopic": "Algebra",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "The equation 3𝑥2 −5𝑥+ 𝑝= 0 and 2𝑥2 −2𝑥+ 𝑞= 0 have one common root. The sum of the other roots of\nthese two equations is",
    "options": [
      "2\n3 −𝑝+\n3\n2 𝑞",
      "8\n3 + 𝑝+\n1\n3 𝑞",
      "2\n3 −2𝑝+\n2\n3 𝑞",
      "8\n3 −𝑝+\n3\n2 𝑞"
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S2_QA_17",
    "slot": 2,
    "section": "QA",
    "questionNumber": 17,
    "type": "MCQ",
    "subtopic": "Arithmetic",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "A mixture of coffee and cocoa, 16% of which is coffee, costs Rs 240 per kg. Another mixture of coffee and cocoa,\nof which 36% is coffee, costs Rs 320 per kg. If a new mixture of coffee and cocoa costs Rs 376 per kg, then the\nquantity, in kg, of coffee in 10 kg of this new mixture is",
    "options": [
      "4",
      "6",
      "2.5",
      "5"
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S2_QA_18",
    "slot": 2,
    "section": "QA",
    "questionNumber": 18,
    "type": "MCQ",
    "subtopic": "Arithmetic",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "A loan of Rs 1000 is fully repaid by two installments of Rs 530 and Rs 594, paid at the end of first and second year,\nrespectively. If the interest is compounded annually, then the rate of interest, in percentage, is",
    "options": [
      "8",
      "10",
      "11",
      "9"
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S2_QA_19",
    "slot": 2,
    "section": "QA",
    "questionNumber": 19,
    "type": "TITA",
    "subtopic": "Arithmetic",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "Rita and Sneha can row a boat at 5 km/h and 6 km/h in still water, respectively. In a river flowing with a constant\nvelocity, Sneha takes 48 minutes more to row 14 km upstream than to row the same distance downstream. If Rita\nstarts from a certain location in the river, and returns downstream to the same location, taking a total of 100\nminutes, then the total distance, in km, Rita will cover is",
    "options": [],
    "correctAnswer": "8",
    "explanation": "Official CAT answer: 8."
  },
  {
    "id": "S2_QA_20",
    "slot": 2,
    "section": "QA",
    "questionNumber": 20,
    "type": "TITA",
    "subtopic": "Number System",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "The sum of digits of the number (625)65 × (128)36, is",
    "options": [],
    "correctAnswer": "25",
    "explanation": "Official CAT answer: 25."
  },
  {
    "id": "S2_QA_21",
    "slot": 2,
    "section": "QA",
    "questionNumber": 21,
    "type": "MCQ",
    "subtopic": "Quantitative Aptitude",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "In a ∆𝐴𝐵𝐶, points D and E are on the sides BC and AC, respectively. BE and AD intersect at point T such that 𝐴𝐷∶\n𝐴𝑇= 4 ∶3 and BE : BT = 5 : 4. Point F lies on AC such that DF is parallel to BE. Then, BD : CD is",
    "options": [
      "9 : 4",
      "15 : 4",
      "11 : 4",
      "7 : 4"
    ],
    "correctAnswer": 2,
    "explanation": "Official CAT answer: C."
  },
  {
    "id": "S2_QA_22",
    "slot": 2,
    "section": "QA",
    "questionNumber": 22,
    "type": "MCQ",
    "subtopic": "Arithmetic",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "A certain amount of money was divided among Pinu, Meena, Rinu and Seema. Pinu received 20% of the total\namount and Meena received 40% of the remaining amount. If Seema received 20% less than Pinu, the ratio of the\namounts received by Pinu and Rinu is",
    "options": [
      "8 : 5",
      "5 : 8",
      "2 : 1",
      "1 : 2"
    ],
    "correctAnswer": 1,
    "explanation": "Official CAT answer: B."
  }
];

export const officialCatQuestionsBank = [
  {
    "id": "S1_VARC_1",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 1,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S1_RC_1",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nUnderstanding the key properties of complex systems can help us clarify and deal with many new and existing global\nchallenges, from pandemics to poverty. A recent study in Nature Physics found transitions to orderly states such as\nschooling in fish (all fish swimming in the same direction), can be caused, paradoxically, by randomness, or 'noise'\nfeeding back on itself. That is, a misalignment among the fish causes further misalignment, eventually inducing a\ntransition to schooling. Most of us wouldn't guess that noise can produce predictable behaviour. The result invites us\nto consider how technology such as contact-tracing apps, although informing us locally, might negatively impact our\ncollective movement. If each of us changes our behaviour to avoid the infected, we might generate a collective pattern\nwe had aimed to avoid: higher levels of interaction between the infected and susceptible, or high levels of interaction\namong the asymptomatic.\nComplex systems also suffer from a special vulnerability to events that don't follow a normal distribution or 'bell curve'.\nWhen events are distributed normally, most outcomes are familiar and don't seem particularly striking. Height is a\ngood example: it's pretty unusual for a man to be over 7 feet tall; most adults are between 5 and 6 feet, and there is\nno known person over 9 feet tall. But in collective settings where contagion shapes behaviour, a run on the banks, a\nscramble to buy toilet paper. the probability distributions for possible events are often heavy-tailed. There is a much\nhigher probability of extreme events, such as a stock market crash or a massive surge in infections. These events are\nstill unlikely, but they occur more frequently and are larger than would be expected under normal distributions.\nWhat's more, once a rare but hugely significant 'tail' event takes place, this raises the probability of further tail events.\nWe might call them second-order tail events; they include stock market gyrations after a big fall and earthquake\naftershocks. The initial probability of second-order tail events is so tiny it's almost impossible to calculate. But once a\nfirst-order tail event occurs, the rules change, and the probability of a second-order tail event increases.\nThe dynamics of tail events are complicated by the fact that they result from cascades of other unlikely events. When\nCOVID-19 first struck, the stock market suffered stunning losses followed by an equally stunning recovery. Some of\nthese dynamics are potentially attributable to former sports bettors, with no sports to bet on, entering the market as\nspeculators rather than investors. The arrival of these new players might have increased inefficiencies and allowed\nsavvy long-term investors to gain an edge over bettors with different goals.\nOne reason a first-order tail event can induce further tail events is that it changes the perceived costs of our actions\nand changes the rules that we play by. This game-change is an example of another key complex systems concept:\nnonstationarity. A second, canonical example of nonstationarity is adaptation, as illustrated by the arms race involved\nin the coevolution of hosts and parasites in which each has to 'run' faster, just to keep up with the novel solutions the\nother one presents as they battle it out in evolutionary time.",
    "questionText": "All of the following inferences are supported by the passage EXCEPT that:",
    "options": [
      "The text attributes the COVID-19 pandemic rebound in financial markets solely to displaced sports bettors and\ntreats their entry as the overriding cause of the rapid recovery across assets and time horizons.",
      "Heavy-tailed events make extreme outcomes more frequent and larger than bell curve expectations. This\ncomplicates forecasting and risk management in collective settings shaped by contagion and copying\nbehaviour.",
      "Learning can change the rules that actors face. So, a rare shock can alter payoffs and raise the odds of\nsubsequent large disturbances within the same system, which supports the idea of second-order tail events.",
      "Examples like runs on banks and toilet paper scrambles illustrate how contagion can amplify local choices into\nsystem-wide cascades that surprise participants and lead to patterns they did not intend to create."
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S1_VARC_2",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 2,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S1_RC_1",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nUnderstanding the key properties of complex systems can help us clarify and deal with many new and existing global\nchallenges, from pandemics to poverty. A recent study in Nature Physics found transitions to orderly states such as\nschooling in fish (all fish swimming in the same direction), can be caused, paradoxically, by randomness, or 'noise'\nfeeding back on itself. That is, a misalignment among the fish causes further misalignment, eventually inducing a\ntransition to schooling. Most of us wouldn't guess that noise can produce predictable behaviour. The result invites us\nto consider how technology such as contact-tracing apps, although informing us locally, might negatively impact our\ncollective movement. If each of us changes our behaviour to avoid the infected, we might generate a collective pattern\nwe had aimed to avoid: higher levels of interaction between the infected and susceptible, or high levels of interaction\namong the asymptomatic.\nComplex systems also suffer from a special vulnerability to events that don't follow a normal distribution or 'bell curve'.\nWhen events are distributed normally, most outcomes are familiar and don't seem particularly striking. Height is a\ngood example: it's pretty unusual for a man to be over 7 feet tall; most adults are between 5 and 6 feet, and there is\nno known person over 9 feet tall. But in collective settings where contagion shapes behaviour, a run on the banks, a\nscramble to buy toilet paper. the probability distributions for possible events are often heavy-tailed. There is a much\nhigher probability of extreme events, such as a stock market crash or a massive surge in infections. These events are\nstill unlikely, but they occur more frequently and are larger than would be expected under normal distributions.\nWhat's more, once a rare but hugely significant 'tail' event takes place, this raises the probability of further tail events.\nWe might call them second-order tail events; they include stock market gyrations after a big fall and earthquake\naftershocks. The initial probability of second-order tail events is so tiny it's almost impossible to calculate. But once a\nfirst-order tail event occurs, the rules change, and the probability of a second-order tail event increases.\nThe dynamics of tail events are complicated by the fact that they result from cascades of other unlikely events. When\nCOVID-19 first struck, the stock market suffered stunning losses followed by an equally stunning recovery. Some of\nthese dynamics are potentially attributable to former sports bettors, with no sports to bet on, entering the market as\nspeculators rather than investors. The arrival of these new players might have increased inefficiencies and allowed\nsavvy long-term investors to gain an edge over bettors with different goals.\nOne reason a first-order tail event can induce further tail events is that it changes the perceived costs of our actions\nand changes the rules that we play by. This game-change is an example of another key complex systems concept:\nnonstationarity. A second, canonical example of nonstationarity is adaptation, as illustrated by the arms race involved\nin the coevolution of hosts and parasites in which each has to 'run' faster, just to keep up with the novel solutions the\nother one presents as they battle it out in evolutionary time.",
    "questionText": "The passage suggests that contact tracing apps could inadvertently raise risky interactions by altering local\nbehaviour. Which one of the assumptions below is most necessary for that suggestion to hold?",
    "options": [
      "Individuals base movement choices partly on observed infections and on the behaviour of others. So, local\nresponses interact, which turns many small adjustments into large scale patterns that can frustrate the\nintended aim of risk reduction.",
      "Urban networks have uniform traffic conditions at all hours, which allows perfectly predictable routing\nindependent of personal choices, social signals, or crowd reactions and, therefore, makes interdependence\nnegligible in city movement decisions.",
      "App alerts always include precise location to within one metre and deliver real time updates for all users, which\nensures that the data feed is perfectly accurate regardless of privacy settings, power limits, or network\nconditions.",
      "Most users uninstall apps within a week, which leaves only highly exposed individuals participating. This\nneutralises any systematic bias in routing decisions and prevents any predictable change in aggregate contact\npatterns."
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S1_VARC_3",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 3,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S1_RC_1",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nUnderstanding the key properties of complex systems can help us clarify and deal with many new and existing global\nchallenges, from pandemics to poverty. A recent study in Nature Physics found transitions to orderly states such as\nschooling in fish (all fish swimming in the same direction), can be caused, paradoxically, by randomness, or 'noise'\nfeeding back on itself. That is, a misalignment among the fish causes further misalignment, eventually inducing a\ntransition to schooling. Most of us wouldn't guess that noise can produce predictable behaviour. The result invites us\nto consider how technology such as contact-tracing apps, although informing us locally, might negatively impact our\ncollective movement. If each of us changes our behaviour to avoid the infected, we might generate a collective pattern\nwe had aimed to avoid: higher levels of interaction between the infected and susceptible, or high levels of interaction\namong the asymptomatic.\nComplex systems also suffer from a special vulnerability to events that don't follow a normal distribution or 'bell curve'.\nWhen events are distributed normally, most outcomes are familiar and don't seem particularly striking. Height is a\ngood example: it's pretty unusual for a man to be over 7 feet tall; most adults are between 5 and 6 feet, and there is\nno known person over 9 feet tall. But in collective settings where contagion shapes behaviour, a run on the banks, a\nscramble to buy toilet paper. the probability distributions for possible events are often heavy-tailed. There is a much\nhigher probability of extreme events, such as a stock market crash or a massive surge in infections. These events are\nstill unlikely, but they occur more frequently and are larger than would be expected under normal distributions.\nWhat's more, once a rare but hugely significant 'tail' event takes place, this raises the probability of further tail events.\nWe might call them second-order tail events; they include stock market gyrations after a big fall and earthquake\naftershocks. The initial probability of second-order tail events is so tiny it's almost impossible to calculate. But once a\nfirst-order tail event occurs, the rules change, and the probability of a second-order tail event increases.\nThe dynamics of tail events are complicated by the fact that they result from cascades of other unlikely events. When\nCOVID-19 first struck, the stock market suffered stunning losses followed by an equally stunning recovery. Some of\nthese dynamics are potentially attributable to former sports bettors, with no sports to bet on, entering the market as\nspeculators rather than investors. The arrival of these new players might have increased inefficiencies and allowed\nsavvy long-term investors to gain an edge over bettors with different goals.\nOne reason a first-order tail event can induce further tail events is that it changes the perceived costs of our actions\nand changes the rules that we play by. This game-change is an example of another key complex systems concept:\nnonstationarity. A second, canonical example of nonstationarity is adaptation, as illustrated by the arms race involved\nin the coevolution of hosts and parasites in which each has to 'run' faster, just to keep up with the novel solutions the\nother one presents as they battle it out in evolutionary time.",
    "questionText": "Which one of the options below best summarises the passage?",
    "options": [
      "The passage explains how speculative entrants always produce inefficiency after health shocks. Therefore,\nlong-term investors invariably profit when new participants push prices away from fundamentals under\npandemic conditions and comparable crises.",
      "The passage explains how noise can create order, then shows why complex systems with contagion are\nvulnerable to heavy-tailed cascades. It also explains why early shocks change rules through nonstationarity\nwith a market illustration during the COVID-19 disruption",
      "The passage explains how social outcomes generally follow normal distributions. So, extreme events are\nnegligible, and policy should stabilise averages rather than learn from large shocks in fast-changing collective\nsettings.",
      "The passage explains how nonstationarity works in evolutionary biology and rejects applications in markets or\npublic health because adaptation is exclusive to parasite-host systems and cannot arise in technology-\nmediated social dynamics"
    ],
    "correctAnswer": 1,
    "explanation": "Official CAT answer: B."
  },
  {
    "id": "S1_VARC_4",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 4,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S1_RC_1",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nUnderstanding the key properties of complex systems can help us clarify and deal with many new and existing global\nchallenges, from pandemics to poverty. A recent study in Nature Physics found transitions to orderly states such as\nschooling in fish (all fish swimming in the same direction), can be caused, paradoxically, by randomness, or 'noise'\nfeeding back on itself. That is, a misalignment among the fish causes further misalignment, eventually inducing a\ntransition to schooling. Most of us wouldn't guess that noise can produce predictable behaviour. The result invites us\nto consider how technology such as contact-tracing apps, although informing us locally, might negatively impact our\ncollective movement. If each of us changes our behaviour to avoid the infected, we might generate a collective pattern\nwe had aimed to avoid: higher levels of interaction between the infected and susceptible, or high levels of interaction\namong the asymptomatic.\nComplex systems also suffer from a special vulnerability to events that don't follow a normal distribution or 'bell curve'.\nWhen events are distributed normally, most outcomes are familiar and don't seem particularly striking. Height is a\ngood example: it's pretty unusual for a man to be over 7 feet tall; most adults are between 5 and 6 feet, and there is\nno known person over 9 feet tall. But in collective settings where contagion shapes behaviour, a run on the banks, a\nscramble to buy toilet paper. the probability distributions for possible events are often heavy-tailed. There is a much\nhigher probability of extreme events, such as a stock market crash or a massive surge in infections. These events are\nstill unlikely, but they occur more frequently and are larger than would be expected under normal distributions.\nWhat's more, once a rare but hugely significant 'tail' event takes place, this raises the probability of further tail events.\nWe might call them second-order tail events; they include stock market gyrations after a big fall and earthquake\naftershocks. The initial probability of second-order tail events is so tiny it's almost impossible to calculate. But once a\nfirst-order tail event occurs, the rules change, and the probability of a second-order tail event increases.\nThe dynamics of tail events are complicated by the fact that they result from cascades of other unlikely events. When\nCOVID-19 first struck, the stock market suffered stunning losses followed by an equally stunning recovery. Some of\nthese dynamics are potentially attributable to former sports bettors, with no sports to bet on, entering the market as\nspeculators rather than investors. The arrival of these new players might have increased inefficiencies and allowed\nsavvy long-term investors to gain an edge over bettors with different goals.\nOne reason a first-order tail event can induce further tail events is that it changes the perceived costs of our actions\nand changes the rules that we play by. This game-change is an example of another key complex systems concept:\nnonstationarity. A second, canonical example of nonstationarity is adaptation, as illustrated by the arms race involved\nin the coevolution of hosts and parasites in which each has to 'run' faster, just to keep up with the novel solutions the\nother one presents as they battle it out in evolutionary time.",
    "questionText": "Which one of the following observations would most strengthen the passage's claim that a first-order tail event\nraises the probability of further tail events in complex systems?",
    "options": [
      "In epidemic networks, initial super-spreading episodes are isolated spikes after which outbreak sizes match the\nbaseline distribution from independent contact models across comparable cities with no rise in the frequency\nor size of later extreme clusters",
      "After a major equity crash, researchers find dense clusters of large daily moves for several weeks, with extreme\ndays occurring far more often than in normal circumstances for assets with customarily low volatility profiles",
      "River discharge records show water levels fit a normal distribution with thin tails that match laboratory data,\nregardless of storms or floods",
      "Following large earthquakes, regional seismic activity returns to baseline within hours with no aftershock\nsequence once data are adjusted for reporting effects, which suggests independence across events rather than\nany elevation in subsequent tail probabilities"
    ],
    "correctAnswer": 1,
    "explanation": "Official CAT answer: B."
  },
  {
    "id": "S1_VARC_5",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 5,
    "type": "TITA",
    "subtopic": "Parajumble",
    "setId": "S1_VA_5",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "questionText": "Five jumbled sentences (labelled 1, 2, 3, 4, and 5), related to a topic, are given below. Four of them can be put\ntogether to form a coherent paragraph. Identify the odd sentence out and key in the number of that sentence\nas your answer.\n\n1. The Bayeux tapestry was, therefore, an obvious way to tell people about the downfall of the English and the\nrise of the Normans.\n2. So if we take expert in Anglo-Saxon culture Gale Owen-Crocker's idea that the tapestry was originally hung in\na square with certain scenes facing each other, people would have stood in the centre.\n3. Art historian Linda Neagley has argued that pre-Renaissance people interacted with art visually,\nkinaesthetically (sensory perception through bodily movement) and physically.\n4. That would make it an 11th-century immersive space with scenes corresponding and echoing each other,\ndrawing the viewer's attention, playing on their senses and understanding of the story they thought they knew.\n5. The Bayeux tapestry would have been hung at eye level to enable this",
    "options": [],
    "correctAnswer": "1",
    "explanation": "Official CAT answer: 1."
  },
  {
    "id": "S1_VARC_6",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 6,
    "type": "MCQ",
    "subtopic": "Verbal Ability",
    "setId": "S1_VA_6",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "questionText": "The given sentence is missing in the paragraph below. Decide where it best fits among the options (1, 2, 3, or 4)\nindicated in the paragraph.\n\nSentence: Historically, silver has been, and still is, an important element in the business of 'show' visible in private\nhouses, churches, government and diplomacy.\nParagraph: ____(1) ____. Timothy Schroder put it succinctly in suggesting that electric light and eating in the\nkitchen eroded this need. As he explained to the author, 'Silver, when illuminated by flickering candlelight, comes\nalive and almost dances before the eyes, but when lit by electric light it becomes flat and dead.' ____(2) ____.\nDomestic and economic changes may have worked against the market, but the London silver trade remained\nbuoyant, thanks to the competition of collectors seeking grand display silver at the top end, and the buyers of\n'collectables', like spoons and wine labels and 'novelties', at the bottom. ____(3) ____. Another factor that came\ninto play was the systematic collection building of certain American museums over the period. Boston, Huntington\nArt Gallery and Williamsburg, among others, were largely supplied by London dealers. ____(4) ____.",
    "options": [
      "Option 1.",
      "Option 2.",
      "Option 3.",
      "Option 4."
    ],
    "correctAnswer": 1,
    "explanation": "Official CAT answer: B."
  },
  {
    "id": "S1_VARC_7",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 7,
    "type": "MCQ",
    "subtopic": "Verbal Ability",
    "setId": "S1_VA_7",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "questionText": "The passage given below is followed by four summaries. Choose the option that best captures the essence of\nthe passage.\n\nZombie cells may contribute to age-related chronic inflammation: this finding could help scientists understand\nmore about the aging process and why the immune system becomes less effective as we get older. Zombie or\n\"senescent\" cells are damaged cells that can no longer divide and grow like normal cells. Scientists think that these\ncells can contribute to chronic health problems when they accumulate in the body. In younger people, the immune\nsystem is more effective at clearing senescent cells from the body through a process called apoptosis, but as we\nage this process becomes less efficient. As a result, there is an accumulation of senescent cells in different organs\nin the body, either through increased production or reduced clearance by the immune system. The zombie cells\ncontinue to use energy though they do not divide, and often secrete chemicals that cause inflammation, which if\npersistent for longer periods of time can damage healthy cells leading to chronic diseases",
    "options": [
      "Aging leads to less effective apoptosis, and therefore zombie cells start to accumulate in the body, causing\ninflammation, which accelerates aging and leads to chronic diseases.",
      "A younger person's immune system is healthy and is able to clear the damaged cells, but as people age, the\nzombie cells resist apoptosis, and start accumulating in the body.",
      "Senescent \"zombie\" cells are inactive or malfunctioning cells that can be found throughout the body.",
      "Dead cells accelerate chronic inflammation weakening the immune system and lead to aging."
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S1_VARC_8",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 8,
    "type": "TITA",
    "subtopic": "Odd One Out",
    "setId": "S1_VA_8",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "questionText": "The four sentences (labelled 1, 2, 3, and 4) given below, when properly sequenced, would yield a coherent\nparagraph. Decide on the proper sequencing of the order of the sentences and key in the sequence of the four\nnumbers as your answer.\n\n1. But man, woman or otherwise, there is no denying that the quality of our life and character will be significantly\nshaped by the way we handle our anger.\n2. Once the taboos have been broken, women usually experience letting their fists fly as intensely liberating.\n3. Though this might seem a stereotype, women unlike men, who are frequently applauded for unbridled\naggression are often socialized to keep a lid on their ire.\n4. Many of them are so at odds with their aggressive feelings that, as a coach, I often have to stop them from\npulling their punches and encourage them to extend their arms so their blows might actually reach their fleshy\ntarget.",
    "options": [],
    "correctAnswer": "3421",
    "explanation": "Official CAT answer: 3421."
  },
  {
    "id": "S1_VARC_9",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 9,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S1_RC_9",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nOften the well intentioned music lover or the traditionally-minded professional composer asks two basic questions\nwhen faced with the electronic music phenomena: is this type of artistic creation music at all? and, given that the\nproduct is accepted as music of a new type or order, is not such music \"inhuman\"? As Lejaren Hiller points out in his\nbook Experimental Music (co-author Leonard M. Isaacson), two questions which often arise when music is discussed\nare: the substance of musical communication and its symbolic and semantic significance, if any, and the particular\nprocesses, both mental and technical, which are involved in creating and responding to musical composition. The ever-\npresent popular concept of music as a direct, open, emotional expression and as a subjective form of communication\nfrom the composer, is, of course still that of the nineteenth century, when composers themselves spoke of music in\nthose terms. But since the third decade of our century many composers have preferred more objective definitions of\nmusic, epitomized in Stravinsky's description of it as \"a form of speculation in terms of sound and time\". An acceptance\nof this more characteristic twentieth-century view of the art of musical composition will of course immediately bring\nthe layman closer to an understanding of, and sympathetic response to, electronic music, even if the forms, sounds\nand approaches it uses will still be of a foreign nature to him.\nA communication problem however will still remain. The principal barrier that electronic music presents at large, in\nrelation to the communication process, is that composers in this medium are employing a new language of forms.\nwhere terms like 'densities', 'indefinite pitch relations', 'dynamic serialization', 'permutation', etc., are substitutes or\nremote equivalents for the traditional concepts of harmony, melody, rhythm, etc. When the new structural procedures\nof electronic music are at last fully understood by the listener the barriers between him and the work he faces will be\nremoved.\nThe medium of electronic music has of course tempted many kinds of composers to try their hand at it. But the serious-\nminded composer approaches the world of electronic music with a more sophisticated and profound concept of\ncreation. Although he knows that he can reproduce and employ melodic, rhythmic patterns and timbres of a traditional\nnature, he feels that it is in the exploration of sui generis languages and forms that the aesthetic magic of the new\nmedium lies. And, conscientiously, he plunges into this search.\nThe second objection usually levelled against electronic music is much more innocent in nature. When people speak\nsometimes very vehemently of the 'inhuman' quality of this music they seem to forget that the composer is the one\nwho fires the machines, collects the sounds, manipulates them, pushes the buttons, programs the computer, filters\nthe sounds, establishes pitches and scales, splices tape, thinks of forms, and rounds up the over-all structure of the\npiece, as well as every detail of it.",
    "questionText": "What relation does the \"communication problem\" mentioned in paragraph 2 have to the questions that the author\nrecounts at the beginning of the passage?",
    "options": [
      "The communication problem is what allows us to see electronic music as music because music must be difficult\nto understand.",
      "Unfamiliar forms and terms might get in the way of our seeing electronic music as music, but this can be\novercome.",
      "None; they are unrelated to one another and form parts of different discussions.",
      "Its unfamiliar \"language of forms\" and novel terms mean that we cannot see electronic music as music since it\ndoes not employ traditional musical concepts."
    ],
    "correctAnswer": 1,
    "explanation": "Official CAT answer: B."
  },
  {
    "id": "S1_VARC_10",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 10,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S1_RC_9",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nOften the well intentioned music lover or the traditionally-minded professional composer asks two basic questions\nwhen faced with the electronic music phenomena: is this type of artistic creation music at all? and, given that the\nproduct is accepted as music of a new type or order, is not such music \"inhuman\"? As Lejaren Hiller points out in his\nbook Experimental Music (co-author Leonard M. Isaacson), two questions which often arise when music is discussed\nare: the substance of musical communication and its symbolic and semantic significance, if any, and the particular\nprocesses, both mental and technical, which are involved in creating and responding to musical composition. The ever-\npresent popular concept of music as a direct, open, emotional expression and as a subjective form of communication\nfrom the composer, is, of course still that of the nineteenth century, when composers themselves spoke of music in\nthose terms. But since the third decade of our century many composers have preferred more objective definitions of\nmusic, epitomized in Stravinsky's description of it as \"a form of speculation in terms of sound and time\". An acceptance\nof this more characteristic twentieth-century view of the art of musical composition will of course immediately bring\nthe layman closer to an understanding of, and sympathetic response to, electronic music, even if the forms, sounds\nand approaches it uses will still be of a foreign nature to him.\nA communication problem however will still remain. The principal barrier that electronic music presents at large, in\nrelation to the communication process, is that composers in this medium are employing a new language of forms.\nwhere terms like 'densities', 'indefinite pitch relations', 'dynamic serialization', 'permutation', etc., are substitutes or\nremote equivalents for the traditional concepts of harmony, melody, rhythm, etc. When the new structural procedures\nof electronic music are at last fully understood by the listener the barriers between him and the work he faces will be\nremoved.\nThe medium of electronic music has of course tempted many kinds of composers to try their hand at it. But the serious-\nminded composer approaches the world of electronic music with a more sophisticated and profound concept of\ncreation. Although he knows that he can reproduce and employ melodic, rhythmic patterns and timbres of a traditional\nnature, he feels that it is in the exploration of sui generis languages and forms that the aesthetic magic of the new\nmedium lies. And, conscientiously, he plunges into this search.\nThe second objection usually levelled against electronic music is much more innocent in nature. When people speak\nsometimes very vehemently of the 'inhuman' quality of this music they seem to forget that the composer is the one\nwho fires the machines, collects the sounds, manipulates them, pushes the buttons, programs the computer, filters\nthe sounds, establishes pitches and scales, splices tape, thinks of forms, and rounds up the over-all structure of the\npiece, as well as every detail of it.",
    "questionText": "From the context in which it is placed, the phrase \"sui generis\" in paragraph 3 suggests which one of the following?",
    "options": [
      "Particular.",
      "Indescribable.",
      "Generic.",
      "Unaesthetic."
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S1_VARC_11",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 11,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S1_RC_9",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nOften the well intentioned music lover or the traditionally-minded professional composer asks two basic questions\nwhen faced with the electronic music phenomena: is this type of artistic creation music at all? and, given that the\nproduct is accepted as music of a new type or order, is not such music \"inhuman\"? As Lejaren Hiller points out in his\nbook Experimental Music (co-author Leonard M. Isaacson), two questions which often arise when music is discussed\nare: the substance of musical communication and its symbolic and semantic significance, if any, and the particular\nprocesses, both mental and technical, which are involved in creating and responding to musical composition. The ever-\npresent popular concept of music as a direct, open, emotional expression and as a subjective form of communication\nfrom the composer, is, of course still that of the nineteenth century, when composers themselves spoke of music in\nthose terms. But since the third decade of our century many composers have preferred more objective definitions of\nmusic, epitomized in Stravinsky's description of it as \"a form of speculation in terms of sound and time\". An acceptance\nof this more characteristic twentieth-century view of the art of musical composition will of course immediately bring\nthe layman closer to an understanding of, and sympathetic response to, electronic music, even if the forms, sounds\nand approaches it uses will still be of a foreign nature to him.\nA communication problem however will still remain. The principal barrier that electronic music presents at large, in\nrelation to the communication process, is that composers in this medium are employing a new language of forms.\nwhere terms like 'densities', 'indefinite pitch relations', 'dynamic serialization', 'permutation', etc., are substitutes or\nremote equivalents for the traditional concepts of harmony, melody, rhythm, etc. When the new structural procedures\nof electronic music are at last fully understood by the listener the barriers between him and the work he faces will be\nremoved.\nThe medium of electronic music has of course tempted many kinds of composers to try their hand at it. But the serious-\nminded composer approaches the world of electronic music with a more sophisticated and profound concept of\ncreation. Although he knows that he can reproduce and employ melodic, rhythmic patterns and timbres of a traditional\nnature, he feels that it is in the exploration of sui generis languages and forms that the aesthetic magic of the new\nmedium lies. And, conscientiously, he plunges into this search.\nThe second objection usually levelled against electronic music is much more innocent in nature. When people speak\nsometimes very vehemently of the 'inhuman' quality of this music they seem to forget that the composer is the one\nwho fires the machines, collects the sounds, manipulates them, pushes the buttons, programs the computer, filters\nthe sounds, establishes pitches and scales, splices tape, thinks of forms, and rounds up the over-all structure of the\npiece, as well as every detail of it.",
    "questionText": "The goal of the author over the course of this passage is to:",
    "options": [
      "Defend electronic music from certain common charges.",
      "Differentiate between electronic music and other forms of music.",
      "Defend the \"serious-minded composer\" from Lejaren Hill and Stravinsky.",
      "Differentiate the modern composer from the nineteenth century composer."
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S1_VARC_12",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 12,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S1_RC_9",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nOften the well intentioned music lover or the traditionally-minded professional composer asks two basic questions\nwhen faced with the electronic music phenomena: is this type of artistic creation music at all? and, given that the\nproduct is accepted as music of a new type or order, is not such music \"inhuman\"? As Lejaren Hiller points out in his\nbook Experimental Music (co-author Leonard M. Isaacson), two questions which often arise when music is discussed\nare: the substance of musical communication and its symbolic and semantic significance, if any, and the particular\nprocesses, both mental and technical, which are involved in creating and responding to musical composition. The ever-\npresent popular concept of music as a direct, open, emotional expression and as a subjective form of communication\nfrom the composer, is, of course still that of the nineteenth century, when composers themselves spoke of music in\nthose terms. But since the third decade of our century many composers have preferred more objective definitions of\nmusic, epitomized in Stravinsky's description of it as \"a form of speculation in terms of sound and time\". An acceptance\nof this more characteristic twentieth-century view of the art of musical composition will of course immediately bring\nthe layman closer to an understanding of, and sympathetic response to, electronic music, even if the forms, sounds\nand approaches it uses will still be of a foreign nature to him.\nA communication problem however will still remain. The principal barrier that electronic music presents at large, in\nrelation to the communication process, is that composers in this medium are employing a new language of forms.\nwhere terms like 'densities', 'indefinite pitch relations', 'dynamic serialization', 'permutation', etc., are substitutes or\nremote equivalents for the traditional concepts of harmony, melody, rhythm, etc. When the new structural procedures\nof electronic music are at last fully understood by the listener the barriers between him and the work he faces will be\nremoved.\nThe medium of electronic music has of course tempted many kinds of composers to try their hand at it. But the serious-\nminded composer approaches the world of electronic music with a more sophisticated and profound concept of\ncreation. Although he knows that he can reproduce and employ melodic, rhythmic patterns and timbres of a traditional\nnature, he feels that it is in the exploration of sui generis languages and forms that the aesthetic magic of the new\nmedium lies. And, conscientiously, he plunges into this search.\nThe second objection usually levelled against electronic music is much more innocent in nature. When people speak\nsometimes very vehemently of the 'inhuman' quality of this music they seem to forget that the composer is the one\nwho fires the machines, collects the sounds, manipulates them, pushes the buttons, programs the computer, filters\nthe sounds, establishes pitches and scales, splices tape, thinks of forms, and rounds up the over-all structure of the\npiece, as well as every detail of it.",
    "questionText": "The mention of Stravinsky's description of music in the first paragraph does all the following EXCEPT:",
    "options": [
      "Help us determine which sounds are musical and which are not.",
      "Complicate our notion of what is communicated through music.",
      "Allow us to classify electronic music as music.",
      "Respond to and expand upon earlier understandings of music."
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S1_VARC_13",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 13,
    "type": "MCQ",
    "subtopic": "Verbal Ability",
    "setId": "S1_VA_13",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "questionText": "The given sentence is missing in the paragraph below. Decide where it best fits among the options (1, 2, 3, or 4)\nindicated in the paragraph.\n\nSentence: \"Everything is old-world, traditional techniques from Mexico,\" Ava emphasizes.\nParagraph: The sisters embrace the ways their great-grandfather built and repaired instruments. ____(1) ____.\nWhen crafting a Mexican guitarrón used in mariachi music, they use tacote wood for the top of the instrument.\nOnce the wood is cut, they carve the neck and heel from a single block using tools like hand saws, chisels and\nsandpaper rather than modern power tools and believe that this traditional method improves the tone of the\ninstrument. ____(2) ____. Their store has a three-year waitlist for instruments that take months to create. ____(3)\n____. The family's artisanship has attracted stars like Los Lobos, who own custom guitars made by all three\ngenerations of the Delgado family. ____(4) ____. For the sisters, involvement in the family business started at an\nearly age. They each built their first instruments at age 9.",
    "options": [
      "Option 3.",
      "Option 4.",
      "Option 2.",
      "Option 1."
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S1_VARC_14",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 14,
    "type": "TITA",
    "subtopic": "Verbal Ability",
    "setId": "S1_VA_14",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "questionText": "The four sentences (labelled 1, 2, 3, and 4) given below, when properly sequenced, would yield a coherent\nparagraph. Decide on the proper sequencing of the order of the sentences and key in the sequence of the four\nnumbers as your answer.\n\n1. It can in fact be integrated into any function education, medical treatment, production, punishment; it can\nincrease the effect of this function, by being linked closely with it; it can constitute a mixed mechanism in which\nrelations of power and of knowledge may be precisely adjusted, in the smallest detail, to the processes that\nare to be supervised; it can establish a direct proportion between 'surplus power' and 'surplus production'.\n2. It's a case of 'it's easy once you've thought of it' in the political sphere.\n3. The panoptic mechanism is not simply a hinge, a point of exchange between a mechanism of power and a\nfunction; it is a way of making power relations function in a function, and of making a function function through\nthese power relations.\n4. In short, it arranges things in such a way that the exercise of power is not added on from the outside, like a\nrigid, heavy constraint, to the functions it invests, but is so subtly present in them as to increase their efficiency\nby itself increasing its own points of contact.",
    "options": [],
    "correctAnswer": "2143",
    "explanation": "Official CAT answer: 2143."
  },
  {
    "id": "S1_VARC_15",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 15,
    "type": "TITA",
    "subtopic": "Parajumble",
    "setId": "S1_VA_15",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "questionText": "Five jumbled sentences (labelled 1, 2, 3, 4, and 5), related to a topic, are given below. Four of them can be put\ntogether to form a coherent paragraph. Identify the odd sentence out and key in the number of that sentence\nas your answer.\n\n1. Developments both technological and sociocultural have afforded us far greater freedom over death than we\nhad in the past, and while we are still adapting ourselves to that freedom, we now appreciate the moral\nimportance of this freedom.\n2. But I believe that a type of freedom we can call freedom over death that is, a freedom in which we shape the\ntiming and circumstances of how we die should be central to this conversation.\n3. Legalising assisted dying is but a further step in realising this freedom over death.\n4. Many people endorse, through their opinions or their choices, our freedom over death encompassing a right\nto medical assistance in hastening our deaths.\n5. Freedom is a notoriously complex and contested philosophical notion, and I won't pretend to settle any of the\nbig controversies it raises.",
    "options": [],
    "correctAnswer": "4",
    "explanation": "Official CAT answer: 4."
  },
  {
    "id": "S1_VARC_16",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 16,
    "type": "MCQ",
    "subtopic": "Verbal Ability",
    "setId": "S1_VA_16",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "questionText": "The passage given below is followed by four summaries. Choose the option that best captures the essence of\nthe passage.\n\nIn the dynamic realm of creativity, artists often find themselves at the crossroads between drawing inspiration\nfrom diverse cultures and inadvertently crossing into the territory of cultural appropriation. Inspiration is the\nlifeblood of creativity, driving artists to create works that resonate across borders. The globalized nature of the\nmodern world invites artists to draw from a vast array of cultural influences. When approached respectfully,\ninspiration becomes a bridge, fostering understanding and appreciation of cultural diversity. However, the line\nbetween inspiration and cultural appropriation can be thin and easily blurred. Cultural appropriation occurs when\nelements from a particular culture are borrowed without proper understanding, respect, or acknowledgment. This\nleads to the commodification of sacred symbols, the reinforcement of stereotypes, and the erasure of the cultural\ncontext from which these elements originated. It's essential to recognize that the impact of cultural appropriation\nextends beyond the realm of artistic expression, influencing societal perceptions and perpetuating power\nimbalances.",
    "options": [
      "Artists in a globalised world must navigate between drawing inspiration from diverse cultures respectfully and\ncultural appropriation that involves borrowing without proper acknowledgement which has broader societal\nimpacts including perpetuating power imbalances.",
      "In today's world of creativity, artists have to decide between respectfully acknowledging works that are\ninspired by diverse cultures and appropriating elements without respect for their contexts.",
      "In a globalised world, artists must draw from diverse cultural influences to create works that appeal to all, and\nthis results in instances of both inspiration and cultural appropriation.",
      "Artists must navigate the thin line between inspiration and cultural appropriation, where respectful inspiration\nfosters cultural understanding whereas appropriation involves borrowing without acknowledgement leading\nto commodification and reinforcement of stereotypes."
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S1_VARC_17",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 17,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S1_RC_17",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nStudies showing that income inequality plays a positive role in economic growth are largely based on three arguments.\nThe first argument focuses on investment indivisibilities wherein large sunk costs are required when implementing new\nfundamental innovations. Without stock markets and financial institutions to mobilize large sums of money, a high\nconcentration of wealth is needed for individuals to undertake new industrial activities accompanied by high sunk\ncosts. One study shows the relation between economic growth and income inequality for 45 countries during 1966-\n1995. It was found that the increase in income inequality has a significant positive relationship with economic growth\nin the short and medium term. Using system GMM, another study estimated the relation between income inequality\nand economic growth for 106 countries during 1965–2005 period. The results show that income inequality has a\npositive impact on economic growth in the short run, but the two are negatively correlated in the long run. The second\nargument is related to moral hazard and incentives. Because economic performance is determined by the\nunobservable level of effort that agents make, paying compensations without taking into account the economic\nperformance achieved by individual agents will fail to elicit optimum effort from the agents. Thus, certain income\ninequalities contribute to growth by enhancing worker motivation and by giving motivation to innovators and\nentrepreneurs. Finally, another study point[s] out that the concentration of wealth or stock ownership in relation to\ncorporate governance contributes to growth. If stock ownership is distributed and owned by a large number of\nshareholders, it is not easy to make quick decisions due to the conflicting interests among shareholders, and this may\nalso cause a free-rider problem in terms of monitoring and supervising managers and workers.\nVarious studies have examined the relationships between income inequality and economic growth, and most of these\nassert that a negative correlation exists between the two. Analyzing 159 countries for 1980–2012, they conclude that\nthere exists a negative relation between income inequality and economic growth; when the income share of the richest\n20% of population increases by 1%, the GDP decreases by 0.08%, whereas when the income share of the poorest 20%\nof population increases by 1%, the GDP increases by 0.38%. Some studies find that inequality has a negative impact on\ngrowth due to poor human capital accumulation and low fertility rates. while others point out that inequality creates\npolitical instability, resulting in lower investment. Some economists argue that widening income inequality has a\nnegative impact on economic growth because it negatively affects social consensus or social capital formation. One\nimportant research topic is the correlation between democratization and income redistribution. Some scholars explain\nthat social pressure for income redistribution rises as income inequality increases in a democratic society. In other\nwords, when democratization extends suffrage to a wider class of people, the increased political power of low and\nmiddle-income voters results in broader support for income redistribution and social welfare expansion. However, if\nthe rich have more political influence than the poor, the democratic system actually worsens income inequality rather\nthan improving it.",
    "questionText": "The passage refers to \"democratization\". Choose the one option below that comes closest to the opposite of this\nprocess.",
    "options": [
      "After the emergency decree, the regime shifted toward authoritarianism as suffrage narrowed and opposition\nparties were deregistered.",
      "Corporate donations were capped and parties received public funding which was portrayed as establishing an\noligarchy.",
      "Municipalities adopted participatory budgeting and recall elections which a press release called\ntotalitarianism.",
      "The coalition imposed term limits and strengthened judicial review in order to further entrench autocratic rule."
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S1_VARC_18",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 18,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S1_RC_17",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nStudies showing that income inequality plays a positive role in economic growth are largely based on three arguments.\nThe first argument focuses on investment indivisibilities wherein large sunk costs are required when implementing new\nfundamental innovations. Without stock markets and financial institutions to mobilize large sums of money, a high\nconcentration of wealth is needed for individuals to undertake new industrial activities accompanied by high sunk\ncosts. One study shows the relation between economic growth and income inequality for 45 countries during 1966-\n1995. It was found that the increase in income inequality has a significant positive relationship with economic growth\nin the short and medium term. Using system GMM, another study estimated the relation between income inequality\nand economic growth for 106 countries during 1965–2005 period. The results show that income inequality has a\npositive impact on economic growth in the short run, but the two are negatively correlated in the long run. The second\nargument is related to moral hazard and incentives. Because economic performance is determined by the\nunobservable level of effort that agents make, paying compensations without taking into account the economic\nperformance achieved by individual agents will fail to elicit optimum effort from the agents. Thus, certain income\ninequalities contribute to growth by enhancing worker motivation and by giving motivation to innovators and\nentrepreneurs. Finally, another study point[s] out that the concentration of wealth or stock ownership in relation to\ncorporate governance contributes to growth. If stock ownership is distributed and owned by a large number of\nshareholders, it is not easy to make quick decisions due to the conflicting interests among shareholders, and this may\nalso cause a free-rider problem in terms of monitoring and supervising managers and workers.\nVarious studies have examined the relationships between income inequality and economic growth, and most of these\nassert that a negative correlation exists between the two. Analyzing 159 countries for 1980–2012, they conclude that\nthere exists a negative relation between income inequality and economic growth; when the income share of the richest\n20% of population increases by 1%, the GDP decreases by 0.08%, whereas when the income share of the poorest 20%\nof population increases by 1%, the GDP increases by 0.38%. Some studies find that inequality has a negative impact on\ngrowth due to poor human capital accumulation and low fertility rates. while others point out that inequality creates\npolitical instability, resulting in lower investment. Some economists argue that widening income inequality has a\nnegative impact on economic growth because it negatively affects social consensus or social capital formation. One\nimportant research topic is the correlation between democratization and income redistribution. Some scholars explain\nthat social pressure for income redistribution rises as income inequality increases in a democratic society. In other\nwords, when democratization extends suffrage to a wider class of people, the increased political power of low and\nmiddle-income voters results in broader support for income redistribution and social welfare expansion. However, if\nthe rich have more political influence than the poor, the democratic system actually worsens income inequality rather\nthan improving it.",
    "questionText": "According to the incentive or moral hazard argument, which one of the designs below is most consistent with the\nclaim that some inequality can raise growth?",
    "options": [
      "Rents protected by market power that enlarge top incomes without linking pay to results.",
      "Wages are determined by tenure rather than output to ensure equity.",
      "Pay rewards on verifiable performance for highly productive workers.",
      "A regime that concentrates stock ownership in relation to corporate governance."
    ],
    "correctAnswer": 2,
    "explanation": "Official CAT answer: C."
  },
  {
    "id": "S1_VARC_19",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 19,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S1_RC_17",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nStudies showing that income inequality plays a positive role in economic growth are largely based on three arguments.\nThe first argument focuses on investment indivisibilities wherein large sunk costs are required when implementing new\nfundamental innovations. Without stock markets and financial institutions to mobilize large sums of money, a high\nconcentration of wealth is needed for individuals to undertake new industrial activities accompanied by high sunk\ncosts. One study shows the relation between economic growth and income inequality for 45 countries during 1966-\n1995. It was found that the increase in income inequality has a significant positive relationship with economic growth\nin the short and medium term. Using system GMM, another study estimated the relation between income inequality\nand economic growth for 106 countries during 1965–2005 period. The results show that income inequality has a\npositive impact on economic growth in the short run, but the two are negatively correlated in the long run. The second\nargument is related to moral hazard and incentives. Because economic performance is determined by the\nunobservable level of effort that agents make, paying compensations without taking into account the economic\nperformance achieved by individual agents will fail to elicit optimum effort from the agents. Thus, certain income\ninequalities contribute to growth by enhancing worker motivation and by giving motivation to innovators and\nentrepreneurs. Finally, another study point[s] out that the concentration of wealth or stock ownership in relation to\ncorporate governance contributes to growth. If stock ownership is distributed and owned by a large number of\nshareholders, it is not easy to make quick decisions due to the conflicting interests among shareholders, and this may\nalso cause a free-rider problem in terms of monitoring and supervising managers and workers.\nVarious studies have examined the relationships between income inequality and economic growth, and most of these\nassert that a negative correlation exists between the two. Analyzing 159 countries for 1980–2012, they conclude that\nthere exists a negative relation between income inequality and economic growth; when the income share of the richest\n20% of population increases by 1%, the GDP decreases by 0.08%, whereas when the income share of the poorest 20%\nof population increases by 1%, the GDP increases by 0.38%. Some studies find that inequality has a negative impact on\ngrowth due to poor human capital accumulation and low fertility rates. while others point out that inequality creates\npolitical instability, resulting in lower investment. Some economists argue that widening income inequality has a\nnegative impact on economic growth because it negatively affects social consensus or social capital formation. One\nimportant research topic is the correlation between democratization and income redistribution. Some scholars explain\nthat social pressure for income redistribution rises as income inequality increases in a democratic society. In other\nwords, when democratization extends suffrage to a wider class of people, the increased political power of low and\nmiddle-income voters results in broader support for income redistribution and social welfare expansion. However, if\nthe rich have more political influence than the poor, the democratic system actually worsens income inequality rather\nthan improving it.",
    "questionText": "The primary function of the three-part case for a positive income inequality economic growth link in the first half\nof the passage is to show that:",
    "options": [
      "Inequality can aid short-term growth in settings with high sunk costs, incentive alignment, and concentrated\nownership.",
      "Inequality boosts growth in every period and type of economy, regardless of finance or governance conditions.",
      "Dispersed ownership speeds corporate decision-making and removes free rider problems.",
      "Mature stock markets make wealth concentration unnecessary, yet they might still be harmful to investment."
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S1_VARC_20",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 20,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S1_RC_17",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nStudies showing that income inequality plays a positive role in economic growth are largely based on three arguments.\nThe first argument focuses on investment indivisibilities wherein large sunk costs are required when implementing new\nfundamental innovations. Without stock markets and financial institutions to mobilize large sums of money, a high\nconcentration of wealth is needed for individuals to undertake new industrial activities accompanied by high sunk\ncosts. One study shows the relation between economic growth and income inequality for 45 countries during 1966-\n1995. It was found that the increase in income inequality has a significant positive relationship with economic growth\nin the short and medium term. Using system GMM, another study estimated the relation between income inequality\nand economic growth for 106 countries during 1965–2005 period. The results show that income inequality has a\npositive impact on economic growth in the short run, but the two are negatively correlated in the long run. The second\nargument is related to moral hazard and incentives. Because economic performance is determined by the\nunobservable level of effort that agents make, paying compensations without taking into account the economic\nperformance achieved by individual agents will fail to elicit optimum effort from the agents. Thus, certain income\ninequalities contribute to growth by enhancing worker motivation and by giving motivation to innovators and\nentrepreneurs. Finally, another study point[s] out that the concentration of wealth or stock ownership in relation to\ncorporate governance contributes to growth. If stock ownership is distributed and owned by a large number of\nshareholders, it is not easy to make quick decisions due to the conflicting interests among shareholders, and this may\nalso cause a free-rider problem in terms of monitoring and supervising managers and workers.\nVarious studies have examined the relationships between income inequality and economic growth, and most of these\nassert that a negative correlation exists between the two. Analyzing 159 countries for 1980–2012, they conclude that\nthere exists a negative relation between income inequality and economic growth; when the income share of the richest\n20% of population increases by 1%, the GDP decreases by 0.08%, whereas when the income share of the poorest 20%\nof population increases by 1%, the GDP increases by 0.38%. Some studies find that inequality has a negative impact on\ngrowth due to poor human capital accumulation and low fertility rates. while others point out that inequality creates\npolitical instability, resulting in lower investment. Some economists argue that widening income inequality has a\nnegative impact on economic growth because it negatively affects social consensus or social capital formation. One\nimportant research topic is the correlation between democratization and income redistribution. Some scholars explain\nthat social pressure for income redistribution rises as income inequality increases in a democratic society. In other\nwords, when democratization extends suffrage to a wider class of people, the increased political power of low and\nmiddle-income voters results in broader support for income redistribution and social welfare expansion. However, if\nthe rich have more political influence than the poor, the democratic system actually worsens income inequality rather\nthan improving it.",
    "questionText": "Which one of the options below best summarises the passage?",
    "options": [
      "The passage confines its discussion to financing gaps and corporate control while undercutting cross country\nevidence and overlooking the significance of concerns regarding human capital accumulation, fertility rates,\nand income redistribution under democratisation.",
      "The passage argues that income inequality accelerates economic growth while also emphasising the\nsignificance of concerns regarding human capital accumulation, fertility rates, and political instability.",
      "The passage outlines investment, incentive, and governance channels through which income inequality may\nsupport economic growth and reports short-term gains while noting long-term drawbacks.",
      "The passage claims that evaluating the effect of income inequality on economic growth without considering\nboth short- and long-term consequences is misguided."
    ],
    "correctAnswer": 2,
    "explanation": "Official CAT answer: C."
  },
  {
    "id": "S1_VARC_21",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 21,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S1_RC_21",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nHow can we know what someone else is thinking or feeling, let alone prove it in court? In his 1863 book, A General\nView of the Criminal Law of England, James Fitzjames Stephen, among the most celebrated legal thinkers of his\ngeneration, was of the opinion that the assessment of a person's mental state was an inference made with \"little\nconsciousness.\" In a criminal case, jurors, doctors, and lawyers could watch defendants scrutinizing clothing,\nmannerisms, tone of voice but the best they could hope for were clues. Rounding these clues up to a judgment about\na defendant's guilt, or a defendant's life, was an act of empathy and imagination. The closer the resemblance between\ndefendants and their judges, the easier it was to overlook the gap that inference filled. Conversely, when a defendant\nstruck officials as unlike themselves, whether by dint of disease, gender, confession, or race, the precariousness of\njudgments about mental state was exposed.\nIn the nineteenth century, physicians who specialized in the study of madness and the care of the insane held\nthemselves out as experts in the new field of mental science. Often called alienists or mad doctors, they were the\npredecessors of modern psychiatrists, neurologists, and psychologists. The opinions of family and neighbors had once\nbeen sufficient to sift the sane from the insane, but a growing belief that insanity was a subtle condition that required\nexpert, medical diagnosis pushed physicians into the witness box. Lawyers for both prosecution and defense began to\nrecruit alienists to assess defendants' sanity and to testify to it in court.\nIrresponsibility and insanity were not identical, however. Criminal responsibility was a legal concept and not,\nfundamentally, a medical one. Stephen explained: \"The question 'What are the mental elements of responsibility?' is,\nand must be, a legal question. It cannot be anything else, for the meaning of responsibility is liability to punishment.\"\nNonetheless, medical and legal accounts of what it meant to be mentally sound became entangled and mutually\nreferential throughout the nineteenth century. Lawyers relied on medical knowledge to inform their opinions and\narguments about the sanity of their clients. Doctors commented on the legal responsibility of their patients. Ultimately,\nthe fields of criminal law and mental science were both invested in constructing an image of the broken and damaged\npsyche that could be contrasted with the whole and healthy one. This shared interest, and the shared space of the\ncriminal courtroom, made it nearly impossible to consider responsibility without medicine, or insanity without law.\nPhysicians and lawyers shared more than just concern for the mind. Class, race, and gender bound these middle-class,\nwhite, professional men together, as did family ties, patriotism, Protestantism, business ventures, the alumni networks\nof elite schools and universities, and structures of political patronage. But for all their affinities, men of medicine and\nlaw were divided by contests over the borders of criminal responsibility, as much within each profession as between\nthem. Alienists steadily pushed the boundaries of their field, developing increasingly complex and capacious definitions\nof insanity. Eccentricity and aggression came to be classified as symptoms of mental disease, at least by some.",
    "questionText": "Study the following sets of concepts and identify the set that is conceptually closest to the concerns and arguments\nof the passage.",
    "options": [
      "Judgement, Belief, Accounts, Patronage.",
      "Empathy, Prosecution, Knowledge, Business.",
      "Assessment, Empathy, Prosecution, Patriotism.",
      "Judgement, Insanity, Punishment, Responsibility."
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S1_VARC_22",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 22,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S1_RC_21",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nHow can we know what someone else is thinking or feeling, let alone prove it in court? In his 1863 book, A General\nView of the Criminal Law of England, James Fitzjames Stephen, among the most celebrated legal thinkers of his\ngeneration, was of the opinion that the assessment of a person's mental state was an inference made with \"little\nconsciousness.\" In a criminal case, jurors, doctors, and lawyers could watch defendants scrutinizing clothing,\nmannerisms, tone of voice but the best they could hope for were clues. Rounding these clues up to a judgment about\na defendant's guilt, or a defendant's life, was an act of empathy and imagination. The closer the resemblance between\ndefendants and their judges, the easier it was to overlook the gap that inference filled. Conversely, when a defendant\nstruck officials as unlike themselves, whether by dint of disease, gender, confession, or race, the precariousness of\njudgments about mental state was exposed.\nIn the nineteenth century, physicians who specialized in the study of madness and the care of the insane held\nthemselves out as experts in the new field of mental science. Often called alienists or mad doctors, they were the\npredecessors of modern psychiatrists, neurologists, and psychologists. The opinions of family and neighbors had once\nbeen sufficient to sift the sane from the insane, but a growing belief that insanity was a subtle condition that required\nexpert, medical diagnosis pushed physicians into the witness box. Lawyers for both prosecution and defense began to\nrecruit alienists to assess defendants' sanity and to testify to it in court.\nIrresponsibility and insanity were not identical, however. Criminal responsibility was a legal concept and not,\nfundamentally, a medical one. Stephen explained: \"The question 'What are the mental elements of responsibility?' is,\nand must be, a legal question. It cannot be anything else, for the meaning of responsibility is liability to punishment.\"\nNonetheless, medical and legal accounts of what it meant to be mentally sound became entangled and mutually\nreferential throughout the nineteenth century. Lawyers relied on medical knowledge to inform their opinions and\narguments about the sanity of their clients. Doctors commented on the legal responsibility of their patients. Ultimately,\nthe fields of criminal law and mental science were both invested in constructing an image of the broken and damaged\npsyche that could be contrasted with the whole and healthy one. This shared interest, and the shared space of the\ncriminal courtroom, made it nearly impossible to consider responsibility without medicine, or insanity without law.\nPhysicians and lawyers shared more than just concern for the mind. Class, race, and gender bound these middle-class,\nwhite, professional men together, as did family ties, patriotism, Protestantism, business ventures, the alumni networks\nof elite schools and universities, and structures of political patronage. But for all their affinities, men of medicine and\nlaw were divided by contests over the borders of criminal responsibility, as much within each profession as between\nthem. Alienists steadily pushed the boundaries of their field, developing increasingly complex and capacious definitions\nof insanity. Eccentricity and aggression came to be classified as symptoms of mental disease, at least by some.",
    "questionText": "\"Conversely, when a defendant struck officials as unlike themselves, whether by dint of disease, gender, confession,\nor race, the precariousness of judgments about mental state was exposed.\" Which one of the following best\ndescribes the use of the word \"confession\" in this sentence?",
    "options": [
      "The defendants struck out at the officials and then confessed to the act.",
      "Referring to the practice of 'confession' in some faiths, here it is a metaphor for the religion of the defendant.",
      "Referring to the defendant's confession of his or her crime as false, because 'dint' is an archaic form of 'didn't'\nor 'did not'.",
      "Referring to the gender, race or disease claimed as a defence by the defendant, here it is a synonym for\n'professing' a gender, race, or disease."
    ],
    "correctAnswer": 1,
    "explanation": "Official CAT answer: B."
  },
  {
    "id": "S1_VARC_23",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 23,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S1_RC_21",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nHow can we know what someone else is thinking or feeling, let alone prove it in court? In his 1863 book, A General\nView of the Criminal Law of England, James Fitzjames Stephen, among the most celebrated legal thinkers of his\ngeneration, was of the opinion that the assessment of a person's mental state was an inference made with \"little\nconsciousness.\" In a criminal case, jurors, doctors, and lawyers could watch defendants scrutinizing clothing,\nmannerisms, tone of voice but the best they could hope for were clues. Rounding these clues up to a judgment about\na defendant's guilt, or a defendant's life, was an act of empathy and imagination. The closer the resemblance between\ndefendants and their judges, the easier it was to overlook the gap that inference filled. Conversely, when a defendant\nstruck officials as unlike themselves, whether by dint of disease, gender, confession, or race, the precariousness of\njudgments about mental state was exposed.\nIn the nineteenth century, physicians who specialized in the study of madness and the care of the insane held\nthemselves out as experts in the new field of mental science. Often called alienists or mad doctors, they were the\npredecessors of modern psychiatrists, neurologists, and psychologists. The opinions of family and neighbors had once\nbeen sufficient to sift the sane from the insane, but a growing belief that insanity was a subtle condition that required\nexpert, medical diagnosis pushed physicians into the witness box. Lawyers for both prosecution and defense began to\nrecruit alienists to assess defendants' sanity and to testify to it in court.\nIrresponsibility and insanity were not identical, however. Criminal responsibility was a legal concept and not,\nfundamentally, a medical one. Stephen explained: \"The question 'What are the mental elements of responsibility?' is,\nand must be, a legal question. It cannot be anything else, for the meaning of responsibility is liability to punishment.\"\nNonetheless, medical and legal accounts of what it meant to be mentally sound became entangled and mutually\nreferential throughout the nineteenth century. Lawyers relied on medical knowledge to inform their opinions and\narguments about the sanity of their clients. Doctors commented on the legal responsibility of their patients. Ultimately,\nthe fields of criminal law and mental science were both invested in constructing an image of the broken and damaged\npsyche that could be contrasted with the whole and healthy one. This shared interest, and the shared space of the\ncriminal courtroom, made it nearly impossible to consider responsibility without medicine, or insanity without law.\nPhysicians and lawyers shared more than just concern for the mind. Class, race, and gender bound these middle-class,\nwhite, professional men together, as did family ties, patriotism, Protestantism, business ventures, the alumni networks\nof elite schools and universities, and structures of political patronage. But for all their affinities, men of medicine and\nlaw were divided by contests over the borders of criminal responsibility, as much within each profession as between\nthem. Alienists steadily pushed the boundaries of their field, developing increasingly complex and capacious definitions\nof insanity. Eccentricity and aggression came to be classified as symptoms of mental disease, at least by some.",
    "questionText": "The last paragraph of the passage refers to \"middle-class, white, professional men\". Which one of the following\nqualities best describes the connection among them?",
    "options": [
      "Eccentricity and aggression.",
      "Empathy and imagination.",
      "The borders of criminal responsibility.",
      "The opinions of family and neighbours."
    ],
    "correctAnswer": 2,
    "explanation": "Official CAT answer: C."
  },
  {
    "id": "S1_VARC_24",
    "slot": 1,
    "section": "VARC",
    "questionNumber": 24,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S1_RC_21",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nHow can we know what someone else is thinking or feeling, let alone prove it in court? In his 1863 book, A General\nView of the Criminal Law of England, James Fitzjames Stephen, among the most celebrated legal thinkers of his\ngeneration, was of the opinion that the assessment of a person's mental state was an inference made with \"little\nconsciousness.\" In a criminal case, jurors, doctors, and lawyers could watch defendants scrutinizing clothing,\nmannerisms, tone of voice but the best they could hope for were clues. Rounding these clues up to a judgment about\na defendant's guilt, or a defendant's life, was an act of empathy and imagination. The closer the resemblance between\ndefendants and their judges, the easier it was to overlook the gap that inference filled. Conversely, when a defendant\nstruck officials as unlike themselves, whether by dint of disease, gender, confession, or race, the precariousness of\njudgments about mental state was exposed.\nIn the nineteenth century, physicians who specialized in the study of madness and the care of the insane held\nthemselves out as experts in the new field of mental science. Often called alienists or mad doctors, they were the\npredecessors of modern psychiatrists, neurologists, and psychologists. The opinions of family and neighbors had once\nbeen sufficient to sift the sane from the insane, but a growing belief that insanity was a subtle condition that required\nexpert, medical diagnosis pushed physicians into the witness box. Lawyers for both prosecution and defense began to\nrecruit alienists to assess defendants' sanity and to testify to it in court.\nIrresponsibility and insanity were not identical, however. Criminal responsibility was a legal concept and not,\nfundamentally, a medical one. Stephen explained: \"The question 'What are the mental elements of responsibility?' is,\nand must be, a legal question. It cannot be anything else, for the meaning of responsibility is liability to punishment.\"\nNonetheless, medical and legal accounts of what it meant to be mentally sound became entangled and mutually\nreferential throughout the nineteenth century. Lawyers relied on medical knowledge to inform their opinions and\narguments about the sanity of their clients. Doctors commented on the legal responsibility of their patients. Ultimately,\nthe fields of criminal law and mental science were both invested in constructing an image of the broken and damaged\npsyche that could be contrasted with the whole and healthy one. This shared interest, and the shared space of the\ncriminal courtroom, made it nearly impossible to consider responsibility without medicine, or insanity without law.\nPhysicians and lawyers shared more than just concern for the mind. Class, race, and gender bound these middle-class,\nwhite, professional men together, as did family ties, patriotism, Protestantism, business ventures, the alumni networks\nof elite schools and universities, and structures of political patronage. But for all their affinities, men of medicine and\nlaw were divided by contests over the borders of criminal responsibility, as much within each profession as between\nthem. Alienists steadily pushed the boundaries of their field, developing increasingly complex and capacious definitions\nof insanity. Eccentricity and aggression came to be classified as symptoms of mental disease, at least by some.",
    "questionText": "According to the passage, who or what was an \"alienist\"?",
    "options": [
      "Physicians who specialised in the study of madness and the care of the insane in the nineteenth century.",
      "Professionals who pushed the boundaries of their fields till they became unrecognisable in the nineteenth\ncentury.",
      "Physicians and lawyers who were responsible for the condition of immigrants or 'aliens' in the nineteenth\ncentury.",
      "Physicians and lawyers who were responsible for examining accounts of extraterrestrials or 'aliens' in the\nnineteenth century."
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S1_DILR_1",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 1,
    "type": "TITA",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_1",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 1",
    "passage": "Six web surfers M, N, O, P, X, and Y each had 30 stars which they distributed among four bloggers A, B, C, and D. The\nnumber of stars received by A and B from the six web surfers is shown in the figure below.\n\nThe following additional facts are known regarding the number of stars received by the bloggers from the surfers.",
    "diagramUrl": "/src/assets/questions/slot1_lrdi_stars.png",
    "questionText": "The numbers of stars received by the bloggers from the surfers were all multiples of 5 (including 0).\n2. The total numbers of stars received by the bloggers were the same.\n3. Each blogger received a different number of stars from M.\n4. Two surfers gave all their stars to a single blogger.\n5. D received more stars than C from Y.\n1. What was the total number of stars received by D?",
    "options": [],
    "correctAnswer": "45",
    "explanation": "Official CAT answer: 45."
  },
  {
    "id": "S1_DILR_2",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 2,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_1",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 1",
    "passage": "Six web surfers M, N, O, P, X, and Y each had 30 stars which they distributed among four bloggers A, B, C, and D. The\nnumber of stars received by A and B from the six web surfers is shown in the figure below.\n\nThe following additional facts are known regarding the number of stars received by the bloggers from the surfers.",
    "diagramUrl": "/src/assets/questions/slot1_lrdi_stars.png",
    "questionText": "What was the number of stars received by D from Y?",
    "options": [
      "5",
      "Cannot be determined",
      "0",
      "10"
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S1_DILR_3",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 3,
    "type": "TITA",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_1",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 1",
    "passage": "Six web surfers M, N, O, P, X, and Y each had 30 stars which they distributed among four bloggers A, B, C, and D. The\nnumber of stars received by A and B from the six web surfers is shown in the figure below.\n\nThe following additional facts are known regarding the number of stars received by the bloggers from the surfers.",
    "diagramUrl": "/src/assets/questions/slot1_lrdi_stars.png",
    "questionText": "How many surfers distributed their stars among exactly 2 bloggers?",
    "options": [],
    "correctAnswer": "2",
    "explanation": "Official CAT answer: 2."
  },
  {
    "id": "S1_DILR_4",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 4,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_1",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 1",
    "passage": "Six web surfers M, N, O, P, X, and Y each had 30 stars which they distributed among four bloggers A, B, C, and D. The\nnumber of stars received by A and B from the six web surfers is shown in the figure below.\n\nThe following additional facts are known regarding the number of stars received by the bloggers from the surfers.",
    "diagramUrl": "/src/assets/questions/slot1_lrdi_stars.png",
    "questionText": "Which of the following can be determined with certainty?\n(I). The number of stars received by C from M.\n(II). The number of stars received by D from O.",
    "options": [
      "Neither I nor II",
      "Only I",
      "Only II",
      "Both I and II"
    ],
    "correctAnswer": 1,
    "explanation": "Official CAT answer: B."
  },
  {
    "id": "S1_DILR_5",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 5,
    "type": "TITA",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_2",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 2",
    "passage": "The chart below provides complete information about the number of countries visited by Dheeraj, Samantha and\nNitesh, in Asia, Europe and the rest of the world (ROW).\n\nThe following additional facts are known about the countries visited by them.\n1. 32 countries were visited by at least one of them.\n2. USA (in ROW) is the only country that was visited by all three of them.\n3. China (in Asia) is the only country that was visited by both Dheeraj and Nitesh, but not by Samantha.\n4. France (in Europe) is the only country outside Asia, which was visited by both Dheeraj and Samantha, but not\nby Nitesh.",
    "diagramUrl": "/src/assets/questions/slot1_lrdi_countries.png",
    "questionText": "Half of the countries visited by both Samantha and Nitesh are in Europe.\n\n5. How many countries in Asia were visited by at least one of Dheeraj, Samantha and Nitesh?",
    "options": [],
    "correctAnswer": "3",
    "explanation": "Official CAT answer: 3."
  },
  {
    "id": "S1_DILR_6",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 6,
    "type": "TITA",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_2",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 2",
    "passage": "The chart below provides complete information about the number of countries visited by Dheeraj, Samantha and\nNitesh, in Asia, Europe and the rest of the world (ROW).\n\nThe following additional facts are known about the countries visited by them.\n1. 32 countries were visited by at least one of them.\n2. USA (in ROW) is the only country that was visited by all three of them.\n3. China (in Asia) is the only country that was visited by both Dheeraj and Nitesh, but not by Samantha.\n4. France (in Europe) is the only country outside Asia, which was visited by both Dheeraj and Samantha, but not\nby Nitesh.",
    "diagramUrl": "/src/assets/questions/slot1_lrdi_countries.png",
    "questionText": "How many countries in Europe were visited only by Nitesh?",
    "options": [],
    "correctAnswer": "2",
    "explanation": "Official CAT answer: 2."
  },
  {
    "id": "S1_DILR_7",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 7,
    "type": "TITA",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_2",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 2",
    "passage": "The chart below provides complete information about the number of countries visited by Dheeraj, Samantha and\nNitesh, in Asia, Europe and the rest of the world (ROW).\n\nThe following additional facts are known about the countries visited by them.\n1. 32 countries were visited by at least one of them.\n2. USA (in ROW) is the only country that was visited by all three of them.\n3. China (in Asia) is the only country that was visited by both Dheeraj and Nitesh, but not by Samantha.\n4. France (in Europe) is the only country outside Asia, which was visited by both Dheeraj and Samantha, but not\nby Nitesh.",
    "diagramUrl": "/src/assets/questions/slot1_lrdi_countries.png",
    "questionText": "How many countries in the ROW were visited by both Nitesh and Samantha?",
    "options": [],
    "correctAnswer": "4",
    "explanation": "Official CAT answer: 4."
  },
  {
    "id": "S1_DILR_8",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 8,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_2",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 2",
    "passage": "The chart below provides complete information about the number of countries visited by Dheeraj, Samantha and\nNitesh, in Asia, Europe and the rest of the world (ROW).\n\nThe following additional facts are known about the countries visited by them.\n1. 32 countries were visited by at least one of them.\n2. USA (in ROW) is the only country that was visited by all three of them.\n3. China (in Asia) is the only country that was visited by both Dheeraj and Nitesh, but not by Samantha.\n4. France (in Europe) is the only country outside Asia, which was visited by both Dheeraj and Samantha, but not\nby Nitesh.",
    "diagramUrl": "/src/assets/questions/slot1_lrdi_countries.png",
    "questionText": "How many countries in Europe were visited by exactly one of Dheeraj, Samantha and Nitesh?",
    "options": [
      "12",
      "14",
      "10",
      "5"
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S1_DILR_9",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 9,
    "type": "TITA",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_3",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 3",
    "passage": "The game of QUIET is played between two teams. Six teams, numbered 1, 2, 3, 4, 5, and 6, play in a QUIET tournament.\nThese teams are divided equally into two groups. In the tournament, each team plays every other team in the same\ngroup only once, and each team in the other group exactly twice. The tournament has several rounds, each of which\nconsists of a few games. Every team plays exactly one game in each round.\nThe following additional facts are known about the schedule of games in the tournament.\n1. Each team played against a team from the other group in Round 8.\n2. In Round 4 and Round 7, the match-ups, that is the pair of teams playing against each other, were identical. In\nRound 5 and Round 8, the match-ups were identical.\n3. Team 4 played Team 6 in both Round 1 and Round 2.\n4. Team 1 played Team 5 ONLY once and that was in Round 2.\n5. Team 3 played Team 4 in Round 3. Team 1 played Team 6 in Round 6.\n6. In Round 8, Team 3 played Team 6, while Team 2 played Team 5.",
    "diagramUrl": null,
    "questionText": "How many rounds were there in the tournament?",
    "options": [],
    "correctAnswer": "8",
    "explanation": "Official CAT answer: 8."
  },
  {
    "id": "S1_DILR_10",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 10,
    "type": "TITA",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_3",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 3",
    "passage": "The game of QUIET is played between two teams. Six teams, numbered 1, 2, 3, 4, 5, and 6, play in a QUIET tournament.\nThese teams are divided equally into two groups. In the tournament, each team plays every other team in the same\ngroup only once, and each team in the other group exactly twice. The tournament has several rounds, each of which\nconsists of a few games. Every team plays exactly one game in each round.\nThe following additional facts are known about the schedule of games in the tournament.\n1. Each team played against a team from the other group in Round 8.\n2. In Round 4 and Round 7, the match-ups, that is the pair of teams playing against each other, were identical. In\nRound 5 and Round 8, the match-ups were identical.\n3. Team 4 played Team 6 in both Round 1 and Round 2.\n4. Team 1 played Team 5 ONLY once and that was in Round 2.\n5. Team 3 played Team 4 in Round 3. Team 1 played Team 6 in Round 6.\n6. In Round 8, Team 3 played Team 6, while Team 2 played Team 5.",
    "diagramUrl": null,
    "questionText": "What is the number of the team that played Team 1 in Round 5?",
    "options": [],
    "correctAnswer": "4",
    "explanation": "Official CAT answer: 4."
  },
  {
    "id": "S1_DILR_11",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 11,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_3",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 3",
    "passage": "The game of QUIET is played between two teams. Six teams, numbered 1, 2, 3, 4, 5, and 6, play in a QUIET tournament.\nThese teams are divided equally into two groups. In the tournament, each team plays every other team in the same\ngroup only once, and each team in the other group exactly twice. The tournament has several rounds, each of which\nconsists of a few games. Every team plays exactly one game in each round.\nThe following additional facts are known about the schedule of games in the tournament.\n1. Each team played against a team from the other group in Round 8.\n2. In Round 4 and Round 7, the match-ups, that is the pair of teams playing against each other, were identical. In\nRound 5 and Round 8, the match-ups were identical.\n3. Team 4 played Team 6 in both Round 1 and Round 2.\n4. Team 1 played Team 5 ONLY once and that was in Round 2.\n5. Team 3 played Team 4 in Round 3. Team 1 played Team 6 in Round 6.\n6. In Round 8, Team 3 played Team 6, while Team 2 played Team 5.",
    "diagramUrl": null,
    "questionText": "Which team among the teams numbered 2, 3, 4, and 5 was not part of the same group?",
    "options": [
      "5",
      "2",
      "4",
      "3"
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S1_DILR_12",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 12,
    "type": "TITA",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_3",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 3",
    "passage": "The game of QUIET is played between two teams. Six teams, numbered 1, 2, 3, 4, 5, and 6, play in a QUIET tournament.\nThese teams are divided equally into two groups. In the tournament, each team plays every other team in the same\ngroup only once, and each team in the other group exactly twice. The tournament has several rounds, each of which\nconsists of a few games. Every team plays exactly one game in each round.\nThe following additional facts are known about the schedule of games in the tournament.\n1. Each team played against a team from the other group in Round 8.\n2. In Round 4 and Round 7, the match-ups, that is the pair of teams playing against each other, were identical. In\nRound 5 and Round 8, the match-ups were identical.\n3. Team 4 played Team 6 in both Round 1 and Round 2.\n4. Team 1 played Team 5 ONLY once and that was in Round 2.\n5. Team 3 played Team 4 in Round 3. Team 1 played Team 6 in Round 6.\n6. In Round 8, Team 3 played Team 6, while Team 2 played Team 5.",
    "diagramUrl": null,
    "questionText": "What is the number of the team that played Team 1 in Round 7?",
    "options": [],
    "correctAnswer": "3",
    "explanation": "Official CAT answer: 3."
  },
  {
    "id": "S1_DILR_13",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 13,
    "type": "TITA",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_3",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 3",
    "passage": "The game of QUIET is played between two teams. Six teams, numbered 1, 2, 3, 4, 5, and 6, play in a QUIET tournament.\nThese teams are divided equally into two groups. In the tournament, each team plays every other team in the same\ngroup only once, and each team in the other group exactly twice. The tournament has several rounds, each of which\nconsists of a few games. Every team plays exactly one game in each round.\nThe following additional facts are known about the schedule of games in the tournament.\n1. Each team played against a team from the other group in Round 8.\n2. In Round 4 and Round 7, the match-ups, that is the pair of teams playing against each other, were identical. In\nRound 5 and Round 8, the match-ups were identical.\n3. Team 4 played Team 6 in both Round 1 and Round 2.\n4. Team 1 played Team 5 ONLY once and that was in Round 2.\n5. Team 3 played Team 4 in Round 3. Team 1 played Team 6 in Round 6.\n6. In Round 8, Team 3 played Team 6, while Team 2 played Team 5.",
    "diagramUrl": null,
    "questionText": "What is the number of the team that played Team 6 in Round 3?",
    "options": [],
    "correctAnswer": "5",
    "explanation": "Official CAT answer: 5."
  },
  {
    "id": "S1_DILR_14",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 14,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_4",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 4",
    "passage": "The vertical axis shows the price of the share in rupees. A share whose closing price (price at the end of the day) is\nmore than its opening price (price at the start of the day) is called a bullish share; otherwise, it is called a bearish share.\nAll bullish and bearish shares are shown in green and red colour respectively.",
    "diagramUrl": "/src/assets/questions/slot1_lrdi_candlestick.png",
    "questionText": "Daily Share Price Variability (SPV) is defined as (Day's high price - Day's low price) / (Average of the opening and\nclosing prices during the day). Which among the shares A, C, D and F had the highest SPV on that day?",
    "options": [
      "A",
      "F",
      "D",
      "C"
    ],
    "correctAnswer": 2,
    "explanation": "Official CAT answer: C."
  },
  {
    "id": "S1_DILR_15",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 15,
    "type": "TITA",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_4",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 4",
    "passage": "The vertical axis shows the price of the share in rupees. A share whose closing price (price at the end of the day) is\nmore than its opening price (price at the start of the day) is called a bullish share; otherwise, it is called a bearish share.\nAll bullish and bearish shares are shown in green and red colour respectively.",
    "diagramUrl": "/src/assets/questions/slot1_lrdi_candlestick.png",
    "questionText": "Daily Share Price Variability (SPV) is defined as (Day's high price - Day's low price) / (Average of the opening and\nclosing prices during the day). How many shares had an SPV greater than 0.5 on that day?",
    "options": [],
    "correctAnswer": "4",
    "explanation": "Official CAT answer: 4."
  },
  {
    "id": "S1_DILR_16",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 16,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_4",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 4",
    "passage": "The vertical axis shows the price of the share in rupees. A share whose closing price (price at the end of the day) is\nmore than its opening price (price at the start of the day) is called a bullish share; otherwise, it is called a bearish share.\nAll bullish and bearish shares are shown in green and red colour respectively.",
    "diagramUrl": "/src/assets/questions/slot1_lrdi_candlestick.png",
    "questionText": "Daily loss for a share is defined as (Opening price – Closing price) / (Opening price). Which among the shares A, B,\nF and G had the highest daily loss on that day?",
    "options": [
      "B",
      "G",
      "F",
      "A"
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S1_DILR_17",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 17,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_4",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 4",
    "passage": "The vertical axis shows the price of the share in rupees. A share whose closing price (price at the end of the day) is\nmore than its opening price (price at the start of the day) is called a bullish share; otherwise, it is called a bearish share.\nAll bullish and bearish shares are shown in green and red colour respectively.",
    "diagramUrl": "/src/assets/questions/slot1_lrdi_candlestick.png",
    "questionText": "What would have been the percentage wealth gain for a trader, who bought equal numbers of all bullish shares at\nopening price and sold them at their day's high?",
    "options": [
      "100%",
      "80%",
      "72%",
      "50%"
    ],
    "correctAnswer": 1,
    "explanation": "Official CAT answer: B."
  },
  {
    "id": "S1_DILR_18",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 18,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_5",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 5",
    "passage": "Two students, Amiya and Ramya are the only candidates in an election for the position of class representative. Students\nwill vote based on the intensity level of Amiya's and Ramya's campaigns and the type of campaigns they run. Each\ncampaign is said to have a level of 1 if it is a staid campaign and a level of 2 if it is a vigorous campaign. Campaigns can\nbe of two types, they can either focus on issues, or on attacking the other candidate.\nIf Amiya and Ramya both run campaigns focusing on issues, then\n•\nThe percentage of students voting in the election will be 20 times the sum of the levels of campaigning of the\ntwo students. For example, if Amiya and Ramya both run vigorous campaigns, then 20 × (2+2)%, that is, 80%\nof the students will vote in the election.\n•\nAmong voting students, the percentage of votes for each candidate will be proportional to the levels of their\ncampaigns. For example, if Amiya runs a staid (i.e., level 1) campaign while Ramya runs a vigorous (i.e., level 2)\ncampaign, then Amiya will receive 1/3 of the votes cast, and Ramya will receive the other 2/3.\nThe above-mentioned percentages change as follows if at least one of them runs a campaign attacking their opponent.\n•\nIf Amiya runs a campaign attacking Ramya and Ramya runs a campaign focusing on issues, then 10% of the\nstudents who would have otherwise voted for Amiya will vote for Ramya, and another 10% who would have\notherwise voted for Amiya, will not vote at all.\n•\nIf Ramya runs a campaign attacking Amiya and Amiya runs a campaign focusing on issues, then 20% of the\nstudents who would have otherwise voted for Ramya will vote for Amiya, and another 5% who would have\notherwise voted for Ramya, will not vote at all.\n•\nIf both run campaigns attacking each other, then 10% of the students who would have otherwise voted for\nthem had they run campaigns focusing on issues, will not vote at all.",
    "diagramUrl": null,
    "questionText": "If both of them run staid campaigns attacking the other, then what percentage of students will vote in the election?",
    "options": [
      "60%",
      "64%",
      "40%",
      "36%"
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S1_DILR_19",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 19,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_5",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 5",
    "passage": "Two students, Amiya and Ramya are the only candidates in an election for the position of class representative. Students\nwill vote based on the intensity level of Amiya's and Ramya's campaigns and the type of campaigns they run. Each\ncampaign is said to have a level of 1 if it is a staid campaign and a level of 2 if it is a vigorous campaign. Campaigns can\nbe of two types, they can either focus on issues, or on attacking the other candidate.\nIf Amiya and Ramya both run campaigns focusing on issues, then\n•\nThe percentage of students voting in the election will be 20 times the sum of the levels of campaigning of the\ntwo students. For example, if Amiya and Ramya both run vigorous campaigns, then 20 × (2+2)%, that is, 80%\nof the students will vote in the election.\n•\nAmong voting students, the percentage of votes for each candidate will be proportional to the levels of their\ncampaigns. For example, if Amiya runs a staid (i.e., level 1) campaign while Ramya runs a vigorous (i.e., level 2)\ncampaign, then Amiya will receive 1/3 of the votes cast, and Ramya will receive the other 2/3.\nThe above-mentioned percentages change as follows if at least one of them runs a campaign attacking their opponent.\n•\nIf Amiya runs a campaign attacking Ramya and Ramya runs a campaign focusing on issues, then 10% of the\nstudents who would have otherwise voted for Amiya will vote for Ramya, and another 10% who would have\notherwise voted for Amiya, will not vote at all.\n•\nIf Ramya runs a campaign attacking Amiya and Amiya runs a campaign focusing on issues, then 20% of the\nstudents who would have otherwise voted for Ramya will vote for Amiya, and another 5% who would have\notherwise voted for Ramya, will not vote at all.\n•\nIf both run campaigns attacking each other, then 10% of the students who would have otherwise voted for\nthem had they run campaigns focusing on issues, will not vote at all.",
    "diagramUrl": null,
    "questionText": "What is the minimum percentage of students who will vote in the election?",
    "options": [
      "38%",
      "36%",
      "32%",
      "40%"
    ],
    "correctAnswer": 1,
    "explanation": "Official CAT answer: B."
  },
  {
    "id": "S1_DILR_20",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 20,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_5",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 5",
    "passage": "Two students, Amiya and Ramya are the only candidates in an election for the position of class representative. Students\nwill vote based on the intensity level of Amiya's and Ramya's campaigns and the type of campaigns they run. Each\ncampaign is said to have a level of 1 if it is a staid campaign and a level of 2 if it is a vigorous campaign. Campaigns can\nbe of two types, they can either focus on issues, or on attacking the other candidate.\nIf Amiya and Ramya both run campaigns focusing on issues, then\n•\nThe percentage of students voting in the election will be 20 times the sum of the levels of campaigning of the\ntwo students. For example, if Amiya and Ramya both run vigorous campaigns, then 20 × (2+2)%, that is, 80%\nof the students will vote in the election.\n•\nAmong voting students, the percentage of votes for each candidate will be proportional to the levels of their\ncampaigns. For example, if Amiya runs a staid (i.e., level 1) campaign while Ramya runs a vigorous (i.e., level 2)\ncampaign, then Amiya will receive 1/3 of the votes cast, and Ramya will receive the other 2/3.\nThe above-mentioned percentages change as follows if at least one of them runs a campaign attacking their opponent.\n•\nIf Amiya runs a campaign attacking Ramya and Ramya runs a campaign focusing on issues, then 10% of the\nstudents who would have otherwise voted for Amiya will vote for Ramya, and another 10% who would have\notherwise voted for Amiya, will not vote at all.\n•\nIf Ramya runs a campaign attacking Amiya and Amiya runs a campaign focusing on issues, then 20% of the\nstudents who would have otherwise voted for Ramya will vote for Amiya, and another 5% who would have\notherwise voted for Ramya, will not vote at all.\n•\nIf both run campaigns attacking each other, then 10% of the students who would have otherwise voted for\nthem had they run campaigns focusing on issues, will not vote at all.",
    "diagramUrl": null,
    "questionText": "If Amiya runs a campaign focusing on issues, then what is the maximum percentage of votes that she can get?",
    "options": [
      "48%",
      "36%",
      "44%",
      "40%"
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S1_DILR_21",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 21,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_5",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 5",
    "passage": "Two students, Amiya and Ramya are the only candidates in an election for the position of class representative. Students\nwill vote based on the intensity level of Amiya's and Ramya's campaigns and the type of campaigns they run. Each\ncampaign is said to have a level of 1 if it is a staid campaign and a level of 2 if it is a vigorous campaign. Campaigns can\nbe of two types, they can either focus on issues, or on attacking the other candidate.\nIf Amiya and Ramya both run campaigns focusing on issues, then\n•\nThe percentage of students voting in the election will be 20 times the sum of the levels of campaigning of the\ntwo students. For example, if Amiya and Ramya both run vigorous campaigns, then 20 × (2+2)%, that is, 80%\nof the students will vote in the election.\n•\nAmong voting students, the percentage of votes for each candidate will be proportional to the levels of their\ncampaigns. For example, if Amiya runs a staid (i.e., level 1) campaign while Ramya runs a vigorous (i.e., level 2)\ncampaign, then Amiya will receive 1/3 of the votes cast, and Ramya will receive the other 2/3.\nThe above-mentioned percentages change as follows if at least one of them runs a campaign attacking their opponent.\n•\nIf Amiya runs a campaign attacking Ramya and Ramya runs a campaign focusing on issues, then 10% of the\nstudents who would have otherwise voted for Amiya will vote for Ramya, and another 10% who would have\notherwise voted for Amiya, will not vote at all.\n•\nIf Ramya runs a campaign attacking Amiya and Amiya runs a campaign focusing on issues, then 20% of the\nstudents who would have otherwise voted for Ramya will vote for Amiya, and another 5% who would have\notherwise voted for Ramya, will not vote at all.\n•\nIf both run campaigns attacking each other, then 10% of the students who would have otherwise voted for\nthem had they run campaigns focusing on issues, will not vote at all.",
    "diagramUrl": null,
    "questionText": "If Ramya runs a campaign attacking Amiya, then what is the minimum percentage of votes that she is guaranteed\nto get?",
    "options": [
      "15%",
      "18%",
      "12%",
      "30%"
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S1_DILR_22",
    "slot": 1,
    "section": "DILR",
    "questionNumber": 22,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S1_LRDI_SET_5",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 5",
    "passage": "Two students, Amiya and Ramya are the only candidates in an election for the position of class representative. Students\nwill vote based on the intensity level of Amiya's and Ramya's campaigns and the type of campaigns they run. Each\ncampaign is said to have a level of 1 if it is a staid campaign and a level of 2 if it is a vigorous campaign. Campaigns can\nbe of two types, they can either focus on issues, or on attacking the other candidate.\nIf Amiya and Ramya both run campaigns focusing on issues, then\n•\nThe percentage of students voting in the election will be 20 times the sum of the levels of campaigning of the\ntwo students. For example, if Amiya and Ramya both run vigorous campaigns, then 20 × (2+2)%, that is, 80%\nof the students will vote in the election.\n•\nAmong voting students, the percentage of votes for each candidate will be proportional to the levels of their\ncampaigns. For example, if Amiya runs a staid (i.e., level 1) campaign while Ramya runs a vigorous (i.e., level 2)\ncampaign, then Amiya will receive 1/3 of the votes cast, and Ramya will receive the other 2/3.\nThe above-mentioned percentages change as follows if at least one of them runs a campaign attacking their opponent.\n•\nIf Amiya runs a campaign attacking Ramya and Ramya runs a campaign focusing on issues, then 10% of the\nstudents who would have otherwise voted for Amiya will vote for Ramya, and another 10% who would have\notherwise voted for Amiya, will not vote at all.\n•\nIf Ramya runs a campaign attacking Amiya and Amiya runs a campaign focusing on issues, then 20% of the\nstudents who would have otherwise voted for Ramya will vote for Amiya, and another 5% who would have\notherwise voted for Ramya, will not vote at all.\n•\nIf both run campaigns attacking each other, then 10% of the students who would have otherwise voted for\nthem had they run campaigns focusing on issues, will not vote at all.",
    "diagramUrl": null,
    "questionText": "What is the maximum possible voting margin with which one of the candidates can win?",
    "options": [
      "20%",
      "28%",
      "26%",
      "29%"
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S1_QA_1",
    "slot": 1,
    "section": "QA",
    "questionNumber": 1,
    "type": "MCQ",
    "subtopic": "Quantitative Aptitude",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "If 𝑎−6𝑏+ 6𝑐= 4 and 6𝑎+ 3𝑏−3𝑐= 50, where a, b and c are real numbers, the value of 2𝑎+ 3𝑏−3𝑐 is",
    "options": [
      "18",
      "20",
      "15",
      "14"
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S1_QA_2",
    "slot": 1,
    "section": "QA",
    "questionNumber": 2,
    "type": "MCQ",
    "subtopic": "Quantitative Aptitude",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "A cafeteria offers 5 types of sandwiches. Moreover, for each type of sandwich, a customer can choose one of 4\nbreads and opt for either small or large sized sandwich. Optionally, the customer may also add up to 2 out of 6\navailable sauces. The number of different ways in which an order can be placed for a sandwich, is",
    "options": [
      "880",
      "600",
      "800",
      "840"
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S1_QA_3",
    "slot": 1,
    "section": "QA",
    "questionNumber": 3,
    "type": "MCQ",
    "subtopic": "Algebra",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "The number of distinct integers 𝑛 for which log(1\n4)(𝑛2 −7𝑛+ 11) > is",
    "options": [
      "Infinite",
      "0",
      "2",
      "1"
    ],
    "correctAnswer": 1,
    "explanation": "Official CAT answer: B."
  },
  {
    "id": "S1_QA_4",
    "slot": 1,
    "section": "QA",
    "questionNumber": 4,
    "type": "MCQ",
    "subtopic": "Quantitative Aptitude",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "In the set of consecutive odd numbers {1, 3, 5,...., 57}, there is a number k such that the sum of all the elements\nless than k is equal to the sum of all the elements greater than k. Then k equals",
    "options": [
      "41",
      "39",
      "37",
      "43"
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S1_QA_5",
    "slot": 1,
    "section": "QA",
    "questionNumber": 5,
    "type": "TITA",
    "subtopic": "Number System",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "In a 3-digit number N, the digits are non-zero and distinct such that none of the digits is a perfect square, and only\none of the digits is a prime number. Then, the number of factors of the minimum possible value of N is",
    "options": [],
    "correctAnswer": "6",
    "explanation": "Official CAT answer: 6."
  },
  {
    "id": "S1_QA_6",
    "slot": 1,
    "section": "QA",
    "questionNumber": 6,
    "type": "MCQ",
    "subtopic": "Arithmetic",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "At a certain simple rate of interest, a given sum amounts to Rs 13920 in 3 years, and to Rs 18960 in 6 years and 6\nmonths. If the same given sum had been invested for 2 years at the same rate as before but with interest\ncompounded every 6 months, then the total interest earned, in rupees, would have been nearest to",
    "options": [
      "3096",
      "3150",
      "3180",
      "3221"
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: 3221."
  },
  {
    "id": "S1_QA_7",
    "slot": 1,
    "section": "QA",
    "questionNumber": 7,
    "type": "TITA",
    "subtopic": "Number System",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "The number of non - negative integer values of k for which the quadratic equation 𝑥2 −5𝑥+ 𝑘= 0 has only\ninteger roots, is",
    "options": [],
    "correctAnswer": "3",
    "explanation": "Official CAT answer: 3."
  },
  {
    "id": "S1_QA_8",
    "slot": 1,
    "section": "QA",
    "questionNumber": 8,
    "type": "MCQ",
    "subtopic": "Algebra",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "A value of c for which the minimum value of 𝑓(𝑥) = 𝑥2 −4𝑐𝑥+ 8𝑐 is greater than the maximum value of 𝑔(𝑥) =\n−𝑥2 + 3𝑐𝑥−2𝑐, is",
    "options": [
      "2",
      "−\n1\n2",
      "-2",
      "1\n2"
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S1_QA_9",
    "slot": 1,
    "section": "QA",
    "questionNumber": 9,
    "type": "MCQ",
    "subtopic": "Arithmetic",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "A container holds 200 litres of a solution of acid and water, having 30% acid by volume. Atul replaces 20% of this\nsolution with water, then replaces 10% of the resulting solution with acid, and finally replaces 15% of the solution\nthus obtained, with water. The percentage of acid by volume in the final solution obtained after these three\nreplacements, is nearest to",
    "options": [
      "23",
      "25",
      "29",
      "27"
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S1_QA_10",
    "slot": 1,
    "section": "QA",
    "questionNumber": 10,
    "type": "MCQ",
    "subtopic": "Arithmetic",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "Shruti travels a distance of 224 km in four parts for a total travel time of 3 hours. Her speeds in these four parts\nfollow an arithmetic progression, and the corresponding time taken to cover these four parts follow another\narithmetic progression. If she travels at a speed of 960 meters per minute for 30 minutes to cover the first part,\nthen the distance, in meters, she travels in the fourth part i",
    "options": [
      "96000",
      "112000",
      "76800",
      "86400"
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S1_QA_11",
    "slot": 1,
    "section": "QA",
    "questionNumber": 11,
    "type": "MCQ",
    "subtopic": "Arithmetic",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "The ratio of the number of students in the morning shift and afternoon shift of a school was 13 : 9. After 21 students\nmoved from the morning shift to the afternoon shift, this ratio became 19 : 14. Next, some new students joined\nthe morning and afternoon shifts in the ratio 3 : 8 and then the ratio of the number of students in the morning\nshift and the afternoon shift became 5 : 4. The number of new students who joined is",
    "options": [
      "110",
      "88",
      "121",
      "99"
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S1_QA_12",
    "slot": 1,
    "section": "QA",
    "questionNumber": 12,
    "type": "MCQ",
    "subtopic": "Geometry & Mensuration",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "In a circle with center C and radius 6 √2 cm, PQ and SR are two parallel chords separated by one of the diameters.\nIf ∠𝑃𝑄𝐶= 450, and the ratio of the perpendicular distance of PQ and SR from C is 3 : 2, then the area, in sq. cm,\nof the quadrilateral PQRS is",
    "options": [
      "4 (3 + √14)",
      "20 (3√2 + √7)",
      "20 (3 + √14)",
      "4 (3 √2 + √7)"
    ],
    "correctAnswer": 2,
    "explanation": "Official CAT answer: C."
  },
  {
    "id": "S1_QA_13",
    "slot": 1,
    "section": "QA",
    "questionNumber": 13,
    "type": "MCQ",
    "subtopic": "Geometry & Mensuration",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "The (x, y) coordinates of vertices P, Q and R of a parallelogram PQRS are (-3, -2), (1, -5) and (9, 1), respectively. If\nthe diagonal SQ intersects the x - axis at (a, 0) then the value of a is",
    "options": [
      "13\n4",
      "20\n9",
      "10\n3",
      "27\n7"
    ],
    "correctAnswer": 1,
    "explanation": "Official CAT answer: B."
  },
  {
    "id": "S1_QA_14",
    "slot": 1,
    "section": "QA",
    "questionNumber": 14,
    "type": "TITA",
    "subtopic": "Algebra",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "In a class, there were more than 10 boys and a certain number of girls. After 40% of the girls and 60% of the boys\nleft the class, the remaining number of girls was 8 more than the remaining number of boys. Then, the minimum\npossible number of students initially in the class was",
    "options": [],
    "correctAnswer": "55",
    "explanation": "Official CAT answer: 55."
  },
  {
    "id": "S1_QA_15",
    "slot": 1,
    "section": "QA",
    "questionNumber": 15,
    "type": "TITA",
    "subtopic": "Geometry & Mensuration",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "If the length of a side of a rhombus is 36 cm and the area of the rhombus is 396 sq. cm, then the absolute value of\nthe difference between the lengths, in cm, of the diagonals of the rhombus is",
    "options": [],
    "correctAnswer": "60",
    "explanation": "Official CAT answer: 60."
  },
  {
    "id": "S1_QA_16",
    "slot": 1,
    "section": "QA",
    "questionNumber": 16,
    "type": "TITA",
    "subtopic": "Arithmetic",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "A shopkeeper offers a discount of 22% on the marked price of each chair, and gives 13 chairs to a customer for the\ndiscounted price of 12 chairs to earn a profit of 26% on the transaction. If the cost price of each chair is Rs 100,\nthen the marked price, in rupees, of each chair is",
    "options": [],
    "correctAnswer": "175",
    "explanation": "Official CAT answer: 175."
  },
  {
    "id": "S1_QA_17",
    "slot": 1,
    "section": "QA",
    "questionNumber": 17,
    "type": "TITA",
    "subtopic": "Quantitative Aptitude",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "The number of distinct pairs of integers (x, y) satisfying the inequalities 𝑥> 𝑦≥3 and 𝑥+ 𝑦< 14 is",
    "options": [],
    "correctAnswer": "16",
    "explanation": "Official CAT answer: 16."
  },
  {
    "id": "S1_QA_18",
    "slot": 1,
    "section": "QA",
    "questionNumber": 18,
    "type": "MCQ",
    "subtopic": "Arithmetic",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "Arun, Varun and Tarun, if working alone, can complete a task in 24, 21, and 15 days, respectively. They charge Rs\n2160, Rs 2400, and Rs 2160 per day, respectively, even if they are employed for a partial day. On any given day, any\nof the workers may or may not be employed to work. If the task needs to be completed in 10 days or less, then the\nminimum possible amount, in rupees, required to be paid for the entire task is",
    "options": [
      "34400",
      "38880",
      "47040",
      "38400"
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S1_QA_19",
    "slot": 1,
    "section": "QA",
    "questionNumber": 19,
    "type": "MCQ",
    "subtopic": "Quantitative Aptitude",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "For any natural number k, let 𝑎𝑘= 3𝑘. The smallest natural number m for which {(𝑎1)1 × (𝑎2)2 × … × (𝑎20)20},\nis <{𝑎21 × 𝑎22 × … × 𝑎(20 + 𝑚)}",
    "options": [
      "59",
      "56",
      "58",
      "57"
    ],
    "correctAnswer": 2,
    "explanation": "Official CAT answer: C."
  },
  {
    "id": "S1_QA_20",
    "slot": 1,
    "section": "QA",
    "questionNumber": 20,
    "type": "TITA",
    "subtopic": "Quantitative Aptitude",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "Stocks A, B and C are priced at rupees 120, 90 and 150 per share, respectively. A trader holds a portfolio consisting\nof 10 shares of stock A, and 20 shares of stocks B and C put together. If the total value of her portfolio is rupees\n3300, then the number of shares of stock B that she holds, is",
    "options": [],
    "correctAnswer": "15",
    "explanation": "Official CAT answer: 15."
  },
  {
    "id": "S1_QA_21",
    "slot": 1,
    "section": "QA",
    "questionNumber": 21,
    "type": "TITA",
    "subtopic": "Quantitative Aptitude",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "Kamala divided her investment of Rs 100000 between stocks, bonds, and gold. Her investment in bonds was 25%\nof her investment in gold. With annual returns of 10%, 6%, 8% on stocks, bonds, and gold, respectively, she gained\na total amount of Rs 8200 in one year. The amount, in rupees, that she gained from the bonds, was",
    "options": [],
    "correctAnswer": "900",
    "explanation": "Official CAT answer: 900."
  },
  {
    "id": "S1_QA_22",
    "slot": 1,
    "section": "QA",
    "questionNumber": 22,
    "type": "MCQ",
    "subtopic": "Quantitative Aptitude",
    "setId": "S1_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "Let 3 ≤𝑥≤6 and [𝑥2] = [𝑥]2, where [x] is the greatest integer not exceeding x. If set S represents all feasible\nvalues of x, then a possible subset of S is",
    "options": [
      "(4, √18) ∪[5, √27) ∪{6}",
      "[3, √10] ∪[4, √17] ∪{6}",
      "[3, √10] ∪[5, √26]",
      "(3, √10) ∪[5, √26) ∪{6}"
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S2_VARC_1",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 1,
    "type": "MCQ",
    "subtopic": "Verbal Ability",
    "setId": "S2_VA_1",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "questionText": "The given sentence is missing in the paragraph below. Decide where it best fits among the options (1, 2, 3, or 4)\nindicated in the paragraph.\n\nSentence: While taste is related to judgment, with thinkers at the time often writing, for example, about\n\"judgments of taste\" or using the two terms interchangeably, taste retains a vital link to pleasure, embodiment,\nand personal specificity that is too often elided in post-Kantian ideas about judgment, a link that Arendt herself\nwas working to restore.\nParagraph: ____(1) ____. Denneny focused on taste rather than judgment in order to highlight what he believed\nwas a crucial but neglected historical change. ____(2) ____. Over the course of the seventeenth century and early\neighteenth century, across Western Europe, the word taste took on a new extension of meaning, no longer\nreferring specifically to gustatory sensation and the delights of the palate but becoming, for a time, one of the\ncentral categories for aesthetic—and ethical—thinking. ____(3) ____. Tracing the history of taste in Spanish,\nFrench, and British aesthetic theory, as Denneny did, also provides a means to recover the compelling and relevant\nwriting of a set of thinkers who have been largely neglected by professional philosophy. ____(4) ____.",
    "options": [
      "Option 3.",
      "Option 4.",
      "Option 1.",
      "Option 2."
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S2_VARC_2",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 2,
    "type": "TITA",
    "subtopic": "Parajumble",
    "setId": "S2_VA_2",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "questionText": "Five jumbled sentences (labelled 1, 2, 3, 4, and 5), related to a topic, are given below. Four of them can be put\ntogether to form a coherent paragraph. Identify the odd sentence out and key in the number of that sentence\nas your answer.\n\n1. Sporting a copper-coloured pixie cut and a pair of pink feather antlers, Torres himself resembles a child's\ndoodle.\n2. His casual millennial delivery, peppered with \"um\"s and \"ah\"s, makes surreal concepts sound like items on a\nbrunch menu.\n3. Though he may have failed so far in his colour-scouting mission (he hasn't yet found a new one, he admits),\nthis hour leaves you tickled pink.\n4. Like his previous show, My Favourite Shapes, this is an hour of sit-down comedy aided by an overhead camera\nwhich relays Torres's theories illustrated with crayon squiggles on to a screen behind him.\n5. His inquisitive mind produces interconnected ideas about Catholicism, the blandness of Pixar and what orange\nsounds like, while his insights train us to spot \"highly purple behaviour\".",
    "options": [],
    "correctAnswer": "3",
    "explanation": "Official CAT answer: 3."
  },
  {
    "id": "S2_VARC_3",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 3,
    "type": "TITA",
    "subtopic": "Verbal Ability",
    "setId": "S2_VA_3",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "questionText": "The four sentences (labelled 1, 2, 3, and 4) given below, when properly sequenced, would yield a coherent\nparagraph. Decide on the proper sequencing of the order of the sentences and key in the sequence of the four\nnumbers as your answer.\n\n1. As books age, the cellulose and lignin in the paper begin to break down, releasing a mix of volatile organic\ncompounds into the air.\n2. Old books carry a scent that many people instantly recognize and even love.\n3. These compounds are benzaldehyde, which gives off an almond-like scent, vanillin, which smells like vanilla,\nethyl hexanol (floral scent), toluene (sweet), and furfural (which has a slightly bready scent).\n\n4. This familiar aroma isn't just dust or mildew; it's actually a result of slow chemical changes happening inside\nthe paper and ink.",
    "options": [],
    "correctAnswer": "2413",
    "explanation": "Official CAT answer: 2413."
  },
  {
    "id": "S2_VARC_4",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 4,
    "type": "MCQ",
    "subtopic": "Odd One Out",
    "setId": "S2_VA_4",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "questionText": "The given sentence is missing in the paragraph below. Decide where it best fits among the options (1, 2, 3, or 4)\nindicated in the paragraph.\n\nSentence: The region's Western customers found it hard to believe that Dhaka muslin could possibly have been\nmade by human hands. There were rumour that it was woven by mermaids, fairies and even ghosts.\nOnce upon the silty banks of the Meghna River, a miracle was spun, a fabric so light it was called \"baft-hawa\", or\nwoven air. This was Dhaka Muslin, the world's most coveted cloth. ____(1)____. Handspun from a rare cotton\ncalled Phuti Karpas, found nowhere else on Earth, and woven with a 16-step sacred ritual beginning with cleaning\nthe cotton using the teeth of a river catfish! ____(2)____. Every spring, the maple-like leaves pushed up through\nthe grey, silty soil to produce a single daffodil-yellow flower twice a year, which gave way to a snowy floret of cotton\nfibres. ____(3)____. Spun at dawn on boats by sharp-eyed young women, its threads were so fine the elderly could\nbarely see them. Motifs of wildflowers, river breeze, and soul were etched into each piece some so light, a 91-\nmetre bolt could pass through a ring, or a 60' length fit inside a snuffbox. It draped Greek goddesses, Roman nobles,\nMughal emperors, and European aristocrats. Marie Antoinette, Empress Joséphine even Jane Austen adored its\nfloating grace.",
    "options": [
      "Option 3.",
      "Option 4.",
      "Option 1.",
      "Option 2."
    ],
    "correctAnswer": 2,
    "explanation": "Official CAT answer: C."
  },
  {
    "id": "S2_VARC_5",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 5,
    "type": "MCQ",
    "subtopic": "Verbal Ability",
    "setId": "S2_VA_5",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "questionText": "The passage given below is followed by four summaries. Choose the option that best captures the essence of\nthe passage.\n\nFor millennia, in the process of opening up land for agriculture, gardens, grazing and hunting, humans have created\necological \"mosaics\", or \"patchworks\": landscapes holding a mixture of habitats, like meadows, gardens and\nforests. These were not designed as nature reserves, but often catered to hugely diverse animal life. Research\nindicates that European hay meadows cultivated for animal feed were actually more successful at preserving a vast\narray of species than meadows explicitly cultivated for biodiversity. Studying the early Holocene, researchers have\nfound that human presence was about as likely to increase biodiversity as reduce it. Of course, not all human-\ncreated landscapes have the same value. A paved subdivision with astroturfed lawns is very different to a village\nwith diverse vegetable and flower gardens. But scientists continue to find evidence that the old idea of humans as\nantithetical to nature is also wrong-headed, and that rosy visions of thriving, human-free environments are more\nimaginary than real.",
    "options": [
      "In our attempts to shape the world around us to our needs, humans have often created landscapes like\nmeadows, gardens, and forests, which support hugely diverse species, and are more successful at preserving\nthem, than parks created specifically for this.",
      "In terms of preserving biodiversity, scientists are finding increasing evidence that human action is not always\nantithetical to nature, but often assists the preservation of meadows, landscapes, and flourishing of species.",
      "Studying the early Holocene and human practices over millennia, researchers say that while agricultural\nmeadows, gardens, and forests were not explicitly designed as nature reserves, they actually preserved a vast\narray of species, belying the idea that humans harm nature.",
      "Contrary to the idea that humans always hurt nature and that it thrives in their absence, a lot of human action\nacross history has been equally likely to increase biodiversity than reduce it, often creating varied ecological\nlandscapes that support a vast array of species."
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S2_VARC_6",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 6,
    "type": "MCQ",
    "subtopic": "Verbal Ability",
    "setId": "S2_VA_6",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "questionText": "The passage given below is followed by four summaries. Choose the option that best captures the essence of\nthe passage.\n\nIn 1903, left-wing feminist Elizabeth Magie invented The Landlord's Game, the original version of what became\nMonopoly. It was designed as a powerful teaching tool to illustrate the dangers of monopolies and how wealth\ncould concentrate in the hands of a few. The game featured a circular path, properties, and a \"Go to Jail\" space.\nMagie created two rule sets: one \"monopolist\" version where players crushed opponents through accumulation,\nand another, more radical \"Prosperity\" version, where everyone shared in the wealth, promoting fairness and\nequity. Years later, unemployed Charles Darrow sold a simplified version to Parker Brothers. They paid Magie only\n$500 for her patent without royalties and credited Darrow as the sole inventor. For decades, his tale of inventing\nthe game in his basement remained the official story, while Magie's name and her original, anti-capitalist message\nwere left in the shadows.",
    "options": [
      "Parker Brothers' capitalist intent led to them acquiring from Charles Darrow a simplified version of Elizabeth\nMagie's original game, transforming it into a widespread commercial success while providing her only minimal\nfinancial compensation and granting scant public recognition.",
      "Celebrated icons of the gaming industry, Charles Darrow and Parker Brothers, snatched the feminist icon\nElizabeth Magie's original design and transformed Monopoly into a worldwide phenomenon, while barely\nacknowledging her.",
      "It is ironical that a left-wing feminist lost credit for the Landlord's Game to an unemployed man, who plagiarised\nand sold one version of the twin game to Parker Brothers for a meagre sum, denying her royalties.",
      "Only one version of Monopoly became famous because of Charles Darrow's relentless basement work,\ncarefully refining Elizabeth Magie's original idea into an engaging and entertaining pastime that he successfully\npatented and sold, symbolizing what many regarded as the ultimate triumph of individual ingenuity."
    ],
    "correctAnswer": 2,
    "explanation": "Official CAT answer: C."
  },
  {
    "id": "S2_VARC_7",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 7,
    "type": "TITA",
    "subtopic": "Parajumble",
    "setId": "S2_VA_7",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "questionText": "Five jumbled sentences (labelled 1, 2, 3, 4, and 5), related to a topic, are given below. Four of them can be put\ntogether to form a coherent paragraph. Identify the odd sentence out and key in the number of that sentence\nas your answer.\n\n1. Pfas are a class of about 15,000 compounds most frequently used to make products water, stain and grease\nresistant.\n2. New research suggests exposure to some common perfluoroalkyl and polyfluoroalkyl substances (Pfas) cause\nchanges to gene activity and that these changes are linked to health problems including multiple cancers,\nneurological disorders and autoimmune disease.\n3. These Pfas compounds are dubbed \"forever chemicals\" because they do not naturally break down in the\nenvironment.\n4. The research may also point toward other diseases potentially caused by Pfas that have not yet been identified.\n5. The findings are a major step toward determining the mechanism by which the chemicals cause disease and\ncould help doctors identify, detect and treat health problems for those exposed to Pfas before the issues\nadvance.",
    "options": [],
    "correctAnswer": "3",
    "explanation": "Official CAT answer: 3."
  },
  {
    "id": "S2_VARC_8",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 8,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S2_RC_8",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nIn my book \"Searches\", I chronicle how big technology companies have exploited human language for their gain. We\nlet this happen, I argue, because we also benefit somewhat from using the products. It's a dynamic that makes us\ncomplicit in big tech's accumulation of wealth and power: we're both victims and beneficiaries. I describe this\ncomplicity, but I also enact it, through my own internet archives: my Google searches, my Amazon product reviews\nand, yes, my ChatGPT dialogues.\nPeople often describe chatbots' textual output as \"bland\" or \"generic\" the linguistic equivalent of a beige office\nbuilding. OpenAI's products are built to \"sound like a colleague\", as OpenAI puts it, using language that, coming from\na person, would sound \"polite\", \"empathetic\", \"kind\", \"rationally optimistic\" and \"engaging\", among other qualities.\nOpenAI describes these strategies as helping its products seem \"professional\" and \"approachable\". This appears to be\nbound up with making us feel safe.\nTrust is a challenge for artificial intelligence (AI) companies, partly because their products regularly produce falsehoods\nand reify sexist, racist, US-centric cultural norms. While the companies are working on these problems, they persist:\nOpenAI found that its latest systems generate errors at a higher rate than its previous system. In the book, I wrote\nabout the inaccuracies and biases and also demonstrated them with the products. When I prompted Microsoft's Bing\nImage Creator to produce a picture of engineers and space explorers, it gave me an entirely male cast of characters;\nwhen my father asked ChatGPT to edit his writing, it transmuted his perfectly correct Indian English into American\nEnglish. Those weren't flukes. Research suggests that both tendencies are widespread.\nIn my own ChatGPT dialogues, I wanted to enact how the product's veneer of collegial neutrality could lull us into\nabsorbing false or biased responses without much critical engagement. Over time, ChatGPT seemed to be guiding me\nto write a more positive book about big tech including editing my description of OpenAI's CEO, Sam Altman, to call him\n\"a visionary and a pragmatist\". I'm not aware of research on whether ChatGPT tends to favor big tech, OpenAI or\nAltman, and I can only guess why it seemed that way in our conversation. OpenAI explicitly states that its products\nshouldn't attempt to influence users' thinking. When I asked ChatGPT about some of the issues, it blamed biases in its\ntraining data though I suspect my arguably leading questions played a role too. When I queried ChatGPT about its\nrhetoric, it responded: \"The way I communicate is designed to foster trust and confidence in my responses, which can\nbe both helpful and potentially misleading.\"\nOpenAI has its own goals, of course. Among them, it emphasizes wanting to build AI that \"benefits all of humanity\".\nBut while the company is controlled by a non-profit with that mission, its funders still seek a return on their investment.\nThat will presumably require getting people using products such as ChatGPT even more than they already are a goal\nthat is easier to accomplish if people see those products as trustworthy collaborators.",
    "questionText": "All of the following statements from the passage affirm the disjunct between the claims about AI made by tech\ncompanies and what AI actually does EXCEPT:",
    "options": [
      "\"In my own ChatGPT dialogues, I wanted to enact how the product's veneer of collegial neutrality could lull us\ninto absorbing false or biased responses without much critical engagement.\"",
      "\"When I prompted Microsoft's Bing Image Creator to produce a picture of engineers and space explorers, it\ngave me an entirely male cast of characters.\"",
      "\"It's a dynamic that makes us complicit in big tech's accumulation of wealth and power: we're both victims and\nbeneficiaries.\"",
      "\"I'm not aware of research on whether ChatGPT tends to favor big tech, OpenAI or Altman, and I can only guess\nwhy it seemed that way in our conversation.\""
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S2_VARC_9",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 9,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S2_RC_8",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nIn my book \"Searches\", I chronicle how big technology companies have exploited human language for their gain. We\nlet this happen, I argue, because we also benefit somewhat from using the products. It's a dynamic that makes us\ncomplicit in big tech's accumulation of wealth and power: we're both victims and beneficiaries. I describe this\ncomplicity, but I also enact it, through my own internet archives: my Google searches, my Amazon product reviews\nand, yes, my ChatGPT dialogues.\nPeople often describe chatbots' textual output as \"bland\" or \"generic\" the linguistic equivalent of a beige office\nbuilding. OpenAI's products are built to \"sound like a colleague\", as OpenAI puts it, using language that, coming from\na person, would sound \"polite\", \"empathetic\", \"kind\", \"rationally optimistic\" and \"engaging\", among other qualities.\nOpenAI describes these strategies as helping its products seem \"professional\" and \"approachable\". This appears to be\nbound up with making us feel safe.\nTrust is a challenge for artificial intelligence (AI) companies, partly because their products regularly produce falsehoods\nand reify sexist, racist, US-centric cultural norms. While the companies are working on these problems, they persist:\nOpenAI found that its latest systems generate errors at a higher rate than its previous system. In the book, I wrote\nabout the inaccuracies and biases and also demonstrated them with the products. When I prompted Microsoft's Bing\nImage Creator to produce a picture of engineers and space explorers, it gave me an entirely male cast of characters;\nwhen my father asked ChatGPT to edit his writing, it transmuted his perfectly correct Indian English into American\nEnglish. Those weren't flukes. Research suggests that both tendencies are widespread.\nIn my own ChatGPT dialogues, I wanted to enact how the product's veneer of collegial neutrality could lull us into\nabsorbing false or biased responses without much critical engagement. Over time, ChatGPT seemed to be guiding me\nto write a more positive book about big tech including editing my description of OpenAI's CEO, Sam Altman, to call him\n\"a visionary and a pragmatist\". I'm not aware of research on whether ChatGPT tends to favor big tech, OpenAI or\nAltman, and I can only guess why it seemed that way in our conversation. OpenAI explicitly states that its products\nshouldn't attempt to influence users' thinking. When I asked ChatGPT about some of the issues, it blamed biases in its\ntraining data though I suspect my arguably leading questions played a role too. When I queried ChatGPT about its\nrhetoric, it responded: \"The way I communicate is designed to foster trust and confidence in my responses, which can\nbe both helpful and potentially misleading.\"\nOpenAI has its own goals, of course. Among them, it emphasizes wanting to build AI that \"benefits all of humanity\".\nBut while the company is controlled by a non-profit with that mission, its funders still seek a return on their investment.\nThat will presumably require getting people using products such as ChatGPT even more than they already are a goal\nthat is easier to accomplish if people see those products as trustworthy collaborators.",
    "questionText": "The author compares AI generated texts with \"a beige office building\" for all of the following reasons EXCEPT:",
    "options": [
      "AI generated texts often exhibit a warm, polite, and collegial tone.",
      "AI aims to foster a feeling of trust and credibility among its users.",
      "AI generates generalised responses that lack specificity and nuance.",
      "AI tends to blame its training data when scrutinised for its biases."
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S2_VARC_10",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 10,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S2_RC_8",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nIn my book \"Searches\", I chronicle how big technology companies have exploited human language for their gain. We\nlet this happen, I argue, because we also benefit somewhat from using the products. It's a dynamic that makes us\ncomplicit in big tech's accumulation of wealth and power: we're both victims and beneficiaries. I describe this\ncomplicity, but I also enact it, through my own internet archives: my Google searches, my Amazon product reviews\nand, yes, my ChatGPT dialogues.\nPeople often describe chatbots' textual output as \"bland\" or \"generic\" the linguistic equivalent of a beige office\nbuilding. OpenAI's products are built to \"sound like a colleague\", as OpenAI puts it, using language that, coming from\na person, would sound \"polite\", \"empathetic\", \"kind\", \"rationally optimistic\" and \"engaging\", among other qualities.\nOpenAI describes these strategies as helping its products seem \"professional\" and \"approachable\". This appears to be\nbound up with making us feel safe.\nTrust is a challenge for artificial intelligence (AI) companies, partly because their products regularly produce falsehoods\nand reify sexist, racist, US-centric cultural norms. While the companies are working on these problems, they persist:\nOpenAI found that its latest systems generate errors at a higher rate than its previous system. In the book, I wrote\nabout the inaccuracies and biases and also demonstrated them with the products. When I prompted Microsoft's Bing\nImage Creator to produce a picture of engineers and space explorers, it gave me an entirely male cast of characters;\nwhen my father asked ChatGPT to edit his writing, it transmuted his perfectly correct Indian English into American\nEnglish. Those weren't flukes. Research suggests that both tendencies are widespread.\nIn my own ChatGPT dialogues, I wanted to enact how the product's veneer of collegial neutrality could lull us into\nabsorbing false or biased responses without much critical engagement. Over time, ChatGPT seemed to be guiding me\nto write a more positive book about big tech including editing my description of OpenAI's CEO, Sam Altman, to call him\n\"a visionary and a pragmatist\". I'm not aware of research on whether ChatGPT tends to favor big tech, OpenAI or\nAltman, and I can only guess why it seemed that way in our conversation. OpenAI explicitly states that its products\nshouldn't attempt to influence users' thinking. When I asked ChatGPT about some of the issues, it blamed biases in its\ntraining data though I suspect my arguably leading questions played a role too. When I queried ChatGPT about its\nrhetoric, it responded: \"The way I communicate is designed to foster trust and confidence in my responses, which can\nbe both helpful and potentially misleading.\"\nOpenAI has its own goals, of course. Among them, it emphasizes wanting to build AI that \"benefits all of humanity\".\nBut while the company is controlled by a non-profit with that mission, its funders still seek a return on their investment.\nThat will presumably require getting people using products such as ChatGPT even more than they already are a goal\nthat is easier to accomplish if people see those products as trustworthy collaborators.",
    "questionText": "On the basis of the purpose of the examples in the passage, pick the odd one out from the following AI-generated\nresponses mentioned in the passage:",
    "options": [
      "\"Over time, ChatGPT seemed to be guiding me to write a more positive book about big tech including editing\nmy description of OpenAI's CEO, Sam Altman, to call him 'a visionary and a pragmatist'.\"",
      "\"when my father asked ChatGPT to edit his writing, it transmuted his perfectly correct Indian English into\nAmerican English.\"",
      "\"When I prompted Microsoft's Bing Image Creator to produce a picture of engineers and space explorers, it\ngave me an entirely male cast of characters.\"",
      "\"When I queried ChatGPT about its rhetoric, it responded: 'The way I communicate is designed to foster trust\nand confidence in my responses, which can be both helpful and potentially misleading'.\""
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S2_VARC_11",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 11,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S2_RC_8",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nIn my book \"Searches\", I chronicle how big technology companies have exploited human language for their gain. We\nlet this happen, I argue, because we also benefit somewhat from using the products. It's a dynamic that makes us\ncomplicit in big tech's accumulation of wealth and power: we're both victims and beneficiaries. I describe this\ncomplicity, but I also enact it, through my own internet archives: my Google searches, my Amazon product reviews\nand, yes, my ChatGPT dialogues.\nPeople often describe chatbots' textual output as \"bland\" or \"generic\" the linguistic equivalent of a beige office\nbuilding. OpenAI's products are built to \"sound like a colleague\", as OpenAI puts it, using language that, coming from\na person, would sound \"polite\", \"empathetic\", \"kind\", \"rationally optimistic\" and \"engaging\", among other qualities.\nOpenAI describes these strategies as helping its products seem \"professional\" and \"approachable\". This appears to be\nbound up with making us feel safe.\nTrust is a challenge for artificial intelligence (AI) companies, partly because their products regularly produce falsehoods\nand reify sexist, racist, US-centric cultural norms. While the companies are working on these problems, they persist:\nOpenAI found that its latest systems generate errors at a higher rate than its previous system. In the book, I wrote\nabout the inaccuracies and biases and also demonstrated them with the products. When I prompted Microsoft's Bing\nImage Creator to produce a picture of engineers and space explorers, it gave me an entirely male cast of characters;\nwhen my father asked ChatGPT to edit his writing, it transmuted his perfectly correct Indian English into American\nEnglish. Those weren't flukes. Research suggests that both tendencies are widespread.\nIn my own ChatGPT dialogues, I wanted to enact how the product's veneer of collegial neutrality could lull us into\nabsorbing false or biased responses without much critical engagement. Over time, ChatGPT seemed to be guiding me\nto write a more positive book about big tech including editing my description of OpenAI's CEO, Sam Altman, to call him\n\"a visionary and a pragmatist\". I'm not aware of research on whether ChatGPT tends to favor big tech, OpenAI or\nAltman, and I can only guess why it seemed that way in our conversation. OpenAI explicitly states that its products\nshouldn't attempt to influence users' thinking. When I asked ChatGPT about some of the issues, it blamed biases in its\ntraining data though I suspect my arguably leading questions played a role too. When I queried ChatGPT about its\nrhetoric, it responded: \"The way I communicate is designed to foster trust and confidence in my responses, which can\nbe both helpful and potentially misleading.\"\nOpenAI has its own goals, of course. Among them, it emphasizes wanting to build AI that \"benefits all of humanity\".\nBut while the company is controlled by a non-profit with that mission, its funders still seek a return on their investment.\nThat will presumably require getting people using products such as ChatGPT even more than they already are a goal\nthat is easier to accomplish if people see those products as trustworthy collaborators.",
    "questionText": "The author of the passage is least likely to agree with which one of the following claims?",
    "options": [
      "ChatGPT favours AI companies and their officials, like Sam Altman, in its responses.",
      "The neutrality of AI is motivated by economic considerations.",
      "When we use AI, we become accomplices to the exploitative practices of big tech companies.",
      "The neutrality of AI is conducive to critical thinking."
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S2_VARC_12",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 12,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S2_RC_12",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nDifferent sciences exhibit different science cultures and practices. For example, in astronomy, observation until what is\ntoday called the new astronomy had always been limited to what could be seen within the limits of optical light. Indeed,\nuntil early modernity the limits to optical light were also limits of what humans could themselves see within their\nlimited and relative perceptual spectrum of human vision. With early modernity and the invention of lensed optical\ninstruments telescopes astronomers could begin to observe phenomena never seen before. Magnification and\nresolution began to allow what was previously imperceptible to be perceived but within the familiar limits of optical\nvision. Galileo, having learned of the Dutch invention of a telescope by Hans Lippershey, went on to build some hundred\nof his own, improving from the Dutch 3x to nearly 30x telescopes which turn out to be the limit of magnificational\npower without chromatic distortion. And it was with his own telescopes that he made the observations launching early\nmodern astronomy (phases of Venus, satellites of Jupiter, etc.). Isaac Newton's later improvement with reflecting\ntelescopes expanded upon the magnificational-resolution capacity of optical observation; and, from Newton to the\ntwentieth century, improvement continued on to the later very large array of light telescopes today following the usual\ntechnological trajectory of \"more-is-better\" but still remaining within the limits of the light spectrum. Today's\nastronomy has now had the benefit of some four centuries of optical telescopy. The \"new astronomy,\" however, opens\nthe full known electromagnetic spectrum to observation, beginning with the accidental discovery of radio astronomy\nearly in the twentieth century, and leading today to the diverse variety of EMS telescopes which can explore the range\nfrom gamma to radio waves. Thus, astronomy, now outfitted with new instruments, \"smart\" adaptive optics, very large\narrays, etc., illustrates one style of instrumentally embodied science a technoscience. Of course astronomy, with the\nvery recent exceptions of probes to solar system bodies (Moon, Mars, Venus, asteroids), remains largely a \"receptive\"\nscience, dependent upon instrumentation which can detect and receive emissions.\nContemporary biology displays a quite different instrument array and, according to Evelyn Fox-Keller, also a different\nscientific culture. She cites her own experience, coming from mathematical physics into microbiology, and takes\naccount of the distinctive instrumental culture in her Making Sense of Life (2002). Here, particularly with the\ndevelopment of biotechnology, instrumentation is far more interventional than in the astronomy case. Microscopic\ninstrumentation can be and often is interventional in style: \"gene-splicing\" and other techniques of biotechnology,\nwhile still in their infancy, are clearly part of the interventional trajectory of biological instrumentation. Yet, in both\ndisciplines, the sciences involved are today highly instrumentalized and could not progress successfully without\nconstant improvements upon the respective instrumental trajectories. So, minimalistically, one may conclude that the\nsciences are technologically, instrumentally embodied. But the styles of embodiment differ, and perhaps the last of the\nscientific disciplines to move into such technical embodiment is mathematics, which only contemporarily has come to\nrely more and more upon the computational machinery now in common use.",
    "questionText": "None of the following statements, if true, contradicts the arguments in the passage EXCEPT:",
    "options": [
      "Isaac Newton's discovery of gravity was accomplished without the help of instruments.",
      "Because of the relatively recent entry of computational machinery in mathematics, the field is only now\nbeginning to develop a scientific culture.",
      "Like telescopy, microscopy has also sought to move beyond the visible spectrum to be able to detect objects\nthat are invisible in that spectrum.",
      "Some scientific instruments may be classified as both receptive and interventional in their functions."
    ],
    "correctAnswer": 1,
    "explanation": "Official CAT answer: B."
  },
  {
    "id": "S2_VARC_13",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 13,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S2_RC_12",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nDifferent sciences exhibit different science cultures and practices. For example, in astronomy, observation until what is\ntoday called the new astronomy had always been limited to what could be seen within the limits of optical light. Indeed,\nuntil early modernity the limits to optical light were also limits of what humans could themselves see within their\nlimited and relative perceptual spectrum of human vision. With early modernity and the invention of lensed optical\ninstruments telescopes astronomers could begin to observe phenomena never seen before. Magnification and\nresolution began to allow what was previously imperceptible to be perceived but within the familiar limits of optical\nvision. Galileo, having learned of the Dutch invention of a telescope by Hans Lippershey, went on to build some hundred\nof his own, improving from the Dutch 3x to nearly 30x telescopes which turn out to be the limit of magnificational\npower without chromatic distortion. And it was with his own telescopes that he made the observations launching early\nmodern astronomy (phases of Venus, satellites of Jupiter, etc.). Isaac Newton's later improvement with reflecting\ntelescopes expanded upon the magnificational-resolution capacity of optical observation; and, from Newton to the\ntwentieth century, improvement continued on to the later very large array of light telescopes today following the usual\ntechnological trajectory of \"more-is-better\" but still remaining within the limits of the light spectrum. Today's\nastronomy has now had the benefit of some four centuries of optical telescopy. The \"new astronomy,\" however, opens\nthe full known electromagnetic spectrum to observation, beginning with the accidental discovery of radio astronomy\nearly in the twentieth century, and leading today to the diverse variety of EMS telescopes which can explore the range\nfrom gamma to radio waves. Thus, astronomy, now outfitted with new instruments, \"smart\" adaptive optics, very large\narrays, etc., illustrates one style of instrumentally embodied science a technoscience. Of course astronomy, with the\nvery recent exceptions of probes to solar system bodies (Moon, Mars, Venus, asteroids), remains largely a \"receptive\"\nscience, dependent upon instrumentation which can detect and receive emissions.\nContemporary biology displays a quite different instrument array and, according to Evelyn Fox-Keller, also a different\nscientific culture. She cites her own experience, coming from mathematical physics into microbiology, and takes\naccount of the distinctive instrumental culture in her Making Sense of Life (2002). Here, particularly with the\ndevelopment of biotechnology, instrumentation is far more interventional than in the astronomy case. Microscopic\ninstrumentation can be and often is interventional in style: \"gene-splicing\" and other techniques of biotechnology,\nwhile still in their infancy, are clearly part of the interventional trajectory of biological instrumentation. Yet, in both\ndisciplines, the sciences involved are today highly instrumentalized and could not progress successfully without\nconstant improvements upon the respective instrumental trajectories. So, minimalistically, one may conclude that the\nsciences are technologically, instrumentally embodied. But the styles of embodiment differ, and perhaps the last of the\nscientific disciplines to move into such technical embodiment is mathematics, which only contemporarily has come to\nrely more and more upon the computational machinery now in common use.",
    "questionText": "All of the following statements may be rejected as valid inferences from the passage EXCEPT:",
    "options": [
      "Isaac Newton's experiments with reflecting telescopes were the earliest versions of the \"new astronomy\"\nreferred to in the passage.",
      "Interventionist instruments, or instruments that intervene directly in scientific inquiry, are different from\nembodied instruments, or instruments that embody scientific inquiry.",
      "The author distinguishes between the receptive and interventionist uses of instruments in the sciences by\ncomparing astronomy and biology, respectively.",
      "The advances in telescopy made by Newton with reflecting telescopes allowed early modern astronomers to\nobserve the phases of Venus and the satellites of Jupiter"
    ],
    "correctAnswer": 2,
    "explanation": "Official CAT answer: C."
  },
  {
    "id": "S2_VARC_14",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 14,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S2_RC_12",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nDifferent sciences exhibit different science cultures and practices. For example, in astronomy, observation until what is\ntoday called the new astronomy had always been limited to what could be seen within the limits of optical light. Indeed,\nuntil early modernity the limits to optical light were also limits of what humans could themselves see within their\nlimited and relative perceptual spectrum of human vision. With early modernity and the invention of lensed optical\ninstruments telescopes astronomers could begin to observe phenomena never seen before. Magnification and\nresolution began to allow what was previously imperceptible to be perceived but within the familiar limits of optical\nvision. Galileo, having learned of the Dutch invention of a telescope by Hans Lippershey, went on to build some hundred\nof his own, improving from the Dutch 3x to nearly 30x telescopes which turn out to be the limit of magnificational\npower without chromatic distortion. And it was with his own telescopes that he made the observations launching early\nmodern astronomy (phases of Venus, satellites of Jupiter, etc.). Isaac Newton's later improvement with reflecting\ntelescopes expanded upon the magnificational-resolution capacity of optical observation; and, from Newton to the\ntwentieth century, improvement continued on to the later very large array of light telescopes today following the usual\ntechnological trajectory of \"more-is-better\" but still remaining within the limits of the light spectrum. Today's\nastronomy has now had the benefit of some four centuries of optical telescopy. The \"new astronomy,\" however, opens\nthe full known electromagnetic spectrum to observation, beginning with the accidental discovery of radio astronomy\nearly in the twentieth century, and leading today to the diverse variety of EMS telescopes which can explore the range\nfrom gamma to radio waves. Thus, astronomy, now outfitted with new instruments, \"smart\" adaptive optics, very large\narrays, etc., illustrates one style of instrumentally embodied science a technoscience. Of course astronomy, with the\nvery recent exceptions of probes to solar system bodies (Moon, Mars, Venus, asteroids), remains largely a \"receptive\"\nscience, dependent upon instrumentation which can detect and receive emissions.\nContemporary biology displays a quite different instrument array and, according to Evelyn Fox-Keller, also a different\nscientific culture. She cites her own experience, coming from mathematical physics into microbiology, and takes\naccount of the distinctive instrumental culture in her Making Sense of Life (2002). Here, particularly with the\ndevelopment of biotechnology, instrumentation is far more interventional than in the astronomy case. Microscopic\ninstrumentation can be and often is interventional in style: \"gene-splicing\" and other techniques of biotechnology,\nwhile still in their infancy, are clearly part of the interventional trajectory of biological instrumentation. Yet, in both\ndisciplines, the sciences involved are today highly instrumentalized and could not progress successfully without\nconstant improvements upon the respective instrumental trajectories. So, minimalistically, one may conclude that the\nsciences are technologically, instrumentally embodied. But the styles of embodiment differ, and perhaps the last of the\nscientific disciplines to move into such technical embodiment is mathematics, which only contemporarily has come to\nrely more and more upon the computational machinery now in common use.",
    "questionText": "Which one of the following observations is a valid conclusion to draw from the statement that \"the sciences\ninvolved are today highly instrumentalised and could not progress successfully without constant improvements\nupon the respective instrumental trajectories\"?",
    "options": [
      "The use of instruments in scientific trajectories must be respected in order to see successful progress in them.",
      "In both astronomy and microbiology, progress has been the consequence of improvements in the instruments\nthey use.",
      "The growth of scientific technologies has led to the embodiment of progress in the trajectories of\nimprovement.",
      "Highly instrumentalised work in the sciences has resulted in the progressive improvement of scientific\nconstants."
    ],
    "correctAnswer": 1,
    "explanation": "Official CAT answer: B."
  },
  {
    "id": "S2_VARC_15",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 15,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S2_RC_12",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nDifferent sciences exhibit different science cultures and practices. For example, in astronomy, observation until what is\ntoday called the new astronomy had always been limited to what could be seen within the limits of optical light. Indeed,\nuntil early modernity the limits to optical light were also limits of what humans could themselves see within their\nlimited and relative perceptual spectrum of human vision. With early modernity and the invention of lensed optical\ninstruments telescopes astronomers could begin to observe phenomena never seen before. Magnification and\nresolution began to allow what was previously imperceptible to be perceived but within the familiar limits of optical\nvision. Galileo, having learned of the Dutch invention of a telescope by Hans Lippershey, went on to build some hundred\nof his own, improving from the Dutch 3x to nearly 30x telescopes which turn out to be the limit of magnificational\npower without chromatic distortion. And it was with his own telescopes that he made the observations launching early\nmodern astronomy (phases of Venus, satellites of Jupiter, etc.). Isaac Newton's later improvement with reflecting\ntelescopes expanded upon the magnificational-resolution capacity of optical observation; and, from Newton to the\ntwentieth century, improvement continued on to the later very large array of light telescopes today following the usual\ntechnological trajectory of \"more-is-better\" but still remaining within the limits of the light spectrum. Today's\nastronomy has now had the benefit of some four centuries of optical telescopy. The \"new astronomy,\" however, opens\nthe full known electromagnetic spectrum to observation, beginning with the accidental discovery of radio astronomy\nearly in the twentieth century, and leading today to the diverse variety of EMS telescopes which can explore the range\nfrom gamma to radio waves. Thus, astronomy, now outfitted with new instruments, \"smart\" adaptive optics, very large\narrays, etc., illustrates one style of instrumentally embodied science a technoscience. Of course astronomy, with the\nvery recent exceptions of probes to solar system bodies (Moon, Mars, Venus, asteroids), remains largely a \"receptive\"\nscience, dependent upon instrumentation which can detect and receive emissions.\nContemporary biology displays a quite different instrument array and, according to Evelyn Fox-Keller, also a different\nscientific culture. She cites her own experience, coming from mathematical physics into microbiology, and takes\naccount of the distinctive instrumental culture in her Making Sense of Life (2002). Here, particularly with the\ndevelopment of biotechnology, instrumentation is far more interventional than in the astronomy case. Microscopic\ninstrumentation can be and often is interventional in style: \"gene-splicing\" and other techniques of biotechnology,\nwhile still in their infancy, are clearly part of the interventional trajectory of biological instrumentation. Yet, in both\ndisciplines, the sciences involved are today highly instrumentalized and could not progress successfully without\nconstant improvements upon the respective instrumental trajectories. So, minimalistically, one may conclude that the\nsciences are technologically, instrumentally embodied. But the styles of embodiment differ, and perhaps the last of the\nscientific disciplines to move into such technical embodiment is mathematics, which only contemporarily has come to\nrely more and more upon the computational machinery now in common use.",
    "questionText": "To which one of the following instruments would the characterisations of instruments in the passage be least\napplicable?",
    "options": [
      "Milestone.",
      "Scalpel.",
      "Kitchen oven.",
      "Saxophone."
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S2_VARC_16",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 16,
    "type": "TITA",
    "subtopic": "Verbal Ability",
    "setId": "S2_VA_16",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "questionText": "The four sentences (labelled 1, 2, 3, and 4) given below, when properly sequenced, would yield a coherent\nparagraph. Decide on the proper sequencing of the order of the sentences and key in the sequence of the four\nnumbers as your answer.\n\n1. 'Literature on screen' suggests something more capacious and defining than citation: the possibility that\nliterary adaptations are at once cinema and literature.\n2. Even though a growing number of films eligible for Academy Awards for Best Screenplay Based on Material\nfrom Another Medium borrow that material from print journalism, franchise characters, television series,\ncomic books, video games and toys, academic studies of adaptation remain stubbornly attached to literature\nas cinema's natural progenitor.\n3. It is as if adaptation studies, by borrowing the cultural cachet of literature, sought to claim its institutional\nrespectability and gravitas even while insuring adaptation's enduring aesthetic and methodological\nsubordination to literature proper.\n4. Beneath this contradictory notion of film adaptations as not merely hybrid texts but texts holding dual\ncitizenship in two modes of presentation is an even more pervasive legacy that haunts adaptation studies: the\nassumption that the primary context within which adaptations are to be studied is literature.",
    "options": [],
    "correctAnswer": "1423",
    "explanation": "Official CAT answer: 1423."
  },
  {
    "id": "S2_VARC_17",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 17,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S2_RC_17",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nThis book takes the position that setting in literature is more than just backdrop, that important insight into literary\ntexts can be made by paying close attention to how authors craft place, as well as to how place functions in a narrative.\nThe authors included in this reference work engage deeply with either real or imagined geographies. They care about\nhow human decisions have shaped landscapes and how landscapes have shaped human practices and values. Some of\nthe best writing is highly vivid, employing the language of the senses because this is the primary means through which\nhumans know physical space.\nLiterature can offer valuable perspectives on physical and cultural geography. Unlike scientific reports, a literary\nnarrative can provide the emotional component missing from the scientific record. In human experience, geographical\nplaces have a spiritual or emotional component in addition to and as part of a physical layout and topography. This\nemotional component, although subjective, is no less \"real\" than a surveyor's map. Human consciousness of place is\nexperienced in a multi-modal manner. Histories of places live on in many forms, one of which is the human memory\nor imagination.\nBoth real and imaginary landscapes provide insight into the human experience of place. The pursuit of such a topic\nspeaks to the valuable knowledge produced from bridging disciplines and combining material from both the arts and\nthe sciences to better understand the human condition. The perspectives that most concern cultural geographers are\noften those regarding movement and migration, cultivation of natural resources, and organization of space. The latter\ntwo reflect concerns of the built environment, a topic shared with the field of architectural study. Many of these\nconcerns are also reflected in work sociologists do. Scholars from literary studies can contribute an aesthetic dimension\nto what might otherwise be a purely ideological approach.\nLiterature can bring together material that spans different branches of science. For example, a literary description of\nplace may involve not only the environment and geography but the noises and quality of light, or how people from\ndifferent races or classes can experience the same place in different ways linked to those racial or class disparities.\nLiterary texts can also account for the way in which absence of other people, animals, and so on affects a human\nobserver or inhabitant. Both literary and scientific approaches to place are necessary, working in unison, to achieve a\ncomplete record of an environment. It is important to note that the interdisciplinary nature of this work teaches us\nthat landscapes are not static, that they are not unchanged by human culture. At least part of their identity derives\nfrom the people who inhabit them and from the way space can alter and inspire human perspective. The intersection\nof scientific and literary expression that happens in the study of literary geography is of prime importance due to the\ncomplexity of the personal and political ways that humans experience place.",
    "questionText": "All of the following statements, if false, would contradict the arguments in the passage, EXCEPT that:",
    "options": [
      "Highly vivid writing, employing the language of the senses, can capture the multi-modal manner in which\nhumans experience places.",
      "Descriptions of places do not need satellite imagery or other visual aids to give a \"real\" sense of the place.",
      "Literature provides us with deep insights into the ways in which movement and migration affect physical\ngeography.",
      "Humans do not interact with places in subjective, emotional ways because places are only physical topography."
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S2_VARC_18",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 18,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S2_RC_17",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nThis book takes the position that setting in literature is more than just backdrop, that important insight into literary\ntexts can be made by paying close attention to how authors craft place, as well as to how place functions in a narrative.\nThe authors included in this reference work engage deeply with either real or imagined geographies. They care about\nhow human decisions have shaped landscapes and how landscapes have shaped human practices and values. Some of\nthe best writing is highly vivid, employing the language of the senses because this is the primary means through which\nhumans know physical space.\nLiterature can offer valuable perspectives on physical and cultural geography. Unlike scientific reports, a literary\nnarrative can provide the emotional component missing from the scientific record. In human experience, geographical\nplaces have a spiritual or emotional component in addition to and as part of a physical layout and topography. This\nemotional component, although subjective, is no less \"real\" than a surveyor's map. Human consciousness of place is\nexperienced in a multi-modal manner. Histories of places live on in many forms, one of which is the human memory\nor imagination.\nBoth real and imaginary landscapes provide insight into the human experience of place. The pursuit of such a topic\nspeaks to the valuable knowledge produced from bridging disciplines and combining material from both the arts and\nthe sciences to better understand the human condition. The perspectives that most concern cultural geographers are\noften those regarding movement and migration, cultivation of natural resources, and organization of space. The latter\ntwo reflect concerns of the built environment, a topic shared with the field of architectural study. Many of these\nconcerns are also reflected in work sociologists do. Scholars from literary studies can contribute an aesthetic dimension\nto what might otherwise be a purely ideological approach.\nLiterature can bring together material that spans different branches of science. For example, a literary description of\nplace may involve not only the environment and geography but the noises and quality of light, or how people from\ndifferent races or classes can experience the same place in different ways linked to those racial or class disparities.\nLiterary texts can also account for the way in which absence of other people, animals, and so on affects a human\nobserver or inhabitant. Both literary and scientific approaches to place are necessary, working in unison, to achieve a\ncomplete record of an environment. It is important to note that the interdisciplinary nature of this work teaches us\nthat landscapes are not static, that they are not unchanged by human culture. At least part of their identity derives\nfrom the people who inhabit them and from the way space can alter and inspire human perspective. The intersection\nof scientific and literary expression that happens in the study of literary geography is of prime importance due to the\ncomplexity of the personal and political ways that humans experience place.",
    "questionText": "Which one of the following is a valid conclusion to draw from the author's statement that, \"The pursuit of such a\ntopic speaks to the valuable knowledge produced from bridging disciplines and combining material from both the\narts and the sciences to better understand the human condition.\"?",
    "options": [
      "A comprehensive understanding of the valuable knowledge produced by the arts and sciences can best be\nachieved by studying the human condition.",
      "The literary descriptions of the emotions we experience in the places we visit can contribute to our\nunderstanding of the arts and sciences.",
      "A comprehensive bridging of the human condition can best be achieved by a disciplined pursuit of human\nunderstanding.",
      "A comprehensive understanding of the human condition can best be achieved by combining the findings of\ndisciplines from the arts and the sciences."
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S2_VARC_19",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 19,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S2_RC_17",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nThis book takes the position that setting in literature is more than just backdrop, that important insight into literary\ntexts can be made by paying close attention to how authors craft place, as well as to how place functions in a narrative.\nThe authors included in this reference work engage deeply with either real or imagined geographies. They care about\nhow human decisions have shaped landscapes and how landscapes have shaped human practices and values. Some of\nthe best writing is highly vivid, employing the language of the senses because this is the primary means through which\nhumans know physical space.\nLiterature can offer valuable perspectives on physical and cultural geography. Unlike scientific reports, a literary\nnarrative can provide the emotional component missing from the scientific record. In human experience, geographical\nplaces have a spiritual or emotional component in addition to and as part of a physical layout and topography. This\nemotional component, although subjective, is no less \"real\" than a surveyor's map. Human consciousness of place is\nexperienced in a multi-modal manner. Histories of places live on in many forms, one of which is the human memory\nor imagination.\nBoth real and imaginary landscapes provide insight into the human experience of place. The pursuit of such a topic\nspeaks to the valuable knowledge produced from bridging disciplines and combining material from both the arts and\nthe sciences to better understand the human condition. The perspectives that most concern cultural geographers are\noften those regarding movement and migration, cultivation of natural resources, and organization of space. The latter\ntwo reflect concerns of the built environment, a topic shared with the field of architectural study. Many of these\nconcerns are also reflected in work sociologists do. Scholars from literary studies can contribute an aesthetic dimension\nto what might otherwise be a purely ideological approach.\nLiterature can bring together material that spans different branches of science. For example, a literary description of\nplace may involve not only the environment and geography but the noises and quality of light, or how people from\ndifferent races or classes can experience the same place in different ways linked to those racial or class disparities.\nLiterary texts can also account for the way in which absence of other people, animals, and so on affects a human\nobserver or inhabitant. Both literary and scientific approaches to place are necessary, working in unison, to achieve a\ncomplete record of an environment. It is important to note that the interdisciplinary nature of this work teaches us\nthat landscapes are not static, that they are not unchanged by human culture. At least part of their identity derives\nfrom the people who inhabit them and from the way space can alter and inspire human perspective. The intersection\nof scientific and literary expression that happens in the study of literary geography is of prime importance due to the\ncomplexity of the personal and political ways that humans experience place.",
    "questionText": "Which one of the following is not true of the argument in the second paragraph?",
    "options": [
      "Literary accounts of places can be filled with histories, manifested as memory or imagination.",
      "The spiritual experience of a place may be considered as real as the physical experience of it.",
      "Analysing the literary descriptions of a place can give us a sense of how people relate emotionally to it.",
      "The emotional and spiritual experience of a place can replace a surveyor's map."
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S2_VARC_20",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 20,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S2_RC_17",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nThis book takes the position that setting in literature is more than just backdrop, that important insight into literary\ntexts can be made by paying close attention to how authors craft place, as well as to how place functions in a narrative.\nThe authors included in this reference work engage deeply with either real or imagined geographies. They care about\nhow human decisions have shaped landscapes and how landscapes have shaped human practices and values. Some of\nthe best writing is highly vivid, employing the language of the senses because this is the primary means through which\nhumans know physical space.\nLiterature can offer valuable perspectives on physical and cultural geography. Unlike scientific reports, a literary\nnarrative can provide the emotional component missing from the scientific record. In human experience, geographical\nplaces have a spiritual or emotional component in addition to and as part of a physical layout and topography. This\nemotional component, although subjective, is no less \"real\" than a surveyor's map. Human consciousness of place is\nexperienced in a multi-modal manner. Histories of places live on in many forms, one of which is the human memory\nor imagination.\nBoth real and imaginary landscapes provide insight into the human experience of place. The pursuit of such a topic\nspeaks to the valuable knowledge produced from bridging disciplines and combining material from both the arts and\nthe sciences to better understand the human condition. The perspectives that most concern cultural geographers are\noften those regarding movement and migration, cultivation of natural resources, and organization of space. The latter\ntwo reflect concerns of the built environment, a topic shared with the field of architectural study. Many of these\nconcerns are also reflected in work sociologists do. Scholars from literary studies can contribute an aesthetic dimension\nto what might otherwise be a purely ideological approach.\nLiterature can bring together material that spans different branches of science. For example, a literary description of\nplace may involve not only the environment and geography but the noises and quality of light, or how people from\ndifferent races or classes can experience the same place in different ways linked to those racial or class disparities.\nLiterary texts can also account for the way in which absence of other people, animals, and so on affects a human\nobserver or inhabitant. Both literary and scientific approaches to place are necessary, working in unison, to achieve a\ncomplete record of an environment. It is important to note that the interdisciplinary nature of this work teaches us\nthat landscapes are not static, that they are not unchanged by human culture. At least part of their identity derives\nfrom the people who inhabit them and from the way space can alter and inspire human perspective. The intersection\nof scientific and literary expression that happens in the study of literary geography is of prime importance due to the\ncomplexity of the personal and political ways that humans experience place.",
    "questionText": "The author uses the example of the literary description of place to illustrate that:",
    "options": [
      "Literature can convey how different people experience the same place differently.",
      "Architects use diverse methods to calibrate the noises and lights of a given place.",
      "The absence of other people, animals, and so on in a place can profoundly affect its inhabitants.",
      "Scientific approaches to place are more accurate than literary ones."
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S2_VARC_21",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 21,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S2_RC_21",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nTime and again, whenever a population of Mexican tetra fish was swept into a cave and survived long enough for\nnatural selection to have its way, the eyes disappeared. \"But it's not that everything has been lost in cavefish. Many\nenhancements have also happened.\" Studies have found that cave-dwelling fish can detect lower levels of amino acids\nthan surface fish can. They also have more tastebuds and a higher density of sensitive cells alongside their bodies that\nlet them sense water pressure and flow.\nKilling the processes that support the formation of the eye is quite literally what happens. Just like non cave dwelling\nmembers of the species, all cavefish embryos start making eyes. But after a few hours, cells in the developing eye start\ndying, until the entire structure has disappeared. Developmental biologist Misty Riddle thinks this apparent inefficiency\nmay be unavoidable. \"The early development of the brain and the eye are completely intertwined. they happen\ntogether,\" she says. That means the least disruptive way for eyelessness to evolve may be to start making an eye and\nthen get rid of it.\nIt's easy to see why cavefish would be at a disadvantage if they were to maintain expensive tissues they aren't using.\nSince relatively little lives or grows in their caves, the fish are likely surviving on a meager diet of mostly bat feces and\norganic waste that washes in during the rainy season. Researchers keeping cavefish in labs have discovered that,\ngenetically, the creatures are exquisitely adapted to absorbing and storing nutrients.\nFats can be toxic for tissues, evolutionary physiologist Nicolas Rohner explains, so they are stored in fat cells. \"But when\nthese cells get too big, they can burst, which is why we often see chronic inflammation in humans and other animals\nthat have stored a lot of fat in their tissues.\" Yet a 2020 study by Rohner, Krishnan and their colleagues revealed that\neven very well-fed cavefish had fewer signs of inflammation in their fat tissues than surface fish do. Even in their sparse\ncave conditions, wild cavefish can sometimes get very fat, says Riddle. This is presumably because, whenever food ends\nup in the cave, the fish eat as much of it as possible, since there may be nothing else for a long time to come.\nIntriguingly, Riddle says, their fat is usually bright yellow, because of high levels of carotenoids, the substance in the\ncarrots that your grandmother used to tell you were good for your eyes.\n\"The first thing that came to our mind, of course, was that they were accumulating these because they don't have\neyes,\" says Riddle. In this species, such ideas can be tested: Scientists can cross surface fish with eyes and cavefish\nwithout eyes and look at what their offspring are like. When that's done, Riddle says, researchers see no link between\neye presence or size and the accumulation of carotenoids. Some eyeless cavefish had fat that was practically white,\nindicating lower carotenoid levels. Instead, Riddle thinks these carotenoids may be another adaptation to suppress\ninflammation, which might be important in the wild, as cavefish are likely overeating whenever food arrives.",
    "questionText": "All of the following statements from the passage describe adaptation in Mexican tetra cavefish EXCEPT:",
    "options": [
      "\"Since relatively little lives or grows in their caves, the fish are likely surviving on a meager diet of mostly bat\nfeces and organic waste that washes in during the rainy season.\"",
      "\"It's easy to see why cavefish would be at a disadvantage if they were to maintain expensive tissues they aren't\nusing.\"",
      "\"Even in their sparse cave conditions, wild cavefish can sometimes get very fat, says Riddle.\"",
      "\"'But when these cells get too big, they can burst, which is why we often see chronic inflammation in humans\nand other animals that have stored a lot of fat in their tissues.'\""
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S2_VARC_22",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 22,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S2_RC_21",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nTime and again, whenever a population of Mexican tetra fish was swept into a cave and survived long enough for\nnatural selection to have its way, the eyes disappeared. \"But it's not that everything has been lost in cavefish. Many\nenhancements have also happened.\" Studies have found that cave-dwelling fish can detect lower levels of amino acids\nthan surface fish can. They also have more tastebuds and a higher density of sensitive cells alongside their bodies that\nlet them sense water pressure and flow.\nKilling the processes that support the formation of the eye is quite literally what happens. Just like non cave dwelling\nmembers of the species, all cavefish embryos start making eyes. But after a few hours, cells in the developing eye start\ndying, until the entire structure has disappeared. Developmental biologist Misty Riddle thinks this apparent inefficiency\nmay be unavoidable. \"The early development of the brain and the eye are completely intertwined. they happen\ntogether,\" she says. That means the least disruptive way for eyelessness to evolve may be to start making an eye and\nthen get rid of it.\nIt's easy to see why cavefish would be at a disadvantage if they were to maintain expensive tissues they aren't using.\nSince relatively little lives or grows in their caves, the fish are likely surviving on a meager diet of mostly bat feces and\norganic waste that washes in during the rainy season. Researchers keeping cavefish in labs have discovered that,\ngenetically, the creatures are exquisitely adapted to absorbing and storing nutrients.\nFats can be toxic for tissues, evolutionary physiologist Nicolas Rohner explains, so they are stored in fat cells. \"But when\nthese cells get too big, they can burst, which is why we often see chronic inflammation in humans and other animals\nthat have stored a lot of fat in their tissues.\" Yet a 2020 study by Rohner, Krishnan and their colleagues revealed that\neven very well-fed cavefish had fewer signs of inflammation in their fat tissues than surface fish do. Even in their sparse\ncave conditions, wild cavefish can sometimes get very fat, says Riddle. This is presumably because, whenever food ends\nup in the cave, the fish eat as much of it as possible, since there may be nothing else for a long time to come.\nIntriguingly, Riddle says, their fat is usually bright yellow, because of high levels of carotenoids, the substance in the\ncarrots that your grandmother used to tell you were good for your eyes.\n\"The first thing that came to our mind, of course, was that they were accumulating these because they don't have\neyes,\" says Riddle. In this species, such ideas can be tested: Scientists can cross surface fish with eyes and cavefish\nwithout eyes and look at what their offspring are like. When that's done, Riddle says, researchers see no link between\neye presence or size and the accumulation of carotenoids. Some eyeless cavefish had fat that was practically white,\nindicating lower carotenoid levels. Instead, Riddle thinks these carotenoids may be another adaptation to suppress\ninflammation, which might be important in the wild, as cavefish are likely overeating whenever food arrives.",
    "questionText": "Which one of the following best explains why the \"apparent inefficiency\" is \"unavoidable\"?",
    "options": [
      "Mexican tetra cavefish are similar to non-cave-dwelling variants in their early stages of development.",
      "The inefficiency resulting from eyelessness is compensated by enhancements like more tastebuds in Mexican\ntetra cavefish.",
      "The lack of light in the caves kills the eye cells in the developing Mexican tetra cavefish embryo.",
      "The caves have poor and inconsistent availability of food and nutrition for Mexican tetra cavefish."
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S2_VARC_23",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 23,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S2_RC_21",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nTime and again, whenever a population of Mexican tetra fish was swept into a cave and survived long enough for\nnatural selection to have its way, the eyes disappeared. \"But it's not that everything has been lost in cavefish. Many\nenhancements have also happened.\" Studies have found that cave-dwelling fish can detect lower levels of amino acids\nthan surface fish can. They also have more tastebuds and a higher density of sensitive cells alongside their bodies that\nlet them sense water pressure and flow.\nKilling the processes that support the formation of the eye is quite literally what happens. Just like non cave dwelling\nmembers of the species, all cavefish embryos start making eyes. But after a few hours, cells in the developing eye start\ndying, until the entire structure has disappeared. Developmental biologist Misty Riddle thinks this apparent inefficiency\nmay be unavoidable. \"The early development of the brain and the eye are completely intertwined. they happen\ntogether,\" she says. That means the least disruptive way for eyelessness to evolve may be to start making an eye and\nthen get rid of it.\nIt's easy to see why cavefish would be at a disadvantage if they were to maintain expensive tissues they aren't using.\nSince relatively little lives or grows in their caves, the fish are likely surviving on a meager diet of mostly bat feces and\norganic waste that washes in during the rainy season. Researchers keeping cavefish in labs have discovered that,\ngenetically, the creatures are exquisitely adapted to absorbing and storing nutrients.\nFats can be toxic for tissues, evolutionary physiologist Nicolas Rohner explains, so they are stored in fat cells. \"But when\nthese cells get too big, they can burst, which is why we often see chronic inflammation in humans and other animals\nthat have stored a lot of fat in their tissues.\" Yet a 2020 study by Rohner, Krishnan and their colleagues revealed that\neven very well-fed cavefish had fewer signs of inflammation in their fat tissues than surface fish do. Even in their sparse\ncave conditions, wild cavefish can sometimes get very fat, says Riddle. This is presumably because, whenever food ends\nup in the cave, the fish eat as much of it as possible, since there may be nothing else for a long time to come.\nIntriguingly, Riddle says, their fat is usually bright yellow, because of high levels of carotenoids, the substance in the\ncarrots that your grandmother used to tell you were good for your eyes.\n\"The first thing that came to our mind, of course, was that they were accumulating these because they don't have\neyes,\" says Riddle. In this species, such ideas can be tested: Scientists can cross surface fish with eyes and cavefish\nwithout eyes and look at what their offspring are like. When that's done, Riddle says, researchers see no link between\neye presence or size and the accumulation of carotenoids. Some eyeless cavefish had fat that was practically white,\nindicating lower carotenoid levels. Instead, Riddle thinks these carotenoids may be another adaptation to suppress\ninflammation, which might be important in the wild, as cavefish are likely overeating whenever food arrives.",
    "questionText": "Which one of the following results for the cross between surface fish (with eyes) and cavefish (without eyes) would\ninvalidate Riddle's inference from the experiment?",
    "options": [
      "Only eyeless offspring had yellow fat.",
      "Some offspring with eyes had white fat.",
      "Some eyeless offspring had white fat.",
      "Some offspring with eyes had yellow fat."
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S2_VARC_24",
    "slot": 2,
    "section": "VARC",
    "questionNumber": 24,
    "type": "MCQ",
    "subtopic": "Reading Comprehension",
    "setId": "S2_RC_21",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "The passage below is accompanied by four questions. Based on the passage, choose the best answer for each",
    "passage": "question.\nTime and again, whenever a population of Mexican tetra fish was swept into a cave and survived long enough for\nnatural selection to have its way, the eyes disappeared. \"But it's not that everything has been lost in cavefish. Many\nenhancements have also happened.\" Studies have found that cave-dwelling fish can detect lower levels of amino acids\nthan surface fish can. They also have more tastebuds and a higher density of sensitive cells alongside their bodies that\nlet them sense water pressure and flow.\nKilling the processes that support the formation of the eye is quite literally what happens. Just like non cave dwelling\nmembers of the species, all cavefish embryos start making eyes. But after a few hours, cells in the developing eye start\ndying, until the entire structure has disappeared. Developmental biologist Misty Riddle thinks this apparent inefficiency\nmay be unavoidable. \"The early development of the brain and the eye are completely intertwined. they happen\ntogether,\" she says. That means the least disruptive way for eyelessness to evolve may be to start making an eye and\nthen get rid of it.\nIt's easy to see why cavefish would be at a disadvantage if they were to maintain expensive tissues they aren't using.\nSince relatively little lives or grows in their caves, the fish are likely surviving on a meager diet of mostly bat feces and\norganic waste that washes in during the rainy season. Researchers keeping cavefish in labs have discovered that,\ngenetically, the creatures are exquisitely adapted to absorbing and storing nutrients.\nFats can be toxic for tissues, evolutionary physiologist Nicolas Rohner explains, so they are stored in fat cells. \"But when\nthese cells get too big, they can burst, which is why we often see chronic inflammation in humans and other animals\nthat have stored a lot of fat in their tissues.\" Yet a 2020 study by Rohner, Krishnan and their colleagues revealed that\neven very well-fed cavefish had fewer signs of inflammation in their fat tissues than surface fish do. Even in their sparse\ncave conditions, wild cavefish can sometimes get very fat, says Riddle. This is presumably because, whenever food ends\nup in the cave, the fish eat as much of it as possible, since there may be nothing else for a long time to come.\nIntriguingly, Riddle says, their fat is usually bright yellow, because of high levels of carotenoids, the substance in the\ncarrots that your grandmother used to tell you were good for your eyes.\n\"The first thing that came to our mind, of course, was that they were accumulating these because they don't have\neyes,\" says Riddle. In this species, such ideas can be tested: Scientists can cross surface fish with eyes and cavefish\nwithout eyes and look at what their offspring are like. When that's done, Riddle says, researchers see no link between\neye presence or size and the accumulation of carotenoids. Some eyeless cavefish had fat that was practically white,\nindicating lower carotenoid levels. Instead, Riddle thinks these carotenoids may be another adaptation to suppress\ninflammation, which might be important in the wild, as cavefish are likely overeating whenever food arrives.",
    "questionText": "On the basis of the information in the passage, what is the most likely function of carotenoids in Mexican tetra\ncavefish?",
    "options": [
      "To help the fat cells store nutrients.",
      "To render bright yellow colour to the cavefish.",
      "To control inflammation from the bursting of fat cells.",
      "To act as a substitute for eyes."
    ],
    "correctAnswer": 2,
    "explanation": "Official CAT answer: C."
  },
  {
    "id": "S2_DILR_1",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 1,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_1",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 1",
    "passage": "The above is a schematic diagram of walkways (indicated by all the straight-lines) and lakes (3 of them, each in the\nshape of rectangles – shaded in the diagram) of a gated area. Different points on the walkway are indicated by letters\n(A through P) with distances being OP = 150 m, ON = MN = 300 m, ML = 400 m, EL = 200 m, DE = 400 m.\nThe following additional information about the facilities in the area is known.",
    "diagramUrl": "/src/assets/questions/slot2_lrdi_walkways.png",
    "questionText": "The only entry/exit point is at C.\n2. There are many residences within the gated area; all of them are located on the path AH and ML with four of\nthem being at A, H, M, and L.\n3. The post office is located at P and the bank is located at B.\n\n1. One resident whose house is located at L, needs to visit the post office as well as the bank. What is the minimum\ndistance (in m) he has to walk starting from his residence and returning to his residence after visiting both the post\noffice and the bank?",
    "options": [
      "3200.",
      "2700.",
      "3000.",
      "3400."
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S2_DILR_2",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 2,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_1",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 1",
    "passage": "The above is a schematic diagram of walkways (indicated by all the straight-lines) and lakes (3 of them, each in the\nshape of rectangles – shaded in the diagram) of a gated area. Different points on the walkway are indicated by letters\n(A through P) with distances being OP = 150 m, ON = MN = 300 m, ML = 400 m, EL = 200 m, DE = 400 m.\nThe following additional information about the facilities in the area is known.",
    "diagramUrl": "/src/assets/questions/slot2_lrdi_walkways.png",
    "questionText": "One person enters the gated area and decides to walk as much as possible before leaving the area without walking\nalong any path more than once and always walking next to one of the lakes. Note that he may cross a point multiple\ntimes. How much distance (in m) will he walk within the gated area?",
    "options": [
      "3800.",
      "2800.",
      "3000.",
      "3200."
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S2_DILR_3",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 3,
    "type": "TITA",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_1",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 1",
    "passage": "The above is a schematic diagram of walkways (indicated by all the straight-lines) and lakes (3 of them, each in the\nshape of rectangles – shaded in the diagram) of a gated area. Different points on the walkway are indicated by letters\n(A through P) with distances being OP = 150 m, ON = MN = 300 m, ML = 400 m, EL = 200 m, DE = 400 m.\nThe following additional information about the facilities in the area is known.",
    "diagramUrl": "/src/assets/questions/slot2_lrdi_walkways.png",
    "questionText": "One resident takes a walk within the gated area starting from A and returning to A without going through any point\n(other than A) more than once. What is the maximum distance (in m) she can walk in this way?",
    "options": [],
    "correctAnswer": "5100",
    "explanation": "Official CAT answer: 5100."
  },
  {
    "id": "S2_DILR_4",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 4,
    "type": "TITA",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_1",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 1",
    "passage": "The above is a schematic diagram of walkways (indicated by all the straight-lines) and lakes (3 of them, each in the\nshape of rectangles – shaded in the diagram) of a gated area. Different points on the walkway are indicated by letters\n(A through P) with distances being OP = 150 m, ON = MN = 300 m, ML = 400 m, EL = 200 m, DE = 400 m.\nThe following additional information about the facilities in the area is known.",
    "diagramUrl": "/src/assets/questions/slot2_lrdi_walkways.png",
    "questionText": "Visitors coming for morning walks are allowed to enter as long as they do not pass by any of the residences and do\nnot cross any point (except C) more than once. What is the maximum distance (in m) that such a visitor can walk\nwithin the gated area?",
    "options": [],
    "correctAnswer": "3500",
    "explanation": "Official CAT answer: 3500."
  },
  {
    "id": "S2_DILR_5",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 5,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_2",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 2",
    "passage": "Eight gymnastics players numbered 1 through 8 underwent a training camp where they were coached by three coaches\nXena, Yuki, and Zara. Each coach trained at least two players. Yuki trained only even numbered players, while Zara\ntrained only odd numbered players. After the camp, the coaches evaluated the players and gave integer ratings to the\nrespective players trained by them on a scale of 1 to 7, with 1 being the lowest rating and 7 the highest.\nThe following additional information is known.\n1. Xena trained more players than Yuki.\n2. Player-1 and Player-4 were trained by the same coach, while the coaches who trained Player-2, Player-3 and\nPlayer-5 were all different.\n3. Player-5 and Player-7 were trained by the same coach and got the same rating. All other players got a unique\nrating.\n4. The average of the ratings of all the players was 4.",
    "diagramUrl": null,
    "questionText": "Player-2 got the highest rating.\n6. The average of the ratings of the players trained by Yuki was twice that of the players trained by Xena and two\nmore than that of the players trained by Zara.\n7. Player-4's rating was double of Player-8's and less than Player-5's.\n\n5. What best can be concluded about the number of players coached by Zara?",
    "options": [
      "Exactly 3.",
      "Either 2 or 3 or 4.",
      "Exactly 2.",
      "Either 2 or 3."
    ],
    "correctAnswer": 2,
    "explanation": "Official CAT answer: C."
  },
  {
    "id": "S2_DILR_6",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 6,
    "type": "TITA",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_2",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 2",
    "passage": "Eight gymnastics players numbered 1 through 8 underwent a training camp where they were coached by three coaches\nXena, Yuki, and Zara. Each coach trained at least two players. Yuki trained only even numbered players, while Zara\ntrained only odd numbered players. After the camp, the coaches evaluated the players and gave integer ratings to the\nrespective players trained by them on a scale of 1 to 7, with 1 being the lowest rating and 7 the highest.\nThe following additional information is known.\n1. Xena trained more players than Yuki.\n2. Player-1 and Player-4 were trained by the same coach, while the coaches who trained Player-2, Player-3 and\nPlayer-5 were all different.\n3. Player-5 and Player-7 were trained by the same coach and got the same rating. All other players got a unique\nrating.\n4. The average of the ratings of all the players was 4.",
    "diagramUrl": null,
    "questionText": "What was the rating of Player-7?",
    "options": [],
    "correctAnswer": "4",
    "explanation": "Official CAT answer: 4."
  },
  {
    "id": "S2_DILR_7",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 7,
    "type": "TITA",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_2",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 2",
    "passage": "Eight gymnastics players numbered 1 through 8 underwent a training camp where they were coached by three coaches\nXena, Yuki, and Zara. Each coach trained at least two players. Yuki trained only even numbered players, while Zara\ntrained only odd numbered players. After the camp, the coaches evaluated the players and gave integer ratings to the\nrespective players trained by them on a scale of 1 to 7, with 1 being the lowest rating and 7 the highest.\nThe following additional information is known.\n1. Xena trained more players than Yuki.\n2. Player-1 and Player-4 were trained by the same coach, while the coaches who trained Player-2, Player-3 and\nPlayer-5 were all different.\n3. Player-5 and Player-7 were trained by the same coach and got the same rating. All other players got a unique\nrating.\n4. The average of the ratings of all the players was 4.",
    "diagramUrl": null,
    "questionText": "What was the rating of Player-6?",
    "options": [],
    "correctAnswer": "5",
    "explanation": "Official CAT answer: 5."
  },
  {
    "id": "S2_DILR_8",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 8,
    "type": "TITA",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_2",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 2",
    "passage": "Eight gymnastics players numbered 1 through 8 underwent a training camp where they were coached by three coaches\nXena, Yuki, and Zara. Each coach trained at least two players. Yuki trained only even numbered players, while Zara\ntrained only odd numbered players. After the camp, the coaches evaluated the players and gave integer ratings to the\nrespective players trained by them on a scale of 1 to 7, with 1 being the lowest rating and 7 the highest.\nThe following additional information is known.\n1. Xena trained more players than Yuki.\n2. Player-1 and Player-4 were trained by the same coach, while the coaches who trained Player-2, Player-3 and\nPlayer-5 were all different.\n3. Player-5 and Player-7 were trained by the same coach and got the same rating. All other players got a unique\nrating.\n4. The average of the ratings of all the players was 4.",
    "diagramUrl": null,
    "questionText": "For how many players the ratings can be determined with certainty?",
    "options": [],
    "correctAnswer": "6",
    "explanation": "Official CAT answer: 6."
  },
  {
    "id": "S2_DILR_9",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 9,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_2",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 2",
    "passage": "Eight gymnastics players numbered 1 through 8 underwent a training camp where they were coached by three coaches\nXena, Yuki, and Zara. Each coach trained at least two players. Yuki trained only even numbered players, while Zara\ntrained only odd numbered players. After the camp, the coaches evaluated the players and gave integer ratings to the\nrespective players trained by them on a scale of 1 to 7, with 1 being the lowest rating and 7 the highest.\nThe following additional information is known.\n1. Xena trained more players than Yuki.\n2. Player-1 and Player-4 were trained by the same coach, while the coaches who trained Player-2, Player-3 and\nPlayer-5 were all different.\n3. Player-5 and Player-7 were trained by the same coach and got the same rating. All other players got a unique\nrating.\n4. The average of the ratings of all the players was 4.",
    "diagramUrl": null,
    "questionText": "Who all were the players trained by Xena?",
    "options": [
      "Player-1, Player-3, Player-4, Player-6.",
      "Player-1, Player-4, Player-6, Player-8.",
      "Player-1, Player-3, Player-4, Player-8.",
      "Player-1, Player-3, Player-4."
    ],
    "correctAnswer": 2,
    "explanation": "Official CAT answer: C."
  },
  {
    "id": "S2_DILR_10",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 10,
    "type": "TITA",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_3",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 3",
    "passage": "The numbers 1, 2, 3, 4, 5, 6, 7, 8, 9, and 10 are placed in ten slots of the following grid based on the conditions below.\n\nColumn 1\nColumn 2\nColumn 3\nColumn 4\nRow 1\n\nRow 2\n\nRow 3\n\nRow 4\n\n1. Numbers in any row appear in an increasing order from left to right.\n2. Numbers in any column appear in a decreasing order from top to bottom.\n3. 1 is placed either in the same row or in the same column as 10.\n4. Neither 2 nor 3 is placed in the same row or in the same column as 10.\n5. Neither 7 nor 8 is placed in the same row or in the same column as 9.\n6. 4 and 6 are placed in the same row.",
    "diagramUrl": null,
    "questionText": "What is the row number which has the least sum of numbers placed in that row?",
    "options": [],
    "correctAnswer": "4",
    "explanation": "Official CAT answer: 4."
  },
  {
    "id": "S2_DILR_11",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 11,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_3",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 3",
    "passage": "The numbers 1, 2, 3, 4, 5, 6, 7, 8, 9, and 10 are placed in ten slots of the following grid based on the conditions below.\n\nColumn 1\nColumn 2\nColumn 3\nColumn 4\nRow 1\n\nRow 2\n\nRow 3\n\nRow 4\n\n1. Numbers in any row appear in an increasing order from left to right.\n2. Numbers in any column appear in a decreasing order from top to bottom.\n3. 1 is placed either in the same row or in the same column as 10.\n4. Neither 2 nor 3 is placed in the same row or in the same column as 10.\n5. Neither 7 nor 8 is placed in the same row or in the same column as 9.\n6. 4 and 6 are placed in the same row.",
    "diagramUrl": null,
    "questionText": "Which of the following statements MUST be true?\n(I). 10 is placed in a slot in Row 1.\n(II). 1 is placed in a slot in Row 4.",
    "options": [
      "Both I and II",
      "Only I",
      "Only II",
      "Neither I nor II"
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S2_DILR_12",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 12,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_3",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 3",
    "passage": "The numbers 1, 2, 3, 4, 5, 6, 7, 8, 9, and 10 are placed in ten slots of the following grid based on the conditions below.\n\nColumn 1\nColumn 2\nColumn 3\nColumn 4\nRow 1\n\nRow 2\n\nRow 3\n\nRow 4\n\n1. Numbers in any row appear in an increasing order from left to right.\n2. Numbers in any column appear in a decreasing order from top to bottom.\n3. 1 is placed either in the same row or in the same column as 10.\n4. Neither 2 nor 3 is placed in the same row or in the same column as 10.\n5. Neither 7 nor 8 is placed in the same row or in the same column as 9.\n6. 4 and 6 are placed in the same row.",
    "diagramUrl": null,
    "questionText": "Which of the following statements MUST be true?\n(I). 2 is placed in a slot in Column 2.\n(II). 3 is placed in a slot in Column 3.",
    "options": [
      "Both I and II",
      "Neither I nor II",
      "Only II",
      "Only I"
    ],
    "correctAnswer": 1,
    "explanation": "Official CAT answer: B."
  },
  {
    "id": "S2_DILR_13",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 13,
    "type": "TITA",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_3",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 3",
    "passage": "The numbers 1, 2, 3, 4, 5, 6, 7, 8, 9, and 10 are placed in ten slots of the following grid based on the conditions below.\n\nColumn 1\nColumn 2\nColumn 3\nColumn 4\nRow 1\n\nRow 2\n\nRow 3\n\nRow 4\n\n1. Numbers in any row appear in an increasing order from left to right.\n2. Numbers in any column appear in a decreasing order from top to bottom.\n3. 1 is placed either in the same row or in the same column as 10.\n4. Neither 2 nor 3 is placed in the same row or in the same column as 10.\n5. Neither 7 nor 8 is placed in the same row or in the same column as 9.\n6. 4 and 6 are placed in the same row.",
    "diagramUrl": null,
    "questionText": "For how many slots in the grid, placement of numbers CANNOT be determined with certainty?",
    "options": [],
    "correctAnswer": "2",
    "explanation": "Official CAT answer: 2."
  },
  {
    "id": "S2_DILR_14",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 14,
    "type": "TITA",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_3",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 3",
    "passage": "The numbers 1, 2, 3, 4, 5, 6, 7, 8, 9, and 10 are placed in ten slots of the following grid based on the conditions below.\n\nColumn 1\nColumn 2\nColumn 3\nColumn 4\nRow 1\n\nRow 2\n\nRow 3\n\nRow 4\n\n1. Numbers in any row appear in an increasing order from left to right.\n2. Numbers in any column appear in a decreasing order from top to bottom.\n3. 1 is placed either in the same row or in the same column as 10.\n4. Neither 2 nor 3 is placed in the same row or in the same column as 10.\n5. Neither 7 nor 8 is placed in the same row or in the same column as 9.\n6. 4 and 6 are placed in the same row.",
    "diagramUrl": null,
    "questionText": "What is the sum of the numbers placed in Column 4?",
    "options": [],
    "correctAnswer": "26",
    "explanation": "Official CAT answer: 26."
  },
  {
    "id": "S2_DILR_15",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 15,
    "type": "TITA",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_4",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 4",
    "passage": "An online e-commerce firm receives daily integer product ratings from 1 through 5 given by buyers. The daily average\nis the average of the ratings given on that day. The cumulative average is the average of all ratings given on or before\nthat day.\nThe rating system began on Day 1, and the cumulative averages were 3 and 3.1 at the end of Day 1 and Day 2,\nrespectively. The distribution of ratings on Day 2 is given in the figure below.\n\nThe following information is known about ratings on Day 3.\n1. 100 buyers gave product ratings on Day 3.\n2. The modes of the product ratings were 4 and 5.\n3. The numbers of buyers giving each product rating are non-zero multiples of 10.\n4. The same number of buyers gave product ratings of 1 and 2, and that number is half the number of buyers\nwho gave a rating of 3.",
    "diagramUrl": "/src/assets/questions/slot2_lrdi_ratings.png",
    "questionText": "How many buyers gave ratings on Day 1?",
    "options": [],
    "correctAnswer": "150",
    "explanation": "Official CAT answer: 150."
  },
  {
    "id": "S2_DILR_16",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 16,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_4",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 4",
    "passage": "An online e-commerce firm receives daily integer product ratings from 1 through 5 given by buyers. The daily average\nis the average of the ratings given on that day. The cumulative average is the average of all ratings given on or before\nthat day.\nThe rating system began on Day 1, and the cumulative averages were 3 and 3.1 at the end of Day 1 and Day 2,\nrespectively. The distribution of ratings on Day 2 is given in the figure below.\n\nThe following information is known about ratings on Day 3.\n1. 100 buyers gave product ratings on Day 3.\n2. The modes of the product ratings were 4 and 5.\n3. The numbers of buyers giving each product rating are non-zero multiples of 10.\n4. The same number of buyers gave product ratings of 1 and 2, and that number is half the number of buyers\nwho gave a rating of 3.",
    "diagramUrl": "/src/assets/questions/slot2_lrdi_ratings.png",
    "questionText": "What is the daily average rating of Day 3?",
    "options": [
      "3.5",
      "3.2",
      "3.0",
      "3.6"
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S2_DILR_17",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 17,
    "type": "TITA",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_4",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 4",
    "passage": "An online e-commerce firm receives daily integer product ratings from 1 through 5 given by buyers. The daily average\nis the average of the ratings given on that day. The cumulative average is the average of all ratings given on or before\nthat day.\nThe rating system began on Day 1, and the cumulative averages were 3 and 3.1 at the end of Day 1 and Day 2,\nrespectively. The distribution of ratings on Day 2 is given in the figure below.\n\nThe following information is known about ratings on Day 3.\n1. 100 buyers gave product ratings on Day 3.\n2. The modes of the product ratings were 4 and 5.\n3. The numbers of buyers giving each product rating are non-zero multiples of 10.\n4. The same number of buyers gave product ratings of 1 and 2, and that number is half the number of buyers\nwho gave a rating of 3.",
    "diagramUrl": "/src/assets/questions/slot2_lrdi_ratings.png",
    "questionText": "What is the median of all ratings given on Day 3?",
    "options": [],
    "correctAnswer": "4",
    "explanation": "Official CAT answer: 4."
  },
  {
    "id": "S2_DILR_18",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 18,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_4",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 4",
    "passage": "An online e-commerce firm receives daily integer product ratings from 1 through 5 given by buyers. The daily average\nis the average of the ratings given on that day. The cumulative average is the average of all ratings given on or before\nthat day.\nThe rating system began on Day 1, and the cumulative averages were 3 and 3.1 at the end of Day 1 and Day 2,\nrespectively. The distribution of ratings on Day 2 is given in the figure below.\n\nThe following information is known about ratings on Day 3.\n1. 100 buyers gave product ratings on Day 3.\n2. The modes of the product ratings were 4 and 5.\n3. The numbers of buyers giving each product rating are non-zero multiples of 10.\n4. The same number of buyers gave product ratings of 1 and 2, and that number is half the number of buyers\nwho gave a rating of 3.",
    "diagramUrl": "/src/assets/questions/slot2_lrdi_ratings.png",
    "questionText": "Which of the following is true about the cumulative average ratings of Day 2 and Day 3?",
    "options": [
      "The cumulative average of Day 3 increased by less than 5% from Day 2.",
      "The cumulative average of Day 3 increased by more than 8% from Day 2.",
      "The cumulative average of Day 3 increased by a percentage between 5% and 8% from Day 2.",
      "The cumulative average of Day 3 decreased from Day 2."
    ],
    "correctAnswer": 2,
    "explanation": "Official CAT answer: C."
  },
  {
    "id": "S2_DILR_19",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 19,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_5",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 5",
    "passage": "The two plots below give the following information about six firms A, B, C, D, E, and F for 2019 and 2023.\nPAT: The firm's profits after taxes in Rs. crores,\nES: The firm's employee strength, that is the number of employees in the firm, and\nPRD: The percentage of the firm's PAT that they spend on Research and Development (R&D).\nIn the plots, the horizontal and vertical coordinates of point representing each firm gives their ES and PAT values\nrespectively. The PRD values of each firm are proportional to the areas around the points representing each firm. The\nareas are comparable between the two plots, i.e., equal areas in the two plots represent the same PRD values for the\ntwo years.",
    "diagramUrl": "/src/assets/questions/slot2_lrdi_firms.png",
    "questionText": "Assume that the annual rate of growth in PAT over the previous year (ARG) remained constant over the years for\neach of the six firms. Which among the firms A, B, C, and E had the highest ARG?",
    "options": [
      "Firm C",
      "Firm B",
      "Firm A",
      "Firm E"
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S2_DILR_20",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 20,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_5",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 5",
    "passage": "The two plots below give the following information about six firms A, B, C, D, E, and F for 2019 and 2023.\nPAT: The firm's profits after taxes in Rs. crores,\nES: The firm's employee strength, that is the number of employees in the firm, and\nPRD: The percentage of the firm's PAT that they spend on Research and Development (R&D).\nIn the plots, the horizontal and vertical coordinates of point representing each firm gives their ES and PAT values\nrespectively. The PRD values of each firm are proportional to the areas around the points representing each firm. The\nareas are comparable between the two plots, i.e., equal areas in the two plots represent the same PRD values for the\ntwo years.",
    "diagramUrl": "/src/assets/questions/slot2_lrdi_firms.png",
    "questionText": "The ratio of the amount of money spent by Firm C on R&D in 2019 to that in 2023 is closest to",
    "options": [
      "5 : 9",
      "9 : 5",
      "9 : 4",
      "5 : 6"
    ],
    "correctAnswer": 1,
    "explanation": "Official CAT answer: B."
  },
  {
    "id": "S2_DILR_21",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 21,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_5",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 5",
    "passage": "The two plots below give the following information about six firms A, B, C, D, E, and F for 2019 and 2023.\nPAT: The firm's profits after taxes in Rs. crores,\nES: The firm's employee strength, that is the number of employees in the firm, and\nPRD: The percentage of the firm's PAT that they spend on Research and Development (R&D).\nIn the plots, the horizontal and vertical coordinates of point representing each firm gives their ES and PAT values\nrespectively. The PRD values of each firm are proportional to the areas around the points representing each firm. The\nareas are comparable between the two plots, i.e., equal areas in the two plots represent the same PRD values for the\ntwo years.",
    "diagramUrl": "/src/assets/questions/slot2_lrdi_firms.png",
    "questionText": "Which among the firms A, C, E, and F had the maximum PAT per employee in 2023?",
    "options": [
      "Firm C",
      "Firm A",
      "Firm E",
      "Firm F"
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S2_DILR_22",
    "slot": 2,
    "section": "DILR",
    "questionNumber": 22,
    "type": "MCQ",
    "subtopic": "Data Interpretation & Logical Reasoning",
    "setId": "S2_LRDI_SET_5",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": "Data Interpretation & Logical Reasoning - Set 5",
    "passage": "The two plots below give the following information about six firms A, B, C, D, E, and F for 2019 and 2023.\nPAT: The firm's profits after taxes in Rs. crores,\nES: The firm's employee strength, that is the number of employees in the firm, and\nPRD: The percentage of the firm's PAT that they spend on Research and Development (R&D).\nIn the plots, the horizontal and vertical coordinates of point representing each firm gives their ES and PAT values\nrespectively. The PRD values of each firm are proportional to the areas around the points representing each firm. The\nareas are comparable between the two plots, i.e., equal areas in the two plots represent the same PRD values for the\ntwo years.",
    "diagramUrl": "/src/assets/questions/slot2_lrdi_firms.png",
    "questionText": "Which among the firms C, D, E, and F had the least amount of R&D spending per employee in 2023?",
    "options": [
      "Firm D",
      "Firm E",
      "Firm C",
      "Firm F"
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S2_QA_1",
    "slot": 2,
    "section": "QA",
    "questionNumber": 1,
    "type": "TITA",
    "subtopic": "Algebra",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "If m and n are integers such that (m + 2n) (2m +n) = 27, then the maximum possible value of 2m - 3n is",
    "options": [],
    "correctAnswer": "17",
    "explanation": "Official CAT answer: 17."
  },
  {
    "id": "S2_QA_2",
    "slot": 2,
    "section": "QA",
    "questionNumber": 2,
    "type": "MCQ",
    "subtopic": "Algebra",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "If log64 𝑥2 + log8 √𝑦+ 3 log512(𝑦𝑧) = 4, where x, y and z are positive real numbers, then the minimum possible\nvalue of (x + y + z) is",
    "options": [
      "96",
      "48",
      "36",
      "24"
    ],
    "correctAnswer": 1,
    "explanation": "Official CAT answer: 48."
  },
  {
    "id": "S2_QA_3",
    "slot": 2,
    "section": "QA",
    "questionNumber": 3,
    "type": "TITA",
    "subtopic": "Arithmetic",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "The average number of copies of a book sold per day by a shopkeeper is 60 in the initial seven days and 63 in the\ninitial eight days, after the book launch. On the ninth day, she sells 11 copies less than the eighth day, and the\naverage number of copies sold per day from second day to ninth day becomes 66. The number of copies sold on\nthe first day of the book launch is",
    "options": [],
    "correctAnswer": "49",
    "explanation": "Official CAT answer: 49."
  },
  {
    "id": "S2_QA_4",
    "slot": 2,
    "section": "QA",
    "questionNumber": 4,
    "type": "MCQ",
    "subtopic": "Algebra",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "Let 𝑓(𝑥) =\n𝑥\n(2𝑥−1) and 𝑔(𝑥)\n𝑥\n(𝑥−1). Then, the domain of the function ℎ(𝑥) = 𝑓(𝑔(𝑥)) + 𝑔(𝑓(𝑥)) is all real numbers\nexcept",
    "options": [
      "−1,\n1\n2 and 1",
      "1\n2 , 1 and\n3\n2",
      "−\n1\n2 ,\n1\n2 and 1",
      "1\n2, and 1"
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S2_QA_5",
    "slot": 2,
    "section": "QA",
    "questionNumber": 5,
    "type": "MCQ",
    "subtopic": "Quantitative Aptitude",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "If 9𝑥2+2𝑥−3 −4 (3𝑥2 + 2𝑥−2) + 27 = 0, then the product of all possible value of x is",
    "options": [
      "5",
      "20",
      "30",
      "15"
    ],
    "correctAnswer": 1,
    "explanation": "Official CAT answer: B."
  },
  {
    "id": "S2_QA_6",
    "slot": 2,
    "section": "QA",
    "questionNumber": 6,
    "type": "MCQ",
    "subtopic": "Geometry & Mensuration",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "Let ABCDEF be a regular hexagon and P and Q be the midpoints of AB and CD, respectively. Then, the ratio of the\nareas of trapezium PBCQ and hexagon ABCDEF is",
    "options": [
      "5 : 24",
      "7 : 24",
      "6 : 25",
      "6 : 19"
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S2_QA_7",
    "slot": 2,
    "section": "QA",
    "questionNumber": 7,
    "type": "TITA",
    "subtopic": "Algebra",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "If a, b, c and d are integers such that their sum is 46, then the minimum possible value of (𝑎−𝑏)2 + (𝑎−𝑐)2 +\n(𝑎−𝑑)2 is",
    "options": [],
    "correctAnswer": "2",
    "explanation": "Official CAT answer: 2."
  },
  {
    "id": "S2_QA_8",
    "slot": 2,
    "section": "QA",
    "questionNumber": 8,
    "type": "MCQ",
    "subtopic": "Quantitative Aptitude",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "Let 𝑎𝑛 be the 𝑛𝑡ℎ term of a deceasing infinite geometric progression. If 𝑎1 + 𝑎2 + 𝑎3 = 52 and 𝑎1𝑎2 + 𝑎2𝑎3 +\n𝑎3𝑎1 = 624, then the sum of this geometric progression is",
    "options": [
      "63",
      "60",
      "54",
      "57"
    ],
    "correctAnswer": 2,
    "explanation": "Official CAT answer: C."
  },
  {
    "id": "S2_QA_9",
    "slot": 2,
    "section": "QA",
    "questionNumber": 9,
    "type": "TITA",
    "subtopic": "Quantitative Aptitude",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "Suppose a, b, c are three distinct natural numbers, such that 3𝑎𝑐= 8(𝑎+ 𝑏). Then, the smallest possible value of\n3𝑎+ 2𝑏+ 𝑐 is",
    "options": [],
    "correctAnswer": "12",
    "explanation": "Official CAT answer: 12."
  },
  {
    "id": "S2_QA_10",
    "slot": 2,
    "section": "QA",
    "questionNumber": 10,
    "type": "TITA",
    "subtopic": "Geometry & Mensuration",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "Two tangents drawn from a point P touch a circle with center O at points Q and R. points A and B lie on PQ and PR,\nrespectively, such that AB is also tangent to the same circle. If ∠𝐴𝑂𝐵= 500, then ∠𝐴𝑃𝐵, in degrees, equals",
    "options": [],
    "correctAnswer": "80",
    "explanation": "Official CAT answer: 80."
  },
  {
    "id": "S2_QA_11",
    "slot": 2,
    "section": "QA",
    "questionNumber": 11,
    "type": "MCQ",
    "subtopic": "Quantitative Aptitude",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "The number of divisors of (26 × 35 × 53 × 72), which are of the form (3𝑟+ 1), where r is a non – negative integer,\nis",
    "options": [
      "42",
      "36",
      "56",
      "24"
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S2_QA_12",
    "slot": 2,
    "section": "QA",
    "questionNumber": 12,
    "type": "TITA",
    "subtopic": "Quantitative Aptitude",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "Ankita is twice as efficient as Bipin, while Bipin is twice as efficient as Chandan. All three of them start together on\na job, and Bipin leaves the job after 20 days. If the job got completed in 60 days, the number of days needed by\nChandan to complete the job alone, is",
    "options": [],
    "correctAnswer": "340",
    "explanation": "Official CAT answer: 340."
  },
  {
    "id": "S2_QA_13",
    "slot": 2,
    "section": "QA",
    "questionNumber": 13,
    "type": "MCQ",
    "subtopic": "Arithmetic",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "The ratio of expenditures of Lakshmi and Meenakshi is 2 : 3, and the ratio of income of Lakshmi to expenditure of\nMeenakshi is 6 : 7. If excess of income over expenditure is saved by Lakshmi and Meenakshi, and the ratio of their\nsavings is 4 : 9, then the ratio of their incomes is",
    "options": [
      "5 : 6",
      "3 : 5",
      "7 : 8",
      "2 : 1"
    ],
    "correctAnswer": 1,
    "explanation": "Official CAT answer: B."
  },
  {
    "id": "S2_QA_14",
    "slot": 2,
    "section": "QA",
    "questionNumber": 14,
    "type": "MCQ",
    "subtopic": "Quantitative Aptitude",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "The set of all real values of x for which (𝑥2 −|𝑥+ 9| + 𝑥) > 0, is",
    "options": [
      "(−∞, −9) ∪(9, ∞)",
      "(− ∞, −3) ∪(3, ∞)",
      "(−9, −3) ∪(3, ∞)",
      "(−∞, −9) ∪(3, ∞)"
    ],
    "correctAnswer": 1,
    "explanation": "Official CAT answer: B."
  },
  {
    "id": "S2_QA_15",
    "slot": 2,
    "section": "QA",
    "questionNumber": 15,
    "type": "MCQ",
    "subtopic": "Arithmetic",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "An item with a cost price of Rs. 1650 is sold at a certain discount on a fixed marked price to earn a profit of 20% on\nthe cost price. If the discount was doubled, the profit would have been Rs. 110. The rate of discount, in percentage,\nat which the profit percentage would be equal to the rate of discount, is nearest to",
    "options": [
      "12",
      "14",
      "16",
      "18"
    ],
    "correctAnswer": 1,
    "explanation": "Official CAT answer: B."
  },
  {
    "id": "S2_QA_16",
    "slot": 2,
    "section": "QA",
    "questionNumber": 16,
    "type": "MCQ",
    "subtopic": "Algebra",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "The equation 3𝑥2 −5𝑥+ 𝑝= 0 and 2𝑥2 −2𝑥+ 𝑞= 0 have one common root. The sum of the other roots of\nthese two equations is",
    "options": [
      "2\n3 −𝑝+\n3\n2 𝑞",
      "8\n3 + 𝑝+\n1\n3 𝑞",
      "2\n3 −2𝑝+\n2\n3 𝑞",
      "8\n3 −𝑝+\n3\n2 𝑞"
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S2_QA_17",
    "slot": 2,
    "section": "QA",
    "questionNumber": 17,
    "type": "MCQ",
    "subtopic": "Arithmetic",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "A mixture of coffee and cocoa, 16% of which is coffee, costs Rs 240 per kg. Another mixture of coffee and cocoa,\nof which 36% is coffee, costs Rs 320 per kg. If a new mixture of coffee and cocoa costs Rs 376 per kg, then the\nquantity, in kg, of coffee in 10 kg of this new mixture is",
    "options": [
      "4",
      "6",
      "2.5",
      "5"
    ],
    "correctAnswer": 3,
    "explanation": "Official CAT answer: D."
  },
  {
    "id": "S2_QA_18",
    "slot": 2,
    "section": "QA",
    "questionNumber": 18,
    "type": "MCQ",
    "subtopic": "Arithmetic",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "A loan of Rs 1000 is fully repaid by two installments of Rs 530 and Rs 594, paid at the end of first and second year,\nrespectively. If the interest is compounded annually, then the rate of interest, in percentage, is",
    "options": [
      "8",
      "10",
      "11",
      "9"
    ],
    "correctAnswer": 0,
    "explanation": "Official CAT answer: A."
  },
  {
    "id": "S2_QA_19",
    "slot": 2,
    "section": "QA",
    "questionNumber": 19,
    "type": "TITA",
    "subtopic": "Arithmetic",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "Rita and Sneha can row a boat at 5 km/h and 6 km/h in still water, respectively. In a river flowing with a constant\nvelocity, Sneha takes 48 minutes more to row 14 km upstream than to row the same distance downstream. If Rita\nstarts from a certain location in the river, and returns downstream to the same location, taking a total of 100\nminutes, then the total distance, in km, Rita will cover is",
    "options": [],
    "correctAnswer": "8",
    "explanation": "Official CAT answer: 8."
  },
  {
    "id": "S2_QA_20",
    "slot": 2,
    "section": "QA",
    "questionNumber": 20,
    "type": "TITA",
    "subtopic": "Number System",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": 0
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "The sum of digits of the number (625)65 × (128)36, is",
    "options": [],
    "correctAnswer": "25",
    "explanation": "Official CAT answer: 25."
  },
  {
    "id": "S2_QA_21",
    "slot": 2,
    "section": "QA",
    "questionNumber": 21,
    "type": "MCQ",
    "subtopic": "Quantitative Aptitude",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "In a ∆𝐴𝐵𝐶, points D and E are on the sides BC and AC, respectively. BE and AD intersect at point T such that 𝐴𝐷∶\n𝐴𝑇= 4 ∶3 and BE : BT = 5 : 4. Point F lies on AC such that DF is parallel to BE. Then, BD : CD is",
    "options": [
      "9 : 4",
      "15 : 4",
      "11 : 4",
      "7 : 4"
    ],
    "correctAnswer": 2,
    "explanation": "Official CAT answer: C."
  },
  {
    "id": "S2_QA_22",
    "slot": 2,
    "section": "QA",
    "questionNumber": 22,
    "type": "MCQ",
    "subtopic": "Arithmetic",
    "setId": "S2_QA_SINGLE",
    "marks": {
      "correct": 3,
      "negative": -1
    },
    "passageTitle": null,
    "passage": null,
    "diagramUrl": null,
    "questionText": "A certain amount of money was divided among Pinu, Meena, Rinu and Seema. Pinu received 20% of the total\namount and Meena received 40% of the remaining amount. If Seema received 20% less than Pinu, the ratio of the\namounts received by Pinu and Rinu is",
    "options": [
      "8 : 5",
      "5 : 8",
      "2 : 1",
      "1 : 2"
    ],
    "correctAnswer": 1,
    "explanation": "Official CAT answer: B."
  }
];


// Attach resolved diagram URLs
[...officialSlot1Questions, ...officialSlot2Questions, ...officialCatQuestionsBank].forEach(q => {
  if (q.diagramUrl && DIAGRAM_MAP[q.diagramUrl]) {
    q.diagramUrl = DIAGRAM_MAP[q.diagramUrl];
  }
});
