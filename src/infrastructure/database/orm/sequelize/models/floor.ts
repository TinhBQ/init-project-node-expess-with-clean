import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { room, roomId } from './room';

export interface floorAttributes {
  id: string;
  name?: string;
  create_at?: Date;
  update_at?: Date;
  enable?: boolean;
}

export type floorPk = "id";
export type floorId = floor[floorPk];
export type floorOptionalAttributes = "name" | "create_at" | "update_at" | "enable";
export type floorCreationAttributes = Optional<floorAttributes, floorOptionalAttributes>;

export class floor extends Model<floorAttributes, floorCreationAttributes> implements floorAttributes {
  id!: string;
  name?: string;
  create_at?: Date;
  update_at?: Date;
  enable?: boolean;

  // floor hasMany room via floor_id
  rooms!: room[];
  getRooms!: Sequelize.HasManyGetAssociationsMixin<room>;
  setRooms!: Sequelize.HasManySetAssociationsMixin<room, roomId>;
  addRoom!: Sequelize.HasManyAddAssociationMixin<room, roomId>;
  addRooms!: Sequelize.HasManyAddAssociationsMixin<room, roomId>;
  createRoom!: Sequelize.HasManyCreateAssociationMixin<room>;
  removeRoom!: Sequelize.HasManyRemoveAssociationMixin<room, roomId>;
  removeRooms!: Sequelize.HasManyRemoveAssociationsMixin<room, roomId>;
  hasRoom!: Sequelize.HasManyHasAssociationMixin<room, roomId>;
  hasRooms!: Sequelize.HasManyHasAssociationsMixin<room, roomId>;
  countRooms!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof floor {
    return floor.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    create_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    update_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    enable: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'floor',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "floor_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
