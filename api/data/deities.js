const deities = [
    /**
     * Human primary deities of the setting
     */
    {
        id: 101, 
        name: "Deus Sol Invictus",
        title: "The Unconquered Sun",
        category: "Gods of Ettra", 
        alignment: "LG",
        followers: ["LG ", "LN"],
        font: ["Heal"],
        skill: "Society",
        domains: ["Fire", "Perfection", "Sun", "Cities"],
        weapon: "Spear",
        story: `As the primary deity of humans living in the Sol Empire, He is associated with every aspect of human life.
        His temples can be found in almost every city of Solian Empire.
        Most celebrations occur during the dawn which is when He is believed to be most present.`,
        edicts: ["Master and perfect yourself", "Protect human built civilization", "Praise the sun"],
        anathema: ["Worship darkness", "Destroy a human city", "Disobey the emperor"],
        areas: ["Cities", "Law", "Humans", "Civilization"],
        spells: {
            "1st": "Command",
            "4th": "Fire Shield",
            "7th": "Deity's Strike"
        },
    },
    {
        id: 102, 
        name: "Aurelian", 
        title: "Restitutor Orbis",
        category: "Gods of Ettra", 
        alignment: "LG",
        followers: ["LG", "LN"],
        font: ["Heal"],
        skill: "Athletics",
        domains: ["Zeal", "Duty", "Might"],
        weapon: "Shortsword",
        story: `As a young man he served his empire with talent and skill never seen before.
        Emperor after emperor he served, killing barbarians and traitors alike, always loyal and victorious.
        He was adopted by the Emperor and succeeded him shortly there after.
        After only 5 years of rule the Black Death crisis happened and the Empire was put in chaos.
        He with his companions ventured into the Deadlands to stop the rising threat of undead.
        No one knows what truly happened in the Deadlands but the Black Death was stopped.
        Aurelian returned home, and continued to rule his people.
        After a long and prosperous rule, he left Ettra and joined the Gods 
        as an aspect of Deus Sol Invictus.
        Hailed as The Restorer of the World he is worshipped before and after battles.`,
        edicts: ["Protect civilization from barbarians", "Destroy undead"],
        anathema: ["Destroy a human city", "Flee like a coward"],
        areas: ["Battlefield", "Army", "Law"],
        spells: {
            "1st": "True Strike",
            "3rd": "Haste",
            "9th": "Overwhelmin Presence"
        },
    },
    /**
     * Elven primary deity of the setting
     */
    {
        id: 103, 
        name: "Ariel", 
        title: "The Queen in the Woods",
        category: "Gods of Ettra", 
        alignment: "CN",
        followers: ["CG", "CN", "CE"],
        font: ["Heal", "Harm"],
        skill: "Nature",
        domains: ["Magic", "Nature", "Dreams", "Nightmare"],
        weapon: "Longbow",
        story: `As the leader of elves and fey creatures of Athel Loren Ariel has watched over 
        her people as long as the any elf can remember. Viewing the forest of Loren the only
        thing that matters she handled all foreign diplomacy with great ire. This all changed when
        the Black Death happened and the Primal Well of Athel Loren suddenly appeared. The well 
        granted her foresight and she joined up with Aurelian to stop the undead menace of the 
        Deadlands. Returning from the expedition she claimed back the throne of Athel Loren.
        She used the her abilities and the Primal Well to ascend to Godhood.
        She continues to rule the forest of Athel Loren as the Queen in the Woods while adopting a
        more interventionist view of the world. She is the primary deity for the folk of Athel Loren
        and she is also worshipped by hunters and gatherers alike. The Priesthood of Ariel has 
        spread across the western parts of Europa and her priests often serve as herbalists and
        healers.`,
        edicts: ["Protect Athel Loren and forests", "Use magic to aid people", "Kill demons"],
        anathema: ["Converse with daemons", "Hunt inside Athel Loren", "Destroy forests"],
        areas: ["Forests", "Magic", "Elves"],
        spells: {
            "1st": "Ill Omen",
            "2nd": "Barkskin",
            "3rd": "Vampiric Touch",
            "4th": "Nightmare",
            "5th": "Lightning Storm",
            "6th": "Raise Dead",
            "7th": "Possession",
            "8th": "Earthquake",
            "9th": "Nature's Enmity"
        },
    },
    /**
     * Dwarven primary deities of the setting
     */
    {
        id: 104, 
        name: "Grimnir", 
        title: "The Fearless",
        category: "Gods of Ettra", 
        alignment: "LN",
        followers: ["LG", "LN", "NG"],
        font: ["Heal", "Harm"],
        skill: "Athletics",
        domains: ["Duty", "Might", "Zeal"],
        weapon: "Dwarven War Axe",
        story: `Grimnir is the father of Morgrim and Thorgrim. As the leader of a great Karak Khorum he answered the call when Aurelian
        asked for his assistance in the Deadlands. He was joined by his two sons and together they ventured out into
        the Deadlands. Nobody knows what happened there but after a while, Black Death ended and Thorgrim and Morgrim returned
        to rule the Karak they fought so hard after. After a while Grimnir appeared to his sons and he was elevated to a God.
        Unlike other Gods, Grimnir doesn't want a traditional clergy. His followers come in the form of soldiers.
        There are no specific holy days to Grimnir. Festivals to Grimnir take place before battle, and after a victory.`,
        edicts: ["Always assist a fallen comrade-in-arms", "Slay as many Dwarf enemies as possible"],
        anathema: ["Let a slight go unanswered", "Back down from a fight"],
        areas: ["Warfare", "Personal combat", "Dwarves"],
    },
    {
        id: 105, 
        name: "Morgrim", 
        title: "The Master Mining and Crafting",
        category: "Gods of Ettra", 
        alignment: "NG",
        followers: ["LG", "NG", "CG"],
        font: ["Heal"],
        skill: "Crafting",
        domains: ["Creation", "Perfection", "Glyph"],
        weapon: "Clan Pistol",
        story: `Morgrim is the oldest son of Grimnir. Like many dwarves he was blessed with a talent for mining and crafting. It is believed 
        that most of the advanced technologies that dwarves use were created by Morgrim. When his father was called by Aurelian he 
        and his brother Thorgrim insisted that they could join. After the expedition into the Deadlands, Morgrim and his brother returned
        home without their father. They assumed rulership of Karak Khorum and after a lengthy rule he ascended to demigodhood as the 
        Master of Mining and Crafting. Morgrim is venerated by miners and craftsmen and his priests usually work as craftsmen. His 
        temples are everywhere around the various Karaks of Europa taking form in workshops and churches.`,
        edicts: ["Create things that last", "Learn and master a trade"],
        anathema: ["Destroy somebody elses work", "Purposefully create shoddy work"],
        areas: ["Artisan", "Crafting"],
    },
    {
        id: 106, 
        name: "Thorgrim", 
        title: "The Master of Law",
        category: "Gods of Ettra", 
        alignment: "LG",
        followers: ["LG", "NG", "LN"],
        font: ["Heal"],
        skill: "Society",
        domains: ["Cities", "Duty", "Family", "Wealth"],
        weapon: "Crossbow",
        story: `Thorgrim is the youngest son of Grimnir. Unlike his brother Morgrim, Thorgrim was more interested in studying and learning
        theoretical matters of the world. He grew to be an exceptional administrator and lawmaker. When his father was called by 
        Aurelian he and his brother Morgrim insisted that they could join. After the expedition into the Deadlands, Thorgrim and 
        his brother returned home without their father. They assumed rulership of Karak Khorum and after a lengthy rule he 
        ascended to demigodhood as the Master of Law. Thorgrim is venerated by administrators, judges and police alike. Many of 
        the priests work as administrators and judges in Karaks. His temples consist of courthouses and traveling magistrates.`,
        edicts: ["Follow the Law", "Protect your family"],
        anathema: ["Tell a lie", "Obstruct justice", "Dishonor your family"],
        areas: ["Law", "Court", "Rulership"],
    },
    
]

module.exports = deities;