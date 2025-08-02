export function getRandomEmoji() {
  const emojiList = ['😭','😄','😌','🤓','😎','😤','🤖','😶‍🌫️','🌏','📸','💿','👋','🌊','✨'];
  return emojiList[Math.floor(Math.random() * emojiList.length)];
}

export function getRandomPurple() {
  const colorList = [0x9455f4,0x854ddc,0x7644c3,0x683bab, 0x593392, 0x4a2b7a];
  return colorList[Math.floor(Math.random() * colorList.length)];
}

export function getRandomQuote() {
  const quoteList = [
    "“She will soon also experience the agony of losing everything”",
    "“I wonder how you see me today...the usurper of the one you love? Or the fool who now has to bear your misfortune?”",
    "“I thought everything would turn out just as I wanted…but it feels as though I\’m trapped in a labyrinth.”",
    "“Books, I could read...and swords, I could swing...everything else came easily, but it was so difficult to be loved.”",
    "“Perhaps the heavy feeling I’d had in my heart was a sign of the strife that was about to come”",
    "“I’ve bet my all, my past and my future...to become a member of the imperial family.”",
    "“I can’t hear her heartbeat.	”",
    "“I pitied her and took her under my wing. And now she has taken everything from me!	”",
    "“This was supposed to be your grave...How does it feel to have escaped death thanks to being blessed by the Guardian Deity?”",
    "“Although our lives have been a tragedy thus far...we can turn it around beginning now!	”",
    "“Since the night of the banquet...we each came to shoulder a new burden and planned our next moves for battle.”",
    "“Wouldn't it be better if I took revenge in my own body?”",
    "“I can't let him die this easily. Eros hasn't even experienced half the pain I have”",
    "“I might be the real problem. Will I be able to overcome my past and face my father? I don't have to overcome it. It may be best if we use each other's bodies to get our revenge. But somehow it seems like I'm running away.”",
    "“Peace...that's nice to hear...but too bitter to swallow. I can't be at peace because it doesn't exist. If it does...it just means you're living while ignoring what's going on around you.”",
    "“Out of the three people I trusted, one had betrayed me, one had died...and one had killed the one who died.”",
    "“Let's stop having nightmares because of our guilt.”",
    "“I don't want to be a pawn in someone else's game. I want to be the one who plays the game.”",
    "“I want to be the one who decides my own fate, not someone else.”",
    "“You must not realize what face you make when you look at me...and what your voice sounds like when you talk to me.”",
    "“I prefer things as they are even if we've lost what's dear to us and suffered. Because I now know the source of my pain.”",
    "“You said a Solon does not rely on anyone. And that the closer I am to someone, the more wary I should be. I thought it would be better to turn her away at the door than have her see you while you are weak, so that you can save face.”",
    "“This is a huge gamble. A high stakes gamble where the prize is me.	”",
    "“You seem to be gravely mistaken. When I said you should stay quietly at home...it was not a request. It was a threat.”",
    "“Do you see me as just the child of a failing dukedom?	”",
    "“I will drag my father down and I will attend the ordination as the junior duke. Not as Lady Medea, the duke’s daughter, but as Junior Duke Solon.”",
    "“Mercy is something only people like you can show. I'm too petty. I've grown tired of those who abandon me at the first sign of adversity.”",
    "“Just endure it. Continue forwards as you have been. You've assembled it well. However, one misstep and we'll all fall off a steep cliff. I feel responsible for everyone. All of them. They're my responsibility.”",
    "“Am I holding onto one last sliver of hope? Or is it to comfort myself when this is over and done with by telling myself that he was always this sort of person?”",
    "“It feels as if my face will fall off. This sharp pain. The taste of blood spilling onto my tongue. Just because you've prepared yourself to be struck doesn't mean it doesn't hurt.”",
    "“If you abandon a loyal dog to starve, it will swallow up its master.	”",
    "“If I am a demon, then what does that make the one who raised me. Had I known someone like you would be my father, I never would've been born.”",
    "“Is luck on our side because we decided to go forward? Or is it compensation for past tribulation?”",
    "“When you’re hungry, if you see delicious food, you want to eat it. If you see an expensive jewel through a store window, you want to steal it. And if there is someone you despise, you want to crush their tiny skull and kill them. Have you never felt that way at least once in your life? That is human nature.”",
    "“I do not ask because I am blinded by my adoration for you. I ask because I'm very curious. Is there anything you can't do?”",
    "“The Solons became prosperous by sinning. The house I grew up in, the clothes I wore, the food I ate...”",
    "“You scum. Don't get in my way”",
    "“Please come and see for yourself. See how much I've grown since you've left.”",
    "“You finally apologized.”",
    "“I ask you to keep your eyes open and to watch. It is your right to watch the new solons that will shed the skin of their predecessors to be born anew.”",
    "“She has many enemies. But she’s stronger than all of her enemies combined.”",
    "“Medea...she is wicked like no other...cunning...and manipulative. I cannot help but be cautious.”",
    "“She is not so weak as to let such a thing bring her down.”",
    "“People call us the queen and her pawn.”",
    "“How could I have forgotten about that day? Running away never suited Lady Medea.	”",
    "“Her anguished wailing was like that of an animal...rather than a human being.”",
    "“She just laughed without saying a word back then. But her heart must have broken into a thousand pieces.”",
    "“Medea would not succumb to tribulations. Rather, she’d convert them into opportunities.”",
    "“You have become as kind and gentle as you are strong.”",
    "“”",


  ];
  return quoteList[Math.floor(Math.random() * quoteList.length)];
}

