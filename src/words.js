const words = [
    {front: "that", back: "que"},
    {front: "of, from", back: "de"},
    {front: "no", back: "no"},
    {front: "to", back: "a"},
    {front: "the (for singular feminine nouns)", back: "la"},
    {front: "the (for singular masculine nouns)", back: "el"},
    {front: "he is, she is, it is (permanent characteristics)", back: "es"},
    {front: "and", back: "y"},
    {front: "in, on, at", back: "en"},
    {front: "it, him (direct object pronoun)", back: "lo"},
    {front: "a, an (for singular masculine nouns)", back: "un"},
    {front: "for, by, through", back: "por"},
    {front: "what / how (as in “how nice!”)", back: "qué"},
    {front: "me, myself", back: "me"},
    {front: "a, an (for singular feminine nouns)", back: "una"},
    {front: "you (direct-object pronoun)", back: "te"},
    {front: "the (for plural masculine nouns)" , back: "los"},
    {front: "himself, herself, itself", back: "se"},
    {front: "with", back: "con"},
    {front: "for, to", back: "para"},
    {front: "my", back: "mi"},
    {front: "he is, she is, it is (non-permanent characteristics)", back: "está"},
    {front: "if", back: "si"},
    {front: "well, good", back: "bien"},
    {front: "but", back: "pero"},
    {front: "I", back: "yo"},
    {front: "that", back: "eso"},
    {front: "the (for plural feminine nouns)", back: "las"},
    {front: "yes", back: "sí"},
    {front: "his, her, its", back: "su"},
    {front: "your", back: "tu"},
    {front: "here", back: "aquí"},
    {front: "of the, from the, in the", back: "del"},
    {front: "to the", back: "al"},
    {front: "how, as, like", back: "como"},
    {front: "him, her, formal you (indirect object pronoun)", back: "le"},
    {front: "more", back: "más"},
    {front: "this (for singular masculine nouns)", back: "esto"},
    {front: "already", back: "ya"},
    {front: "everything", back: "todo"},
    {front: "this one (for singular feminine nouns)", back: "esta"},
    {front: "let’s go, come on", back: "vamos"},
    {front: "very", back: "muy"},
    {front: "there is", back: "hay"},
    {front: "now", back: "ahora"},
    {front: "something", back: "algo"},
    {front: "I am (nonpermanent characteristics)", back: "estoy"},
    {front: "I have", back: "tengo"},
    {front: "us", back: "nos"},
    {front: "you", back: "tú"},
    {front: "nothing", back: "nada"},
    {front: "when", back: "cuando"},
    {front: "he has, she has, it has (auxiliary verb)", back: "ha"},
    {front: "this one (for singular masculine nouns)", back: "este"},
    {front: "I know", back: "sé"},
    {front: "you are (nonpermanent characteristics)", back: "estás"},
    {front: "like this", back: "así"},
    {front: "I can", back: "puedo"},
    {front: "how", back: "cómo"},
    {front: "I want", back: "quiero"},
    {front: "only, just", back: "sólo"},
    {front: "I am (permanent characteristics)", back: "soy"},
    {front: "he has, she has, it has", back: "tiene"},
    {front: "thank you", back: "gracias"},
    {front: "or", back: "o"},
    {front: "he", back: "él"},
    {front: "good", back: "bueno"},
    {front: "he was, she was, it was", back: "fue"},
    {front: "to be (for permanent characteristics)", back: "ser"},
    {front: "to do, to make", back: "hacer"},
    {front: "they are (for permanent characteristics)", back: "son"},
    {front: "all of us, all of them", back: "todos"},
    {front: "he was, she was, it was (permanent characteristics)", back: "era"},
    {front: "you are (permanent characteristics)", back: "eres"},
    {front: "time (as in “one time”)", back: "vez"},
    {front: "you have", back: "tienes"},
    {front: "I believe", back: "creo"},
    {front: "she", back: "ella"},
    {front: "I have (auxiliary)", back: "he"},
    {front: "that one", back: "ese"},
    {front: "I go", back: "voy"},
    {front: "he can, she can, it can", back: "puede"},
    {front: "you know", back: "sabes"},
    {front: "hello", back: "hola"},
    {front: "his, her, its (for plural nouns)", back: "sus"},
    {front: "because", back: "porque"},
    {front: "God", back: "Dios"},
    {front: "who", back: "quién"},
    {front: "never", back: "nunca"},
    {front: "where", back: "dónde"},
    {front: "you want", back: "quieres"},
    {front: "house", back: "casa"},
    {front: "favor", back: "favor"},
    {front: "that one (for singular feminine nouns)", back: "esa"},
    {front: "two", back: "dos"},
    {front: "so", back: "tan"},
    {front: "mister, sir", back: "señor"},
    {front: "time", back: "tiempo"},
    {front: "truth", back: "verdad"},
    {front: "I was (nonpermanent characteristics)", back: "estaba"},
]

