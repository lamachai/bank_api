import sequelize from "../db/db.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("User", {
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Gender: {
        type: DataTypes.ENUM("MALE", "FEMALE"),
        allowNull: false
        
    },
    bornDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    profession: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status:{
        type: DataTypes.ENUM('0', '1'),
        defaultValue: '1',
        allowNull: false
    }
});

const Account = sequelize.define("Account", {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    accountType:{
        type: DataTypes.ENUM("STANDARD ACCOUNT", "SAVINGS ACCOUNT"),
        defaultValue: "STANDARD ACCOUNT",
        allowNull: false
    }
    ,
    balance: {
        type: DataTypes.DOUBLE,
        defaultValue: 0.0,
        allowNull: false
    }
});

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
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
});

Account.hasOne(Transfer, {
    foreignKey: "fromAccount",
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT"
});

Account.hasOne(Transfer, {
    foreignKey: "toAccount",
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT"
});

export { sequelize }