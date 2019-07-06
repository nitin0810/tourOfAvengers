

 const Avengers = [
    {
        id: 11,
        name: 'Iron Man',
        description: 'A wealthy American business magnate, playboy, and ingenious scientist, Anthony Edward "Tony" Stark suffers a severe chest injury during a kidnapping. When his captors attempt to force him to build a weapon of mass destruction, he instead creates a powered suit of armor to save his life and escape captivity.',
        gender: 'M',
        imgUrl: 'https://marciokenobi.files.wordpress.com/2013/03/iron_man.jpg',
        planet: 'Earth',
        powers: ['Flight', 'Hand-to-hand combat', ' Superhuman strength', ' Artificial intelligence', 'Quantum Mechanics'],
        rating: 5,
        hasDedicatedMovie: true
    },
    {
        id: 12,
        name: 'Captain America',
        description: 'Patriotic supersoldier who often fought the Axis powers of World War II and was Timely Comics\' most popular character during the wartime period.',
        gender: 'M',
        imgUrl: 'https://c-5uwzmx78pmca09x24quoqfx2ezivsmzx2ekwu.g00.ranker.com/g00/3_c-5eee.zivsmz.kwu_/c-5UWZMXPMCA09x24pbbx78ax3ax2fx2fquoqf.zivsmz.kwux2fcamz_vwlm_quox2f12x2f447941x2fwzqoqvitx2fkix78biqv-iumzqki-x78pwbw-c35x3fex3d068x26px3d068x26nqbx3dkzwx78x26kzwx78x3dnikmax26yx3d38x26nubx3drx78ox26q98k.uizsx3dquiom_$/$/$/$/$/$',
        planet: 'Earth',
        powers: ['Great Fighter', 'Has indesctructible shield', 'Hand-to-hand combat', 'Patriotic and honest'],
        rating: 4,
        hasDedicatedMovie: true
    },
    {
        id: 15,
        name: 'Black Widow',
        description: ' She is the first costumed, superpowered female comic book character. An antiheroine who kills evildoers in order to deliver their souls to Satan, her master, she first appears in Mystic Comics #4, published by Marvel predecessor Timely Comics',
        gender: 'F',
        imgUrl: 'https://frpnet.net/wp-content/uploads/2019/01/black-widow-rrated-1-660x330.jpg',
        planet: 'Earth',
        powers: ['Undefined psychic powers', 'enhanced endurance', 'invisibility', 'appearance alteration'],
        rating: 3,
        hasDedicatedMovie: false
    },
    {
        id: 13,
        name: 'Thor',
        description: 'Based on the Norse mythological deity of the same name, is the Asgardian god of thunder and possesses the enchanted hammer Mjolnir, which grants him the ability of flight and weather manipulation amongst his other superhuman attributes.',
        gender: 'M',
        imgUrl: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fimages6.fanpop.com%2Fimage%2Fphotos%2F39100000%2F-thor-and-his-mighty-hammer-indiegerman-39139217-900-900.jpg&f=1',
        planet: 'Asgard',
        powers: ['Flight', 'Hand-to-hand combat', ' Superhuman strength', ' Artificial intelligence', 'Quantum Mechanics'],
        rating: 5,
        hasDedicatedMovie: true
    },
    {
        id: 14,
        name: 'Spiderman',
        description: 'Spider-Man is the alias of Peter Parker, an orphan raised by his Aunt May and Uncle Ben in New York City after his parents Richard and Mary Parker were killed in a plane crash. Created by writer-editor Stan Lee and writer-artist Steve Ditko.',
        gender: 'M',
        imgUrl: 'https://www.pinkvilla.com/files/styles/fbimagesection/public/spider-man-far-from-home-occupancy-report-india.jpg?itok=oTfjPzth',
        planet: 'Earth',
        powers: ['Precognition', 'Healing factor', 'Superhuman speed'],
        rating: 3,
        hasDedicatedMovie: true
    },
    {
        id: 16,
        name: 'Wanda Maximoff',
        description: 'Wanda Maximoff is a fictional character, whose code name is Scarlet Witch, in the Marvel Cinematic Universe',
        gender: 'F',
        imgUrl: 'https://orig00.deviantart.net/5e82/f/2018/014/c/f/curiosity_1_2__wanda_maximoff_x_male_reader__by_writerantics-dbzxlic.jpg',
        planet: 'Earth',
        powers: ['Reality warping'],
        rating: 2,
        hasDedicatedMovie: false
    },
    {
        id: 18,
        name: 'Hulk',
        description: 'The character is both the Hulk, a green-skinned, hulking and muscular humanoid possessing a vast degree of physical strength, and his alter ego Dr. Robert Bruce Banner, a physically weak, socially withdrawn, and emotionally reserved physicist, the two existing as independent personalities and resenting of the other.',
        gender: 'M',
        imgUrl:'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.quirkybyte.com%2Fwp-content%2Fuploads%2F2018%2F05%2Fhulk.png&f=1',
        planet: 'Earth',
        powers: ['Superhuman strength', 'stamina and durability','Genius-level intellect'],
        rating: 3,
        hasDedicatedMovie: true
    },
    {
        id: 17,
        name: 'Mantis',
        description: 'Mantis is a fictional character, a superhero in the Marvel Universe, and former member of the Avengers. The character was ranked 99th in Comics Buyer\'s Guide\'s "100 Sexiest Women in Comics list.',
        gender: 'F',
        imgUrl: 'https://cdn.vox-cdn.com/thumbor/AlX0xlhv14a64bnDJKQ0AaeOy8A=/0x0:2879x1194/1200x800/filters:focal(865x329:1325x789)/cdn.vox-cdn.com/uploads/chorus_image/image/54825235/mantis.0.png',
        planet: 'Knowhere',
        powers: ['Telepathy','Healing factor','Master martial artist'],
        rating: 2,
        hasDedicatedMovie: false
    },
    {
        id: 19,
        name: 'Loki',
        description: 'He is the adopted brother and often the enemy of the superhero Thor. Loki is based on the Norse deity of the same name and is sometimes depicted as an antihero.',
        gender: 'M',
        imgUrl: 'https://metrouk2.files.wordpress.com/2016/08/loki_avengers-e1471093009466.png',
        planet: 'Asgard',
        powers: ['Master of manipulation and deceit','Illusion casting'],
        rating: 2,
        hasDedicatedMovie: false
    },
    {
        id: 20,
        name: 'Dr Strange',
        description: 'Doctor Strange serves as the Sorcerer Supreme, the primary protector of Earth against magical and mystical threats. Inspired by stories of black magic and Chandu the Magician, Strange was created during the Silver Age of Comic Books to bring a different kind of character and themes of mysticism to Marvel Comics.',
        gender: 'M',
        imgUrl: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn1us.denofgeek.com%2Fsites%2Fdenofgeekus%2Ffiles%2F2016%2F10%2Fdoctor-strange-1.jpg&f=1',
        planet: 'Earth',
        powers: ['Mastery of magic','IGenius-level intellect','Trained physician'],
        rating: 4,
        hasDedicatedMovie: true
    },

];

export default Avengers;