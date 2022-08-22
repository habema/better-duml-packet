export interface PacketOptions {
  raw?: Buffer;

  version?: number;
  length?: number;
  crcHead?: number;

  sourceRaw?: number;
  sourceType?: DeviceType;
  sourceIndex?: number;

  destinationRaw?: number;
  destinationType?: number;
  destinationIndex?: number;

  sequenceID?: number;

  commandTypeRaw?: number;
  commandType?: CommandType;
  ackType?: AckType;
  encryptionType?: EncryptionType;

  commandSet?: number;
  command?: number;
  commandPayload?: Buffer;

  crc?: number;
}

export enum DeviceType {
  ANY,
  CAMERA,
  MOBILE_APP,
  FLIGHT_CONTROLLER,
  GIMBAL,
  MAIN_BOARD,
  REMOTE_RADIO,
  WIFI_SKY,
  LB_DM3XX_SKY, // ve_air
  LB_MCU_SKY,
  PC,
  BATTERY,
  ESC,
  DM368_GROUND,
  OFDM_GROUND,
  LB_68013_SKY,
  SER_68013_GROUND,
  MVO,
  SVO,
  LB_FPGA_SKY,
  FPGA_GROUND,
  FPGA_SIMULATION,
  BASE_STATION,
  XU,
  REMOTE_BATTERY,
  IMU,
  GPS,
  WIFI_GROUND,
  SIG_CVT,
  PMU,
  UKNOWN_30,
  WM330_OR_WM220,
}

export enum CommandType {
  REQUEST,
  ACK,
}

export enum AckType {
  NO_ACK,
  PUSH, // "ACK Before Exec"
  ACK,
  RESPONSE,
}

export enum EncryptionType {
  NONE,
  AES_128,
  SELF_DEF,
  XOR,
  DES_56,
  DES_112,
  AES_192,
  AES_256,
}

export enum SetType {
  GENERAL,
  SPECIAL,
  CAMERA,
  FLIGHT_CONTROLLER,
  GIMBAL,
  CENTER_BOARD,
  RADIO,
  WIFI,
  DM368,
  HD_MAP,
  VPS_AVOID,
  SIM,
  ORDER,
  BATTERY,
  DATA_RECORDER,
  RTK,
  AUTOTEST,
  UNKNOWN_17,
  UNKNOWN_18,
  UNKNOWN_19,
  UNKNOWN_20,
  UNKNOWN_21,
  UNKNOWN_22,
  UNKNOWN_23,
  UNKNOWN_24,
  UNKNOWN_25,
  UNKNOWN_26,
  UNKNOWN_27,
  UNKNOWN_28,
  UNKNOWN_29,
  UNKNOWN_30,
  UNKNOWN_31,
}

import { DumlPacket } from './packet';

export type Packet = DumlPacket;
