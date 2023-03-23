import { Sequelize } from "sequelize";

const sequelize= new Sequelize(
    "express_blog",
    "root",
    "",{
        host:"localhost",
        dialect:"mysql",
        define:{
            freezeTableName:true,
        
    }
    },
       
);
sequelize.authenticate().then(()=>{
    console.log("successfuly logged to the db");
}).catch((e)=>{
    console.log(e);
})

const Post= sequelize.define("post",{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type:Sequelize.STRING
    },
    body:{
        type:Sequelize.STRING
    },
    createdAt:{
        type:Sequelize.DATE
    },
    updatedAt:{
        type:Sequelize.DATE
    }

});
sequelize.sync();
export {Post}