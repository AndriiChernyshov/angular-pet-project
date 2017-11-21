import { Injectable } from '@angular/core';
import { BasicPotService } from './basic-pot-service';
import { FertilizationType } from '../model/enum/fertilization-type.enum';
import { Pot } from '../model/pot';
import * as moment from 'moment';

@Injectable()
export class FertilizatingPotService implements BasicPotService {

  IsReadyForAction(pot: Pot): boolean {
            const potStatus = pot.GetPotStatus();
            if (potStatus === null || potStatus.fertilizationDate === null || potStatus.fertilizationDate === undefined) {
                return true;
            }
            if (FertilizationType.Day && moment(potStatus.fertilizationDate).startOf('day') < moment(new Date()).startOf('day')) {
                return true;
            }

            if (FertilizationType.Week &&
                (moment(potStatus.fertilizationDate).add(7, 'days')).startOf('day') < moment(new Date()).startOf('day')) {
                return true;
            }

            if (FertilizationType.Month &&
                (moment(potStatus.fertilizationDate).add(30, 'days')).startOf('day') < moment(new Date()).startOf('day')) {
                return true;
            }

            return false;
        }

        DoAction(pot: Pot): void {
            if (this.IsReadyForAction(pot)) {
                pot.GetPotStatus().fertilizationDate = new Date();
            } else {
                console.log('Plant ' + pot.GetName() + ' is not ready for fertilization');
            }
        }

        ResetStatus(pot: Pot): void {
            pot.GetPotStatus().fertilizationDate = undefined;
        }

        EmulateHistoricalAction(pot: Pot, actionDate: Date): void {
            pot.GetPotStatus().fertilizationDate = actionDate;
        }

}
