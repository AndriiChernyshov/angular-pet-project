import {Pot} from '../model/pot';

export interface BasicPotService {
    IsReadyForAction(pot: Pot): boolean;
    DoAction(pot: Pot): void;
    ResetStatus(pot: Pot): void;

    EmulateHistoricalAction(pot: Pot, actionDate: Date): void;

}
