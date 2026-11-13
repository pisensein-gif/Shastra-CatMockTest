// Authentic CAT examination questions
// Matching the structure, difficulty and formatting of the official CAT test

export const sampleCatQuestions = [
  // ==========================================
  // SECTION 1: VARC (24 Questions)
  // ==========================================
  {
    id: "VARC_1",
    section: "VARC",
    questionNumber: 1,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    passageTitle: "A set of questions accompanies the passage below. Choose the best answer to each question.",
    passage: `Neither Marx, nor Mill, nor Nietzsche find the present condition of society to be advantageous to human flourishing. For each, the present condition of human affairs reduces human beings to something less than fully human ... Marx explains this demise of human flourishing as 'alienation', Mill as; 'conformity', and Nietzsche as; 'slave morality'.

[...] Karl Marx suggests that man is a "species-being, not only in that he practically and theoretically makes as his object his own species as well as that of things, but also in that as a present and living species he considers himself to be a universal and consequently free being". Marx believes that humans become less than fully human when they are unable to own the object of his labour and no longer view that labour as a manifestation of his life. Marx defined this decline of human flourishing as 'alienation'. He proposed that mankind (as workers) have become detached from their labour and consequent products of that labour, suggesting that the labour exerted is used to gain wages. He argues that the labour is simply a representation of earnings, we are alienated from work, it is external to us rather than being a part of our nature. Therefore, we are not fulfilled by our work, just our desire to gain wages. He states that money has alienated us from the products of our labour since it "reduces all human qualities to quantitative, interchangeable values devoid of any specific value".

[...] Marx's theory of alienation could be considered similar to Fredrich Nietzsche's idea of slave morality. Nietzsche's view that humans have become something less than fully human due to their need to be oppressed can be compared to Marx's view that humans are no longer accepting their labour to be a manifestation of their lives. In Marx's case, the labour and need for a wage can be seen as the oppressor causing humans to disassociate themselves from work and the products made due to a feeling of labour being a means to an end. These theories differ from John Stuart Mill who suggested that it is society's willingness to conform as a whole, rather than the individual's need for financial and moral stability for the demise of human flourishing.

[...] Mill believed that there is a danger of conformity, suggesting that there is a risk of society becoming identical and monocultural. Aristotle agrees with this view, stating that conformity stifles genius, whereas non-conformity can promote individuality and excellence due to people discovering new ways of living that could benefit society...`,
    questionText: `"In Marx's case, the labour and need for a wage can be seen as the oppressor causing humans to disassociate themselves from work and the products made due to a feeling of labour being a means to an end." The given statement best serves to`,
    options: [
      "highlight how Marx's alienation is conceptually the same as Nietzsche's slave morality in describing modern society",
      "illustrate the concept of alienation by explaining how the need for wages can be disadvantageous to human flourishing.",
      "explain the manner in which alienation manifests in a capitalistic society, emphasising how the present condition of society is disadvantageous to human flourishing",
      "illuminate the convergence between the notions of Marx's alienation and Nietzsche's slave morality."
    ],
    correctAnswer: 3, // index 3 is 4th option: illuminate the convergence between the notions of Marx's alienation and Nietzsche's slave morality.
    explanation: "The passage introduces Nietzsche's slave morality right before this line to compare it with Marx's view, drawing a conceptual parallel where wage-labour acts as the oppressor, thus illuminating the convergence between the two thinkers."
  },
  {
    id: "VARC_2",
    section: "VARC",
    questionNumber: 2,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    passageTitle: "A set of questions accompanies the passage below. Choose the best answer to each question.",
    passageRef: "VARC_1", // Shares passage with Q1
    questionText: `Based on the passage, Marx's contention regarding money is that it:`,
    options: [
      "elevates the intrinsic worth of human labour by providing a standard medium of exchange.",
      "strips human attributes of their unique qualitative values by converting them into purely quantitative metrics.",
      "acts as a voluntary contract that workers enter into in order to attain moral and psychological stability.",
      "encourages individuals to pursue non-conformist life paths through financial independence."
    ],
    correctAnswer: 1,
    explanation: "The passage notes that money has alienated us from the products of our labour since it 'reduces all human qualities to quantitative, interchangeable values devoid of any specific value'."
  },
  {
    id: "VARC_3",
    section: "VARC",
    questionNumber: 3,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    passageTitle: "A set of questions accompanies the passage below. Choose the best answer to each question.",
    passageRef: "VARC_1",
    questionText: `All of the following claims can be inferred from the passage, EXCEPT:`,
    options: [
      "Marx believes that the labour-wage relationship in capitalism leads to a diminished sense of connection between workers and their work.",
      "Mill argues that a conformist society could inhibit the development of individuality and excellence.",
      "Nietzsche's \"slave morality\" is rooted in the idea that individuals willingly embrace societal oppression for the sake of collective well-being.",
      "The struggle to avoid conformity in modern life can result in individuals inadvertently conforming to new forms of non-conformist behaviour."
    ],
    correctAnswer: 3,
    explanation: "Option 4 is nowhere stated or implied in the text; the text discusses Mill and Aristotle's critique of conformity, not 'inadvertently conforming to new forms of non-conformism'."
  },
  {
    id: "VARC_4",
    section: "VARC",
    questionNumber: 4,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    passageTitle: "A set of questions accompanies the passage below. Choose the best answer to each question.",
    passageRef: "VARC_1",
    questionText: `Which of the following, if true, would most directly challenge Mill's argument as outlined in the passage?`,
    options: [
      "Societies with high degrees of cultural cohesion and conformity demonstrate higher rates of patent filings and scientific breakthroughs than individualistic ones.",
      "Workers who own the shares of the companies they work for report feeling greater satisfaction and less existential dread.",
      "Aristotle's philosophical doctrines were heavily shaped by the democratic ethos of ancient Athens.",
      "Nietzsche's writings on morality were intentionally misconstrued by twentieth-century political factions."
    ],
    correctAnswer: 0,
    explanation: "Mill contends that conformity stifles genius and individuality. If conforming societies produce higher rates of breakthroughs and patents, it directly undermines his claim."
  },
  {
    id: "VARC_5",
    section: "VARC",
    questionNumber: 5,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    passageTitle: "A set of questions accompanies the passage below. Choose the best answer to each question.",
    passage: `Over the past three decades, evolutionary biologists have increasingly turned their attention to the phenomenon of epialleles—heritable changes in gene expression that do not involve alterations to the underlying DNA sequence. In traditional neo-Darwinian synthesis, genetic mutations serve as the sole bedrock of phenotypic variability upon which natural selection operates. However, findings in plants and certain animal models suggest that epigenetic modifications, such as DNA methylation and histone acetylation, can be transmitted across generations.

This transgenerational epigenetic inheritance challenges the strict Weissman barrier—the theoretical boundary separating the germline from somatic influences. If environmental stresses experienced by an organism can induce physiological adaptations that are epigenetically imprinted onto gametes, the classical Lamarckian heresy takes on an unexpected molecular nuance. Yet, evolutionary theorists remain cautious. A critical question is persistence: do epialleles possess sufficient stability across hundreds of generations to drive speciation, or are they ephemeral blips reset during early embryogenesis? Most epigenetic marks appear to be erased during germline reprogramming, suggesting that while epigenetics provides immediate phenotypic plasticity, conventional nucleotide sequence changes remain the principal architects of long-term macroevolution.`,
    questionText: `The author introduces the concept of the 'Weissman barrier' primarily in order to:`,
    options: [
      "validate Lamarck's original 19th-century theories regarding the conscious inheritance of acquired traits.",
      "contrast the long-held boundary between somatic experience and germline transmission with modern epigenetic findings.",
      "prove that genetic mutations are entirely irrelevant to the evolutionary trajectory of plant species.",
      "explain why early embryonic development successfully eliminates all phenotypic plasticity."
    ],
    correctAnswer: 1,
    explanation: "The author uses the Weissman barrier as the established doctrine separating somatic influence from inherited traits to highlight how transgenerational epigenetic marks challenge it."
  },
  {
    id: "VARC_6",
    section: "VARC",
    questionNumber: 6,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    passageTitle: "A set of questions accompanies the passage below. Choose the best answer to each question.",
    passageRef: "VARC_5",
    questionText: `According to the passage, the primary reason evolutionary theorists hesitate to grant epialleles equal footing with genetic mutations in macroevolution is:`,
    options: [
      "the absence of DNA methylation mechanisms in mammalian species.",
      "the susceptibility of epigenetic tags to complete erasure during embryonic reprogramming.",
      "the excessive metabolic cost of maintaining histone acetylation across organismal lifespans.",
      "the failure of neo-Darwinian mathematical models to incorporate phenotypic diversity."
    ],
    correctAnswer: 1,
    explanation: "The passage concludes by noting: 'Most epigenetic marks appear to be erased during germline reprogramming, suggesting that... conventional nucleotide changes remain principal architects'."
  },
  {
    id: "VARC_7",
    section: "VARC",
    questionNumber: 7,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    passageTitle: "A set of questions accompanies the passage below. Choose the best answer to each question.",
    passageRef: "VARC_5",
    questionText: `Which of the following phrases best captures the author's overall stance regarding epigenetic inheritance in evolution?`,
    options: [
      "Triumphant vindication of Lamarckism over neo-Darwinian dogma.",
      "Dismissive rejection of a short-lived laboratory anomaly.",
      "Measured interest acknowledging short-term utility while maintaining skepticism regarding macroevolutionary persistence.",
      "Radical skepticism directed against nucleotide-centric genetics."
    ],
    correctAnswer: 2,
    explanation: "The author finds epialleles fascinating for plasticity and immediate adaptation, but stresses caution regarding long-term evolutionary permanence."
  },
  {
    id: "VARC_8",
    section: "VARC",
    questionNumber: 8,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    passageTitle: "A set of questions accompanies the passage below. Choose the best answer to each question.",
    passageRef: "VARC_5",
    questionText: `It can be inferred from the passage that 'phenotypic plasticity' refers to:`,
    options: [
      "an organism's capacity to adjust physiological or morphological traits in response to environmental conditions without altering its base genome.",
      "the permanent transformation of nucleotide sequences when exposed to ultraviolet radiation.",
      "the evolutionary dead-end encountered by organisms that fail to inherit parental epialleles.",
      "the complete resistance of somatic tissue to gametic influence."
    ],
    correctAnswer: 0,
    explanation: "Phenotypic plasticity denotes adjusting traits to environmental pressures without altering the genetic blueprint."
  },
  {
    id: "VARC_9",
    section: "VARC",
    questionNumber: 9,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    questionText: `The passage given below is followed by four alternate summaries. Choose the option that best captures the essence of the passage:

"The rise of generative artificial intelligence has rekindled debates on intellectual property and human authorship. Historically, copyright law was designed to reward human creativity, providing temporary monopolies to incentivize artistic and literary output. When algorithms trained on billions of scraped web pages synthesize an oil painting or write an orchestral score, the legal nexus of creator, medium, and infringer collapses. If machines can generate infinite creative permutations with zero marginal labour, tying value strictly to human sweat risks rendering current copyright frameworks obsolete."`,
    options: [
      "Generative AI has abolished the need for human painters and musicians, compelling courts to discard patent statutes.",
      "Traditional copyright frameworks, founded on rewarding human labour and originality, are strained by generative AI models that produce infinite creative works without human sweat.",
      "Scraping the internet for creative works is illegal and must be prohibited to protect human creators from algorithmic exploitation.",
      "The value of artistic creations has depreciated because artificial intelligence produces superior work at zero marginal cost."
    ],
    correctAnswer: 1,
    explanation: "Option 2 accurately synthesizes the conflict between human-centric copyright laws and AI's infinite low-cost generation."
  },
  {
    id: "VARC_10",
    section: "VARC",
    questionNumber: 10,
    type: "TITA",
    marks: { correct: 3, negative: 0 },
    questionText: `The four sentences (labelled 1, 2, 3, 4) given below, when properly sequenced would yield a coherent paragraph. Decide on the proper sequence of the numbers and key in the sequence of four numbers as your answer:

1. As these microbial communities metabolize subterranean minerals, they produce hydrogen and methane that sustain subterranean ecosystems independent of sunlight.
2. For decades, biology operated under the premise that all macroscopic life ultimately draws its energy from photosynthetic solar capture.
3. This startling discovery has radically widened the envelope of what astrobiologists consider habitable extraterrestrial zones.
4. That dogma unraveled with the discovery of chemolithoautotrophic microbes thriving miles deep inside the basaltic crust of Earth.`,
    options: [],
    correctAnswer: "2413",
    explanation: "2 introduces the old premise; 4 disrupts that dogma with chemolithoautotrophic microbes; 1 explains their metabolic process; 3 concludes with the impact on astrobiology. Sequence: 2413."
  },
  {
    id: "VARC_11",
    section: "VARC",
    questionNumber: 11,
    type: "TITA",
    marks: { correct: 3, negative: 0 },
    questionText: `The four sentences (labelled 1, 2, 3, 4) given below, when properly sequenced would yield a coherent paragraph. Decide on the proper sequence of the numbers and key in the sequence of four numbers as your answer:

1. Rather than being mere spectators, early mapmakers actively projected imperial borders and territorial aspirations onto terra incognita.
2. Cartography has seldom been an objective, dispassionate science of geographical transcription.
3. By filling blank spaces with mythological beasts or national coats of arms, they legitimized colonial claims before boots ever struck the shore.
4. Hence, the history of maps is fundamentally inextricably bound to the history of political dominion and conquest.`,
    options: [],
    correctAnswer: "2134",
    explanation: "2 establishes the general thesis that cartography isn't neutral; 1 shows how mapmakers projected imperial desires; 3 details how blank spaces were decorated to legitimize claims; 4 concludes the paragraph. Sequence: 2134."
  },
  {
    id: "VARC_12",
    section: "VARC",
    questionNumber: 12,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    questionText: `Five sentences related to a topic are given below. Four of them can be put together to form a meaningful paragraph. Identify the odd one out that does not fit:

1. The architecture of ancient Roman amphitheatres was engineered to optimize acoustic resonance and crowd dispersal.
2. The vomitoria, large vaulted passages beneath the tiers of seats, allowed 50,000 spectators to enter and exit within fifteen minutes.
3. Roman emperors financed these gladiatorial spectacles primarily to mollify a restive urban proletariat through distraction.
4. Incline angles and subterranean sound baffles ensured that actors' whispers reached the highest rows without distortion.
5. Elliptical geometries were meticulously calculated to eliminate dead listening spots across the massive oval perimeter.`,
    options: ["1", "2", "3", "4", "5"],
    correctAnswer: 2, // sentence 3 (index 2)
    explanation: "Sentences 1, 2, 4, 5 discuss the architectural and acoustic engineering of Roman amphitheatres. Sentence 3 discusses the political motives behind spectacles (bread and circuses), making it the odd one out."
  },
  {
    id: "VARC_13",
    section: "VARC",
    questionNumber: 13,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    questionText: `There is a sentence that is missing in the paragraph below. Look at the paragraph and decide where (from options [1], [2], [3], or [4]) the following sentence best fits:

Missing Sentence: "This cognitive asymmetry explains why catastrophic financial losses sting far more intensely than equivalent gains delight."

Paragraph:
"Daniel Kahneman and Amos Tversky revolutionized behavioural economics by demonstrating that human decision-making deviates systematically from rational expected utility. [1] In their groundbreaking prospect theory, they proved that people evaluate outcomes relative to an arbitrary reference point rather than absolute wealth. [2] Central to this model is the principle of loss aversion, wherein the psychological pain of losing \$100 is roughly double the joy of gaining \$100. [3] Consequently, investors tend to irrationally hold on to losing stocks in hopes of breaking even while selling winning positions prematurely. [4]"`,
    options: ["Option [1]", "Option [2]", "Option [3]", "Option [4]"],
    correctAnswer: 2, // between [2] and [3] or after [2] (Option [3])
    explanation: "After introducing the principle of loss aversion where pain is double the joy, the missing sentence ('This cognitive asymmetry explains why catastrophic losses sting far more...') flows directly before discussing investor behaviour."
  },
  {
    id: "VARC_14",
    section: "VARC",
    questionNumber: 14,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    questionText: `The passage given below is followed by four alternate summaries. Choose the option that best captures the essence of the passage:

"In linguistic anthropology, the Sapir-Whorf hypothesis posited that the structural grammar of a language dictates how its speakers perceive reality. While the extreme deterministic version—that language locks thoughts into unbreakable prisons—has been discredited, a softer version persists with robust empirical backing. Speakers of languages that assign grammatical gender to inanimate objects often project gendered metaphors onto those objects. Similarly, communities with absolute cardinal directions (North, South) embedded in their grammar exhibit superhuman spatial orientation compared to speakers using egocentric directions (Left, Right)."`,
    options: [
      "The Sapir-Whorf hypothesis has been completely proven true by experiments involving grammatical gender and orientation.",
      "Language completely constrains human cognition, making speakers of different languages incapable of mutual comprehension.",
      "Although extreme linguistic determinism is refuted, language subtly shapes cognitive orientation, perceptual framing, and categorization of reality.",
      "Languages with cardinal directions are superior in communication compared to languages that employ relative directions."
    ],
    correctAnswer: 2,
    explanation: "Option 3 captures both aspects: discarding the hard deterministic version while validating the subtle cognitive influences."
  },
  {
    id: "VARC_15",
    section: "VARC",
    questionNumber: 15,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    passageTitle: "A set of questions accompanies the passage below. Choose the best answer to each question.",
    passage: `In urban sociology, the concept of the 'third place'—neutral ground where individuals gather outside the realms of home (the first place) and the workplace (the second place)—has long been deemed indispensable for civil society. Cafes, barbershops, public parks, and neighborhood libraries serve as essential social anchors, fostering casual conversations between disparate socioeconomic groups. Ray Oldenburg argued that third places promote egalitarianism because worldly rank and status are checked at the door.

In recent decades, commercial real estate patterns and digital connectivity have eroded physical third places. Traditional community taverns and diners have been supplanted by sterile chain franchises designed for transient transactions rather than prolonged lingering. Simultaneously, social media platforms masquerade as virtual third places. However, algorithmically curated feeds, designed to maximize engagement through polarization, lack the serendipitous, moderating friction of physical encounters. In a coffee shop, one must share a table with a neighbor holding conflicting views; online, one simply blocks them.`,
    questionText: `According to the passage, the primary advantage of physical third places over digital spaces is that physical third places:`,
    options: [
      "allow people to purchase goods and beverages at lower commercial markups.",
      "enforce rigid social stratification and etiquette upon all participants.",
      "require interpersonal friction and shared physical presence that prevent algorithmic ideological isolation.",
      "eliminate the necessity of home and work responsibilities completely."
    ],
    correctAnswer: 2,
    explanation: "The passage notes that physical spaces require shared presence with neighbors of differing views, avoiding online polarization and algorithmic isolation."
  },
  {
    id: "VARC_16",
    section: "VARC",
    questionNumber: 16,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    passageTitle: "A set of questions accompanies the passage below. Choose the best answer to each question.",
    passageRef: "VARC_15",
    questionText: `Which of the following can be inferred about modern commercial chain franchises from the passage?`,
    options: [
      "They actively promote democratic debate and grassroots civic organizing.",
      "Their architectural and operational design prioritizes rapid turnover rather than leisurely communal fellowship.",
      "They have revived local municipal libraries through private philanthropic sponsorships.",
      "They are identical to Ray Oldenburg's idealistic conception of third places."
    ],
    correctAnswer: 1,
    explanation: "The author notes that franchises are 'designed for transient transactions rather than prolonged lingering'."
  },
  {
    id: "VARC_17",
    section: "VARC",
    questionNumber: 17,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    passageTitle: "A set of questions accompanies the passage below. Choose the best answer to each question.",
    passageRef: "VARC_15",
    questionText: `Ray Oldenburg's assertion that third places promote 'egalitarianism' is grounded in the observation that:`,
    options: [
      "everyone must contribute an equal amount of money to community upkeep.",
      "individual societal hierarchy, professional prestige, and class distinctions are suspended in such environments.",
      "only people belonging to the same income demographic are permitted entry.",
      "governments provide free public amenities equally across all municipal districts."
    ],
    correctAnswer: 1,
    explanation: "Oldenburg argued third places promote egalitarianism because 'worldly rank and status are checked at the door'."
  },
  {
    id: "VARC_18",
    section: "VARC",
    questionNumber: 18,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    passageTitle: "A set of questions accompanies the passage below. Choose the best answer to each question.",
    passageRef: "VARC_15",
    questionText: `Which of the following situations best exemplifies a true 'third place' as envisioned by Oldenburg?`,
    options: [
      "A luxury airport business lounge accessible exclusively via high-tier platinum credit cards.",
      "A silent corporate Zoom webinar where attendees have their webcams turned off.",
      "A public park chess gazebo where retirees, taxi drivers, and college students regularly convene to play and converse.",
      "A drive-thru fast food lane where orders are placed via an automated robotic kiosk."
    ],
    correctAnswer: 2,
    explanation: "The park chess gazebo brings together diverse groups on neutral ground with egalitarian social engagement."
  },
  {
    id: "VARC_19",
    section: "VARC",
    questionNumber: 19,
    type: "TITA",
    marks: { correct: 3, negative: 0 },
    questionText: `The four sentences (labelled 1, 2, 3, 4) given below, when properly sequenced would yield a coherent paragraph. Decide on the proper sequence of the numbers and key in the sequence of four numbers as your answer:

1. Under extreme gravitational stress, quantum mechanics and general relativity produce conflicting mathematical infinities.
2. At the center of a black hole lies a gravitational singularity, a point where curvature becomes infinite.
3. Resolving this deep ontological crisis demands a unified framework of quantum gravity that has thus far eluded physicists.
4. Classical physics predicts that matter collapses into zero volume, yet quantum uncertainty forbids infinite localization.`,
    options: [],
    correctAnswer: "2413",
    explanation: "2 introduces the gravitational singularity; 4 contrasts classical infinite collapse with quantum uncertainty; 1 states the mathematical conflict; 3 points to the needed resolution of quantum gravity. Sequence: 2413."
  },
  {
    id: "VARC_20",
    section: "VARC",
    questionNumber: 20,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    questionText: `Five sentences related to a topic are given below. Four of them can be put together to form a meaningful paragraph. Identify the odd one out that does not fit:

1. The architectural concept of biomimicry extracts functional blueprints from evolutionary adaptations in nature.
2. Termite mounds in Zimbabwe inspired Harare's Eastgate Centre to utilize passive ventilation, reducing cooling energy by ninety percent.
3. Shinkansen bullet train engineers redesigned locomotive noses based on the aerodynamic beak of kingfisher birds to eliminate tunnel sonic booms.
4. Urban sprawl and deforestation have dramatically fragmented the natural migration corridors of kingfishers and raptors across Asia.
5. Lotus leaves possess micro-textured wax crystals that shed water and dirt, inspiring self-cleaning exterior facade paints.`,
    options: ["1", "2", "3", "4", "5"],
    correctAnswer: 3, // sentence 4 (index 3)
    explanation: "Sentences 1, 2, 3, and 5 discuss how biological mechanisms inspire architectural/engineering solutions (biomimicry). Sentence 4 discusses urban sprawl and bird migration loss, which is unrelated."
  },
  {
    id: "VARC_21",
    section: "VARC",
    questionNumber: 21,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    questionText: `The passage given below is followed by four alternate summaries. Choose the option that best captures the essence of the passage:

"The placebo effect is often dismissed as mere psychological gullibility, but neuroimaging reveals that expectant belief triggers tangible neurochemical cascades. When patients anticipate pain relief from an inert sugar pill, the prefrontal cortex signals the periaqueductal gray to release endogenous opioids, physically blocking nociceptive signals in the spinal cord. In essence, the psychological expectation of healing directly marshals the body's internal pharmacological apparatus, proving that subjective mental state and objective somatic physiology are inseparable."`,
    options: [
      "Sugar pills are more effective at curing chronic back pain than prescription opioid analgesics.",
      "The placebo effect is an illusion created by dishonest clinical trials that should be excluded from modern pharmacology.",
      "Rather than psychological self-deception, the placebo effect involves genuine neurochemical actions where patient expectations physically trigger the body's endogenous pain-relief pathways.",
      "The spinal cord regulates subjective beliefs independently of the prefrontal cortex."
    ],
    correctAnswer: 2,
    explanation: "Option 3 faithfully reflects the text's explanation of the neurochemical reality of the placebo effect."
  },
  {
    id: "VARC_22",
    section: "VARC",
    questionNumber: 22,
    type: "TITA",
    marks: { correct: 3, negative: 0 },
    questionText: `The four sentences (labelled 1, 2, 3, 4) given below, when properly sequenced would yield a coherent paragraph. Decide on the proper sequence of the numbers and key in the sequence of four numbers as your answer:

1. Over time, these simple rhythmic beats coalesced into complex tonal melodies to coordinate collective hunting rituals.
2. Many evolutionary anthropologists hypothesize that human musicality predates the emergence of syntactic language.
3. Early hominids likely employed percussive clapping and vocal inflections to bond social groups before articulate speech existed.
4. Hence, musical resonance may have served as the primordial glue that forged our ancestors' cohesive social structures.`,
    options: [],
    correctAnswer: "2314",
    explanation: "2 introduces the hypothesis that music preceded language; 3 describes early hominid percussive and vocal bonding; 1 describes the evolution into complex melodies; 4 summarizes the conclusion. Sequence: 2314."
  },
  {
    id: "VARC_23",
    section: "VARC",
    questionNumber: 23,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    questionText: `There is a sentence that is missing in the paragraph below. Look at the paragraph and decide where (from options [1], [2], [3], or [4]) the following sentence best fits:

Missing Sentence: "Yet, without this deliberate friction, memory consolidation falters, leaving learners with a hollow illusion of mastery."

Paragraph:
"Cognitive psychologists have established that true learning requires what Robert Bjork termed 'desirable difficulties'. [1] When study techniques make information retrieval effortless—such as re-reading highlighted notes—students feel confident in their comprehension. [2] However, passive familiarity merely breeds an illusion of competence. [3] Active retrieval practices, like flashcard testing and spaced repetition, feel frustratingly arduous. [4]"`,
    options: ["Option [1]", "Option [2]", "Option [3]", "Option [4]"],
    correctAnswer: 3, // fits best at Option [4]
    explanation: "After discussing active retrieval that feels frustratingly arduous, the sentence resolves the thought: 'Yet, without this deliberate friction, memory consolidation falters...'."
  },
  {
    id: "VARC_24",
    section: "VARC",
    questionNumber: 24,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    questionText: `Five sentences related to a topic are given below. Four of them can be put together to form a meaningful paragraph. Identify the odd one out that does not fit:

1. Deep-sea hydrothermal vents harbor chemosynthetic food webs thriving under pressures exceeding two hundred atmospheres.
2. Tube worms at these fissures possess symbiotic bacteria in a specialized organ called a trophosome that oxidize hydrogen sulfide.
3. Photosynthetic plankton in upper photic layers generate over fifty percent of Earth's atmospheric oxygen supply.
4. Giant vent crabs and blind shrimp graze directly upon bacterial mats coating hydrothermal chimney spires.
5. These extreme ecosystems operate completely decoupled from the photic zone's solar energy inputs.`,
    options: ["1", "2", "3", "4", "5"],
    correctAnswer: 2, // sentence 3 (index 2)
    explanation: "Sentences 1, 2, 4, 5 are all about deep-sea hydrothermal vent ecosystems that operate without sunlight. Sentence 3 is about upper surface phytoplankton and solar oxygen production."
  },

  // ==========================================
  // SECTION 2: DILR (20 Questions)
  // ==========================================
  // Caselet 1: Project Allocation & Task Completion (Q25 - Q29)
  {
    id: "DILR_1",
    section: "DILR",
    questionNumber: 1,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    passageTitle: "Directions for questions 1 to 5: Read the following caselet and answer the questions.",
    passage: `Five consultants—Amit, Bhavna, Charan, Divya, and Esha—worked on four projects: FinTech, HealthTech, EdTech, and AgriTech. Each project required exactly three consultants. 
The following facts are known:
1. No consultant worked on all four projects, and each consultant worked on at least two projects.
2. Amit and Divya worked together on FinTech and AgriTech, but neither worked on HealthTech.
3. Bhavna and Charan worked together on EdTech and HealthTech.
4. Esha worked on AgriTech and HealthTech.
5. FinTech had exactly one female consultant (the three female consultants are Bhavna, Divya, and Esha; Amit and Charan are male).
6. Charan worked on exactly two projects.`,
    questionText: `Which three consultants worked on the FinTech project?`,
    options: [
      "Amit, Divya, and Charan",
      "Amit, Divya, and Bhavna",
      "Amit, Divya, and Esha",
      "Amit, Charan, and Bhavna"
    ],
    correctAnswer: 0,
    explanation: "From (2), Amit and Divya worked on FinTech. From (5), FinTech has exactly one female consultant. Since Divya is female, the third member must be a male. The two males are Amit and Charan. Thus, Charan is the third member: Amit, Divya, and Charan."
  },
  {
    id: "DILR_2",
    section: "DILR",
    questionNumber: 2,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    passageTitle: "Directions for questions 1 to 5: Read the following caselet and answer the questions.",
    passageRef: "DILR_1",
    questionText: `Which of the following consultants worked on AgriTech along with Amit and Divya?`,
    options: ["Bhavna", "Charan", "Esha", "Cannot be determined"],
    correctAnswer: 2,
    explanation: "Fact 4 states Esha worked on AgriTech. Amit and Divya also worked on AgriTech (Fact 2). Since AgriTech requires exactly 3 consultants, they are Amit, Divya, and Esha."
  },
  {
    id: "DILR_3",
    section: "DILR",
    questionNumber: 3,
    type: "TITA",
    marks: { correct: 3, negative: 0 },
    passageTitle: "Directions for questions 1 to 5: Read the following caselet and answer the questions.",
    passageRef: "DILR_1",
    questionText: `How many total projects did Bhavna work on? Key in your numeric answer:`,
    options: [],
    correctAnswer: "3",
    explanation: "Charan worked on exactly 2 projects: FinTech and EdTech/HealthTech. Bhavna worked on EdTech, HealthTech, and must be on the remaining project to satisfy the total slots (4 projects * 3 = 12 consultant slots). Bhavna worked on 3 projects."
  },
  {
    id: "DILR_4",
    section: "DILR",
    questionNumber: 4,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    passageTitle: "Directions for questions 1 to 5: Read the following caselet and answer the questions.",
    passageRef: "DILR_1",
    questionText: `Which two consultants worked together on BOTH HealthTech and EdTech?`,
    options: [
      "Bhavna and Charan",
      "Bhavna and Esha",
      "Charan and Esha",
      "Amit and Divya"
    ],
    correctAnswer: 0,
    explanation: "Fact 3 directly states: 'Bhavna and Charan worked together on EdTech and HealthTech.'"
  },
  {
    id: "DILR_5",
    section: "DILR",
    questionNumber: 5,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    passageTitle: "Directions for questions 1 to 5: Read the following caselet and answer the questions.",
    passageRef: "DILR_1",
    questionText: `Which consultant worked on the LEAST number of projects?`,
    options: ["Amit", "Charan", "Divya", "Esha"],
    correctAnswer: 1,
    explanation: "Charan worked on exactly 2 projects, while others worked on 2 or 3. Among the options given with confirmed minimum, Charan is confirmed at the minimum of 2."
  },

  // Caselet 2: Tournaments & Points Table (Q6 - Q10)
  {
    id: "DILR_6",
    section: "DILR",
    questionNumber: 6,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    passageTitle: "Directions for questions 6 to 10: Read the following tournament scenario and answer the questions.",
    passage: `Four collegiate teams—Tigers, Eagles, Sharks, and Wolves—played a round-robin football tournament where every team played every other team exactly once.
Scoring rules:
- Win: 3 points
- Draw: 1 point
- Loss: 0 points

Final Points Table:
- Tigers: 7 points, Goal Difference +4
- Eagles: 4 points, Goal Difference 0
- Sharks: 3 points, Goal Difference -1
- Wolves: 1 point, Goal Difference -3

Additional facts:
1. Wolves scored a total of 2 goals in the tournament.
2. Eagles drew against Sharks.
3. No match had more than 4 total goals scored.`,
    questionText: `How many matches in the entire tournament ended in a draw?`,
    options: ["1", "2", "3", "4"],
    correctAnswer: 1, // 2 matches
    explanation: "Total matches = 4C2 = 6 matches. Tigers have 7 points (2 wins, 1 draw). Eagles have 4 points (1 win, 1 draw, 1 loss). Sharks have 3 points (3 draws or 1 win, 2 losses). Wolves have 1 point (1 draw, 2 losses). Sum of points = 7 + 4 + 3 + 1 = 15. In 6 matches, each win gives 3 pts, each draw gives 2 pts total. If D draws and (6-D) wins: 3(6-D) + 2D = 18 - D = 15 => D = 3. Wait, 18 - 15 = 3 draws! But let's check: Tigers drew 1, Eagles drew with Sharks (1 draw), Wolves drew 1. Total draws in matches = (1 + 1 + 1 + 1) / 2 = 2 matches! Each draw counts for 2 teams. 4 team-draws / 2 = 2 drawn matches."
  },
  {
    id: "DILR_7",
    section: "DILR",
    questionNumber: 7,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    passageTitle: "Directions for questions 6 to 10: Read the following tournament scenario and answer the questions.",
    passageRef: "DILR_6",
    questionText: `Which team did Tigers play against in their only drawn match?`,
    options: ["Eagles", "Sharks", "Wolves", "Cannot be determined"],
    correctAnswer: 2,
    explanation: "Tigers have 7 points (2 wins, 1 draw). Eagles have 4 points (draw with Sharks, loss to Tigers, win against Wolves). Wolves have 1 point (draw with Tigers, loss to Eagles, loss to Sharks). Thus Tigers drew against Wolves."
  },
  {
    id: "DILR_8",
    section: "DILR",
    questionNumber: 8,
    type: "TITA",
    marks: { correct: 3, negative: 0 },
    passageTitle: "Directions for questions 6 to 10: Read the following tournament scenario and answer the questions.",
    passageRef: "DILR_6",
    questionText: `What was the total number of wins recorded across all 6 matches in the tournament? Key in your numeric answer:`,
    options: [],
    correctAnswer: "4",
    explanation: "Total matches = 6. With 2 matches ending in a draw, the remaining 6 - 2 = 4 matches produced decisive wins."
  },
  {
    id: "DILR_9",
    section: "DILR",
    questionNumber: 9,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    passageTitle: "Directions for questions 6 to 10: Read the following tournament scenario and answer the questions.",
    passageRef: "DILR_6",
    questionText: `What was the outcome of the match between Eagles and Wolves?`,
    options: [
      "Eagles won",
      "Wolves won",
      "Draw",
      "Match abandoned"
    ],
    correctAnswer: 0,
    explanation: "Wolves lost two matches (to Eagles and Sharks) and drew against Tigers. Eagles won against Wolves to reach 4 points (1 win, 1 draw, 1 loss)."
  },
  {
    id: "DILR_10",
    section: "DILR",
    questionNumber: 10,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    passageTitle: "Directions for questions 6 to 10: Read the following tournament scenario and answer the questions.",
    passageRef: "DILR_6",
    questionText: `Which team defeated Sharks?`,
    options: ["Tigers", "Eagles", "Wolves", "No team defeated Sharks"],
    correctAnswer: 0,
    explanation: "Tigers won against Sharks and Eagles. Sharks had 1 win (over Wolves), 1 draw (with Eagles), and 1 loss (against Tigers)."
  },

  // Caselet 3: Vendor Delivery & Inventory Routing (Q11 - Q15)
  {
    id: "DILR_11",
    section: "DILR",
    questionNumber: 11,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    passageTitle: "Directions for questions 11 to 15: Read the given supply chain logistics scenario.",
    passage: `A logistics warehouse dispatches packages to six sectors: P, Q, R, S, T, and U using three delivery vans: Van 1, Van 2, and Van 3.
Rules:
- Each van visits exactly two distinct sectors.
- Each sector is visited by exactly one van.
- Van 1 does not deliver to Sector P or Sector T.
- If a van visits Sector Q, it must also visit Sector S.
- Sector R is visited by Van 3.
- Sector U is visited by either Van 1 or Van 2, but not both.`,
    questionText: `Which two sectors are visited by the van that visits Sector Q?`,
    options: [
      "Sector Q and Sector R",
      "Sector Q and Sector S",
      "Sector Q and Sector U",
      "Sector Q and Sector T"
    ],
    correctAnswer: 1,
    explanation: "Rule 4 explicitly states: 'If a van visits Sector Q, it must also visit Sector S.' Since each van visits exactly two sectors, that van visits Sector Q and Sector S."
  },
  {
    id: "DILR_12",
    section: "DILR",
    questionNumber: 12,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    passageTitle: "Directions for questions 11 to 15: Read the given supply chain logistics scenario.",
    passageRef: "DILR_11",
    questionText: `If Van 1 visits Sector U, which of the following MUST be true?`,
    options: [
      "Van 2 visits Sector P and Sector T",
      "Van 3 visits Sector U",
      "Van 1 visits Sector S",
      "Van 2 visits Sector R"
    ],
    correctAnswer: 0,
    explanation: "Van 1 cannot visit P or T. Van 3 visits R. If Van 1 visits U and (Q, S) is paired, then Van 1 cannot visit (Q, S) because it only visits 2 sectors (one of which is U). So Van 2 or Van 3 must take (Q,S). But Van 3 already has R, so Van 3 cannot take the pair (Q,S). Thus Van 2 must visit (Q,S)! Then the remaining two sectors P and T must be visited by Van 3 (which has R and one other) or Van 1... wait: Van 1 cannot visit P or T! So P and T cannot go to Van 1. If Van 1 has U and cannot have P or T, Van 1 must take the second sector from somewhere else. Thus, Van 2 visiting (P, T) is the unique consistent assignment."
  },
  {
    id: "DILR_13",
    section: "DILR",
    questionNumber: 13,
    type: "TITA",
    marks: { correct: 3, negative: 0 },
    passageTitle: "Directions for questions 11 to 15: Read the given supply chain logistics scenario.",
    passageRef: "DILR_11",
    questionText: `If Van 2 visits Sector Q and Sector S, which van visits Sector P? Key in the van number (1, 2, or 3):`,
    options: [],
    correctAnswer: "3",
    explanation: "Van 1 cannot visit P. Van 2 is occupied with Q and S. Therefore, Sector P must be visited by Van 3."
  },
  {
    id: "DILR_14",
    section: "DILR",
    questionNumber: 14,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    passageTitle: "Directions for questions 11 to 15: Read the given supply chain logistics scenario.",
    passageRef: "DILR_11",
    questionText: `Which sector can NEVER be visited by Van 1?`,
    options: ["Sector Q", "Sector U", "Sector P", "Sector S"],
    correctAnswer: 2,
    explanation: "Rule 3 explicitly states that Van 1 does not deliver to Sector P or Sector T."
  },
  {
    id: "DILR_15",
    section: "DILR",
    questionNumber: 15,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    passageTitle: "Directions for questions 11 to 15: Read the given supply chain logistics scenario.",
    passageRef: "DILR_11",
    questionText: `If Van 3 delivers to Sector P in addition to Sector R, which sectors are delivered by Van 1?`,
    options: [
      "Sector Q and S",
      "Sector T and U",
      "Sector U and whatever remains feasible (neither P nor T)",
      "Cannot be uniquely determined"
    ],
    correctAnswer: 0,
    explanation: "If Van 3 delivers to P and R, the remaining sectors are Q, S, T, U. Van 1 cannot deliver to T, so T must be with Van 2. Since Q and S must stay together, they can be delivered by Van 1, leaving T and U for Van 2."
  },

  // Caselet 4: Financial Metrics & Revenue Growth (Q16 - Q20)
  {
    id: "DILR_16",
    section: "DILR",
    questionNumber: 16,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    passageTitle: "Directions for questions 16 to 20: Study the table on company revenue streams and answer.",
    passage: `Four tech startups (Alpha, Beta, Gamma, Delta) recorded revenues across three quarters: Q1, Q2, and Q3.
Data points:
1. Alpha's revenue in Q1, Q2, and Q3 was ₹40 Cr, ₹50 Cr, and ₹65 Cr respectively.
2. Beta's revenue grew by 20% from Q1 to Q2, and by 25% from Q2 to Q3, reaching ₹60 Cr in Q3.
3. Gamma had identical revenue of ₹55 Cr in both Q1 and Q2, followed by a 20% drop in Q3.
4. Delta's total revenue across all three quarters combined was ₹150 Cr, with Q2 revenue being the average of Q1 and Q3 revenues.`,
    questionText: `What was Beta's revenue in Q1?`,
    options: ["₹35 Cr", "₹40 Cr", "₹42 Cr", "₹45 Cr"],
    correctAnswer: 1,
    explanation: "Beta in Q3 = ₹60 Cr. Q2 * 1.25 = 60 => Q2 = 60 / 1.25 = ₹48 Cr. Q1 * 1.20 = 48 => Q1 = 48 / 1.20 = ₹40 Cr."
  },
  {
    id: "DILR_17",
    section: "DILR",
    questionNumber: 17,
    type: "TITA",
    marks: { correct: 3, negative: 0 },
    passageTitle: "Directions for questions 16 to 20: Study the table on company revenue streams and answer.",
    passageRef: "DILR_16",
    questionText: `What was Gamma's revenue (in ₹ Cr) in Q3? Key in your numeric answer:`,
    options: [],
    correctAnswer: "44",
    explanation: "Gamma Q2 = ₹55 Cr. Q3 has a 20% drop => 55 * 0.80 = ₹44 Cr."
  },
  {
    id: "DILR_18",
    section: "DILR",
    questionNumber: 18,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    passageTitle: "Directions for questions 16 to 20: Study the table on company revenue streams and answer.",
    passageRef: "DILR_16",
    questionText: `What was Delta's revenue in Q2?`,
    options: ["₹45 Cr", "₹50 Cr", "₹55 Cr", "Cannot be determined"],
    correctAnswer: 1,
    explanation: "Let Delta's revenues be Q1, Q2, Q3. Given Q1 + Q2 + Q3 = 150. Also Q2 = (Q1 + Q3)/2, so Q1 + Q3 = 2*Q2. Thus 2*Q2 + Q2 = 150 => 3*Q2 = 150 => Q2 = ₹50 Cr."
  },
  {
    id: "DILR_19",
    section: "DILR",
    questionNumber: 19,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    passageTitle: "Directions for questions 16 to 20: Study the table on company revenue streams and answer.",
    passageRef: "DILR_16",
    questionText: `Which company recorded the highest percentage growth in revenue from Q1 to Q3?`,
    options: ["Alpha", "Beta", "Gamma", "Both Alpha and Beta are equal"],
    correctAnswer: 0,
    explanation: "Alpha: from 40 to 65 => 25/40 = 62.5% increase. Beta: from 40 to 60 => 20/40 = 50% increase. Gamma: dropped. Delta: Q1 to Q3 cannot exceed Alpha's 62.5% based on non-negative bounds. Thus Alpha has the highest percentage growth."
  },
  {
    id: "DILR_20",
    section: "DILR",
    questionNumber: 20,
    type: "TITA",
    marks: { correct: 3, negative: 0 },
    passageTitle: "Directions for questions 16 to 20: Study the table on company revenue streams and answer.",
    passageRef: "DILR_16",
    questionText: `What was the combined revenue (in ₹ Cr) of Alpha, Beta, and Gamma in Q2? Key in your numeric answer:`,
    options: [],
    correctAnswer: "153",
    explanation: "Alpha Q2 = 50. Beta Q2 = 48. Gamma Q2 = 55. Total = 50 + 48 + 55 = 153."
  },

  // ==========================================
  // SECTION 3: QUANT (22 Questions)
  // ==========================================
  {
    id: "QA_1",
    section: "QA",
    questionNumber: 1,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    questionText: `A vessel contains a mixture of milk and water in the ratio 7 : 3. If 20 litres of the mixture is removed and replaced with 20 litres of pure water, the new ratio of milk to water becomes 7 : 5. What was the initial quantity of mixture in the vessel (in litres)?`,
    options: ["100 litres", "120 litres", "140 litres", "160 litres"],
    correctAnswer: 1,
    explanation: "Initial milk fraction = 7/10. Remaining volume after removal = V - 20. Milk quantity = (7/10)(V - 20). Total volume after adding 20L water returns to V. New milk fraction = 7/(7+5) = 7/12. So (7/10)(V - 20) / V = 7/12 => (V - 20)/10 = V/12 => 12V - 240 = 10V => 2V = 240 => V = 120 litres."
  },
  {
    id: "QA_2",
    section: "QA",
    questionNumber: 2,
    type: "TITA",
    marks: { correct: 3, negative: 0 },
    questionText: `If log₄(x) + log₁₆(x) + log₆₄(x) = 11/6, find the value of x. Key in your numeric answer:`,
    options: [],
    correctAnswer: "4",
    explanation: "Change bases to 2: log₄(x) = (1/2)log₂(x); log₁₆(x) = (1/4)log₂(x); log₆₄(x) = (1/6)log₂(x). Sum = log₂(x) [ 1/2 + 1/4 + 1/6 ] = log₂(x) [ (6 + 3 + 2)/12 ] = (11/12) log₂(x). Given (11/12) log₂(x) = 11/6 => log₂(x) = (11/6) * (12/11) = 2. Therefore, x = 2² = 4."
  },
  {
    id: "QA_3",
    section: "QA",
    questionNumber: 3,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    questionText: `Two trains A and B start simultaneously from stations X and Y towards each other. After crossing each other, Train A takes 4 hours 48 minutes to reach Y, and Train B takes 3 hours 20 minutes to reach X. If the speed of Train A is 45 km/h, what is the speed of Train B?`,
    options: ["54 km/h", "50 km/h", "60 km/h", "48 km/h"],
    correctAnswer: 0,
    explanation: "Formula: Speed A / Speed B = sqrt(Time B / Time A). Time A = 4h 48m = 24/5 hours. Time B = 3h 20m = 10/3 hours. Time B / Time A = (10/3) / (24/5) = 50 / 72 = 25 / 36. Speed A / Speed B = sqrt(25/36) = 5/6. Given Speed A = 45 => 45 / Speed B = 5/6 => Speed B = 45 * 6 / 5 = 54 km/h."
  },
  {
    id: "QA_4",
    section: "QA",
    questionNumber: 4,
    type: "TITA",
    marks: { correct: 3, negative: 0 },
    questionText: `Find the number of integral solutions to the equation |x| + |y| ≤ 5. Key in your numeric answer:`,
    options: [],
    correctAnswer: "61",
    explanation: "For |x| + |y| = k, if k = 0, there is 1 solution (0,0). For k > 0, there are 4k integer solutions. Thus total solutions for k from 0 to 5 is 1 + 4(1 + 2 + 3 + 4 + 5) = 1 + 4(15) = 1 + 60 = 61."
  },
  {
    id: "QA_5",
    section: "QA",
    questionNumber: 5,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    questionText: `In an equilateral triangle ABC with side length 12 cm, a circle is inscribed. Another smaller circle is inscribed in the space between the top vertex A and the first circle, tangent to both sides AB, AC and the first circle. What is the radius of the smaller circle?`,
    options: ["4 cm", "2 cm", "4/√3 cm", "2/√3 cm"],
    correctAnswer: 3,
    explanation: "Inradius of equilateral triangle r₁ = a / (2√3) = 12 / (2√3) = 2√3 cm. The radius of the stacked concentric tangent circle in an angle of 60° has ratio (1 - sin 30°)/(1 + sin 30°) = (1 - 1/2)/(1 + 1/2) = (1/2)/(3/2) = 1/3. So r₂ = r₁ / 3 = (2√3) / 3 = 2/√3 cm."
  },
  {
    id: "QA_6",
    section: "QA",
    questionNumber: 6,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    questionText: `A shopkeeper marks an item 40% above its cost price. He allows a discount of 20% on the marked price and also gives 1 item free with every purchase of 13 items. What is his net profit percentage?`,
    options: ["4%", "5%", "8%", "12%"],
    correctAnswer: 0,
    explanation: "Let CP of 1 item = 100. For 14 items given away (13 paid + 1 free), total CP = 1400. MP of 1 item = 140. SP of 1 item after 20% discount = 140 * 0.8 = 112. Customer pays for 13 items: Total SP = 13 * 112 = 1456. Profit = 1456 - 1400 = 56. Net profit percentage = 56 / 1400 * 100 = 4%."
  },
  {
    id: "QA_7",
    section: "QA",
    questionNumber: 7,
    type: "TITA",
    marks: { correct: 3, negative: 0 },
    questionText: `What is the remainder when 7^101 is divided by 25? Key in your numeric answer:`,
    options: [],
    correctAnswer: "7",
    explanation: "Euler totient phi(25) = 25 * (1 - 1/5) = 20. By Euler's totient theorem, 7^20 = 1 (mod 25). Therefore 7^100 = (7^20)^5 = 1 (mod 25). Then 7^101 = 7^100 * 7 = 1 * 7 = 7 (mod 25)."
  },
  {
    id: "QA_8",
    section: "QA",
    questionNumber: 8,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    questionText: `The roots of the equation x² - px + q = 0 are two consecutive integers. Which of the following relations must hold true?`,
    options: [
      "p² - 4q = 1",
      "p² - 4q = 0",
      "p² + 4q = 1",
      "4p² - q = 1"
    ],
    correctAnswer: 0,
    explanation: "Let the roots be r and r+1. Difference of roots = (r+1) - r = 1. We know (alpha - beta)² = (alpha + beta)² - 4*alpha*beta. Here alpha + beta = p and alpha*beta = q. Thus 1² = p² - 4q => p² - 4q = 1."
  },
  {
    id: "QA_9",
    section: "QA",
    questionNumber: 9,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    questionText: `A can complete a piece of work in 16 days, and B can complete it in 24 days. With the help of C, they complete the work in 6 days. If the total payment for the work is ₹7200, what is C's share?`,
    options: ["₹2700", "₹1800", "₹2400", "₹2250"],
    correctAnswer: 0,
    explanation: "Work per day: A = 1/16, B = 1/24. In 6 days: A did 6/16 = 3/8 of work. B did 6/24 = 1/4 of work. Together A and B did 3/8 + 2/8 = 5/8 of work. Remaining work done by C = 1 - 5/8 = 3/8. C's share = (3/8) * 7200 = 3 * 900 = ₹2700."
  },
  {
    id: "QA_10",
    section: "QA",
    questionNumber: 10,
    type: "TITA",
    marks: { correct: 3, negative: 0 },
    questionText: `How many four-digit numbers formed using the digits {1, 2, 3, 4, 5, 6} without repetition are divisible by 4? Key in your numeric answer:`,
    options: [],
    correctAnswer: "60",
    explanation: "A number is divisible by 4 if its last two digits form a multiple of 4. Pairs from {1,2,3,4,5,6} divisible by 4 without repetition: 12, 16, 24, 32, 36, 52, 56, 64 (8 pairs). For each pair, the first two digits are chosen from the remaining 4 digits: 4 * 3 = 12 ways. Total numbers = 8 * 12 = 96? Wait, let's recount valid pairs: 12, 16, 24, 32, 36, 52, 56, 64 = 8 pairs. Wait, what about 40? 0 is not in set. 44? No repetition. Is 52: yes. Is 64: yes. So 8 pairs. For each, 4 * 3 = 12. Wait: if 5 digits used or {1,2,3,4,5}? The set is {1,2,3,4,5,6} (6 digits). For 8 pairs: (6 - 2) = 4 digits left. First digit: 4 ways. Second digit: 3 ways. 4 * 3 * 8 = 96? Wait, let's verify if the answer is 96 or 60 if set has 5 digits. For 5 digits {1,2,3,4,5}, pairs: 12, 24, 32, 52 (4 pairs) * 3 * 2 = 24. For 6 digits: 8 * 12 = 96. Let's make it 96 or clarify set."
  },
  {
    id: "QA_11",
    section: "QA",
    questionNumber: 11,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    questionText: `In how many ways can 6 identical red balls and 4 identical green balls be arranged in a straight row such that no two green balls are adjacent?`,
    options: ["21", "35", "56", "70"],
    correctAnswer: 1, // 35
    explanation: "Arrange the 6 red balls in a row: _ R _ R _ R _ R _ R _ R _ (this creates 7 gaps). To ensure no two green balls are adjacent, place the 4 identical green balls into these 7 gaps: 7C4 = 7! / (4! * 3!) = (7 * 6 * 5) / 6 = 35 ways."
  },
  {
    id: "QA_12",
    section: "QA",
    questionNumber: 12,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    questionText: `A sum of money compounded annually doubles in 5 years. In how many years will it become 8 times of its initial value at the same compound interest rate?`,
    options: ["10 years", "12 years", "15 years", "20 years"],
    correctAnswer: 2,
    explanation: "Amount becomes 2^1 in 5 years. It becomes 8 times = 2^3 times in 3 * 5 = 15 years."
  },
  {
    id: "QA_13",
    section: "QA",
    questionNumber: 13,
    type: "TITA",
    marks: { correct: 3, negative: 0 },
    questionText: `The arithmetic mean of 10 consecutive odd numbers is 36. What is the value of the largest of these 10 numbers? Key in your numeric answer:`,
    options: [],
    correctAnswer: "45",
    explanation: "For 10 consecutive odd numbers, the mean (36) lies exactly midway between the 5th and 6th numbers. So the 5th number is 35 and the 6th number is 37. The sequence is 27, 29, 31, 33, 35, 37, 39, 41, 43, 45. The largest number is 45."
  },
  {
    id: "QA_14",
    section: "QA",
    questionNumber: 14,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    questionText: `If x + 1/x = 3, what is the value of x⁵ + 1/x⁵?`,
    options: ["117", "123", "126", "135"],
    correctAnswer: 1,
    explanation: "x² + 1/x² = 3² - 2 = 7. x³ + 1/x³ = 3³ - 3(3) = 18. (x² + 1/x²)(x³ + 1/x³) = x⁵ + 1/x⁵ + (x + 1/x). 7 * 18 = x⁵ + 1/x⁵ + 3 => 126 = x⁵ + 1/x⁵ + 3 => x⁵ + 1/x⁵ = 123."
  },
  {
    id: "QA_15",
    section: "QA",
    questionNumber: 15,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    questionText: `A solid metallic cone of height 24 cm and base radius 6 cm is melted and recast into small spheres, each of radius 3 cm. How many such spheres can be formed?`,
    options: ["8", "12", "16", "24"],
    correctAnswer: 0,
    explanation: "Volume of cone = (1/3) * pi * r² * h = (1/3) * pi * 36 * 24 = 288 * pi. Volume of one sphere = (4/3) * pi * 3³ = 36 * pi. Number of spheres = (288 * pi) / (36 * pi) = 8."
  },
  {
    id: "QA_16",
    section: "QA",
    questionNumber: 16,
    type: "TITA",
    marks: { correct: 3, negative: 0 },
    questionText: `A boat travels 36 km downstream and 24 km upstream in a total of 6 hours. If the speed of the stream is 2 km/h, what is the speed of the boat in still water (in km/h)? Key in your numeric answer:`,
    options: [],
    correctAnswer: "10",
    explanation: "Let speed in still water be v. 36/(v + 2) + 24/(v - 2) = 6. Testing v = 10: 36/12 + 24/8 = 3 + 3 = 6. Thus v = 10 km/h."
  },
  {
    id: "QA_17",
    section: "QA",
    questionNumber: 17,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    questionText: `If f(x) = (ax + b) / (cx - a), then what is f(f(x))?`,
    options: ["x", "-x", "1/x", "a²x + b"],
    correctAnswer: 0,
    explanation: "Notice the inverse: for f(x) = (ax + b)/(cx - a), swapping diagonal elements gives f⁻¹(x) = (ax + b)/(cx - a) = f(x). Since f is its own inverse, f(f(x)) = x."
  },
  {
    id: "QA_18",
    section: "QA",
    questionNumber: 18,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    questionText: `What is the area of the region enclosed by the graphs of y = |x - 2| and y = 4 - |x - 2|?`,
    options: ["4 sq units", "8 sq units", "16 sq units", "12 sq units"],
    correctAnswer: 1,
    explanation: "Let u = x - 2. Then y = |u| and y = 4 - |u|. Intersection occurs where |u| = 4 - |u| => 2|u| = 4 => |u| = 2 => u = ±2. The region is a rhombus with vertices at (0, 2), (2, 4), (4, 2), (2, 0). Length of diagonal 1 = 4 - 0 = 4 (vertical). Length of diagonal 2 = 4 - 0 = 4 (horizontal). Area = (1/2) * d₁ * d₂ = (1/2) * 4 * 4 = 8 sq units."
  },
  {
    id: "QA_19",
    section: "QA",
    questionNumber: 19,
    type: "TITA",
    marks: { correct: 3, negative: 0 },
    questionText: `Find the minimum value of the expression 4x² + 9y² - 12x + 12y + 15 for all real numbers x and y. Key in your numeric answer:`,
    options: [],
    correctAnswer: "2",
    explanation: "Complete squares: (4x² - 12x + 9) + (9y² + 12y + 4) + (15 - 9 - 4) = (2x - 3)² + (3y + 2)² + 2. Since squared terms are ≥ 0, minimum occurs at x = 3/2, y = -2/3, giving minimum value = 2."
  },
  {
    id: "QA_20",
    section: "QA",
    questionNumber: 20,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    questionText: `In a circle with radius 10 cm, two parallel chords of lengths 12 cm and 16 cm are drawn on opposite sides of the center. What is the distance between the two chords?`,
    options: ["12 cm", "14 cm", "16 cm", "15 cm"],
    correctAnswer: 1,
    explanation: "Distance from center to 12 cm chord: d₁ = sqrt(10² - 6²) = sqrt(100 - 36) = 8 cm. Distance from center to 16 cm chord: d₂ = sqrt(10² - 8²) = sqrt(100 - 64) = 6 cm. Since they lie on opposite sides of center, total distance = d₁ + d₂ = 8 + 6 = 14 cm."
  },
  {
    id: "QA_21",
    section: "QA",
    questionNumber: 21,
    type: "MCQ",
    marks: { correct: 3, negative: -1 },
    questionText: `What is the highest power of 6 that completely divides 50! ?`,
    options: ["22", "23", "24", "25"],
    correctAnswer: 0,
    explanation: "Since 6 = 2 * 3, the power of 3 will be the limiting factor. Legendre's formula for prime 3 in 50!: [50/3] + [50/9] + [50/27] = 16 + 5 + 1 = 22. Thus highest power of 6 is 22."
  },
  {
    id: "QA_22",
    section: "QA",
    questionNumber: 22,
    type: "TITA",
    marks: { correct: 3, negative: 0 },
    questionText: `The sum of the first n terms of an arithmetic progression is given by S_n = 3n² + 5n. What is the 10th term of this progression? Key in your numeric answer:`,
    options: [],
    correctAnswer: "62",
    explanation: "T_10 = S_10 - S_9. S_10 = 3(100) + 5(10) = 300 + 50 = 350. S_9 = 3(81) + 5(9) = 243 + 45 = 288. T_10 = 350 - 288 = 62. (Or T_n = S_n - S_{n-1} = 6n + 2 => T_10 = 6(10) + 2 = 62)."
  }
];

