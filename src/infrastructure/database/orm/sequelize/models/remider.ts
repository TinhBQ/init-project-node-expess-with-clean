import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { patient, patientId } from './patient';

export interface remiderAttributes {
  id: string;
  patient_id?: string;
  medicine_name?: string;
  time?: string;
  count?: number;
  create_at?: Date;
  update_at?: Date;
  enable?: boolean;
}

export type remiderPk = "id";
export type remiderId = remider[remiderPk];
export type remiderOptionalAttributes = "patient_id" | "medicine_name" | "time" | "count" | "create_at" | "update_at" | "enable";
export type remiderCreationAttributes = Optional<remiderAttributes, remiderOptionalAttributes>;

export class remider extends Model<remiderAttributes, remiderCreationAttributes> implements remiderAttributes {
  id!: string;
  patient_id?: string;
  medicine_name?: string;
  time?: string;
  count?: number;
  create_at?: Date;
  update_at?: Date;
  enable?: boolean;

  // remider belongsTo patient via patient_id
  patient!: patient;
  getPatient!: Sequelize.BelongsToGetAssociationMixin<patient>;
  setPatient!: Sequelize.BelongsToSetAssociationMixin<patient, patientId>;
  createPatient!: Sequelize.BelongsToCreateAssociationMixin<patient>;

  static initModel(sequelize: Sequelize.Sequelize): typeof remider {
    return remider.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    patient_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'patient',
        key: 'id'
      }
    },
    medicine_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    time: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    count: {
      type: DataTypes.INTEGER,
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
    tableName: 'remider',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "remider_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
