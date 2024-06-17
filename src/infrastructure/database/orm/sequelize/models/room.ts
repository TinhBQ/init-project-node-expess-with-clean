import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { floor, floorId } from './floor';
import type { schedule, scheduleId } from './schedule';

export interface roomAttributes {
  id: string;
  name?: string;
  floor_id?: string;
  create_at?: Date;
  update_at?: Date;
  enable?: boolean;
}

export type roomPk = "id";
export type roomId = room[roomPk];
export type roomOptionalAttributes = "name" | "floor_id" | "create_at" | "update_at" | "enable";
export type roomCreationAttributes = Optional<roomAttributes, roomOptionalAttributes>;

export class room extends Model<roomAttributes, roomCreationAttributes> implements roomAttributes {
  id!: string;
  name?: string;
  floor_id?: string;
  create_at?: Date;
  update_at?: Date;
  enable?: boolean;

  // room belongsTo floor via floor_id
  floor!: floor;
  getFloor!: Sequelize.BelongsToGetAssociationMixin<floor>;
  setFloor!: Sequelize.BelongsToSetAssociationMixin<floor, floorId>;
  createFloor!: Sequelize.BelongsToCreateAssociationMixin<floor>;
  // room hasMany schedule via room_id
  schedules!: schedule[];
  getSchedules!: Sequelize.HasManyGetAssociationsMixin<schedule>;
  setSchedules!: Sequelize.HasManySetAssociationsMixin<schedule, scheduleId>;
  addSchedule!: Sequelize.HasManyAddAssociationMixin<schedule, scheduleId>;
  addSchedules!: Sequelize.HasManyAddAssociationsMixin<schedule, scheduleId>;
  createSchedule!: Sequelize.HasManyCreateAssociationMixin<schedule>;
  removeSchedule!: Sequelize.HasManyRemoveAssociationMixin<schedule, scheduleId>;
  removeSchedules!: Sequelize.HasManyRemoveAssociationsMixin<schedule, scheduleId>;
  hasSchedule!: Sequelize.HasManyHasAssociationMixin<schedule, scheduleId>;
  hasSchedules!: Sequelize.HasManyHasAssociationsMixin<schedule, scheduleId>;
  countSchedules!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof room {
    return room.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    floor_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'floor',
        key: 'id'
      }
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
    tableName: 'room',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "room_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
