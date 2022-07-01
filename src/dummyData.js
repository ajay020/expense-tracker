let expenseList = [
    {   id:1,
        date :"2022-06-21",
        categories :[
            {
                type:"food",
                items :[
                    {title:"Milk", price: 10.00},
                    {title:"Fruits", price: 30.10},
                    {title:"Vegitables", price: 20.25}
                ]
            },
            {
                type:"Clothes",
                items :[
                    {title:"Shirt", price: 100.10},
                    {title:"Jeans", price: 200.20},
                    {title:"Shoes", price: 800.00}
                ]
            },
            {
                type:"Entertainment",
                items :[
                    {title:"Netflix", price: 10},
                    {title:"Movie", price: 400},
                ]
            }
        ]
    },
    {
        id:2,
        date :"2022-06-25",
        categories :[
            {
                type:"Transport",
                items :[
                    {title:"Cab", price: 60},
                    {title:"Train", price: 100},
                ]
            },
            {
                type:"Health",
                items :[
                    {title:"Medicine", price: 200},
                    {title:"Health insurance", price: 100},
                ]
            },
            {
                type:"Bills",
                items :[
                    {title:"Light", price: 20},
                    {title:"Newspaper", price: 30},
                ]
            }
        ]
    },
    {
        id:3,
        date :"2022-06-29",
        categories :[
            {
                type:"Pets",
                items :[
                    {title:"Food", price: 40},
                    {title:"Rope", price: 140},
                ]
            },
            
        ]
    }
];

export default expenseList;