const list = [

    {name: "Rychard", vip: true},
    {name: "Julia", vip: true},
    {name: "Maria", vip: false},
    {name: "João", vip: false},
    {name: "Bruno", vip: false},
    {name: "Carla", vip: true},
    {name: "Ana", vip: false},
    {name: "Enzo", vip: true},
    {name: "Isa", vip: false},
    {name: "Felipe", vip: true},

];

const new_list = list.map( client => {
    const new_list = {
        name: client.name, 
        vip: client.vip, 
        sector: client.vip ? 'Black' : 'Green'
    }

    return new_list
})

console.log(new_list)