import sequelize from "../db/db.js";
import { DataTypes } from "sequelize";


//users of the bank
const User = sequelize.define("User", {
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    gender: {
        type: DataTypes.ENUM("MALE", "FEMALE"),
        allowNull: false
        
    },
    profession: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status:{
        type: DataTypes.ENUM('0', '1'),
        defaultValue: '1',
    }
});


//the bank account
const Account = sequelize.define("Account", {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    accountType:{
        type: DataTypes.ENUM("STANDARD ACCOUNT", "SAVINGS ACCOUNT"),
        defaultValue: "STANDARD ACCOUNT",
        allowNull: false
    }
    ,
    balance: {
        type: DataTypes.DOUBLE,
        defaultValue: 0.0
    }
});

//all the transfers history
const Transfer = sequelize.define("Transfer", {
    fromAccount:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    toAccount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ammount:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },

    tax:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },

    description: {
        type: DataTypes.STRING,
        allowNull: true,
    }
});

User.hasOne(Account, {
    foreignKey: "userId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

Account.hasOne(Transfer, {
    foreignKey: "fromAccount",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

Account.hasOne(Transfer, {
    foreignKey: "toAccount",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

export { sequelize, User, Account, Transfer }