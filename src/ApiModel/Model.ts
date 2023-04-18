export interface Root {
  teamsList: TeamsList[];
  playerList: PlayerList[];
}

export interface TeamsList {
  TID: string;
  WebName: string;
  IsActive: string;
  ShortName: string;
  OfficialName: string;
}

export interface PlayerList {
  CS: number;
  GC: number;
  GS: number;
  Id: string;
  OG: number;
  PC: number;
  PE: number;
  PM: number;
  PS: number;
  RC: number;
  YC: number;
  TID: string;
  GDID: string;
  LSCS: number;
  LSGC: number;
  LSGS: number;
  LSOG: number;
  LSPC: number;
  LSPE: number;
  LSPM: number;
  LSPS: number;
  LSRC: number;
  LSYC: number;
  CCode: string;
  Saves: number;
  Skill: number;
  TName: string;
  Value: string;
  Assist: number;
  Injury: string;
  PDName: string;
  PFName: string;
  SelPer: string;
  TSCode: string;
  TotPts: number;
  CurGDID: number;
  CurGDNo: number;
  LSSaves: number;
  PStatus: string;
  Trained: string;
  AwayGoal: string;
  CurGDPts?: string;
  IsActive: number;
  IsPlayed: number;
  LSAssist: number;
  MatchAtd: string;
  MinsPlyd: number;
  SelInPer: string;
  AvbStatus: number;
  PenaltyGS: number;
  SelCapPer: string;
  SelOutPer: string;
  SkillDesc: string;
  TOfflName: string;
  LSMinsPlyd: number;
  PStatusdrp: any;
  IsPValueEdit: any;
  IsValidPlayer: number;
  IsInFinalSquad: string;
  IsValidPlayerDesc: any;
  UpComingMatchesList: UpComingMatchesList[];
}

export interface UpComingMatchesList {
  TID: string;
  TLoc?: string;
  CCode: string;
  MDate: string;
  VsTID: string;
  TSCode: string;
  VsTLoc?: string;
  VsCCode: string;
  VsTSCode: string;
}
