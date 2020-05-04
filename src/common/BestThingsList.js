const bestThings = {  
  movies: [
    {
      title: 'Frances Ha',
      description: 'The story of a lost young woman who is trying to know herself and find a place in the world is so touching. Charming, witty and uplifting.',
      year: '2012',
      link: 'https://www.imdb.com/title/tt2347569',
      thumbnail: require('../assets/thumbnails/movies/francesha.jpg')
    },
    {
      title: 'Final Space',
      description: 'Second animation in this list. The show has a particular brand of comedy and satire. Absolutely nailed it.',
      year: '(2018 - )',
      link: 'https://www.imdb.com/title/tt6317068',
      thumbnail: require('../assets/thumbnails/movies/finalspace.jpg')
    },
    {
      title: 'Three Colors: Red',
      description: 'Part of a trilogy, this movie appeared in 1994. Not that old considering my tastes. The plot is quite peculiar, but I loved the atmosphere of the movie.',
      year: '1994',
      link: 'https://www.imdb.com/title/tt0111495',
      thumbnail: require('../assets/thumbnails/movies/threecolors.jpg')
    },
    {
      title: 'Pain and Glory',
      description: 'Almodovar strikes again. The visual cinematography make his films such a pleasure to watch. An ode to the power of art.',
      year: '2019',
      link: 'https://www.imdb.com/title/tt8291806',
      thumbnail: require('../assets/thumbnails/movies/dolorygloria.jpg')
    },
    {
      title: 'Love, Death & Robots',
      description: 'I don\'t like to start any new tv series because I know I can get easily addicted to them. But I do make some excepetions for animations. And I\'m glad I did with this one. Every episode is a new highly entertaining story. Hope there\'ll be a season two.',
      year: '(2019 - )',
      link: 'https://www.imdb.com/title/tt9561862',
      thumbnail: require('../assets/thumbnails/movies/lovedeathrobots.jpg')
    },
    {
      title: 'Marriage Story',
      description: 'It\'s all about the drama. The portrait of a perfect marriage that shows how everything can change in a relatioship in time. Don\'t know why I love the sad stories so much.',
      year: '2019',
      link: 'https://www.imdb.com/title/tt7653254',
      thumbnail: require('../assets/thumbnails/movies/marriagestory.jpg')
    },
    {
      title: 'Knives Out',
      description: 'Excellent story, witty, the perfect detective movie for me. It\'s a masterful thrill ride, can\'t imagine anyone getting bored with this one.',
      year: '2019',
      link: 'https://www.imdb.com/title/tt8946378',
      thumbnail: require('../assets/thumbnails/movies/knivesout.jpg')
    },
    {
      title: 'Parasite',
      description: 'Another one that won the 2020 oscars for the best movie. First in the history that is not in English and won this award. Just perfectly executed. I\'ve seen a couple of good South Koreean movies in the past so I\'m happy for this being so acclaimed internationally.',
      year: '2019',
      link: 'https://www.imdb.com/title/tt6751668',
      thumbnail: require('../assets/thumbnails/movies/parasite.jpg')
    },
    {
      title: 'Capernaum',
      description: 'The only category in oscars that really interests me is the one for the best foreign language film. And this movie coming from Lebanon was nominated for that category. It was beautiful and heartbreaking at the same time. But I love dramas and slow paced movies.',
      year: '2018',
      link: 'https://www.imdb.com/title/tt8267604',
      thumbnail: require('../assets/thumbnails/movies/capernaum.jpg')
    },
    {
      title: 'Green Book',
      description: 'Great movie about two individuals divided by race, education and class in the 1960\'s America and how their relationship benefits them both. Won three oscars in 2019, one of them for the best movie of the year. Totally deserved it.',
      year: '2018',
      link: 'https://www.imdb.com/title/tt6966692',
      thumbnail: require('../assets/thumbnails/movies/greenbook.jpg')
    }
  ].reverse(),
  documentaries: [
    {
      title: 'Chasing Ice',
      description: 'Environmental photographer James Balog heads to Greenland, Iceland and Alaska in order to capture images that will help to convey the effects of global warming. He and his team deploy cameras that utilize time-lapse photography across various places in the Arctic to capture the melting of the glaciers.',
      year: '2012',
      link: 'https://www.imdb.com/title/tt1579361',
      thumbnail: require('../assets/thumbnails/documentaries/chasingice.jpg')
    },
    {
      title: 'Kedi',
      description: 'The story of seven cats living on the streets of Istanbul. Each with their own distinctive personalities being described by the people they interact with. The beautiful cinematography was a treat to watch, the viewer getting to see the world through a cat\'s eyes.',
      year: '2016',
      link: 'https://www.imdb.com/title/tt4420704',
      thumbnail: require('../assets/thumbnails/documentaries/kedi.jpg')
    },
    {
      title: 'The Dawn Wall',
      description: 'Free Solo was another climbing documentary that won the Oscars last year. But this one was just as good, with Tommy Caldwell attempting to free style climb the vertical 3000-foot rock of El Capitan.',
      year: '2017',
      link: 'https://www.imdb.com/title/tt7286916',
      thumbnail: require('../assets/thumbnails/documentaries/dawnwall.jpg')
    },
    {
      title: 'Amy',
      description: 'A film about the life and death of Amy Winehouse with extensive unseen footage and unheard tracks. It is a very honest and emotional movie that shows her rise to fame and her feelings about it.',
      year: '2015',
      link: 'https://www.imdb.com/title/tt2870648',
      thumbnail: require('../assets/thumbnails/documentaries/amy.jpg')
    },
    {
      title: 'The Game Changers',
      description: 'Probably the most hyped documentary of the year. It\'s about the benefits of a plant-based eating for athletes. A bit exaggerated in some of the parts, but a good one nonetheless.',
      year: '2018',
      link: 'https://www.imdb.com/title/tt7455754',
      thumbnail: require('../assets/thumbnails/documentaries/gamechangers.jpg')
    },
    {
      title: 'I Am Alive: Surviving the Andes Plane Crash',
      description: 'In 1972 a plane with a Uruguayan rugby team crashed in the snow-covered Andes Mountains. A 72-day struggle for survival followed, while everyone thought they were dead. It is one of the most amazing survival stories to date.',
      year: '2010',
      link: 'https://www.imdb.com/title/tt1776935',
      thumbnail: require('../assets/thumbnails/documentaries/iamalive.jpg')
    },
    {
      title: 'Formula 1: Drive to Survive',
      description: 'I haven\'t seen any F1 race for ages before seeing this series on netflix. But still I found it very entertaining. A slick production with plenty of appeal for the uninitiated.',
      year: '2019',
      link: 'https://www.imdb.com/title/tt8289930',
      thumbnail: require('../assets/thumbnails/documentaries/formula1.jpg')
    },
    {
      title: 'The Eagle Huntress',
      description: 'Stunning photography and fascinating insight into the life of nomads, who live as their ancestors have lived in the mountains of Mongolia. The story is about a young 13 year old girl who aspires to be the first female Kazakh eagle hunter.',
      year: '2016',
      link: 'https://www.imdb.com/title/tt3882074',
      thumbnail: require('../assets/thumbnails/documentaries/eaglehuntress.jpg')
    },
    {
      title: 'Faces Places',
      description: 'Agnes Varda, the French director, was 89 years old when she directed this documentary in collaboration with 33 year old muralist JR. They travel the countryside photographing locals and pasting largesize photos on various objects. Brilliant for art lovers.',
      year: '2017',
      link: 'https://www.imdb.com/title/tt5598102',
      thumbnail: require('../assets/thumbnails/documentaries/facesplaces.jpg')
    },
    {
      title: 'Dear Zachary: A Letter to a Son About His Father',
      description: 'What a tense story. Probably the most heart-wrenching and deeply disturbing crime documentary I\'ve seen.',
      year: '2008',
      link: 'https://www.imdb.com/title/tt1152758/',
      thumbnail: require('../assets/thumbnails/documentaries/dearzachary.jpg')
    }
  ].reverse(),
  books: [
    {
      title: 'Gratitude',
      author: 'Oliver Sacks',
      description: 'A collection of four beautiful and moving essays published in The New York Times shortly before and after he was diagnosed with metastatic cancer.',
      link: 'https://www.goodreads.com/book/show/27161964-gratitude',
      thumbnail: require('../assets/thumbnails/books/gratitude.jpg')
    },
    {
      title: 'Adèle',
      author: 'Leïla Slimani',
      description: 'A dark tale of the struggle of a wife, a mother with a child who has a sex addiction and leads a secret life to run away from her depression and her frustrations.',
      link: 'https://www.goodreads.com/book/show/40265073-ad-le',
      thumbnail: require('../assets/thumbnails/books/capcaunul.jpg')
    },
    {
      title: 'L\'Autre qu\'on adorait',
      author: 'Catherine Cusset',
      description: 'The book follows the story of Thomas, a young man, exuberant, extremly smart, funny, surrounded by friends, loving life, women, literature, Proust especially, music, but suffering from depression. In the first pages we are  presented with the fact that he took his own life when he was 39.',
      link: 'https://www.goodreads.com/book/show/31166305-l-autre-qu-on-adorait',
      thumbnail: require('../assets/thumbnails/books/celalalt.jpg')
    },
    {
      title: 'Information is Beautiful',
      author: 'David McCandless',
      description: 'Amazing visuals that really gets you to love statistics and information! And plenty of unknown facts in beautiful and innovative ways of presentation.',
      link: 'https://www.goodreads.com/book/show/7249817-information-is-beautiful',
      thumbnail: require('../assets/thumbnails/books/information.jpg')
    },
    {
      title: 'Factfulness: Ten Reasons We\'re Wrong About the World – and Why Things Are Better Than You Think',
      author: 'Hans Rosling',
      description: 'This is a fascinating book looking at how the world really is today and highlighting how ignorant we are of the major progress made in eradicating poverty & disease over the last 40-50 years.',
      link: 'https://www.goodreads.com/book/show/34890015-factfulness',
      thumbnail: require('../assets/thumbnails/books/factfulness.jpg')
    },
    {
      title: 'The Spinoza Problem',
      author: 'Irvin Yalom',
      description: 'Yalom is probably one of the most famous contemporary psychiatrist. And his style is pretty unique considering how he incorporates scientific and historical information in such a way that you don\'t even realize anymore which is fact and which is fiction.',
      link: 'https://www.goodreads.com/book/show/12715691-the-spinoza-problem',
      thumbnail: require('../assets/thumbnails/books/spinoza.jpg')
    },
    {
      title: 'My Brilliant Friend',
      author: 'Elena Ferrante',
      description: 'This is a four parts book series. The story happening in Naples is starting in the years after the WW2 and goes on for a few decades through the books. Apart from the story what I loved most about this book was the style in which it was written. I still have one book out of the four pending to read, but that\'s only because I didn\'t want the story to end.',
      link: 'https://www.goodreads.com/book/show/35036409-my-brilliant-friend',
      thumbnail: require('../assets/thumbnails/books/mybrilliantfriend.jpg')
    },
    {
      title: 'Lost Connections: Uncovering the Real Causes of Depression and the Unexpected Solutions',
      author: 'Johann Hari',
      description: 'The author of the book has been through depression for a big part of his life so he knows what he\'s talking. Both because he tried a lot of things to get out of it and but also because there\'s a lot of science in this book that he gathered by speaking with lots of specialists to make this book possible. He also has some good TED talks.',
      link: 'https://www.goodreads.com/book/show/34921573-lost-connections',
      thumbnail: require('../assets/thumbnails/books/lostconnections.jpg')
    },
    {
      title: 'Flow: The Psychology of Optimal Experience',
      author: 'Mihaly Csikszentmihalyi',
      description: 'Before reading this book Crime and Punishment was the only book that I had in my mind that I have to reread at some point. Now I have two books on the list. Despite it\'s self-helpy title and the topic of happiness being so present I can\'t recommend this enough.',
      link: 'https://www.goodreads.com/book/show/66354.Flow',
      thumbnail: require('../assets/thumbnails/books/flow.jpg')
    },
    {
      title: 'The Count of Monte Cristo',
      author: 'Alexandre Dumas',
      description: 'Probably the longest book I\'ve ever read. I started it because Cartarescu said in an interview it was one of his favorites. And I\'m so glad I\'ve read it. One of the greatest stories ever. I can still remember reading it during the Christmas holidays and during a trip to Vienna on the train from Cluj in January.',
      link: 'https://www.goodreads.com/book/show/7126.The_Count_of_Monte_Cristo',
      thumbnail: require('../assets/thumbnails/books/montecristo.jpg')
    }
  ].reverse(),
  songs: [
    {
      title: 'Fever Ray - To The Moon And Back',
      description: 'I\'ve listened to a lot of songs from this Swedish singer. Good lyrics, crazy videos. Mental some of them. Her song Keep The Streets Empty For Me must be the perfect for a late night driving.',
      link: 'https://www.youtube.com/watch?v=fJjGZkPl9Tw',
      thumbnail: require('../assets/thumbnails/songs/feverray.jpg')
    },
    {
      title: 'Old Man Saxon - The Perils',
      description: 'Rap done properly. He deserves more attention. And from what I\'ve read this song actually was written while he was homeless living in a car. So fuck your excuses.',
      link: 'https://www.youtube.com/watch?v=m8-tsi9AfoA',
      thumbnail: require('../assets/thumbnails/songs/oldmansaxon.jpg')
    },
    {
      title: "Let's Eat Grandma - It’s Not Just Me",
      description: 'There\'s always room for a cool pop song made by some teenagers in my playlist. I\'ve seen a live performance of these two British girls on youtube and the vibe they transmit is just amazing.',
      link: 'https://www.youtube.com/watch?v=P8FoJjlxlmY',
      thumbnail: require('../assets/thumbnails/songs/letseatgrandma.jpg')
    },
    {
      title: 'Bastille - Doom Days',
      description: 'Can\'t say I\'m into any other Bastille song. But damn this one is so good and powerful. Got me obsessed this past summer.',
      link: 'https://www.youtube.com/watch?v=IOX30CHr4JY',
      thumbnail: require('../assets/thumbnails/songs/bastille.jpg')
    },
    {
      title: 'Anderson .Paak - Make It Better',
      description: 'You know when you\'re in a relationship, but after a while the fire and passion are starting to fade away? Well this songs describes that feeling when both have to decide to fight for it if they don\'t want to loose it.',
      link: 'https://www.youtube.com/watch?v=7Jj83FOlBF8',
      thumbnail: require('../assets/thumbnails/songs/andresonpaak.jpg')
    },
    {
      title: 'Mike Posner - Move on',
      description: 'And the award for the most positive and uplifting song of the year goes to Move on. It appeared in my life at a point I really need it. So no wonder it sticked with me for awhile.',
      link: 'https://www.youtube.com/watch?v=A2CwZ1UTSSA',
      thumbnail: require('../assets/thumbnails/songs/mikeposner.jpg')
    },
    {
      title: "The Sound - I Can't Escape Myself",
      description: 'Can\'t say I\'ve experienced depression on the level this song is reaching and I hope I never will. But I do love to read a lot about it and listen to depressive song. This is without a doubt my all time favorite. On a side note the lead singer commited suicide years after releasing this.',
      link: 'https://www.youtube.com/watch?v=8Ad2ujW5Sl8',
      thumbnail: require('../assets/thumbnails/songs/thesound.jpg')
    },
    {
      title: "Mac Miller: NPR Music Tiny Desk Concert",
      description: 'This is a 17 minutes concert because it sounds so good and I couldn\'t pick only one song from Mac. Such a pitty he\'s no longer with us. Anyway, I just love him and every now and then I return to his songs. Which doesn\'t happen frequently with my music obsessions.',
      link: 'https://www.youtube.com/watch?v=QrR_gm6RqCo',
      thumbnail: require('../assets/thumbnails/songs/macmiller.png')
    },
    {
      title: 'Sasha Sloan - Older',
      description: 'A lovely singer that I\'ve discovered in the past year. The lyrics resonate with me, so I look forward to every new song she\'s releasing. I just love her authentic style of speaking about common mental issues. This song like many others of her\'s is a bit slow and melancholic. But amazing nonetheless.',
      link: 'https://www.youtube.com/watch?v=r1Fx0tqK5Z4',
      thumbnail: require('../assets/thumbnails/songs/sashasloan.jpg')
    },
    {
      title: 'Rilès - Remedy',
      description: 'Even a year after I\'ve discovered this French-Agerian rapper he\'s still my number one choice when I want to listen to something good with positive energy. He just has so many songs I love. But this is the one that I was initially introduced to. And still one of my favs.',
      link: 'https://www.youtube.com/watch?v=ex0Hli7kMRs',
      thumbnail: require('../assets/thumbnails/songs/riles.jpg')
    }
  ].reverse(),
  youtube: [
    {
      title: 'A young woman finds a one-night stand. But he lives 2 hours away via public transit',
      description: 'You can find some good short movies on this channel and this is one of them.',
      link: 'https://www.youtube.com/watch?v=rVBhvVK8RwM',
      thumbnail: require('../assets/thumbnails/youtube/omleto.jpg')
    },
    {
      title: 'Curiozitatea, povestea şi ecuaţiile | Cristian Presura',
      description: 'I\'m sure I would have liked physics much more in school if I only had a professor like him. He has a youtube channel now and I\'m happy to see people being interested in this type of content as well, not only vlogs or content that don\'t stimulate our brains, meant only to push away the boredom. This talk however is an ode to curiosity.',
      link: 'https://www.youtube.com/watch?v=9mA8dk7_SJc',
      thumbnail: require('../assets/thumbnails/youtube/curiozitatea.jpg')
    },
    {
      title: 'For People Who Feel Behind In Life',
      description: 'This youtuber is so authentic and funny. I like a lot of her videos that are full of positivity.',
      link: 'https://www.youtube.com/watch?v=575LByUKT00',
      thumbnail: require('../assets/thumbnails/youtube/evelyn.jpg')
    },
    {
      title: 'A Brief History of Graphics',
      description: 'If you ever enjoyed video games you will like this video for sure. I remembered some games I used to play in the school that I\'ve long forgotten.',
      link: 'https://www.youtube.com/watch?v=QyjyWUrHsFc',
      thumbnail: require('../assets/thumbnails/youtube/graphics.jpg')
    },
    {
      title: 'Art + Life Rules from a Nun',
      description: 'I don\'t know much about art cause I feel it\'s hard to approach most of the times. But this channel finds a way to bring it closer to the people. In the end we are all artists as the host of the show stated in her book that was just released in 2020. Some great advice can be found in this video as well that might awake your dormant artistic part.',
      link: 'https://www.youtube.com/watch?v=IRPyql3cezo',
      thumbnail: require('../assets/thumbnails/youtube/art.jpg')
    },
    {
      title: 'Alternativa Fundamentală | Solomon Marcus | TEDxCluj',
      description: 'I\'ve first seen this university math professor that is no longer with us at a tv show with Neagu Djuvara, another personality that I looked up to. I was fascinated by his intelligence and his kind way of talking. In this TED Talk he shares 10 human needs that are fundamental for us. Nothing groundbreaking, but still I enjoy his wisdom.',
      link: 'https://www.youtube.com/watch?v=qZrtnwkZkwI',
      thumbnail: require('../assets/thumbnails/youtube/solomon.jpg')
    },
    {
      title: 'Lauren Hom | CoAD Lecture Series',
      description: 'I\'m a huge beliver in the theory that there are no stupid projects. Hence this website. Lauren is a designer that has made an impressive career exploring her creativity with projects that seemed silly initially. This talk inspires us to keep making things just because they feel good or they\'re fun.',
      link: 'https://www.youtube.com/watch?v=hB8lTBvtBAo',
      thumbnail: require('../assets/thumbnails/youtube/laurenHom.jpg')
    },
    {
      title: 'Izolaţi în România',
      description: 'If drama is my favorite genre when it comes to movies, depressive and melancholic songs are the ones I\'m most attracted to, no wonder this program touched my heart. There are more episodes that I enjoyed, all showing the hard life that isolated people from Romania are going through. Your problems suddently don\'t seem that big anymore after watching this.',
      link: 'https://www.youtube.com/watch?v=0-UrCuNXuHc',
      thumbnail: require('../assets/thumbnails/youtube/izolati.jpg')
    },
    {
      title: 'Echilibru între carieră de top si viaţă personală - Mircea Miclea',
      description: 'I\'ve seen him talking at Betfair this past year and his energy and knowledge were captivating. Since then I\'ve seen all the videos on youtube with him. All of them providing such a great value. He\'s a proffesor at a univeristy in Cluj, a psychologist and for a brief period of time was even the minister of education.',
      link: 'https://www.youtube.com/watch?v=GceJLxXA438',
      thumbnail: require('../assets/thumbnails/youtube/miclea.jpg')
    },
    {
      title: "Patrice O'Neal - Elephant In The Room Standup",
      description: 'Oh how I love this guy. To me this is the best stand up show ever. He died in 2011 and this his only complete show that I found. But he used to have a podcast as well that I highly enjoyed. He\'s savage, but I like his style.',
      link: 'https://www.youtube.com/watch?v=-dulGdlC6hs',
      thumbnail: require('../assets/thumbnails/youtube/patrice.jpg')
    }
  ].reverse(),
  technical: [
    {
      title: "Immutability in JavaScript",
      description: 'A core principle in functional programming to grasp before coding in react.',
      link: 'https://www.youtube.com/watch?v=4LzcQyZ9JOU',
      thumbnail: require('../assets/thumbnails/technical/immutability.jpg')
    },
    {
      title: "What Are Web Components?",
      description: 'A nice introduction to the core features of web components.',
      link: 'https://www.youtube.com/watch?v=R9o9js_HKwc',
      thumbnail: require('../assets/thumbnails/technical/components.jpg')
    },
    {
      title: "Harry Roberts - CSS for Software Engineers for CSS Developers",
      description: 'Harry is the man when it comes to writing clean and robust CSS code and this presentation provides some nice tricks to improve the quality of your code.',
      link: 'https://www.youtube.com/watch?v=_F5EISZa1oI',
      thumbnail: require('../assets/thumbnails/technical/harry.jpg')
    },
    {
      title: "Steve Schoger | Refactoring UI | CSS Day 2019",
      description: 'As a developer is pretty common to not put any effort in your designs. But here are some simple concepts that can make a huge difference for your design. His tips were very popular on twitter and he even has a book covering all these concepts.',
      link: 'https://vimeo.com/348117868',
      thumbnail: require('../assets/thumbnails/technical/uipatterns.jpg')
    },
    {
      title: "CSS Algorithms - Lara Schenck - JSConf US 2019",
      description: 'So is CSS a programming language? No matter what you think you\'re gonna love Lara\'s amazing presentation.',
      link: 'https://www.youtube.com/watch?v=panKf9hzUfQ',
      thumbnail: require('../assets/thumbnails/technical/cssalgorithms.jpg')
    },
    {
      title: "Rediscovering JavaScript by Venkat Subramaniam",
      description: 'In this 3 hours presentation this guy goes through all the main features that have changed in javascript in the past years.',
      link: 'https://www.youtube.com/watch?v=dxzBZpzzzo8',
      thumbnail: require('../assets/thumbnails/technical/javascript.jpg')
    },
    {
      title: "The Weird History of JavaScript",
      description: 'We must have a look back in the past in order to understand how we got to where we are now. This guy manages to provide an entertaining history of javascript in just 12 minutes.',
      link: 'https://www.youtube.com/watch?v=Sh6lK57Cuk4',
      thumbnail: require('../assets/thumbnails/technical/history.jpg')
    },
    {
      title: "GraphQL: The Documentary",
      description: 'The nerdiest software documentary ever. Hope to see more of these being made in the future.',
      link: 'https://www.youtube.com/watch?v=783ccP__No8',
      thumbnail: require('../assets/thumbnails/technical/graphql.jpg')
    },
    {
      title: "Chrys Coyer - Ooooops I guess we’re full-stack developers now",
      description: 'No wonder we can feel overwhelmed with the amount of information we have to keep up to in this crazy frontend development world. But I think we should appreciate the increasing number of things we can achieve with these skills.',
      link: 'https://www.youtube.com/watch?v=YiBau30kIjI',
      thumbnail: require('../assets/thumbnails/technical/coyer.jpg')
    },
    {
      title: "The road to React book",
      description: 'I used to read a lot of programming books years ago, but not anymore since there is so much amazing content when it comes to learning in a faster and more approachable way, like video courses. But learning React in 2019 this book helped me the most. And you get to build a cool little project as you advance with the reading. 10/10 would recommend this one.',
      link: 'https://www.roadtoreact.com/',
      thumbnail: require('../assets/thumbnails/technical/react.jpg')
    }
  ].reverse()
};

export default bestThings;