let stanza_num = 0
let thing = ['wheels', 'horn', 'babies', 'mommas', 'driver', 'wipers', 'highschoolers', 'kids', 'elderly', 'dog', 'engine']
let sound = ['honk honk honk', 'vroom vroom vroom', 'yo get out the way!', 'wah wah wah', 'skrt skrt skrt', 'shh shh shh',
          'back door!', 'move to the back!', 'swish swish swish', 'woof woof woof', 'excuse me']




function rand_range(maximum) {
    "use strict"
    return Math.floor(Math.random() * (maximum + 1))
}
function choose(array) {
    "use strict"
    return array[rand_range(array.length - 1)]
}
function stanza() {
    "use strict"
    let rand_thing = choose(thing)
    let rand_sound = choose(sound)
    return `<span style="color:transparent"> </span>The ${rand_thing}  on the bus goes ${rand_sound},  ${rand_sound}, ${rand_sound} 
    <br \>The  ${rand_thing}  on the bus goes  ${rand_sound}  All day long`
    
}
function litany() {
    "use strict"
    var last, main = document.getElementById('main')
    if (stanza_num < 5) {
        stanza_num += 1
    } else {
        main.removeChild(document.getElementById('main').firstChild)
    }
    last = document.createElement('div')
    last.innerHTML = stanza()
    main.appendChild(last)
}
function produce_litany() {
    "use strict"
    litany()
    setInterval(litany, 5000)
}