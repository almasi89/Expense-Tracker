export const expenses =[
{
    "name":"netflix",
    "id":1,
    "description":"leisure",
    "category":"entertainment",
    "expense":200,
    "date":"14/4/2025"
},

{
    "name":"gym",
    "id":2,
    "description":"personal",
    "category":"health",
    "expense":200,
    "date":"15/4/2025"
},

{
    "name":"travel",
    "id":3,
    "description":"holiday",
    "category":"leisure",
    "expense":200,
    "date":"30/4/2025"
},
]
export const getNextId = ((id)=> () => ++id)(3);