export default words;

// 1 que that 
// 2 de of, from 
// 3 no no
// 4 a to
// 5 la the (for singular feminine nouns)
// 6 el the (for singular masculine nouns)
// 7 es he is, she is, it is (permanent characteristics)
// 8 y and
// 9 en in, on, at
// 10 lo it, him (direct object pronoun)
// 11 un a, an (for singular masculine nouns)
// 12 por for, by, through
// 13 qué what / how (as in “how nice!”)
// 14 me me, myself
// 15 una a, an (for singular feminine nouns)
// 16 te you (direct-object pronoun) 
// 17 los the (for plural masculine nouns)
// 18 se himself, herself, itself
// 19 con with
// 20 para for, to
// 21 mi my
// 22 está he is, she is, it is (non-permanent characteristics)
// 23 si if 
// 24 bien well, good
// 25 pero but
// 26 yo I 
// 27 eso that
// 28 las the (for plural feminine nouns)
// 29 sí yes
// 30 su his, her, its
// 31 tu your 
// 32 aquí here
// 33 del of the, from the, in the
// 34 al to the 
// 35 como how, as, like 
// 36 le him, her, formal you (indirect object pronoun)
// 37 más more
// 38 esto this (for singular masculine nouns)
// 39 ya already
// 40 todo everything
// 41 esta this one (for singular feminine nouns)
// 42 vamos let’s go, come on
// 43 muy very
// 44 hay there is
// 45 ahora now 
// 46 algo something
// 47 estoy I am (nonpermanent characteristics)
// 48 tengo I have 
// 49 nos us
// 50 tú you 
// 51 nada nothing 
// 52 cuando when 
// 53 ha he has, she has, it has (auxiliary verb)
// 54 este this one (for singular masculine nouns)
// 55 sé I know 
// 56 estás you are (nonpermanent characteristics)
// 57 así like this 
// 58 puedo I can 
// 59 cómo how 
// 60 quiero I want 
// 61 sólo only, just 
// 62 soy I am (permanent characteristics)
// 63 tiene he has, she has, it has
// 64 gracias thank you 
// 65 o or
// 66 él he
// 67 bueno good 
// 68 fue he was, she was, it was
// 69 ser to be (for permanent characteristics)
// 70 hacer to do, to make
// 71 son they are (for permanent characteristics)
// 72 todos all of us, all of them 
// 73 era he was, she was, it was (permanent characteristics)
// 74 eres you are (permanent characteristics)
// 75 vez time (as in “one time”)
// 76 tienes you have 
// 77 creo I believe 
// 78 ella she 
// 79 he I have (auxiliary) 
// 80 ese that one 
// 81 voy I go 
// 82 puede he can, she can, it can
// 83 sabes you know 
// 84 hola hello 
// 85 sus his, her, its (for plural nouns)
// 86 porque because
// 87 Dios God 
// 88 quién who 
// 89 nunca never 
// 90 dónde where 
// 91 quieres you want
// 92 casa house
// 93 favor favor 
// 94 esa that one (for singular feminine nouns)
// 95 dos two 
// 96 tan so 
// 97 señor mister, sir
// 98 tiempo time 
// 99 verdad truth 
// 100 estaba I was (nonpermanent characteristics)