export function getGallery(index) {
    const galleryList = [
        'https://static.wikia.nocookie.net/your_throne/images/4/45/Volume_1_cover_English.png/revision/latest/scale-to-width-down/123?cb=20240701174205',
        'https://static.wikia.nocookie.net/your_throne/images/3/31/Medea_Solon.png/revision/latest/scale-to-width-down/164?cb=20240316213351',
        'https://static.wikia.nocookie.net/your_throne/images/9/90/Episode_108_thumbnail.jpg/revision/latest/scale-to-width-down/185?cb=20230915015004',
        'https://static.wikia.nocookie.net/your_throne/images/d/d6/Episode_102_thumbnail.jpg/revision/latest/scale-to-width-down/185?cb=20230915014513',
        'https://static.wikia.nocookie.net/your_throne/images/c/ca/Medea_131.jpg/revision/latest/scale-to-width-down/79?cb=20230213204216',
        'https://static.wikia.nocookie.net/your_throne/images/6/69/Episode_135_thumbnail.jpg/revision/latest/scale-to-width-down/185?cb=20230302005150',
        'https://static.wikia.nocookie.net/your_throne/images/d/d7/Episode_93_thumbnail.jpg/revision/latest/scale-to-width-down/185?cb=20230203204558',
        'https://static.wikia.nocookie.net/your_throne/images/7/74/Medea_129.jpg/revision/latest/scale-to-width-down/75?cb=20230127165118',
        'https://static.wikia.nocookie.net/your_throne/images/6/68/Episode_89_thumbnail.jpg/revision/latest/scale-to-width-down/185?cb=20230122031843',
        'https://static.wikia.nocookie.net/your_throne/images/e/e9/Volume_3_cover.jpg/revision/latest/scale-to-width-down/132?cb=20230103045815',
        'https://static.wikia.nocookie.net/your_throne/images/4/40/Episode_77_thumbnail.jpg/revision/latest/scale-to-width-down/185?cb=20210818060614',
        'https://static.wikia.nocookie.net/your_throne/images/0/00/Medea_126.jpg/revision/latest/scale-to-width-down/97?cb=20210802180609',
        'https://static.wikia.nocookie.net/your_throne/images/9/95/Medea_127.jpg/revision/latest/scale-to-width-down/81?cb=20210802180634',
        'https://static.wikia.nocookie.net/your_throne/images/c/c8/Medea_124.jpg/revision/latest/scale-to-width-down/107?cb=20210802172850',
        'https://static.wikia.nocookie.net/your_throne/images/8/84/Medea_123.jpg/revision/latest/scale-to-width-down/97?cb=20210802172424',
        'https://static.wikia.nocookie.net/your_throne/images/1/10/Medea_119.jpg/revision/latest/scale-to-width-down/79?cb=20210722164841',
        'https://static.wikia.nocookie.net/your_throne/images/6/6c/Episode_78_thumbnail.jpg/revision/latest/scale-to-width-down/185?cb=20210625223615',
        'https://static.wikia.nocookie.net/your_throne/images/8/81/Medea_110.jpeg/revision/latest/scale-to-width-down/151?cb=20210625220829',
        'https://static.wikia.nocookie.net/your_throne/images/d/d6/Episode_76_thumbnail.jpg/revision/latest/scale-to-width-down/185?cb=20210625214008',
        'https://static.wikia.nocookie.net/your_throne/images/6/61/Medea_108.jpg/revision/latest/scale-to-width-down/113?cb=20210625142516',
        'https://static.wikia.nocookie.net/your_throne/images/8/85/Medea_107.jpg/revision/latest/scale-to-width-down/103?cb=20210625142305',
        'https://static.wikia.nocookie.net/your_throne/images/b/b7/Belial_2.jpg/revision/latest/scale-to-width-down/185?cb=20210530075228',
        'https://static.wikia.nocookie.net/your_throne/images/4/44/Medea_96.jpg/revision/latest/scale-to-width-down/90?cb=20210530113333',
        'https://static.wikia.nocookie.net/your_throne/images/0/0e/Medea_85.jpg/revision/latest/scale-to-width-down/97?cb=20210415210144',
        'https://static.wikia.nocookie.net/your_throne/images/0/0e/Medea_81.jpg/revision/latest/scale-to-width-down/117?cb=20210409154223',
        'https://static.wikia.nocookie.net/your_throne/images/e/e7/Medea_79.jpg/revision/latest/scale-to-width-down/96?cb=20210409154104',
        'https://static.wikia.nocookie.net/your_throne/images/d/d5/Medea_78.jpg/revision/latest/scale-to-width-down/124?cb=20210409153915',
        'https://static.wikia.nocookie.net/your_throne/images/5/5f/Medea_74.jpg/revision/latest/scale-to-width-down/112?cb=20210409140126',
        'https://static.wikia.nocookie.net/your_throne/images/7/73/Medea_70.jpg/revision/latest/scale-to-width-down/96?cb=20210315170305',
        'https://static.wikia.nocookie.net/your_throne/images/f/f4/Medea_68.jpg/revision/latest/scale-to-width-down/99?cb=20210313142443',
        'https://static.wikia.nocookie.net/your_throne/images/0/0c/Medea_67.jpg/revision/latest/scale-to-width-down/107?cb=20210313135858',
        'https://static.wikia.nocookie.net/your_throne/images/6/60/Medea_62.jpg/revision/latest/scale-to-width-down/103?cb=20210304215912',
        'https://static.wikia.nocookie.net/your_throne/images/0/0d/Medea_64.jpg/revision/latest/scale-to-width-down/100?cb=20210304220317',
        'https://static.wikia.nocookie.net/your_throne/images/3/3f/Medea_47.jpg/revision/latest/scale-to-width-down/89?cb=20210226145818',
        'https://static.wikia.nocookie.net/your_throne/images/b/b5/Medea_46.jpg/revision/latest/scale-to-width-down/124?cb=20210226145706',
        'https://static.wikia.nocookie.net/your_throne/images/1/10/Medea_44.jpg/revision/latest/scale-to-width-down/103?cb=20210222014721'

    ];
    return galleryList[index % galleryList.length];
}

export function incrementIndex(index) {
    return (index + 1);
}