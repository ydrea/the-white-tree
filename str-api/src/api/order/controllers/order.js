'use strict';

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order'
, ({strapi}) => ({
    confirmOrder: async (ctx, next) => {    
        const {id} = ctx.request.params
    console.log(id);
    },
    // update order
    confirmOrder: async (ctx, next) => {
        const {id} = ctx.request.params
const user = ctx.state.user
        const order = await strapi.entityService.update("api::order.order", id, {
            data: {
              confirmed: true,
              confirmation_date: new Date()
            }
        }) 
        return {message: 'confirmed'}
      },
  

    // create order
      // customizing the create controller
      async create(ctx, next){
        // get user from context
        const user = ctx.state.user
        // get request body data from context
        const { products } = ctx.request.body.data
        console.log(products);

        // use the create method from Strapi enitityService
        const order = await strapi.entityService.create("api::order.order", {
            data: {
              products,
              // pass in the owner id to define the owner
              owner: user.id
            }
          })
          return { order }
        },
// // //confirm order
//       confirmOrder: async (ctx, next) => {
//         const {id} = ctx.request.params
// const user = ctx.state.user
//         const order = await strapi.entityService.findOne("api::order.order", id, {
//             data: {
//               confirmed: true,
//               confirmation_date: new Date()
//             }
//         }) 
//         return {message: 'confirmed'}
//       },
  }));
