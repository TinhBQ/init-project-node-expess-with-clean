import type { Sequelize } from "sequelize";
import { degree as _degree } from "./degree";
import type { degreeAttributes, degreeCreationAttributes } from "./degree";
import { department as _department } from "./department";
import type { departmentAttributes, departmentCreationAttributes } from "./department";
import { doctor as _doctor } from "./doctor";
import type { doctorAttributes, doctorCreationAttributes } from "./doctor";
import { floor as _floor } from "./floor";
import type { floorAttributes, floorCreationAttributes } from "./floor";
import { medicine as _medicine } from "./medicine";
import type { medicineAttributes, medicineCreationAttributes } from "./medicine";
import { patient as _patient } from "./patient";
import type { patientAttributes, patientCreationAttributes } from "./patient";
import { patientSchedule as _patientSchedule } from "./patientSchedule";
import type { patientScheduleAttributes, patientScheduleCreationAttributes } from "./patientSchedule";
import { prescription as _prescription } from "./prescription";
import type { prescriptionAttributes, prescriptionCreationAttributes } from "./prescription";
import { remider as _remider } from "./remider";
import type { remiderAttributes, remiderCreationAttributes } from "./remider";
import { role as _role } from "./role";
import type { roleAttributes, roleCreationAttributes } from "./role";
import { room as _room } from "./room";
import type { roomAttributes, roomCreationAttributes } from "./room";
import { schedule as _schedule } from "./schedule";
import type { scheduleAttributes, scheduleCreationAttributes } from "./schedule";
import { session as _session } from "./session";
import type { sessionAttributes, sessionCreationAttributes } from "./session";
import { user as _user } from "./user";
import type { userAttributes, userCreationAttributes } from "./user";

export {
  _degree as degree,
  _department as department,
  _doctor as doctor,
  _floor as floor,
  _medicine as medicine,
  _patient as patient,
  _patientSchedule as patientSchedule,
  _prescription as prescription,
  _remider as remider,
  _role as role,
  _room as room,
  _schedule as schedule,
  _session as session,
  _user as user,
};

export type {
  degreeAttributes,
  degreeCreationAttributes,
  departmentAttributes,
  departmentCreationAttributes,
  doctorAttributes,
  doctorCreationAttributes,
  floorAttributes,
  floorCreationAttributes,
  medicineAttributes,
  medicineCreationAttributes,
  patientAttributes,
  patientCreationAttributes,
  patientScheduleAttributes,
  patientScheduleCreationAttributes,
  prescriptionAttributes,
  prescriptionCreationAttributes,
  remiderAttributes,
  remiderCreationAttributes,
  roleAttributes,
  roleCreationAttributes,
  roomAttributes,
  roomCreationAttributes,
  scheduleAttributes,
  scheduleCreationAttributes,
  sessionAttributes,
  sessionCreationAttributes,
  userAttributes,
  userCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const degree = _degree.initModel(sequelize);
  const department = _department.initModel(sequelize);
  const doctor = _doctor.initModel(sequelize);
  const floor = _floor.initModel(sequelize);
  const medicine = _medicine.initModel(sequelize);
  const patient = _patient.initModel(sequelize);
  const patientSchedule = _patientSchedule.initModel(sequelize);
  const prescription = _prescription.initModel(sequelize);
  const remider = _remider.initModel(sequelize);
  const role = _role.initModel(sequelize);
  const room = _room.initModel(sequelize);
  const schedule = _schedule.initModel(sequelize);
  const session = _session.initModel(sequelize);
  const user = _user.initModel(sequelize);

  doctor.belongsTo(degree, { as: "degree", foreignKey: "degree_id"});
  degree.hasMany(doctor, { as: "doctors", foreignKey: "degree_id"});
  doctor.belongsTo(department, { as: "department", foreignKey: "department_id"});
  department.hasMany(doctor, { as: "doctors", foreignKey: "department_id"});
  prescription.belongsTo(doctor, { as: "doctor", foreignKey: "doctor_id"});
  doctor.hasMany(prescription, { as: "prescriptions", foreignKey: "doctor_id"});
  room.belongsTo(floor, { as: "floor", foreignKey: "floor_id"});
  floor.hasMany(room, { as: "rooms", foreignKey: "floor_id"});
  prescription.belongsTo(medicine, { as: "medicine", foreignKey: "medicine_id"});
  medicine.hasMany(prescription, { as: "prescriptions", foreignKey: "medicine_id"});
  patientSchedule.belongsTo(patient, { as: "patient", foreignKey: "patient_id"});
  patient.hasMany(patientSchedule, { as: "patient-schedules", foreignKey: "patient_id"});
  prescription.belongsTo(patient, { as: "patient", foreignKey: "patient_id"});
  patient.hasMany(prescription, { as: "prescriptions", foreignKey: "patient_id"});
  remider.belongsTo(patient, { as: "patient", foreignKey: "patient_id"});
  patient.hasMany(remider, { as: "remiders", foreignKey: "patient_id"});
  user.belongsTo(role, { as: "role_role", foreignKey: "role"});
  role.hasMany(user, { as: "users", foreignKey: "role"});
  schedule.belongsTo(room, { as: "room", foreignKey: "room_id"});
  room.hasMany(schedule, { as: "schedules", foreignKey: "room_id"});
  patientSchedule.belongsTo(schedule, { as: "schedule", foreignKey: "schedule_id"});
  schedule.hasOne(patientSchedule, { as: "patient-schedule", foreignKey: "schedule_id"});
  schedule.belongsTo(session, { as: "session", foreignKey: "session_id"});
  session.hasMany(schedule, { as: "schedules", foreignKey: "session_id"});
  doctor.belongsTo(user, { as: "id_user", foreignKey: "id"});
  user.hasOne(doctor, { as: "doctor", foreignKey: "id"});
  patient.belongsTo(user, { as: "id_user", foreignKey: "id"});
  user.hasOne(patient, { as: "patient", foreignKey: "id"});

  return {
    degree: degree,
    department: department,
    doctor: doctor,
    floor: floor,
    medicine: medicine,
    patient: patient,
    patientSchedule: patientSchedule,
    prescription: prescription,
    remider: remider,
    role: role,
    room: room,
    schedule: schedule,
    session: session,
    user: user,
  };
}
