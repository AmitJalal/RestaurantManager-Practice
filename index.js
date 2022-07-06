// Restaurant Manager

class restaurantManager {

    //Array of Object
    restaurantList = [{

        //Restaurant Objects -> name, address, city
        id: 1,
        restaurantName: 'Punjabi Tadka',
        address: 'Civil Lines',
        city: 'Delhi'
        
    },
    {
        id: 2,
        restaurantName: 'Dominos',
        address: 'Shubash Nagar',
        city: 'Haldwani'
    },
    {
        id: 3,
        restaurantName: 'Burger King',
        address: 'Kamla Nagar',
        city: 'Delhi'
    },
    {
        id: 4,
        restaurantName: 'Chingari',
        address: 'Bund Garden Road',
        city: 'Pune'
    },
    {
        id: 5,
        restaurantName: 'KFC',
        address: 'Anand Vihar',
        city: 'Delhi'
    }];


    //Fn for printing Restaurant Names

    printAllRestaurantNames = () => {
        return this.restaurantList.map(restaurant => restaurant.restaurantName);
    }

    //Fn for filtering Restaurant Names by city 
    filterRestaurantsByCity = (cityname) => {
        return this.restaurantList.filter(restaurant => restaurant.city == cityname);
    }
}

const restaurantObject = new restaurantManager();

const output1 = restaurantObject.printAllRestaurantNames();
console.log(output1);

console.log(restaurantObject.filterRestaurantsByCity("Delhi"));

orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
};

//Total no. of orders

const total = Object.values(orderData).reduce((prev, next) => prev + next);
console.log(total);

//Order proportion

const headers = Object.keys(orderData);
console.log(headers);

// % of order proportion
let arr = [];
const response = headers.map((item, index) => {
    const obj = {
        'id': index + 1,
        'order': item,
        'orderpercentage': ((orderData[item] / total) * 100).toFixed(2),
        'restaurant': 'Punjabi Tadka'
    }
    arr.push(obj);
})

console.log(arr);
