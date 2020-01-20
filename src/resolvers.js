const axios = require("axios");

module.exports = {
    Query: {

        resturants2:  (_, {  }, { dataSources }) => {

        
            return axios("https://api.myjson.com/bins/xucm2")
            .then((response) => {
                console.log(response);
                return response.data.resturants;
            });;

        },
        resturants: async (_, {  }, { dataSources }) => {

            // let restaurantsData;

            const response = await axios("https://api.myjson.com/bins/xucm2")
            .then((response) => {
                console.log(response);
                return response.data.resturants;
            });

            return response;



            // return await axios("https://api.myjson.com/bins/xucm2");

            // console.log(restaurantsData);

            /*return [{
                id: "ID!",
                name: "String",
                image: "String",
                rating: "Int",
                isOpen: "Boolean",
            }]*/
            // return restaurantsData;
            /*return {
                id: response.id,
                description:response.name
            }*/
        }
    },
    Mutation: {
        login: async (_, {email, password  }, { dataSources }) => {
            console.log(email, password);
            return true;
        }
    }
};
